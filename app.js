const express = require('express') 
const app = express()
const path = require ('path')

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res){
    let file = path.resolve('views/index.html')
    res.sendFile(file)
})

app.get('/registro', function (req, res){
    let file = path.resolve('views/registro.html')
    res.sendFile(file)
})

app.get('/login', function (req, res){
    let file = path.resolve('views/login.html')
    res.sendFile(file)
})

app.get('/miscompras', function (req, res){
    let file = path.resolve('views/miscompras.html')
    res.sendFile(file)
})

app.get('*', function(req, res){
    if (req.url.endsWith('.css')){
        let file = path.resolve('styles' + req.url)
        return res.sendFile(file)
    }
    let images = ['jpg', 'jpeg', 'gif', 'png', 'svg'];
    let ext = req.url.split('.')[1];
    if (images.includes(ext)) {
        let file = path.resolve('images' + req.url);
        return res.sendFile(file)
    }

    res.send('Not found')

})
app.listen(4040)

