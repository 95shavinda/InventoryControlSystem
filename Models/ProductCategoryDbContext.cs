using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inventory_Control_System.Models
{
    public class ProductCategoryDbContext : DbContext
    {
        public ProductCategoryDbContext(DbContextOptions<ProductCategoryDbContext> options) : base(options)
        {

        }

        public DbSet<Product_Category> ProductCategoryDetails { get; set; }

        public DbSet<Product> ProductDetails { get; set; }
    }
}
