const express =require('express')
const cors =require('cors')
const app = express()
const PORT=3000
const { MongoClient, ObjectId } = require('mongodb')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const url='mongodb+srv://ignacioulman:VDU6xidW9rvG8SjT@legion.sa3nh.mongodb.net/'
let client
let database


async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(url)
    await client.connect()
    database = client.db('Dreams') 
  }
}

app.get('/init', async (req, res)=> {
  try{
    await connectToDatabase()
    const usuarios= database.collection('usuarios') 
    const parches=database.collection('parches')
    const collections = await database.listCollections().toArray()

    if(!collections.find(data=>data.name === 'parches')){
      console.log('No existe usuarios')
      await usuarios.insertOne({sample: 'sample'})
      await usuarios.deleteMany()
    }

    if(!collections.find(data=>data.name === 'parches')){
      console.log('No existen parches')
      await parches.insertOne({sample: 'sample'})
      await parches.deleteMany()
    }

  }catch (e){
    console.log('Error: ',e)
  }
})

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

app.post('/adminDashboard/parches/create', async (req, res)=> { 
  try{
    await connectToDatabase()
    const parches=database.collection('parches')
    await parches.insertOne(req.body)
    }
  catch(e){
    console.log('Error: ', e)
  }
})

app.get('/adminDashboard/parches/get', async (req, res)=> { 
  try{ 
    await connectToDatabase() 
    const parches=database.collection('parches') 
     res.send(await parches.find().toArray())
  }catch(e){
    console.log('Error: ', e)
  }
})





app.listen(PORT, function () { 
  console.log(`Server is running on http://localhost:${PORT}`)
})
