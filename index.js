import express from 'express'
const app = express()
const port = 3000

// middleware
app.use(express.json())

const users = [
    {
        id: 1,
        name: "Fahad Ali"
    },
    
    {
        id: 2,
        name: "Muhammad Ali"
    },

];

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// get all users

app.get('/users', (req, res) => {
  res.json(users)
})

// add all users

app.post('/users', (req, res) => {
    const {name} = req.body;
    if (!name) {
        res.json({
            messege: "Name is required"
        })
        return
    }
    users.push({
        id: Date.now(),
        name,
    })
    // console.log(req.body);
    
        res.send({
            messege: "User added succesfully",
            data: users
        });
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})