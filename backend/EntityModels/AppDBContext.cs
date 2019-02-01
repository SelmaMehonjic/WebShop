using backend.EntityModels;
using Microsoft.EntityFrameworkCore;

namespace TodoApi.EntityModels
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options) : base(options) {

        }
        public DbSet <Product> Products {get; set; }
        public DbSet <Category> Categories {get; set; }

        public DbSet <Orders> Orders {get;set;}
        public DbSet <User> Users {get;set;}

           protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

       }

        
    }

}