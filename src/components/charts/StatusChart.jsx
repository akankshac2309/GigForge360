import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

function StatusChart({ gigs }) {

    const open = gigs.filter(
        gig => gig.Status__c === "Open"
    ).length;

    const closed = gigs.filter(
        gig => gig.Status__c === "Closed"
    ).length;

    const data = [

        {
            name: "Open",
            value: open
        },

        {
            name: "Closed",
            value: closed
        }

    ];

    const COLORS = [

        "#22c55e",

        "#ef4444"

    ];

    return (

        <div className="bg-white rounded-xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-6">

                Gig Status

            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <PieChart>

                    <Pie

                        data={data}

                        dataKey="value"

                        nameKey="name"

                        outerRadius={100}

                        label

                    >

                        {

                            data.map((entry, index) => (

                                <Cell

                                    key={index}

                                    fill={COLORS[index % COLORS.length]}

                                />

                            ))

                        }

                    </Pie>

                    <Tooltip />

                    <Legend />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}

export default StatusChart;