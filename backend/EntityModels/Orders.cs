using System;

namespace TodoApi.EntityModels
{
    public class Orders
    {
        public int Id { get; set; }
        public int userId { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }
        public DateTime OrderDate { get; set; }

        public int Amount { get; set; }
        public bool IsOrdered { get; set; }
    }
}