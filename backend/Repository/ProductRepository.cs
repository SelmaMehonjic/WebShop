using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TodoApi.EntityModels;

namespace TodoApi.Repository
{
    public interface IProductRepository
    {
        Task<IEnumerable<Product>> GetProducts();
        Task<Product> GetProductById(int id);
        Task<Product> CreateProduct(Product product);
        Task<Product> UpdateProduct(Product product);
        Task<int> DeleteProduct(int id);
        Task<IEnumerable<Product>> GetProductsByCategory(int categoryId);


    }
    public class ProductRepository : IProductRepository
    {
        private readonly AppDBContext _context;
        public ProductRepository(AppDBContext context)
        {
            _context = context;
        }
        public async Task<Product> CreateProduct(Product product)
        {
            await _context.AddAsync(product);
            await _context.SaveChangesAsync();
            return product;
            // throw new System.NotImplementedException();
        }


        public async Task<int> DeleteProduct(int id)
        {
            var deleted = await GetProductById(id);
            _context.Products.Remove(deleted);
            await _context.SaveChangesAsync();

            return id;
            throw new System.NotImplementedException();
        }

        public async Task<Product> GetProductById(int id)
        {
            return await _context.Products.FirstOrDefaultAsync(p => p.Id == id);
            throw new System.NotImplementedException();
        }

        public async Task<IEnumerable<Product>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        public async Task<IEnumerable<Product>> GetProductsByCategory(int categoryId)
        {
           return await _context.Products.Where(p => p.CategoryId == categoryId).ToListAsync();
        }

        public async Task<Product> UpdateProduct(Product product)
        {
            _context.Update(product);
            await _context.SaveChangesAsync();
            return product;
        }
    }
}