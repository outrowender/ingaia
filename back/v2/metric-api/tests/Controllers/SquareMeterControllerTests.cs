using System.Net;
using System.Threading.Tasks;
using metric_api.Models;
using metric_api.tests;
using Xunit;

public class SquareMeterControllerTests : IntegrationTests
{

    [Fact]
    public async Task should_return_successfull_statuscode_when_application_starts()
    {
        // Act
        var response = await _client.GetAsync("api/square-meter");
        //var content = await response.Content.ReadAsStringAsync(); //TODO: fix json serialization DI

        //var entity = SquareMeter.Deserialize(content);

        // Assert
        Assert.True(response.IsSuccessStatusCode);

        //Assert.NotNull(entity.Meters);
        //Assert.NotNull(entity.Value);
    }

    [Fact]
    public async Task should_return_notfound_when_database_is_empty()
    {
        // Arrange
        _dataContext.Database.EnsureDeleted();

        // Act
        var response = await _client.GetAsync("api/square-meter");

        // Assert
        Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);
    }
}