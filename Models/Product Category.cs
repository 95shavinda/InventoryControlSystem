using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Inventory_Control_System.Models
{
    public class Product_Category
    {
        [Key]
        public int CategoryID { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string CategoryName { get; set; }

        [Column(TypeName = "nvarchar(1000)")]
        public string CategoryDescription { get; set; }
    }
}
