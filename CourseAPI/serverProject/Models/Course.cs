namespace serverProject.Models
{
    public enum LearningWay { frontal, Zoom }
    public class Course
    {
        public int id { get; set; }
        public string name { get; set; }
        public int categoryId { get; set; }
        public int countOfLessons { get; set; }
        public DateTime? start { get; set; }
        public List<string>? syllabus { get; set; }
        public LearningWay? learningWay { get; set; }
        public int lecturerId { get; set; }
        public string? image { get; set; }

        public Course(int id, string name, int categoryId, int countOfLessons, 
            DateTime? start, List<string>? syllabus, LearningWay? learningWay, int lecturerId, string? image)
        {
            this.id = id;
            this.name = name;
            this.categoryId = categoryId;
            this.countOfLessons = countOfLessons;
            this.start = start;
            this.syllabus = syllabus;
            this.learningWay = learningWay;
            this.lecturerId = lecturerId;
            this.image = image;
        }
    }
}
