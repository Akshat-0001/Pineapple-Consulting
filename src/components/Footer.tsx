"use client"
import React from "react";
import { MessageCircle, Linkedin } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import CustomeText from "./ui/CustomeText";
import ClientOnly from "./ui/ClientOnly";

interface FooterProps {
  onBookingClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onBookingClick }) => {
    const navigation = [
        { label: "Home", href: "#home" },
        { label: "Services", href: "#services" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "How I Work", href: "#approach" },
        { label: "Contact", href: "#contact" },
    ];
    
    const socialLinks = [
        { icon: MessageCircle, url: "https://wa.me/918794639367?text=Hi%20Priya%2C%20I%27d%20like%20to%20discuss%20business%20consulting%20services.", label: "WhatsApp" },
        { icon: Linkedin, url: "https://www.linkedin.com/in/priyatamang-consultant", label: "LinkedIn" },
    ];

    return (
        <footer className="w-full px-4 sm:px-6 lg:px-[71px] py-6 sm:py-8 lg:py-10 flex flex-col bg-[#272727] rounded-t-2xl sm:rounded-t-3xl text-white gap-4 sm:gap-6 -mt-4">

            {/* Top Section */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
                <h1 className="font-semibold leading-tight text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[64px] text-[#FCFCFD] text-center lg:text-left">
                    Let's Connect
                </h1>
                <div className="flex gap-4 sm:gap-5">
                    {socialLinks.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={idx}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px] rounded-full flex hover:scale-110 transition-all duration-300 bg-[#FD853A] hover:bg-[#e46e24] items-center justify-center shadow-lg hover:shadow-xl"
                                aria-label={item.label}
                            >
                                <Icon size={28} className="sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white" />
                            </a>
                        );
                    })}
                </div>
            </div>

            <div className="border border-[#475467] w-full"></div>

            {/* Navigation Links */}
            <div className="flex flex-col lg:flex-row justify-between w-full max-w-[1298px] gap-6 sm:gap-8 lg:gap-16">

                <div className="w-full lg:w-[500px] flex flex-col items-start justify-start gap-3 sm:gap-4">
                    <span className="font-bold text-2xl sm:text-3xl text-[#FD853A]">Priya</span>
                    <p className="w-full text-[14px] sm:text-[16px] lg:text-[18px] text-[#FCFCFD] leading-relaxed">Independent Business & Growth Consultant working with startups and small to mid-sized companies to solve real business challenges through strategic planning and execution support.</p>
                    <div className="flex gap-3 sm:gap-4">
                        {socialLinks.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <a
                                    key={idx}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full flex hover:scale-110 transition-transform bg-[#333333] hover:bg-[#444444] items-center justify-center"
                                    aria-label={item.label}
                                >
                                    <Icon size={20} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#FD853A]" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-2 sm:gap-3 min-w-[150px]">
                    <CustomeText title="Navigation" className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-[#FD853A]" />
                    <div className="flex flex-col gap-2">
                        {navigation.map((item, idx) => (
                            <a 
                                href={item.href} 
                                key={idx} 
                                className="text-[#FCFCFD] text-[14px] sm:text-[15px] lg:text-[16px] cursor-pointer hover:text-[#FD853A] transition-colors whitespace-nowrap"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2 sm:gap-3 min-w-[200px]">
                    <CustomeText title="Contact" className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-[#FD853A]" />
                    <div className="flex flex-col gap-2">
                        <a 
                            href="mailto:Priyatamang866@gmail.com" 
                            className="text-[#FCFCFD] text-[14px] sm:text-[15px] lg:text-[16px] hover:text-[#FD853A] transition-colors break-words"
                        >
                            Priyatamang866@gmail.com
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/priyatamang-consultant" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#FCFCFD] text-[14px] sm:text-[15px] lg:text-[16px] hover:text-[#FD853A] transition-colors whitespace-nowrap"
                        >
                            LinkedIn Profile
                        </a>
                        <a 
                            href="#contact"
                            className="text-[#FCFCFD] text-[14px] sm:text-[15px] lg:text-[16px] hover:text-[#FD853A] transition-colors cursor-pointer"
                        >
                            Schedule a Discovery Call
                        </a>
                    </div>
                </div>

            </div>

            <div className="border border-[#475467] w-full"></div>

            <div className="w-full max-w-[1298px]">
                <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-white text-center sm:text-left">Copyright© 2026 Priya Tamang. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
