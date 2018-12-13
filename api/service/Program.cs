using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.IO;

namespace ChangeThisNamespace
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .ConfigureLogging(logging =>
                {
                    logging.ClearProviders();
                    logging.AddConsole();
                })
                .ConfigureAppConfiguration((builderContext, config) => {
                    Console.WriteLine(Directory.GetCurrentDirectory());
                    //config.SetBasePath(Directory.GetCurrentDirectory());
                    //config.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
                })
                .Build();
    }
}
