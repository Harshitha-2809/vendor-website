const express = require('express');
const router = express.Router();
const { getAllVendors, saveDraft, publishVendor, getVendorByShopname } = require('../controllers/vendorController');

router.get('/', getAllVendors);
router.post('/save-draft', saveDraft);
router.post('/publish/:shopname', publishVendor);
router.get('/:shopname', getVendorByShopname);

module.exports = router;
