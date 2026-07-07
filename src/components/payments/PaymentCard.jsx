import { useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

import StatusBadge from "../common/StatusBadge";
import EditPaymentModal from "./EditPaymentModal";

function PaymentCard({

    payment,
    fetchPayments

}) {

    const [showEditModal, setShowEditModal] = useState(false);

    const markCompleted = async () => {

        try {

            await api.put(`/payments/${payment.Id}`, {

                amount: payment.Payment_Amount__c,

                paymentDate: payment.Payment_Date__c,

                paymentMethod: payment.Payment_Method__c,

                status: "Completed",

                transactionId: payment.Transaction__c

            });

            toast.success("Payment Completed");

            fetchPayments();

        }

        catch (err) {

            console.error(err);

            toast.error("Failed to update payment");

        }

    };

    const deletePayment = async () => {

        try {

            await api.delete(`/payments/${payment.Id}`);

            toast.success("Payment Deleted");

            fetchPayments();

        }

        catch (err) {

            console.error(err);

            toast.error("Delete Failed");

        }

    };

    return (

        <>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">

                <h2 className="text-2xl font-bold mb-5">

                    {payment.Name}

                </h2>

                <div className="space-y-3">

                    <p>

                        <strong>Contract:</strong>{" "}

                        {payment.Contract__r?.Name || "N/A"}

                    </p>

                    <p>

                        <strong>Amount:</strong>{" "}

                        ₹{payment.Payment_Amount__c?.toLocaleString()}

                    </p>

                    <p>

                        <strong>Date:</strong>{" "}

                        {payment.Payment_Date__c}

                    </p>

                    <p>

                        <strong>Method:</strong>{" "}

                        {payment.Payment_Method__c}

                    </p>

                    <p>

                        <strong>Status:</strong>{" "}

                        <StatusBadge

                            status={payment.Payment_Status__c}

                        />

                    </p>

                </div>

                <div className="flex flex-wrap gap-3 mt-8">

                    <button

                        onClick={() => setShowEditModal(true)}

                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"

                    >

                        Edit

                    </button>

                    <button

                        onClick={markCompleted}

                        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"

                    >

                        Complete

                    </button>

                    <button

                        onClick={deletePayment}

                        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"

                    >

                        Delete

                    </button>

                </div>

            </div>

            <EditPaymentModal

                isOpen={showEditModal}

                onClose={() => setShowEditModal(false)}

                payment={payment}

                onSuccess={fetchPayments}

            />

        </>

    );

}

export default PaymentCard;