import { useEffect, useState } from "react";
import api from "../../services/api";

function ApplicantsTable({ gigId }) {

    const [applications, setApplications] = useState([]);

    useEffect(() => {

        if (gigId) {

            fetchApplications();

        }

    }, [gigId]);

    const fetchApplications = async () => {

        try {

            const res = await api.get(`/applications/${gigId}`);

            setApplications(res.data);

        }

        catch (err) {

            console.error(err);

        }

    };

    const updateStatus = async (id, status) => {

        try {

            await api.put(`/applications/${id}`, {

                status

            });

            fetchApplications();

        }

        catch (err) {

            console.error(err);

        }

    };

    if (!gigId) {

        return null;

    }

    return (

        <div className="bg-white rounded-xl shadow-md p-6 mt-8">

            <h2 className="text-2xl font-bold mb-6">

                Applicants

            </h2>

            <table className="min-w-full">

                <thead>

                    <tr className="bg-slate-100">

                        <th className="p-3 text-left">

                            Proposal

                        </th>

                        <th className="p-3">

                            Budget

                        </th>

                        <th className="p-3">

                            Duration

                        </th>

                        <th className="p-3">

                            Status

                        </th>

                        <th className="p-3">

                            Actions

                        </th>

                    </tr>

                </thead>

                <tbody>

                    {

                        applications.map((app) => (

                            <tr
                                key={app.Id}
                                className="border-b"
                            >

                                <td className="p-3">

                                    {app.Proposal__c}

                                </td>

                                <td className="p-3">

                                    ₹{app.Proposed_Budget__c}

                                </td>

                                <td className="p-3">

                                    {app.Estimated_Duration_Days__c} days

                                </td>

                                <td className="p-3">

                                    {app.Status__c}

                                </td>

                                <td className="p-3">

                                    <div className="flex gap-2">

                                        <button

                                            onClick={() =>
                                                updateStatus(
                                                    app.Id,
                                                    "Accepted"
                                                )
                                            }

                                            className="bg-green-600 text-white px-3 py-1 rounded"

                                        >

                                            Accept

                                        </button>

                                        <button

                                            onClick={() =>
                                                updateStatus(
                                                    app.Id,
                                                    "Rejected"
                                                )
                                            }

                                            className="bg-red-600 text-white px-3 py-1 rounded"

                                        >

                                            Reject

                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default ApplicantsTable;