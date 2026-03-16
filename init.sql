CREATE TABLE IF NOT EXISTS items (
Code TEXT,
Name TEXT,
Quantity REAL,
BuyPrice REAL,
SellRetail REAL,
SellWholesale REAL
);

CREATE TABLE IF NOT EXISTS calls (
CustomerName TEXT,
Mobile TEXT,
CallType TEXT,
Description TEXT
);

CREATE TABLE IF NOT EXISTS invoices (
InvoiceNo TEXT,
CustomerName TEXT,
Total REAL
);
