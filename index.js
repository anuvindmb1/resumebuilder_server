
//import json server
const jsonServer=require('json-server')
//create server for running json file
const server=jsonServer.create()
//set up route/path for json file
const router=jsonServer.router('db.json')
//create middlevare for data parsing
const middlevare=jsonServer.defaults()
//use middlevare
server.use(middlevare)
server.use(router)
//create server port number
const PORT=3000
server.listen(PORT,()=>{
    console.log("server started");
    
})
