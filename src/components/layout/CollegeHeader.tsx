import { CheckCircle2, Award, ShieldCheck, University } from "lucide-react";

const CollegeHeader = () => {
  const infoItems = [
    {
      label: "Approved by AICTE New Delhi & DTE Maharashtra",
      icon: <CheckCircle2 className="h-4 w-4 text-emerald-400" />,
    },
    {
      label: "Accredited with \"B\" Grade by NAAC",
      icon: <Award className="h-4 w-4 text-amber-400" />,
    },
    {
      label: "ISO 9001:2015 Certified",
      icon: <ShieldCheck className="h-4 w-4 text-sky-400" />,
    },
    {
      label: "Affiliated to DBATU, Lonere",
      icon: <University className="h-4 w-4 text-indigo-400" />,
    },
  ];

  return (
    <header className="w-full relative z-40">
      {/* Main header - Enhanced with better visual hierarchy */}
      <div className="relative backdrop-blur-2xl bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/80 border-b border-white/10 shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between gap-2 sm:gap-4 py-2 md:py-4">
            {/* Left: College logo with enhanced presentation */}
            <div className="flex-shrink-0 group">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50 group-hover:opacity-75"></div>
                <img
                  src="/images/ssiems-logo.png"
                  alt="Shri Shivaji Institute of Engineering and Management Studies Logo"
                  className="relative h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
  
            {/* Center: Trust name + college name with better typography */}
            <div className="flex-1 text-center leading-tight px-2 sm:px-4">
              <div className="inline-block relative mb-0.5 sm:mb-1 max-w-full">
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-lg blur-md"></div>
                <p className="relative text-[6px] sm:text-[8px] md:text-xs font-medium tracking-wider uppercase bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent px-1 sm:px-2 break-words">
                  Marathwada Shikshan Prasarak Mandal's
                </p>
              </div>
              <h1 className="mt-0.5 sm:mt-1 text-[8px] sm:text-[10px] md:text-sm lg:text-base font-bold tracking-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg leading-tight">
                Shri Shivaji Institute of Engineering and Management Studies
                <span className="hidden md:inline">,</span>
                <span className="md:hidden"><br /></span>
                <span className="text-indigo-300 ml-1">Parbhani</span>
              </h1>
            </div>
  
            {/* Right: Ganesh statue + NAAC badge with enhanced display */}
            <div className="flex-shrink-0 flex items-center justify-end gap-1.5 sm:gap-3 md:gap-4">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-75"></div>
                <img
                  src="/images/ssiems-ganesh.webp"
                  alt="Traditional Ganesh statue"
                  className="relative h-7 sm:h-8 md:h-10 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-75"></div>
                <img
                  src="/images/ssiems-naac.webp"
                  alt="NAAC B Grade Accreditation"
                  className="relative h-7 sm:h-8 md:h-10 w-auto object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="relative backdrop-blur-md bg-gradient-to-r from-slate-950/60 via-slate-900/40 to-slate-950/60 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2">
          <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 gap-y-1.5 text-[8px] sm:text-[9px] md:text-xs text-gray-300">
            {infoItems.map((item, index) => (
              <div 
                key={item.label} 
                className="flex items-center gap-1 px-1 py-0.5 rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  {item.icon}
                </div>
                <span className="whitespace-normal text-center font-medium group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
                {index < infoItems.length - 1 && (
                  <span className="hidden md:inline-block w-px h-2.5 bg-white/10 mx-0.5"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default CollegeHeader;
