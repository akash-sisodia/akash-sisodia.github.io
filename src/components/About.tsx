
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Star } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Star, label: "Job Success Rate", value: "100%" },
    { icon: Clock, label: "Experience", value: "10+ Years" },
    { icon: MapPin, label: "Location", value: "Indore, India" }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              With over 10 years of iOS development experience, I specialize in building 
              high-performance, scalable, and secure mobile applications. My deep expertise 
              in Swift, SwiftUI, and WatchOS allows me to craft seamless user experiences 
              while ensuring optimal performance and reliability.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I am committed to delivering top-quality solutions that meet evolving 
              industry standards and client needs. Whether you need a new iOS app from 
              scratch or want to enhance an existing one, I bring the technical expertise 
              and problem-solving skills to bring your vision to life.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Education</h3>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <span className="font-medium">Bachelor of Engineering</span> - Information Technology
                </p>
                <p className="text-gray-400">Rajiv Gandhi Technical University (2010-2014)</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
