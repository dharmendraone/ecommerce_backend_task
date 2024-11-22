require('dotenv').config();
const mongoose = require('mongoose');
const Category = require('./models/Category');
const Product = require('./models/Product');

const seedDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected');

    // Clear existing data
    await Category.deleteMany();
    await Product.deleteMany();

    // Create categories
    const electronics = await Category.create({ name: 'Electronics', description: 'Devices and gadgets' });
    const clothing = await Category.create({ name: 'Clothing', description: 'Apparel and accessories' });

    // Create products
    await Product.create([
      { name: 'Smartphone', price: 699, stock: 50, categoryId: electronics._id },
      { name: 'Laptop', price: 999, stock: 30, categoryId: electronics._id },
      { name: 'T-Shirt', price: 19.99, stock: 100, categoryId: clothing._id },
      { name: 'Jeans', price: 39.99, stock: 75, categoryId: clothing._id }
      
    ]);

    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedDatabase();