import { useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

function EditPaymentModal({

    isOpen,
    onClose,
    payment,
    onSuccess

}) {

    const [form, setForm] = useState({

        amount: "",
        paymentDate: "",
        paymentMethod: "Bank Transfer",
        status: "Pending",
        transactionId: ""

    });

    useEffect(() => {

        if (payment) {

            setForm({

                amount: payment.Payment_Amount__c || "",

                paymentDate: payment.Payment_Date__c || "",

                paymentMethod:

                    payment.Payment_Method__c || "Bank Transfer",

                status:

                    payment.Payment_Status__c || "Pending",

                transactionId:

                    payment.Transaction__c || ""

            });

        }

    }, [payment]);

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.put(`/payments/${payment.Id}`, form);

            toast.success("Payment Updated");

            onSuccess();

            onClose();

        }

        catch (err) {

            console.error(err);

            toast.error("Update Failed");

        }

    };

    if (!isOpen || !payment) return null;

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white rounded-xl p-8 w-[600px]">

                <h2 className="text-3xl font-bold mb-6">

                    Edit Payment

                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        type="number"
                        name="amount"
                        value={form.amount}
                        onChange={handleChange}
                        className="border rounded-lg w-full p-3"
                        required
                    />

                    <input
                        type="date"
                        name="paymentDate"
                        value={form.paymentDate}
                        onChange={handleChange}
                        className="border rounded-lg w-full p-3"
                        required
                    />

                    <select
                        name="paymentMethod"
                        value={form.paymentMethod}
                        onChange={handleChange}
                        className="border rounded-lg w-full p-3"
                    >

                        <option>Bank Transfer</option>
                        <option>UPI</option>
                        <option>Credit Card</option>
                        <option>PayPal</option>

                    </select>

                    <select
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                        className="border rounded-lg w-full p-3"
                    >

                        <option>Pending</option>
                        <option>Processing</option>
                        <option>Completed</option>
                        <option>Failed</option>
                        <option>Refunded</option>

                    </select>

                    <input
                        type="text"
                        name="transactionId"
                        value={form.transactionId}
                        onChange={handleChange}
                        placeholder="Transaction ID"
                        className="border rounded-lg w-full p-3"
                    />

                    <div className="flex justify-end gap-4 pt-4">

                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-6 py-2 rounded-lg"
                        >

                            Cancel

                        </button>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                        >

                            Save Changes

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default EditPaymentModal;