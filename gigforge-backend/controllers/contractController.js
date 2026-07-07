const {
    querySalesforce,
    createRecord,
    updateRecord,
    deleteRecord
} = require("../services/salesforceService");

// ================= GET ALL CONTRACTS =================

const getContracts = async (req, res) => {

    try {

        const contracts = await querySalesforce(`

            SELECT

                Id,
                Name,
                Gig__r.Title__c,
                Application__r.Name,
                Contract_Amount__c,
                Start_Date__c,
                End_Date__c,
                Payment_Terms__c,
                Status__c,
                Client_Signature__c,
                Freelancer_Signature__c,
                Contract_Document__c

            FROM Contract__c

            ORDER BY CreatedDate DESC

        `);

        res.json(contracts);

    }

    catch (err) {

        console.log(err.response?.data || err.message);

        res.status(500).json(err.response?.data || err.message);

    }

};

// ================= CREATE CONTRACT =================

const createContract = async (req, res) => {

    try {

        const result = await createRecord(

            "Contract__c",

            {

                Gig__c: req.body.gigId,

                Application__c: req.body.applicationId,

                Contract_Amount__c: Number(req.body.amount),

                Start_Date__c: req.body.startDate,

                End_Date__c: req.body.endDate,

                Payment_Terms__c: req.body.paymentTerms,

                Status__c: req.body.status,

                Client_Signature__c: false,

                Freelancer_Signature__c: false

            }

        );

        res.status(201).json(result);

    }

    catch (err) {

        console.log(err.response?.data || err.message);

        res.status(500).json(err.response?.data || err.message);

    }

};

// ================= UPDATE CONTRACT =================

const updateContract = async (req, res) => {

    try {

        await updateRecord(

            "Contract__c",

            req.params.id,

            {

                Contract_Amount__c: Number(req.body.amount),

                Start_Date__c: req.body.startDate,

                End_Date__c: req.body.endDate,

                Payment_Terms__c: req.body.paymentTerms,

                Status__c: req.body.status,

                Client_Signature__c: req.body.clientSignature,

                Freelancer_Signature__c: req.body.freelancerSignature,

                Contract_Document__c: req.body.document

            }

        );

        res.json({

            success: true

        });

    }

    catch (err) {

        console.log(err.response?.data || err.message);

        res.status(500).json(err.response?.data || err.message);

    }

};

// ================= DELETE CONTRACT =================

const deleteContract = async (req, res) => {

    try {

        await deleteRecord(

            "Contract__c",

            req.params.id

        );

        res.json({

            success: true

        });

    }

    catch (err) {

        console.log(err.response?.data || err.message);

        res.status(500).json(err.response?.data || err.message);

    }

};

module.exports = {

    getContracts,
    createContract,
    updateContract,
    deleteContract

};