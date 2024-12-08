import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';
import MiddleBody from './MiddleBody';
import Registration from './Registration';
import Login from './Login';
import Dashboard from './Dashboard';
// import AdminDashboard from './AdminDashboard';
import Gallery from './Gallery';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import WeddingSection from './WeddingSection';
import WeddingDetails from './WeddingDetails';
import BirthdaySection from './BirthdaySection';
import BirthdayDetails from './BirthdayDetails';
import VegSection from './VegSection';
import VegDetails from './VegDetails';
import NonvegSection from './NonvegSection';
import NonvegDetails from './NonvegDetails';
import PhotoSection from './PhotoSection';
import PhotographerList from './PhotographerList';
//import SweetSection from './SweetSection';
//------------------------------

// import EngagementAndCompanyList from './components/EngagementAndCompanyList';
// import DetailsPage from './components/DetailsPage';
// import DetailsPageTwo from './components/DetailsPageTwo';
// import DetailsPageThree from './components/DetailsPageThree';
// import DetailsPageFour from './components/DetailsPageFour';
// import DetailsPageFive from './components/DetailsPageFive';
// import DetailsPageSix from './components/DetailsPageSix';
// import EngagementAndCompanyList from './EngagementAndCompanyList';
import DetailsPage from './DetailsPage';
import DetailsPageTwo from './DetailsPageTwo';
import DetailsPageThree from './DetailsPageThree';
import DetailsPageFour from './DetailsPageFour';
import DetailsPageFive from './DetailsPageFive';
import DetailsPageSix from './DetailsPageSix';
//import EngagementRouter from './EngagementRouter';
import EngagementAndCompanyList from './EngagementAndCompanyList';
import AdminPanel from './AdminPanel.js';
import DashBoardAdmin from './DashboardAdmin.jsx';
import AddPhotographer from './AddPhotographer.jsx'

const AppRouter = () => {
  return (
    <Router>
      {/*  render the Navbar at the top */}

      <AppNavbar />

      <div className="main-content">
        {/* Define the Routes for different pages */}
        <Routes>
          <Route path="/" element={<MiddleBody />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/admindashboard" element={<AdminDashboard />} /> */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/weddingsection" element={<WeddingSection />} />
          <Route path="/weddingdetails" element={<WeddingDetails />} />
          <Route path="/birthdaysection" element={<BirthdaySection />} />
          <Route path="/birthdaydetails" element={<BirthdayDetails />} />
          <Route path="/vegsection" element={<VegSection />} />
          <Route path="/vegdetails" element={<VegDetails />} />
          <Route path="/nonvegsection" element={<NonvegSection />} />
          <Route path="/nonvegdetails" element={<NonvegDetails />} />
          <Route path="/photosection" element={<PhotoSection />} />
          {/* <Route path="/weddingdetails" element={<WeddingDetails />} /> */}
          {/* <Route path="/sweetsection" element={<SweetSection />} /> */}

          <Route path="/details/1" element={<DetailsPage />} />
          <Route path="/details/2" element={<DetailsPageTwo />} /> 
          <Route path="/details/3" element={<DetailsPageThree />} />
          <Route path="/details/4" element={<DetailsPageFour/>} />
          <Route path="/details/5" element={<DetailsPageFive />} />
          <Route path="/details/6" element={<DetailsPageSix />} />
          <Route path="/engagement" element={< EngagementAndCompanyList/>} />
          <Route path="/adminpanel" element={<AdminPanel/>} /> 
          <Route path="/dashboardAdmin"  element={<DashBoardAdmin/>}/>
          <Route path="/addphotographer" element={<AddPhotographer/>}/>
          <Route path="/photographerlist" element={<PhotographerList/>}/>
{/* ------------------------------ */}
        </Routes>
      </div>

      {/*  render the Footer at the bottom */}
      <AppFooter />
    </Router>
  );
};

export default AppRouter;
