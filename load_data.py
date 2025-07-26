import pandas as pd
import sqlite3

# Connect to SQLite DB
conn = sqlite3.connect("ecommerce.db")

# Load CSV files
products = pd.read_csv("products.csv")
orders = pd.read_csv("orders.csv")

# Write to DB
products.to_sql("products", conn, if_exists="replace", index=False)
orders.to_sql("orders", conn, if_exists="replace", index=False)

print("✅ Data loaded successfully into ecommerce.db")