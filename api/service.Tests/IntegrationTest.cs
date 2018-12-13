using Funq;
using ServiceStack;
using NUnit.Framework;

namespace ChangeThisNamespace.Tests
{
    public class IntegrationTest
    {
        const string BaseUri = "http://localhost:2000/";
        private readonly ServiceStackHost appHost;

        public class AppHost : AppSelfHostBase
        {
            public AppHost() : base(nameof(IntegrationTest), typeof(ExampleService).Assembly) { }

            public override void Configure(Container container)
            {
            }
        }

        public IntegrationTest()
        {
            appHost = new AppHost()
                .Init()
                .Start(BaseUri);
        }

        [OneTimeTearDown]
        public void OneTimeTearDown() => appHost.Dispose();

        public IServiceClient CreateClient() => new JsonServiceClient(BaseUri);

        [Test]
        public void Can_call_Hello_Service()
        {
            var client = CreateClient();

            var response = client.Get(new HelloRequest { Name = "World" });

            Assert.True(response.Ok);
            Assert.That(response.Result, Is.EqualTo("Hello, World!"));
        }
    }
}