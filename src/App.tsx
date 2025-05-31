import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { projects } from "./pages/Projects/data";
import { getProjectId } from "./utils/functions";

const ImageModal = ({ images, currentIndex, onClose }: { images: any[], currentIndex: number, onClose: () => void }) => {
  const [selectedIndex, setSelectedIndex] = useState(currentIndex);
  const [direction, setDirection] = useState(0);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const prevImage = () => {
    if (selectedIndex > 0) {
      setDirection(-1);
      setSelectedIndex(selectedIndex - 1);
    } else {
      setDirection(-1);
      setSelectedIndex(images.length - 1);
    }
  };

  const nextImage = () => {
    if (selectedIndex < images.length - 1) {
      setDirection(1);
      setSelectedIndex(selectedIndex + 1);
    } else {
      setDirection(1);
      setSelectedIndex(0);
    }
  };

  const x3Image = images.map(image => image.src)[selectedIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4" onClick={onClose} {...swipeHandlers}>
      <div className="relative w-full flex justify-center items-center" onClick={(e) => e.stopPropagation()}>
        <motion.img
          key={selectedIndex}
          src={x3Image}
          alt="Fullscreen"
          className="w-full max-h-[85vh] object-contain rounded-lg"
          initial={{ opacity: 0, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -100 }}
          transition={{ duration: 0.3 }}
        />
        <button className="fixed top-4 right-4 text-white bg-gray-700 p-2 rounded" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* {selectedIndex > 0 && ( */}
        <button className="fixed left-4 top-1/2 text-white bg-gray-700 p-2 rounded" onClick={prevImage}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* )} */}
        {/* {selectedIndex < images.length - 1 && ( */}
        <button className="fixed right-4 top-1/2 text-white bg-gray-700 p-2 rounded" onClick={nextImage}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {/* )} */}
        <div className="fixed bottom-0 flex items-center">
          <div className="hidden lg:flex overflow-x-auto whitespace-nowrap w-full px-4">
            <div className="flex justify-center space-x-2">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.mediaViewer?.image}
                  alt="Thumbnail"
                  className={`w-16 h-16 cursor-pointer object-cover rounded ${index === selectedIndex ? 'border-2 border-white' : 'opacity-50'}`}
                  onClick={() => setSelectedIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const projectId = getProjectId();
  const projectIdentifier = projectId ?? "not-found";
  const project = projects.find(project => project.identifier === projectIdentifier);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    if (project?.private) {
      setTimeout(() => {
        setShowSnackbar(true);
      }, 1000); // delay for better UX
    }
  }, [project]);

  const noProject = projectIdentifier === "not-found" || !project;

  const openImage = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="hidden md:block md:w-1/4 bg-gray-100 p-4 border-r fixed h-full overflow-y-auto">
        {!noProject && <div className="mb-4 p-4 border border-gray-300 rounded">
          <h2 className="font-bold text-lg">{project?.name}</h2>
        </div>}
        <div className="mb-4 p-4 border border-gray-300 rounded">
          <h2 className="font-bold text-lg">About Me</h2>
          <p className="text-sm"><span className="font-[600]">Name:</span> {" "}Oday Ali</p>
          <p className="text-sm"><span className="font-[600]">Birth Year:</span> {" "}1997</p>
          <p className="text-sm"><span className="font-[600]">Profession:</span>{" "}
            A software engineer with more than 4 years of experience, specializing in front-end development.</p>
          <p className="text-sm"><span className="font-[600]">Education:</span>{" "}
            Bachelor in IT Engineering and specialization in Artificial intelligence engineering (Damascus University).</p>
        </div>
        <div className="border border-gray-300 p-4 rounded">
          <h2 className="font-bold text-lg">Contact</h2>
          <p className="text-sm"><span className="font-[600]">E-mail:</span> ody.ali.eng@gmail.com</p>
          <p className="text-sm"><span className="font-[600]">Phone:</span> +963 996451523</p>
          <p className="text-sm"><span className="font-[600]">Linkedin:</span> linkedin.com/in/oday-ali-eng</p>
          <p className="text-sm"><span className="font-[600]">Location:</span> Damascus - Syria</p>
          <p className="text-sm"><span className="font-[600]">Github:</span> github.com/OdayAli2249</p>
        </div>
      </aside>
      <div className="flex-1 ml-0 md:ml-[25%] h-full flex flex-col">
        <div className="fixed h-[3rem] left-0 md:left-[25%] w-full md:w-3/4 bg-white px-4 z-1 flex gap-8 items-center">
          {noProject ? <h2 className="font-bold text-lg">No Content</h2> :
            project?.links?.map((item, index) => (
              <a key={index} href={item.url} className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer">{item.clickableText}</a>
            ))}
        </div>
        {noProject && <div className="flex justify-center items-center h-screen bg-gray-100">
          <img
            src="https://odayali2249.github.io/portfolio-resources/icons/404.webp"
            alt="Sample"
            className="max-w-full max-h-full"
          />
        </div>}
        {!noProject && <div className="mt-[3rem] flex-1 overflow-y-auto pb-4 pl-4 pr-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project?.gallery?.map((image, index) => (
              <img key={index} src={image.mediaViewer?.image} alt="Project Screenshot" className="w-full h-full rounded object-cover cursor-pointer" onClick={() => openImage(index)} />
            ))}
          </div>
        </div>}
      </div>
      {modalOpen && currentImageIndex !== null && (
        <ImageModal images={project?.gallery ?? []} currentIndex={currentImageIndex} onClose={() => setModalOpen(false)} />
      )}
      <AnimatePresence>
        {showSnackbar && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-[340px] min-h-[120px] bg-white/80 backdrop-blur-md shadow-xl border border-gray-300 rounded-xl p-4 pr-10 text-gray-800 text-[1.05rem] z-50"
          >
            <button
              onClick={() => setShowSnackbar(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              aria-label="Close"
            >
              {/* SVG Close Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <strong className="block mb-1 font-semibold">Private project access</strong>
            This platform link leads to the <strong>development environment</strong>. Due to policy restrictions, access credentials are not public.
            Please email me at <strong>ody.ali.eng@gmail.com</strong> to request access.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
