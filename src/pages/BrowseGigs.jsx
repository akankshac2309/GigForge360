import { useMemo, useState } from "react";
import GigCard from "../components/gig/GigCard";
import SearchBar from "../components/common/SearchBar";
import GigFilters from "../components/gig/GigFilters";
import useGigs from "../hooks/useGigs";

function BrowseGigs() {

    const {
        gigs,
        loading,
        error
    } = useGigs();

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");
    const [experience, setExperience] = useState("All");
    const [remote, setRemote] = useState("All");

    const filteredGigs = useMemo(() => {

        return gigs.filter((gig) => {

            const matchesSearch =
                gig.Title__c?.toLowerCase().includes(search.toLowerCase());

            const matchesStatus =
                status === "All" ||
                gig.Status__c === status;

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

    }, [gigs, search, status, experience, remote]);

    if (loading) {

        return (

            <div className="text-center mt-20">

                Loading gigs...

            </div>

        );

    }

    if (error) {

        return (

            <div className="text-center mt-20 text-red-600">

                Error loading gigs.

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-slate-100 p-10">

            <h1 className="text-5xl font-bold text-center mb-10">

                Browse Available Gigs

            </h1>

            <div className="max-w-6xl mx-auto mb-6">

                <SearchBar
                    value={search}
                    onChange={setSearch}
                />

            </div>

            <div className="max-w-6xl mx-auto mb-10">

                <GigFilters
                    status={status}
                    setStatus={setStatus}
                    experience={experience}
                    setExperience={setExperience}
                    remote={remote}
                    setRemote={setRemote}
                />

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {

                    filteredGigs.map((gig) => (

                        <GigCard

                            key={gig.Id}

                            id={gig.Id}

                            title={gig.Title__c}

                            budget={gig.Budget__c}

                            status={gig.Status__c}

                            remote={gig.Remote__c}

                            experience={gig.Experience_Level__c}

                            openings={gig.Number_of_Openings__c}

                        />

                    ))

                }

            </div>

        </div>

    );

}

export default BrowseGigs;