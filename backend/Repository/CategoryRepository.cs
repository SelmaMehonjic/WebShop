using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TodoApi.EntityModels;

namespace TodoApi.Repository
{
    public interface ICategoryRepository
    {
        Task<IEnumerable<Category>> GetCategories();
        Task<Category> GetCategoryById(int id);
        Task<Category> CreateCategory(Category category);
        Task UpdateCategory(Category Category);
        Task DeleteCategory(int id);
    }
    public class CategoryRepository : ICategoryRepository
    {
        private readonly AppDBContext _context;

        public CategoryRepository(AppDBContext context)
        {
            _context = context;
        }

        public async Task<Category> CreateCategory(Category category)
        {
          await  _context.AddAsync(category);
            await _context.SaveChangesAsync();
            return category;
        }

        public async Task DeleteCategory(int id)
        {
            var deleteCat = await GetCategoryById(id);
            _context.Remove(deleteCat);
            await _context.SaveChangesAsync();

        }

        public async Task<IEnumerable<Category>> GetCategories()
        {
            return await _context.Categories.ToListAsync();
        }

        public async Task<Category> GetCategoryById(int id)
        {
            return await _context.Categories.FirstOrDefaultAsync(c => c.Id == id);
        }



        public async Task UpdateCategory(Category category)
        {
            _context.Update(category);
            await _context.SaveChangesAsync();
        }
    }
}