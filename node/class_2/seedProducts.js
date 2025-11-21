import mongoose from "mongoose";
import Product from "./model/product.js";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URI = process.env.MONGO_URL;

// SELLER IDs
const sellers = {
  s1: "690de6dc87cc201eb94000b0",
  s2: "690de6c687cc201eb94000ae",
  s3: "69201506f50808f92b6fd943",
};

// UNIQUE PRODUCTS FOR EACH SELLER
const products = [
  // Seller 1
  {
    name: "MacBook Air M2",
    category: "Electronics",
    brand: "Apple",
    price: 1299.99,
    stock: 10,
    rating: 4.8,
    description: "Powerful M2 laptop",
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    cloudinaryId: "sample1",
    seller: sellers.s1,
  },
  {
    name: "Canon EOS 1500D DSLR",
    category: "Electronics",
    brand: "Canon",
    price: 699.99,
    stock: 20,
    rating: 4.5,
    description: "Entry-level DSLR",
    imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35c6",
    cloudinaryId: "sample2",
    seller: sellers.s1,
  },
  {
    name: "Nike Air Zoom Pegasus 40",
    category: "Shoes",
    brand: "Nike",
    price: 159.99,
    stock: 15,
    rating: 4.6,
    description: "Premium running shoes",
    imageUrl: "https://images.unsplash.com/photo-1528701800489-20beeb08f935",
    cloudinaryId: "sample3",
    seller: sellers.s1,
  },
  {
    name: "Ray-Ban Aviator",
    category: "Accessories",
    brand: "Ray-Ban",
    price: 199.99,
    stock: 25,
    rating: 4.7,
    description: "Classic sunglasses",
    imageUrl: "https://images.unsplash.com/photo-1511389026070-a14ae610a1be",
    cloudinaryId: "sample4",
    seller: sellers.s1,
  },
  {
    name: "Wildcraft Laptop Backpack",
    category: "Accessories",
    brand: "Wildcraft",
    price: 69.99,
    stock: 30,
    rating: 4.3,
    description: "Durable laptop backpack",
    imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    cloudinaryId: "sample5",
    seller: sellers.s1,
  },

  // Seller 2
  {
    name: "Samsung Galaxy S23 Ultra",
    category: "Electronics",
    brand: "Samsung",
    price: 1199.99,
    stock: 10,
    rating: 4.9,
    description: "High-end Samsung flagship",
    imageUrl: "https://images.unsplash.com/photo-1512499617640-c2f999098c01",
    cloudinaryId: "s2_1",
    seller: sellers.s2,
  },
  {
    name: "HP Pavilion Gaming Laptop",
    category: "Electronics",
    brand: "HP",
    price: 899.99,
    stock: 8,
    rating: 4.4,
    description: "Gaming laptop with GTX GPU",
    imageUrl: "https://images.unsplash.com/photo-1520975922071-a57c5f453f7f",
    cloudinaryId: "s2_2",
    seller: sellers.s2,
  },
  {
    name: "Adidas Ultraboost 22",
    category: "Shoes",
    brand: "Adidas",
    price: 179.99,
    stock: 20,
    rating: 4.8,
    description: "Top comfort running shoes",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552",
    cloudinaryId: "s2_3",
    seller: sellers.s2,
  },
  {
    name: "Puma Sports T-shirt",
    category: "Clothing",
    brand: "Puma",
    price: 29.99,
    stock: 50,
    rating: 4.2,
    description: "Dry fit sports tee",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    cloudinaryId: "s2_4",
    seller: sellers.s2,
  },
  {
    name: "Fossil Chronograph Watch",
    category: "Accessories",
    brand: "Fossil",
    price: 149.99,
    stock: 12,
    rating: 4.7,
    description: "Premium stylish watch",
    imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
    cloudinaryId: "s2_5",
    seller: sellers.s2,
  },

  // Seller 3
  {
    name: "Sony PlayStation 5",
    category: "Gaming",
    brand: "Sony",
    price: 499.99,
    stock: 5,
    rating: 4.9,
    description: "Next-gen gaming console",
    imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35c6",
    cloudinaryId: "s3_1",
    seller: sellers.s3,
  },
  {
    name: "Dell XPS 13",
    category: "Electronics",
    brand: "Dell",
    price: 1399.99,
    stock: 10,
    rating: 4.8,
    description: "Ultra compact premium laptop",
    imageUrl: "https://images.unsplash.com/photo-1520975922071-a57c5f453f7f",
    cloudinaryId: "s3_2",
    seller: sellers.s3,
  },
  {
    name: "Woodland Adventure Shoes",
    category: "Shoes",
    brand: "Woodland",
    price: 129.99,
    stock: 18,
    rating: 4.5,
    description: "Rugged outdoor shoes",
    imageUrl: "https://images.unsplash.com/photo-1528701800489-20beeb08f935",
    cloudinaryId: "s3_3",
    seller: sellers.s3,
  },
  {
    name: "Roadster Denim Jacket",
    category: "Clothing",
    brand: "Roadster",
    price: 59.99,
    stock: 25,
    rating: 4.3,
    description: "Stylish blue denim jacket",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    cloudinaryId: "s3_4",
    seller: sellers.s3,
  },
  {
    name: "American Tourister Travel Bag",
    category: "Accessories",
    brand: "American Tourister",
    price: 89.99,
    stock: 15,
    rating: 4.6,
    description: "Strong and durable travel bag",
    imageUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    cloudinaryId: "s3_5",
    seller: sellers.s3,
  },
];

const start = async () => {
  await mongoose.connect(MONGO_URI);
  console.log("MongoDB Connected");

  await Product.insertMany(products);
  console.log("Inserted 15 UNIQUE products!");

  process.exit();
};

start();
