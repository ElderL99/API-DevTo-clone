require("dotenv").config();

const db = require("./src/lib/Db/db");

db.connect()
  .then(() => {
    console.log(`DB connected successfully 🎉`);
  })
  .catch((error) => {
    console.log(`DB connection faild ${error}`);
  });
