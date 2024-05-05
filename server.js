const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.post("/submit-order", (req, res) => {
  const { itemName, quantity, price } = req.body;
  const totalAmount = parseInt(quantity) * parseFloat(price);

  res.send(`<h1>Order Confirmation</h1>
              <p>Thank you for your order of ${quantity} ${itemName}(s)!</p>
              <p>Total Amount: $${totalAmount.toFixed(2)}</p>`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
