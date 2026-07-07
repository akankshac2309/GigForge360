import toast from "react-hot-toast";
import api from "../../services/api";

function DeleteConfirmation({
    isOpen,
    onClose,
    gig,
    onSuccess
}) {

    if (!isOpen || !gig) return null;

    const handleDelete = async () => {

        try {

            await api.delete(`/gigs/${gig.Id}`);

            toast.success("Gig deleted successfully!");

            await onSuccess();

            onClose();

        }

        catch (err) {

            console.error(err);

            toast.error("Failed to delete gig.");

        }

    };

    return (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white rounded-xl shadow-xl p-8 w-[450px]">

                <h2 className="text-2xl font-bold mb-4 text-red-600">

                    Delete Gig

                </h2>

                <p className="text-gray-600 mb-8">

                    Are you sure you want to delete

                    <span className="font-bold">

                        {" "}{gig.Title__c}

                    </span>

                    ?

                </p>

                <div className="flex justify-end gap-4">

                    <button

                        onClick={onClose}

                        className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg"

                    >

                        Cancel

                    </button>

                    <button

                        onClick={handleDelete}

                        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"

                    >

                        Delete

                    </button>

                </div>

            </div>

        </div>

    );

}

export default DeleteConfirmation;