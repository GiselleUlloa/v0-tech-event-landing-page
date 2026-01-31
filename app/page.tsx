import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Calendar, Code2, Users, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6" />
              <span className="text-lg font-semibold">DevEvent</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#agenda" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Agenda
              </a>
              <a href="#cta" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Register
              </a>
            </div>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm">
              <Calendar className="h-4 w-4" />
              <span>March 15-17, 2026 • San Francisco</span>
            </div>
            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              The Future of Web Development
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Join industry leaders, innovative developers, and tech pioneers for three days of cutting-edge insights, hands-on workshops, and networking opportunities that will shape the next generation of web applications.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="gap-2">
                Register Now
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Schedule
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Early bird pricing ends February 1st • Limited to 500 attendees
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why DevEvent 2026?
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              DevEvent has become the premier gathering for web developers and technology enthusiasts worldwide. Our mission is to connect the brightest minds in the industry, showcase groundbreaking technologies, and provide a platform for knowledge sharing that drives innovation forward.
            </p>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Whether you're a seasoned architect, a curious newcomer, or anywhere in between, DevEvent offers unparalleled opportunities to learn from experts, discover new tools, and build lasting connections with fellow developers who share your passion for creating exceptional web experiences.
            </p>
            
            {/* Stats Grid */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="text-3xl font-bold">500+</div>
                <div className="mt-1 text-sm text-muted-foreground">Attendees</div>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="text-3xl font-bold">50+</div>
                <div className="mt-1 text-sm text-muted-foreground">Speakers</div>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="text-3xl font-bold">30+</div>
                <div className="mt-1 text-sm text-muted-foreground">Sessions</div>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="text-3xl font-bold">3</div>
                <div className="mt-1 text-sm text-muted-foreground">Days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Agenda Section */}
      <section id="agenda" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What to Expect
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Three days packed with inspiring talks, practical workshops, and valuable networking
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature Card 1 */}
              <Card className="group relative overflow-hidden border-border bg-card p-8 transition-all hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Keynote Sessions</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  Hear from industry leaders about the latest trends, breakthrough technologies, and the future direction of web development from companies like Vercel, Netlify, and more.
                </p>
              </Card>

              {/* Feature Card 2 */}
              <Card className="group relative overflow-hidden border-border bg-card p-8 transition-all hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Technical Workshops</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  Dive deep into hands-on workshops covering Next.js, React Server Components, AI integration, performance optimization, and modern deployment strategies.
                </p>
              </Card>

              {/* Feature Card 3 */}
              <Card className="group relative overflow-hidden border-border bg-card p-8 transition-all hover:shadow-lg">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Networking Events</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  Connect with fellow developers, potential collaborators, and hiring companies during dedicated networking sessions, evening receptions, and interactive roundtables.
                </p>
              </Card>

              {/* Feature Card 4 */}
              <Card className="group relative overflow-hidden border-border bg-card p-8 transition-all hover:shadow-lg md:col-span-2 lg:col-span-3">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Day 1</div>
                    <h4 className="mt-2 text-lg font-semibold">Foundations & Future</h4>
                    <p className="mt-2 text-sm text-muted-foreground">Opening keynotes, web platform updates, and emerging framework trends</p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Day 2</div>
                    <h4 className="mt-2 text-lg font-semibold">Deep Dive Sessions</h4>
                    <p className="mt-2 text-sm text-muted-foreground">Technical workshops, performance optimization, and AI-powered development</p>
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Day 3</div>
                    <h4 className="mt-2 text-lg font-semibold">Building Together</h4>
                    <p className="mt-2 text-sm text-muted-foreground">Collaborative hackathon, project showcases, and closing celebrations</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <div className="px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to shape the future of the web?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                  Join hundreds of developers, engineers, and innovators at DevEvent 2026. Early bird tickets are limited and selling fast.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button size="lg" className="gap-2">
                    Register for DevEvent 2026
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Download Brochure
                  </Button>
                </div>
                <p className="mt-8 text-sm text-muted-foreground">
                  Questions? Contact us at{' '}
                  <a href="mailto:hello@devevent.io" className="underline hover:text-foreground">
                    hello@devevent.io
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5" />
                <span className="font-semibold">DevEvent</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                The premier tech conference for web developers and innovators.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Event</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Schedule
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Speakers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Venue
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Sponsorship
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Press Kit
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Code of Conduct
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2026 DevEvent. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
