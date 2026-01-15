import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
  metaDescription: string;
}> = {
  '5-drills-to-improve-batting-average': {
    title: '5 Drills to Improve Your Batting Average',
    excerpt: 'Whether you\'re a beginner or advanced player, these proven drills will help you make better contact and drive the ball with more power.',
    image: 'https://images.unsplash.com/photo-1529768167801-9173d94c2a42?w=1200&q=80',
    date: '2026-01-15',
    readTime: '5 min read',
    category: 'Hitting',
    metaDescription: 'Learn 5 proven batting drills to improve your hitting. Expert tips from R2G Academy in Altamonte Springs, FL. Youth baseball training drills that work.',
    content: `
## Why Consistent Practice Matters

Improving your batting average isn't about swinging harder—it's about swinging smarter. These five drills focus on the fundamentals that separate good hitters from great ones.

## 1. Tee Work with Purpose

The batting tee isn't just for beginners. Professional players use it daily to groove their swing mechanics.

**How to do it:**
- Set up the tee at different heights and positions (inside, middle, outside)
- Take 20-30 swings at each position
- Focus on driving the ball back through the middle
- Video your swing to check mechanics

**Key focus:** Keep your head still and eyes on the ball through contact.

## 2. Soft Toss Variations

Soft toss helps develop timing and hand-eye coordination.

**Front Toss:**
- Partner tosses from 15-20 feet in front
- Focus on driving the ball up the middle
- Progress to inside/outside locations

**Side Toss:**
- Partner tosses from the side at 45 degrees
- Develops quicker hands
- Great for working on staying inside the ball

## 3. Two-Strike Approach Drill

Learning to hit with two strikes is crucial for improving your average.

**The drill:**
- Start every round with a 0-2 count mindset
- Choke up slightly on the bat
- Focus on putting the ball in play, not hitting for power
- Practice fouling off tough pitches

**Why it works:** This drill teaches plate discipline and the ability to battle when behind in the count.

## 4. Live BP with a Plan

Don't just swing at everything during batting practice. Have a plan.

**Round structure:**
- Round 1: Work the opposite field
- Round 2: Pull side power
- Round 3: Up the middle
- Round 4: Situational hitting (move runners, sacrifice)

**Track your results:** Note where you hit the ball best and work on weaknesses.

## 5. Timing Drill with Overload/Underload

Using different weighted bats improves bat speed and power.

**The method:**
- Take 10 swings with a heavier bat (28-30 oz)
- Take 10 swings with a lighter bat (24-26 oz)
- Finish with 10 swings with your game bat

**The science:** This contrast training helps your brain and muscles adapt to generate more bat speed.

## Putting It All Together

Consistency is key. Here's a sample weekly schedule:

| Day | Focus |
|-----|-------|
| Monday | Tee work (100 swings) |
| Tuesday | Soft toss (50 swings) |
| Wednesday | Rest or light throwing |
| Thursday | Live BP with a plan |
| Friday | Two-strike drill |
| Weekend | Games or scrimmages |

## Train with the Pros

At R2G Academy, our coaches work with players of all ages on these exact drills. Our indoor facility allows year-round training regardless of weather.

**Ready to improve your batting average?** [Book a session](//#services) with our experienced coaches.
    `,
  },
  'indoor-vs-outdoor-batting-cages': {
    title: 'Indoor vs Outdoor Batting Cages: Pros & Cons',
    excerpt: 'Considering where to train? We break down the benefits of indoor facilities versus outdoor cages to help you make the right choice.',
    image: 'https://images.unsplash.com/photo-1578432156036-d3d740958ffe?w=1200&q=80',
    date: '2026-01-12',
    readTime: '4 min read',
    category: 'Training',
    metaDescription: 'Indoor vs outdoor batting cages: which is better? Compare pros and cons for baseball training. R2G Academy indoor facility in Altamonte Springs, FL.',
    content: `
## The Great Debate: Indoor vs Outdoor

When it comes to baseball training, the environment matters. Both indoor and outdoor batting cages have their place, but understanding the differences helps you maximize your training time.

## Indoor Batting Cages

### Pros

**Climate Control**
Florida summers are brutal, and winter can bring unexpected cold snaps. Indoor facilities offer:
- Air conditioning during hot months
- Heat during cooler periods
- No rain delays or cancellations
- Consistent lighting conditions

**Year-Round Availability**
- Train any time, any weather
- No seasonal closures
- Better scheduling flexibility
- Night training with professional lighting

**Professional Equipment**
Most indoor facilities invest in quality equipment:
- Professional-grade pitching machines
- Multiple cage options
- Video analysis capabilities
- Quality netting and safety features

**Focused Environment**
- Fewer distractions
- Better concentration
- Professional coaching readily available
- Controlled practice sessions

### Cons

- Can be more expensive than outdoor options
- Limited space for full fielding work
- May require membership or hourly fees

## Outdoor Batting Cages

### Pros

**Natural Conditions**
- Real sunlight helps with seeing the ball
- Wind affects ball flight (game-like conditions)
- Often more space available
- Can practice with real baseballs

**Cost**
- Often free at public parks
- Lower membership fees typically
- No building overhead costs

**Space**
- Room for full team practices
- Can combine hitting with fielding
- More realistic game simulation

### Cons

- Weather dependent (huge issue in Florida)
- Inconsistent lighting as sun moves
- Summer heat can be dangerous
- Spring storms common in Central Florida
- Equipment quality varies widely

## The Verdict: What's Best for You?

**Choose Indoor When:**
- You're serious about consistent improvement
- Florida summer heat is a concern
- You need professional instruction
- Weather reliability matters
- You want quality equipment

**Choose Outdoor When:**
- Budget is the primary concern
- You're doing team practices
- Weather conditions are ideal
- You need space for multi-skill work

## Why R2G Academy Chose Indoor

Our 63' x 26' climate-controlled facility ensures:
- Train in comfort year-round
- No cancelled sessions due to weather
- Consistent, professional environment
- Focus on quality over quantity

**The bottom line:** Serious players benefit from the consistency and quality of indoor training, supplemented by outdoor practice when conditions allow.

## Visit Our Indoor Facility

R2G Academy offers Seminole County's premier indoor training environment. [Schedule a visit](//#services) to see the difference for yourself.
    `,
  },
  'when-should-kids-start-baseball-training': {
    title: 'When Should Kids Start Baseball Training?',
    excerpt: 'Age-appropriate training is crucial for development. Learn the best age to start structured baseball training and what to focus on at each stage.',
    image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=1200&q=80',
    date: '2026-01-10',
    readTime: '6 min read',
    category: 'Youth Development',
    metaDescription: 'What age should kids start baseball training? Expert guide on youth baseball development stages. R2G Academy youth programs in Altamonte Springs, FL.',
    content: `
## The Right Age to Start: A Parent's Guide

One of the most common questions parents ask is "When should my child start baseball training?" The answer depends on what kind of training you're talking about.

## Ages 4-6: Introduction Phase

**Focus:** Fun, basic coordination, love of the game

**Appropriate activities:**
- Playing catch with soft balls
- T-ball leagues
- Running bases (as a game)
- Simple throwing motions
- Hitting off a tee

**What to avoid:**
- Formal instruction
- Competitive pressure
- Specialized positions
- Pitching from a mound
- Travel teams

**Key goal:** Make it FUN. If a child associates baseball with stress at this age, they may quit early.

## Ages 7-9: Fundamental Phase

**Focus:** Basic mechanics, multiple positions, team concepts

**Appropriate activities:**
- Coach-pitch or machine-pitch leagues
- Learning all positions
- Basic throwing mechanics
- Introduction to batting stance
- Base running fundamentals
- Simple fielding drills

**Training tips:**
- Short practices (45-60 minutes max)
- High activity, low standing around
- Positive reinforcement
- Playing multiple sports (crucial for overall athleticism)

**What to avoid:**
- Overspecialization
- Year-round baseball only
- Excessive pitching
- Travel ball (unless kept fun and low-pressure)

## Ages 10-12: Development Phase

**Focus:** Skill refinement, position awareness, game strategy

This is when structured training becomes more beneficial:
- Hitting mechanics can be refined
- Pitching instruction can begin (with strict pitch counts)
- Position preferences emerge
- Mental game introduction
- Basic strategy understanding

**Recommended training:**
- 1-2 sessions per week of focused instruction
- Continued multi-sport participation
- Quality over quantity
- Video analysis can be introduced

**Pitch count guidelines (ages 9-12):**
| Age | Max Pitches/Game | Required Rest (50+ pitches) |
|-----|------------------|----------------------------|
| 9-10 | 75 | 1-2 days |
| 11-12 | 85 | 2-3 days |

## Ages 13-15: Competitive Phase

**Focus:** Advanced mechanics, specialization begins, mental game

Players ready for serious training can benefit from:
- Regular professional instruction
- Position-specific training
- Strength and conditioning (age-appropriate)
- Video analysis
- Mental skills coaching
- Travel/showcase opportunities

**Training frequency:**
- 2-4 sessions per week
- Off-season skill work
- In-season maintenance

## Ages 16-18: Refinement Phase

**Focus:** College/pro preparation, peak performance

High school players benefit from:
- Advanced mechanics refinement
- Showcase preparation
- Strength training (supervised)
- Mental performance coaching
- Recruitment guidance
- Position specialization

## Warning Signs of Too Much, Too Soon

Watch for these red flags:

⚠️ **Physical:**
- Persistent arm or shoulder pain
- Declining velocity
- Changes in throwing motion
- Fatigue that doesn't resolve

⚠️ **Mental:**
- Loss of interest in baseball
- Anxiety about games/practice
- Perfectionism and fear of failure
- Burnout symptoms

⚠️ **Social:**
- Missing other activities for baseball
- No non-baseball friends
- Family stress over the sport

## The R2G Academy Approach

Our programs are designed with age-appropriate development in mind:

**After School Program:** Perfect for developing fundamentals in a fun, supportive environment.

**Skill Development Sessions:** One-on-one instruction tailored to your child's age and skill level.

**The bottom line:** There's no rush. Players who develop properly and maintain their love for the game have longer, more successful careers than those who burn out from early overtraining.

[Explore our youth programs](//#services) designed for proper player development.
    `,
  },
  'common-hitting-mistakes-and-fixes': {
    title: 'Common Hitting Mistakes and How to Fix Them',
    excerpt: 'From dropping the back shoulder to stepping in the bucket, we cover the most common swing flaws and provide drills to correct them.',
    image: 'https://images.unsplash.com/photo-1544298621-a21e5c0528b3?w=1200&q=80',
    date: '2026-01-08',
    readTime: '7 min read',
    category: 'Hitting',
    metaDescription: 'Fix common baseball hitting mistakes with expert tips. Drills for better swing mechanics. R2G Academy hitting instruction in Altamonte Springs, FL.',
    content: `
## Identifying and Fixing Swing Flaws

Even the best hitters develop bad habits. Here are the most common mistakes we see at R2G Academy and how to fix them.

## 1. Dropping the Back Shoulder

**The problem:** Uppercut swing, pop-ups, weak fly balls

**Why it happens:**
- Trying to lift the ball
- Poor weight transfer
- Overcompensating for low pitches

**The fix:**
- Focus on keeping shoulders level through the swing
- Practice hitting into a net at chest height
- Use "swing down to the ball" cue
- Tee work with the ball at belt height

**Drill:** Place a ball on a tee at belly button height. Practice hitting line drives into a net. If you're popping up, your shoulder is dropping.

## 2. Stepping in the Bucket

**The problem:** Pulling off the ball, weak contact to opposite field, vulnerability to outside pitches

**Why it happens:**
- Fear of inside pitches
- Opening hips too early
- Poor balance

**The fix:**
- Draw a line in the dirt to stride toward
- Front toss from the side (forces staying closed)
- Soft toss with focus on driving the ball to the opposite field
- Balance drills

**Drill:** Place a cone or ball where your front foot should land. Practice striding to it consistently without stepping toward third base (for righties) or first (for lefties).

## 3. Casting the Hands

**The problem:** Bat head gets away from the body, slow bat speed, rolled over ground balls

**Why it happens:**
- Trying to generate power from arms only
- Improper bat path
- Starting the swing with hands instead of hips

**The fix:**
- Focus on "hands inside the ball"
- Start the swing with hip rotation
- Practice short, compact swings
- Use the "knob to the ball" cue

**Drill:** Practice swings with your back elbow tucked against a towel or glove. If the towel falls, you're casting.

## 4. Lunging at the Ball

**The problem:** Inconsistent contact, easily fooled by off-speed, poor plate coverage

**Why it happens:**
- Anxiety to swing
- Not trusting timing
- Poor pitch recognition

**The fix:**
- Load and hold drills
- Soft toss with pause
- Work on seeing the ball deeper
- Practice "let the ball travel" approach

**Drill:** During soft toss, wait until the ball is in the hitting zone before starting your swing. This trains patience and seeing the ball longer.

## 5. No Hip Rotation

**The problem:** Arm-only swing, no power, easy outs

**Why it happens:**
- Lack of lower body engagement
- Stiff lower half
- Upper body dominant approach

**The fix:**
- Hip turn drills without a bat
- Medicine ball rotational throws
- Focus on "squishing the bug" with the back foot
- Watch video of your swing to see hip action

**Drill:** Practice your swing in slow motion, focusing on your belt buckle. It should face the pitcher at finish. If it's still facing the catcher, you're not rotating.

## 6. Head Movement

**The problem:** Poor pitch tracking, inconsistent contact, fooled by movement

**Why it happens:**
- Over-striding
- Body moving too much
- Pulling off the ball

**The fix:**
- "Quiet head" drills
- Balance beam work
- Tracking drills (watch the ball into the catcher's glove)
- Video analysis of head position

**Drill:** Have someone watch your head during soft toss. Your eyes should stay level throughout the swing. Any significant movement means your head is moving too much.

## 7. Improper Grip

**The problem:** Slow bat speed, blisters, lack of control

**Why it happens:**
- Never taught properly
- Copying bad habits
- Trying to grip too tight

**The fix:**
- Align "door knocking knuckles"
- Light grip in the fingers, not the palms
- "Hold an egg" pressure
- Regular grip checks

**Correct grip:** The knocking knuckles of both hands should roughly align. Grip should be firm but not white-knuckle tight.

## Getting Professional Help

While these tips help, nothing replaces in-person instruction with a qualified coach who can:
- See your specific issues in real-time
- Provide immediate feedback
- Design drills specific to your needs
- Track your progress over time

At R2G Academy, our coaches use video analysis to identify issues and create personalized improvement plans.

[Book a hitting assessment](//#services) to identify and fix your specific swing flaws.
    `,
  },
  'benefits-of-after-school-sports-programs': {
    title: 'Benefits of After School Sports Programs',
    excerpt: 'After school programs offer more than just athletics. Discover how structured sports programs benefit kids academically, socially, and physically.',
    image: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=1200&q=80',
    date: '2026-01-05',
    readTime: '5 min read',
    category: 'Youth Development',
    metaDescription: 'Benefits of after school sports programs for kids. Physical, academic, and social advantages. R2G Academy after school program in Altamonte Springs, FL.',
    content: `
## More Than Just Sports: The Full Picture

After school sports programs do more than keep kids active—they shape character, improve academics, and build life skills. Here's what the research shows.

## Physical Benefits

### Combating Childhood Obesity
The CDC reports that childhood obesity has tripled since the 1970s. After school sports programs help by:
- Providing 60+ minutes of physical activity
- Teaching proper exercise habits
- Making fitness fun and engaging
- Building lifelong healthy habits

### Developing Athletic Skills
Structured programs offer:
- Age-appropriate skill development
- Proper technique instruction
- Safe training environments
- Progressive skill building

### Improving Overall Health
Regular physical activity leads to:
- Better sleep quality
- Stronger immune system
- Improved cardiovascular health
- Better coordination and motor skills

## Academic Benefits

**Surprising fact:** Student-athletes often outperform non-athletes academically.

### Why Sports Help Academics

**Time management:** Athletes learn to balance practice, games, and homework—a skill that translates to better study habits.

**Focus and discipline:** The concentration required in sports carries over to the classroom.

**Goal setting:** Athletes understand working toward objectives, applying this to academic goals.

**Reduced stress:** Physical activity reduces anxiety and improves mental clarity for studying.

### The Research
Studies show that students in after school programs:
- Have better attendance rates
- Show improved behavior in school
- Score higher on standardized tests
- Are more likely to graduate high school

## Social and Emotional Benefits

### Building Friendships
Team sports provide:
- Peer connections outside school
- Shared experiences and goals
- Diverse social interactions
- Lasting friendships

### Character Development
Athletes learn:
- How to win and lose gracefully
- Respecting coaches and officials
- Supporting teammates
- Handling pressure situations

### Confidence Building
Success in sports builds:
- Self-esteem
- Resilience after setbacks
- Public performance comfort
- Leadership skills

### Reduced Risky Behavior
Research shows athletes are:
- Less likely to use drugs and alcohol
- Less likely to engage in criminal activity
- More likely to make positive choices
- Better connected to positive adult role models

## Safety Benefits

### Supervised Time
After school programs provide:
- Adult supervision during key hours (3-6 PM)
- Safe, structured environments
- Reduced opportunity for trouble
- Peace of mind for working parents

### The "Danger Hours"
Statistics show 3-6 PM are the highest risk hours for:
- Juvenile crime
- Drug and alcohol use
- Risky behaviors
- Unsupervised accidents

After school programs eliminate this risk by providing constructive activities.

## What to Look for in a Program

Not all programs are equal. Quality programs offer:

✅ **Qualified coaches**
- Background checked
- Trained in youth development
- CPR/First Aid certified
- Positive coaching philosophy

✅ **Age-appropriate activities**
- Developmentally suitable drills
- Proper equipment sizing
- Safe progression
- Fun atmosphere

✅ **Balanced approach**
- Skill development
- Physical conditioning
- Character building
- Academic support (homework time)

✅ **Communication**
- Regular parent updates
- Clear expectations
- Open-door policy
- Progress tracking

## The R2G Academy After School Program

Our program is designed with these principles in mind:

**What we offer:**
- Professional coaching staff
- Climate-controlled indoor facility
- Baseball/softball IQ development
- Exercise and conditioning
- Throwing and glove work
- Hitting instruction
- Drop-off convenience for parents

**Schedule:** Monday-Friday, 3 hours daily

**Investment:** $100/week

We believe in developing the whole athlete—physically, mentally, and socially.

[Learn more about our After School Program](//#services) and give your child the after school advantage.
    `,
  },
  'off-season-training-tips': {
    title: 'Off-Season Training Tips for Youth Players',
    excerpt: 'The off-season is crucial for improvement. Learn how to structure your training to come back stronger without burning out.',
    image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=1200&q=80',
    date: '2026-01-02',
    readTime: '5 min read',
    category: 'Training',
    metaDescription: 'Off-season baseball training tips for youth players. How to improve during the off-season. R2G Academy training programs in Altamonte Springs, FL.',
    content: `
## Making the Most of the Off-Season

The off-season isn't time off—it's time to get better. But it requires a different approach than in-season training. Here's how to come back stronger.

## Phase 1: Active Rest (2-4 weeks after season)

### What It Means
Give your body and mind a break from baseball, but stay active.

### What to Do
- Play other sports (basketball, soccer, swimming)
- Stay generally active
- No baseball-specific training
- Let any nagging injuries heal

### Why It Matters
Mental and physical burnout is real. This break:
- Prevents overuse injuries
- Renews passion for the game
- Allows growth and recovery
- Provides mental refreshment

## Phase 2: Foundation Building (4-8 weeks)

### Focus Areas

**General Fitness:**
- Cardiovascular conditioning
- Flexibility and mobility
- Core strength
- Overall body strength

**Sample Weekly Schedule:**
| Day | Activity |
|-----|----------|
| Monday | Light cardio + flexibility |
| Tuesday | Body weight exercises |
| Wednesday | Active recovery or rest |
| Thursday | Light cardio + core work |
| Friday | Functional movement training |
| Weekend | Play pickup games, stay active |

### What to Avoid
- Heavy baseball-specific training
- Throwing at full effort
- Batting practice with max effort
- Long toss programs

## Phase 3: Skill Development (6-8 weeks)

### Now Add Baseball Back

**Hitting:**
- Tee work (rebuild mechanics)
- Soft toss (50-100 swings)
- Focus on quality, not quantity
- Video analysis to identify issues

**Throwing:**
- Start with short distances (30-60 feet)
- Light effort only
- Focus on mechanics
- Gradually increase distance

**Fielding:**
- Ground ball work
- Footwork drills
- Position-specific training
- Receiving and transfer work

### Sample Weekly Schedule
| Day | Activity |
|-----|----------|
| Monday | Hitting (tee + soft toss) |
| Tuesday | Light throwing + fielding |
| Wednesday | Fitness + flexibility |
| Thursday | Hitting (front toss) |
| Friday | Position-specific work |
| Weekend | Rest or light activity |

## Phase 4: Pre-Season Preparation (4-6 weeks)

### Ramp Up Intensity

**Hitting progression:**
- Week 1-2: Machine work at moderate speed
- Week 3-4: Live BP at game speed
- Week 5-6: Simulated game at-bats

**Throwing progression:**
- Week 1-2: Long toss to 120 feet
- Week 3-4: Bullpens or position-specific throwing
- Week 5-6: Live situational work

### Position-Specific Work
Focus on the demands of your position:
- **Pitchers:** Bullpens, fielding position, pick-off moves
- **Catchers:** Blocking, receiving, throwing
- **Infielders:** Double plays, range work, tags
- **Outfielders:** Routes, reads, throws to bases

## Common Off-Season Mistakes

### ❌ Doing Nothing
Rest doesn't mean inactivity. You'll lose fitness and skills.

### ❌ Going Full Intensity Too Soon
Ramping up too quickly leads to injuries. Follow the phases.

### ❌ Baseball Only
Playing other sports actually helps baseball by:
- Developing different movement patterns
- Preventing overuse
- Building overall athleticism
- Keeping sports fun

### ❌ Ignoring Weaknesses
The off-season is the time to address weak points, not just work on strengths.

### ❌ No Plan
Random workouts produce random results. Have a structured approach.

## The Parent's Role

Parents can help by:
- Encouraging multi-sport participation
- Not pushing year-round baseball
- Supporting structured training programs
- Monitoring for burnout signs
- Keeping it fun

## Train Smart at R2G Academy

Our off-season programs are designed to:
- Build skills progressively
- Prevent overuse injuries
- Maintain love for the game
- Prepare players for success

Whether you need hitting instruction, skill development, or a structured training program, our indoor facility provides the perfect off-season training environment.

[Start your off-season training](//#services) with R2G Academy's professional coaching staff.
    `,
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: 'Post Not Found | R2G Academy Blog',
    };
  }

  return {
    title: `${post.title} | R2G Academy Blog`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      images: [post.image],
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

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
            <Link href="/blog" className="text-white/80 hover:text-[#a89a5c] font-semibold text-sm uppercase tracking-wider transition-colors">
              Blog
            </Link>
            <Link href="/#services" className="text-white/80 hover:text-[#a89a5c] font-semibold text-sm uppercase tracking-wider transition-colors">
              Programs
            </Link>
            <a href="tel:3522986699" className="bg-[#a89a5c] text-[#1a2855] px-4 py-2 font-bold text-sm uppercase tracking-wider hover:bg-[#c4b87a] transition-colors">
              Call Now
            </a>
          </nav>
        </div>
      </header>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/blog" className="text-[#a89a5c] hover:text-[#1a2855] transition-colors">
              ← Back to Blog
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="bg-[#a89a5c] text-[#1a2855] px-3 py-1 font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-[#1a2855] mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600">
              {post.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 mb-8 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-display prose-headings:text-[#1a2855]
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-strong:text-[#1a2855]
              prose-a:text-[#a89a5c] prose-a:no-underline hover:prose-a:text-[#1a2855]
              prose-ul:text-gray-700 prose-ol:text-gray-700
              prose-li:marker:text-[#a89a5c]
              prose-table:border-collapse
              prose-th:bg-[#1a2855] prose-th:text-white prose-th:p-3
              prose-td:border prose-td:border-gray-200 prose-td:p-3
            "
            dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
          />

          {/* CTA */}
          <div className="mt-12 bg-[#1a2855] p-8 text-center">
            <h2 className="font-display text-3xl text-white mb-4">READY TO IMPROVE YOUR GAME?</h2>
            <p className="text-white/70 mb-6">Train with our experienced coaches at R2G Academy.</p>
            <Link href="/#services" className="inline-block bg-[#a89a5c] text-[#1a2855] px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#c4b87a] transition-colors">
              View Programs
            </Link>
          </div>
        </div>
      </article>

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

// Simple markdown to HTML converter
function markdownToHtml(markdown: string): string {
  return markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    // Unordered lists
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    // Ordered lists
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    // Tables (simple)
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim());
      if (cells[0].includes('---')) return '';
      const tag = match.includes('---') ? 'th' : 'td';
      return `<tr>${cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('')}</tr>`;
    })
    // Wrap tables
    .replace(/(<tr>.*<\/tr>\n?)+/g, '<table>$&</table>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p>')
    // Line breaks
    .replace(/\n/g, '<br>')
    // Wrap in paragraph
    .replace(/^(.+)$/s, '<p>$1</p>')
    // Clean up empty paragraphs
    .replace(/<p><\/p>/g, '')
    .replace(/<p><br>/g, '<p>')
    // Warning/checkmark symbols
    .replace(/⚠️/g, '<span class="text-amber-500">⚠️</span>')
    .replace(/✅/g, '<span class="text-green-500">✅</span>')
    .replace(/❌/g, '<span class="text-red-500">❌</span>');
}
