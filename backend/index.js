import app from './server'
import mogodb from 'mongodb'
import dotenv from 'dotenv'

async function main() {
  dotenv.config()
  const client = new mogodb.MongoClient(
    process.env.MOVIEREVIEWS_DB_URI
  )
  const port = process.env.PORT || 8000
  try {
    //connect to the MongoDB cluster
    await client.connect()
    app.listen(port, ()=>{
      console.log('server is running on port:' + port)
    })
  }catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main().catch(console.error)