import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://r2gacademy.com'

  const blogPosts = [
    '5-drills-to-improve-batting-average',
    'indoor-vs-outdoor-batting-cages',
    'when-should-kids-start-baseball-training',
    'common-hitting-mistakes-and-fixes',
    'benefits-of-after-school-sports-programs',
    'off-season-training-tips',
  ]

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Blog index
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Blog posts
    ...blogPosts.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
