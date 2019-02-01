using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TodoApi.EntityModels;
using TodoApi.Repository;
using TodoApi.ViewModels;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    public class CategoryController : Controller
    {
        private readonly ICategoryRepository _repository;
        private readonly IMapper _mapper;
        public CategoryController(ICategoryRepository repository, IMapper mapper)
        {
            _mapper = mapper;
            _repository = repository;
        }
        [HttpGet]
        public async Task<IActionResult> GetCategory()
        {
            var categories = await _repository.GetCategories();
            var returned = _mapper.Map<IEnumerable<CategoryModel>>(categories);
            return Ok(returned);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCategory(int id)
        {
            var category = await _repository.GetCategoryById(id);
            var returned = _mapper.Map<CategoryModel>(category);
            return Ok(returned);
        }
        [HttpPost]
        public async Task<IActionResult> CreateCategory([FromBody] CategoryModel category)
        {
            var entitycat = _mapper.Map<Category>(category);
            await _repository.CreateCategory(entitycat);
            return Ok(entitycat);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            await _repository.DeleteCategory(id);
            return Ok();
        }
                [HttpPut("{id}")]
        public async Task<IActionResult> DeleteCategory([FromBody] CategoryModel category, int id)
        {
            var categorymap = _mapper.Map<Category>(category);
            await _repository.UpdateCategory(categorymap);
            return Ok();
        }
    }
}