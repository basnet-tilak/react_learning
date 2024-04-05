
import express from 'express'

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
    res.send(`Hello ! ${req.body.name}`);
    console.log(req.body.name);
});

// get the value from the url,  name is parameter ......... http://localhost:8000/hello/tilak
app.get('/hello/:name',  (req, res) =>{
    const {name} = req.params;
    res.send(`Hello ${name}`)
})

app.listen(8000, () =>{
    console.log(`Server is listening 8000`);
});

