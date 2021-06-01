
using metric_api.Models;
using Microsoft.EntityFrameworkCore;

namespace metric_api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<SquareMeter> Metrics { get; set; }

    }
}