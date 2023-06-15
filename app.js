const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

// парсинг json req
app.use(express.json());

// получение данных о бд
const db = require("./model");

// синхронизация модели бд с бд
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

// подключение
require("./routers/routers.js")(app);
require("./routers/router2.js")(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

