'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Github, 
  Linkedin,
  Star,
  MessageCircle
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Indore, India",
      detail: "7:53 pm local time"
    },
    {
      icon: Mail,
      label: "Email",
      value: "akashsisodia.singh@gmail.com",
      detail: "Professional inquiries welcome"
    },
    {
      icon: Star,
      label: "Rating",
      value: "Top Rated",
      detail: "100% Job Success"
    },
    {
      icon: Clock,
      label: "Experience",
      value: "10+ Years",
      detail: "iOS Development"
    }
  ];

  const socialLinks = [
    {
      icon: ExternalLink,
      label: "Upwork Profile",
      url: "https://www.upwork.com/freelancers/~014d1ace84d8abc585?viewMode=1",
      color: "text-green-400 hover:text-green-300"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/akashsinghsisodia/",
      color: "text-blue-400 hover:text-blue-300"
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/akash-sisodia",
      color: "text-gray-300 hover:text-white"
    },
    {
      icon: MessageCircle,
      label: "Stack Overflow",
      url: "https://stackoverflow.com/users/8196100/akash-singh-sisodia",
      color: "text-orange-400 hover:text-orange-300"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your iOS app vision to life? Let's discuss your project!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-all duration-300 group shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300">
                        <info.icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-lg">{info.value}</p>
                        <p className="text-gray-400 text-sm">{info.detail}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Get Started</h3>
              
              <Card className="bg-blue-600 border-blue-500 hover:bg-blue-700 transition-all duration-300 backdrop-blur-sm shadow-lg">
                <CardContent className="p-8 text-center">
                  <h4 className="text-xl font-semibold text-white mb-4">Ready to Start Your Project?</h4>
                  <p className="text-blue-100 mb-8 leading-relaxed">
                    Let's discuss your iOS development needs and create a custom solution tailored to your requirements.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-blue-600 hover:bg-gray-100 w-full mb-6 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open('https://www.upwork.com/freelancers/~014d1ace84d8abc585?viewMode=1', '_blank')}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Hire Me on Upwork
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-all duration-300 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Services Offered</h4>
                  <ul className="space-y-3 text-gray-200">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-1 text-lg">•</span>
                      <span className="leading-relaxed">iOS App Development from scratch</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-1 text-lg">•</span>
                      <span className="leading-relaxed">Existing app enhancement & optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-1 text-lg">•</span>
                      <span className="leading-relaxed">SwiftUI & Combine implementation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-1 text-lg">•</span>
                      <span className="leading-relaxed">App Store deployment & support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-3 mt-1 text-lg">•</span>
                      <span className="leading-relaxed">Code review & consulting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">Connect With Me</h3>
            <div className="flex justify-center space-x-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center space-y-3 transition-all duration-300 ${link.color} transform hover:scale-110`}
                >
                  <div className="p-4 rounded-full bg-slate-700 group-hover:bg-slate-600 transition-all duration-300 shadow-lg">
                    <link.icon size={32} />
                  </div>
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
