import { useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

function CreateReviewModal({

    isOpen,
    onClose,
    onSuccess

}) {

    const [contracts, setContracts] = useState([]);

    const [form, setForm] = useState({

        contractId: "",
        rating: 5,
        feedback: "",
        reviewDate: "",
        wouldRecommend: true

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

        const { name, value, type, checked } = e.target;

        setForm({

            ...form,

            [name]: type === "checkbox" ? checked : value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("/reviews", form);

            toast.success("Review Created");

            onSuccess();

            onClose();

        }

        catch (err) {

            console.error(err);

            toast.error("Failed to create review");

        }

    };

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white rounded-xl p-8 w-[600px]">

                <h2 className="text-3xl font-bold mb-6">

                    Create Review

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

                        name="rating"

                        min="1"

                        max="5"

                        value={form.rating}

                        onChange={handleChange}

                        className="border rounded-lg w-full p-3"

                    />

                    <textarea

                        name="feedback"

                        value={form.feedback}

                        onChange={handleChange}

                        placeholder="Feedback"

                        className="border rounded-lg w-full p-3 h-32"

                    />

                    <input

                        type="date"

                        name="reviewDate"

                        value={form.reviewDate}

                        onChange={handleChange}

                        className="border rounded-lg w-full p-3"

                    />

                    <label className="flex items-center gap-3">

                        <input

                            type="checkbox"

                            name="wouldRecommend"

                            checked={form.wouldRecommend}

                            onChange={handleChange}

                        />

                        Would Recommend

                    </label>

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

                            Create Review

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default CreateReviewModal;