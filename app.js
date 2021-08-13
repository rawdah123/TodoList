const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config()
const { models} = require('./models');
const methodOverride = require('method-override')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
// app.use(express.static('public'));

app.delete('/todo/:id', async (req,res) => {
    console.log(`id params : ${req.params.id}`)
    await models.todo.destroy({ where:  {id : req.params.id}
    })
    res.redirect('/')
})

app.put('/todo/:id', async (req,res) => {
    await models.todo.update({url : req.body.tltle},{
        where : {
            id : req.params.id
        }
     });
     res.redirect('/')

})

app.get('/update/:id', (req,res) => {
    res.render("update.ejs", {
        id : req.params.id
    })
})

app.get('/', async (req,res) => {
    const todo = await models.todo.findAll({})
    res.render('index.ejs', {
        todo: todo
    })
})

app.post('/addTitle', async (req,res) => {
    await models.todo.create({title: req.body.title});
    res.redirect('/')
})


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

