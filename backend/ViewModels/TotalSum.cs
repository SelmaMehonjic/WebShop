using System.Collections.Generic;

namespace TodoApi.ViewModels
{
    public class OrderListModel
    {
        public IEnumerable<OrderModel> Orders { get; set; }

        public int TotalSum { get; set; }
    }
}