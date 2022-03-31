using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using DataAccess;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;


namespace api.Extensions
{
	public static class ServicesExtensions
	{
		public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
		{

			services.AddIdentity<User, IdentityRole>(opt =>
				{
					opt.Password.RequireNonAlphanumeric = false;
				}).AddEntityFrameworkStores<DataContext>()
				.AddSignInManager<SignInManager<User>>()
				.AddRoleManager<RoleManager<IdentityRole>>()
				.AddDefaultTokenProviders();

			var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["JWTKey"]));
			services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(opt => {
				opt.TokenValidationParameters = new TokenValidationParameters
				{
					ValidateIssuerSigningKey = true,
					IssuerSigningKey = key,
					ValidateIssuer = false,
					ValidateAudience = false
				};
			});
			services.AddCors(opt =>
			{
				opt.AddPolicy("CorsPolicy", policy =>
				{
					policy
						.AllowAnyHeader()
						.AllowAnyMethod()
						.WithExposedHeaders("WWW-Authenticate")
						.WithOrigins("http://localhost:3000")
						.AllowCredentials();
				});
			});
			services.AddDbContext<DataContext>(opt =>
				{
					opt.UseSqlServer(config.GetConnectionString("DefaultConnection"));
				}
			);
			services.AddScoped<TokenServices>();

			return services;

		}
	}
}
