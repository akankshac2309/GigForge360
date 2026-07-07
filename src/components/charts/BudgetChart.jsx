import {

    ResponsiveContainer,

    BarChart,

    Bar,

    XAxis,

    YAxis,

    Tooltip,

    CartesianGrid

} from "recharts";

function BudgetChart({ gigs }) {

    const data = gigs.map(gig => ({

        title: gig.Title__c,

        budget: gig.Budget__c

    }));

    return (

        <div className="bg-white rounded-xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-6">

                Budget Distribution

            </h2>

            <ResponsiveContainer
                width="100%"
                height={320}
            >

                <BarChart
                    data={data}
                >

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis
                        dataKey="title"
                    />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="budget"
                        fill="#2563eb"
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default BudgetChart;