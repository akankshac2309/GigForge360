import { Link } from "react-router-dom";

function QuickActions() {

    return (

        <div className="bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-6">

                Quick Actions

            </h2>

            <div className="grid grid-cols-2 gap-4">

                <Link

                    to="/gigs"

                    className="bg-blue-600 text-white p-4 rounded-xl text-center hover:bg-blue-700"

                >

                    Browse Gigs

                </Link>

                <Link

                    to="/contracts"

                    className="bg-green-600 text-white p-4 rounded-xl text-center hover:bg-green-700"

                >

                    Contracts

                </Link>

                <Link

                    to="/payments"

                    className="bg-orange-600 text-white p-4 rounded-xl text-center hover:bg-orange-700"

                >

                    Payments

                </Link>

                <Link

                    to="/reviews"

                    className="bg-purple-600 text-white p-4 rounded-xl text-center hover:bg-purple-700"

                >

                    Reviews

                </Link>

            </div>

        </div>

    );

}

export default QuickActions;