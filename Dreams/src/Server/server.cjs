const express =require('express')
const cors =require('cors')
const app = express()
const PORT=3000
const { MongoClient, ObjectId } = require('mongodb')
app.use(express.json({ limit: '50mb' })); 
app.use(express.urlencoded({limit: '50mb' , extended: true }));
app.use(cors())

const url='mongodb+srv://ignacioulman:VDU6xidW9rvG8SjT@legion.sa3nh.mongodb.net/'
let client
let database


async function connectToDatabase() { 
  if (!client) {
    client = new MongoClient(url)
    await client.connect()
    database = client.db('Dreams') 
    console.log('Conexión a MongoDB establecida.')
  }
}

//PARCHES
app.get('/patch/getAll', async (req, res)=> { 
    try{ 
      await connectToDatabase()  
      const parches= database.collection('parches') 
      const data = await parches.find().toArray();   
      res.send(data); 
    }catch(e){
      console.error('Error: ', e);
      res.status(500).send({ error: 'Error al obtener los parches' }); 
    }
  }
)

app.get('/patch/get/:id', async (req, res)=> { 
  try{ 
    await connectToDatabase() 
    const {id} =req.params
    const parches=database.collection('parches') 
    const reqPatch=await parches.findOne({_id: new ObjectId(id)}) 
    res.send(reqPatch)
  }catch(e){
    console.log('Error: ', e)
  }
})

app.delete('/patch/delete/:id', async (req, res)=> {
  try{
    await connectToDatabase() 
    const {id} =req.params
    const parches=database.collection('parches') 
    await parches.deleteOne({_id: new ObjectId(id)})
    res.send(true)
  }catch(e){
    console.log('Error: ', e)
    res.send(false)
  }
})

app.put('/adminDashboard/parches/update/:id', async (req, res)=> {
  try{
    await connectToDatabase() 
    const {id} =req.params
    const {patchPost} =  req.body  
    const parches=database.collection('parches')  
    const result = await parches.updateOne(
      { _id: new ObjectId(id) },
      { $set: { "patchPost.content": patchPost.content } }
    );

    res.send(result)
  }catch(e){
    console.log('Error: ', e)
    res.send(false)
  }
})

app.post('/patch/create', async (req, res)=> { 
  try{
    await connectToDatabase() 
    const{patchPost}=req.body 
    const parches=database.collection('parches')
    await parches.insertOne(patchPost)
    }
  catch(e){
    console.log('Error: ', e)
  }
})

//PARCHES


//TIENDA
app.get('/shop/getAll', async (req, res)=> { 
  try{ 
    await connectToDatabase() 
    const tienda=database.collection('tienda') 
    const data = await tienda.find().toArray();   
    res.send(data);  
  }catch(e){
    console.error('Error: ', e);
    res.status(500).send({ error: 'Error al obtener los parches' }); 
  }
  }
)

app.get('/shop/get/:id', async (req, res)=> { 
  try{ 
    await connectToDatabase() 
    const {id} = req.params 
    console.log(id)
    const tienda= database.collection('tienda') 
    const reqPatch= await tienda.findOne({_id: new ObjectId(id)}) 
    res.send(reqPatch)
  }catch(e){
    console.log('Error: ', e)
  }
})

app.delete('/shop/delete/:id', async (req, res)=> {
  try{
    await connectToDatabase() 
    const {id} =req.params 
    const tienda=database.collection('tienda') 
    await tienda.deleteOne({_id: new ObjectId(id)}) 
    res.send(true)
  }catch(e){
    console.log('Error: ', e)
    res.send(false)
  }
})

app.put(`/shop/update/:id`, async (req, res)=> {
  try{
    await connectToDatabase() 
    const {id} =req.params
    const {_id, ...updatedData}=req.body 

    const tienda=database.collection('tienda')  
    await tienda.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedData  }
    );

     res.send(true)
  }catch(e){
    console.log('Error: ', e)
    res.send(false)
  }
})

app.post('/shop/create', async (req, res)=> { 
  try{
    await connectToDatabase()
    const tienda=database.collection('tienda')
    const {article} = req.body 
    await tienda.insertOne(article) 
    res.send(true)
  }catch(e){
    res.send(false)
    console.log('Error: ', e)
  }
})
//TIENDA

//EVENTOS
app.get('/events/getAll', async (req, res)=> { 
  try{ 
    await connectToDatabase() 
    const eventos=database.collection('eventos') 
    const data = await eventos.find().toArray();   
    res.send(data);  
  }catch(e){
    console.error('Error: ', e);
    res.status(500).send({ error: 'Error al obtener los parches' }); 
  }
  }
)

app.get('/events/get/:id', async (req, res)=> { 
  try{ 
    await connectToDatabase() 
    const {id} = req.params 
    console.log(id)
    const eventos= database.collection('eventos') 
    const reqPatch= await eventos.findOne({_id: new ObjectId(id)}) 
    res.send(reqPatch)
  }catch(e){
    console.log('Error: ', e)
  }
})

app.delete('/events/delete/:id', async (req, res)=> {
  try{
    await connectToDatabase() 
    const {id} =req.params 
    const eventos=database.collection('eventos') 
    await eventos.deleteOne({_id: new ObjectId(id)}) 
    res.send(true)
  }catch(e){
    console.log('Error: ', e)
    res.send(false)
  }
})

app.put(`/events/update/:id`, async (req, res)=> {
  try{
    await connectToDatabase() 
    const {id} =req.params
    const updatedEventData=req.body 

    const eventos=database.collection('eventos')  
    await eventos.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedEventData  }
    );

    res.send(true)
  }catch(e){
    console.log('Error: ', e)
    res.send(false)
  }
})

app.post('/events/create', async (req, res)=> { 
  try{
    await connectToDatabase()
    const eventos=database.collection('eventos')
    const {evento} = req.body 
    await eventos.insertOne(evento) 
    res.send(true)
  }catch(e){
    res.send(false)
    console.log('Error: ', e)
  }
})
//EVENTOS

 
app.get('/:user/:password', async (req, res)=> {
  try{
    await connectToDatabase()
    const { user, password } = req.params  
    const isUserCreated= await database.collection('usuarios').findOne({user, password})
    if(isUserCreated){
      res.send(true)
    }else{
      res.send(false)
    } 
  }catch(e){
    console.log('Error: ', e)
  }
})

 
 

 


app.listen(PORT, function () { 
  console.log(`Server is running on http://localhost:${PORT}`)
})
