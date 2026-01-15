import { NextRequest, NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = 'mslugga35';
const GITHUB_REPO = 'r2g-academy';

// Sanitize string for safe code injection
function sanitizeForCode(str: string): string {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\\\')  // Escape backslashes first
    .replace(/'/g, "\\'")     // Escape single quotes
    .replace(/"/g, '\\"')     // Escape double quotes
    .replace(/\n/g, '\\n')    // Escape newlines
    .replace(/\r/g, '\\r')    // Escape carriage returns
    .replace(/\t/g, '\\t');   // Escape tabs
}

// Validate slug format (URL-safe characters only)
function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

// Sanitize content for template literal
function sanitizeForTemplateLiteral(str: string): string {
  if (!str) return '';
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');
}

async function getFileContent(path: string): Promise<{ content: string; sha: string } | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (!res.ok) return null;

    const data = await res.json();
    const content = Buffer.from(data.content, 'base64').toString('utf8');
    return { content, sha: data.sha };
  } catch {
    return null;
  }
}

async function updateFile(path: string, content: string, sha: string, message: string): Promise<boolean> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          content: Buffer.from(content).toString('base64'),
          sha,
          committer: {
            name: 'mslugga35',
            email: '200022958+mslugga35@users.noreply.github.com',
          },
        }),
      }
    );

    return res.ok;
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  // Verify API key exists
  if (!process.env.BLOG_API_KEY) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  // Verify API key matches
  const apiKey = request.headers.get('x-api-key');
  if (!apiKey || apiKey !== process.env.BLOG_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Verify GitHub token exists
  if (!GITHUB_TOKEN) {
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { slug, title, excerpt, category, topics, date, readTime, content } = body;

    // Validate required fields
    if (!slug || !title || !content) {
      return NextResponse.json({ error: 'Missing required fields: slug, title, content' }, { status: 400 });
    }

    // Validate slug format
    if (!isValidSlug(slug)) {
      return NextResponse.json({
        error: 'Invalid slug format. Use lowercase letters, numbers, and hyphens only.'
      }, { status: 400 });
    }

    // Validate field lengths
    if (slug.length > 100 || title.length > 200 || (excerpt && excerpt.length > 500)) {
      return NextResponse.json({ error: 'Field length exceeds maximum' }, { status: 400 });
    }

    // Sanitize inputs
    const safeSlug = slug.toLowerCase().trim();
    const safeTitle = sanitizeForCode(title.trim());
    const safeExcerpt = sanitizeForCode((excerpt || '').trim());
    const safeCategory = sanitizeForCode((category || 'Training').trim());
    const safeTopics = sanitizeForCode((topics || '').trim());
    const safeDate = sanitizeForCode((date || new Date().toISOString().split('T')[0]).trim());
    const safeReadTime = sanitizeForCode((readTime || '5 min read').trim());
    const safeContent = sanitizeForTemplateLiteral(content);

    const results: { file: string; success: boolean }[] = [];

    // 1. Update blog/page.tsx
    const blogPage = await getFileContent('src/app/blog/page.tsx');
    if (blogPage) {
      const newEntry = `  {
    slug: '${safeSlug}',
    title: '${safeTitle}',
    excerpt: '${safeExcerpt}',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    date: '${safeDate}',
    readTime: '${safeReadTime}',
    category: '${safeCategory}',
  },`;

      const updatedBlogPage = blogPage.content.replace(
        /const blogPosts = \[/,
        `const blogPosts = [\n${newEntry}`
      );

      const success = await updateFile('src/app/blog/page.tsx', updatedBlogPage, blogPage.sha, `Add blog: ${title.substring(0, 50)}`);
      results.push({ file: 'blog/page.tsx', success });
    }

    // 2. Update [slug]/page.tsx
    const slugPage = await getFileContent('src/app/blog/[slug]/page.tsx');
    if (slugPage) {
      const newContentEntry = `  '${safeSlug}': \`
${safeContent}
\`,`;

      const updatedSlugPage = slugPage.content.replace(
        /const blogContent: Record<string, string> = \{/,
        `const blogContent: Record<string, string> = {\n${newContentEntry}`
      );

      const success = await updateFile('src/app/blog/[slug]/page.tsx', updatedSlugPage, slugPage.sha, `Add blog content: ${title.substring(0, 50)}`);
      results.push({ file: '[slug]/page.tsx', success });
    }

    // 3. Update sitemap.ts
    const sitemap = await getFileContent('src/app/sitemap.ts');
    if (sitemap) {
      const updatedSitemap = sitemap.content.replace(
        /const blogPosts = \[/,
        `const blogPosts = [\n    '${safeSlug}',`
      );

      const success = await updateFile('src/app/sitemap.ts', updatedSitemap, sitemap.sha, `Add ${safeSlug} to sitemap`);
      results.push({ file: 'sitemap.ts', success });
    }

    // 4. Update llm.txt
    const llm = await getFileContent('public/llm.txt');
    if (llm) {
      const llmEntry = `
#### ${title.trim()}
URL: /blog/${safeSlug}
Topics: ${(topics || '').trim()}
Summary: ${(excerpt || '').trim()}`;

      const updatedLlm = llm.content.replace(
        /## Citation Guidelines/,
        `${llmEntry}\n\n## Citation Guidelines`
      );

      const success = await updateFile('public/llm.txt', updatedLlm, llm.sha, `Add ${safeSlug} to llm.txt`);
      results.push({ file: 'llm.txt', success });
    }

    const allSuccessful = results.every(r => r.success);
    const failedFiles = results.filter(r => !r.success).map(r => r.file);

    if (!allSuccessful) {
      return NextResponse.json({
        success: false,
        post: { slug: safeSlug, title: title.trim(), category: (category || 'Training').trim() },
        message: `Partial success. Failed to update: ${failedFiles.join(', ')}`,
        results,
      }, { status: 207 }); // 207 Multi-Status
    }

    return NextResponse.json({
      success: true,
      post: { slug: safeSlug, title: title.trim(), category: (category || 'Training').trim() },
      message: 'Blog post added and committed to GitHub',
      results,
    });

  } catch (error) {
    // Don't expose internal error details
    console.error('Blog generation error:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
