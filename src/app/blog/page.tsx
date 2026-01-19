'use client';

import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'youth-baseball-footwork-fundamentals-speed-agility',
    title: 'Building Athletic Foundation: Footwork Fundamentals That Transform Young Baseball and Softball Players',
    excerpt: 'Proper footwork is the foundation of every successful play in baseball and softball, yet it\'s often overlooked in youth training. Master these essential footwork drills and techniques to help young athletes improve their base running, fielding positioning, and overall game performance.',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    date: '2026-01-19',
    readTime: '5 min read',
    category: 'Training',
  },
  {
    slug: '5-drills-to-improve-batting-average',
    title: '5 Drills to Improve Your Batting Average',
    excerpt: 'Whether you\'re a beginner or advanced player, these proven drills will help you make better contact and drive the ball with more power.',
    image: 'https://images.unsplash.com/photo-1529768167801-9173d94c2a42?w=800&q=80',
    date: '2026-01-15',
    readTime: '5 min read',
    category: 'Hitting',
  },
  {
    slug: 'indoor-vs-outdoor-batting-cages',
    title: 'Indoor vs Outdoor Batting Cages: Pros & Cons',
    excerpt: 'Considering where to train? We break down the benefits of indoor facilities versus outdoor cages to help you make the right choice.',
    image: 'https://images.unsplash.com/photo-1578432156036-d3d740958ffe?w=800&q=80',
    date: '2026-01-12',
    readTime: '4 min read',
    category: 'Training',
  },
  {
    slug: 'when-should-kids-start-baseball-training',
    title: 'When Should Kids Start Baseball Training?',
    excerpt: 'Age-appropriate training is crucial for development. Learn the best age to start structured baseball training and what to focus on at each stage.',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    date: '2026-01-10',
    readTime: '6 min read',
    category: 'Youth Development',
  },
  {
    slug: 'common-hitting-mistakes-and-fixes',
    title: 'Common Hitting Mistakes and How to Fix Them',
    excerpt: 'From dropping the back shoulder to stepping in the bucket, we cover the most common swing flaws and provide drills to correct them.',
    image: 'https://images.unsplash.com/photo-1544298621-a21e5c0528b3?w=800&q=80',
    date: '2026-01-08',
    readTime: '7 min read',
    category: 'Hitting',
  },
  {
    slug: 'benefits-of-after-school-sports-programs',
    title: 'Benefits of After School Sports Programs',
    excerpt: 'After school programs offer more than just athletics. Discover how structured sports programs benefit kids academically, socially, and physically.',
    image: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=800&q=80',
    date: '2026-01-05',
    readTime: '5 min read',
    category: 'Youth Development',
  },
  {
    slug: 'off-season-training-tips',
    title: 'Off-Season Training Tips for Youth Players',
    excerpt: 'The off-season is crucial for improvement. Learn how to structure your training to come back stronger without burning out.',
    image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=800&q=80',
    date: '2026-01-02',
    readTime: '5 min read',
    category: 'Training',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f5f2eb]">
      {/* Header */}
      <header className="bg-[#1a2855] py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-12">
              <Image
                src="/images/r2glogo.png"
                alt="R2G Academy"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-display text-xl text-white">R2G ACADEMY</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/#services" className="text-white/80 hover:text-[#a89a5c] font-semibold text-sm uppercase tracking-wider transition-colors">
              Programs
            </Link>
            <Link href="/#contact" className="text-white/80 hover:text-[#a89a5c] font-semibold text-sm uppercase tracking-wider transition-colors">
              Contact
            </Link>
            <a href="tel:3522986699" className="bg-[#a89a5c] text-[#1a2855] px-4 py-2 font-bold text-sm uppercase tracking-wider hover:bg-[#c4b87a] transition-colors">
              Call Now
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#1a2855] py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-[#a89a5c] font-semibold uppercase tracking-widest mb-4">R2G Academy Blog</p>
          <h1 className="font-display text-5xl md:text-6xl text-white mb-4">TRAINING TIPS & INSIGHTS</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Expert baseball and softball training advice from our coaches. Tips, drills, and insights to help young athletes reach their potential.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white border-4 border-[#1a2855] overflow-hidden hover:border-[#a89a5c] transition-colors group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#a89a5c] text-[#1a2855] px-3 py-1 text-xs font-bold uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="font-display text-xl text-[#1a2855] mb-3 group-hover:text-[#a89a5c] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 text-[#a89a5c] font-semibold text-sm uppercase tracking-wider group-hover:text-[#1a2855] transition-colors">
                      Read More →
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2855] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-white mb-4">READY TO START TRAINING?</h2>
          <p className="text-white/70 mb-8">Put these tips into practice with professional instruction at R2G Academy.</p>
          <Link href="/#services" className="inline-block bg-[#a89a5c] text-[#1a2855] px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#c4b87a] transition-colors">
            View Programs
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1a38] py-8 text-center">
        <Link href="/" className="text-white/60 hover:text-[#a89a5c] transition-colors">
          ← Back to R2G Academy
        </Link>
        <p className="text-white/40 text-sm mt-4">© 2026 R2G Academy. All rights reserved.</p>
      </footer>
    </main>
  );
}
