import { JsonServiceClient } from "@servicestack/client";

import { HelloRequest, GetLinksRequest, GetPostRequest, GetTokenRequest, GetSecuredRequest } from "./dtos";

export const client = new JsonServiceClient("/");

export async function hello(name) {
    const request = new HelloRequest();
    request.name = name;
    return (await client.get(request)).result;
}

export const getLinks = async () => (await client.get(new GetLinksRequest())).results;

export const getPost = async (id) => {
    const request = new GetPostRequest();
    request.id = id;
    return await client.get(request)
}

export async function getToken(code, state) {
    const request = new GetTokenRequest();
    request.code = code;
    request.state = state;
    return (await client.get(request)).result;
}


export async function getSecured(code, state) {
    const request = new GetSecuredRequest();
    request.x="f";
    return (await client.get(request)).secured;
}
