import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Home from './PostSignup/home/Home.jsx';
import JoinUs from './PostSignup/JoinUs.jsx';
import Insights from './PostSignup/about/Insights.jsx';
import Careers from './PostSignup/Careers.jsx';
import ContactUs from './PostSignup/ContactUs.jsx';
import AITrainings from './PostSignup/AITrainings.jsx';
import SignUp from './PostSignup/SignUp.jsx';
import ClientSignUp from './SNL/Client/ClientSignUp.jsx';
import Pricing from './components/Pricing.jsx';
import WhatWeOffer from './PostSignup/ForClients/components/whatweoffer.jsx';
import Consulting from './PostSignup/ForClients/components/consulting.jsx';
import Corporate from './PostSignup/ForClients/components/corporate.jsx';
import FreelanceJobs from './PostSignup/FreelanceJobs.jsx';
import Services from './PostSignup/about/services.jsx';
import CFHome from './consultingfirm/home/cfhome.jsx';
import Apply from './consultingfirm/home/components/Apply.jsx';
import Jobs from './consultingfirm/jobs/jobs.jsx';
import Projects from './consultingfirm/project/project.jsx';
import Explore from './consultingfirm/explorecourse/explorecourse.jsx';
import Invites from './consultingfirm/Tracker/invites.jsx';
import Applications from './consultingfirm/Tracker/applications.jsx';
import Offers from './consultingfirm/Tracker/joboffers.jsx';
import Project from './consultingfirm/Tracker/projectoffers.jsx';
import Invoices from './consultingfirm/Tracker/invoice.jsx';
import MyJobs from './consultingfirm/Tracker/myjobs.jsx';
import Community from './consultingfirm/community/community.jsx';
import ExploreCourse  from './consultingfirm/explorecourse/explorecourse.jsx';
import Main from "./consultingfirm/explorecourse/main.jsx";
import Video from "./consultingfirm/explorecourse/video.jsx";

import NewMatches from './consultingfirm/home/components/newmatches.jsx';
import JobDetails from './consultingfirm/home/components/JobDetails.jsx';

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
        <Route path="/consultingfirm/home" element={<CFHome />} />
        <Route path="/client/signup" element={<ClientSignUp />} />
        <Route path="/pricing" element={<><Navbar /><Pricing /><Footer /></>} />
        <Route path="/for-clients/whatweoffer" element={<><Navbar /><WhatWeOffer /><Footer /></>} />
        <Route path="/for-clients/consulting" element={<><Navbar /><Consulting /><Footer /></>} />
        <Route path="/for-clients/corporate" element={<><Navbar /><Corporate /><Footer /></>} />
        <Route path="/freelance-jobs" element={<><Navbar /><FreelanceJobs /><Footer /></>} />
        <Route path="/about/services" element={<><Navbar /><Services /><Footer /></>} />
        <Route path="/about/insights" element={<><Navbar /><Insights /><Footer /></>} />
        <Route path="/new-matches" element={<><Navbar /><NewMatches /><Footer /></>} />
        <Route path="/job/:company" element={<><Navbar /><JobDetails /><Footer /></>} />
        <Route path="/apply" element={<><Navbar /><Apply /><Footer /></>} />
        <Route path="/consultingfirm/jobs" element={<><Navbar /><Jobs /><Footer /></>} />
        <Route path="/consultingfirm/projects" element={<><Navbar /><Projects /><Footer /></>} />
        <Route path="/consultingfirm/tracker" element={<><Navbar /><Invites /><Footer /></>} />
        <Route path="/consultingfirm/applications" element={<><Navbar /><Applications /><Footer /></>} />
        <Route path="/consultingfirm/joboffers" element={<><Navbar /><Offers /><Footer /></>} />
        <Route path="/consultingfirm/projectsoffers" element={<><Navbar /><Project /><Footer /></>} />
        <Route path="/consultingfirm/myjobs" element={<><Navbar /><MyJobs /><Footer /></>} />
        <Route path="/consultingfirm/invoices" element={<><Navbar /><Invoices /><Footer /></>} />
        <Route path="/consultingfirm/community" element={<><Navbar /><Community /><Footer /></>} />
        <Route path="/consultingfirm/explore-course" element={<><Navbar /><ExploreCourse /><Footer /></>} />
        <Route path="consultingfirm/main-course" element={<><Navbar /><Main /><Footer /></>} />
        <Route path="consultingfirm/video" element={<><Navbar /><Video /><Footer /></>} />

        
        
      </Routes>
    </Router>
  );
};

export default App;