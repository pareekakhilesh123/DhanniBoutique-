import { HashRouter, Routes, Route } from "react-router-dom";
import Home         from "./pages/Home";
import Collections  from "./pages/Collections";
import About        from "./pages/About";
import Gallery      from "./pages/Gallery";
import Contact      from "./pages/Contact";
import PriceList    from "./pages/PriceList";
import SizeGuide    from "./pages/SizeGuide";
import FabricPicker from "./pages/FabricPicker";
// import OrderTracker from "./pages/OrderTracker";
import Appointment  from "./pages/Appointment";
import BeforeAfter  from "./pages/BeforeAfter";
import Referral     from "./pages/Referral";
// import NotifyMe     from "./pages/NotifyMe";
import Navbar       from "./components/Navbar";
import Footer       from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <WhatsAppButton />
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/collections"   element={<Collections />} />
        <Route path="/about"         element={<About />} />
        <Route path="/gallery"       element={<Gallery />} />
        <Route path="/contact"       element={<Contact />} />
        <Route path="/price-list"    element={<PriceList />} />
        <Route path="/size-guide"    element={<SizeGuide />} />
        <Route path="/fabric-picker" element={<FabricPicker />} />
        {/* <Route path="/track-order"   element={<OrderTracker />} /> */}
        <Route path="/appointment"   element={<Appointment />} />
        <Route path="/before-after"  element={<BeforeAfter />} />
        <Route path="/referral"      element={<Referral />} />
        {/* <Route path="/notify-me"     element={<NotifyMe />} /> */}
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
