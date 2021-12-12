using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Inventory_Control_System.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }

        public int Category { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string ProductName { get; set; }

        [Column(TypeName = "nvarchar(1000)")]
        public string ProductDescription { get; set; }

        [Column(TypeName = "nvarchar(10)")]
        public string ProductPrice { get; set; }

        public int ProductQuantity { get; set; }
    }
}
