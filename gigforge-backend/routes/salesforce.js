const express = require("express");
const router = express.Router();

// ==========================================================
// GIG CONTROLLER
// ==========================================================

const {
    getGigs,
    createGig,
    updateGig,
    deleteGig
} = require("../controllers/gigController");

// ==========================================================
// DASHBOARD CONTROLLER
// ==========================================================

const {
    getClientDashboard
} = require("../controllers/dashboardController");

// ==========================================================
// APPLICATION CONTROLLER
// ==========================================================

const {
    applyForGig,
    getApplications,
    getAllApplications,
    updateApplicationStatus
} = require("../controllers/applicationController");

// ==========================================================
// CONTRACT CONTROLLER
// ==========================================================

const {
    getContracts,
    createContract,
    updateContract,
    deleteContract
} = require("../controllers/contractController");

// ==========================================================
// PAYMENT CONTROLLER
// ==========================================================

const {
    getPayments,
    createPayment,
    updatePayment,
    deletePayment
} = require("../controllers/paymentController");

// ==========================================================
// REVIEW CONTROLLER
// ==========================================================

const {
    getReviews,
    createReview,
    updateReview,
    deleteReview
} = require("../controllers/reviewController");

// ==========================================================
// DASHBOARD ROUTES
// ==========================================================

router.get("/dashboard/client", getClientDashboard);

// ==========================================================
// GIG ROUTES
// ==========================================================

router.get("/gigs", getGigs);

router.post("/gigs", createGig);

router.put("/gigs/:id", updateGig);

router.delete("/gigs/:id", deleteGig);

// ==========================================================
// APPLICATION ROUTES
// ==========================================================

router.post("/applications", applyForGig);

router.get("/applications", getAllApplications);

router.get("/applications/:gigId", getApplications);

router.put("/applications/:id", updateApplicationStatus);

// ==========================================================
// CONTRACT ROUTES
// ==========================================================

router.get("/contracts", getContracts);

router.post("/contracts", createContract);

router.put("/contracts/:id", updateContract);

router.delete("/contracts/:id", deleteContract);

// ==========================================================
// PAYMENT ROUTES
// ==========================================================

router.get("/payments", getPayments);

router.post("/payments", createPayment);

router.put("/payments/:id", updatePayment);

router.delete("/payments/:id", deletePayment);

// ==========================================================
// REVIEW ROUTES
// ==========================================================

router.get("/reviews", getReviews);

router.post("/reviews", createReview);

router.put("/reviews/:id", updateReview);

router.delete("/reviews/:id", deleteReview);

module.exports = router;