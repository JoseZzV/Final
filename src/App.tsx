import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import Hero from './components/hero';
import Models from './components/models';
import Makeup from './components/makeup';
import FashionEvents from './components/fashionEvents';
import PhotoSales from './components/photoSales';
import ContactUs from './components/contactUs';
import Footer from './components/footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Nav />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/models" element={<Models />} />
            <Route path="/makeup" element={<Makeup />} />
            <Route path="/fashion-events" element={<FashionEvents />} />
            <Route path="/photo-sales" element={<PhotoSales />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
