const {
    querySalesforce,
    createRecord,
    updateRecord,
    deleteRecord
} = require("../services/salesforceService");

// ================= GET PAYMENTS =================

const getPayments = async (req, res) => {

    try {

        const payments = await querySalesforce(`

            SELECT

                Id,
                Name,
                Contract__r.Name,
                Payment_Amount__c,
                Payment_Date__c,
                Payment_Method__c,
                Payment_Status__c,
                Transaction__c

            FROM Payment_C__c

            ORDER BY CreatedDate DESC

        `);

        res.json(payments);

    }

    catch (err) {

        console.log(err.response?.data || err.message);

        res.status(500).json(

            err.response?.data || err.message

        );

    }

};

// ================= CREATE PAYMENT =================

const createPayment = async (req, res) => {

    try {

        const result = await createRecord(

            "Payment_C__c",

            {

                Contract__c: req.body.contractId,

                Payment_Amount__c: Number(req.body.amount),

                Payment_Date__c: req.body.paymentDate,

                Payment_Method__c: req.body.paymentMethod,

                Payment_Status__c: req.body.status,

                Transaction__c: req.body.transactionId

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

// ================= UPDATE PAYMENT =================

const updatePayment = async (req, res) => {

    try {

        await updateRecord(

            "Payment_C__c",

            req.params.id,

            {

                Payment_Amount__c: Number(req.body.amount),

                Payment_Date__c: req.body.paymentDate,

                Payment_Method__c: req.body.paymentMethod,

                Payment_Status__c: req.body.status,

                Transaction__c: req.body.transactionId

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

// ================= DELETE PAYMENT =================

const deletePayment = async (req, res) => {

    try {

        await deleteRecord(

            "Payment_C__c",

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

    getPayments,
    createPayment,
    updatePayment,
    deletePayment

};