const path = require('path')
const fs = require('fs')


// Завдання на практику
//
// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так
//
// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell
//
// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new



//1.file + text
 fs.writeFile(path.join(__dirname,'one','text.txt'),"SomeData",(err)=>{
    if(err){
        console.log(err);
        throw err;
    }
})
//1.2file + info from text.txt
fs.readFile(path.join(__dirname,'one','text.txt'),
    'utf8',(err,data)=>{
    if(err){
        console.log(err)
        throw err
    }
        fs.writeFile(path.join(__dirname,'one','text.txt2'),(data),(err)=>{
            if(err){
                console.log(err);
                throw err;
            }
            console.log(data)
        })
})
//2.1 file
fs.writeFile(path.join(__dirname,'one','text3.txt'),//создаем
    "Fx4t2Jm Fx4t2Jm Fx4t2Jm Fx4t2Jm Fx4t2Jm Fx4t2Jm",(err)=>{
    if(err){
        console.log(err);
        throw err;
    }
})
fs.readFile(path.join(__dirname,'one','text3.txt'), //читтаем
    'utf8',(err,data)=>{
        if(err){
            console.log(err)
            throw err
        }
         fs.mkdir(path.join(__dirname,'one','public'),//делаем папку
             (err)=>{
             if(err){
                 console.log(err)
             }
                 fs.writeFile(path.join(__dirname,'one','public','text4.txt'),(data),
                     (err)=>{
                     if(err){
                         console.log(err);
                         throw err;
                     }
                     fs.unlink(path.join(__dirname,'one','text3.txt'),
                         (err)=>{
                         if(err){
                             console.log(err);
                             throw err
                         }
                         })
                 })
         })
    })
// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані
// (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать -
// це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new


fs.mkdir(path.join(__dirname, 'one','papka'),
    (err)=>{
    if(err){
        console.log(err);
    }
    fs.writeFile(path.join(__dirname,'one','papka','FileP.txt'),"someData",(err)=>{
        if(err){
            console.log(err);
        }
        fs.readdir(path.join(__dirname, 'one','papka'),(err,data)=>{
            if(data){
                fs.truncate(path.join(__dirname,'one','papka','FileP.txt'),(err)=>{
                    if(err){
                        console.log('ERROR')
                    }
                    fs.rename(path.join((__dirname,'one','papka', path.join(__dirname,'one','NEWpapka'),(err)=>{
                        if(err){
                            console.log("ERROR")
                        }
                    })))
                })
            }
        })
    })
    }
    )
