using System.Linq;
using metric_api.tests;
using Xunit;

public class BasicTests : IntegrationTests
{
    [Fact]
    public void should_initialize_application_with_some_value()
    {
        Dispose();
        StartApp();

        // Act
        var values = _dataContext.Metrics.ToList();

        // Assert
        Assert.Single(values);
    }
}