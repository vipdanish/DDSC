
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
    <section id="gallery" className={`py-20 ${
      theme === 'light' ? 'bg-gray-50' : 'bg-background'
    }`}>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`heading-md mb-6 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Our <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-ndc-purple to-ndc-blue mx-auto mb-6"></div>
          <p className={`text-lg ${
            theme === 'light' ? 'text-gray-700' : 'text-gray-300'
          }`}>
            Explore moments from our club activities, meetings, and collaborative sessions that showcase our vibrant community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl border cursor-pointer transition-all duration-300 hover:transform hover:scale-105 ${
                theme === 'light' 
                  ? 'bg-white border-gray-200 shadow-lg hover:shadow-2xl' 
                  : 'bg-black/20 border-white/10 hover:shadow-2xl'
              }`}
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/90 text-sm line-clamp-2">{item.description}</p>
                </div>
              </div>
              <div className={`p-6 ${
                theme === 'light' ? 'bg-white' : 'bg-black/20'
              }`}>
                <h3 className={`text-xl font-bold mb-3 ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  {item.title}
                </h3>
                <p className={`${
                  theme === 'light' ? 'text-gray-700' : 'text-gray-300'
                } leading-relaxed`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>
              
              <div className="relative">
                <img
                  src={galleryItems[selectedImage].image}
                  alt={galleryItems[selectedImage].title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-bold mb-2">
                  {galleryItems[selectedImage].title}
                </h3>
                <p className="text-gray-300">
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
