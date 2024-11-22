# 🚀 E-Commerce Backend Project

Welcome to my E-Commerce backend project! This is a simple backend service to manage Products and Categories for an online store.

## **What I Built:**

### **1. Database Design**
I created two main parts (schemas) using Mongoose:

- **Category Schema:**
  - `_id`: Unique ID (auto-generated)
  - `name`: The name of the category (must be unique and is required)
  - `description`: A short description of the category

- **Product Schema:**
  - `_id`: Unique ID (auto-generated)
  - `name`: The name of the product (required)
  - `price`: The price of the product (must be a positive number and required)
  - `stock`: How many items are in stock (required, default is 0)
  - `categoryId`: The ID of the category this product belongs to (required)

### **2. API Features**
I made some cool APIs to manage everything:

- **Category APIs:**
  - Create a new Category
  - Get all Categories
  - Get a specific Category (and its Products)
  - Update a Category
  - Delete a Category (Products will just be marked as uncategorized)

- **Product APIs:**
  - Create a new Product
  - Get all Products
  - Get a specific Product (and its Category)
  - Update a Product
  - Delete a Product

### **3. Validation Rules**
- Category names need to be unique.
- Product prices have to be positive.
- Stock can't be negative.

### **4. Hosting**
I deployed the project on a cloud platform (like Render, Vercel, or Heroku) so you can access it online!

---

## **How to Set It Up Locally:**

If you want to run this project on your own machine, here’s how:

```bash
# Clone the repository
git clone https://github.com/yourusername/ecommerce-backend.git
cd ecommerce-backend

# Install the dependencies
npm install
# or
yarn install

# Set up your environment
echo "MONGODB_URI=your_mongodb_uri" > .env

# Start the server
npm start
# or
yarn start

# Test the APIs using Postman or your web browser.

### Explanation:
- I placed all the setup commands in a single code block under the "How to Set It Up Locally" section.
- The commands are prefixed with comments to explain each step, making it clear what each command does.
- You can replace `yourusername` and `your_mongodb_uri` with your actual GitHub username and MongoDB connection string.

This format will help users easily copy all commands at once for their setup!
