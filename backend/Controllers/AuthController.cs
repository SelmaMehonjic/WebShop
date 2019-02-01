using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using backend.EntityModels;
using backend.ViewModels;
using Microsoft.AspNetCore.Mvc;
// using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace backend.Controllers
{
        [Route("api/[controller]")]
    // [ApiController]
    public class AuthController : Controller
    {
             private readonly Repository.IAuthRepository _auth;

        public IConfiguration _config { get; }

        public AuthController(Repository.IAuthRepository auth, IConfiguration config)
        {
            _auth = auth;
            _config = config;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Registration( [FromBody] UserModel user)
        {   
            user.name = user.name.ToLower();
            if (await _auth.UserExist(user.name))
            {
                return BadRequest("username already exist");
            }
            var newUser = new User
            {
                UserName = user.name
            };
            var createdUser = await _auth.Register(newUser, user.password);
            return StatusCode(201);
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login( [FromBody] UserModel user) {
            var finduser = await _auth.Login(user.name, user.password);
            if(finduser == null) {
                return Unauthorized();
            }
            var claims = new[] {
                new Claim(ClaimTypes.NameIdentifier, finduser.Id.ToString()),
                new Claim(ClaimTypes.Name, finduser.UserName),
                new Claim(ClaimTypes.AuthorizationDecision , finduser.IsAdmin.ToString())
            };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var tokenDescriptor = new SecurityTokenDescriptor {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return Ok(new{
                token = tokenHandler.WriteToken(token)
            });
        }   
    }
}