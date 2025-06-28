'use client'

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, ExternalLink, MessageCircle } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-slate-900/95" />
      
      {/* Subtle background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="/akashsinghsisodia.png" 
                alt="Akash Singh Sisodia"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-400/40 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            👋 Hi, I'm Akash Singh Sisodia
            <span className="block text-2xl md:text-4xl text-blue-400 mt-4 font-medium">
              🎯 Full-stack Developer | 🚀 iOS Specialist | 💡 Building Modern Web & Mobile Experiences
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            10+ years crafting exceptional iOS experiences with Swift, SwiftUI & WatchOS.
            Building scalable, secure mobile applications that delight users worldwide.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-lg transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Let's Work Together
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg backdrop-blur-sm bg-white/5 transition-all duration-300"
              onClick={() => scrollToSection('experience')}
            >
              View My Work
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a 
              href="https://github.com/akash-sisodia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-gray-300 hover:text-white transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <Github size={28} />
              </div>
            </a>
            <a 
              href="https://www.linkedin.com/in/akashsinghsisodia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-gray-300 hover:text-white transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <Linkedin size={28} />
              </div>
            </a>
            <a 
              href="https://stackoverflow.com/users/8196100/akash-singh-sisodia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-gray-300 hover:text-white transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <MessageCircle size={28} />
              </div>
            </a>
            <a 
              href="https://www.upwork.com/freelancers/~014d1ace84d8abc585?viewMode=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group text-gray-300 hover:text-white transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <ExternalLink size={28} />
              </div>
            </a>
          </div>
        </div>
        
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer group"
        >
          <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
            <ArrowDown size={28} />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
