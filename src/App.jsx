import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import BrowseGigs from "./pages/BrowseGigs";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import ClientDashboard from "./pages/ClientDashboard";
import Contracts from "./pages/Contracts";
import Payments from "./pages/Payments";
import Reviews from "./pages/Reviews";
import GigDetails from "./pages/GigDetails";
import MyApplications from "./pages/MyApplications";
import NotFound from "./pages/NotFound";

function App() {

    return (

        <BrowserRouter>

            <Toaster
                position="top-right"
                reverseOrder={false}
            />

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/gigs"
                    element={<BrowseGigs />}
                />

                <Route
                    path="/gig-details"
                    element={<GigDetails />}
                />

                <Route
                    path="/freelancer"
                    element={<FreelancerDashboard />}
                />

                <Route
                    path="/my-applications"
                    element={<MyApplications />}
                />

                <Route
                    path="/client"
                    element={<ClientDashboard />}
                />

                <Route
                    path="/contracts"
                    element={<Contracts />}
                />

                <Route
                    path="/payments"
                    element={<Payments />}
                />

                <Route
                    path="/reviews"
                    element={<Reviews />}
                />

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

            <Footer />

        </BrowserRouter>

    );

}

export default App;