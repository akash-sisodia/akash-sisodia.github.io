
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Code, 
  Shield, 
  Zap, 
  Globe, 
  Brain,
  Lock,
  Settings,
  Database,
  Cloud,
  Palette,
  Server
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["Swift", "React Native", "iOS SDK", "Xcode", "Interface Builder", "WatchOS"]
    },
    {
      icon: Code,
      title: "Frontend Frameworks",
      skills: ["React.js", "Next.js", "SwiftUI", "Combine", "UIKit", "TypeScript"]
    },
    {
      icon: Palette,
      title: "Design & Styling",
      skills: ["Tailwind CSS", "Figma", "SwiftUI", "Responsive Design", "UI/UX", "Design Systems"]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: ["Node.js", "MongoDB", "PostgreSQL", "Prisma ORM", "Core Data", "CloudKit"]
    },
    {
      icon: Lock,
      title: "Authentication & Security",
      skills: ["JWT Authentication", "Data Encryption", "Secure Authentication", "Keychain Services", "Privacy Best Practices"]
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: ["Firebase", "Cloudinary", "Cloudflare Tunnel", "PM2", "Nginx", "Firebase Push Notifications"]
    },
    {
      icon: Settings,
      title: "Development Tools",
      skills: ["CocoaPods", "Carthage", "Git", "CI/CD", "TestFlight", "App Store Connect"]
    },
    {
      icon: Zap,
      title: "Performance & Optimization",
      skills: ["Memory Management", "Performance Profiling", "Background Execution", "Battery Optimization"]
    },
    {
      icon: Globe,
      title: "Localization",
      skills: ["Internationalization", "Multilingual Support", "RTL Support", "Cultural Adaptation"]
    },
    {
      icon: Brain,
      title: "Advanced Technologies",
      skills: ["ARKit", "CoreML", "Machine Learning", "Computer Vision", "WidgetKit"]
    },
    {
      icon: Shield,
      title: "Testing & Quality",
      skills: ["Unit Testing", "UI Testing", "XCTest", "Automated Testing", "Code Review"]
    },
    {
      icon: Server,
      title: "DevOps & Deployment",
      skills: ["CI/CD Pipelines", "Automated Testing", "Build Automation", "Deployment Strategies"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building exceptional mobile and web applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-all duration-300 hover:scale-105 group shadow-lg"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-300">
                    <category.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <CardTitle className="text-white text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-slate-600 text-gray-200 border-slate-500 hover:bg-slate-500 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
