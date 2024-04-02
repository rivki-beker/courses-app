namespace serverProject.Models
{
    public class Lecturer
    {
        public int id { get; set; }
        public string? name { get; set; }
        public string? address { get; set; }
        public string? email { get; set; }
        public string password { get; set; }

        public Lecturer()
        {
            
        }
        public Lecturer(int id, string? name, string? address, string? email, string password)
        {
            this.id = id;
            this.name = name;
            this.address = address;
            this.email = email;
            this.password = password;
        }
    }
}
