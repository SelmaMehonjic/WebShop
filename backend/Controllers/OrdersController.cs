using System.Collections;
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
    public class OrdersController : Controller
    {
        private readonly IOrderRepository _repository;
        private readonly IMapper _mapper;
        public OrdersController(IOrderRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] OrderModel order)
        {
            var ord = _mapper.Map<OrderModel,Orders>(order);
            var orderr = await _repository.CreateOrder(ord);
            // var orderrrr = _mapper.Map<OrderModel>(orderr);
            return Ok(order);
        }
        [HttpGet("list/{userId}")]
        public async Task<IActionResult> GetOrderByUserId(int userId)
        {
            var orderList = await _repository.getOrderByUserId(userId);
            var list = _mapper.Map<OrderListModel>(orderList);
            return Ok(list);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> getOrderById(int id)
        {
            var ord = await _repository.getOrderById(id);
            var order = _mapper.Map<OrderModel>(ord);
            return Ok(order);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> updateOrder([FromBody] OrderModel order, int id)
        {
            var ord = Mapper.Map<Orders>(order);
            await _repository.UpdateOrder(ord);
            return Ok();

        }
        [HttpGet("bought/{userId}")]
        public async Task<IActionResult> getBoughtByUserId(int userId) {
         var list = await _repository.getBoughtByUserId(userId);
         var maplist = _mapper.Map<OrderListModel>(list);
         return Ok(maplist);
        }
        [HttpDelete("{id}")]
                public async Task<IActionResult> deleteOrder(int id)
        {
            await _repository.DeleteOrder(id);
            return Ok();

        }
    }
}