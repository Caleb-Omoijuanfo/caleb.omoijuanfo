"use client";

import React from "react";
import { Mail, Github, Linkedin, ArrowDown } from "lucide-react";
import Marquee from "react-fast-marquee";

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#1E1E24] text-white min-h-screen font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1E1E24]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-col items-center gap-4">
            <div className="text-lg font-bold text-white">
              Caleb<span className="text-purple-400">.</span>
            </div>
            <div className="flex bg-[#282832] rounded-lg overflow-hidden">
              {["Home", "Projects", "My Skills", "Contact me"].map(
                (item, index) => (
                  <button
                    key={item}
                    onClick={() =>
                      scrollToSection(item.toLowerCase().replace(" ", "-"))
                    }
                    className={`text-sm px-5 py-2 transition-colors ${
                      index === 0
                        ? "bg-[#1E1E24] text-white border border-gray-600"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span className="text-purple-400">#</span>
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center relative px-6 pt-32"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex justify-between items-start">
            {/* Left side - Main heading */}
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                Website Design&
                <br />
                Development
              </h1>
            </div>

            {/* Right side - Scroll button */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection("projects")}
                className="border border-gray-600 px-6 py-3 text-sm flex items-center gap-3 hover:bg-white hover:text-[#1E1E24] transition-colors"
              >
                Scroll Down
                <ArrowDown size={16} className="animate-bounce" />
              </button>
            </div>
          </div>

          {/* Bio Section */}
          <div className="flex justify-between items-start mt-20">
            <div className="flex-1">
              <h3 className="text-sm mb-3 text-gray-400">Lets Talk</h3>
              <a
                href="mailto:c.omoijuanfo@gmail.com"
                className="border border-gray-600 px-4 py-2 text-sm inline-block hover:bg-white hover:text-[#1E1E24] transition-colors"
              >
                c.omoijuanfo@gmail.com
              </a>
            </div>

            <div className="flex-1 max-w-md">
              <div className="border-l-2 border-gray-600 pl-4">
                <p className="text-sm text-gray-300 leading-relaxed">
                  Hi, I&apos;m Caleb — a passionate full-stack developer with
                  expertise in building modern web applications and mobile
                  experiences. I specialize in React, Next.js and TypeScript
                  turning ideas into elegant, functional digital products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal Service Banner */}
      <div className="relative py-8 overflow-hidden">
        <div className="bg-gray-700/50 transform -skew-y-2 py-4">
          <Marquee speed={50} gradient={false} className="overflow-hidden">
            <div className="flex items-center gap-8 text-xs text-gray-300 uppercase tracking-widest mx-8">
              <span>WEBSITE DESIGN</span>
              <span className="text-purple-400">✦</span>
              <span>MOBILE APPS</span>
              <span className="text-purple-400">✦</span>
              <span>SAAS PLATFORMS</span>
              <span className="text-purple-400">✦</span>
              <span>API DEVELOPMENT</span>
              <span className="text-purple-400">✦</span>
              <span>FULL-STACK</span>
              <span className="text-purple-400">✦</span>
              {/* <span>UI/UX DESIGN</span>
              <span className="text-purple-400">✦</span> */}
            </div>
          </Marquee>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6">Projects</h2>
            <p className="text-gray-400 max-w-xl text-sm leading-relaxed">
              A selection of my recent work across web development, mobile
              applications, and full-stack projects. Each project represents a
              unique challenge solved with modern technologies and clean code
              practices.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 - Advancly Mobile App */}
            <div>
              <a
                href="https://apps.apple.com/us/app/advancly/id1609750373"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#8B8B6B] rounded-lg h-80 relative overflow-hidden group"
              >
                {/* Phone mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-72 bg-gray-900 rounded-3xl border-4 border-gray-800 shadow-2xl transform group-hover:scale-105 transition-transform">
                    <div className="w-full h-full bg-gradient-to-b from-purple-600 to-purple-800 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">A</span>
                    </div>
                  </div>
                </div>
              </a>
              <div className="mt-4">
                <h3 className="text-white font-medium">Advancly</h3>
                <p className="text-gray-400 text-sm">Mobile</p>
              </div>
            </div>

            {/* Project 2 - IBXP2P Website */}
            <div>
              <a
                href="https://app.ibxp2p.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#6B8B7B] rounded-lg h-80 relative overflow-hidden group"
              >
                {/* Laptop mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-44 bg-gray-900 rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform">
                    <div className="w-full h-36 bg-gradient-to-br from-green-500 to-green-700 rounded-t-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        IBX P2P
                      </span>
                    </div>
                    <div className="h-8 bg-gray-800 rounded-b-lg"></div>
                  </div>
                </div>
              </a>
              <div className="mt-4">
                <h3 className="text-white font-medium">IBXP2P</h3>
                <p className="text-gray-400 text-sm">Website</p>
              </div>
            </div>

            {/* Project 3 - GreenPole Website */}
            <div>
              <a
                href="https://portal.mygreenpole.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#6B6B8B] rounded-lg h-80 relative overflow-hidden group"
              >
                {/* Laptop mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-44 bg-gray-900 rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform">
                    <div className="w-full h-36 bg-gradient-to-br from-purple-500 to-purple-700 rounded-t-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        GreenPole
                      </span>
                    </div>
                    <div className="h-8 bg-gray-800 rounded-b-lg"></div>
                  </div>
                </div>
              </a>
              <div className="mt-4">
                <h3 className="text-white font-medium">GreenPole Portal</h3>
                <p className="text-gray-400 text-sm">Website</p>
              </div>
            </div>

            {/* Project 4 - FCMB Mobile */}
            <div>
              <a
                href="https://fcmbddsloan.fcmb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#5B7B8B] rounded-lg h-80 relative overflow-hidden group"
              >
                {/* Phone mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-72 bg-gray-900 rounded-3xl border-4 border-gray-800 shadow-2xl transform group-hover:scale-105 transition-transform">
                    <div className="w-full h-full bg-gradient-to-b from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">FCMB</span>
                    </div>
                  </div>
                </div>
              </a>
              <div className="mt-4">
                <h3 className="text-white font-medium">FCMB Credit Alert</h3>
                <p className="text-gray-400 text-sm">Website</p>
              </div>
            </div>
          </div>

          {/* Decorative dots */}
          <div className="absolute left-4 top-1/2 hidden lg:block">
            <div className="grid grid-cols-3 gap-1">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-gray-600 rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="my-skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title with line */}
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-bold text-purple-400">#skills</h2>
            <div className="flex-1 h-px bg-purple-400 max-w-xs"></div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Decorative Elements - Left Side */}
            <div className="flex-1 relative min-h-[300px] hidden lg:block">
              {/* Dot grid top */}
              <div className="absolute top-0 left-0">
                <div className="grid grid-cols-5 gap-2">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-gray-600 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>

              {/* Square outline */}
              <div className="absolute top-8 left-32">
                <div className="w-20 h-20 border border-gray-600"></div>
              </div>

              {/* Purple overlapping squares */}
              <div className="absolute top-40 left-8">
                <div className="relative">
                  <div className="w-24 h-24 border-2 border-purple-400"></div>
                  <div className="w-16 h-16 border-2 border-purple-400 absolute top-6 left-6"></div>
                </div>
              </div>

              {/* Dot grid middle */}
              <div className="absolute top-44 left-44">
                <div className="grid grid-cols-5 gap-2">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-gray-600 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>

              {/* Small square */}
              <div className="absolute bottom-0 left-48">
                <div className="w-12 h-12 border border-gray-600"></div>
              </div>
            </div>

            {/* Skills Grid - Right Side */}
            <div className="flex-1">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {/* Languages */}
                <div className="border border-gray-700">
                  <h3 className="text-sm text-white px-3 py-2 border-b border-gray-700 font-medium">
                    Languages
                  </h3>
                  <div className="p-3 text-sm text-gray-400 space-y-1">
                    <div>TypeScript</div>
                    <div>JavaScript</div>
                  </div>
                </div>

                {/* Databases */}
                <div className="border border-gray-700">
                  <h3 className="text-sm text-white px-3 py-2 border-b border-gray-700 font-medium">
                    Databases
                  </h3>
                  <div className="p-3 text-sm text-gray-400 space-y-1">
                    <div>SQLite PostgreSQL</div>
                    <div>Mongo</div>
                  </div>
                </div>

                {/* Tools */}
                <div className="border border-gray-700">
                  <h3 className="text-sm text-white px-3 py-2 border-b border-gray-700 font-medium">
                    Tools
                  </h3>
                  <div className="p-3 text-sm text-gray-400 space-y-1">
                    <div>VSCode Postman</div>
                    <div>Github</div>
                  </div>
                </div>

                {/* Other */}
                <div className="border border-gray-700">
                  <h3 className="text-sm text-white px-3 py-2 border-b border-gray-700 font-medium">
                    Other
                  </h3>
                  <div className="p-3 text-sm text-gray-400 space-y-1">
                    <div>HTML CSS SCSS</div>
                    <div>REST</div>
                  </div>
                </div>

                {/* Frameworks */}
                <div className="border border-gray-700">
                  <h3 className="text-sm text-white px-3 py-2 border-b border-gray-700 font-medium">
                    Frameworks
                  </h3>
                  <div className="p-3 text-sm text-gray-400 space-y-1">
                    <div>React NextJs</div>
                    <div>Node</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact-me"
        className="py-20 px-6 relative overflow-hidden min-h-[60vh]"
      >
        {/* World Map Dot Pattern Background */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-64">
            {/* Simulated world map dots */}
            <div className="absolute inset-0 opacity-20">
              {Array.from({ length: 200 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-gray-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.5 + 0.2,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Want to work together?
            <br />
            Let&apos;s talk
          </h2>

          <a
            href="mailto:c.omoijuanfo@gmail.com"
            className="inline-flex items-center gap-2 border border-gray-600 px-6 py-3 text-sm hover:bg-white hover:text-[#1E1E24] transition-colors"
          >
            <Mail size={18} />
            c.omoijuanfo@gmail.com
          </a>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-6 right-6">
          <div className="flex justify-between items-center text-sm text-gray-400">
            <div>© {new Date().getFullYear()} Caleb Omoijuanfo</div>
            <div>Designed & Built by Caleb</div>
            <div className="flex gap-3">
              <a
                href="https://github.com/calebomoijuanfo"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 p-2 hover:bg-white hover:text-[#1E1E24] transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/calebomoijuanfo"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 p-2 hover:bg-white hover:text-[#1E1E24] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
