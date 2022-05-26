import config from './../config/config'
import mongoose from 'mongoose'
import app from './express'

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, {useNewUrlParser: true, useUnifiedTopology:true})
mongoose.connection.on('error', (err)=>{
    throw new Error(`Unable to connect to database: ${err}`)
})

app.listen(config.port, (err)=>{
    if (err){
        console.error(err)
    } else {
        console.info('Server listening on port %s.', config.port)
    }
})