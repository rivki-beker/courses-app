using Microsoft.AspNetCore.Mvc;
using serverProject.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace serverProject.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private static List<Course> courses = new List<Course>  {
                new Course(1, "Advanced photography", 1, 12, new DateTime(2022, 3, 15), new List<string> { "Lighting", "Composition", "Post-processing"}, LearningWay.Zoom, 1, "../../assets/courses images/img1.jpg"),
                new Course(2, "Development of bots and automations", 2, 10, new DateTime(2022, 4, 10), new List<string> { "Introduction to automation", "Building bots", "Automating tasks"}, LearningWay.frontal, 2, "../../assets/courses images/img2.jpg"),
                new Course(3, "Sound and studio productions", 3, 8, new DateTime(2022, 4, 25), new List<string> { "Sound editing", "Music production", "Mixing and mastering"}, LearningWay.Zoom, 3, "../../assets/courses images/img3.jpg"),
                new Course(4, "NLP presuppositions", 4, 15, new DateTime(2022, 5, 5), new List<string> { "NLP presuppositions", "Communication models", "State management"}, LearningWay.frontal, 4, "../../assets/courses images/img4.jpg"),
                new Course(5, "Architectural rendering", 5, 6, new DateTime(2022, 5, 20), new List<string> { "3D modeling", "Texturing", "Rendering"}, LearningWay.Zoom, 5, "../../assets/courses images/img5.jpg")
            };
        private static int counter = 0;
        // GET: api/<CourseController>
        [HttpGet]
        public IEnumerable<Course> Get()
        {
            return courses;
        }

        // GET api/<CourseController>/5
        [HttpGet("{id}")]
        public Course Get(int id)
        {
            return courses.Find(c=>c.id==id);
        }

        // POST api/<CourseController>
        [HttpPost]
        public void Post([FromBody] Course value)
        {
            value.id = ++counter;
            courses.Add(value);
        }

        // PUT api/<CourseController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Course value)
        {
            var c = courses.Find(c => c.id == id);
            if (c is null)
            {
                value.id = ++counter;
                courses.Add(value);
            }
            else
            {
                c.name = value.name;
                c.start = value.start;
                c.countOfLessons = value.countOfLessons;
                c.categoryId = value.categoryId;
                c.image = value.image;
                c.learningWay = value.learningWay;
                c.syllabus = value.syllabus;
                c.lecturerId = value.lecturerId;    
            }
        }

        // DELETE api/<CourseController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var c= courses.Find(c => c.id == id);
            courses.Remove(c);
        }
    }
}
