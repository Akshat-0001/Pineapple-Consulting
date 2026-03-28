"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomeText from "@/components/ui/CustomeText";
import Image from "next/image";
import { Star } from "lucide-react";
import { iconAndText, skills, cardData, reviews, approachSteps } from '../data/data';
import { GenericSlider } from "@/components/ui/GenericSlider";
import ClientOnly from "@/components/ui/ClientOnly";
import BookingModal from "@/components/ui/BookingModal";
import { useState } from "react";

export default function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <div className="relative min-h-screen w-full bg-white py-2 pb-0 sm:py-10 sm:pb-0 flex flex-col items-center justify-start">
      <Navbar />

      {/* Hero Section */}
      <div id="home" className="group flex flex-col md:flex-row w-full min-h-[600px] sm:min-h-[700px] lg:h-[700] lg:-mb-2 xl:mb-0 xl:h-[846px] px-4 sm:px-6 md:px-8 gap-6 sm:gap-8 md:gap-[71px] items-center justify-center -mt-2 sm:mt-6 relative overflow-hidden">
        
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <div className="text-[#F5F5F5] font-bold text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] xl:text-[140px] leading-tight text-center opacity-40 select-none whitespace-nowrap">
            <div className="animate-pulse">Think first.</div>
            <div className="animate-pulse delay-150">Scale next.</div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col w-[328px] items-start justify-start transition-transform duration-300 ease-in-out group-hover:-translate-y-[250px] relative z-10">
          <p className="text-[#171717] text-[20px] font-bold leading-snug">
            Less Theory. More &quot;OH, This Works.&quot;
          </p>
        </div>

        <div className="relative w-full flex flex-col items-center justify-center z-10">
          <div className="flex w-full max-w-[952px] flex-col items-center justify-center  transition-all duration-300 ease-in-out group-hover:translate-y-[280px] group-hover:opacity-0 px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:gap-2 items-center sm:items-end mb-1 mt-6 sm:mt-8">
              <CustomeText title="Hello! I'm" className="text-[#171717] font-semibold text-3xl sm:text-4xl md:text-6xl xl:text-[72px]" />
              <div className="flex items-end">
                <CustomeText title="Priya" className="text-[#FD853A] font-semibold text-3xl sm:text-4xl md:text-6xl xl:text-[72px]" />
                <CustomeText title="," className="text-[#171717] font-semibold text-3xl sm:text-4xl md:text-6xl xl:text-[72px]" />
              </div>
            </div>
            <CustomeText title="A Business Consultant" className="text-[#171717] font-semibold text-2xl sm:text-3xl md:text-5xl xl:text-[56px] text-center whitespace-nowrap" />
          </div>

          <div className="relative w-full max-w-[952px] aspect-[3/2] flex flex-col items-center justify-center -translate-y-[10%] sm:-translate-y-[15%] md:-translate-y-[20%] mx-auto px-4">
            <div className="absolute bottom-0 z-0 w-[90%] max-w-[812px] aspect-[2/1] overflow-hidden flex items-center justify-center pointer-events-auto">
              <div className="absolute w-full h-full bg-[#FEB273] rounded-t-full" />
            </div>

            <div className="absolute z-10 transition-all duration-500 ease-in-out opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-105">
              <Image
                src="/Frame 68.svg"
                alt="Frame Decoration"
                width={1017}
                height={688}
                className="object-contain w-full h-auto"
                priority
              />
            </div>

            <div className="relative z-20 w-full max-w-[340px] sm:max-w-[425px] md:max-w-[510px] lg:max-w-[595px] h-[255px] sm:h-[340px] md:h-[425px] lg:h-[510px] mx-auto mt-5 flex items-end justify-center">
              <Image
                src="/priya.png"
                alt="Business Consultant"
                width={340}
                height={425}
                className="w-full h-full object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-[220px] flex-col items-end justify-start gap-3 transition-transform duration-300 ease-in-out group-hover:-translate-y-[250px] relative z-10">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} fill="#FD853A" stroke="#FD853A" />
            ))}
          </div>
          <div className="flex flex-col items-end gap-1">
            <h1 className="text-[20px] font-bold text-[#171717] leading-tight text-right">
              Strategy & GTM
            </h1>
            <p className="text-[14px] text-[#667085] leading-snug text-right">
              Place where we Think first. Scale next.
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div id="services" className="relative flex flex-col w-full min-h-[600px] sm:min-h-[750px] lg:min-h-[878px] gap-8 sm:gap-16 lg:gap-[96px] items-center px-4 sm:px-6 lg:px-[71px] py-8 pb-12 sm:py-16 sm:pb-20 lg:py-[116px] bg-[#171717] rounded-[30px] sm:rounded-[50px] overflow-hidden -mt-20 sm:-mt-14 md:-mt-16 lg:translate-y-0">
        <Image
          src="/Frame 77.svg"
          alt="image"
          fill
          className="object-cover absolute opacity-50"
        />

        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-4 sm:gap-6 relative z-10">
          <div className="flex gap-2.5">
            <CustomeText title="What I" className="font-medium text-2xl sm:text-3xl lg:text-5xl text-[#FCFCFD]" />
            <CustomeText title="Actually Do" className="font-medium text-2xl sm:text-3xl lg:text-5xl text-[#FD853A]" />
          </div>
          <p className="w-full lg:w-[578px] font-medium text-sm sm:text-base lg:text-[20px] text-white">
            I work with founders and leadership teams on the strategic decisions that actually move the business forward.
          </p>
        </div>

        <div className="relative w-full max-w-[1299px] flex items-start justify-center">
          <GenericSlider
            data={cardData}
            slidesPerView={3}
            heightClass="h-[500px] sm:h-[550px]"
            cardType="hover"
          />
        </div>
      </div>

      {/* Skills Slider */}
      <div className="relative w-full h-[80px] sm:h-[120px] lg:h-[147px] bg-[#FB6514] rounded-tl-4xl rounded-br-4xl overflow-hidden -mt-4 flex items-center justify-center">
        <div className="absolute w-[5000px] h-[40px] sm:h-[55px] lg:h-[63px] bg-white -rotate-[1deg] sm:-rotate-[1.5deg] lg:-rotate-[1.9deg] z-10 -ml-2 flex items-center justify-center">
          <div className="marquee flex gap-4 sm:gap-6 lg:gap-8 w-max items-center h-full">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-4 lg:gap-5 text-[#000000] text-[20px] sm:text-[32px] lg:text-[48px] whitespace-nowrap font-medium"
              >
                <span
                  aria-hidden="true"
                  className="inline-block w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 rounded-full bg-black"
                />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div id="testimonials" className="relative flex flex-col w-full min-h-[700px] sm:min-h-[800px] lg:min-h-[900px] items-center px-4 sm:px-6 lg:px-[71px] py-8 sm:py-12 lg:py-[96px] gap-6 sm:gap-8 lg:gap-12 bg-[#171717] rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] overflow-hidden">
        <Image
          src="/Frame 77.svg"
          alt="image"
          fill
          className="object-cover absolute opacity-50"
        />

        <div className="flex flex-col w-full max-w-[1299px] items-center gap-3 sm:gap-4 z-10 px-2">
          <div className="flex flex-col items-center max-w-full sm:max-w-[448px]">
            <CustomeText
              title="Client Results That"
              className="font-medium text-[24px] sm:text-[32px] lg:text-[48px] text-[#FCFCFD] text-center"
            />
            <div className="flex flex-wrap gap-2 sm:gap-2.5 justify-center">
              <CustomeText
                title="Speak to"
                className="font-medium text-[24px] sm:text-[32px] lg:text-[48px] text-[#FCFCFD]"
              />
              <CustomeText
                title="My Impact"
                className="font-medium text-[24px] sm:text-[32px] lg:text-[48px] text-[#FD853A]"
              />
            </div>
          </div>
          <p className="w-full max-w-[742px] text-[14px] sm:text-[16px] lg:text-[20px] text-[#F9FAFB] text-center leading-[1.5] sm:leading-[1.6] px-2">
            I&apos;ve worked with growing businesses and startups across different industries, helping them clarify strategy and make smarter growth decisions.
          </p>
        </div>

        <div className="absolute bottom-[15%] sm:bottom-[20%] left-0 right-0 w-full z-10">
          <GenericSlider
            data={reviews}
            slidesPerView={3}
            heightClass=""
            cardType="review"
          />
        </div>
      </div>

      {/* My Approach */}
      <div id="approach" className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-[71px] py-8 sm:py-16 lg:py-20 gap-6 sm:gap-8 lg:gap-12 bg-[#F9FAFB]">
        <div className="w-full max-w-4xl text-center flex flex-col items-center gap-3 sm:gap-4">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 lg:gap-4">
            <CustomeText
              title="How I"
              className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[64px] text-[#344054]"
            />
            <CustomeText
              title="Work"
              className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[64px] text-[#FD853A]"
            />
          </div>
          <p className="text-[#667085] text-sm sm:text-base lg:text-xl leading-relaxed max-w-2xl">
            Principles that guide every engagement.
          </p>
        </div>

        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {approachSteps.map((step, index) => (
            <div key={index} className="flex flex-col items-start text-left gap-3 sm:gap-4 p-5 sm:p-6 lg:p-8 bg-white rounded-[16px] sm:rounded-[20px] shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center gap-3 sm:gap-4 w-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FD853A] rounded-full flex items-center justify-center flex-shrink-0">
                  <CustomeText title={step.step} className="text-white font-bold text-base sm:text-lg" />
                </div>
                <CustomeText title={step.title} className="font-semibold text-lg sm:text-xl lg:text-2xl text-[#1D2939]" />
              </div>
              <p className="text-[#667085] text-sm sm:text-base lg:text-lg leading-relaxed w-full ml-[52px] sm:ml-[64px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Who I Work With */}
      <div id="contact" className="w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-[71px] py-8 sm:py-12 lg:pt-[122px] lg:pb-12 bg-[#F2F4F7] rounded-[24px] sm:rounded-[32px] lg:rounded-[50px] gap-6 sm:gap-8 lg:gap-[96px]">
        
        {/* Image - Hidden on Mobile */}
        <div className="hidden lg:block relative w-full max-w-[500px] mx-auto lg:mx-0 group">
          {/* Background SVG Animation */}
          <Image
            src="/Property 1=Variant2.svg"
            alt="Background decoration"
            width={500}
            height={500}
            className="absolute inset-0 w-full h-full object-contain -translate-y-[15px] transition-all duration-300 ease-in-out opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-110"
            priority
          />
          
          {/* Main Image */}
          <div className="relative z-20 w-full max-w-[340px] sm:max-w-[425px] md:max-w-[450px] h-[340px] sm:h-[425px] md:h-[450px] mx-auto flex items-end justify-center transition-all duration-300 ease-in-out group-hover:translate-y-3">
            <Image
              src="/priya2.png"
              alt="Priya - Business Consultant"
              width={340}
              height={425}
              className="w-full h-full object-contain object-bottom"
              priority
            />
          </div>
        </div>

        <div className="w-full max-w-xl flex flex-col items-start gap-4 sm:gap-6 lg:gap-8">
          <div className="flex flex-wrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold gap-2 w-full">
            <CustomeText title="Ready to" className="text-[#344054]" />
            <CustomeText title="Work Together?" className="text-[#FD853A]" />
          </div>

          <p className="text-[#667085] text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed w-full">
            I work with early-stage and growing startups, small to mid-sized businesses, and leadership teams preparing for expansion or scale.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm lg:text-base font-medium text-[#667085] w-full">
            {iconAndText.map((data, index) => {
              const Icon = data.icon;
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon size={18} className="sm:w-5 sm:h-5 text-[#FD853A]" />
                  {data.name}
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <ClientOnly>
            <button 
              onClick={openBookingModal}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#FD853A] hover:bg-[#e4752f] text-white text-base sm:text-lg lg:text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book Discovery Call →
            </button>
          </ClientOnly>
        </div>
      </div>

      <Footer onBookingClick={openBookingModal} />

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={closeBookingModal}
        calendlyUrl="https://calendly.com/priyatamang866/discovery-call" 
      />
    </div>
  );
}

