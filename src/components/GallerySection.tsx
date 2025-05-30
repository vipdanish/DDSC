
import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const GallerySection = () => {
  const { theme } = useTheme();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      image: "/lovable-uploads/f8d148d8-8a75-494c-8aeb-ee1d320435e5.png",
      title: "First Meeting of DDSC",
      description: "The inaugural meeting of DCode Developers Student Club where passionate students gathered to discuss the club's vision and roadmap for the future."
    },
    {
      id: 2,
      image: "/lovable-uploads/42e7bbe7-c7ee-40ce-afc1-ed364cc71526.png",
      title: "Team Collaboration Session",
      description: "Club members engaged in collaborative discussions, sharing ideas and planning upcoming projects and events."
    },
    {
      id: 3,
      image: "/lovable-uploads/40b4b5a2-07f2-428b-9e77-88f7586e1098.png",
      title: "Knowledge Sharing Workshop",
      description: "Interactive workshop session where experienced members shared technical knowledge with newcomers, fostering a culture of learning and growth."
    },
    {
      id: 4,
      image: "/lovable-uploads/371c7355-893e-47ba-aee5-6b71e894e9ac.png",
      title: "Strategic Planning Meeting",
      description: "Core team members discussing strategic initiatives and planning the club's activities for skill development and community building."
    }
  ];

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

  return (
    <section id="gallery" className={`py-20 transition-all duration-1000 ease-in-out ${
      theme === 'light' ? 'bg-gradient-to-br from-gray-50 to-blue-50' : 'bg-gradient-to-br from-background to-secondary'
    }`}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className={`heading-md mb-6 transition-all duration-500 hover:scale-105 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Our <span className="gradient-text animate-pulse">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-6 animate-[scale-in_0.8s_ease-out]"></div>
          <p className={`text-lg transition-all duration-500 hover:scale-105 ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            Explore moments from our club activities, meetings, and collaborative sessions that showcase our vibrant community.
          </p>
        </div>

        {/* Masonry-style grid for portrait photos */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl border cursor-pointer transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-ndc-purple/20 break-inside-avoid mb-6 animate-fade-in ${
                theme === 'light' 
                  ? 'bg-white border-gray-200 shadow-lg hover:shadow-2xl hover:border-ndc-purple/30' 
                  : 'bg-black/20 border-white/10 hover:shadow-2xl hover:border-ndc-blue/30'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white font-semibold text-lg mb-2 drop-shadow-lg">{item.title}</h3>
                  <p className="text-white/90 text-sm line-clamp-3 drop-shadow-md">{item.description}</p>
                </div>
              </div>
              <div className={`p-6 transition-all duration-300 ${
                theme === 'light' ? 'bg-white group-hover:bg-gray-50' : 'bg-black/20 group-hover:bg-black/30'
              }`}>
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                  theme === 'light' ? 'text-gray-900 group-hover:text-ndc-purple' : 'text-white group-hover:text-ndc-blue'
                }`}>
                  {item.title}
                </h3>
                <p className={`transition-colors duration-300 leading-relaxed ${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                } group-hover:text-opacity-90`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative max-w-4xl w-full animate-scale-in">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-all duration-300 hover:scale-110 hover:rotate-90"
              >
                <X size={32} />
              </button>
              
              <div className="relative">
                <img
                  src={galleryItems[selectedImage].image}
                  alt={galleryItems[selectedImage].title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl"
                />
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              <div className="mt-6 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-white text-2xl font-bold mb-3">
                  {galleryItems[selectedImage].title}
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  {galleryItems[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
