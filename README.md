# Crypto-Exchange Api Backend

เป็นโปรแกรมที่เขียนด้วย Node.js ในการเรียกและรับคำสั่งจากหลังบ้านและ ใช้ MongoDB ในการเก็บ Database โดยมีการเขียนอ้างอิงจาก ER Diagram โดยมีการทำงานตั้งแต่การรับข้อมูลผู้ใช้ การสร้างกระเป๋า Crypto currency การ Order ซื้อขาย และเก็บประวัติ Transection

It’s a program written in Node.js that calls and receives commands from the backend and uses MongoDB to store the database, with its structure based on an ER Diagram. It handles processes starting from receiving user data, creating cryptocurrency wallets, placing buy/sell orders, and storing transaction history.

# Table of Content

[Installation](#Installation)
[How to run](#how-to-run)
[Testing API](#testing-api)
[System Structure](#system-structure)

# Installation

```
git clone

Install Node.js  

Install MongoDB Community Edition
```

# How to run
```
node seed/seed.js

node app.js
```
# Testing API
use post man to Test the API

Create user
```
POST /api/users
```
Body:
```
</> JSON
{  
"username": "testuser",  
"email": "test@mail.com",
"paswordHash": "1234"  
}
```
ดูผู้ใช้ทั้งหมด (พร้อม Wallet)
```
GET /api/users
```
Wallets
```
POST /api/wallets // เตืมเงินไปใน Wallet

GET /api/wallets
```
Orders
create order BUY/SELL
```
POST /api/orders
```
Body:
```
</> JSON
{  
"username": "testuser",  
"type": "BUY",  
"baseCurrency": "BTC",  
"quoteCurrency": "THB",  
"amount": 0.1,  
"price": 1500000  
}
```

# System Structure

Folder Structure
```
Crypto Exchange/  
│  
├── app.js  
├── package.json  
├── package-lock.json 
├── node_modules
│  
├── models/  
│ ├── User.js  
│ ├── Currency.js  
│ ├── Wallet.js  
│ ├── Order.js  
│ └── Transfer.js  
│  
├── controllers/  
│ ├── userController.js  
│ ├── walletController.js  
│ ├── orderController.js  
│ └── transferController.js  
│  
├── index.js  
│  
│  
└── seed/  
└── seed.js
```

**Main Entity** 
User
Currency
- CRYPTO (BTC, ETH)
- FIAT (THB, USD)
 
 Wallet
 Order
 Transfer
 
**System on App**

User Registration
Automatic Wallet Creation
Buy and Sell Cryptocurrency
Deposit
Transfer Coins
Transaction Log

## ER Diagram
![ER Diagram](https://lh3.googleusercontent.com/pw/AP1GczMb8I6IVeCuAfufxUI5Hrq2UU9dyQD1gKblxWWb_JS9Bfwmcn-8-CpspUmC218dmX4_PTQRs68ELbecq4zc3cGQuOOXMLaS115aK6RrND8hm0yUTYN7R44JW2zStC-x-ML9XJSuqLY4flxq3nc4dqVo=w999-h925-s-no-gm?authuser=0)

