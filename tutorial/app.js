function program(num) {
    if(num<10) {
        console.log('small number');
    } else {
        console.log('big number');
    }
    console.log('either way it is a number');
}

function showPath() {
    console.log(__dirname);
}

function makeInterval() {
    //setInterval(func,milisaniye)
    setInterval(()=> {
        console.log('Hello Mello :)')
    },1000);
}

function forModules() {
    const names = require('./names');
    const funcs = require('./utils');
    
    
    funcs('susan');
    funcs(names.name1);
    funcs(names.name2);
    
}

function sayHello(name) {
    console.log("Hello " + name + " :)");
}

function useGlobals() {
    console.log(__dirname);
    console.log(__filename);
    setTimeout(()=>{
        console.log("Cut the crap")
        clearInterval(interval);
    },5000);

    var interval=setInterval(()=>{
        console.log("this is interval")
    },1000)
}


//how to get info about current file
function usePathModule() {
   const path =  require('path');
   var pathName = path.parse(__filename);
   console.log(pathName);
}


//how to get info about current os
function useOSModule() {
    const os = require('os');
    var osInfo = os.freemem();
    var osCPU=os.cpus();
    var currentUser = os.userInfo();
    var upTime = os.uptime();
    console.log(upTime);

}

function useFsModule() {
    const fs = require('fs');
    const files = fs.readdirSync('./');
    //console.log('./');
    fs.readdir('./', (err,file) => {
        if(err) console.log('Error',err);
        else console.log('Succes',file);
    }); 
}

function useEventModule() {
    const EventEmitter = require('events'); //this is a class
    const Logger = require('./logger');
    const logger = new Logger(); 
    logger.on('MessageLogged', (arg) =>  {
        console.log('Listener Called',arg);
    });
    logger.log('message');
    
}

function useHTTPModule() {
    const http = require('http');
    const server = http.createServer((req,res) => {
        //bu ifler lineer şekilde uzayabilir ve kod complex hale gelir burada da express.js
        if(req.url=='/') {
            res.write("Hello World");
            res.end();
        }
        if(req.url=='/showList') {
            res.write(JSON.stringify(['zeynep','yildiray','hanife','hamza']));
            res.end();
        }
    });
   
    server.listen(3000); //listens given port
    console.log("listening on port 3000...")
}

useHTTPModule();