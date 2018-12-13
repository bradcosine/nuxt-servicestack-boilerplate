using Funq;
using ServiceStack;
using ServiceStack.Auth;
using ServiceStack.Configuration;
using ServiceStack.Logging;
using ServiceStack.Validation;

namespace ChangeThisNamespace
{
    public class AppHost : AppHostBase
    {
        public AppHost() : base("ChangeThisNamespace", typeof(AppHost).Assembly) { }

        // Configure your AppHost with the necessary configuration and dependencies your App needs
        public override void Configure(Container container)
        {
            //changing these can break auth0 integration, so leave it alone until we have another issue elsewhere
            //JsConfig.EmitCamelCaseNames = true;
            //JsConfig.PropertyConvention = PropertyConvention.Lenient;
            //JsConfig.DateHandler = DateHandler.ISO8601; //uncomment this to get human-readable dates instead of javascript dates

            SetConfig(new HostConfig
            {
                AddRedirectParamsToQueryString = true,
                StrictMode = true,
                DebugMode = AppSettings.Get(nameof(HostConfig.DebugMode), false)
            });

            //For a real project, remove these two lines, put the adapter in, and use the CompositionRoot
            container.Register<IAppSettings>(this.AppSettings);
            container.Register<ILog>(LogManager.GetLogger(typeof(AppHost)));
            //container.Adapter = new SimpleInjectorAdapter(CompositionRoot.GetContainer(this.AppSettings));

            AddRoutes();
            AddPlugins();
        }

        public void AddRoutes()
        {
            //Auth
            Routes.Add<GetTokenRequest>("/Auth/Token", ApplyTo.Get | ApplyTo.Post);

            //Examples (to be removed)
            Routes.Add<HelloRequest>("/Hello", ApplyTo.Get | ApplyTo.Post);
            Routes.Add<HelloRequest>("/Hello/{Name}", ApplyTo.Get | ApplyTo.Post);
            Routes.Add<GetLinksRequest>("/Links", ApplyTo.Get);
            Routes.Add<GetPostResponse>("/Posts", ApplyTo.Get);
            Routes.Add<GetSecuredRequest>("/Secured", ApplyTo.Get | ApplyTo.Post);
        }

        public void AddPlugins()
        {
            Plugins.Add(new AuthFeature(() => new AuthUserSession(),
                new IAuthProvider[] {
                    new JwtAuthProviderReader(this.AppSettings),
                }));

            Plugins.Add(new ValidationFeature());
        }
    }
}
