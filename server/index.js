const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database:"inventario_crud",
});

app.post("/create", (req, res)=>{
    const product =req.body.product;
    const amount = req.body.amount;
    const price = req.body.price;

    db.query("INSERT INTO productos inventario(producto,amount,price) VALUE (?,?,?)", [product,amount,price],
    
    (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Producto añadido con exito!")
        }
    }
    ); 
});

app.listen(3001, ()=>{
    console.log("Corriendo en el puerto 3001")
})