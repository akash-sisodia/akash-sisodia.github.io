
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Building } from "lucide-react";

const Experience = () => {
  const employmentHistory = [
    {
      title: "Senior Software Engineer",
      company: "Hexalitics Technology, Indore",
      duration: "September 2021 - Present",
      responsibilities: [
        "Expert in project time estimation and resource management",
        "Collaborated with the quality assurance team to ensure app compatibility across different platforms"
      ]
    },
    {
      title: "Senior Software Engineer", 
      company: "Codiant A Yash Technology Company, Indore",
      duration: "November 2017 - August 2021",
      responsibilities: [
        "Transformed basic design plans into complete iOS app frameworks",
        "Utilised Agile software development methodology to enhance final products", 
        "Complied with Apple App Store guidelines for rapid approval and deployment"
      ]
    },
    {
      title: "Software Engineer",
      company: "Cyber Elite, Indore", 
      duration: "February 2015 - October 2017",
      responsibilities: [
        "Analysed client requirements, created mock-ups, and determined application feasibility",
        "Designed user experience frameworks for various screen sizes, including iPad and iPhone",
        "Developed native iOS apps using Apple's Swift development language"
      ]
    }
  ];

  const projects = [
    {
      name: "Spacr",
      category: "Travel",
      platform: "Android + iOS",
      tech: "Kotlin + Swift",
      links: [
        { label: "iOS App Store", url: "https://apps.apple.com/us/app/spacr/id1535380614" },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.spacr.app" }
      ]
    },
    {
      name: "Kade Pay",
      category: "Fintech", 
      platform: "Android + iOS",
      tech: "Swift",
      links: [
        { label: "iOS App Store", url: "https://apps.apple.com/us/app/kade-pay/id1605804845" },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.kadepay.app" },
        { label: "Website", url: "https://www.kadepay.com" }
      ]
    },
    {
      name: "Go Brush",
      category: "Healthcare",
      platform: "iOS App", 
      tech: "SwiftUI",
      links: [
        { label: "iOS App Store", url: "https://apps.apple.com/in/app/go-brush/id6446024185" }
      ]
    },
    {
      name: "Health Connect",
      category: "Healthcare",
      platform: "iOS App",
      tech: "Swift", 
      links: [
        { label: "iOS App Store", url: "https://apple.co/3I0TeZB" }
      ]
    },
    {
      name: "Anteros",
      category: "Social Networking",
      platform: "Dating App - iOS",
      tech: "Swift",
      links: [
        { label: "iOS App Store", url: "https://apps.apple.com/in/app/anteros-app/id6736880987" }
      ]
    },
    {
      name: "Snipback",
      category: "Productivity",
      platform: "iOS App",
      tech: "Swift",
      links: [
        { label: "Website", url: "https://snipback.com/" },
        { label: "iOS App Store", url: "https://apps.apple.com/us/app/snipback/id1117265365" }
      ]
    },
    {
      name: "My Taxi Ride System", 
      category: "Transportation",
      platform: "iOS App",
      tech: "Swift",
      links: [
        { label: "iOS App Store", url: "https://apps.apple.com/us/app/my-taxi-ride-system/id696592379" },
        { label: "Developer Page", url: "https://apps.apple.com/us/developer/my-taxi-ride-inc/id696592382?see-all=i-phonei-pad-apps" }
      ]
    },
    {
      name: "Biker One",
      category: "Transportation",
      platform: "Android + iOS", 
      tech: "Swift + Kotlin",
      links: [
        { label: "Website", url: "https://www.bikerone.in/" },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.biker.one" }
      ]
    }
  ];

  const skills = [
    "Leadership: Ability to guide and motivate the project team towards common goals",
    "Technical Proficiency: Understanding the technical aspects relevant to the project and its industry", 
    "Organisational Skills: Structuring and coordinating project tasks, resources, and timelines",
    "Time Management: Prioritising tasks and managing deadlines to ensure timely project completion",
    "Problem-solving: Identifying issues, evaluating alternatives, and implementing effective solutions",
    "Decision-making: Making informed decisions based on available information and project goals",
    "Adaptability: Flexibility to adjust plans and strategies in response to changing project requirements",
    "Quality Management: Ensuring that project deliverables meet established quality standards",
    "Scope Management: Defining and controlling the project scope to prevent scope creep"
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        {/* Experience History */}
        <div className="mb-16">
          <div className="space-y-6">
            {employmentHistory.map((job, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <CardTitle className="text-white text-xl mb-2 md:mb-0">{job.title}</CardTitle>
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                      <span className="text-sm">{job.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Building className="w-4 h-4 mr-2 text-purple-400" />
                    <span className="text-sm">{job.company}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-gray-200 flex items-start">
                        <span className="text-blue-400 mr-3 mt-1 font-bold">•</span>
                        <span className="leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Portfolio */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-white mb-8 text-center">Project Portfolio</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <CardTitle className="text-white text-lg mb-2">{project.name}</CardTitle>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                      {project.category}
                    </Badge>
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {project.tech}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm">{project.platform}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {project.links.map((link, idx) => (
                      <a 
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm transition-colors mr-4 hover:underline"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Management Skills */}
        <div>
          <h3 className="text-3xl font-semibold text-white mb-8 text-center">Project Management Skills</h3>
          <Card className="bg-slate-800/50 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-start text-white group">
                    <span className="text-blue-400 mr-4 mt-1 text-xl font-bold">•</span>
                    <span className="text-base leading-relaxed">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
