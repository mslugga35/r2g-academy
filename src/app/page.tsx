import Image from "next/image";
import EnrollButton from "./components/EnrollButton";

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
              <a href="#schedule" className="text-white/80 hover:text-[#a89a5c] font-semibold text-sm uppercase tracking-wider transition-colors">Schedule</a>
              <a href="#gallery" className="text-white/80 hover:text-[#a89a5c] font-semibold text-sm uppercase tracking-wider transition-colors">Gallery</a>
              <a href="/blog" className="text-white/80 hover:text-[#a89a5c] font-semibold text-sm uppercase tracking-wider transition-colors">Blog</a>
              <a href="#contact" className="text-white/80 hover:text-[#a89a5c] font-semibold text-sm uppercase tracking-wider transition-colors">Contact</a>
              <a href="#schedule" className="bg-[#a89a5c] text-[#1a2855] px-5 py-2 font-bold text-sm uppercase tracking-wider hover:bg-[#c4b87a] transition-colors">
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

              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] mb-6">
                FROM CONCRETE<br/>
                <span className="text-[#a89a5c]">TO</span><br/>
                <span className="text-[#a89a5c]">CHAMPIONS</span>
              </h1>

              <p className="text-white/70 text-lg md:text-xl max-w-lg mb-8 font-medium leading-relaxed">
                63&apos; × 26&apos; dividable cage. Precision bullpen. Evidence-based coaching.
                Seminole County&apos;s home for champions.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#schedule" className="group bg-[#a89a5c] text-[#1a2855] px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#c4b87a] transition-all duration-300">
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
                      src="/images/original/IMG_3022.jpg"
                      alt="World Series Champions"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-[#a89a5c] text-white px-3 py-1 text-xs font-bold uppercase">
                    2024 World Series Champs
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

      {/* Services/Programs */}
      <section id="services" className="py-24 md:py-32 bg-[#f5f2eb]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#a89a5c] font-bold text-sm uppercase tracking-widest">Programs & Pricing</span>
            <h2 className="font-display text-5xl md:text-6xl text-[#1a2855] mt-2">
              BOOK YOUR SESSION
            </h2>
          </div>

          {/* Facility Hours Banner */}
          <div className="mb-8 bg-[#1a2855] p-4 text-center">
            <p className="text-white font-semibold">
              <span className="text-[#a89a5c]">Facility Hours:</span> Mon-Fri 2-10 PM • Sat/Sun Appointment Only
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Training with Tony */}
            <div className="bg-[#1a2855] p-6 md:p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-[#a89a5c] text-[#1a1a1a] px-3 py-1 text-xs font-bold uppercase">
                Featured
              </div>
              {/* Tony's Photo */}
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#a89a5c]">
                <Image
                  src="/images/tony.jpg"
                  alt="Tony Vega"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-3xl text-white mb-2 text-center">Training with Tony Vega</h3>
              <div className="text-[#a89a5c] font-display text-4xl mb-2 text-center">$125</div>
              <p className="text-white/70 mb-4 text-center">1 hour session</p>
              <p className="text-white/60 text-sm mb-6 text-center">
                One-on-one elite training with experienced coaching.
              </p>
              <a href="tel:3522986699" className="inline-block bg-[#a89a5c] text-[#1a2855] px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#c4b87a] transition-colors w-full text-center">
                📞 Call to Book
              </a>
            </div>

            {/* Skill Development - Jemile */}
            <div className="bg-white border-4 border-[#1a2855] p-6 md:p-8 hover:border-[#a89a5c] transition-colors">
              {/* Jemile's Photo */}
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#1a2855]">
                <Image
                  src="/images/jemile.jpg"
                  alt="Jemile Weeks"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-display text-2xl text-[#1a2855] mb-2 text-center">Group Open Field Workout</h3>
              <p className="text-[#a89a5c] font-semibold text-center mb-2">with Jemile Weeks</p>
              <div className="text-[#a89a5c] font-display text-4xl mb-2 text-center">$70</div>
              <p className="text-[#1a2855] font-semibold mb-4 text-center">2 hours • Sat or Sun</p>
              <p className="text-gray-600 text-sm mb-4 text-center">
                Registration gives you day, time and location.
              </p>
              <a href="https://form.jotform.com/252495004595057" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#1a2855] text-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#0f1a38] transition-colors w-full text-center">
                Register Now
              </a>
            </div>

            {/* After School */}
            <div className="bg-white border-4 border-[#1a2855] p-6 md:p-8 hover:border-[#a89a5c] transition-colors">
              <h3 className="font-display text-2xl text-[#1a2855] mb-2">After School Program</h3>
              <div className="text-[#a89a5c] font-display text-4xl mb-2">$100<span className="text-lg">/week</span></div>
              <p className="text-[#1a2855] font-semibold mb-2">Mon-Fri • 3 hours</p>
              <p className="text-gray-500 text-xs mb-4 italic">Drop Off Only</p>
              <ul className="text-gray-600 text-sm mb-4 space-y-1">
                <li>• Baseball/Softball IQ</li>
                <li>• Exercise & conditioning</li>
                <li>• Throwing & glove work</li>
                <li>• Hitting drills</li>
              </ul>
              <EnrollButton programType="afterschool" label="Enroll Now" />
            </div>

            {/* Fitness Assessment */}
            <div className="bg-white border-4 border-[#1a2855] p-6 md:p-8 hover:border-[#a89a5c] transition-colors">
              <h3 className="font-display text-2xl text-[#1a2855] mb-2">Fitness Assessment</h3>
              <div className="text-[#a89a5c] font-display text-4xl mb-2">$75</div>
              <p className="text-[#1a2855] font-semibold mb-4">45 min • Sat & Sun Only</p>
              <p className="text-gray-600 text-sm mb-4">
                Ages 12-15 boys and girls.<br/>
                Comprehensive fitness evaluation.
              </p>
              <EnrollButton programType="fitness" label="Book Now" />
            </div>

            {/* Team/Cage Rentals */}
            <div className="bg-[#1a2855] border-4 border-[#a89a5c] p-6 md:p-8 hover:border-white transition-colors">
              <h3 className="font-display text-2xl text-white mb-2">Team & Cage Rentals</h3>
              <div className="text-[#a89a5c] font-display text-3xl mb-2">2 Hour Sessions</div>
              <p className="text-white/70 font-semibold mb-4">Perfect for teams & groups</p>
              <ul className="text-white/60 text-sm mb-4 space-y-1">
                <li>• 63&apos; × 26&apos; dividable cage</li>
                <li>• Climate controlled facility</li>
                <li>• Team practice & drills</li>
                <li>• Private group sessions</li>
              </ul>
              <a href="tel:3522986699" className="inline-block bg-[#a89a5c] text-[#1a2855] px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#c4b87a] transition-colors w-full text-center">
                📞 Call for Availability
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
              <a href="#schedule" className="inline-block bg-[#a89a5c] text-[#1a2855] px-10 py-4 font-bold uppercase tracking-wider hover:bg-[#c4b87a] transition-colors text-lg">
                Book Now & Use Code: KICKOFF50
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule / Booking Section */}
      <section id="schedule" className="py-24 md:py-32 bg-[#1a2855]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#a89a5c] font-bold text-sm uppercase tracking-widest">Ready to Train?</span>
            <h2 className="font-display text-5xl md:text-6xl text-white mt-2">BOOK YOUR SESSION</h2>
            <p className="text-white/60 mt-4 text-lg max-w-xl mx-auto">
              Select a time that works for you. We&apos;ll confirm your session within 24 hours.
            </p>
          </div>

          {/* Two Trainer Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Tony's Card */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-[#1a2855] p-6 text-center">
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-[#a89a5c] mb-4">
                  <Image
                    src="/images/tony.jpg"
                    alt="Tony Vega"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display text-3xl text-white">Tony Vega</h3>
                <p className="text-[#a89a5c]">1-on-1 Training • $125/hr</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-gray-600 mb-6">
                  Elite one-on-one training sessions with experienced coaching. Build your skills with personalized attention.
                </p>
                <a
                  href="tel:3522986699"
                  className="inline-block bg-[#a89a5c] text-[#1a2855] px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#c4b87a] transition-colors w-full"
                >
                  📞 Call to Book
                </a>
              </div>
            </div>

            {/* Jemile's Card */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-[#1a2855] p-6 text-center">
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-[#a89a5c] mb-4">
                  <Image
                    src="/images/jemile.jpg"
                    alt="Jemile Weeks"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display text-3xl text-white">Jemile Weeks</h3>
                <p className="text-[#a89a5c]">Group Open Field Workout • $70/2hr • Sat or Sun</p>
              </div>
              <div className="p-6 text-center">
                <p className="text-gray-600 mb-6">
                  Former MLB player offering elite skill development training. Registration gives you day, time and location.
                </p>
                <a
                  href="https://form.jotform.com/252495004595057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#1a2855] text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#0f1a38] transition-colors w-full"
                >
                  Contact Jemile
                </a>
              </div>
            </div>
          </div>

          {/* Fallback contact */}
          <div className="text-center mt-8">
            <p className="text-white/60 mb-2">Prefer to call?</p>
            <a href="tel:3522986699" className="text-[#a89a5c] text-2xl font-bold hover:text-[#c4b87a] transition-colors">
              (352) 298-6699
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#a89a5c] font-bold text-sm uppercase tracking-widest">See Us In Action</span>
            <h2 className="font-display text-4xl md:text-5xl text-white mt-2">BUILDING THE DREAM</h2>
          </div>

          {/* Vimeo Video */}
          <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://player.vimeo.com/video/1121769977?h=c8241a96b0"
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
              title="R2G Academy - Building the Dream"
            />
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

          {/* Full Gallery Grid - All 6 Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Photo 1 - Cal Ripken World Series */}
            <div className="group relative overflow-hidden bg-white p-3 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/original/IMG_3024.jpg"
                  alt="2024 Cal Ripken World Series Champions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3 pb-1">
                <div className="text-[#a89a5c] text-xs font-bold uppercase tracking-wider">2024 Champions</div>
                <h3 className="font-display text-xl text-[#1a2855]">Cal Ripken World Series</h3>
              </div>
            </div>

            {/* Photo 2 - Ripken Celebration */}
            <div className="group relative overflow-hidden bg-white p-3 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/original/IMG_3022.jpg"
                  alt="Ripken World Series Celebration"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3 pb-1">
                <div className="text-[#a89a5c] text-xs font-bold uppercase tracking-wider">Victory Celebration</div>
                <h3 className="font-display text-xl text-[#1a2855]">Ripken World Series Trophy</h3>
              </div>
            </div>

            {/* Photo 3 - All American Games */}
            <div className="group relative overflow-hidden bg-white p-3 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/original/IMG_6536.jpg"
                  alt="USSSA All American Games"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3 pb-1">
                <div className="text-[#a89a5c] text-xs font-bold uppercase tracking-wider">USSSA Softball</div>
                <h3 className="font-display text-xl text-[#1a2855]">All American Games</h3>
              </div>
            </div>

            {/* Photo 4 - Space Coast World Series */}
            <div className="group relative overflow-hidden bg-white p-3 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/original/facility-1.jpg"
                  alt="Space Coast World Series"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3 pb-1">
                <div className="text-[#a89a5c] text-xs font-bold uppercase tracking-wider">USSSA Champions</div>
                <h3 className="font-display text-xl text-[#1a2855]">Space Coast World Series</h3>
              </div>
            </div>

            {/* Photo 5 - PGF States */}
            <div className="group relative overflow-hidden bg-white p-3 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/original/facility-2.jpg"
                  alt="PGF State Champions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3 pb-1">
                <div className="text-[#a89a5c] text-xs font-bold uppercase tracking-wider">PGF Softball</div>
                <h3 className="font-display text-xl text-[#1a2855]">State Champions</h3>
              </div>
            </div>

            {/* Photo 6 - Little League World Series */}
            <div className="group relative overflow-hidden bg-white p-3 shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/original/IMG_1299.jpg"
                  alt="Little League World Series Southeast"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3 pb-1">
                <div className="text-[#a89a5c] text-xs font-bold uppercase tracking-wider">Little League</div>
                <h3 className="font-display text-xl text-[#1a2855]">World Series Southeast</h3>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Want to see your team on this wall?</p>
            <a href="#schedule" className="inline-block bg-[#a89a5c] text-[#1a2855] px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#c4b87a] transition-colors">
              Start Training Today
            </a>
          </div>
        </div>
      </section>

      {/* Champions Section */}
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
              <h3 className="font-display text-2xl text-white mb-2">Cal Ripken World Series</h3>
              <p className="text-[#a89a5c] font-bold uppercase tracking-wider">Champions</p>
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
              <a href="#schedule" className="inline-block bg-[#1a2855] text-white px-6 py-3 font-bold uppercase tracking-wider hover:bg-[#0f1a38] transition-colors">
                Start Training
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
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
              <div className="absolute -bottom-6 -left-6 bg-[#a89a5c] text-white p-6 shadow-xl">
                <div className="font-display text-4xl">9-9</div>
                <div className="text-sm uppercase tracking-wider opacity-80">Open Daily</div>
              </div>
            </div>
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
