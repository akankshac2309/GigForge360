import { useEffect, useState } from "react";
import api from "../services/api";

import ReviewCard from "../components/reviews/ReviewCard";
import CreateReviewModal from "../components/reviews/CreateReviewModal";

function Reviews() {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const [showCreateModal, setShowCreateModal] = useState(false);

    const fetchReviews = async () => {

        try {

            const response = await api.get("/reviews");

            setReviews(response.data);

        }

        catch (err) {

            console.error(err);

        }

        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchReviews();

    }, []);

    if (loading) {

        return (

            <div className="text-center mt-20 text-2xl">

                Loading Reviews...

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-slate-100 p-10">

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-4xl font-bold">

                    Reviews

                </h1>

                <button

                    onClick={() => setShowCreateModal(true)}

                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"

                >

                    + Create Review

                </button>

            </div>

            {

                reviews.length === 0 && (

                    <div className="bg-white rounded-xl shadow-md p-10 text-center">

                        No reviews found.

                    </div>

                )

            }

            <div className="grid md:grid-cols-2 gap-6">

                {

                    reviews.map(review => (

                        <ReviewCard

                            key={review.Id}

                            review={review}

                            fetchReviews={fetchReviews}

                        />

                    ))

                }

            </div>

            <CreateReviewModal

                isOpen={showCreateModal}

                onClose={() => setShowCreateModal(false)}

                onSuccess={fetchReviews}

            />

        </div>

    );

}

export default Reviews;