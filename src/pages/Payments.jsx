import { useEffect, useState } from "react";
import api from "../services/api";

import PaymentCard from "../components/payments/PaymentCard";
import CreatePaymentModal from "../components/payments/CreatePaymentModal";

function Payments() {

    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(true);

    const [showCreateModal, setShowCreateModal] = useState(false);

    const fetchPayments = async () => {

        try {

            const response = await api.get("/payments");

            setPayments(response.data);

        }

        catch (err) {

            console.error(err);

        }

        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchPayments();

    }, []);

    if (loading) {

        return (

            <div className="text-center mt-20 text-2xl">

                Loading Payments...

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-slate-100 p-10">

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-4xl font-bold">

                    Payments

                </h1>

                <button

                    onClick={() => setShowCreateModal(true)}

                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"

                >

                    + Create Payment

                </button>

            </div>

            {

                payments.length === 0 && (

                    <div className="bg-white rounded-xl shadow-md p-10 text-center">

                        No payments found.

                    </div>

                )

            }

            <div className="grid md:grid-cols-2 gap-6">

                {

                    payments.map(payment => (

                        <PaymentCard

                            key={payment.Id}

                            payment={payment}

                            fetchPayments={fetchPayments}

                        />

                    ))

                }

            </div>

            <CreatePaymentModal

                isOpen={showCreateModal}

                onClose={() => setShowCreateModal(false)}

                onSuccess={fetchPayments}

            />

        </div>

    );

}

export default Payments;