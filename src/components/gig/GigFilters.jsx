function GigFilters({

    status,
    setStatus,

    experience,
    setExperience,

    remote,
    setRemote

}) {

    return (

        <div className="grid md:grid-cols-3 gap-4">

            <select

                value={status}

                onChange={(e) => setStatus(e.target.value)}

                className="border p-3 rounded-lg"

            >

                <option>All</option>

                <option>Open</option>

                <option>Closed</option>

            </select>

            <select

                value={experience}

                onChange={(e) => setExperience(e.target.value)}

                className="border p-3 rounded-lg"

            >

                <option>All</option>

                <option>Beginner</option>

                <option>Intermediate</option>

                <option>Expert</option>

            </select>

            <select

                value={remote}

                onChange={(e) => setRemote(e.target.value)}

                className="border p-3 rounded-lg"

            >

                <option>All</option>

                <option>Remote</option>

                <option>Onsite</option>

            </select>

        </div>

    );

}

export default GigFilters;