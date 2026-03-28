

interface HoverCardProps {
  title: string;
  description: string;
  outcomes: string[];
  icon: string;
  priority?: boolean;
}

export default function ServicesCard({ title, description, outcomes, icon, priority = false }: HoverCardProps) {
  return (
    <div className="relative flex flex-col w-full md:max-w-[360px] lg:max-w-[416px] h-auto min-h-[320px] rounded-[37px] lg:rounded-[40px] bg-white/10 backdrop-blur-[15px] border border-white/50 hover:bg-[#FD853A] transition-all duration-300 ease-in-out overflow-hidden cursor-pointer group p-6">

      {/* Title */}
      <h2 className="text-white font-semibold text-[20px] md:text-[24px] lg:text-[28px] mb-3 leading-tight">
        {title}
      </h2>

      {/* Description */}
      <p className="text-white/80 group-hover:text-white/90 text-[14px] md:text-[16px] leading-relaxed mb-4">
        {description}
      </p>

      {/* Outcomes */}
      <div className="space-y-2">
        <h4 className="text-white font-medium text-[16px] mb-2">Outcomes:</h4>
        <ul className="space-y-2">
          {outcomes.map((outcome, index) => (
            <li key={index} className="flex items-center text-white/90 text-[14px]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FD853A] group-hover:bg-white mr-3 flex-shrink-0"></div>
              {outcome}
            </li>
          ))}
        </ul>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 group-hover:to-black/10 transition-all duration-300 rounded-[37px] lg:rounded-[40px] pointer-events-none"></div>
    </div>
  );
}
