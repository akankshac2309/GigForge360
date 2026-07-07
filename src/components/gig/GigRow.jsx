function GigRow({
    gig,
    onEdit,
    onDelete
}) {

    return (

        <tr className="border-b hover:bg-slate-50">

            <td className="p-4 font-medium">
                {gig.Title__c}
            </td>

            <td className="p-4">
                ₹{gig.Budget__c?.toLocaleString()}
            </td>

            <td className="p-4">

                <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold
                    ${
                        gig.Status__c === "Open"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }`}
                >
                    {gig.Status__c}
                </span>

            </td>

            <td className="p-4">
                {gig.Remote__c ? "Yes" : "No"}
            </td>

            <td className="p-4">
                {gig.Experience_Level__c}
            </td>

            <td className="p-4">

                <div className="flex gap-2">

                    <button
                        onClick={() => onEdit(gig)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => onDelete(gig)}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                    >
                        Delete
                    </button>

                </div>

            </td>

        </tr>

    );

}

export default GigRow;