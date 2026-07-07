import { Link } from "react-router-dom";
import { BriefcaseBusiness } from "lucide-react";

function Footer() {

    return (

        <footer className="bg-slate-900 text-white mt-20">

            <div className="max-w-7xl mx-auto px-8 py-14">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* Brand */}

                    <div>

                        <div className="flex items-center gap-3 mb-5">

                            <BriefcaseBusiness
                                size={34}
                                className="text-blue-400"
                            />

                            <h2 className="text-3xl font-bold">

                                GigForge 360

                            </h2>

                        </div>

                        <p className="text-slate-300 leading-7">

                            A Salesforce-powered freelance marketplace
                            that streamlines gig management,
                            contracts, payments and reviews
                            using React, Express and Salesforce CRM.

                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-xl font-semibold mb-5">

                            Quick Links

                        </h3>

                        <div className="flex flex-col gap-3">

                            <Link to="/" className="hover:text-blue-400">

                                Home

                            </Link>

                            <Link to="/gigs" className="hover:text-blue-400">

                                Browse Gigs

                            </Link>

                            <Link to="/client" className="hover:text-blue-400">

                                Client Dashboard

                            </Link>

                            <Link to="/freelancer" className="hover:text-blue-400">

                                Freelancer Dashboard

                            </Link>

                        </div>

                    </div>

                    {/* Tech Stack */}

                    <div>

                        <h3 className="text-xl font-semibold mb-5">

                            Built With

                        </h3>

                        <div className="space-y-3 text-slate-300">

                            <p>⚛ React + Vite</p>

                            <p>🚀 Express.js</p>

                            <p>☁ Salesforce REST API</p>

                            <p>🎨 Tailwind CSS</p>

                            <p>📊 Recharts</p>

                        </div>

                    </div>

                </div>

                <div className="border-t border-slate-700 mt-12 pt-8 text-center">

                    <p className="text-slate-400">

                        © {new Date().getFullYear()} GigForge 360

                    </p>

                    <p className="text-slate-500 mt-2">

                        Built using React, Express & Salesforce CRM

                    </p>

                </div>

            </div>

        </footer>

    );

}

export default Footer;