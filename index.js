const jsonServer=require('json-server')
const empServer= jsonServer.create()
const middlileware=jsonServer.defaults()
const router=jsonServer.router('db.json')
const PORT = 3000||process.env.PORT

empServer.use(middlileware)
empServer.use(router)

empServer.listen(PORT,()=>{
    console.log(`empserver started at PORT:${PORT}..waiting for the client request`);
})