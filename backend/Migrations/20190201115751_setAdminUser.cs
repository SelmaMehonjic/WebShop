using Microsoft.EntityFrameworkCore.Migrations;

namespace TodoApi.Migrations
{
    public partial class setAdminUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("UPDATE Users SET IsAdmin = 1 WHERE UserName = 'selma' ");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
