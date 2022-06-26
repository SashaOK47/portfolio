import { useEffect, useState, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import { AnimatePresence } from "framer-motion";

import Loader from "./components/Loader";
import Noise from "./components/Noise";
import SoundBar from "./components/SoundBar";
import Cursor from "./components/Cursor";
import CursorManager from "./components/Cursor/CursorManager";
import Header from "./components/Header";
import MenuMobile from "./components/MenuMobile";
import MenuManager from "./components/MenuMobile/MenuManager";
import Modal from "./components/Modal";
import ModalManager from "./components/Modal/ModalManager";

import Intro from "./sections/Intro";
import Skills from "./sections/Skills";
import NewProjects from "./sections/NewProjects";
import Projects from "./sections/Projects";
import Applications from "./sections/Applications";
import Footer from "./sections/Footer";

import repair from "./assets/images/repair.jpg";

function App() {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);

  return (
    <>
      <Loader loading={loading} />
      {!loading && (
        <CursorManager>
          <ModalManager>
            <SoundBar />
            <Noise />
            <Cursor />
            <LocomotiveScrollProvider
              options={{
                smooth: true,
                inertia: 0.1,
                smartphone: {
                  smooth: true,
                },
                tablet: {
                  smooth: true,
                },
              }}
              watch={[]}
              containerRef={containerRef}
            >
              <MenuManager>
                <MenuMobile />
                <ScrollTriggerProxy />
                <AnimatePresence>
                  <div
                    className="App"
                    id="app"
                    data-scroll-container
                    ref={containerRef}
                  >
                    <Header />
                    <Intro />
                    <main className="main">
                      <Skills />
                      <NewProjects />
                      <Projects />
                      <Applications />
                    </main>
                    <Footer />
                  </div>
                </AnimatePresence>
              </MenuManager>
            </LocomotiveScrollProvider>

            <Modal>
              <p>Сайт находится в режиме разработки!</p>
              <img src={repair} alt="image" />
            </Modal>
          </ModalManager>
        </CursorManager>
      )}
    </>
  );
}

export default App;
