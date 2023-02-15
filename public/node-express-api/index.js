const express = require("express");
const app = express();
const port = 3000;

app.get("/users", (req, res) => {
    const users = [{
            id: 1,
            name: "ivanilson"
        },
        {
            id: 2,
            name: "Martins"
        },
        {
            id: 3,
            name: "Antonio"
        }
    ]
    res.json(users);
});

app.listen(port, () => {
    console.log(`api running on port ${port}`);
})