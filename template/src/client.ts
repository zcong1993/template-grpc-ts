import * as grpc from 'grpc'
import { EchoServiceClient } from './generated/hello_grpc_pb'
import { Message } from './generated/hello_pb'

const client = new EchoServiceClient(
  'localhost:1234',
  grpc.credentials.createInsecure()
)

const req = new Message()
req.setValue('hello world')

client.echo(req, (err, res) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(res)
})
