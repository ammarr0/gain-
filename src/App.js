import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import Invites from './consultingfirm/Tracker/invites.jsx';
import Applications from './consultingfirm/Tracker/applications.jsx';
import Offers from './consultingfirm/Tracker/joboffers.jsx';
import Project from './consultingfirm/Tracker/projectoffers.jsx';
import Invoices from './consultingfirm/Tracker/invoice.jsx';
import MyJobs from './consultingfirm/Tracker/myjobs.jsx';
import Community from './consultingfirm/community/community.jsx';
import ExploreCourse from './consultingfirm/explorecourse/explorecourse.jsx';
import Main from "./consultingfirm/explorecourse/main.jsx";
import Video from "./consultingfirm/explorecourse/video.jsx";
import ClientProfile from "./profile/client.jsx";
import ClientDetails from "./profile/talent.jsx";
import NewMatches from './consultingfirm/home/components/newmatches.jsx';
import JobDetails from './consultingfirm/home/components/JobDetails.jsx';
import Firm from './profile/firm.jsx';
import CompletedJobs from './profile/completejob.jsx';
import UP from './up.jsx';
import ExploreTalentsSection from './consultingfirm/exploretalent/exporetalent.jsx';
import ClientDashboard from "./Client/Pages/Dashboard.jsx";
import ClientJobs from "./Client/Pages/myjobs.jsx";
import JobsDetails from "./Client/Pages/jobsdetails.jsx";
import ProjectDetails from "./Client/Pages/projects-details.jsx";
import JobsApplication from "./Client/Pages/Jobapplication.jsx";
import ClientHeader from "./Client/Components/header.jsx";
import ClientSidebar from "./Client/Components/sidebar.jsx";
import ClientProjects from "./Client/Pages/projects.jsx";
import ClientExploreTalents from "./Client/Pages/ExploreTalent.jsx";
import ClientExploreCourse from "./Client/Pages/Course.jsx";
import PostJobs from "./Client/Pages/post-jobs.jsx";
import PostProject from "./Client/Pages/post-projects.jsx";
// Remove duplicate import of PostSuccess
import MainCourse from "./Client/Pages/main-course.jsx";
import PostCourse from "./Client/Pages/new-course.jsx";
import ClientsProfile from "./Client/Pages/profile.jsx";
import Invoice from "./Client/Pages/invoice.jsx";
import MakeInvoices from "./Client/Pages/makeinvoice.jsx";
import TalentSidebar from "./Talent/Components/siedbar.jsx";
import TalentDashboard from "./Talent/Pages/Home.jsx";
import TalentJobs from "./Talent/Pages/Jobs.jsx";
import TalentProject from "./Talent/Pages/projects.jsx";
import TalentExploreCourse from "./Talent/Pages/explore-courses.jsx";
import TalentPostCourse from "./Talent/Pages/post-new-course.jsx";
import TalentProfile from "./Talent/Pages/Profile.jsx";
import TalentTracker from "./Talent/Pages/Tracker/invites.jsx";
import TrackerApplications from "./Talent/Pages/Tracker/applications.jsx";
import TrackerOffers from "./Talent/Pages/Tracker/joboffers.jsx";
import TrackerProject from "./Talent/Pages/Tracker/projectoffers.jsx";
import ConsultingFirmSidebar from "./consultingfirm/components/cfsidebar.jsx"
import ClientMain from "./Talent/Pages/main-course.jsx"
import CFHeader from "./consultingfirm/components/cfnavbar.jsx";
import TalentHeader from "./Talent/Components/header.jsx";
import PostSuccess from "./Client/Pages/success.jsx";
import CFJobsDetails from "./consultingfirm/jobs/jobdetails.jsx";
import TalentMakeInvoices from "./Talent/Pages/invoice.jsx" 
import EditProfile from "./Client/Pages/editprofile.jsx"

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
        <Route path="/under-processing" element={<><Navbar /><UP /><Footer /></>} />
        <Route path="video" element={<Video />} />
     
        
        <Route path="/consultingfirm/*" element={
          <>
            <CFHeader />
            <div style={{ display: 'flex' }}>
              <ConsultingFirmSidebar />
              <Routes>
                <Route path="home" element={<CFHome />} />
                <Route path="jobs" element={<Jobs />} />
                <Route path="jobs/:id" element={<CFJobsDetails />} />
                <Route path="projects" element={<Projects />} />
                <Route path="tracker" element={<Invites />} />
                <Route path="applications" element={<Applications />} />
                <Route path="joboffers" element={<Offers />} />
                <Route path="projectsoffers" element={<Project />} />
                <Route path="myjobs" element={<MyJobs />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="community" element={<Community />} />
                <Route path="explore-course" element={<ExploreCourse />} />
                <Route path="main-course" element={<Main />} />
                <Route path="explore-talent" element={<ExploreTalentsSection />} />
                <Route path="profile" element={<><TalentProfile /></>} />
                <Route path="post-success" element={<><PostSuccess /></>} />
              </Routes>
            </div>
          </>
        } />

        <Route path="/client/*" element={
          <>
            <ClientHeader />
            <div style={{ display: 'flex' }}>
              <ClientSidebar />
              <Routes>
                <Route path="dashboard" element={<ClientDashboard />} />
                <Route path="jobs" element={<ClientJobs />} />
                <Route path="jobs/:id" element={<JobsDetails />} />
                <Route path="my-projects" element={<ClientProjects />} />
                <Route path="projects/:id" element={<ProjectDetails />} />
                <Route path="explore-talent" element={<><ClientExploreTalents /></>} />
                <Route path="explore-course" element={<><ClientExploreCourse /></>} />
                <Route path="main-course/:id" element={<ClientMain />} />
                <Route path="job-application" element={<JobsApplication />} />
                <Route path="post-job" element={<PostJobs />} />
                <Route path="post-projects" element={<PostProject />} />
                <Route path="post-course" element={<PostCourse />} />
                <Route path="profile" element={<><TalentProfile /></>} />
                <Route path="my-invoices" element={<><Invoice /></>} />
                <Route path="make-invoices" element={<><MakeInvoices /></>} />
                <Route path="post-success" element={<><PostSuccess /></>} />
              </Routes>
            </div>
          </>
        } />

        <Route path="/talent/*" element={
          <>
            <TalentHeader />
            <div style={{ display: 'flex' }}>
           <TalentSidebar /> 
              <Routes>
                <Route path="home" element={<TalentDashboard />} />
                <Route path="jobs" element={<TalentJobs />} />
                <Route path="jobs/:id" element={<JobsDetails />} />
                <Route path="projects" element={<TalentProject />} />
                <Route path="projects/:id" element={<ProjectDetails />} />
                <Route path="explore-course" element={<TalentExploreCourse />} />
                <Route path="job-application" element={<JobsApplication />} />
                <Route path="post-job" element={<PostJobs />} />
                <Route path="post-course" element={<TalentPostCourse />} />
                <Route path="post-success" element={<PostSuccess />} />
                <Route path="main-course" element={<MainCourse />} />
                <Route path="profile" element={<ClientsProfile />} />
                <Route path="applications" element={<TrackerApplications />} />
                <Route path="joboffers" element={<TrackerOffers />} />
                <Route path="projectsoffers" element={<TrackerProject />} />
                <Route path="editprofile" element={<EditProfile />} />
                <Route path="profile" element={<><TalentProfile /></>} />
                <Route path="my-invoices" element={<><Invoice /></>} />
                <Route path="make-invoices" element={<><TalentMakeInvoices /></>} />
                <Route path="community" element={<Community />} />
                <Route path="post-success" element={<><PostSuccess /></>} />
              </Routes>
            </div>
          </>
        } />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;