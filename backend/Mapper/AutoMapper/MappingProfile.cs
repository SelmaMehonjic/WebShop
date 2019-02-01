using System.Collections.Generic;
using AutoMapper;
using TodoApi.EntityModels;
using TodoApi.ViewModels;
using System.Linq;

namespace TodoApi.Mappers.AutoMapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {   
            // CreateMap<Product,ProductModel>();
            CreateMap<Orders, OrderModel>().ForMember(dest => dest.Sum, opt => opt.MapFrom(src => src.Amount * src.Product.Price));
            CreateMap<IEnumerable<Orders>, OrderListModel>()
            .ForMember(dest => dest.Orders, opt => opt.MapFrom(src => Mapper.Map<IEnumerable<Orders>, IEnumerable<OrderModel>>(src)))
            .ForMember(dest => dest.TotalSum, opt => opt.MapFrom(src =>src.Sum(s =>s.Amount*s.Product.Price)));
            
        }
    }
}