import { useEffect, useState } from "react";
import api from "../services/api";

function useGigs() {

    const [gigs, setGigs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchGigs = async () => {

        try {

            setLoading(true);

            const response = await api.get("/gigs");

            setGigs(response.data);

        } catch (err) {

            console.error(err);

            setError(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchGigs();

    }, []);

    return {

        gigs,
        loading,
        error,
        fetchGigs

    };

}

export default useGigs;