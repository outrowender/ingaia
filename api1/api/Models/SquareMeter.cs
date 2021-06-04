using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace metric_api.Models
{
    public class SquareMeter
    {
        public SquareMeter(float value)
        {
            this.Meters = 1;

            if (value <= 0) throw new ArgumentException("Square meter should be over zero value!");
            this.Value = value;
        }

        public static SquareMeter Deserialize(string value)
        {
            return JsonSerializer.Deserialize<SquareMeter>(value);
        }

        [Key]
        [JsonIgnore]
        public int Id { get; set; } //this field is required by EF to work
        public int Meters { get; set; }
        public float Value { get; set; }

    }
}
