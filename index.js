// index.js
import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";
import ReviewRoute from "./routes/ReviewRoutes.js";
import UserRoute from "./routes/UserRoute.js";
import CustomerRoute from "./routes/CustomerRoute.js";
import PromoRoute from "./routes/PromoRoutes.js";
import db from "./config/Database.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);
app.use(ReviewRoute);
app.use(UserRoute);
app.use(CustomerRoute);
app.use(PromoRoute);

db.getConnection()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Failed to connect to database:", err);
  });

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
