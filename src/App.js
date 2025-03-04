import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import JoinUs from './pages/JoinUs';
import Insights from './pages/Insights';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import AITrainings from './pages/AITrainings';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import ClientSignUp from './pages/Client/ClientSignUp';
import Pricing from './components/Pricing'; // Added import for Pricing component
import WhatWeOffer from './pages/ForClients/components/whatweoffer'; // Import WhatWeOffer component
import Consulting from './pages/ForClients/components/consulting'; // Import Consulting component
import Corporate from './pages/ForClients/components/corporate'; // Import Corporate component
import FreelanceJobs from './pages/freelance/FreelanceJobs.jsx'; // Import FreelanceJobs component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
        <Route path="/join-us" element={<><Navbar /><JoinUs /><Footer /></>} />
        <Route path="/signup" element={<><Navbar /><SignUp /><Footer /></>} />
        <Route path="/insights" element={<><Navbar /><Insights /><Footer /></>} />
        <Route path="/careers" element={<><Navbar /><Careers /><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><ContactUs /><Footer /></>} />
        <Route path="/ai-trainings" element={<><Navbar /><AITrainings /><Footer /></>} />
        <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
        <Route path="/client/signup" element={<ClientSignUp />} />
        <Route path="/pricing" element={<><Navbar /><Pricing /><Footer /></>} /> {/* Added route for Pricing */}
        <Route path="/for-clients/whatweoffer" element={<><Navbar /><WhatWeOffer /><Footer /></>} /> {/* Added route for What We Offer */}
        <Route path="/for-clients/consulting" element={<><Navbar /><Consulting /><Footer /></>} /> {/* Added route for Consulting */}
        <Route path="/for-clients/corporate" element={<><Navbar /><Corporate /><Footer /></>} /> {/* Added route for Corporate */}
        <Route path="/freelance-jobs" element={<><Navbar /><FreelanceJobs /><Footer /></>} /> {/* Added route for Freelance Jobs */}
      </Routes>
    </Router>
  );
};

export default App; 