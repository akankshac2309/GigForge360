import {
    BriefcaseBusiness,
    FileText,
    IndianRupee,
    Star
} from "lucide-react";

function StatsCards({

    gigs,
    contracts,
    payments,
    reviews = []

}) {

    const revenue = payments.reduce(

        (sum, payment) =>

            sum + (payment.Payment_Amount__c || 0),

        0

    );

    return (

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

            <StatCard

                icon={<BriefcaseBusiness size={34}/>}

                title="Total Gigs"

                value={gigs.length}

                color="blue"

            />

            <StatCard

                icon={<FileText size={34}/>}

                title="Contracts"

                value={contracts.length}

                color="green"

            />

            <StatCard

                icon={<IndianRupee size={34}/>}

                title="Revenue"

                value={`₹${revenue.toLocaleString()}`}

                color="orange"

            />

            <StatCard

                icon={<Star size={34}/>}

                title="Reviews"

                value={reviews.length}

                color="purple"

            />

        </div>

    );

}

function StatCard({

    icon,
    title,
    value,
    color

}) {

    const colors = {

        blue: "bg-blue-50 text-blue-600",

        green: "bg-green-50 text-green-600",

        orange: "bg-orange-50 text-orange-600",

        purple: "bg-purple-50 text-purple-600"

    };

    return (

        <div className="bg-white rounded-2xl shadow-lg p-7 hover:shadow-xl transition">

            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${colors[color]}`}>

                {icon}

            </div>

            <p className="text-gray-500 mt-5">

                {title}

            </p>

            <h2 className="text-4xl font-bold mt-2">

                {value}

            </h2>

        </div>

    );

}

export default StatsCards;