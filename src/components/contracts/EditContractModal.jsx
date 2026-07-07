import { useEffect, useState } from "react";
import api from "../../services/api";

function EditContractModal({

    isOpen,
    onClose,
    contract,
    onSuccess

}) {

    const [form, setForm] = useState({

        amount: "",
        startDate: "",
        endDate: "",
        paymentTerms: "Milestone Based",
        status: "Draft"

    });

    useEffect(() => {

        if (contract) {

            setForm({

                amount: contract.Contract_Amount__c || "",

                startDate: contract.Start_Date__c || "",

                endDate: contract.End_Date__c || "",

                paymentTerms:

                    contract.Payment_Terms__c || "Milestone Based",

                status:

                    contract.Status__c || "Draft"

            });

        }

    }, [contract]);

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.put(`/contracts/${contract.Id}`, form);

            alert("Contract Updated Successfully!");

            onSuccess();

            onClose();

        }

        catch (err) {

            console.error(err);

            alert("Failed to update contract.");

        }

    };

    if (!isOpen || !contract) return null;

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white rounded-xl p-8 w-[600px]">

                <h2 className="text-3xl font-bold mb-6">

                    Edit Contract

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

                        placeholder="Contract Amount"

                        className="border rounded-lg w-full p-3"

                        required

                    />

                    <input

                        type="date"

                        name="startDate"

                        value={form.startDate}

                        onChange={handleChange}

                        className="border rounded-lg w-full p-3"

                        required

                    />

                    <input

                        type="date"

                        name="endDate"

                        value={form.endDate}

                        onChange={handleChange}

                        className="border rounded-lg w-full p-3"

                        required

                    />

                    <select

                        name="paymentTerms"

                        value={form.paymentTerms}

                        onChange={handleChange}

                        className="border rounded-lg w-full p-3"

                    >

                        <option>Milestone Based</option>

                        <option>Full Payment</option>

                        <option>Weekly</option>

                        <option>Monthly</option>

                    </select>

                    <select
    			name="status"
    			value={form.status}
    			onChange={handleChange}
    			className="border rounded-lg w-full p-3"
		    >

    			<option>Draft</option>
    			<option>Pending Approval</option>
    			<option>Active</option>
    			<option>Completed</option>
    			<option>Cancelled</option>

		    </select>

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

export default EditContractModal;