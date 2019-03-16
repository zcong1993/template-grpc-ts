// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var hello_pb = require('./hello_pb.js');

function serialize_pb_Message(arg) {
  if (!(arg instanceof hello_pb.Message)) {
    throw new Error('Expected argument of type pb.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_Message(buffer_arg) {
  return hello_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}


var EchoServiceService = exports.EchoServiceService = {
  echo: {
    path: '/pb.EchoService/Echo',
    requestStream: false,
    responseStream: false,
    requestType: hello_pb.Message,
    responseType: hello_pb.Message,
    requestSerialize: serialize_pb_Message,
    requestDeserialize: deserialize_pb_Message,
    responseSerialize: serialize_pb_Message,
    responseDeserialize: deserialize_pb_Message,
  },
};

exports.EchoServiceClient = grpc.makeGenericClientConstructor(EchoServiceService);
