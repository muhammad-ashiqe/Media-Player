//creating a json server
// 1)import json server library 
// const jsonServer = require('json-server')
import jsonServer from 'json-server'

//2)create json server using create() methode
const mediaPlayerServer = jsonServer.create();

//3)connect json server with db.json file
const router = jsonServer.router('db.json');

//4)create a middleware that process req,res
//it used mainly for converting json object to js object
const middleware = jsonServer.defaults(); 

//5)use middleware
mediaPlayerServer.use(middleware);


//6)use router
mediaPlayerServer.use(router)

//defining port
const PORT = 5000;

//running the media player server
mediaPlayerServer.listen(PORT,()=>{
  console.log(`mediaplayer server is running in http://localhost:${PORT}`)
})