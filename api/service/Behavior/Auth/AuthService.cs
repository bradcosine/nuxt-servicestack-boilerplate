using ServiceStack;
using ServiceStack.Configuration;
using ServiceStack.Logging;

namespace ChangeThisNamespace
{
    public class AuthService : Service
    {
        private readonly ILog Log;
        private readonly IAppSettings AppSettings;

        public AuthService(
            ILog Log,
            IAppSettings AppSettings)
        {
            this.Log = Log;
            this.AppSettings = AppSettings;
        }

        public Auth0Response Any(GetTokenRequest request)
        {   
            Log.Info(request.ToJson());

            var configAuth0 = AppSettings.Get<Auth0Config>("auth0");

            var codeExchange = new Auth0Request()
            {
                audience = configAuth0.Audience,
                client_id = request.client_id,
                client_secret = configAuth0.ClientSecret,
                code = request.code,
                grant_type = request.grant_type != "undefined" ? request.grant_type : "authorization_code",
                redirect_uri = request.redirect_uri
            };

            Log.Info("CodeForExchange::::");
            Log.Info(codeExchange.ToJson());

            string auth0url = $"https://{configAuth0.Domain}{configAuth0.AccessTokenPath}";
            var auth0Response = auth0url.PostJsonToUrl(codeExchange).FromJson<Auth0Response>();
            return auth0Response;
        }
    }

    public class Auth0Config
    {
        public string Domain { get; set; }
        public string ClientSecret { get; set; }
        public string AccessTokenPath { get; set; }
        public string Audience { get; set; }
    }

    public class GetTokenRequest : IReturn<Auth0Response>
    {
        public string code { get; set; }
        public string state { get; set; }
        public string redirect_uri { get; set; }
        public string client_id { get; set; }
        public string response_type { get; set; }
        public string grant_type { get; set; }
    }

    public class Auth0Response
    {
        public string access_token { get; set; }
        public string id_token { get; set; }
        public string scope { get; set; }
        public int expires_in { get; set; }
        public string token_type { get; set; }
    }

    public class Auth0Request
    {
        public string audience { get; set; }
        public string client_id { get; set; }
        public string client_secret { get; set; }
        public string code { get; set; }
        public string grant_type { get; set; }
        public string redirect_uri { get; set; }
    }
}
