const path = require('path')
const fs = require('fs')


fs.mkdir(path.join(__dirname, 'main','inPerson'),{recursive:true},(err) => {
 if (err) {
  console.log(err);
 }
})



let onlineUsers = [
    {
        name:'Nikola', age: 23, city:'Lviv'
    }]
for (let itemOnline of onlineUsers) {

    fs.writeFile(path.join(__dirname, 'main','online', '1file.txt'),
        `name:${itemOnline.name}\n age:${itemOnline.age}\n city:${itemOnline.city}`,(err)=>{
            if(err){
                console.log(err);
            }
        })
}

let inPersonUsers= [{
    name:'Andrii', age: 22, city:'Lviv'
}]
for (let item of inPersonUsers) {
    fs.writeFile(path.join(__dirname, 'main','inPerson', '2file.txt'),
        `name:${item.name}\n age:${item.age}\n city:${item.city}`,(err)=>{
            if (err) {
                console.log(err);
            }
        })
}
function  swap (status){
    if (status === true){
        fs.rename(path.join(__dirname,'inPerson','2file.txt'),path.join(__dirname,'online','file.txt'),(err)=>{
            if(err){
                console.log(err);
            }
        })
        fs.rename(path.join(__dirname,'online','file.txt'),path.join(__dirname,'inPerson','2file.txt'),(err)=>{
            if(err){
                console.log(err);
            }
        })
    }
}
swap(true)