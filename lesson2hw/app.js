// const fs = require('fs')
// const path = require('path')

// const readStream = fs.createReadStream(path.join(__dirname,'file'));
// readStream.on('data',(chunk)=>{
//     console.log(chunk.toString()) //читаем большие Дата
// })


// const writeStream = fs.createWriteStream(path.join(__dirname, 'fileText.txt'));
// for (let i = 0; i < 250; i++){
//     writeStream.write('NewDATA\n',(err)=>{
//         if (err)
//             console.log(err)
//         throw err
//     })
// }
//создали фалй и записали тудаинфу
// writeStream.end()
//нужно завершать!


// const readStream = fs.createReadStream(path.join(__dirname,'fileText.txt'));
// const writeStream = fs.createWriteStream(path.join(__dirname, 'file'));
// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk, (err) =>{
//         if(err){
//             console.log(err)
//             throw err
//         }
//     })
//     writeStream.end()
//нужно завершать!
// })
//взяли с одного файла и записалив другой ****


//*********************
// const readStream = fs.createReadStream(path.join(__dirname,'fileText.txt'));
// const writeStream = fs.createWriteStream(path.join(__dirname, 'file'));
//
// readStream.pipe(writeStream)
//легкий вариант чтения )***************

//*********************1.05.00
// const express = require('express')
// const app = express()
// const users = [
//     {
//         name:'asd',
//         city:'123'
//     },
//     {
//         name:'asd',
//         city:'123'
//     },
//     {
//         name:'asd',
//         city:'123'
//     }
// ]
// app.get('/login',(req,res)=>{
//     res.json(users)
// })
//***********************1.05.00


            //req-приходит по пути от юзера ( будет лежать тут)   res=Это я Юзеру что то возвращаю
// app.get('/login',(req,res)=>{
//         res.send('Hello from poli')
//     //send,write,json
// })



const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');
const {static} = require("express");

//*_-_-
const users = [{
    firstName:'Oleg',
    lastName:'Duna',
    email:'asd',
    password: '1234fd',
    age: 22,
    city:'olo'
},
    {
        firstName:'erte',
        lastName:'Dyyyy',
        email:'wgwg',
        password: 'wd',
        age: 21,
        city:'delo'
    }]

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'static'))); //сстатик - это стат файлы они будут доступны тем кто скачает продж.
app.set('view engine','.hbs');//тут будем использовать как двигателем hbs (For template)
app.engine('.hbs',engine({defaultLayout:false}))//когда будет срабатывать и видеть файлы HBS,используем engine,и указываем настройки
//на тот момент когда нода увидит хбс
app.set('views', path.join(__dirname, 'static'));

app.get('/login',(req, res)=>{
    res.render('login') ;//когда кто то будет переходить на лоГИн , мы будем давать им страницу Логин

})
app.get('/signin',((req, res) =>{
    res.render('signin');
} ))

app.post('/signin',((req, res) => {
    let info = users.find(user => user.email === req.body.email && user.password === req.body.password);
    if (info){
        res.redirect(`/users/${user.id}`);
    }else {
        res.redirect('/error');
    }
}))


app.get('/users',(req,res)=>{
    const {age,city} = req.query
    let filUsers = [...users]
    if(age){
        filUsers = users.filter(user => user.age === age);
    }
    else if(city){
        filUsers = users.filter(user => user.city === city);
    }else if(city && age) {
        filUsers = users.filter((user => user.city === city && user.age === age));
    }
    res.render('users',{users: filUsers});

})

app.post('/login',(req,res)=>{
    let emailInfo = users.filter(user => user.email === req.body.email);
    // let passwordInfo = users.filter((user=> user.password === req.body.password))
    // if(emailInfo > 0 && passwordInfo > 0){
    //     res.redirect('/signin')
    // }
    if (emailInfo.length > 0 ){
        res.redirect('/error');
    } else  {
        users.push(req.body)//все что введем юудем пушить в масив юзеров
        res.redirect('/users');
    }
})
// app.get('/signin', (req, res)=>{
//         res.render('signin')
// })
// app.use((req, res) =>{
//     res.redirect('/signin')
// } )
app.get('/users/:userId',(req,res)=>{
    console.log(req.params);
    const {userId} = req.params
    res.json(users[userId-1]);
})

app.get('/error',(req,res)=>{
    res.render('error');
})

app.use((req, res) =>{
    res.redirect('/error');
} )

 app.listen(5000, ()=>{
    console.log('Port 5000 ');
})

























