import { useEffect, useState } from "react";
import api from "../../services/api";

function CreateContractModal({

    isOpen,
    onClose,
    onSuccess

}) {

    const [gigs, setGigs] = useState([]);
    const [applications, setApplications] = useState([]);

    const [form, setForm] = useState({

        gigId: "",
        applicationId: "",
        amount: "",
        startDate: "",
        endDate: "",
        paymentTerms: "Milestone Based",
        status: "Draft"

    });

    useEffect(() => {

        if (!isOpen) return;

        const loadData = async () => {

            try {

                const gigsRes = await api.get("/gigs");

                const appRes = await api.get("/applications");

                setGigs(gigsRes.data);

                setApplications(appRes.data);

            }

            catch (err) {

                console.error(err);

            }

        };

        loadData();

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

            await api.post("/contracts", form);

            alert("Contract Created!");

            onSuccess();

            onClose();

        }

        catch (err) {

            console.error(err);

            alert("Failed");

        }

    };

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white rounded-xl p-8 w-[650px]">

                <h2 className="text-3xl font-bold mb-6">

                    Create Contract

                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <select
                        name="gigId"
                        value={form.gigId}
                        onChange={handleChange}
                        className="border rounded-lg w-full p-3"
                        required
                    >

                        <option value="">Select Gig</option>

                        {

                            gigs.map(gig => (

                                <option
                                    key={gig.Id}
                                    value={gig.Id}
                                >

                                    {gig.Title__c}

                                </option>

                            ))

                        }

                    </select>

                    <select
                        name="applicationId"
                        value={form.applicationId}
                        onChange={handleChange}
                        className="border rounded-lg w-full p-3"
                    >

                        <option value="">Select Application</option>

                        {

                            applications.map(app => (

                                <option
                                    key={app.Id}
                                    value={app.Id}
                                >

                                    {app.Name}

                                </option>

                            ))

                        }

                    </select>

                    <input
                        type="number"
                        name="amount"
                        placeholder="Contract Amount"
                        value={form.amount}
                        onChange={handleChange}
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
                        <option>Active</option>

                    </select>

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

                            Create Contract

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default CreateContractModal;