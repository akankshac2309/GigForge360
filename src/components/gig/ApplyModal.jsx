import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

function ApplyModal({ isOpen, onClose, gig }) {

    const [proposal, setProposal] = useState("");
    const [budget, setBudget] = useState("");
    const [duration, setDuration] = useState("");

    if (!isOpen || !gig) return null;

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("/applications", {

                gigId: gig.id,

                proposal,

                budget,

                duration

            });

            toast.success("Application submitted successfully!");

            setProposal("");
            setBudget("");
            setDuration("");

            onClose();

        }

        catch (err) {

            console.error(err);

            toast.error("Failed to submit application.");

        }

    };

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white rounded-xl shadow-xl p-8 w-[550px]">

                <h2 className="text-3xl font-bold mb-6">

                    Apply for Gig

                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <textarea

                        placeholder="Write your proposal..."

                        value={proposal}

                        onChange={(e) => setProposal(e.target.value)}

                        className="border rounded-lg w-full p-3 h-40"

                        required

                    />

                    <input

                        type="number"

                        placeholder="Proposed Budget"

                        value={budget}

                        onChange={(e) => setBudget(e.target.value)}

                        className="border rounded-lg w-full p-3"

                        required

                    />

                    <input

                        type="number"

                        placeholder="Estimated Duration (Days)"

                        value={duration}

                        onChange={(e) => setDuration(e.target.value)}

                        className="border rounded-lg w-full p-3"

                        required

                    />

                    <div className="flex justify-end gap-4 pt-4">

                        <button

                            type="button"

                            onClick={onClose}

                            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg"

                        >

                            Cancel

                        </button>

                        <button

                            type="submit"

                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"

                        >

                            Submit Application

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default ApplyModal;