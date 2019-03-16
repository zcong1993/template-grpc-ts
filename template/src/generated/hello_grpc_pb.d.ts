// package: pb
// file: hello.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as hello_pb from "./hello_pb";

interface IEchoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    echo: IEchoServiceService_IEcho;
}

interface IEchoServiceService_IEcho extends grpc.MethodDefinition<hello_pb.Message, hello_pb.Message> {
    path: string; // "/pb.EchoService/Echo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<hello_pb.Message>;
    requestDeserialize: grpc.deserialize<hello_pb.Message>;
    responseSerialize: grpc.serialize<hello_pb.Message>;
    responseDeserialize: grpc.deserialize<hello_pb.Message>;
}

export const EchoServiceService: IEchoServiceService;

export interface IEchoServiceServer {
    echo: grpc.handleUnaryCall<hello_pb.Message, hello_pb.Message>;
}

export interface IEchoServiceClient {
    echo(request: hello_pb.Message, callback: (error: grpc.ServiceError | null, response: hello_pb.Message) => void): grpc.ClientUnaryCall;
    echo(request: hello_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.Message) => void): grpc.ClientUnaryCall;
    echo(request: hello_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.Message) => void): grpc.ClientUnaryCall;
}

export class EchoServiceClient extends grpc.Client implements IEchoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public echo(request: hello_pb.Message, callback: (error: grpc.ServiceError | null, response: hello_pb.Message) => void): grpc.ClientUnaryCall;
    public echo(request: hello_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: hello_pb.Message) => void): grpc.ClientUnaryCall;
    public echo(request: hello_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: hello_pb.Message) => void): grpc.ClientUnaryCall;
}
