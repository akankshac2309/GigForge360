import { useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

function CreatePaymentModal({

    isOpen,
    onClose,
    onSuccess

}) {

    const [contracts, setContracts] = useState([]);

    const [form, setForm] = useState({

        contractId: "",
        amount: "",
        paymentDate: "",
        paymentMethod: "Bank Transfer",
        status: "Pending",
        transactionId: ""

    });

    useEffect(() => {

        if (!isOpen) return;

        const loadContracts = async () => {

            try {

                const response = await api.get("/contracts");

                setContracts(response.data);

            }

            catch (err) {

                console.error(err);

            }

        };

        loadContracts();

    }, [isOpen]);

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("/payments", form);

            toast.success("Payment Created");

            onSuccess();

            onClose();

        }

        catch (err) {

            console.error(err);

            toast.error("Failed to create payment");

        }

    };

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white rounded-xl p-8 w-[600px]">

                <h2 className="text-3xl font-bold mb-6">

                    Create Payment

                </h2>

                <form

                    onSubmit={handleSubmit}

                    className="space-y-4"

                >

                    <select

                        name="contractId"

                        value={form.contractId}

                        onChange={handleChange}

                        className="border rounded-lg w-full p-3"

                        required

                    >

                        <option value="">

                            Select Contract

                        </option>

                        {

                            contracts.map(contract => (

                                <option

                                    key={contract.Id}

                                    value={contract.Id}

                                >

                                    {contract.Name}

                                </option>

                            ))

                        }

                    </select>

                    <input

                        type="number"

                        name="amount"

                        value={form.amount}

                        onChange={handleChange}

                        placeholder="Payment Amount"

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

                    <div className="flex justify-end gap-4">

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

                            Create Payment

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default CreatePaymentModal;