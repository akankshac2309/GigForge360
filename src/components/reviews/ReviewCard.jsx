import { useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

import EditReviewModal from "./EditReviewModal";

function ReviewCard({

    review,
    fetchReviews

}) {

    const [showEditModal, setShowEditModal] = useState(false);

    const deleteReview = async () => {

        try {

            await api.delete(`/reviews/${review.Id}`);

            toast.success("Review Deleted");

            fetchReviews();

        }

        catch (err) {

            console.error(err);

            toast.error("Delete Failed");

        }

    };

    return (

        <>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">

                <div className="flex justify-between items-center">

                    <h2 className="text-2xl font-bold">

                        {review.Contract__r?.Name || "Review"}

                    </h2>

                    <span className="text-yellow-500 text-2xl">

                        {"⭐".repeat(Math.round(review.Rating__c || 0))}

                    </span>

                </div>

                <div className="space-y-3 mt-5">

                    <p>

                        <strong>Rating:</strong>{" "}

                        {review.Rating__c}/5

                    </p>

                    <p>

                        <strong>Review Date:</strong>{" "}

                        {review.Review_Date__c}

                    </p>

                    <p>

                        <strong>Feedback:</strong>

                    </p>

                    <div className="bg-slate-100 rounded-lg p-4 text-gray-700">

                        {review.Feedback__c || "No feedback"}

                    </div>

                    <p>

                        <strong>Recommendation:</strong>{" "}

                        {

                            review.Would_Recommend__c

                                ? "👍 Would Recommend"

                                : "👎 Would Not Recommend"

                        }

                    </p>

                </div>

                <div className="flex gap-3 mt-8">

                    <button

                        onClick={() => setShowEditModal(true)}

                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"

                    >

                        Edit

                    </button>

                    <button

                        onClick={deleteReview}

                        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"

                    >

                        Delete

                    </button>

                </div>

            </div>

            <EditReviewModal

                isOpen={showEditModal}

                onClose={() => setShowEditModal(false)}

                review={review}

                onSuccess={fetchReviews}

            />

        </>

    );

}

export default ReviewCard;