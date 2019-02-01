﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using backend.Repository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using TodoApi.EntityModels;
using TodoApi.Mappers.AutoMapper;
using TodoApi.Repository;
 
namespace TodoApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // services.AddAutoMapper();
            services.AddAutoMapper();  
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddDbContext<AppDBContext>(options => options.UseSqlServer(Configuration.GetConnectionString("Default")));
            services.AddScoped<IProductRepository, ProductRepository> ();
            services.AddScoped<ICategoryRepository, CategoryRepository> ();
            services.AddScoped<IOrderRepository, OrderRepository> ();
            services.AddScoped<IAuthRepository, AuthRepository> ();
            services.AddCors();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(
                options => {
                    options.TokenValidationParameters = new TokenValidationParameters {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration.GetSection("AppSettings:Token").Value)),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                }
            );

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                  app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().AllowCredentials());
            }
            else
            {
                app.UseHsts();
            }
            // app.UseHttpsRedirection();
             app.UseAuthentication();
            app.UseMvc();
        }
    }
}
