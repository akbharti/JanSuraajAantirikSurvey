const HeaderBanner = () => (
  <header 
    className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] shadow-2xl border-b-4 border-amber-400 min-h-[500px] bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/banner.png')",
      backgroundColor: "#1e293b" // fallback color
    }}
  >
    {/* Dark overlay for better text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80"></div>
    
    {/* Content over the background */}
    <div className="relative z-10 container mx-auto px-6 py-8">
      {/* Top section with logo and title */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="bg-white p-3 rounded-xl shadow-lg backdrop-blur-sm">
            <img src="/vite.svg" alt="Jan Suraaj Logo" className="h-12 w-12" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-lg">
              Jan Suraaj
            </h1>
            <p className="text-amber-300 text-lg md:text-xl font-medium tracking-wide drop-shadow-lg">
              Aantirik Survey
            </p>
          </div>
        </div>
        
        {/* Optional enterprise badge/seal */}
        {/* <div className="hidden md:flex flex-col items-end text-right">
          <div className="bg-amber-400 text-slate-900 px-4 py-2 rounded-lg font-bold text-sm backdrop-blur-sm shadow-lg">
            OFFICIAL SURVEY
          </div>
          <p className="text-amber-200 text-sm mt-1 drop-shadow-lg">Bihar 2025</p>
        </div> */}
      </div>
      
      {/* Subtitle content */}
      <div className="max-w-5xl mx-auto bg-black/40 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/30 shadow-2xl">
        <div className="text-center space-y-4">
          <p className="text-lg md:text-xl leading-relaxed text-amber-100 font-semibold drop-shadow-lg">
            यह प्रश्नावली जन सुराज के 'बदलाव' के संकल्प को ज़मीनी स्तर पर परखने का एक निर्णायक प्रयास है। हम मानते हैं कि आपका मत ही जन सुराज की असली ताक़त है।
          </p>
          
          <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full shadow-lg"></div>
          
          <p className="text-base md:text-lg leading-relaxed text-white/95 drop-shadow-lg">
            यह सर्वेक्षण बिहार के आगामी राजनीतिक परिदृश्य को समझने के लिए अत्यंत महत्वपूर्ण है। इसके माध्यम से, हम आपके विधानसभा क्षेत्र में प्रशांत किशोर जी की पहल के प्रभाव, संगठन की ताक़त, विचारधारा के आकर्षण, और चुनावी संभावनाओं का निष्पक्ष आकलन कर रहे हैं।
          </p>
          
          <div className="bg-amber-400/30 border-l-4 border-amber-400 p-4 rounded-r-lg backdrop-blur-sm">
            <p className="text-base md:text-lg leading-relaxed text-amber-100 font-semibold drop-shadow-lg">
              कृपया अपनी स्पष्ट और ईमानदार राय दें, क्योंकि आपकी राय ही जन सुराज के लिए भविष्य का रास्ता तय करेगी।
            </p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Decorative bottom border */}
    <div className="relative z-10 h-2 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500"></div>
  </header>
);

export default HeaderBanner;
