'use client';

import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'mental-game-youth-baseball-softball-confidence-focus',
    title: 'Building Mental Toughness: How Young Athletes Can Develop Confidence and Focus on the Diamond',
    excerpt: 'Mental strength is just as important as physical skills in youth baseball and softball. Learn proven techniques to help young players overcome pressure, build confidence, and maintain focus during games and practice.',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    date: '2026-05-04',
    readTime: '5 min read',
    category: 'Youth Development',
  },
  {
    slug: 'mental-game-youth-baseball-softball-confidence-focus',
    title: 'Building Mental Toughness: How Young Athletes Can Master the Mental Side of Baseball and Softball',
    excerpt: 'The mental game accounts for up to 90% of performance in baseball and softball, yet it\'s often overlooked in youth training. Learn proven techniques to help young athletes develop confidence, focus, and resilience that will elevate their game and translate to success both on and off the field.',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    date: '2026-04-27',
    readTime: '5 min read',
    category: 'Youth Development',
  },
  {
    slug: 'building-mental-toughness-young-baseball-softball-players',
    title: 'Building Mental Toughness in Young Baseball and Softball Players: Strategies for Success',
    excerpt: 'Mental toughness is just as important as physical skills in youth baseball and softball. Learn proven techniques to help young athletes develop confidence, focus, and resilience both at the plate and in the field.',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    date: '2026-04-13',
    readTime: '5 min read',
    category: 'Youth Development',
  },
  {
    slug: 'mental-game-youth-baseball-softball-pressure-situations',
    title: 'Building Mental Toughness: How Young Players Can Master Pressure Situations in Baseball and Softball',
    excerpt: 'Mental preparation is just as important as physical training for young baseball and softball players. Learn proven techniques to help your athlete develop confidence, focus, and resilience when facing high-pressure game situations.',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    date: '2026-04-06',
    readTime: '5 min read',
    category: 'Youth Development',
  },
  {
    slug: 'mental-game-youth-baseball-softball-confidence-focus',
    title: 'Building Mental Toughness: How to Develop Focus and Confidence in Young Baseball and Softball Players',
    excerpt: 'Mental preparation is just as important as physical skills in youth baseball and softball. Learn proven techniques to help young athletes overcome pressure, stay focused during games, and build the confidence needed to perform at their best on the field.',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    date: '2026-03-30',
    readTime: '5 min read',
    category: 'Youth Development',
  },
  {
    slug: 'youth-baseball-mental-game-confidence-focus-tips',
    title: 'Building Mental Toughness: How Young Athletes Can Develop Focus and Confidence at the Plate',
    excerpt: 'The mental game is often what separates good players from great ones in youth baseball and softball. Learn proven techniques to help young athletes overcome fear, build confidence, and maintain focus during high-pressure situations.',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    date: '2026-03-23',
    readTime: '5 min read',
    category: 'Youth Development',
  },
  {
    slug: 'building-mental-toughness-youth-baseball-softball-florida',
    title: 'Building Mental Toughness in Young Baseball and Softball Players: A Parent\'s Guide',
    excerpt: 'Mental toughness is just as important as physical skills in youth baseball and softball. Learn proven strategies to help your young athlete develop confidence, focus, and resilience on the field through practical exercises and positive reinforcement techniques.',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    date: '2026-03-16',
    readTime: '5 min read',
    category: 'Youth Development',
  },
  {
    slug: 'youth-baseball-mental-game-confidence-building',
    title: 'Building Mental Toughness: How to Help Young Athletes Overcome Baseball and Softball Anxiety',
    excerpt: 'Mental preparation is just as important as physical skills in youth baseball and softball. Learn proven strategies to help your young athlete build confidence, handle pressure situations, and develop the mental toughness needed to succeed on the field.',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    date: '2026-03-09',
    readTime: '5 min read',
    category: 'Youth Development',
  },
  {
    slug: 'mental-game-youth-baseball-softball-confidence-focus',
    title: 'Building Mental Toughness in Youth Baseball and Softball: Strategies for Developing Confidence and Focus',
    excerpt: 'The mental game is just as important as physical skills in youth baseball and softball. Learn proven techniques to help young athletes develop confidence, overcome performance anxiety, and maintain focus during pressure situations on the field.',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    date: '2026-03-02',
    readTime: '5 min read',
    category: 'Youth Development',
  },
  {
    slug: 'building-confidence-young-baseball-softball-players',
    title: 'Building Unshakeable Confidence in Young Baseball and Softball Players: Mental Training Strategies That Work',
    excerpt: 'Mental toughness is just as important as physical skills in youth baseball and softball. Learn proven strategies to help young athletes overcome fear, bounce back from mistakes, and develop the confidence needed to excel on the field.',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    date: '2026-02-23',
    readTime: '5 min read',
    category: 'Youth Development',
  },
  {
    slug: 'building-mental-toughness-youth-baseball-softball-players',
    title: 'Building Mental Toughness in Youth Baseball and Softball Players: 7 Strategies That Work',
    excerpt: 'Mental toughness is just as important as physical skills in youth baseball and softball. Learn seven proven strategies to help young athletes develop confidence, focus, and resilience on and off the field.',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    date: '2026-02-09',
    readTime: '5 min read',
    category: 'Youth Development',
  },
  {
    slug: 'mental-game-tips-young-baseball-softball-players',
    title: 'Building Mental Toughness: 7 Ways to Strengthen Your Young Athlete\'s Mental Game',
    excerpt: 'While physical skills are crucial, the mental side of baseball and softball often determines success on the field. Learn proven strategies to help your young athlete develop confidence, focus, and resilience that will elevate their game.',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80',
    date: '2026-02-02',
    readTime: '5 min read',
    category: 'Youth Development',
  },
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
