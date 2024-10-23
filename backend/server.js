const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 5001;

app.use(express.json());
app.use(cors());

// Function to read the inventory data from the file
function readInventory() {
    const data = fs.readFileSync('./inventory.json', 'utf-8');
    return JSON.parse(data);
}

// Endpoint to get inventory
app.get('/api/inventory', (req, res) => {
    const inventory = readInventory();
    res.json(inventory);
});

// Endpoint to get an item by ID
app.get('/api/inventory/:id', (req, res) => {
    const { id } = req.params;
    const inventory = readInventory();
    const item = inventory.find(i => i.id === id);
    res.json(item);
});

// Endpoint to decrement item quantity
app.post('/api/cart', (req, res) => {
    const { itemId, quantity } = req.body;
    let inventory = readInventory();

    // Find the item and check if the requested quantity is available
    const itemIndex = inventory.findIndex(i => i.id === itemId);
    if (itemIndex !== -1 && inventory[itemIndex].quantity >= quantity) {
        inventory[itemIndex].quantity -= quantity;

        // Save the updated inventory back to the file
        fs.writeFileSync('./inventory.json', JSON.stringify(inventory, null, 2), 'utf-8');
        res.status(200).json({ success: true, item: inventory[itemIndex], quantity });
    } else {
        res.status(400).json({ success: false, message: "Requested quantity not available" });
    }
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
