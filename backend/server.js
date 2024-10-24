const express = require('express');
const cors = require('cors');
const { sequelize, Item } = require('./models'); // Import Sequelize instance and Item model
const app = express();
const port = 5001;

app.use(express.json());
app.use(cors());


// Endpoint to get inventory
app.get('/api/inventory', async (req, res) => {
    try {
        const inventory = await Item.findAll(); // Fetch all items from the database
        res.json(inventory);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch inventory', error: error.message });
    }
});

// Endpoint to get an item by ID
app.get('/api/inventory/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Item.findByPk(id); // Find an item by its primary key (ID)

        if (!item) {
            return res.status(404).json({ success: false, message: 'Item not found' });
        }

        res.json(item);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch item', error: error.message });
    }
});

// Endpoint to decrement multiple item quantities
app.post('/api/purchase', async (req, res) => {
    const itemsToPurchase = req.body; // Array of objects { id, quantity }
    const purchasedItems = [];

    try {
        for ( let item of itemsToPurchase ) {
            if (item.quantity < 1 ) {
                throw new Error("Invalid item quantity");
            }
        }

        // Use a transaction to ensure atomicity
        await sequelize.transaction(async (t) => {
            for (const { id, quantity } of itemsToPurchase) {
                const item = await Item.findByPk(id, { transaction: t });

                if (!item || item.stock < quantity) {
                    throw new Error(`Requested quantity not available for ${item ? item.name : 'Unknown item'}`);
                }

                // Decrement the item's stock
                item.stock -= quantity;
                await item.save({ transaction: t });

                // Add the item to the list of purchased items
                purchasedItems.push({
                    id: item.id,
                    name: item.name,
                    quantity
                });
            }
        });

        // Return the list of purchased items
        res.status(200).json({ success: true, purchasedItems });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
