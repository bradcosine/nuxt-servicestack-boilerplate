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
// @DataContract
var ResponseError = /** @class */ (function () {
    function ResponseError() {
    }
    return ResponseError;
}());
export { ResponseError };
// @DataContract
var ResponseStatus = /** @class */ (function () {
    function ResponseStatus() {
    }
    return ResponseStatus;
}());
export { ResponseStatus };
var Auth0Response = /** @class */ (function () {
    function Auth0Response() {
    }
    return Auth0Response;
}());
export { Auth0Response };
var HelloResponse = /** @class */ (function () {
    function HelloResponse() {
    }
    return HelloResponse;
}());
export { HelloResponse };
var GetLinksResponse = /** @class */ (function () {
    function GetLinksResponse() {
    }
    return GetLinksResponse;
}());
export { GetLinksResponse };
// @Route("/Posts", "GET")
var GetPostResponse = /** @class */ (function () {
    function GetPostResponse() {
    }
    return GetPostResponse;
}());
export { GetPostResponse };
var GetSecuredResponse = /** @class */ (function () {
    function GetSecuredResponse() {
    }
    return GetSecuredResponse;
}());
export { GetSecuredResponse };
// @DataContract
var AuthenticateResponse = /** @class */ (function () {
    function AuthenticateResponse() {
    }
    return AuthenticateResponse;
}());
export { AuthenticateResponse };
// @DataContract
var AssignRolesResponse = /** @class */ (function () {
    function AssignRolesResponse() {
    }
    return AssignRolesResponse;
}());
export { AssignRolesResponse };
// @DataContract
var UnAssignRolesResponse = /** @class */ (function () {
    function UnAssignRolesResponse() {
    }
    return UnAssignRolesResponse;
}());
export { UnAssignRolesResponse };
// @Route("/Auth/Token", "GET POST")
var GetTokenRequest = /** @class */ (function () {
    function GetTokenRequest() {
    }
    GetTokenRequest.prototype.createResponse = function () { return new Auth0Response(); };
    GetTokenRequest.prototype.getTypeName = function () { return 'GetTokenRequest'; };
    return GetTokenRequest;
}());
export { GetTokenRequest };
// @Route("/Hello", "GET POST")
// @Route("/Hello/{Name}", "GET POST")
var HelloRequest = /** @class */ (function () {
    function HelloRequest() {
    }
    HelloRequest.prototype.createResponse = function () { return new HelloResponse(); };
    HelloRequest.prototype.getTypeName = function () { return 'HelloRequest'; };
    return HelloRequest;
}());
export { HelloRequest };
// @Route("/Links", "GET")
var GetLinksRequest = /** @class */ (function () {
    function GetLinksRequest() {
    }
    GetLinksRequest.prototype.createResponse = function () { return new GetLinksResponse(); };
    GetLinksRequest.prototype.getTypeName = function () { return 'GetLinksRequest'; };
    return GetLinksRequest;
}());
export { GetLinksRequest };
var GetPostRequest = /** @class */ (function () {
    function GetPostRequest() {
    }
    GetPostRequest.prototype.createResponse = function () { return new GetPostResponse(); };
    GetPostRequest.prototype.getTypeName = function () { return 'GetPostRequest'; };
    return GetPostRequest;
}());
export { GetPostRequest };
// @Route("/Secured", "GET POST")
var GetSecuredRequest = /** @class */ (function () {
    function GetSecuredRequest() {
    }
    GetSecuredRequest.prototype.createResponse = function () { return new GetSecuredResponse(); };
    GetSecuredRequest.prototype.getTypeName = function () { return 'GetSecuredRequest'; };
    return GetSecuredRequest;
}());
export { GetSecuredRequest };
// @Route("/auth")
// @Route("/auth/{provider}")
// @Route("/authenticate")
// @Route("/authenticate/{provider}")
// @DataContract
var Authenticate = /** @class */ (function () {
    function Authenticate() {
    }
    Authenticate.prototype.createResponse = function () { return new AuthenticateResponse(); };
    Authenticate.prototype.getTypeName = function () { return 'Authenticate'; };
    return Authenticate;
}());
export { Authenticate };
// @Route("/assignroles")
// @DataContract
var AssignRoles = /** @class */ (function () {
    function AssignRoles() {
    }
    AssignRoles.prototype.createResponse = function () { return new AssignRolesResponse(); };
    AssignRoles.prototype.getTypeName = function () { return 'AssignRoles'; };
    return AssignRoles;
}());
export { AssignRoles };
// @Route("/unassignroles")
// @DataContract
var UnAssignRoles = /** @class */ (function () {
    function UnAssignRoles() {
    }
    UnAssignRoles.prototype.createResponse = function () { return new UnAssignRolesResponse(); };
    UnAssignRoles.prototype.getTypeName = function () { return 'UnAssignRoles'; };
    return UnAssignRoles;
}());
export { UnAssignRoles };
