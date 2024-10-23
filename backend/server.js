const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001; // or any other port

app.use(express.json());
app.use(cors());


// Sample inventory data (could be replaced with a database)
// let inventory = [
//     {
//         "id": 1,
//         "name": "Blue Jeff",
//         "images": ["/images/BLUE-JEFF.png"],
//         "description": "A wild BLUE JEFF appears...",
//         "price": 19.99,
//         "sizes": {
//             "XS": 5,
//             "S": 5,
//             "M": 5,
//             "L": 5,
//             "XL": 5,
//             "XXL": 5,
//             "XXXL": 5
//         }
//     },
//     {
//         "id": 2,
//         "name": "Gore Logo",
//         "images": ["/images/GORE-LOGO.png"],
//         "description": "BAPTIZED...IN BLOOD!",
//         "price": 19.99,
//         "sizes": {
//             "XS": 5,
//             "S": 5,
//             "M": 5,
//             "L": 5,
//             "XL": 5,
//             "XXL": 5,
//             "XXXL": 5
//         }
//     },
//     {
//         "id": 3,
//         "name": "Snake Skull",
//         "images": ["/images/snake-skull.png"],
//         "description": "Salvadora Maldevera",
//         "price": 19.99,
//         "sizes": {
//             "XS": 5,
//             "S": 5,
//             "M": 5,
//             "L": 5,
//             "XL": 5,
//             "XXL": 5,
//             "XXXL": 5
//         }
//     },
//     {
//         "id": 4,
//         "name": "From Man To Mist",
//         "images": ["/images/man2mist-FRONT.png"],
//         "description": "From Man To Mist",
//         "price": 29.99,
//         "sizes": {
//             "XS": 5,
//             "S": 5,
//             "M": 5,
//             "L": 5,
//             "XL": 5,
//             "XXL": 5,
//             "XXXL": 5
//         }
//     }
// ];

let inventory = [
    {
        "id": 1,
        "name": "Blue Jeff - XS",
        "images": ["/images/BLUE-JEFF.png"],
        "description": "A wild BLUE JEFF appears...",
        "price": 19.99,
        "size": "XS",
        "quantity": 5
    },
    {
        "id": 2,
        "name": "Blue Jeff - S",
        "images": ["/images/BLUE-JEFF.png"],
        "description": "A wild BLUE JEFF appears...",
        "price": 19.99,
        "size": "S",
        "quantity": 5
    },
    {
        "id": 3,
        "name": "Blue Jeff - M",
        "images": ["/images/BLUE-JEFF.png"],
        "description": "A wild BLUE JEFF appears...",
        "price": 19.99,
        "size": "M",
        "quantity": 5
    },
    {
        "id": 4,
        "name": "Blue Jeff - L",
        "images": ["/images/BLUE-JEFF.png"],
        "description": "A wild BLUE JEFF appears...",
        "price": 19.99,
        "size": "L",
        "quantity": 5
    },
    {
        "id": 5,
        "name": "Blue Jeff - XL",
        "images": ["/images/BLUE-JEFF.png"],
        "description": "A wild BLUE JEFF appears...",
        "price": 19.99,
        "size": "XL",
        "quantity": 5
    },
    {
        "id": 6,
        "name": "Blue Jeff - XXL",
        "images": ["/images/BLUE-JEFF.png"],
        "description": "A wild BLUE JEFF appears...",
        "price": 19.99,
        "size": "XXL",
        "quantity": 5
    },
    {
        "id": 7,
        "name": "Blue Jeff - XXXL",
        "images": ["/images/BLUE-JEFF.png"],
        "description": "A wild BLUE JEFF appears...",
        "price": 19.99,
        "size": "XXXL",
        "quantity": 5
    },
    {
        "id": 8,
        "name": "Gore Logo - XS",
        "images": ["/images/GORE-LOGO.png"],
        "description": "BAPTIZED...IN BLOOD!",
        "price": 19.99,
        "size": "XS",
        "quantity": 5
    },
    {
        "id": 9,
        "name": "Gore Logo - S",
        "images": ["/images/GORE-LOGO.png"],
        "description": "BAPTIZED...IN BLOOD!",
        "price": 19.99,
        "size": "S",
        "quantity": 5
    },
    {
        "id": 10,
        "name": "Gore Logo - M",
        "images": ["/images/GORE-LOGO.png"],
        "description": "BAPTIZED...IN BLOOD!",
        "price": 19.99,
        "size": "M",
        "quantity": 5
    },
    {
        "id": 11,
        "name": "Gore Logo - L",
        "images": ["/images/GORE-LOGO.png"],
        "description": "BAPTIZED...IN BLOOD!",
        "price": 19.99,
        "size": "L",
        "quantity": 5
    },
    {
        "id": 12,
        "name": "Gore Logo - XL",
        "images": ["/images/GORE-LOGO.png"],
        "description": "BAPTIZED...IN BLOOD!",
        "price": 19.99,
        "size": "XL",
        "quantity": 5
    },
    {
        "id": 13,
        "name": "Gore Logo - XXL",
        "images": ["/images/GORE-LOGO.png"],
        "description": "BAPTIZED...IN BLOOD!",
        "price": 19.99,
        "size": "XXL",
        "quantity": 5
    },
    {
        "id": 14,
        "name": "Gore Logo - XXXL",
        "images": ["/images/GORE-LOGO.png"],
        "description": "BAPTIZED...IN BLOOD!",
        "price": 19.99,
        "size": "XXXL",
        "quantity": 5
    },
    {
        "id": 15,
        "name": "Snake Skull - XS",
        "images": ["/images/snake-skull.png"],
        "description": "Salvadora Maldevera",
        "price": 19.99,
        "size": "XS",
        "quantity": 5
    },
    {
        "id": 16,
        "name": "Snake Skull - S",
        "images": ["/images/snake-skull.png"],
        "description": "Salvadora Maldevera",
        "price": 19.99,
        "size": "S",
        "quantity": 5
    },
    {
        "id": 17,
        "name": "Snake Skull - M",
        "images": ["/images/snake-skull.png"],
        "description": "Salvadora Maldevera",
        "price": 19.99,
        "size": "M",
        "quantity": 5
    },
    {
        "id": 18,
        "name": "Snake Skull - L",
        "images": ["/images/snake-skull.png"],
        "description": "Salvadora Maldevera",
        "price": 19.99,
        "size": "L",
        "quantity": 5
    },
    {
        "id": 19,
        "name": "Snake Skull - XL",
        "images": ["/images/snake-skull.png"],
        "description": "Salvadora Maldevera",
        "price": 19.99,
        "size": "XL",
        "quantity": 5
    },
    {
        "id": 20,
        "name": "Snake Skull - XXL",
        "images": ["/images/snake-skull.png"],
        "description": "Salvadora Maldevera",
        "price": 19.99,
        "size": "XXL",
        "quantity": 5
    },
    {
        "id": 21,
        "name": "Snake Skull - XXXL",
        "images": ["/images/snake-skull.png"],
        "description": "Salvadora Maldevera",
        "price": 19.99,
        "size": "XXXL",
        "quantity": 5
    },
    {
        "id": 22,
        "name": "From Man To Mist - XS",
        "images": ["/images/man2mist-FRONT.png"],
        "description": "From Man To Mist",
        "price": 29.99,
        "size": "XS",
        "quantity": 5
    },
    {
        "id": 23,
        "name": "From Man To Mist - S",
        "images": ["/images/man2mist-FRONT.png"],
        "description": "From Man To Mist",
        "price": 29.99,
        "size": "S",
        "quantity": 5
    },
    {
        "id": 24,
        "name": "From Man To Mist - M",
        "images": ["/images/man2mist-FRONT.png"],
        "description": "From Man To Mist",
        "price": 29.99,
        "size": "M",
        "quantity": 5
    },
    {
        "id": 25,
        "name": "From Man To Mist - L",
        "images": ["/images/man2mist-FRONT.png"],
        "description": "From Man To Mist",
        "price": 29.99,
        "size": "L",
        "quantity": 5
    },
    {
        "id": 26,
        "name": "From Man To Mist - XL",
        "images": ["/images/man2mist-FRONT.png"],
        "description": "From Man To Mist",
        "price": 29.99,
        "size": "XL",
        "quantity": 5
    },
    {
        "id": 27,
        "name": "From Man To Mist - XXL",
        "images": ["/images/man2mist-FRONT.png"],
        "description": "From Man To Mist",
        "price": 29.99,
        "size": "XXL",
        "quantity": 5
    },
    {
        "id": 28,
        "name": "From Man To Mist - XXXL",
        "images": ["/images/man2mist-FRONT.png"],
        "description": "From Man To Mist",
        "price": 29.99,
        "size": "XXXL",
        "quantity": 5
    }
];


// Endpoint to get inventory
app.get('/api/inventory', (req, res) => {
    res.json(inventory);
});

// Endpoint to decrement item size quantity
app.post('/api/cart', (req, res) => {
    const { itemId, selectedSize } = req.body;

    // Find item and decrement size quantity
    const item = inventory.find(i => i.id === itemId);
    if (item && item.sizes[selectedSize] > 0) {
        item.sizes[selectedSize] -= 1;
        res.status(200).json({ success: true, item });
    } else {
        res.status(400).json({ success: false, message: "Out of stock" });
    }
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
