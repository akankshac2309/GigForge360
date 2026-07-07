function StatusBadge({ status }) {

    const colors = {

        Open: "bg-green-100 text-green-700",

        Closed: "bg-red-100 text-red-700",

        Active: "bg-blue-100 text-blue-700",

        Completed: "bg-purple-100 text-purple-700",

        Pending: "bg-yellow-100 text-yellow-700",

        Paid: "bg-emerald-100 text-emerald-700",

        Failed: "bg-red-100 text-red-700",

        Submitted: "bg-cyan-100 text-cyan-700",

        "Under Review": "bg-orange-100 text-orange-700"

    };

    return (

        <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${colors[status] || "bg-gray-100 text-gray-700"}`}
        >
            {status}
        </span>

    );

}

export default StatusBadge;