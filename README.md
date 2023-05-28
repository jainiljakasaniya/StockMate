# StockMate

This project aims to develop a stock market portfolio management system with features such as user registration and login, stock portfolio management, an email notification  system, and more. The app will utilize Node.js and Cockroach DB for the backend and a free and open stock market API to retrieve stock price information. The project will follow  coding standards such as a coding style guide, using a linter, writing unit tests, and proper documentation.

## Prerequisites

Make sure you have installed all of the following prerequisites on your machine:
- Node(v18.13.0) - [Download & Install Node.js](https://nodejs.org/en/download)
- CockroachDB(v22.2.8) - [Download & Install CockroachDB](https://www.cockroachlabs.com/docs/v20.1/install-cockroachdb-windows)
- PostgreSQL - [Download & Install PostgreSQL](https://www.postgresql.org/download/)

## Generate API_KEY
- Alpha Vantage - [Create API KEY](https://www.alphavantage.co/)
- Get Symbol - [API](https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo)
- Get Stock Data - [API](https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo)
- Get Stock History - [API](https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IBM&apikey=demo)
- Stock Analysis - [API](https://finnhub.io/docs/api/company-basic-financials)

## Environment Variables
To run this project, you will need to add the environment variables which is listed in .env.example file to your .env file, which will be placed in the .config/ directory.

## Run Project Locally
Clone the project
```sh
$ git clone https://github.com/kirtan18/Stock_Market_Portfolio.git
```
Go to the project directory
```sh
$ cd stock_market_portfolio
```
Install dependencies
```sh
$ npm install
```
Generate API Documentation
```sh
$ npm run docs
```
Start the server
```sh
$ npm start
```

## Tech Stack
- Database: CockroachDB, PostgreSQL
- Server: Node.js, Express.js


## Features
- API integration
- User registration and login
- User password forgot and reset using email notification
- Password security
- Stock search and historical data
- Email notification system


