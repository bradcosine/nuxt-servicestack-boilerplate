using NUnit.Framework;
using ServiceStack;
using ServiceStack.Testing;

namespace ChangeThisNamespace.Tests
{
    public class UnitTest
    {
        private readonly ServiceStackHost appHost;

        public UnitTest()
        {
            appHost = new BasicAppHost().Init();
            appHost.Container.AddTransient<ExampleService>();
        }

        [OneTimeTearDown]
        public void OneTimeTearDown() => appHost.Dispose();

        [Test]
        public void Can_call_ExampleService()
        {
            var service = appHost.Container.Resolve<ExampleService>();

            var response = (HelloResponse)service.Any(new HelloRequest { Name = "World" });

            Assert.True(response.Ok);
            Assert.That(response.Result, Is.EqualTo("Hello, World!"));
        }
    }
}
