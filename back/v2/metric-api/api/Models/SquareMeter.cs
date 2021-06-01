using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace metric_api.Models
{
    public class SquareMeter
    {
        public SquareMeter(float value)
        {
            this.meters = 1;
            this.value = value;
        }

        [Key]
        [JsonIgnore]
        public int Id { get; set; } //this field is required by EF to work
        public int meters { get; set; }
        public float value { get; set; }

    }
}
