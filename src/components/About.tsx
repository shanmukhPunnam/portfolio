import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Award,
  Coffee,
  Mail,
  Phone,
  User,
  Linkedin,
  Code,
  Users,
  GaugeCircle,
  Headset,
  Smartphone,
  Link2,
  Globe,
  BookOpen,
  MessageCircle,
  RefreshCcw,
  Lightbulb,
  Zap,
  Clock,
  Handshake,
  UserCheck,
  ShieldCheck,
  Compass,
} from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "Oct 2023 – Present",
      title: "Lead Unity Developer",
      company: "Caesium Lab",
      description:
        "Led a 15+ member team to deliver 'Alpha Returns,' a Web3 mobile battle-royale game. Achieved 10× performance boost via core system refactors, shader optimization, mesh baking, and improved memory management. Built AI behaviors, weapon/inventory systems, in-app purchases, and NFT-based reward models. Mentored engineers and standardized Unity best practices.",
    },
    {
      year: "Apr 2022 – Aug 2023",
      title: "Senior Software Engineer",
      company: "Ivy Comptech",
      description:
        "Developed and optimized immersive VR titles for Oculus Quest with a focus on frame-rate stability and low-latency input. Delivered advanced VR mechanics and hand-tracking controls for metaverse environments. Key titles include Poker VR, Roulette Wheel VR, and Fortune Funnel VR.",
    },
    {
      year: "Jan 2019 – Apr 2022",
      title: "Senior Unity Developer",
      company: "Supercode Games",
      description:
        "Led the development of high-performing mobile games, engineering core gameplay and optimizing performance for racing, PvP, and arcade titles with 100K+ downloads. Responsible for system design, QA, and Android release. Notable projects: War Ground, Car Drift Racing 2019, Offroad Driving, Robot Fighting, Hop Ball, Arrow Twist, Word Coach.",
    },
    {
      year: "Nov 2015 – Feb 2017",
      title: "Design Engineer",
      company: "ARDIS Enviro Solutions",
      description:
        "Designed 3D mechanical components and assemblies for industrial machinery. Conducted load testing, thermal analysis, and stress validation using AutoCAD and SolidWorks. Worked with cross-functional teams for manufacturability and product refinement.",
    },
    {
      year: "2011 – 2015",
      title: "B.Tech in Mechanical Engineering",
      company: "Sasi Institute of Technology and Engineering (SITE)",
      description:
        "Completed coursework in Thermodynamics, Mechanics, CAD/CAM, and participated in technical workshops focused on fluid mechanics and automotive design.",
    },
  ];

  // Achievements array with icons
  const achievements = [
    {
      icon: <Code className="w-5 h-5 text-purple-300" />,
      text: "Unity3D & C# Expert, 7+ Years",
    },
    {
      icon: <Users className="w-5 h-5 text-purple-300" />,
      text: "Led 15+ Person Game Dev Teams",
    },
    {
      icon: <GaugeCircle className="w-5 h-5 text-purple-300" />,
      text: "10× Performance Optimization (Alpha Returns)",
    },
    {
      icon: <Headset className="w-5 h-5 text-purple-300" />,
      text: "3 VR Games Published on Oculus Quest",
    },
    {
      icon: <Smartphone className="w-5 h-5 text-purple-300" />,
      text: "7+ Mobile Games, 100K+ Downloads Each",
    },
    {
      icon: <Link2 className="w-5 h-5 text-purple-300" />,
      text: "Proven Blockchain & NFT Integration",
    },
    {
      icon: <Globe className="w-5 h-5 text-purple-300" />,
      text: "Metaverse/AR/VR Specialist",
    },
  ];

  // Soft skills array with icons
  const softSkills = [
    { icon: <Users className="w-5 h-5 text-purple-300" />, text: "Effective Team Leadership" },
    { icon: <Handshake className="w-5 h-5 text-purple-300" />, text: "Cross-functional Collaboration" },
    { icon: <BookOpen className="w-5 h-5 text-purple-300" />, text: "Mentoring & Technical Coaching" },
    { icon: <MessageCircle className="w-5 h-5 text-purple-300" />, text: "Clear Technical Communication" },
    { icon: <RefreshCcw className="w-5 h-5 text-purple-300" />, text: "Agile & Iterative Workflow" },
    { icon: <Lightbulb className="w-5 h-5 text-purple-300" />, text: "Creative Problem Solving" },
    { icon: <Zap className="w-5 h-5 text-purple-300" />, text: "Adaptability to New Tech" },
    { icon: <Clock className="w-5 h-5 text-purple-300" />, text: "Time & Priority Management" },
    { icon: <Code className="w-5 h-5 text-purple-300" />, text: "Constructive Code Review" },
    { icon: <UserCheck className="w-5 h-5 text-purple-300" />, text: "Stakeholder Engagement" },
    { icon: <ShieldCheck className="w-5 h-5 text-purple-300" />, text: "Conflict Resolution" },
    { icon: <Compass className="w-5 h-5 text-purple-300" />, text: "Vision & Product Ownership" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Senior Unity Developer with 7+ years in real-time 3D games—specializing in performance, multiplayer, VR/AR, and Web3. Proven technical leader across mobile, PC, and XR platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            {/* Personal Info Card with Icons */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold">
                    SJ
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                      <User className="w-6 h-6 text-purple-400" />
                      Shanmuka Jagadeesh
                    </h3>
                    <p className="text-gray-300 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Lead Unity Developer
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> Hyderabad, India
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" /> 7+ Years
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-purple-300" />
                    <a
                      href="mailto:shanmukhajagadeesh@gmail.com"
                      className="text-purple-300 hover:underline font-semibold"
                    >
                      shanmukhajagadeesh@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-purple-300" />
                    <a
                      href="tel:+918008900943"
                      className="text-purple-300 hover:underline font-semibold"
                    >
                      +91 8008900943
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-5 h-5 text-purple-300" />
                    <a
                      href="https://www.linkedin.com/in/shanmukha-jagadeesh-punnam/"
                      className="text-purple-300 hover:underline font-semibold break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/shanmukha-jagadeesh-punnam
                    </a>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-2">
                  I architect, optimize, and deliver high-performance 3D games across mobile, PC, VR, and blockchain/Web3. I lead teams, drive cross-functional execution, and take products from concept to launch.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Outside of code, I mentor, speak at tech meetups, and experiment with new gameplay tech and blockchain gaming models.
                </p>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Soft Skills
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {softSkills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      {skill.icon}
                      <span className="text-gray-300">{skill.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Achievements
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-white/20 text-white hover:bg-white/30 transition-colors p-2 flex items-center gap-2"
                    >
                      {achievement.icon}
                      <span>{achievement.text}</span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            {/* Experience Timeline */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-6">Experience Timeline</h4>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-purple-400/30 last:border-l-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                      <div className="mb-2">
                        <Badge variant="outline" className="border-purple-400 text-purple-300 mb-2">
                          {item.year}
                        </Badge>
                        <h5 className="font-semibold text-lg">{item.title}</h5>
                        <p className="text-purple-300 text-sm font-medium">{item.company}</p>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
