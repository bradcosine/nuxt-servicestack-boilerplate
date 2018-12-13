using ServiceStack.Configuration;
using ServiceStack.Logging;

namespace ChangeThisNamespace
{
    public class CompositionRoot
    {
        //private static Container instance;

        //private CompositionRoot() { }

        //public static Container GetContainer(IAppSettings appSettings)
        //{
        //    if (instance == null)
        //    {
        //        // Did you know the container can diagnose your configuration? Go to: http://bit.ly/YE8OJj.
        //        instance = new Container();
        //        InitializeContainer(instance, appSettings);
        //        instance.Verify();
        //    }
        //    return instance;
        //}

        //private static void InitializeContainer(Container container, IAppSettings appSettings)
        //{
        //    container.Options.DefaultScopedLifestyle = new AsyncScopedLifestyle();

        //    container.RegisterSingleton<IAppSettings>(() => appSettings);
        //    container.Register<ILog>(() => LogManager.GetLogger(typeof(AppHost)));

        //    var domainAssemblyApi = new[] { typeof(AppHost).Assembly };
        //    container.Register(typeof(IServiceStackValidator<>), domainAssemblyApi, Lifestyle.Transient);

        //    container.Register(typeof(ICommandHandler<>), domainAssemblyApi, Lifestyle.Transient);
        //    container.Register(typeof(ICommandHandlerRailway<>), domainAssemblyApi, Lifestyle.Transient);

        //    container.Register(typeof(IQueryHandler<,>), domainAssemblyApi, Lifestyle.Transient);
        //    container.Register(typeof(IQueryHandlerRailway<,>), domainAssemblyApi, Lifestyle.Transient);

        //    //Additional decorators go here; validation decorators are always last because we always want validation to happen first

        //    container.RegisterDecorator(typeof(ICommandHandler<>), typeof(CommandHandlerServiceStackValidationDecorator<>));
        //    container.RegisterDecorator(typeof(ICommandHandlerRailway<>), typeof(CommandHandlerServiceStackValidationDecoratorRailway<>));

        //    container.RegisterDecorator(typeof(IQueryHandler<,>), typeof(QueryHandlerServiceStackValidationDecorator<,>));
        //    container.RegisterDecorator(typeof(IQueryHandlerRailway<,>), typeof(QueryHandlerServiceStackValidationDecoratorRailway<,>));

        //    //Ensure no eventhandlers EVER call commands, because it will confound these generic decorators (will decorate more than once)
        //    container.RegisterSingleton<IDomainEvents, DomainEvents>();
        //    container.Collection.Register(typeof(IEventHandler<>), domainAssemblyApi);
        //    container.Register(typeof(IEventHandler<>), typeof(MultipleDispatchEventHandler<>), Lifestyle.Singleton);

        //    container.RegisterSingleton<IDomainEventsRailway, DomainEventsRailway>();
        //    container.Collection.Register(typeof(IEventHandlerRailway<>), domainAssemblyApi);
        //    container.Register(typeof(IEventHandlerRailway<>), typeof(MultipleDispatchEventHandlerRailway<>), Lifestyle.Singleton);
        //}
    }
}
