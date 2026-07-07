import { BriefcaseBusiness } from "lucide-react";

function DashboardHero() {

    return (

        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-10 text-white shadow-xl mb-8">

            <div className="flex justify-between items-center">

                <div>

                    <h1 className="text-5xl font-bold">

                        Welcome back 👋

                    </h1>

                    <p className="mt-4 text-lg text-blue-100">

                        Manage gigs, contracts, payments and reviews
                        from one centralized dashboard.

                    </p>

                </div>

                <BriefcaseBusiness

                    size={90}

                    className="opacity-80"

                />

            </div>

        </div>

    );

}

export default DashboardHero;