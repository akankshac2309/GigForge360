import { useLocation } from "react-router-dom";
import { MapPin, BriefcaseBusiness, DollarSign, Users } from "lucide-react";

function GigDetails() {

    const { state } = useLocation();

    const gig = state?.gig;

    if (!gig) {

        return (

            <div className="min-h-screen flex justify-center items-center text-2xl">

                No Gig Selected

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-slate-100 py-12">

            <div className="max-w-5xl mx-auto">

                {/* Hero */}

                <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl p-10 text-white shadow-xl">

                    <h1 className="text-5xl font-bold">

                        {gig.Title__c}

                    </h1>

                    <p className="mt-4 text-blue-100">

                        Salesforce Freelance Opportunity

                    </p>

                </div>

                {/* Details */}

                <div className="grid md:grid-cols-2 gap-8 mt-10">

                    <div className="bg-white rounded-xl shadow-lg p-8">

                        <h2 className="text-2xl font-bold mb-6">

                            Gig Information

                        </h2>

                        <div className="space-y-5">

                            <div className="flex items-center gap-3">

                                <DollarSign className="text-green-600"/>

                                <span>

                                    Budget: ₹{gig.Budget__c}

                                </span>

                            </div>

                            <div className="flex items-center gap-3">

                                <BriefcaseBusiness className="text-blue-600"/>

                                <span>

                                    {gig.Experience_Level__c}

                                </span>

                            </div>

                            <div className="flex items-center gap-3">

                                <Users className="text-purple-600"/>

                                <span>

                                    {gig.Number_of_Openings__c} Openings

                                </span>

                            </div>

                            <div className="flex items-center gap-3">

                                <MapPin className="text-red-500"/>

                                <span>

                                    {gig.Remote__c ? "Remote" : "On-site"}

                                </span>

                            </div>

                        </div>

                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8">

                        <h2 className="text-2xl font-bold mb-6">

                            Job Description

                        </h2>

                        <p className="text-gray-600 leading-8">

                            We are looking for an experienced freelancer to
                            deliver this project with high quality standards.
                            The selected candidate will collaborate closely
                            with the client and ensure timely delivery.

                        </p>

                    </div>

                </div>

                {/* Skills */}

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

                    <h2 className="text-2xl font-bold mb-5">

                        Required Skills

                    </h2>

                    <div className="flex flex-wrap gap-3">

                        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">

                            Salesforce

                        </span>

                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">

                            Apex

                        </span>

                        <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">

                            Flow Builder

                        </span>

                        <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full">

                            REST API

                        </span>

                        <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full">

                            Lightning

                        </span>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default GigDetails;