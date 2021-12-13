using Inventory_Control_System.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InventoryControlSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryProductController : ControllerBase
    {
        private readonly ProductCategoryDbContext _context;

        public InventoryProductController(ProductCategoryDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProduct()
        {
            return await _context.ProductDetails.ToListAsync();
        }

        // Product Details - GET:
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProductDetails(int id)
        {
            var productDetail = await _context.ProductDetails.FindAsync(id);

            if (productDetail == null)
            {
                return NotFound();
            }

            return productDetail;
        }

        // Product Details - PUT:
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProductDetails(int id, Product productDetail)
        {
            if (id != productDetail.ProductId)
            {
                return BadRequest();
            }

            _context.Entry(productDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // Product Details - POST:
        [HttpPost]
        public async Task<ActionResult<Product>> AddProductDetail(Product productDetail)
        {
            _context.ProductDetails.Add(productDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductCategoryDetail", new { id = productDetail.ProductId }, productDetail);
        }

        // Product Details - DELETE:
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductDetail(int id)
        {
            var productDetail = await _context.ProductDetails.FindAsync(id);
            if (productDetail == null)
            {
                return NotFound();
            }

            _context.ProductDetails.Remove(productDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductDetailExists(int id)
        {
            return _context.ProductDetails.Any(e => e.ProductId == id);
        }

    }
}
