import express        from 'express'
import aws            from 'aws-sdk'
import http           from 'http'
import cors           from 'cors'
import { uniqueId }   from './utils'

/*
 * Set-up and run the Express app.
 */
const app = express()

app.use(cors())

app.server = http.createServer(app)
app.server.listen(process.env.PORT || 3000)
console.log(`API magic happens at ${app.server.address().port} 🌏`)

/*
 * Load the S3 information from the environment variables.
 */
const S3_BUCKET = process.env.S3_BUCKET

aws.config.accessKeyId = process.env.AWSAccessKeyId
aws.config.secretAccessKey = process.env.AWSSecretKey

/*
 * Respond to GET requests to /upload.
 * Upon request, return JSON containing the temporarily-signed S3 request and
 * the anticipated URL of the image.
 */
app.get('/upload', (req, res) => {
  const s3 = new aws.S3()
  const fileType = req.query['fileType']
  const fileName = uniqueId()
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  }
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err)
      return res.end()
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    }
    res.write(JSON.stringify(returnData))
    res.end()
  })
})
