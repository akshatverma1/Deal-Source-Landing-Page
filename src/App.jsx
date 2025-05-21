import { Button } from "./components/ui/button"
import { CheckCircle, Search, BarChart3, Database, Users, Target, Clock, Puzzle } from "lucide-react"
import Sem from "./assets/sem.svg"
import navbarLogo from "./assets/Deal-Source-NavBar-Logo.svg";
import HeroSectionImage from "./assets/Untitled.svg";
import BitDefender from "./assets/Trusted-Section/bit-defender.svg"
import Cisco from "./assets/Trusted-Section/cisco.svg"
import Ubiquiti from "./assets/Trusted-Section/ubquite.svg"
import Fluks from "./assets/Trusted-Section/fluks.svg"
import Microsoft from "./assets/Trusted-Section/microsoft.svg"
import Next from "./assets/Trusted-Section/next.svg"
import Webroot from "./assets/Trusted-Section/webroot.svg"
import Benefits1 from "./assets/Benefits/benefits-1.svg"
import Benefits2 from "./assets/Benefits/benefits-2.svg"
import Benefits3 from "./assets/Benefits/benefits-3.svg"
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b sticky top-0 z-50 bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={navbarLogo}
              alt="DealSource Logo"
              className="w-[11.209375rem] h-[1.625rem]"
            />
            {/* <span className="text-primary">Deal</span>Source */}
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium">
              Benefits
            </a>
            <a href="#" className="text-sm font-medium">
              Features
            </a>
            <a href="#" className="text-sm font-medium">
              Why
            </a>
            <a href="#" className="text-sm font-medium">
              Customers
            </a>
          </nav>
          <div>
            <Button>Sign In</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-5"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Unlock More <span className="text-primary">High-Quality Deals</span>
                <br />
                Faster Than Ever
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                DealSource offers the most extensive,AI-powered database of companies,investors and deals-purpose-build for <b>M&A</b> and <b>Private Equity</b> professionals.Effortiessly generate tailored long lists with single click.              </p>
              {/* <Button size="lg" className="px-8">
                Get Started
              </Button> */}
            </div>
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-lg overflow-hidden ">
                <img src={HeroSectionImage} alt="DealSource Dashboard" className="w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-12">
          <div className="container">
            <p className="text-center text-sm uppercase font-medium text-gray-500 mb-8">TRUSTED BY</p>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-8 items-center justify-items-center opacity-70">
              <img src={Cisco} alt="Cisco" />
              <img src={BitDefender} alt="Bitdefender" />
              <img src={Ubiquiti} alt="Ubiquiti" />
              <img src={Fluks} alt="Fluks" />
              <img src={Microsoft} alt="Microsoft" />
              <img src={Webroot} alt="Webroot" />
              <img src={Next} alt="Netline" />
            </div>
          </div>
        </section>


        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-10">Benefits</h2>
            <div className="grid md:grid-cols-3 gap-0 pl-40 pr-40 place-items-center">
              {/* Card 1 */}
                {/* <div className="w-[248px] h-[300px] rounded-lg overflow-hidden shadow-lg"> */}
                <img src={Benefits1} alt="" className="w-[300px] h-[400px] m-0" />
                {/* </div> */}
                {/* <div> */}
                <img src={Benefits2} alt="" className="w-[300px] h-[400px]" />
                {/* </div> */}
                {/* <div> */}
                <img src={Benefits3} alt="" className="w-[300px] h-[400px]" />
                {/* </div> */}
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-16">Core Features</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">AI-Powered Search</h3>
                <p className="text-sm text-gray-600">Find the perfect fit based on a range of criteria</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Proprietary Data</h3>
                <p className="text-sm text-gray-600">Access exclusive information not available elsewhere</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Comprehensive Profiles</h3>
                <p className="text-sm text-gray-600">Get in-depth insights on companies and executives</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">In-Depth Searching</h3>
                <p className="text-sm text-gray-600">Filter by multiple criteria to find exact matches</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry-Driven Database */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4">Industry-Driven Database</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
              Our proprietary database is built specifically for deal professionals and private equity investors to find
              the perfect fit.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-2">One-Click Target Lists</h3>
                <p className="text-sm text-gray-600">
                  Generate targeted company lists with a single click based on your criteria
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-2">Proprietary Data Engine</h3>
                <p className="text-sm text-gray-600">
                  Access exclusive information gathered from multiple sources and enhanced with AI
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-2">Customizable Filters</h3>
                <p className="text-sm text-gray-600">
                  Create and save custom filters to quickly find the companies that match your investment thesis
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-2">In-Depth Searching</h3>
                <p className="text-sm text-gray-600">
                  Search by industry, size, location, growth rate, and dozens of other criteria
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Button>Learn More</Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="max-w-md mb-10 md:mb-0">
                <h2 className="text-2xl font-bold mb-4">
                  One Platform —<br />
                  all the right insights
                </h2>
                <p className="text-gray-600 mb-6">
                  DealSource uses AI algorithms to analyze millions of relevant datapoints, which are enriched with the most trustworthy datasources, and Machine Learning for predictive analytics. One platform for all your M&A and PE data needs.
                </p>
                <Button variant="outline">Get In Touch</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary text-white p-8 rounded-lg">
                  <div className="text-4xl font-bold mb-2">65+ mln</div>
                  <div className="text-sm opacity-80">companies in the database</div>
                </div>
                <div className="bg-primary text-white p-8 rounded-lg">
                  <div className="text-4xl font-bold mb-2">100k+</div>
                  <div className="text-sm opacity-80">curated investors</div>
                </div>
                <div className="bg-primary text-white p-8 rounded-lg col-span-2">
                  <div className="text-4xl font-bold mb-2">2+ mln</div>
                  <div className="text-sm opacity-80">deals & increasing daily</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tailored Intelligence Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-16">Tailored Intelligence for Every Dealmaker</h2>

            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-8">For M&A professionals</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="p-6">
                  <h4 className="text-lg font-medium mb-3">One‑Click Buyer & Target Lists</h4>
                  <p className="text-gray-400 text-sm">Instantly generate the most relevant buyers or acquisition targets at the click of a button—no more sifting through spreadsheets or generic databases.</p>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-medium mb-3">Real‑Time Deal Activity</h4>
                  <p className="text-gray-400 text-sm">Stay on top of the latest M&A transactions and market moves so you never miss an emerging opportunity.</p>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-medium mb-3">Deep Industry Knowledge</h4>
                  <p className="text-gray-400 text-sm">Access proprietary metrics and trend data to understand sector dynamics, benchmark valuations, and craft winning deal strategies.</p>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-medium mb-3">Elevated Deal‑Making</h4>
                  <p className="text-gray-400 text-sm">From sourcing through execution, streamline every step of your process and close deals faster with data‑driven insights.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-8">For Private Equity professionals</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="p-6">
                  <h4 className="text-lg font-medium mb-3">Add‑On Opportunity Discovery</h4>
                  <p className="text-gray-400 text-sm">Pinpoint the most complementary acquisitions to bolt onto existing portfolio companies with advanced filtering, scoring, and one‑click shortlisting.</p>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-medium mb-3">Precision Target Sourcing</h4>
                  <p className="text-gray-400 text-sm">Build a high‑conviction pipeline by filtering and ranking companies by Revenue, EBITDA, sector, geography, and custom metrics.</p>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-medium mb-3">Live Market Intelligence</h4>
                  <p className="text-gray-400 text-sm">Monitor real‑time valuation trends and deal volume across industries to optimize entry, scaling, and exit timing.</p>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-medium mb-3">Competitive & Portfolio Insights</h4>
                  <p className="text-gray-400 text-sm">Benchmark your portfolio against peers, identify potential add‑ons early, and spot emerging disruptors before the competition.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <Button>Join Us!</Button>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={Sem}
                  alt="Sem Cruiming"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-lg mb-6">I remember as an M&A analyst I spent days—sometimes weeks—manually building long lists in a tangle of spreadsheets while using several expensive databases. Frustrated by dead ends, high subscription fees and wasted hours,I knew there had to be a smarter way.</p>
                <p className="mb-1">That pain drove me to build DealSource—a tool that turns “needle‑in‑a‑haystack” searches into lightning‑fast matches, so you spend less time digging and more time closing deals.</p>
                <div className="mt-4">
                  <p className="font-semibold">Sem Cruiming</p>
                  <p className="text-sm text-gray-600">Co-Founder • DealSource</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Banking Platform</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#">Overview</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Enterprise</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#">M&A</a>
                </li>
                <li>
                  <a href="#">Private Equity</a>
                </li>
                <li>
                  <a href="#">Investment Banking</a>
                </li>
                <li>
                  <a href="#">Corporate Development</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#">Consulting</a>
                </li>
                <li>
                  <a href="#">Implementation</a>
                </li>
                <li>
                  <a href="#">Training</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Insights</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Reports</a>
                </li>
                <li>
                  <a href="#">Case Studies</a>
                </li>
                <li>
                  <a href="#">Webinars</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between">
            <p>© DealSource 2025 All rights reserved</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Modern Slavery Statement</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
