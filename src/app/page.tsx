import Image from "next/image";
import Link from "next/link";
import EnrollButton from "./components/EnrollButton";

function PriceTile({ price, label }: { price: string; label: string }) {
  return (
    <div className="bg-white/10 rounded px-3 py-2 text-center">
      <p className="text-[#ffd27a] font-bold text-lg">{price}</p>
      <p className="text-white text-xs">{label}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f2eb]">
      {/* Grain overlay */}
      <div className="grain" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b-4 border-[#a89a5c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <Image
                src="/images/r2glogo.png"
                alt="R2G Academy"
                width={60}
                height={80}
                className="h-16 w-auto"
              />
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-white/80 hover:text-[#a89a5c] font-semibold text-sm uppercase tracking-wider transition-colors">Programs</a>
              <a href="#wins" className="text-white/80 hover:text-[#a89a5c] font-semibold text-sm uppercase tracking-wider transition-colors">Results</a>
              <a href="#gallery" className="text-white/80 hover:text-[#a89a5c] font-semibold text-sm uppercase tracking-wider transition-colors">Gallery</a>
              <Link href="/blog" className="text-white/80 hover:text-[#a89a5c] font-semibold text-sm uppercase tracking-wider transition-colors">Blog</Link>
              <a href="#contact" className="text-white/80 hover:text-[#a89a5c] font-semibold text-sm uppercase tracking-wider transition-colors">Contact</a>
              <a href="#services" className="bg-[#a89a5c] text-[#1a2855] px-5 py-2 font-bold text-sm uppercase tracking-wider hover:bg-[#c4b87a] transition-colors">
                Book Now
              </a>
            </div>
            <a href="tel:3522986699" className="md:hidden bg-[#a89a5c] text-white px-4 py-2 font-bold text-xs uppercase">
              Call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen bg-[#1a1a1a] pt-20">
        {/* Background */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1529768167801-9173d94c2a42?w=1920&q=80"
            alt="Baseball texture"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left */}
            <div className="animate-slide-in">
              {/* Promo Banner */}
              <div className="inline-block bg-[#a89a5c] text-white text-xs font-bold px-4 py-2 uppercase tracking-widest mb-6">
                $50 OFF Team Training • Code: KICKOFF50
              </div>

              {/* Clear facility descriptor */}
              <div className="text-white/60 text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Elite Athletic Training Facility
              </div>

              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-6">
                FROM CONCRETE<br/>
                <span className="text-[#a89a5c]">TO</span><br/>
                <span className="text-[#a89a5c]">CHAMPIONS</span>
              </h1>

              <p className="text-white/70 text-lg md:text-xl max-w-lg mb-8 font-medium leading-relaxed">
                Seminole County&apos;s premier indoor baseball &amp; softball training center.
                63&apos; × 26&apos; dividable cage, precision bullpen, and evidence-based coaching.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#services" className="group bg-[#a89a5c] text-[#1a2855] px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#c4b87a] transition-all duration-300">
                  Book a Session
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="#services" className="border-2 border-[#a89a5c] text-[#a89a5c] px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#a89a5c] hover:text-[#1a2855] transition-all">
                  View Programs
                </a>
              </div>

              <div className="mt-10 flex items-center gap-6 text-white/60">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#a89a5c]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Altamonte Springs, FL</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#a89a5c]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Mon-Fri 2-10PM</span>
                </div>
              </div>
            </div>

            {/* Right - Logo + Photos */}
            <div className="relative hidden lg:block">
              {/* Large logo */}
              <div className="absolute top-0 right-0 w-[300px] h-[350px] animate-scale-in delay-200 flex items-center justify-center">
                <Image
                  src="/images/r2glogo.png"
                  alt="R2G Academy"
                  width={280}
                  height={350}
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* Championship photo */}
              <div className="absolute bottom-0 left-0 w-[70%] aspect-[4/3] photo-tilt-left shadow-2xl animate-scale-in delay-400">
                <div className="relative w-full h-full bg-white p-3">
                  <div className="tape" />
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/images/team-florida-7.jpg"
                      alt="Team Florida Champions"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-[#a89a5c] text-white px-3 py-1 text-xs font-bold uppercase">
                    Team Florida Champions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#1a2855] py-4">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
            <div className="text-center md:text-left">
              <span className="font-display text-3xl md:text-4xl text-[#a89a5c]">6+</span>
              <span className="text-white/80 text-sm ml-2 uppercase">Championships</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/20" />
            <div className="text-center md:text-left">
              <span className="font-display text-3xl md:text-4xl text-[#a89a5c]">63&apos;</span>
              <span className="text-white/80 text-sm ml-2 uppercase">Indoor Cage</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/20" />
            <div className="text-center md:text-left">
              <span className="font-display text-3xl md:text-4xl text-[#a89a5c]">2-10</span>
              <span className="text-white/80 text-sm ml-2 uppercase">PM Weekdays</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/20" />
            <div className="text-center md:text-left">
              <span className="font-display text-3xl md:text-4xl text-[#a89a5c]">A/C</span>
              <span className="text-white/80 text-sm ml-2 uppercase">Year-Round</span>
            </div>
          </div>
        </div>
      </section>

      {/* Summer Performance Program Banner */}
      <section className="bg-orange-600 py-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="halftone w-full h-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="bg-white text-orange-700 text-xs font-bold px-3 py-1 uppercase tracking-widest animate-pulse">Summer &apos;26</span>
            <div className="text-white">
              <p className="font-bold text-lg">Summer Performance Program — June 1 – July 24</p>
              <p className="text-white/80 text-sm">Ages 8+ &bull; Mon–Fri &bull; Tue/Thu MLB Training w/ Jemile Weeks &bull; From $200/week</p>
            </div>
          </div>
          <a href="#summer-program" className="bg-white text-orange-700 px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors whitespace-nowrap">
            Reserve Your Spot
          </a>
        </div>
      </section>

      {/* Services/Programs */}
      <section id="services" className="py-24 md:py-32 bg-[#f5f2eb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#a89a5c] font-bold text-sm uppercase tracking-widest">Programs & Pricing</span>
            <h2 className="font-display text-5xl md:text-6xl text-[#1a2855] mt-2">
              BOOK YOUR SESSION
            </h2>
          </div>

          {/* Summer Performance Program */}
          <div id="summer-program" className="mb-8 bg-orange-600 p-6 md:p-8 relative overflow-hidden border-4 border-orange-800 scroll-mt-24">
            <div className="absolute top-0 right-0 bg-white text-orange-700 text-xs font-bold px-4 py-2 uppercase tracking-widest">
              Summer &apos;26
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div>
                <h3 className="font-display text-3xl text-white mb-2">Summer Performance Program</h3>
                <p className="text-white/90 mb-1">
                  <strong className="text-white">June 1 – July 24</strong> &bull; Mon–Fri
                </p>
                <p className="text-white/90 mb-3 text-sm">
                  Ages 8+ &bull; 15 Athletes Max/Session
                </p>
                <div className="space-y-1 text-white/80 text-sm mb-4">
                  <p><strong className="text-white">Session 1:</strong> 9:00 AM – 11:00 AM</p>
                  <p><strong className="text-white">Session 2:</strong> 11:45 AM – 1:45 PM</p>
                  <p className="text-white/60 text-xs pt-1">Session 1 includes Major League Instruction</p>
                </div>
                <div className="bg-white/10 p-3 mb-4 text-white/80 text-xs space-y-1">
                  <p><strong className="text-white">Mon / Wed / Fri:</strong> R2G Performance Training</p>
                  <p className="text-[#ffd27a]"><strong>Tue / Thu:</strong> <strong>MLB Training with Jemile Weeks</strong> (ex-MLB)</p>
                  <p><strong className="text-white">Elite Track:</strong> Skill Dev, ML Coaching, Higher Intensity</p>
                </div>
                {[
                  {
                    heading: 'Full Program (Mon–Fri)',
                    cols: 'grid-cols-2',
                    tiles: [
                      { price: '$200', label: 'Week' },
                      { price: '$700', label: 'Month' },
                    ],
                  },
                  {
                    heading: 'Drop-In / Day',
                    cols: 'grid-cols-2',
                    tiles: [
                      { price: '$40', label: 'Mon / Wed / Fri' },
                      { price: '$65', label: 'Tue / Thu (MLB)' },
                    ],
                  },
                  {
                    heading: 'Elite Only',
                    cols: 'grid-cols-3',
                    tiles: [
                      { price: '$65', label: 'Day' },
                      { price: '$130', label: 'Week' },
                      { price: '$468', label: 'Month' },
                    ],
                  },
                ].map(({ heading, cols, tiles }, i, arr) => (
                  <div key={heading} className={i < arr.length - 1 ? 'mb-3' : undefined}>
                    <p className="text-white text-xs font-bold uppercase tracking-wider mb-2">{heading}</p>
                    <div className={`grid ${cols} gap-2`}>
                      {tiles.map((t) => <PriceTile key={t.label} {...t} />)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center md:items-end gap-4">
                <a href="/r2g-summer-program.jpg" target="_blank" rel="noopener" className="block w-full max-w-sm">
                  <Image
                    src="/r2g-summer-program.jpg"
                    alt="R2G Summer Performance Program flyer — June 1 to July 24"
                    width={1264}
                    height={844}
                    className="w-full h-auto border-4 border-white shadow-lg"
                  />
                </a>
                <div className="flex flex-col gap-2 w-full max-w-sm">
                  <a href="tel:3522986699" className="block text-center bg-white text-orange-700 px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors">
                    Call 352-298-6699
                  </a>
                  <a href="mailto:r2gacademy@gmail.com" className="block text-center bg-orange-800 text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-orange-900 transition-colors">
                    Email to Reserve
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Saturday Strength & Conditioning */}
          <div className="mb-8 bg-[#1a2855] p-6 md:p-8 border-4 border-[#a89a5c]">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="inline-block bg-[#a89a5c] text-[#1a2855] text-xs font-bold px-3 py-1 uppercase tracking-widest mb-3">New Program</div>
                <h3 className="font-display text-3xl text-white mb-2">Saturday Strength &amp; Conditioning</h3>
                <p className="text-white/80 mb-2">Ages 13-14 &bull; Every Saturday &bull; 2 Hours</p>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-[#a89a5c] font-display text-4xl">$50</span>
                  <span className="text-white/60 text-sm">per session</span>
                </div>
                <p className="text-white/50 text-sm">10 athletes max per group</p>
              </div>
              <div className="text-center md:text-right">
                <Link href="/saturday-strength" className="inline-block bg-[#a89a5c] text-[#1a2855] px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-[#c4b87a] transition-colors">
                  Register Now
                </Link>
              </div>
            </div>
          </div>

          {/* Fitness Assessment — under Saturday S&C */}
          <div className="mb-8 bg-white border-4 border-[#1a2855] p-6 md:p-8 hover:border-[#a89a5c] transition-colors max-w-lg">
            <h3 className="font-display text-2xl text-[#1a2855] mb-2">Fitness Assessment</h3>
            <div className="text-[#a89a5c] font-display text-4xl mb-2">$75</div>
            <p className="text-[#1a2855] font-semibold mb-4">45 min • Sat & Sun Only</p>
            <p className="text-gray-600 text-sm mb-4">
              Ages 12-15 boys and girls.<br/>
              Comprehensive fitness evaluation.
            </p>
            <EnrollButton programType="fitness" label="Book Now" />
          </div>

          {/* Row 1: Session-based offerings (3 across) */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* 1. Cage Rentals — Team + Single options */}
            <div className="bg-[#1a2855] border-4 border-[#a89a5c] p-6 md:p-8 hover:border-white transition-colors">
              <div className="relative w-full h-32 mb-4 rounded overflow-hidden">
                <Image
                  src="/images/cages.jpg"
                  alt="R2G Academy Batting Cages"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl text-white mb-4">Cage Rentals</h3>

              {/* Team Rental */}
              <div className="border-b border-white/20 pb-3 mb-3">
                <p className="text-white font-semibold text-sm uppercase tracking-wider mb-1">Team Rental</p>
                <div className="text-[#a89a5c] font-display text-4xl mb-1">$250</div>
                <p className="text-white/80 font-semibold text-sm">2 Hour Session</p>
                <div className="text-white/90 font-semibold text-xs mt-1">
                  <span className="text-[#a89a5c]">Slots:</span> 3-5 PM • 5-7 PM • 7-9 PM
                </div>
              </div>

              {/* Single Cage */}
              <div className="pb-3 mb-3">
                <p className="text-white font-semibold text-sm uppercase tracking-wider mb-1">Single Cage</p>
                <p className="text-white/70 text-sm">1-hour batting practice sessions available</p>
              </div>

              <div className="bg-[#a89a5c]/20 border border-[#a89a5c] rounded px-3 py-2 mb-4">
                <p className="text-[#a89a5c] font-bold text-sm">Use code KICKOFF50 for $50 OFF teams!</p>
              </div>
              <ul className="text-white/60 text-sm mb-4 space-y-1">
                <li>• 63&apos; × 26&apos; dividable cage</li>
                <li>• Climate controlled facility</li>
              </ul>
              <a href="https://cal.com/rodolfo-lizardo-tzrkyr/cages" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#a89a5c] text-[#1a2855] px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#c4b87a] transition-colors w-full text-center">
                Book Cage Time
              </a>
            </div>

            {/* 2. Jemile Weeks - Group Workouts */}
            <div className="bg-white border-4 border-[#1a2855] p-6 md:p-8 hover:border-[#a89a5c] transition-colors">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#1a2855]">
                <Image
                  src="/images/jemile.jpg"
                  alt="Jemile Weeks"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl text-[#1a2855] mb-1 text-center">Group Open Field Workout</h3>
              <p className="text-[#a89a5c] font-semibold text-center mb-1">with Jemile Weeks</p>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-wider text-center mb-3">ex-MLB Player</p>
              <div className="text-[#a89a5c] font-display text-4xl mb-2 text-center">$70</div>
              <p className="text-[#1a2855] font-semibold mb-4 text-center">2 hours • Sat or Sun</p>
              <p className="text-gray-600 text-sm mb-4 text-center">
                Registration gives you day, time and location.
              </p>
              <a href="https://form.jotform.com/252495004595057" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#1a2855] text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#0f1a38] transition-colors w-full text-center">
                Register Now
              </a>
            </div>

            {/* 3. Tony Vega - Private Training */}
            <div className="bg-[#1a2855] p-6 md:p-8 relative overflow-hidden group">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#a89a5c]">
                <Image
                  src="/images/tony.jpg"
                  alt="Tony Vega"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-3xl text-white mb-1 text-center">Training with Tony Vega</h3>
              <p className="text-[#a89a5c] text-xs font-bold uppercase tracking-wider text-center mb-3">Former Duke Coach</p>
              <div className="text-[#a89a5c] font-display text-4xl mb-2 text-center">$85</div>
              <p className="text-white/70 mb-4 text-center">1 hour • One-on-one</p>
              <p className="text-white/60 text-sm mb-6 text-center">
                Elite training with experienced coaching.
              </p>
              <a href="tel:3522986699" className="inline-block bg-[#a89a5c] text-[#1a2855] px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#c4b87a] transition-colors w-full text-center">
                Call to Book
              </a>
            </div>
          </div>

          {/* Row 2: Jahmon Taylor + Justin Austin */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* 4. Jahmon Taylor - Pitching & Mental Approach */}
            <div className="bg-[#1a2855] p-6 md:p-8 relative overflow-hidden group">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#a89a5c]">
                <Image
                  src="/images/jahmon.jpg"
                  alt="Jahmon Taylor"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-3xl text-white mb-1 text-center">Jahmon Taylor</h3>
              <p className="text-[#a89a5c] text-xs font-bold uppercase tracking-wider text-center mb-3">Pitching Mechanics & Mental Approach</p>
              <p className="text-white/60 text-sm mb-4 text-center">
                Coppin State Graduate. Pro ball experience.<br/>
                NSCA Certified Strength & Conditioning Specialist.
              </p>
              <a href="mailto:coach@trainingwithinertia.com" className="inline-block bg-[#a89a5c] text-[#1a2855] px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#c4b87a] transition-colors w-full text-center">
                Email to Book: coach@trainingwithinertia.com
              </a>
            </div>

            {/* 5. Justin Austin - Hitting Lessons */}
            <div className="bg-[#1a2855] p-6 md:p-8 relative overflow-hidden group">
              <div className="relative w-full h-32 mb-4 rounded overflow-hidden border-4 border-[#a89a5c]">
                <Image
                  src="/images/justin.jpg"
                  alt="Justin Austin hitting"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="font-display text-3xl text-white mb-1 text-center">Justin Austin</h3>
              <p className="text-[#a89a5c] text-xs font-bold uppercase tracking-wider text-center mb-3">Baseball Hitting Lessons</p>
              <div className="text-[#a89a5c] font-display text-4xl mb-1 text-center">$90</div>
              <p className="text-white/70 mb-4 text-center">1 hour • One-on-one</p>

              {/* Career stat line */}
              <div className="grid grid-cols-4 gap-2 mb-4 text-center">
                <div><div className="text-[#a89a5c] font-display text-xl leading-none">.301</div><div className="text-white/50 text-[10px] uppercase tracking-wider">AVG</div></div>
                <div><div className="text-[#a89a5c] font-display text-xl leading-none">17</div><div className="text-white/50 text-[10px] uppercase tracking-wider">HR</div></div>
                <div><div className="text-[#a89a5c] font-display text-xl leading-none">56</div><div className="text-white/50 text-[10px] uppercase tracking-wider">RBI</div></div>
                <div><div className="text-[#a89a5c] font-display text-xl leading-none">.435</div><div className="text-white/50 text-[10px] uppercase tracking-wider">OBP</div></div>
              </div>

              <ul className="text-white/60 text-sm mb-6 space-y-1">
                <li>• Gold Glove Team (LF) • AAC Co-Player of the Week</li>
                <li>• AAC All-District & All-Academic Team</li>
                <li>• Efficient mechanics & smart approach at the plate</li>
              </ul>

              <a href="tel:3478761870" className="inline-block bg-[#a89a5c] text-[#1a2855] px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#c4b87a] transition-colors w-full text-center">
                Call to Book: 347-876-1870
              </a>
            </div>
          </div>

          {/* Team Training Promo */}
          <div className="mt-12 bg-[#1a2855] p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="halftone w-full h-full" />
            </div>
            <div className="relative z-10">
              <div className="text-[#a89a5c] font-bold text-sm uppercase tracking-widest mb-2">Limited Time Offer</div>
              <h3 className="font-display text-4xl md:text-5xl text-white mb-4">$50 OFF TEAM TRAINING</h3>
              <p className="text-white/80 mb-6 max-w-xl mx-auto text-lg">
                Book a 2-hour team training session and save $50 with promo code <strong className="text-[#a89a5c]">KICKOFF50</strong>
              </p>
              <a href="https://cal.com/rodolfo-lizardo-tzrkyr/cages" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#a89a5c] text-[#1a2855] px-10 py-4 font-bold uppercase tracking-wider hover:bg-[#c4b87a] transition-colors text-lg">
                Book Now & Use Code: KICKOFF50
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Champions Section — "The Proof" (moved up per feedback) */}
      <section id="wins" className="py-24 md:py-32 bg-[#1a2855] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1508344928928-7165b0a59078?w=1920&q=80"
            alt="Baseball texture"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#a89a5c] font-bold text-sm uppercase tracking-widest">The Proof</span>
            <h2 className="font-display text-5xl md:text-7xl text-white mt-2">OUR KIDS WIN.</h2>
            <p className="text-white/60 mt-4 text-lg max-w-xl mx-auto">
              World Series. State titles. Regional championships. This wall keeps growing.
            </p>
          </div>

          {/* Championship tiles */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1a1a1a] p-6 text-center">
              <div className="font-display text-5xl text-[#a89a5c] mb-2">2024</div>
              <h3 className="font-display text-2xl text-white mb-2">Team Florida</h3>
              <p className="text-[#a89a5c] font-bold uppercase tracking-wider">Training Partners</p>
            </div>

            <div className="bg-[#1a1a1a] p-6 text-center">
              <div className="font-display text-5xl text-[#a89a5c] mb-2">USSSA</div>
              <h3 className="font-display text-2xl text-white mb-2">All American Games</h3>
              <p className="text-[#a89a5c] font-bold uppercase tracking-wider">Champions</p>
            </div>

            <div className="bg-[#1a1a1a] p-6 text-center">
              <div className="font-display text-5xl text-[#a89a5c] mb-2">PGF</div>
              <h3 className="font-display text-2xl text-white mb-2">State Championship</h3>
              <p className="text-[#a89a5c] font-bold uppercase tracking-wider">Champions</p>
            </div>

            <div className="bg-[#1a1a1a] p-6 text-center">
              <div className="font-display text-5xl text-[#a89a5c] mb-2">USSSA</div>
              <h3 className="font-display text-2xl text-white mb-2">Space Coast World Series</h3>
              <p className="text-[#a89a5c] font-bold uppercase tracking-wider">Champions</p>
            </div>

            <div className="bg-[#1a1a1a] p-6 text-center">
              <div className="font-display text-5xl text-[#a89a5c] mb-2">LL</div>
              <h3 className="font-display text-2xl text-white mb-2">World Series Southeast</h3>
              <p className="text-[#a89a5c] font-bold uppercase tracking-wider">Representatives</p>
            </div>

            <div className="bg-[#a89a5c] p-6 text-center flex flex-col justify-center">
              <h3 className="font-display text-2xl text-[#1a2855] mb-4">Your Team Next?</h3>
              <a href="#services" className="inline-block bg-[#1a2855] text-white px-6 py-3 font-bold uppercase tracking-wider hover:bg-[#0f1a38] transition-colors">
                Start Training
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section — "Building the Dream" */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#a89a5c] font-bold text-sm uppercase tracking-widest">See Us In Action</span>
            <h2 className="font-display text-4xl md:text-5xl text-white mt-2">BUILDING THE DREAM</h2>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/5e6j6FsKg_w"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="R2G Academy - Building the Dream"
            />
          </div>
        </div>
      </section>

      {/* About — "Our Mission" (moved up per feedback) */}
      <section id="about" className="py-24 md:py-32 bg-[#f5f2eb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#a89a5c] font-bold text-sm uppercase tracking-widest">Our Mission</span>
              <h2 className="font-display text-5xl md:text-6xl text-[#1a2855] mt-2 mb-8">
                FROM CONCRETE<br/>TO <span className="text-[#a89a5c]">CHAMPIONS</span>
              </h2>

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  At R2G Academy, our mission is to elevate athletes and teams by providing a comfortable,
                  fully serviced training environment featuring a <strong>63&apos; × 26&apos; dividable cage</strong> and
                  an adjacent, precision-focused bullpen.
                </p>
                <p>
                  We enable <em>evidence-based practice</em> and a culture of <strong>positive accountability</strong> to
                  build resilience, leadership, and sportsmanship.
                </p>
                <p>
                  A dedicated lounge keeps the training floor distraction-free so progress stays the priority.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#1a2855] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#a89a5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-[#1a2855]">Evidence-Based</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#1a2855] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#a89a5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-[#1a2855]">Climate Controlled</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#1a2855] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#a89a5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-[#1a2855]">Player Lounge</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#1a2855] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#a89a5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-[#1a2855]">Pro Equipment</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] bg-white p-4 shadow-2xl photo-tilt-right">
                <div className="tape" />
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1471295253337-3ceaaedca402?w=800&q=80"
                    alt="Stadium lights"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-24 md:py-32 bg-[#f5f2eb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#a89a5c] font-bold text-sm uppercase tracking-widest">Our Athletes</span>
            <h2 className="font-display text-5xl md:text-6xl text-[#1a2855] mt-2">PHOTO GALLERY</h2>
            <p className="text-gray-600 mt-4 text-lg">Champions in the making</p>
          </div>

          {/* Full Gallery Grid - Team Florida Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: 1, label: 'Team Practice', title: 'Building Skills Together' },
              { img: 2, label: 'Game Day', title: 'Competition Ready' },
              { img: 3, label: 'Training Session', title: 'Elite Development' },
              { img: 4, label: 'Team Spirit', title: 'Championship Mindset' },
              { img: 5, label: 'Youth Program', title: 'Future Stars' },
              { img: 6, label: 'Skill Work', title: 'Perfecting the Craft' },
            ].map((photo) => (
              <div key={photo.img} className="group relative overflow-hidden bg-white p-3 shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`/images/team-florida-${photo.img}.jpg`}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-3 pb-1">
                  <div className="text-[#a89a5c] text-xs font-bold uppercase tracking-wider">{photo.label}</div>
                  <h3 className="font-display text-xl text-[#1a2855]">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Want to see your team on this wall?</p>
            <a href="#services" className="inline-block bg-[#a89a5c] text-[#1a2855] px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#c4b87a] transition-colors">
              Start Training Today
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[#a89a5c] font-bold text-sm uppercase tracking-widest">Contact Us</span>
              <h2 className="font-display text-5xl md:text-6xl text-white mt-2 mb-8">
                COME SEE US
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl text-[#a89a5c] mb-2">Location</h3>
                  <p className="text-white/80 text-lg">
                    1750 S. Ronald Reagan Blvd<br/>
                    Altamonte Springs, FL 32701
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-2xl text-[#a89a5c] mb-2">Call Us</h3>
                  <a href="tel:3522986699" className="text-white text-4xl font-bold hover:text-[#a89a5c] transition-colors">
                    (352) 298-6699
                  </a>
                </div>

                <div>
                  <h3 className="font-display text-2xl text-[#a89a5c] mb-2">Email</h3>
                  <a href="mailto:info@r2gacademy.com" className="text-white/80 text-lg hover:text-[#a89a5c] transition-colors">
                    info@r2gacademy.com
                  </a>
                </div>

                <div>
                  <h3 className="font-display text-2xl text-[#a89a5c] mb-2">Hours</h3>
                  <p className="text-white/80 text-lg">
                    Monday - Friday: 2 PM - 10 PM<br/>
                    Saturday - Sunday: Appointment Only
                  </p>
                </div>
              </div>

              {/* Logo */}
              <div className="mt-12">
                <Image
                  src="/images/r2glogo.png"
                  alt="R2G Academy"
                  width={120}
                  height={150}
                  className="h-32 w-auto"
                />
              </div>
            </div>

            <div className="bg-white p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8!2d-81.3656!3d28.6611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM5JzQwLjAiTiA4McKwMjEnNTYuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="R2G Academy Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f0f0f] py-12 border-t-4 border-[#a89a5c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Image
              src="/images/r2glogo.png"
              alt="R2G Academy"
              width={50}
              height={65}
              className="h-14 w-auto"
            />

            <div className="text-white/40 text-sm text-center md:text-left">
              Indoor Batting Cages · Baseball Training · Softball · Seminole County FL
            </div>

            <div className="text-white/40 text-sm">
              © {new Date().getFullYear()} R2G Academy. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
