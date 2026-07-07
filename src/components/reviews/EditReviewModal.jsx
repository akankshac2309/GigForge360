import { useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

function EditReviewModal({

    isOpen,
    onClose,
    review,
    onSuccess

}) {

    const [form, setForm] = useState({

        rating: 5,
        feedback: "",
        reviewDate: "",
        wouldRecommend: true

    });

    useEffect(() => {

        if (review) {

            setForm({

                rating: review.Rating__c || 5,

                feedback: review.Feedback__c || "",

                reviewDate: review.Review_Date__c || "",

                wouldRecommend: review.Would_Recommend__c || false

            });

        }

    }, [review]);

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

            await api.put(`/reviews/${review.Id}`, form);

            toast.success("Review Updated");

            onSuccess();

            onClose();

        }

        catch (err) {

            console.error(err);

            toast.error("Update Failed");

        }

    };

    if (!isOpen || !review) return null;

    return (

        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

            <div className="bg-white rounded-xl p-8 w-[600px]">

                <h2 className="text-3xl font-bold mb-6">

                    Edit Review

                </h2>

                <form

                    onSubmit={handleSubmit}

                    className="space-y-4"

                >

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

                            Save Changes

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default EditReviewModal;