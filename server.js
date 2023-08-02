const http=require('http')
const path=require('path')
const fs=require('fs')
const fsPromises=require('fs').promises





const logEvents=require('./logEvents');//custom module

const EventEmitter=require('events');// events common core module

class Emitter extends EventEmitter{};

const myEmitter=new Emitter();  
const PORT =process.env.PORT|| 3500;

const serveFile=async(filePath,contentType,response)=>{

try{
    const data=await fs.promises.readFile(filePath,'utf8');
    responses.writeHead(200,{'Content-Type':contentType});
    response.end(data);
}

catch(err){

    console.log(err);
    response.statusCode=500;
    response.end();
}




}

//creating a server which takes a request and response and prints the url and method
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method)

    const extension=path.extname(req.url)
    let contentType;

    switch (extension) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.txt':
            contentType = 'text/plain';
            break;
        default:
            contentType = 'text/html';
    }

    let filePath=
    contentType==='text/html'&& req.url==='/'
    ? path.join(__dirname,'views',index.html)
    :contentType==='text/html'&&req.url.slice(-1)==='/'
    ?path.join(__dirname,'views',req.url,'index.html')
    :contentType==='text/html'
    ? path.join(__dirname,'views',req.url)
    :path.join(__dirname,req.url);

    //makes .html extension not required in the browser
    if(!extension&& req.url.slice(-1)!=='/')filePath+='.html';

    //checking if the file exists
    const fileExists=fs.existsSync(filePath);

    if(fileExists){
        //serve the file
    }else{
        //404
        //302 redirect
       switch(path.parse(filepath).base){
        //we have an old-page and want to redirect to new-page
        case 'old-page.html':
             res.writeHead(301,{'Location':'/ new-page.html'}); // first is the status code and second is the header to new page
        res.end();
        break;

        case'www.page.html':
        res.writeHead(301,{'Location':'/'});
        res.end();
        break;

        default:
            //serve a 404 response



       }
        
    }

});

//listen/tune to port 3500 for request
server.listen(PORT,
    ()=>
    console.log(`server running on a port ${PORT}`)
    )











// myEmitter.on('log',(msg)=>logEvents(msg));

//     myEmitter.emit('log','log event emitted')
