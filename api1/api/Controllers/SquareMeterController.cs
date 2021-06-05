using System.Threading.Tasks;
using metric_api.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace metric_api.Controllers
{
    [ApiController]
    [Route("api/square-meter")]
    public class SquareMeterController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAsync([FromServices] DataContext _ctx)
        {
            var metrics = await _ctx.Metrics.FirstOrDefaultAsync();
            if (metrics == null) return NotFound();

            return StatusCode(200, metrics);
        }
    }
}
