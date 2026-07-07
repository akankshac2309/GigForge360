import { Link } from "react-router-dom";

import {
    BriefcaseBusiness,
    Users,
    FileText,
    IndianRupee,
    CheckCircle,
    ArrowRight,
    ShieldCheck
} from "lucide-react";

function Home() {

    const features = [
        {
            title: "Salesforce Powered",
            description: "Built on Salesforce CRM with secure REST API integration.",
            icon: <ShieldCheck size={40} className="text-blue-600" />
        },
        {
            title: "End-to-End Workflow",
            description: "Manage gigs, contracts, payments and reviews from one platform.",
            icon: <CheckCircle size={40} className="text-green-600" />
        },
        {
            title: "Business Automation",
            description: "Ready for Salesforce Flows, Reports and Dashboards.",
            icon: <CheckCircle size={40} className="text-purple-600" />
        }
    ];

    return (

        <div className="bg-slate-50">

            {/* Hero */}

            <section className="bg-gradient-to-r from-[#3B2DB8] via-[#6B2FB8] to-[#C61B74] text-white">

                <div className="max-w-7xl mx-auto px-6 py-28 lg:py-36 text-center">

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">

                        Freelancing,
                        <br />
                        Powered by Salesforce.

                    </h1>

                    <p className="text-lg md:text-xl text-blue-100 mt-8 max-w-3xl mx-auto">

                        GigForge 360 helps clients and freelancers manage
                        gigs, applications, contracts, payments and reviews
                        using Salesforce CRM.

                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

                        <Link
                            to="/gigs"
                            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2"
                        >
                            Browse Gigs
                            <ArrowRight size={20}/>
                        </Link>

                        <Link
                            to="/client"
                            className="border-2 border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition"
                        >
                            Client Dashboard
                        </Link>

                    </div>

                </div>

            </section>

            {/* Statistics */}

            <section className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    <StatCard
                        icon={<BriefcaseBusiness size={42}/>}
                        title="Active Gigs"
                        value="150+"
                    />

                    <StatCard
                        icon={<Users size={42}/>}
                        title="Freelancers"
                        value="80+"
                    />

                    <StatCard
                        icon={<FileText size={42}/>}
                        title="Contracts"
                        value="60+"
                    />

                    <StatCard
                        icon={<IndianRupee size={42}/>}
                        title="Revenue"
                        value="₹5L+"
                    />

                </div>

            </section>

            {/* Features */}

            <section className="bg-white py-20">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center">

                        Why GigForge 360?

                    </h2>

                    <p className="text-gray-600 text-center mt-4 mb-16">

                        Everything you need to manage freelance work efficiently.

                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {

                            features.map((feature, index) => (

                                <div

                                    key={index}

                                    className="bg-slate-100 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl transition"

                                >

                                    {feature.icon}

                                    <h3 className="text-2xl font-bold mt-5">

                                        {feature.title}

                                    </h3>

                                    <p className="text-gray-600 mt-4">

                                        {feature.description}

                                    </p>

                                </div>

                            ))

                        }

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="bg-gradient-to-r from-[#312E81] via-[#6D28D9] to-[#C026D3] text-white py-20">

                <div className="max-w-5xl mx-auto text-center px-6">

                    <h2 className="text-4xl font-bold">

                        Ready to Manage Freelance Projects?

                    </h2>

                    <p className="text-blue-100 mt-6 text-lg">

                        Explore opportunities or manage your projects
                        seamlessly using GigForge 360.

                    </p>

                    <Link

                        to="/gigs"

                        className="inline-block mt-10 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100"

                    >

                        Explore Gigs

                    </Link>

                </div>

            </section>

        </div>

    );

}

function StatCard({ icon, title, value }) {

    return (

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">

            <div className="flex justify-center text-blue-600">

                {icon}

            </div>

            <h2 className="text-4xl font-bold mt-5">

                {value}

            </h2>

            <p className="text-gray-600 mt-3">

                {title}

            </p>

        </div>

    );

}

export default Home;