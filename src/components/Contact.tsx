import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import { Mail, Phone, MapPin, Linkedin, Download, MessageCircle, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { toast } = useToast();

  const copyEmailToClipboard = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("shanmukhajagadeesh@gmail.com");
      setCopiedEmail(true);
      toast({
        title: "Email Copied!",
        description: "Email address has been copied to your clipboard.",
      });
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Could not copy email to clipboard.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "shanmukhajagadeesh@gmail.com",
      href: "mailto:shanmukhajagadeesh@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 8008900943",
      href: "tel:+918008900943"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Hyderabad, India",
      href: "https://maps.google.com/search?q=Hyderabad,India"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shanmukha-jagadeesh-punnam/", // Your actual LinkedIn URL
      color: "hover:text-blue-600",
      description: "Connect with me professionally"
    },
    {
      icon: <Download className="h-5 w-5" />,
      label: "Resume/CV",
      href: "/assets/ShanmukaJagadeesh_Resume.pdf", // Your resume download link
      color: "hover:text-green-600",
      description: "Download my latest resume"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "WhatsApp",
      href: "https://wa.me/918008900943", // WhatsApp link with your phone number
      color: "hover:text-green-500",
      description: "Message me directly"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <ScrollAnimationWrapper animation="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to bring your game idea to life? Get in touch and let's create something amazing!
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Contact Information - Wider */}
          <div className="lg:col-span-5">
            <ScrollAnimationWrapper animation="fadeUp" delay={0.2}>
              <Card className="border-0 shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="relative">
                      <a
                        href={info.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <div className="p-2 bg-purple-100 rounded-lg text-purple-600 group-hover:bg-purple-200 transition-colors flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm text-gray-500">{info.label}</p>
                          <p className="font-medium text-slate-900 break-all text-sm">{info.value}</p>
                        </div>
                      </a>
                      {info.label === "Email" && (
                        <button
                          onClick={copyEmailToClipboard}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-purple-600 transition-colors"
                          title="Copy email address"
                        >
                          {copiedEmail ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-4">
            <ScrollAnimationWrapper animation="fadeUp" delay={0.4}>
              <Card className="border-0 shadow-lg h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-slate-900">
                    Connect With Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200 hover:scale-105 ${social.color}`}
                        title={social.description}
                      >
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                          {social.icon}
                        </div>
                        <div className="flex-1">
                          <span className="font-medium text-slate-900 block">{social.label}</span>
                          <span className="text-xs text-gray-500">{social.description}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimationWrapper>
          </div>

          {/* Availability & Additional Info */}
          <div className="lg:col-span-3">
            <ScrollAnimationWrapper animation="fadeUp" delay={0.6}>
              <div className="space-y-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Badge className="bg-green-500 hover:bg-green-600 text-white mb-3">
                        Available for Projects
                      </Badge>
                      <p className="text-sm text-gray-600">
                        Currently accepting new freelance and full-time opportunities
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="font-bold text-slate-900 mb-2">Response Time</h3>
                      <p className="text-sm text-gray-600 mb-2">Usually within 24 hours</p>
                      <div className="text-xs text-gray-500">
                        Best times to reach me:<br/>
                        Monday - Friday, 9 AM - 6 PM IST
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
