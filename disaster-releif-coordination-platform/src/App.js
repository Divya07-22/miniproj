import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Loginpage';
import Dashboard from './components/Dashboard';
import PostDisaster from './pages/PostDisaster';
import UpdateDisaster from './pages/UpdateDisaster';
import PostShelter from './pages/PostShelter';
import UpdateShelter from './pages/UpdateShelter';
import ViewSources from './pages/ViewSources';
import ViewEmergencySources from './pages/ViewEmergencySources';
import AddBankDetails from './pages/AddBankDetails';
import ManageBankDetails from './pages/ManageBankDetails';
import ViewVolunteers from './pages/ViewVolunteers';
import ViewVolunteerTasks from './pages/ViewVolunteerTasks';
import ViewUserDetails from './pages/ViewUserDetails';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/post-disaster" element={<PostDisaster />} />
                <Route path="/update-disaster" element={<UpdateDisaster />} />
                <Route path="/post-shelter" element={<PostShelter />} />
                <Route path="/update-shelter" element={<UpdateShelter />} />
                <Route path="/view-sources" element={<ViewSources />} />
                <Route path="/view-emergency-sources" element={<ViewEmergencySources />} />
                <Route path="/add-bank-details" element={<AddBankDetails />} />
                <Route path="/manage-bank-details" element={<ManageBankDetails />} />
                <Route path="/view-volunteers" element={<ViewVolunteers />} />
                <Route path="/view-volunteer-tasks" element={<ViewVolunteerTasks />} />
                <Route path="/view-user-details" element={<ViewUserDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components1/Login';
// import Dashboard from './components1/Dashboard';
// import ViewDisasters from './pages1/ViewDisasters';
// import ViewShelters from './pages1/ViewShelters';
// import PostSOS from './pages1/PostSOS';
// import ViewSOS from './pages1/ViewSOS';
// import PostIncident from './pages1/PostIncident';
// import ManageIncident from './pages1/ManageIncident';
// import PostResource from './pages1/PostResource';
// import ManageResource from './pages1/ManageResource';
// import ViewAllResources from './pages1/ViewAllResources';
// import ViewDonationFund from './pages1/ViewDonationFund';
// import EmergencyContact from './pages1/EmergencyContact';
// import MyProfile from './pages1/MyProfile';

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Login />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/view-disasters" element={<ViewDisasters />} />
//                 <Route path="/view-shelters" element={<ViewShelters />} />
//                 <Route path="/post-sos" element={<PostSOS />} />
//                 <Route path="/view-sos" element={<ViewSOS />} />
//                 <Route path="/post-incident" element={<PostIncident />} />
//                 <Route path="/manage-incident" element={<ManageIncident />} />
//                 <Route path="/post-resource" element={<PostResource />} />
//                 <Route path="/manage-resource" element={<ManageResource />} />
//                 <Route path="/view-all-resources" element={<ViewAllResources />} />
//                 <Route path="/view-donation-fund" element={<ViewDonationFund />} />
//                 <Route path="/emergency-contact" element={<EmergencyContact />} />
//                 <Route path="/my-profile" element={<MyProfile />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;
