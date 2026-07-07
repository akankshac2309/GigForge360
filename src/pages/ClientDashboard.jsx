import { useEffect, useState } from "react";

import api from "../services/api";

import StatusChart from "../components/charts/StatusChart";
import BudgetChart from "../components/charts/BudgetChart";

import NewGigForm from "../components/gig/NewGigForm";
import GigTable from "../components/dashboard/GigTable";

import StatsCards from "../components/dashboard/StatsCards";
import DashboardHero from "../components/dashboard/DashboardHero";
import QuickActions from "../components/dashboard/QuickActions";

function ClientDashboard() {

    const [gigs, setGigs] = useState([]);
    const [contracts, setContracts] = useState([]);
    const [payments, setPayments] = useState([]);
    const [reviews, setReviews] = useState([]);

    const [loading, setLoading] = useState(true);

    const loadDashboard = async () => {

        try {

            const [

                gigsRes,
                contractsRes,
                paymentsRes,
                reviewsRes

            ] = await Promise.all([

                api.get("/gigs"),
                api.get("/contracts"),
                api.get("/payments"),
                api.get("/reviews")

            ]);

            setGigs(gigsRes.data);
            setContracts(contractsRes.data);
            setPayments(paymentsRes.data);
            setReviews(reviewsRes.data);

        }

        catch (err) {

            console.error(err);

        }

        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadDashboard();

    }, []);

    if (loading) {

        return (

            <div className="flex justify-center items-center min-h-screen text-2xl font-semibold">

                Loading Dashboard...

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-slate-100 p-8">

            <DashboardHero />

            <StatsCards

                gigs={gigs}

                contracts={contracts}

                payments={payments}

                reviews={reviews}

            />

            <div className="grid lg:grid-cols-2 gap-6 mb-8">

                <StatusChart gigs={gigs} />

                <BudgetChart gigs={gigs} />

            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-8">

                <QuickActions />

                <NewGigForm />

            </div>

            <GigTable />

        </div>

    );

}

export default ClientDashboard;