import { useEffect, useState } from "react";
import api from "../services/api";

function MyApplications() {

    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchApplications();

    }, []);

    const fetchApplications = async () => {

        try {

            const response = await api.get("/applications");

            setApplications(response.data);

        }

        catch (err) {

            console.error(err);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div className="text-center mt-20">

                Loading Applications...

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-slate-100 p-10">

            <h1 className="text-4xl font-bold mb-8">

                My Applications

            </h1>

            <div className="grid gap-6">

                {

                    applications.map((app) => (

                        <div
                            key={app.Id}
                            className="bg-white rounded-xl shadow-md p-6"
                        >

                            <h2 className="text-2xl font-bold">

                                {app.Gig__r?.Title__c}

                            </h2>

                            <p className="mt-3">

                                <strong>Proposal:</strong>

                                {" "}

                                {app.Proposal__c}

                            </p>

                            <p>

                                <strong>Budget:</strong>

                                ₹{app.Proposed_Budget__c}

                            </p>

                            <p>

                                <strong>Duration:</strong>

                                {app.Estimated_Duration_Days__c} days

                            </p>

                            <p>

                                <strong>Status:</strong>

                                {app.Status__c}

                            </p>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default MyApplications;