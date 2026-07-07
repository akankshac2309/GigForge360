import {
    Briefcase,
    FolderOpen,
    FileText,
    IndianRupee
} from "lucide-react";

function StatsCards({ gigs, contracts, payments }) {

    const totalRevenue = payments.reduce(

        (sum, payment) =>

            sum + (payment.Payment_Amount__c || 0),

        0

    );

    const openGigs = gigs.filter(

        gig => gig.Status__c === "Open"

    ).length;

    return (

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

            <div className="bg-white rounded-xl shadow-lg p-6">

                <Briefcase
                    className="text-blue-600 mb-3"
                    size={35}
                />

                <h2 className="text-gray-500">

                    Total Gigs

                </h2>

                <h1 className="text-4xl font-bold">

                    {gigs.length}

                </h1>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">

                <FolderOpen
                    className="text-green-600 mb-3"
                    size={35}
                />

                <h2 className="text-gray-500">

                    Open Gigs

                </h2>

                <h1 className="text-4xl font-bold">

                    {openGigs}

                </h1>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">

                <FileText
                    className="text-purple-600 mb-3"
                    size={35}
                />

                <h2 className="text-gray-500">

                    Contracts

                </h2>

                <h1 className="text-4xl font-bold">

                    {contracts.length}

                </h1>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">

                <IndianRupee
                    className="text-orange-500 mb-3"
                    size={35}
                />

                <h2 className="text-gray-500">

                    Revenue

                </h2>

                <h1 className="text-4xl font-bold">

                    ₹{totalRevenue.toLocaleString()}

                </h1>

            </div>

        </div>

    );

}

export default StatsCards;