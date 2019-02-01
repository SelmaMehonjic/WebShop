using System;

namespace TodoApi.ViewModels
{
    public class OrderModel
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public ProductModel Product { get; set; }
        public int Amount { get; set; }
        public int Sum { get; set; }
        public bool IsOrdered { get; set; }
        public DateTime OrderDate { get; set; }
        public int userId { get; set; }

    }
}