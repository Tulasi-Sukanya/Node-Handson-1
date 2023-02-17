//Create a route using http module and explain what is node by sending response in HTML and JSON format
const http = require("http")
const server = http.createServer(function(req,res){
    // res.writeHead(200,{'Content-Type':'text/html'})
    // res.write("I am running..")
    // res.end();
    if(req.url === "/"){
        res.write("You are on Node First Handson home page..")
        // res.send('<h1>Hello Home page..</h1>');
        res.write('<h1>Hello Home page..</h1>');
        res.end();
    }
    else if(req.method === "GET" && req.url ==="/about"){
        // res.render("about.html")
        res.write("You are on About Page..")
        res.write("'Displaying data in string format... '")
        res.end();
    }
    // else if(req.method === "POST" && req.url === "/about"){
    //     var raw_data={
    //         name:"First Node Handson is here..."
    //     };
    //     req.on("data",(data_chunk)=>{
    //         raw_data=data_chunk;
    //         console.log(raw_data);
    //         console.log(raw_data.toString("utf8"));
    //         req.end(`${raw_data}`)
    //     })
    // }
    else if(req.method === "GET" && req.url === "/contact"){
        res.write("I'm in contact Page..You can Contact us on..")
        res.write(JSON.stringify([123456789,987654321]))
        res.end();
    }
});
server.listen(8001);
