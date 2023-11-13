const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "productos-inventario",
});

app.post("/create", (req, res) => {
  const product = req.body.product;
  const amount = req.body.amount;
  const price = req.body.price;

  db.query(
    "INSERT INTO productos_inventario(product,amount,price) VALUES (?,?,?)",
    [product, amount, price],

    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error al añador el producto");
      } else {
        res.send("Producto añadido con exito!");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Corriendo en el puerto 3001");
});
