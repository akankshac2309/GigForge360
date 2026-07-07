import { useEffect, useState } from "react";
import api from "../services/api";

import ContractCard from "../components/contracts/ContractCard";
import CreateContractModal from "../components/contracts/CreateContractModal";

function Contracts() {

    const [contracts, setContracts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showCreateModal, setShowCreateModal] = useState(false);

    const fetchContracts = async () => {

        try {

            const response = await api.get("/contracts");

            setContracts(response.data);

        }

        catch (err) {

            console.error(err);

        }

        finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchContracts();

    }, []);

    if (loading) {

        return (

            <div className="text-center mt-20 text-2xl">

                Loading Contracts...

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-slate-100 p-10">

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-4xl font-bold">

                    Contracts

                </h1>

                <button

                    onClick={() => setShowCreateModal(true)}

                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"

                >

                    + Create Contract

                </button>

            </div>

            {

                contracts.length === 0 && (

                    <div className="bg-white rounded-xl shadow-md p-10 text-center">

                        No contracts found.

                    </div>

                )

            }

            <div className="grid md:grid-cols-2 gap-6">

                {

                    contracts.map(contract => (

                        <ContractCard

                            key={contract.Id}

                            contract={contract}

                            fetchContracts={fetchContracts}

                        />

                    ))

                }

            </div>

            <CreateContractModal

                isOpen={showCreateModal}

                onClose={() => setShowCreateModal(false)}

                onSuccess={fetchContracts}

            />

        </div>

    );

}

export default Contracts;