const {
    querySalesforce,
    createRecord,
    updateRecord,
    deleteRecord
} = require("../services/salesforceService");

// ================= GET REVIEWS =================

const getReviews = async (req, res) => {

    try {

        const reviews = await querySalesforce(`

            SELECT

                Id,
                Name,
                Rating__c,
                Feedback__c,
                Review_Date__c,
                Would_Recommend__c,
                Freelancer_Profile__r.Name,
                Contract__r.Name

            FROM Review__c

            ORDER BY CreatedDate DESC

        `);

        res.json(reviews);

    }

    catch (err) {

        console.log(err.response?.data || err.message);

        res.status(500).json(

            err.response?.data || err.message

        );

    }

};

// ================= CREATE REVIEW =================

const createReview = async (req, res) => {

    try {

        const result = await createRecord(

            "Review__c",

            {

                Contract__c: req.body.contractId,

                Freelancer_Profile__c: req.body.freelancerId,

                Rating__c: Number(req.body.rating),

                Feedback__c: req.body.feedback,

                Review_Date__c: req.body.reviewDate,

                Would_Recommend__c: req.body.recommend

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

// ================= UPDATE REVIEW =================

const updateReview = async (req, res) => {

    try {

        await updateRecord(

            "Review__c",

            req.params.id,

            {

                Rating__c: Number(req.body.rating),

                Feedback__c: req.body.feedback,

                Review_Date__c: req.body.reviewDate,

                Would_Recommend__c: req.body.recommend

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

// ================= DELETE REVIEW =================

const deleteReview = async (req, res) => {

    try {

        await deleteRecord(

            "Review__c",

            req.params.id

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

    getReviews,
    createReview,
    updateReview,
    deleteReview

};