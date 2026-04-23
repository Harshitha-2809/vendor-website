const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/vendors.json');

const readData = () => {
    if (!fs.existsSync(dataFilePath)) fs.writeFileSync(dataFilePath, JSON.stringify([]));
    return JSON.parse(fs.readFileSync(dataFilePath));
};

const writeData = (data) => fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

exports.getAllVendors = (req, res) => {
    try {
        res.status(200).json(readData());
    } catch (error) { res.status(500).json({ error: error.message }); }
}

exports.saveDraft = (req, res) => {
    try {
        const vendor = req.body;
        const vendors = readData();
        const slug = vendor.slug || vendor.shopName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        
        const existingIndex = vendors.findIndex(v => v.slug === slug);
        const newVendor = {
            ...vendor,
            slug,
            status: vendor.status || 'draft',
            createdAt: vendor.createdAt || new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        if (existingIndex >= 0) vendors[existingIndex] = { ...vendors[existingIndex], ...newVendor };
        else vendors.push(newVendor);
        
        writeData(vendors);
        res.status(200).json({ message: 'Draft saved successfully', vendor: newVendor });
    } catch (error) { res.status(500).json({ error: error.message }); }
}

exports.publishVendor = (req, res) => {
    try {
        const { shopname } = req.params;
        const vendors = readData();
        const vendorIndex = vendors.findIndex(v => v.slug === shopname);
        
        if (vendorIndex === -1) return res.status(404).json({ message: 'Vendor not found' });
        
        vendors[vendorIndex].status = 'published';
        vendors[vendorIndex].publishedAt = new Date().toISOString();
        
        writeData(vendors);
        res.status(200).json({ message: 'Website published successfully', vendor: vendors[vendorIndex] });
    } catch (error) { res.status(500).json({ error: error.message }); }
}

exports.getVendorByShopname = (req, res) => {
    try {
        const { shopname } = req.params;
        const vendors = readData();
        const vendor = vendors.find(v => v.slug === shopname);
        if (!vendor) return res.status(404).json({ message: 'Vendor not found' });
        res.status(200).json(vendor);
    } catch (error) { res.status(500).json({ error: error.message }); }
}
