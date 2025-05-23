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
import Aiicon from "./assets/Core-Features/ai.svg"
import IndustruIcon from "./assets/Core-Features/industry.svg"
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
            <a style = {{fontWeight:"600"}} href="#" className="text-sm font-assistant">
              Benefits
            </a>
            <a style = {{fontWeight:"600"}} href="#" className="text-sm font-assistant">
              Features
            </a>
            <a style = {{fontWeight:"600"}} href="#" className="text-sm font-assistant">
              Why
            </a>
            <a style = {{fontWeight:"600"}} href="#" className="text-sm font-assistant">
              Customers
            </a>
          </nav>
          <div>
            <Button style = {{fontWeight:"600",fontSize:"12px"}} className="w-38 h-7 ">Sign In</Button>
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


        <section className="py-20">
          <div className="container mx-auto px-4 max-w-screen-xl">
            <h2 className="text-4xl font-bold text-center mb-10">Benefits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
              <img src={Benefits1} className="w-full max-w-xs h-auto object-cover" alt="Benefit 1" />
              <img src={Benefits2} className="w-full max-w-xs h-auto object-cover" alt="Benefit 2" />
              <img src={Benefits3} className="w-full max-w-xs h-auto object-cover" alt="Benefit 3" />
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mt-12">Core Features</h2>
          </div>
        </section>


        {/* AI-Powered Search */}
        <section className="py-20 mr-4 ml-4">
          <div className="container mx-auto px-4 max-w-6xl border p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <img src={Aiicon} alt="Centered image" className="w-16 h-16" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1940BE] mt-2 mb-1">
              AI-Powered Search
            </h2>
            <p style={{ fontWeight: "550", fontSize: "14px" }} className="font-assistant text-center text-gray-600 max-w-2xl mx-auto mb-10 text-sm md:text-base">
              Find the perfect M&A targets with a single click
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col">
                <h3 style={{ fontWeight: "750" }} className="font-assistant text-sm mb-2">One‑Click <br></br>Target Lists</h3>
                <p style={{ fontWeight: "500" }} className="font-assistant text-xs text-gray-600">
                  Generate a fully vetted list of opportunities the moment you hit “Search.”
                </p>
              </div>

              <div className="flex flex-col">
                <h3 style={{ fontWeight: "750" }} className="font-assistant text-sm mb-2">Proprietary Data <br></br>Engine</h3>
                <p style={{ fontWeight: "500" }} className="font-assistant text-xs text-gray-600">
                  Tap into our curated dataset updated daily for unmatched relevance and accuracy with Natural Language Search.
                </p>
              </div>

              <div className="flex flex-col">
                <h3 style={{ fontWeight: "750" }} className="font-assistant text-sm mb-2">Customizable <br></br>Filters</h3>
                <p style={{ fontWeight: "500" }} className="font-assistant text-xs text-gray-600">
                  Tailor by revenue, geography, sector, deal size, or any criteria you need on the fly.
                </p>
              </div>

              <div className="flex flex-col">
                <h3 style={{ fontWeight: "750" }} className="font-assistant text-sm mb-2">No More <br></br>Endless Searching</h3>
                <p style={{ fontWeight: "500" }} className="font-assistant text-xs text-gray-600">
                  Spend seconds, not days, filtering, ranking, and exporting your shortlist.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*Industry-Driven Database */}
        <section className="py-20 mr-4 ml-4">
          <div className="container mx-auto px-4 max-w-6xl border p-6 rounded-lg">
            <div className="flex justify-center mb-4">
              <img src={IndustruIcon} alt="Centered image" className="w-16 h-16" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1940BE] mt-2 mb-1">
              Industry-Driven Database
            </h2>
            <p style={{ fontWeight: "550", fontSize: "14px" }} className="font-assistant text-center text-gray-600 max-w-2xl mx-auto mb-10 md:text-base mt-0">
              The most complete, real-time platform for deal intelligence <br></br>and sector-specific metrics in M&A and PE.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col">
                <h3 style={{ fontWeight: "750" }} className="font-assistant text-sm mb-2">One‑Click <br></br>Target Lists</h3>
                <p style={{ fontWeight: "500" }} className="font-assistant text-xs text-gray-600">
                  Generate a fully vetted list of opportunities the moment you hit “Search.”
                </p>
              </div>

              <div className="flex flex-col">
                <h3 style={{ fontWeight: "750" }} className="font-assistant text-sm mb-2">Proprietary Data <br></br>Engine</h3>
                <p style={{ fontWeight: "500" }} className="font-assistant text-xs text-gray-600">
                  Tap into our curated dataset updated daily for unmatched relevance and accuracy with Natural Language Search.
                </p>
              </div>

              <div className="flex flex-col">
                <h3 style={{ fontWeight: "750" }} className="font-assistant text-sm mb-2">Customizable <br></br>Filters</h3>
                <p style={{ fontWeight: "500" }} className="font-assistant text-xs text-gray-600">
                  Tailor by revenue, geography, sector, deal size, or any criteria you need on the fly.
                </p>
              </div>

              <div className="flex flex-col">
                <h3 style={{ fontWeight: "750" }} className="font-assistant text-sm mb-2">No More <br></br>Endless Searching</h3>
                <p style={{ fontWeight: "500" }} className="font-assistant text-xs text-gray-600">
                  Spend seconds, not days, filtering, ranking, and exporting your shortlist.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12 ">
            <Button>Learn More</Button>
          </div>
        </section>


        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">

              {/* Left Content with max-w-[70rem] */}
              <div className="w-full max-w-[70rem] md:max-w-md text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                  One Platform —<br />
                  all the right insights
                </h2>
                <p className="text-gray-600 mb-6">
                  DealSource uses AI algorithms to analyze millions of relevant datapoints, enriched with trustworthy datasources, and Machine Learning for predictive analytics. One platform for all your M&A and PE data needs.
                </p>
                <Button variant="outline">Get In Touch</Button>
              </div>

              {/* Right Grid Stats */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-primary text-white p-6 sm:p-8 rounded-xl text-center">
                  <div className="text-4xl font-bold mb-2">65+ mln</div>
                  <div className="text-sm opacity-80">companies in the database</div>
                </div>
                <div className="bg-primary text-white p-6 sm:p-8 rounded-xl text-center">
                  <div className="text-4xl font-bold mb-2">100k+</div>
                  <div className="text-sm opacity-80">curated investors</div>
                </div>
                <div className="bg-primary text-white p-6 sm:p-8 rounded-xl text-center col-span-1 sm:col-span-2">
                  <div className="text-4xl font-bold mb-2">2+ mln</div>
                  <div className="text-sm opacity-80">deals & increasing daily</div>
                </div>
              </div>

            </div>
          </div>
        </section>



        {/* Tailored Intelligence Section */}
        <section className="py-20 bg-gray-900 text-white rounded-2xl mx-auto my-20 px-4 sm:px-6 lg:px-8 max-w-[72.5rem]">
          <div>
            <h2 className="text-3xl font-bold text-center mb-16">
              Tailored Intelligence for Every Dealmaker
            </h2>

            {/* M&A Professionals Section */}
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-8">For M&A professionals</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="p-6 bg-gray-800 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">One‑Click Buyer & Target Lists</h4>
                  <p className="text-gray-400 text-sm">
                    Instantly generate the most relevant buyers or acquisition targets at the click of a button—no more sifting through spreadsheets or generic databases.
                  </p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">Real‑Time Deal Activity</h4>
                  <p className="text-gray-400 text-sm">
                    Stay on top of the latest M&A transactions and market moves so you never miss an emerging opportunity.
                  </p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">Deep Industry Knowledge</h4>
                  <p className="text-gray-400 text-sm">
                    Access proprietary metrics and trend data to understand sector dynamics, benchmark valuations, and craft winning deal strategies.
                  </p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">Elevated Deal‑Making</h4>
                  <p className="text-gray-400 text-sm">
                    From sourcing through execution, streamline every step of your process and close deals faster with data‑driven insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Private Equity Professionals Section */}
            <div>
              <h3 className="text-xl font-semibold mb-8">For Private Equity professionals</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="p-6 bg-gray-800 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">Add‑On Opportunity Discovery</h4>
                  <p className="text-gray-400 text-sm">
                    Pinpoint the most complementary acquisitions to bolt onto existing portfolio companies with advanced filtering, scoring, and one‑click shortlisting.
                  </p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">Precision Target Sourcing</h4>
                  <p className="text-gray-400 text-sm">
                    Build a high‑conviction pipeline by filtering and ranking companies by Revenue, EBITDA, sector, geography, and custom metrics.
                  </p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">Live Market Intelligence</h4>
                  <p className="text-gray-400 text-sm">
                    Monitor real‑time valuation trends and deal volume across industries to optimize entry, scaling, and exit timing.
                  </p>
                </div>
                <div className="p-6 bg-gray-800 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">Competitive & Portfolio Insights</h4>
                  <p className="text-gray-400 text-sm">
                    Benchmark your portfolio against peers, identify potential add‑ons early, and spot emerging disruptors before the competition.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex justify-center mt-12">
              <Button>Join Us!</Button>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        < section className="py-20" >
          <div className="container w-[74rem]">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={Sem}
                  alt="Sem Cruiming"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-assistant text-lg mb-6">I remember as an M&A analyst I spent days—sometimes weeks—manually building long lists in a tangle of spreadsheets while using several expensive databases. Frustrated by dead ends, high subscription fees and wasted hours,I knew there had to be a smarter way.</p>
                <p className="mb-1">That pain drove me to build DealSource—a tool that turns “needle‑in‑a‑haystack” searches into lightning‑fast matches, so you spend less time digging and more time closing deals.</p>
                <div className="mt-4">
                  <p style={{ fontWeight: "660" }} className="font-assistant">Sem Cruiming</p>
                  <p className="font-assistant text-sm text-gray-600">Co-Founder • DealSource</p>
                </div>
              </div>
            </div>
          </div>
        </section >
      </main >




      {/* Footer */}
      < footer className="bg-gray-900 text-white py-16" >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Banking Platform</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#">Overview</a>
                </li>
                <li>
                  <a href="#">Engagement</a>
                </li>
                <li>
                  <a href="#">Intelligence</a>
                </li>
                <li>
                  <a href="#">Integration</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#">Overview</a>
                </li>
                <li>
                  <a href="#">Sales</a>
                </li>
                <li>
                  <a href="#">Servicing</a>
                </li>
                <li>
                  <a href="#">Integrations</a>
                </li>
                <li>
                  <a href="#">Data & AI</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#">Managed Hosting</a>
                </li>
                <li>
                  <a href="#">Managed Services</a>
                </li>
                <li>
                  <a href="#">Implementation Services</a>
                </li>
                <li>
                  <a href="#">Value Consulting</a>
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
                  <a href="#">Customers</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Guides</a>
                </li>
                <li>
                  <a href="#">Reports</a>
                </li>
                <li>
                  <a href="#">Podcasts</a>
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
                  <a href="#">About DealSource</a>
                </li>
                <li>
                  <a href="#">Press and media</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Social responsibility</a>
                </li>
                <li>
                  <a href="#">Partnerships</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-white flex flex-col md:flex-row justify-between">
            <p>© DealSource | All rights reserved</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#">Terms & legal ∙ Privacy Policy ∙ Modern Slavery Statement </a>
            </div>
            <div>
            <h1><i class="fa-solid fa-globe"></i> Global • English ▼</h1>
          </div>
          </div>
          
        </div>
      </footer >
    </div >
  )
}

export default App
