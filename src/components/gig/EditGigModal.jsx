import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

function EditGigModal({
    isOpen,
    onClose,
    gig,
    onSuccess
}) {

    const [formData, setFormData] = useState({
        title: "",
        budget: "",
        status: "Open",
        experience: "Beginner",
        remote: false,
        openings: 1
    });

    const [saving, setSaving] = useState(false);

    useEffect(() => {

        if (gig) {

            setFormData({
                title: gig.Title__c || "",
                budget: gig.Budget__c || "",
                status: gig.Status__c || "Open",
                experience: gig.Experience_Level__c || "Beginner",
                remote: gig.Remote__c || false,
                openings: gig.Number_of_Openings__c || 1
            });

        }

    }, [gig]);

    if (!isOpen) return null;

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setSaving(true);

            await api.put(`/gigs/${gig.Id}`, formData);

            toast.success("Gig updated successfully!");

            await onSuccess();

            onClose();

        }

        catch (err) {

            console.error(err);

            toast.error("Failed to update gig.");

        }

        finally {

            setSaving(false);

        }

    };

    return (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl shadow-xl p-8 w-[550px]">

                <h2 className="text-3xl font-bold mb-6">

                    Edit Gig

                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="border rounded-lg w-full p-3"
                        placeholder="Title"
                        required
                    />

                    <input
                        type="number"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="border rounded-lg w-full p-3"
                        placeholder="Budget"
                        required
                    />

                    <select
    			name="status"
    			value={formData.status}
    			onChange={handleChange}
    			className="border rounded-lg w-full p-3"
		    >
    			<option value="Draft">Draft</option>
    			<option value="Open">Open</option>
    			<option value="Applications Received">Applications Received</option>
    			<option value="Shortlisted">Shortlisted</option>
    			<option value="Contract Created">Contract Created</option>
    			<option value="In Progress">In Progress</option>
    			<option value="Completed">Completed</option>
    			<option value="Cancelled">Cancelled</option>
		    </select>

                    <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="border rounded-lg w-full p-3"
                    >
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Expert</option>
                    </select>

                    <input
                        type="number"
                        name="openings"
                        value={formData.openings}
                        onChange={handleChange}
                        className="border rounded-lg w-full p-3"
                    />

                    <label className="flex items-center gap-2">

                        <input
                            type="checkbox"
                            name="remote"
                            checked={formData.remote}
                            onChange={handleChange}
                        />

                        Remote

                    </label>

                    <div className="flex justify-end gap-4 pt-4">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={saving}
                            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400"
                        >
                            {saving ? "Saving..." : "Save Changes"}
                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default EditGigModal;