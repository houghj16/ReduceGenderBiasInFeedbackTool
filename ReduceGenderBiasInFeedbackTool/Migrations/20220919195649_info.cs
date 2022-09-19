using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ReduceGenderBiasInFeedbackTool.Migrations
{
    public partial class info : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Body",
                table: "Feedback");

            migrationBuilder.AddColumn<string>(
                name: "Body1",
                table: "Feedback",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Body2",
                table: "Feedback",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Body3",
                table: "Feedback",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Body4",
                table: "Feedback",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Body5",
                table: "Feedback",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Body6",
                table: "Feedback",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Body1",
                table: "Feedback");

            migrationBuilder.DropColumn(
                name: "Body2",
                table: "Feedback");

            migrationBuilder.DropColumn(
                name: "Body3",
                table: "Feedback");

            migrationBuilder.DropColumn(
                name: "Body4",
                table: "Feedback");

            migrationBuilder.DropColumn(
                name: "Body5",
                table: "Feedback");

            migrationBuilder.DropColumn(
                name: "Body6",
                table: "Feedback");

            migrationBuilder.AddColumn<string>(
                name: "Body",
                table: "Feedback",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
