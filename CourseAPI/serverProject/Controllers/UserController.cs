using Microsoft.AspNetCore.Mvc;
using serverProject.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace serverProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private static List<User> users = new List<User>
        {
            new User { id = 1, name = "John Doe",     address="Keilot Yaakov", email = "john@example.com", password = "password1" },
            new User { id = 2, name = "Jane Smith",   address="Keilot Yaakov", email = "jane@example.com", password = "password2" },
            new User { id = 3, name = "Alice Johnson",address="Keilot Yaakov", email = "alice@example.com",password = "password3" }
        };
        private static int counter = 0;
        // GET: api/<UserController>
        //[HttpGet]
        //public IEnumerable<User> Get()
        //{
        //    return users;
        //}
        // GET: api/<UserController>?name=name&password=password
        [HttpGet]
        public ActionResult Get(string name, string password)
        {
            User user=users.Where(x => x.name == name).FirstOrDefault();
            if (user == null)
                return NotFound();
            else if (user.password != password)
                return Unauthorized();
            return Ok(user);
        }
        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            User u = users.Find(u => u.id == id);
            if (u == null)
                return NotFound();
            return Ok(u);
        }

        // POST api/<UserController>
        [HttpPost]
        public void Post([FromBody] User value)
        {
            value.id = ++counter;
            users.Add(value);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] User value)
        {
            var u = users.Find(u => u.id == id);
            if (u is null)
            {
                u.id = ++counter;
                users.Add(u);
            }
            else
            {
                u.name = value.name;
                u.address = value.address;
                u.email = value.email;
                u.password = value.password;
            }
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var u = users.Find(u => u.id == id);
            users.Remove(u);
        }
    }
}
