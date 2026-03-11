using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SmarterTickets.API.Migrations
{
    /// <inheritdoc />
    public partial class AddTicketPriority : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ID",
                table: "Tickets",
                newName: "Id");

            migrationBuilder.AddColumn<int>(
                name: "Priority",
                table: "Tickets",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Priority",
                table: "Tickets");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Tickets",
                newName: "ID");
        }
    }
}
