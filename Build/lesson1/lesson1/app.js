const path = require('path')
const fs = require('fs')


fs.mkdir(path.join(__dirname, 'main','inPerson'),{recursive:true},(err) => {
    if (err) {
        console.log(err);
    }
})

fs.mkdir(path.join(__dirname, 'main','online'),{recursive:true},(err) => {
    if (err) {
        console.log(err);
    }
})


let onlineUsers = [
    {
        name:'Nikola', age: 23, city:'Lviv'
    },
    {name: 'Olga', age: 22, city: 'Lviv'}]
for (let i = 0; i < onlineUsers.length; i++ ) {
    fs.writeFile(path.join(__dirname,'main', 'online', '1file.txt'),
        `NAME: ${onlineUsers[i].name}\nYEAR: ${onlineUsers[i].age}\nCITY: ${onlineUsers[i].city}\n`,
        {flag:'a'},
        (err)=>{
        if(err){
            console.log(err)
        }
        }
        )

}

let inPersonUsers= [{
    name:'Andri', age: 22, city:'Lviv'
},
    {name: 'Olga', age: 21, city: 'Lviv'}]

for (let i = 0; i < inPersonUsers.length; i++){
        fs.writeFile(path.join(__dirname,'main', 'inPerson', '2file.txt'),
            `NAME: ${[inPersonUsers[i].name]}\nYEAR: ${[inPersonUsers[i].age]}\nCITY: ${[inPersonUsers[i].city]}\n`,
            {flag : 'a'},
            (err)=>{
                if (err){
                    console.log(err)
                    throw err
                }
            })
}

function  swap (status){
    if (status === true){
        // fs.rename(path.join(__dirname,'inPerson','2file.txt'),path.join(__dirname,'online','file.txt'),(err)=>{
        //     if(err){
        //         console.log(err);
        //     }
        // })
        // fs.rename(path.join(__dirname,'online','file.txt'),path.join(__dirname,'inPerson','2file.txt'),(err)=>{
        //     if(err){
        //         console.log(err);
        //     }
        // })


        fs.readFile(path.join(__dirname,'main','inPerson','2file.txt'),(err,data)=>{
            if(err){
                console.log(err)
            }
            fs.appendFile(path.join(__dirname,'main','online','1file.txt'),`${data.toString()}`,{flag:'w'},
                (err)=>{
                if(err){
                    console.log(err)
                }
                console.log('Good')
                })
        })
        fs.readFile(path.join(__dirname,'main','online','2file.txt'),'utf8',(err,data)=>{
            if(err){
                console.log(err)
            }
            fs.appendFile(path.join(__dirname,'main','inPerson','1file.txt'),`${data}`,{flag:'w'},
                (err)=>{
                    if(err){
                        console.log(err)
                    }
                    console.log('Good')
                })
        })
    }
}
swap(true)