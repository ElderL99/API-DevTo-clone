require("dotenv").config();
const server = require("./src/server");
const db = require("./src/lib/Db/db");

const port = process.env.port || 4000;

db.connect()
  .then(() => {
    console.log(`DB connected successfully 🎉`);
  })
  .catch((error) => {
    console.log(`DB connection faild ${error}`);
  });

server.listen(port, () => {
  console.log(`server runing on port${port} 👌`);
});
