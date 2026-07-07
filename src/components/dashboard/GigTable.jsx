import { useState } from "react";
import useGigs from "../../hooks/useGigs";
import GigRow from "../gig/GigRow";
import EditGigModal from "../gig/EditGigModal";
import DeleteConfirmation from "../gig/DeleteConfirmation";
import ApplicantsTable from "./ApplicantsTable";
import SearchBar from "../common/SearchBar";
import GigFilters from "../gig/GigFilters";

function GigTable() {

    const {
        gigs,
        loading,
        error,
        fetchGigs
    } = useGigs();

    const [selectedGig, setSelectedGig] = useState(null);

    const [showEditModal, setShowEditModal] = useState(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [selectedGigId, setSelectedGigId] = useState(null);

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("All");

    const [experience, setExperience] = useState("All");

    const [remote, setRemote] = useState("All");

    const filteredGigs = gigs.filter((gig) => {

        const matchesSearch =
            gig.Title__c.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            status === "All" || gig.Status__c === status;

        const matchesExperience =
            experience === "All" ||
            gig.Experience_Level__c === experience;

        const matchesRemote =
            remote === "All" ||
            (remote === "Remote" && gig.Remote__c) ||
            (remote === "Onsite" && !gig.Remote__c);

        return (
            matchesSearch &&
            matchesStatus &&
            matchesExperience &&
            matchesRemote
        );

    });

    if (loading)
        return <div className="p-10">Loading...</div>;

    if (error)
        return <div>Error loading gigs.</div>;

    return (

        <>

            <div className="bg-white rounded-xl shadow-md p-6">

                <h2 className="text-3xl font-bold mb-6">

                    My Posted Gigs

                </h2>

                <SearchBar
                    value={search}
                    onChange={setSearch}
                />

                <GigFilters
                    status={status}
                    setStatus={setStatus}
                    experience={experience}
                    setExperience={setExperience}
                    remote={remote}
                    setRemote={setRemote}
                />

                <table className="min-w-full mt-6">

                    <thead>

                        <tr className="bg-slate-100">

                            <th className="p-3 text-left">Title</th>

                            <th className="p-3">Budget</th>

                            <th className="p-3">Status</th>

                            <th className="p-3">Remote</th>

                            <th className="p-3">Experience</th>

                            <th className="p-3">Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            filteredGigs.map((gig) => (

                                <GigRow

                                    key={gig.Id}

                                    gig={gig}

                                    onEdit={(gig) => {

                                        setSelectedGig(gig);

                                        setShowEditModal(true);

                                    }}

                                    onDelete={(gig) => {

                                        setSelectedGig(gig);

                                        setShowDeleteModal(true);

                                    }}

                                />

                            ))

                        }

                    </tbody>

                </table>

            </div>

            <div className="mt-4">

                <h3 className="text-xl font-semibold mb-2">

                    Select a Gig to View Applicants

                </h3>

                <select

                    className="border rounded-lg p-3"

                    value={selectedGigId || ""}

                    onChange={(e) =>

                        setSelectedGigId(e.target.value)

                    }

                >

                    <option value="">

                        -- Select Gig --

                    </option>

                    {

                        gigs.map((gig) => (

                            <option

                                key={gig.Id}

                                value={gig.Id}

                            >

                                {gig.Title__c}

                            </option>

                        ))

                    }

                </select>

            </div>

            <ApplicantsTable gigId={selectedGigId} />

            <EditGigModal

                isOpen={showEditModal}

                gig={selectedGig}

                onClose={() => {

                    setShowEditModal(false);

                    setSelectedGig(null);

                }}

                onSuccess={fetchGigs}

            />

            <DeleteConfirmation

                isOpen={showDeleteModal}

                gig={selectedGig}

                onClose={() => {

                    setShowDeleteModal(false);

                    setSelectedGig(null);

                }}

                onSuccess={fetchGigs}

            />

        </>

    );

}

export default GigTable;