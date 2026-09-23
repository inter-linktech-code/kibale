import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import Restaurant from "./pages/Restaurant";
import Camping from "./pages/Camping";
import KibaleNationalPark from "./pages/KibaleNationalPark";
import CraterLakes from "./pages/CraterLakes";
import GuidedTours from "./pages/GuidedTours";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Experiences from "./pages/Experiences";
import Gallery from "./pages/Gallery";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main>
          <Routes>
            {/* HOME */}
            <Route path="/" element={<Home />} />

            {/* STAY */}
            <Route
              path="/accommodation"
              element={<Accommodation />}
            />

            <Route
              path="/booking"
              element={<Booking />}
            />

            {/* RESTAURANT */}
            <Route
              path="/restaurant"
              element={<Restaurant />}
            />

            {/* EXPERIENCES */}
            <Route
              path="/experiences"
              element={<Experiences />}
            />

            <Route
              path="/kibale-national-park"
              element={<KibaleNationalPark />}
            />

            <Route
              path="/crater-lakes"
              element={<CraterLakes />}
            />

            <Route
              path="/guided-tours"
              element={<GuidedTours />}
            />

            <Route
              path="/camping"
              element={<Camping />}
            />

            {/* GALLERY */}
            <Route
              path="/gallery"
              element={<Gallery />}
            />

            {/* ABOUT */}
            <Route
              path="/about"
              element={<About />}
            />

            {/* CONTACT */}
            <Route
              path="/contact"
              element={<Contact />}
            />
          </Routes>
        </main>

        <Footer />

        {/* FLOATING WHATSAPP */}
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;