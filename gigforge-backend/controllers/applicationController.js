const {
    createRecord,
    querySalesforce,
    updateRecord
} = require("../services/salesforceService");

// ================= APPLY FOR GIG =================

const applyForGig = async (req, res) => {

    try {

        const result = await createRecord(

            "Gig_Application__c",

            {

                Gig__c: req.body.gigId,

                Proposal__c: req.body.proposal,

                Proposed_Budget__c: Number(req.body.budget),

                Estimated_Duration_Days__c: Number(req.body.duration),

                Status__c: "Submitted"

            }

        );

        res.status(201).json(result);

    }

    catch (err) {

        console.log(err.response?.data || err.message);

        res.status(500).json(
            err.response?.data || err.message
        );

    }

};

// ================= GET APPLICATIONS FOR A GIG =================

const getApplications = async (req, res) => {

    try {

        const applications = await querySalesforce(`

            SELECT

                Id,
                Name,
                Proposal__c,
                Proposed_Budget__c,
                Estimated_Duration_Days__c,
                Status__c,
                CreatedDate

            FROM Gig_Application__c

            WHERE Gig__c='${req.params.gigId}'

            ORDER BY CreatedDate DESC

        `);

        res.json(applications);

    }

    catch (err) {

        console.log(err.response?.data || err.message);

        res.status(500).json(
            err.response?.data || err.message
        );

    }

};

// ================= GET ALL APPLICATIONS =================

const getAllApplications = async (req, res) => {

    try {

        const applications = await querySalesforce(`

            SELECT

                Id,
                Name,
                Proposal__c,
                Proposed_Budget__c,
                Estimated_Duration_Days__c,
                Status__c,
                Gig__r.Title__c,
                CreatedDate

            FROM Gig_Application__c

            ORDER BY CreatedDate DESC

        `);

        res.json(applications);

    }

    catch (err) {

        console.log(err.response?.data || err.message);

        res.status(500).json(
            err.response?.data || err.message
        );

    }

};

// ================= UPDATE STATUS =================

const updateApplicationStatus = async (req, res) => {

    try {

        await updateRecord(

            "Gig_Application__c",

            req.params.id,

            {

                Status__c: req.body.status

            }

        );

        res.json({

            success: true

        });

    }

    catch (err) {

        console.log(err.response?.data || err.message);

        res.status(500).json(
            err.response?.data || err.message
        );

    }

};

module.exports = {

    applyForGig,
    getApplications,
    getAllApplications,
    updateApplicationStatus

};