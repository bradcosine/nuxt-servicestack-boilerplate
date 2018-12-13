using ServiceStack;
using ServiceStack.Auth;
using ServiceStack.Text;
using ServiceStack.Web;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ChangeThisNamespace
{
    public class UserAuthorization 
    {
        public string[] Groups {get;set;}
        public string[] Permissions {get;set;}
        public string[] Roles {get;set;}
        public string[] Scopes {get;set;}
    }    
    
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class RestrictAccessAttribute : RequestFilterAttribute
    {
        public RestrictAccessAttribute()
        {
            this.Priority = -1;
        }

        public override void Execute(IRequest request, IResponse response, object requestDto)
        {
            var jwtProvider = AuthenticateService.GetJwtAuthProvider();
            
            var userSession = request.GetSession();

            string jwt = request.GetJwtToken();

            if (jwt == null) {
                response.ReturnAuthRequired();
                return;
            }

            var payload = jwtProvider.GetValidJwtPayload(jwt);

            // !! make the user_auth key dynamic at some point
            // Will likely require putting the actual behavior of this attribute into an action filter. See here: https://cuttingedge.it/blogs/steven/pivot/entry.php?id=98
            var user_authorization = payload.FirstOrDefault(k => k.Key == "urn://user_authorization");
            if (!user_authorization.Equals(default(KeyValuePair<string,string>)))
            {
                var authorization = user_authorization.Value.FromJson<UserAuthorization>();
                authorization.Scopes = payload.Get("scope").Split(' ');
                
                if (authorization.Roles == null && authorization.Permissions == null) {
                    response.ReturnAuthRequired();
                }

                if (authorization.Permissions.Length >0) {

                    if (userSession.Permissions == null)
                        userSession.Permissions = new List<string>(authorization.Permissions);
                    else {
                        userSession.Permissions.AddRange(authorization.Permissions);
                    }
                }

                if (authorization.Roles.Length >0) {
                    if (userSession.Roles == null)
                        userSession.Roles = new List<string>(authorization.Roles);
                    else {
                        userSession.Roles.AddRange(authorization.Roles);
                    }
                }
            }
            
            var perms = payload.Get("scope").Split(' ');
            var claims = perms;
            if (claims == null)
            {
                response.ReturnAuthRequired();
                return;
            }

            request.SaveSession(userSession);
            return;
        }
    }
}