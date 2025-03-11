import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import JoinUs from './pages/home/components/JoinUs';
import Insights from './pages/about/Insights.jsx';
import Careers from './pages/home/components/Careers';
import ContactUs from './pages/home/components/ContactUs';
import AITrainings from './pages/home/components/AITrainings.jsx';

import SignUp from './pages/SignUp';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import ClientSignUp from './pages/Client/ClientSignUp';
import Pricing from './components/Pricing'; // Added import for Pricing component
import WhatWeOffer from './pages/ForClients/components/whatweoffer'; // Import WhatWeOffer component
import Consulting from './pages/ForClients/components/consulting'; // Import Consulting component
import Corporate from './pages/ForClients/components/corporate'; // Import Corporate component
import FreelanceJobs from './pages/freelance/FreelanceJobs.jsx'; // Import FreelanceJobs component
import Services from './pages/about/services.jsx'; // Import Services component
import CFHome from './consultingfirm/home/cfhome.jsx'; // Import CFHome component

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
        <Route path="/consultingfirm/home" element={<CFHome />} /> {/* Updated route for Consulting Firm Home */}
       
        <Route path="/client/signup" element={<ClientSignUp />} />
        <Route path="/pricing" element={<><Navbar /><Pricing /><Footer /></>} /> {/* Added route for Pricing */}
        <Route path="/for-clients/whatweoffer" element={<><Navbar /><WhatWeOffer /><Footer /></>} /> {/* Added route for What We Offer */}
        <Route path="/for-clients/consulting" element={<><Navbar /><Consulting /><Footer /></>} /> {/* Added route for Consulting */}
        <Route path="/for-clients/corporate" element={<><Navbar /><Corporate /><Footer /></>} /> {/* Added route for Corporate */}
        <Route path="/freelance-jobs" element={<><Navbar /><FreelanceJobs /><Footer /></>} /> {/* Added route for Freelance Jobs */}
        <Route path="/about/services" element={<><Navbar /><Services /><Footer /></>} /> {/* Added route for Services */}
        <Route path="/about/insights" element={<><Navbar /><Insights /><Footer /></>} /> {/* Added route for Insights in About */}
      </Routes>
    </Router>
  );
};

export default App; 