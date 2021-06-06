using System.Net.Http;
using metric_api.Data;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Xunit;

namespace metric_api.tests
{
    public class IntegrationTests : IClassFixture<WebApplicationFactory<Startup>>
    {
        protected HttpClient _client;
        protected DataContext _dataContext;

        protected IntegrationTests()
        {
            StartApp();
        }

        public void StartApp()
        {
            var factory = new WebApplicationFactory<Startup>()
            .WithWebHostBuilder(builder =>
                {
                    builder.ConfigureServices(services =>
                    {
                        services.AddDbContext<DataContext>(opt =>
                        {
                            opt.UseInMemoryDatabase("MetricsTestDatabase");
                        });

                        ServiceProvider providers = services.BuildServiceProvider(); //TODO: this can be encapsulated
                        _dataContext = providers.GetService<DataContext>();
                    });

                });

            _client = factory.CreateClient();

        }

        public void Dispose()
        {
            _dataContext.Database.EnsureDeleted();
            _client.Dispose();
        }

    }
}