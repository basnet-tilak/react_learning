
import express from 'express'

const app = express();
app.use(express.json());

let articleInfo =[{
    name: 'react',
    upvotes : 0,
},{
    name: 'node',
    upvotes: 0,
},{
    name: 'mongodb',
    upvotes: 0,
}
]
app.put('/api/articles/:name/upvote', (req, res) =>{
    const {name} = req.params;
    const article = articleInfo.find(a => a.name == name);
    if(article){
        article.upvotes += 1;
        res.send(`The ${name} article now has ${article.upvotes} upvotes!!`);
    }else{
        res.send("That article is doesn\t exit");
    }
});



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

