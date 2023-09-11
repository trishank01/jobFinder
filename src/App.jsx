import "./App.css";
import Footer from "./compenets/Footer";
import Navbar from "./compenets/Navbar";
import {
  Outlet,
  Navigate,
  Route,
  Routes,
  useLocation,
  Router,
} from "react-router-dom";
import UserProfile from "./pages/UserProfile";

import About from "./pages/About.jsx";
import Auth from "./pages/Auth";

import CompanyProfile from "./pages/CompanyProfile";
import FindJobs from "./pages/FindJobs";
import Companies from "./pages/Companies";
import UploadJob from "./pages/UploadJob";

function Layout() {
  const user = false;
  const location = useLocation();
  console.log(location)
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/user-auth" state={{ from: location }} replace />
  );
}

function App() {
  const user = {};

  return (
    <>
      <main>
        <Navbar />
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={<Navigate to="/find-jobs" replace={true} />}
            />
            <Route
              path="/find-jobs"
              element={<FindJobs />} 
            />
            <Route
              path="/companies"
              element={<Companies />} 
            />
            <Route
              path={
                user?.user?.accountType === "seeker"
                  ? "/user-profile"
                  : "/user-profile/:id"
              }
              element={<UserProfile />}
            />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/company-profile/:id" element={<CompanyProfile />} />
            <Route path="/upload-job/" element={<UploadJob />} />
            <Route path="/upload-job/:id" element={<UploadJob />} />
          </Route>
          
          <Route path="/about-us" element={<About />} />
          <Route path="/user-auth" element={<Auth />} />
        </Routes>

        {user && <Footer />}
      </main>
    </>
  );
}

export default App;
