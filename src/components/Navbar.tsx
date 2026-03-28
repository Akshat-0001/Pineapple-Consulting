"use client"
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
    const menuItems = [
        { label: "Home", href: "#home" },
        { label: "Services", href: "#services" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "How I Work", href: "#approach" },
        { label: "Contact", href: "#contact" },
    ];
    const [selected, setSelected] = useState("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (item: { label: string; href: string }) => {
        setSelected(item.label);
        setIsMobileMenuOpen(false);
        
        // Smooth scroll to section
        const element = document.querySelector(item.href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="relative w-full max-w-[1298px] h-[78px] sm:h-[92px] lg:h-[104px] bg-white text-[#171717] px-4 sm:px-6 lg:px-8 rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] border-2 border-[#171717] mx-auto flex items-center justify-between z-50 gap-3 sm:gap-4 shadow-sm">
            <div className="flex items-center shrink-0">
                <Image
                    src="/website_logo.svg"
                    alt="Pineapple Consulting logo"
                    width={520}
                    height={160}
                    className="h-[62px] sm:h-[76px] lg:h-[94px] w-auto"
                    priority
                />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center flex-1 ml-6 xl:ml-10">
                {menuItems.map((item) => (
                    <div key={item.label} className="flex-1 flex justify-center">
                        <button
                            className={`w-full max-w-[190px] px-4 py-3 flex items-center justify-center rounded-[60px] text-[18px] xl:text-[20px] font-medium transition duration-300 whitespace-nowrap ${selected === item.label ? 'bg-[#FD853A] text-white font-bold' : 'bg-transparent hover:bg-[#F2F4F7]'}`}
                            onClick={() => handleNavClick(item)}
                        >
                            {item.label}
                        </button>
                    </div>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#FD853A] hover:bg-[#e67a2e] text-white transition-colors ml-auto"
                onClick={toggleMobileMenu}
            >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-[100%] left-0 right-0 mt-2 bg-white rounded-[25px] border-2 border-[#171717] lg:hidden z-40 shadow-md">
                    <div className="flex flex-col p-4 gap-2">
                        {menuItems.map((item) => (
                            <button
                                key={item.label}
                                className={`w-full h-[50px] flex items-center justify-center rounded-[25px] text-[18px] font-medium transition duration-300 ${selected === item.label ? 'bg-[#FD853A] text-white font-bold' : 'bg-transparent hover:bg-[#F2F4F7]'}`}
                                onClick={() => handleNavClick(item)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;
