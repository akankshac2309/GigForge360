import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ApplyModal from "./ApplyModal";
import StatusBadge from "../common/StatusBadge";

function GigCard({

    id,
    title,
    budget,
    status,
    remote,
    experience,
    openings

}) {

    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const gig = {

        id,
        title,
        budget,
        status,
        remote,
        experience,
        openings

    };

    return (

        <>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">

                <h2 className="text-2xl font-bold mb-5">

                    {title}

                </h2>

                <div className="space-y-3">

                    <p>

                        <strong>Budget:</strong> ₹{budget?.toLocaleString()}

                    </p>

                    <p>

                        <strong>Status:</strong>{" "}

                        <StatusBadge status={status} />

                    </p>

                    <p>

                        <strong>Remote:</strong>{" "}

                        {remote ? "Yes" : "No"}

                    </p>

                    <p>

                        <strong>Experience:</strong>{" "}

                        {experience}

                    </p>

                    <p>

                        <strong>Openings:</strong>{" "}

                        {openings}

                    </p>

                </div>

                <div className="flex gap-4 mt-8">

                    <button

                        onClick={() => setShowModal(true)}

                        className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"

                    >

                        Apply

                    </button>

                    <button

                        onClick={() =>
                            navigate("/gig-details", {
                                state: {
                                    gig: {
                                        Id: id,
                                        Title__c: title,
                                        Budget__c: budget,
                                        Status__c: status,
                                        Remote__c: remote,
                                        Experience_Level__c: experience,
                                        Number_of_Openings__c: openings
                                    }
                                }
                            })
                        }

                        className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition"

                    >

                        View Details

                    </button>

                </div>

            </div>

            <ApplyModal

                isOpen={showModal}

                onClose={() => setShowModal(false)}

                gig={gig}

            />

        </>

    );

}

export default GigCard;