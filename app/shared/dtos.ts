/* Options:
Date: 2018-12-13 15:07:34
Version: 5.40
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://localhost:5000

//GlobalNamespace: 
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturn<T>
{
    createResponse(): T;
}

export interface IReturnVoid
{
    createResponse(): void;
}

export interface IHasSessionId
{
    sessionId?: string;
}

export interface IHasBearerToken
{
    bearerToken?: string;
}

export interface IPost
{
}

// @DataContract
export class ResponseError
{
    // @DataMember(Order=1, EmitDefaultValue=false)
    public errorCode: string;

    // @DataMember(Order=2, EmitDefaultValue=false)
    public fieldName: string;

    // @DataMember(Order=3, EmitDefaultValue=false)
    public message: string;

    // @DataMember(Order=4, EmitDefaultValue=false)
    public meta: { [index:string]: string; };
}

// @DataContract
export class ResponseStatus
{
    // @DataMember(Order=1)
    public errorCode: string;

    // @DataMember(Order=2)
    public message: string;

    // @DataMember(Order=3)
    public stackTrace: string;

    // @DataMember(Order=4)
    public errors: ResponseError[];

    // @DataMember(Order=5)
    public meta: { [index:string]: string; };
}

export interface ICommonResponse
{
    ok?: boolean;
    responseStatus?: ResponseStatus;
}

export class Auth0Response
{
    public access_token: string;
    public id_token: string;
    public scope: string;
    public expires_in: number;
    public token_type: string;
}

export class HelloResponse implements ICommonResponse
{
    public ok: boolean;
    public responseStatus: ResponseStatus;
    public result: string;
}

export class GetLinksResponse implements ICommonResponse
{
    public ok: boolean;
    public responseStatus: ResponseStatus;
    public results: { [index:string]: string; };
}

// @Route("/Posts", "GET")
export class GetPostResponse implements ICommonResponse
{
    public ok: boolean;
    public responseStatus: ResponseStatus;
    public id: number;
    public title: string;
    public description: string;
}

export class GetSecuredResponse implements ICommonResponse
{
    public ok: boolean;
    public responseStatus: ResponseStatus;
    public result: string;
}

// @DataContract
export class AuthenticateResponse implements IHasSessionId, IHasBearerToken
{
    // @DataMember(Order=1)
    public userId: string;

    // @DataMember(Order=2)
    public sessionId: string;

    // @DataMember(Order=3)
    public userName: string;

    // @DataMember(Order=4)
    public displayName: string;

    // @DataMember(Order=5)
    public referrerUrl: string;

    // @DataMember(Order=6)
    public bearerToken: string;

    // @DataMember(Order=7)
    public refreshToken: string;

    // @DataMember(Order=8)
    public responseStatus: ResponseStatus;

    // @DataMember(Order=9)
    public meta: { [index:string]: string; };
}

// @DataContract
export class AssignRolesResponse
{
    // @DataMember(Order=1)
    public allRoles: string[];

    // @DataMember(Order=2)
    public allPermissions: string[];

    // @DataMember(Order=3)
    public responseStatus: ResponseStatus;
}

// @DataContract
export class UnAssignRolesResponse
{
    // @DataMember(Order=1)
    public allRoles: string[];

    // @DataMember(Order=2)
    public allPermissions: string[];

    // @DataMember(Order=3)
    public responseStatus: ResponseStatus;
}

// @Route("/Auth/Token", "GET POST")
export class GetTokenRequest implements IReturn<Auth0Response>
{
    public code: string;
    public state: string;
    public redirect_uri: string;
    public client_id: string;
    public response_type: string;
    public grant_type: string;
    public createResponse() { return new Auth0Response(); }
    public getTypeName() { return 'GetTokenRequest'; }
}

// @Route("/Hello", "GET POST")
// @Route("/Hello/{Name}", "GET POST")
export class HelloRequest implements IReturn<HelloResponse>
{
    public name: string;
    public createResponse() { return new HelloResponse(); }
    public getTypeName() { return 'HelloRequest'; }
}

// @Route("/Links", "GET")
export class GetLinksRequest implements IReturn<GetLinksResponse>
{
    public createResponse() { return new GetLinksResponse(); }
    public getTypeName() { return 'GetLinksRequest'; }
}

export class GetPostRequest implements IReturn<GetPostResponse>
{
    public id: number;
    public createResponse() { return new GetPostResponse(); }
    public getTypeName() { return 'GetPostRequest'; }
}

// @Route("/Secured", "GET POST")
export class GetSecuredRequest implements IReturn<GetSecuredResponse>
{
    public message: string;
    public createResponse() { return new GetSecuredResponse(); }
    public getTypeName() { return 'GetSecuredRequest'; }
}

// @Route("/auth")
// @Route("/auth/{provider}")
// @Route("/authenticate")
// @Route("/authenticate/{provider}")
// @DataContract
export class Authenticate implements IReturn<AuthenticateResponse>, IPost
{
    // @DataMember(Order=1)
    public provider: string;

    // @DataMember(Order=2)
    public state: string;

    // @DataMember(Order=3)
    public oauth_token: string;

    // @DataMember(Order=4)
    public oauth_verifier: string;

    // @DataMember(Order=5)
    public userName: string;

    // @DataMember(Order=6)
    public password: string;

    // @DataMember(Order=7)
    public rememberMe: boolean;

    // @DataMember(Order=8)
    public continue: string;

    // @DataMember(Order=9)
    public nonce: string;

    // @DataMember(Order=10)
    public uri: string;

    // @DataMember(Order=11)
    public response: string;

    // @DataMember(Order=12)
    public qop: string;

    // @DataMember(Order=13)
    public nc: string;

    // @DataMember(Order=14)
    public cnonce: string;

    // @DataMember(Order=15)
    public useTokenCookie: boolean;

    // @DataMember(Order=16)
    public accessToken: string;

    // @DataMember(Order=17)
    public accessTokenSecret: string;

    // @DataMember(Order=18)
    public meta: { [index:string]: string; };
    public createResponse() { return new AuthenticateResponse(); }
    public getTypeName() { return 'Authenticate'; }
}

// @Route("/assignroles")
// @DataContract
export class AssignRoles implements IReturn<AssignRolesResponse>, IPost
{
    // @DataMember(Order=1)
    public userName: string;

    // @DataMember(Order=2)
    public permissions: string[];

    // @DataMember(Order=3)
    public roles: string[];
    public createResponse() { return new AssignRolesResponse(); }
    public getTypeName() { return 'AssignRoles'; }
}

// @Route("/unassignroles")
// @DataContract
export class UnAssignRoles implements IReturn<UnAssignRolesResponse>, IPost
{
    // @DataMember(Order=1)
    public userName: string;

    // @DataMember(Order=2)
    public permissions: string[];

    // @DataMember(Order=3)
    public roles: string[];
    public createResponse() { return new UnAssignRolesResponse(); }
    public getTypeName() { return 'UnAssignRoles'; }
}

