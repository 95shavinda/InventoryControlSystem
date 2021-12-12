using Inventory_Control_System.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InventoryControlSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventroyControllSystemController : ControllerBase
    {

        private readonly ProductCategoryDbContext _context;

        public InventroyControllSystemController(ProductCategoryDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product_Category>>> GetProductCategory()
        {
            return await _context.ProductCategoryDetails.ToListAsync();
        }

        // GET:
        [HttpGet("{id}")]
        public async Task<ActionResult<Product_Category>> GetProductCategoryDetails(int id)
        {
            var productCategoryDetail = await _context.ProductCategoryDetails.FindAsync(id);

            if (productCategoryDetail == null)
            {
                return NotFound();
            }

            return productCategoryDetail;
        }

        // PUT:
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProductCategoryDetails(int id, Product_Category productCategoryDetail)
        {
            if (id != productCategoryDetail.CategoryID)
            {
                return BadRequest();
            }

            _context.Entry(productCategoryDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryDetailExists(id))
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

        // POST:
        [HttpPost]
        public async Task<ActionResult<Product_Category>> AddProductCategoryDetail(Product_Category productCategoryDetail)
        {
            _context.ProductCategoryDetails.Add(productCategoryDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductCategoryDetail", new { id = productCategoryDetail.CategoryID }, productCategoryDetail);
        }

        // DELETE:
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductCategoryDetail(int id)
        {
            var productCategoryDetail = await _context.ProductCategoryDetails.FindAsync(id);
            if (productCategoryDetail == null)
            {
                return NotFound();
            }

            _context.ProductCategoryDetails.Remove(productCategoryDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CategoryDetailExists(int id)
        {
            return _context.ProductCategoryDetails.Any(e => e.CategoryID == id);
        }



    }


}