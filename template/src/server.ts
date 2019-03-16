import * as grpc from 'grpc'
import { Message } from './generated/hello_pb'
import {
  IEchoServiceServer,
  EchoServiceService
} from './generated/hello_grpc_pb'

class EchoService implements IEchoServiceServer {
  echo(
    call: grpc.ServerUnaryCall<Message>,
    callback: grpc.sendUnaryData<Message>
  ) {
    console.log(call.request.toObject())
    callback(null, call.request)
  }
}

const startServer = () => {
  const server = new grpc.Server()
  server.addService(EchoServiceService, new EchoService())
  server.bind('0.0.0.0:1234', grpc.ServerCredentials.createInsecure())
  server.start()

  console.log('Server started, listening: 0.0.0.0:1234')
}

startServer()
