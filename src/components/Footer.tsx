
import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, ArrowUp, Linkedin, Mail, Download, MessageCircle } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Games", href: "#games" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-4 w-4" />, href: "https://www.linkedin.com/in/shanmukha-jagadeesh-punnam/", label: "LinkedIn" },
    { icon: <Mail className="h-4 w-4" />, href: "mailto:shanmukhajagadeesh@gmail.com", label: "Email" },
    { icon: <Download className="h-4 w-4" />, href: "/assets/ShanmukaJagadeesh_Resume.pdf", label: "Resume" },
    { icon: <MessageCircle className="h-4 w-4" />, href: "https://wa.me/918008900943", label: "WhatsApp" }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Shanmuka Jagadeesh
                </h3>
                <p className="text-gray-400 mt-2 max-w-md">
                  Unity Game Developer creating immersive gaming experiences with passion, creativity, and cutting-edge technology. 
                  Let's build the next generation of games together.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-3">
                <p className="text-gray-400 text-sm">
                  Hyderabad, India
                </p>
                <p className="text-gray-400 text-sm">
                  shanmukhajagadeesh@gmail.com
                </p>
                
                <div className="flex gap-2 pt-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-slate-800 hover:bg-slate-700 rounded transition-colors"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-700" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>© 2025 Shanmuka Jagadeesh. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of coffee ☕</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white hover:bg-slate-800"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Back to top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
