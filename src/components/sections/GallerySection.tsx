import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { getAssetPath } from "@/lib/utils";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const galleryItems = [
    {
      id: 1,
      image: "images/5e6f6f4e-3e10-4db7-8c58-1abdecf9cb21.png",
      title: "First Meeting of DDSC",
      description: "The inaugural meeting of DCode Developers Student Club where passionate students gathered to discuss the club's vision and roadmap for the future."
    },
    {
      id: 2,
      image: "images/371c7355-893e-47ba-aee5-6b71e894e9ac.png",
      title: "Team Collaboration Session",
      description: "Club members engaged in collaborative discussions, sharing ideas and planning upcoming projects and events."
    },
    {
      id: 3,
      image: "images/8b55aaf1-820b-4689-838d-0cb2feb287e1.png",
      title: "Knowledge Sharing Workshop",
      description: "Interactive workshop session where experienced members shared technical knowledge with newcomers, fostering a culture of learning and growth."
    },
    {
      id: 4,
      image: "images/42e7bbe7-c7ee-40ce-afc1-ed364cc71526.png",
      title: "Strategic Planning Meeting",
      description: "Core team members discussing strategic initiatives and planning the club's activities for skill development and community building."
    }
  ];

  // Auto-slide functionality with 2.5 second interval
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
      }, 2500);

      return () => clearInterval(interval);
    }
  }, [isHovered, galleryItems.length]);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1);
    }
  };

  const moveLeft = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const moveRight = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const getImagePosition = (index: number) => {
    const diff = (index - currentIndex + galleryItems.length) % galleryItems.length;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === galleryItems.length - 1) return 'side';
    return 'hidden';
  };

  const getImageStyles = (position: string, index: number) => {
    const baseStyles = "absolute transition-all duration-700 ease-in-out cursor-pointer";
    
    switch (position) {
      case 'center':
        return `${baseStyles} left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 z-30 scale-100 opacity-100`;
      case 'side':
        const diff = (index - currentIndex + galleryItems.length) % galleryItems.length;
        const isRight = diff === 1;
        return `${baseStyles} ${
          isRight ? 'left-[70%]' : 'left-[10%]'
        } top-1/2 -translate-y-1/2 w-48 h-64 z-20 scale-90 opacity-75`;
      default:
        return `${baseStyles} opacity-0 scale-75 pointer-events-none`;
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-20 transition-all duration-1000 ease-in-out bg-transparent scroll-mt-28 md:scroll-mt-32">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-10 animate-fade-in">
          <h2 className="heading-md mb-4 transition-all duration-500 hover:scale-105 text-white">
            Our <span className="gradient-text animate-pulse">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-4 animate-[scale-in_0.8s_ease-out]"></div>
          <p className="text-lg transition-all duration-500 hover:scale-105 text-gray-300">
            Explore moments from our club activities, meetings, and collaborative sessions that showcase our vibrant community.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative h-[450px] max-w-6xl mx-auto overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={moveRight}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={moveLeft}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronRight size={24} />
          </button>

          {/* Images */}
          {galleryItems.map((item, index) => {
            const position = getImagePosition(index);
            const isCenter = position === 'center';
            
            return (
              <div
                key={item.id}
                className={getImageStyles(position, index)}
                onClick={() => openModal(index)}
              >
                <div className="group relative overflow-hidden rounded-2xl border h-full cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-ndc-purple/20 bg-black/20 border-white/10 hover:shadow-2xl hover:border-ndc-blue/30">
                  <div className="relative overflow-hidden h-full">
                    <img
                      src={getAssetPath(item.image)}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    {isCenter && (
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                        <h3 className="text-white font-semibold text-lg mb-2 drop-shadow-lg">{item.title}</h3>
                        <p className="text-white/90 text-sm line-clamp-3 drop-shadow-md">{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Image Info */}
        <div className="text-center mt-8 animate-fade-in">
          <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 text-white">
            {galleryItems[currentIndex].title}
          </h3>
          <p className="max-w-2xl mx-auto leading-relaxed text-gray-300">
            {galleryItems[currentIndex].description}
          </p>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3 backdrop-blur-md bg-white/5 p-4 rounded-full w-fit mx-auto border border-white/10 shadow-lg shadow-black/20">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-ndc-purple to-ndc-blue scale-150 shadow-lg shadow-ndc-purple/50'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal for full screen image view */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fade-in"
          onClick={closeModal}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
            onClick={closeModal}
          >
            <X size={40} />
          </button>
          
          <button 
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all z-[110] bg-white/10 p-4 rounded-full"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <ChevronLeft size={40} />
          </button>
          
          <button 
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-all z-[110] bg-white/10 p-4 rounded-full"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <ChevronRight size={40} />
          </button>
          
          <div className="max-w-5xl max-h-[85vh] p-4 relative" onClick={(e) => e.stopPropagation()}>
            <img 
              src={getAssetPath(galleryItems[selectedImage].image)} 
              alt={galleryItems[selectedImage].title}
              className="w-full h-full object-contain rounded-lg shadow-2xl shadow-ndc-purple/20"
            />
            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{galleryItems[selectedImage].title}</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">{galleryItems[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
