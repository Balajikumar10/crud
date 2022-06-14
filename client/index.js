const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'cruddatabase'
});


// app.post('/employees', (req, res) => {
//     console.log(req.body);
//     const name = req.body.name
//     const age = req.body.age
//     const country = req.body.country
//     const position = req.body.position
//     const wage = req.body.wage;
//     db.query('Insert into employees(name,age,country,position,wages)values(?,?,?,?,?)',
//         [name, age, country, position],
//         (error, result) => {
//             console.log(result)
//             if (error) {
//                 return res.status(400).send(error);
//                 // console.log(result)
//             } else {
//                 return res.status(200).send("values inserted");
//             }
//         }
//     );
//     db.connect((err) => {
//         if (err) return err;
//         console.log("Connected")

//     });

// });
app.post('/employees', (req, res) => {

    const name = req.body.name
    const age = req.body.age
    const country = req.body.country
    const position = req.body.position
    // const wage = req.body.wage;



    db.query('INSERT INTO employees (name, age, country, position)VALUES(?,?,?,?)',
        [name, age, country, position],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send('Values Inserted')
            }
        }
    )
    db.connect((err) => {

        err ? console.log(err) : console.log("connected");

    })

})

app.get('/callemployes', (req, res) => {
    db.query(`call callemployes ()`), (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    }
})


app.listen(4001, () => {
    console.log("your server is running on port 3001");
});