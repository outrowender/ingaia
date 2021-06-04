using System;
using metric_api.Models;
using Xunit;

public class SquareMeterTests
{
    [Theory]
    [InlineData(0)]
    [InlineData(-1)]
    public void should_throw_when_pass_a_zero_or_negative_value(float value)
    {
        // Act & Assert
        Assert.Throws<ArgumentException>(() => new SquareMeter(value));
    }

}