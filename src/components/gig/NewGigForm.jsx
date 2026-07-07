import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

function NewGigForm() {

    const initialForm = {

        title: "",
        budget: "",
        experience: "Beginner",
        status: "Open",
        remote: false,
        openings: 1

    };

    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setForm(prev => ({

            ...prev,

            [name]: type === "checkbox"
                ? checked
                : value

        }));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("/gigs", form);

            toast.success("Gig created successfully!");

            setForm(initialForm);

        }

        catch (err) {

            console.error(err);

            toast.error("Failed to create gig.");

        }

    };

    return (

        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-8 space-y-4"
        >

            <h2 className="text-3xl font-bold mb-4">

                Post New Gig

            </h2>

            <input
                name="title"
                placeholder="Gig Title"
                value={form.title}
                className="border p-3 w-full rounded"
                onChange={handleChange}
                required
            />

            <input
                name="budget"
                type="number"
                placeholder="Budget"
                value={form.budget}
                className="border p-3 w-full rounded"
                onChange={handleChange}
                required
            />

            <select
                name="experience"
                value={form.experience}
                className="border p-3 w-full rounded"
                onChange={handleChange}
            >

                <option>Beginner</option>

                <option>Intermediate</option>

                <option>Expert</option>

            </select>

            <label className="flex gap-3 items-center">

                <input
                    type="checkbox"
                    name="remote"
                    checked={form.remote}
                    onChange={handleChange}
                />

                Remote Job

            </label>

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
            >

                Create Gig

            </button>

        </form>

    );

}

export default NewGigForm;