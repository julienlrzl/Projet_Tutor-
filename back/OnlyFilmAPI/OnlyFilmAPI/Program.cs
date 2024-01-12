using Microsoft.EntityFrameworkCore;
using Movie.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<MovieContext>(
    options =>
    {
        options.UseMySql(builder.Configuration.GetConnectionString("MovieBD"),
        Microsoft.EntityFrameworkCore.ServerVersion.Parse("10.4.24-MariaDB"));
    });

// Ajoutez la configuration CORS ici
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
<<<<<<< HEAD
        builder => builder.WithOrigins("http://localhost:3000") // URL du client React

=======
        builder => builder.WithOrigins("http://localhost:3000") // URL de votre client React
>>>>>>> fb930acd804c3e75a8ecb186671c0acd09923e74
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Placez UseCors avant UseAuthorization
app.UseCors("AllowSpecificOrigin");

app.UseAuthorization();

app.MapControllers();

app.Run();
