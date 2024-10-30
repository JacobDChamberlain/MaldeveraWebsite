'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('items', [
      {
        "id": 1,
        "name": "Blue Jeff - XS",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/BLUE-JEFF.png"
        ],
        "description": "A wild BLUE JEFF appears...",
        "price": 19.99,
        "size": "XS",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 2,
        "name": "Blue Jeff - S",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/BLUE-JEFF.png"
        ],
        "description": "A wild BLUE JEFF appears...",
        "price": 19.99,
        "size": "S",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 3,
        "name": "Blue Jeff - M",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/BLUE-JEFF.png"
        ],
        "description": "A wild BLUE JEFF appears...",
        "price": 19.99,
        "size": "M",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 4,
        "name": "Blue Jeff - L",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/BLUE-JEFF.png"
        ],
        "description": "A wild BLUE JEFF appears...",
        "price": 19.99,
        "size": "L",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 5,
        "name": "Blue Jeff - XL",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/BLUE-JEFF.png"
        ],
        "description": "A wild BLUE JEFF appears...",
        "price": 19.99,
        "size": "XL",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 6,
        "name": "Blue Jeff - XXL",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/BLUE-JEFF.png"
        ],
        "description": "A wild BLUE JEFF appears...",
        "price": 19.99,
        "size": "XXL",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 7,
        "name": "Blue Jeff - XXXL",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/BLUE-JEFF.png"
        ],
        "description": "A wild BLUE JEFF appears...",
        "price": 19.99,
        "size": "XXXL",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 8,
        "name": "Gore Logo - XS",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/GORE-LOGO.png"
        ],
        "description": "BAPTIZED...IN BLOOD!",
        "price": 19.99,
        "size": "XS",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 9,
        "name": "Gore Logo - S",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/GORE-LOGO.png"
        ],
        "description": "BAPTIZED...IN BLOOD!",
        "price": 19.99,
        "size": "S",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 10,
        "name": "Gore Logo - M",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/GORE-LOGO.png"
        ],
        "description": "BAPTIZED...IN BLOOD!",
        "price": 19.99,
        "size": "M",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 11,
        "name": "Gore Logo - L",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/GORE-LOGO.png"
        ],
        "description": "BAPTIZED...IN BLOOD!",
        "price": 19.99,
        "size": "L",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 12,
        "name": "Gore Logo - XL",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/GORE-LOGO.png"
        ],
        "description": "BAPTIZED...IN BLOOD!",
        "price": 19.99,
        "size": "XL",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 13,
        "name": "Gore Logo - XXL",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/GORE-LOGO.png"
        ],
        "description": "BAPTIZED...IN BLOOD!",
        "price": 19.99,
        "size": "XXL",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 14,
        "name": "Gore Logo - XXXL",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/GORE-LOGO.png"
        ],
        "description": "BAPTIZED...IN BLOOD!",
        "price": 19.99,
        "size": "XXXL",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 15,
        "name": "Snake Skull - XS",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/snake-skull.png"
        ],
        "description": "Salvadora Maldevera",
        "price": 19.99,
        "size": "XS",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 16,
        "name": "Snake Skull - S",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/snake-skull.png"
        ],
        "description": "Salvadora Maldevera",
        "price": 19.99,
        "size": "S",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 17,
        "name": "Snake Skull - M",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/snake-skull.png"
        ],
        "description": "Salvadora Maldevera",
        "price": 19.99,
        "size": "M",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 18,
        "name": "Snake Skull - L",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/snake-skull.png"
        ],
        "description": "Salvadora Maldevera",
        "price": 19.99,
        "size": "L",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 19,
        "name": "Snake Skull - XL",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/snake-skull.png"
        ],
        "description": "Salvadora Maldevera",
        "price": 19.99,
        "size": "XL",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 20,
        "name": "Snake Skull - XXL",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/snake-skull.png"
        ],
        "description": "Salvadora Maldevera",
        "price": 19.99,
        "size": "XXL",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 21,
        "name": "Snake Skull - XXXL",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/snake-skull.png"
        ],
        "description": "Salvadora Maldevera",
        "price": 19.99,
        "size": "XXXL",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 22,
        "name": "From Man To Mist - XS",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/man2mist-FRONT.png"
        ],
        "description": "From Man To Mist",
        "price": 29.99,
        "size": "XS",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 23,
        "name": "From Man To Mist - S",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/man2mist-FRONT.png"
        ],
        "description": "From Man To Mist",
        "price": 29.99,
        "size": "S",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 24,
        "name": "From Man To Mist - M",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/man2mist-FRONT.png"
        ],
        "description": "From Man To Mist",
        "price": 29.99,
        "size": "M",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 25,
        "name": "From Man To Mist - L",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/man2mist-FRONT.png"
        ],
        "description": "From Man To Mist",
        "price": 29.99,
        "size": "L",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 26,
        "name": "From Man To Mist - XL",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/man2mist-FRONT.png"
        ],
        "description": "From Man To Mist",
        "price": 29.99,
        "size": "XL",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 27,
        "name": "From Man To Mist - XXL",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/man2mist-FRONT.png"
        ],
        "description": "From Man To Mist",
        "price": 29.99,
        "size": "XXL",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "id": 28,
        "name": "From Man To Mist - XXXL",
        "images": [
          "https://pub-66308e1fd62346cc9ef2c3cfc4134db4.r2.dev/man2mist-FRONT.png"
        ],
        "description": "From Man To Mist",
        "price": 29.99,
        "size": "XXXL",
        "stock": 5,
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('items', null, {});
  }
};
