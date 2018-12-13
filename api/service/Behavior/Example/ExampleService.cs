using ServiceStack;
using System.Collections.Generic;

namespace ChangeThisNamespace
{
    public class ExampleService : Service
    {
        public HelloResponse Any(HelloRequest request)
        {
            return new HelloResponse { Ok = true, Result = $"Hello, {request.Name}!" };
        }

        public GetLinksResponse Get(GetLinksRequest request) => new GetLinksResponse
        {
            Results = new Dictionary<string, string>
            {
                {"servicestack.net", "https://servicestack.net"},
                {"StackOverflow", "http://stackoverflow.com/search?q=servicestack"},
                {"Customer Forums", "https://forums.servicestack.net"},
                {"Issue Tracker", "https://github.com/ServiceStack/Issues"},
                {"Feature Requests", "http://servicestack.uservoice.com/forums/176786-feature-requests"},
                {"Release Notes", "https://servicestack.net/release-notes"},
                {"Live Demos", "https://github.com/ServiceStackApps/LiveDemos"},
                {".NET Core Live Demos", "https://github.com/NetCoreApps/LiveDemos"},
                {"Gistlyn", "http://gistlyn.com"},
            }
        };

        public GetPostResponse Get(GetPostRequest request) => new GetPostResponse
        {
            Id = request.Id,
            Title = $"Title {request.Id}",
            Description = $"Post Description {request.Id}",
        };

        [Authenticate]
        [RequiredRole("Employee")]
        public GetSecuredResponse Any(GetSecuredRequest request)
        {
            return new GetSecuredResponse { Ok = true, Result = request.Message };
        }
    }

    public class HelloRequest : IReturn<HelloResponse>
    {
        public string Name { get; set; }
    }

    public class HelloResponse : ICommonResponse
    {
        public bool Ok { get; set; }
        public ResponseStatus ResponseStatus { get; set; }

        public string Result { get; set; }
    }

    public class GetLinksRequest : IReturn<GetLinksResponse>
    {
    }

    public class GetPostRequest : IReturn<GetPostResponse>
    {
        public int Id { get; set; }
    }

    public class GetPostResponse : ICommonResponse
    {
        public bool Ok { get; set; }
        public ResponseStatus ResponseStatus { get; set; }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }

    public class GetLinksResponse : ICommonResponse
    {
        public bool Ok { get; set; }
        public ResponseStatus ResponseStatus { get; set; }

        public Dictionary<string, string> Results { get; set; }
    }

    [RestrictAccess]
    public class GetSecuredRequest : IReturn<GetSecuredResponse>
    {
        public string Message { get; set; }
    }

    public class GetSecuredResponse : ICommonResponse
    {
        public bool Ok { get; set; }
        public ResponseStatus ResponseStatus { get; set; }

        public string Result { get; set; }
    }
}
