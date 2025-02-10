const alcoholList = [
  { "id": 1, "name": "Whiskey Classic", "price": 39.99, "rating": 4.8, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 2, "name": "RED WINE MERLOT", "price": 25.49, "rating": 4.5, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 3, "name": "Craft Beer IPA", "price": 9.99, "rating": 4.2, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 4, "name": "Premium Vodka", "price": 45.99, "rating": 4.9, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 5, "name": "Rum Caribbean Gold", "price": 32.99, "rating": 4.6, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 6, "name": "Champagne Sparkle", "price": 55.00, "rating": 4.8, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 7, "name": "Tequila Silver", "price": 29.99, "rating": 4.3, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 8, "name": "Gin Botanical", "price": 35.49, "rating": 4.7, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 9, "name": "Cider Apple Bliss", "price": 12.99, "rating": 4.1, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 10, "name": "Scotch Highland Reserve", "price": 59.99, "rating": 4.9, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 11, "name": "Rosé Summer Glow", "price": 22.49, "rating": 4.4, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 12, "name": "Brandy XO Select", "price": 48.99, "rating": 4.7, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 13, "name": "Lager Crisp Light", "price": 8.99, "rating": 4.0, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 14, "name": "Port Royal Sweet", "price": 27.49, "rating": 4.5, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 15, "name": "Mead Honey Brew", "price": 19.99, "rating": 4.3, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 16, "name": "Absinthe Emerald Flame", "price": 62.99, "rating": 4.8, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 17, "name": "Sherry Dry Classic", "price": 24.99, "rating": 4.2, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 18, "name": "Bourbon Oak Barrel", "price": 49.99, "rating": 4.9, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 19, "name": "Beer Pale Ale", "price": 10.99, "rating": 4.1, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" },
  { "id": 20, "name": "Sake Rice Delight", "price": 33.99, "rating": 4.6, "fileImage": "https://product.hstatic.net/200000506575/product/ruou-vang-pierre-larousse-chardonnay-brut_26bba48ac40e41ce89e5d2f528d2c5ec_large.jpg" }
]


export default alcoholList
