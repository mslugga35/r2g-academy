import { NextRequest, NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = 'mslugga35';
const GITHUB_REPO = 'r2g-academy';

async function getFileContent(path: string): Promise<{ content: string; sha: string } | null> {
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
}

async function updateFile(path: string, content: string, sha: string, message: string) {
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
}

export async function POST(request: NextRequest) {
  // Verify API key
  const apiKey = request.headers.get('x-api-key');
  if (apiKey !== process.env.BLOG_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { slug, title, excerpt, category, topics, date, readTime, content } = await request.json();

    if (!slug || !title || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Update blog/page.tsx
    const blogPage = await getFileContent('src/app/blog/page.tsx');
    if (blogPage) {
      const newEntry = `  {
    slug: '${slug}',
    title: '${title.replace(/'/g, "\\'")}',
    excerpt: '${excerpt.replace(/'/g, "\\'")}',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    date: '${date}',
    readTime: '${readTime}',
    category: '${category}',
  },`;

      const updatedBlogPage = blogPage.content.replace(
        /const blogPosts = \[/,
        `const blogPosts = [\n${newEntry}`
      );

      await updateFile('src/app/blog/page.tsx', updatedBlogPage, blogPage.sha, `Add blog: ${title}`);
    }

    // 2. Update [slug]/page.tsx
    const slugPage = await getFileContent('src/app/blog/[slug]/page.tsx');
    if (slugPage) {
      const escapedContent = content.replace(/`/g, '\\`').replace(/\$/g, '\\$');
      const newContentEntry = `  '${slug}': \`
${escapedContent}
\`,`;

      const updatedSlugPage = slugPage.content.replace(
        /const blogContent: Record<string, string> = \{/,
        `const blogContent: Record<string, string> = {\n${newContentEntry}`
      );

      await updateFile('src/app/blog/[slug]/page.tsx', updatedSlugPage, slugPage.sha, `Add blog content: ${title}`);
    }

    // 3. Update sitemap.ts
    const sitemap = await getFileContent('src/app/sitemap.ts');
    if (sitemap) {
      const updatedSitemap = sitemap.content.replace(
        /const blogPosts = \[/,
        `const blogPosts = [\n    '${slug}',`
      );

      await updateFile('src/app/sitemap.ts', updatedSitemap, sitemap.sha, `Add ${slug} to sitemap`);
    }

    // 4. Update llm.txt
    const llm = await getFileContent('public/llm.txt');
    if (llm) {
      const llmEntry = `
#### ${title}
URL: /blog/${slug}
Topics: ${topics}
Summary: ${excerpt}`;

      const updatedLlm = llm.content.replace(
        /## Citation Guidelines/,
        `${llmEntry}\n\n## Citation Guidelines`
      );

      await updateFile('public/llm.txt', updatedLlm, llm.sha, `Add ${slug} to llm.txt`);
    }

    return NextResponse.json({
      success: true,
      post: { slug, title, category },
      message: 'Blog post added and committed to GitHub',
    });

  } catch (error) {
    console.error('Blog generation error:', error);
    return NextResponse.json({ error: 'Failed to generate blog post' }, { status: 500 });
  }
}
