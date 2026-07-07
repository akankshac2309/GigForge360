import { useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

import StatusBadge from "../common/StatusBadge";
import EditContractModal from "./EditContractModal";

function ContractCard({

    contract,
    fetchContracts

}) {

    const [showEditModal, setShowEditModal] = useState(false);

    const completeContract = async () => {

        try {

            await api.put(`/contracts/${contract.Id}`, {

                amount: contract.Contract_Amount__c,
                startDate: contract.Start_Date__c,
                endDate: contract.End_Date__c,
                paymentTerms: contract.Payment_Terms__c,
                status: "Completed"

            });

            toast.success("Contract Completed");

            fetchContracts();

        }

        catch (err) {

            console.error(err);

            toast.error("Failed to update contract");

        }

    };

    const deleteContract = async () => {

        try {

            await api.delete(`/contracts/${contract.Id}`);

            toast.success("Contract Deleted");

            fetchContracts();

        }

        catch (err) {

            console.error(err);

            toast.error("Delete Failed");

        }

    };

    return (

        <>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">

                <h2 className="text-3xl font-bold mb-5">

                    {contract.Name}

                </h2>

                <div className="space-y-3">

                    <p>

                        <strong>Gig:</strong>{" "}

                        {contract.Gig__r?.Title__c}

                    </p>

                    <p>

                        <strong>Amount:</strong>{" "}

                        ₹{contract.Contract_Amount__c?.toLocaleString()}

                    </p>

                    <p>

                        <strong>Status:</strong>{" "}

                        <StatusBadge status={contract.Status__c} />

                    </p>

                    <p>

                        <strong>Payment:</strong>{" "}

                        {contract.Payment_Terms__c}

                    </p>

                    <p>

                        <strong>Start:</strong>{" "}

                        {contract.Start_Date__c}

                    </p>

                    <p>

                        <strong>End:</strong>{" "}

                        {contract.End_Date__c}

                    </p>

                </div>

                <div className="flex flex-wrap gap-3 mt-8">

                    <button

                        onClick={() => setShowEditModal(true)}

                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"

                    >

                        Edit

                    </button>

                    <button

                        onClick={completeContract}

                        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"

                    >

                        Complete

                    </button>

                    <button

                        onClick={deleteContract}

                        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"

                    >

                        Delete

                    </button>

                </div>

            </div>

            <EditContractModal

                isOpen={showEditModal}

                onClose={() => setShowEditModal(false)}

                contract={contract}

                onSuccess={fetchContracts}

            />

        </>

    );

}

export default ContractCard;