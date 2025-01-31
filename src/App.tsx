// Import necessary components from React and React Router
import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
  useLocation
} from "react-router-dom";

import { Buffer } from "buffer";
import ContentList from "./components/ContentList";
import ErrorBoundary from "./components/ErrorBoundary";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Signup from "./components/Signup";
import UserList from "./components/UserList";
import MiniNavbarMenu from "./MiniNavbarMenu";
import NavbarMenu from "./NavbarMenu";
import About from "./website/About";
import AllMembers from "./website/AllMembers";
import ComingSoon from "./website/ComingSoon";
import ContactUs from "./website/ContactUs";

import { Container } from "react-bootstrap";
import Features from "./website/Features";
import Footer from "./website/Footer";
import LandingPage from "./website/LandingPage";
import MiniFooter from "./website/MiniFooter";
import Percival from "./website/Percival";
import Pricing from "./website/Pricing";


window.Buffer = Buffer;

// 1️⃣ Changed from App to Root
function Groot() {

  const isSiteVisible = true; // document.location.search.indexOf('magic') > -1;

  return (
    <ErrorBoundary>
      <Routes>

        {/*<Route element={<Layout />}>*/}

        <Route element={<Layout />}>
          {/*  <Route path="/live-streams" element={<LiveStreams />} /> */}

          {!isSiteVisible && (
            <Route path="*" element={<ComingSoon />} />
          )}

          {isSiteVisible && (
            <>
              <Route path="/" element={<LandingPage />} />
              <Route path="/features" element={<Features />} />
              <Route path="/subscribers" element={<AllMembers />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/login" element={<Login />} />


              <Route path="/userlist" element={<UserList />} />
              <Route path="/contentlist" element={<ContentList callback={function (): void {
                throw new Error("Function not implemented.");
              }} />} />

              <Route path="/percival" element={<Percival />} />


              <Route path="/pricing" element={<Pricing />} />
            </>
          )}

          <Route path='*' element={<NotFound />} />

        </Route>
      </Routes>
    </ErrorBoundary>
  );

}

function Layout() {
  const isDashboard = ( // any dashboard view needs to be listed here
    useLocation().pathname.indexOf('percival') > -1 ||
    useLocation().pathname.indexOf('six-d-dashboard') > -1);

  return (
    <>
      {!isDashboard && (
        <>
        <NavbarMenu />
          <Container data-bs-theme="light" className="App p-3">
            
            <Outlet />
          </Container>
          <Footer />
        </>
      )
      }


      {isDashboard && (
        <>
        <MiniNavbarMenu />
          <div data-bs-theme="dark" > {/*style={{transform:"scale(.8, .8)", minWidth:"120%", marginLeft:"-10em", minHeight:"1200px"}}*/}
            <Outlet />
          </div>
          <MiniFooter />
        </>
      )}
    </>

  );
}

// 3️⃣ Router singleton created
const rx = createBrowserRouter([{ path: "*", element: <Groot /> }]);

// 4️⃣ RouterProvider added
export default function App() {
  return <RouterProvider router={rx} />;
}
