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
    public class ProductController : Controller
    {
        private readonly IProductRepository _repository;
        private readonly IMapper _mapper;

        public ProductController(IProductRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] ProductModel product)
        {
            var newProduct = _mapper.Map<Product>(product);
            await _repository.CreateProduct(newProduct);
            return Ok(newProduct);
        }



        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _repository.GetProducts();
            var returned = _mapper.Map<IEnumerable<ProductModel>>(products);
            return Ok(returned);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductsById(int id)
        {
            var products = await _repository.GetProductById(id);
            var returned = _mapper.Map<ProductModel>(products);
            return Ok(returned);
        }
        [HttpPut()]
        public async Task<IActionResult> UpdateProduct([FromBody] ProductModel update)
        {
            var prod = _mapper.Map<Product>(update);
           var prodd =  await _repository.UpdateProduct(prod);
            return Ok(prodd);

        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            await _repository.DeleteProduct(id);
            return Ok();
        }
        [HttpGet("category/{categoryId}")]
        public async Task<IActionResult> GetProductByCategory(int categoryId) {
         var list =  await _repository.GetProductsByCategory(categoryId);
         return Ok(list);

        }
    }
}