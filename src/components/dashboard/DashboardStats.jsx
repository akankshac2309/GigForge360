import DashboardCard from "./DashboardCard";

function DashboardStats({ gigs }) {

    const total = gigs.length;

    const open = gigs.filter(

        gig => gig.Status__c === "Open"

    ).length;

    const closed = gigs.filter(

        gig => gig.Status__c === "Closed"

    ).length;

    const remote = gigs.filter(

        gig => gig.Remote__c

    ).length;

    return (

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

            <DashboardCard
                title="Total Gigs"
                value={total}
            />

            <DashboardCard
                title="Open Gigs"
                value={open}
            />

            <DashboardCard
                title="Closed Gigs"
                value={closed}
            />

            <DashboardCard
                title="Remote Gigs"
                value={remote}
            />

        </div>

    );

}

export default DashboardStats;