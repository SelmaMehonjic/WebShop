using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TodoApi.EntityModels;

namespace TodoApi.Repository
{
    public interface IOrderRepository
    {
        Task<IEnumerable<Orders>> getOrderByUserId(int userId);
        Task<IEnumerable<Orders>> getBoughtByUserId(int userId);
        Task<Orders> getOrderById(int Id);
        Task UpdateOrder(Orders order);
        Task<Orders> CreateOrder(Orders order);
        Task DeleteOrder(int id);
    }
    public class OrderRepository : IOrderRepository
    {
        private readonly AppDBContext _context;
        public OrderRepository(AppDBContext context)
        {
            _context = context;
        }
        public async Task<Orders> CreateOrder(Orders order)
        {
            await _context.AddAsync(order);
            await _context.SaveChangesAsync();
            return order;
        }

        public async Task DeleteOrder(int id)
        {
            var delete = await getOrderById(id);
            _context.Remove(delete);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Orders>> getBoughtByUserId(int userId)
        {
            return await _context.Orders.Where(ord => ord.userId == userId && ord.IsOrdered == true)
            .Include(ord => ord.Product).ToListAsync();
        }

        public async Task<Orders> getOrderById(int Id)
        {
            return await _context.Orders.Where(ord => ord.Id == Id).Include(ord => ord.Product).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Orders>> getOrderByUserId(int userId)
        {
            return await _context.Orders.Where(ord => ord.userId == userId && ord.IsOrdered == false)
            .Include(o => o.Product).ToListAsync();

        }

        public async Task UpdateOrder(Orders order)
        {
            _context.Update(order);
            await _context.SaveChangesAsync();
        }
    }
}