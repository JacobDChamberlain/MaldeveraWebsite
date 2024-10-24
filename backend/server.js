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

// Function to write the updated inventory back to the file
function writeInventory(inventory) {
    fs.writeFileSync('./inventory.json', JSON.stringify(inventory, null, 2), 'utf-8');
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

// Endpoint to decrement multiple item quantities
app.post('/api/purchase', (req, res) => {
    const itemsToPurchase = req.body; // Array of objects { id, quantity }
    let inventory = readInventory();
    const purchasedItems = [];

    for (const { id, quantity } of itemsToPurchase) {
        // Find the item in the inventory
        const itemIndex = inventory.findIndex(i => i.id === id);

        if (itemIndex !== -1 && inventory[itemIndex].stock >= quantity) {
            // Decrement the item's stock
            inventory[itemIndex].stock -= quantity;

            // Add the item to the list of purchased items
            purchasedItems.push({
                id,
                name: inventory[itemIndex].name,
                quantity
            });
        } else {
            return res.status(400).json({ success: false, message: `Requested quantity not available for ${inventory[itemIndex].name}` });
        }
    }

    // Save the updated inventory back to the file
    writeInventory(inventory);

    // Return the list of purchased items
    res.status(200).json({ success: true, purchasedItems });
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
