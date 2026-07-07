const { querySalesforce } = require("../services/salesforceService");

const getClientDashboard = async (req, res) => {

    try {

        const gigs = await querySalesforce(`
            SELECT
                Budget__c,
                Status__c
            FROM Gig__c
        `);

        const totalGigs = gigs.length;

        const openGigs = gigs.filter(
            gig => gig.Status__c === "Open"
        ).length;

        const closedGigs = gigs.filter(
            gig => gig.Status__c === "Closed"
        ).length;

        const totalBudget = gigs.reduce(
            (sum, gig) => sum + (gig.Budget__c || 0),
            0
        );

        res.json({
            totalGigs,
            openGigs,
            closedGigs,
            totalBudget
        });

    } catch (err) {

        console.log(err.response?.data || err.message);

        res.status(500).json(
            err.response?.data || err.message
        );

    }

};

module.exports = {
    getClientDashboard
};