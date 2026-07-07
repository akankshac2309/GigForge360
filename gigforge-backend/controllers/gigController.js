const {
    querySalesforce,
    createRecord,
    updateRecord,
    deleteRecord
} = require("../services/salesforceService");

// ================= GET ALL GIGS =================

const getGigs = async (req, res) => {

    try {

        const gigs = await querySalesforce(`
            SELECT
                Id,
                Name,
                Title__c,
                Budget__c,
                Status__c,
                Remote__c,
                Experience_Level__c,
                Number_of_Openings__c
            FROM Gig__c
            ORDER BY CreatedDate DESC
        `);

        res.json(gigs);

    } catch (err) {

        console.log(err.response?.data || err.message);

        res.status(500).json(
            err.response?.data || err.message
        );

    }

};

// ================= CREATE GIG =================

const createGig = async (req, res) => {

    try {

        const result = await createRecord("Gig__c", {

            Title__c: req.body.title,
            Budget__c: Number(req.body.budget),
            Experience_Level__c: req.body.experience,
            Status__c: req.body.status,
            Remote__c: req.body.remote,
            Number_of_Openings__c: Number(req.body.openings)

        });

        res.status(201).json(result);

    } catch (err) {

        console.log(err.response?.data || err.message);

        res.status(500).json(
            err.response?.data || err.message
        );

    }

};

// ================= UPDATE GIG =================

const updateGig = async (req, res) => {

    try {

        await updateRecord(

            "Gig__c",

            req.params.id,

            {

                Title__c: req.body.title,

                Budget__c: Number(req.body.budget),

                Status__c: req.body.status,

                Experience_Level__c: req.body.experience,

                Remote__c: req.body.remote,

                Number_of_Openings__c: Number(req.body.openings)

            }

        );

        res.json({

            success: true,
            message: "Gig Updated Successfully"

        });

    } catch (err) {

        console.log(err.response?.data || err.message);

        res.status(500).json(
            err.response?.data || err.message
        );

    }

};

// ================= DELETE GIG =================

const deleteGig = async (req, res) => {

    try {

        await deleteRecord(

            "Gig__c",

            req.params.id

        );

        res.json({

            success: true,
            message: "Gig Deleted Successfully"

        });

    } catch (err) {

        console.log(err.response?.data || err.message);

        res.status(500).json(
            err.response?.data || err.message
        );

    }

};

module.exports = {

    getGigs,
    createGig,
    updateGig,
    deleteGig

};