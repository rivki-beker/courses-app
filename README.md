# Course Management System
**This C# and Angular-based project implements a course management system. It features user registration and login, course browsing, dynamic course creation with subject management, course detail views, search functionality, and frontal/Zoom course distinction. The system utilizes Bootstrap for styling and SweetAlert for user interactions.**

## Features

- **User Management:**
  - Login and Registration options for users.
  - User information stored in sessionStorage (cleared on logout). Note: You might want to consider using localStorage instead of sessionStorage for persisting user information across sessions.
  - Distinction between user and lecturer roles.

- **Course Management:**
  - View a list of all existing courses.
  - View complete details of individual courses.
  - (Lecturer only) Add new courses.
  - (Lecturer only) Edit existing course details.
  - Input validation for course creation.
  - Dynamic subject entry for courses (adding/removing text boxes).

- **Course Display:**
  - Icons indicating course type (frontal or Zoom).
  - Search functionality for courses:
      - By name
      - By category
      - By learning method (frontal/Zoom).

## Technologies Used
  - C# (.NET)
  - Angular
  - Bootstrap
  - SweetAlert

## External Libraries
  - Bootstrap for styling.
  - SweetAlert (Swal) for user interactions.

## Usage

### Prerequisites
- .NET SDK (specific version recommended).
- Node.js and Angular CLI.

### Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/estyxxxx/your-repository-name.git
   cd your-repository-name
   ```

2. **Backend Setup (C# .NET in `CourseAPI` folder):**
   - Navigate to the `CourseAPI` directory:
     ```bash
     cd CourseAPI
     ```
   - Restore NuGet packages:
     ```bash
     dotnet restore
     ```
   - Run the backend server:
     ```bash
     dotnet run
     ```

3. **Frontend Setup (Angular in `courseProject` folder):**
   - Open a new terminal and navigate to the `courseProject` directory:
     ```bash
     cd ../courseProject
     ```
   - Install Angular dependencies:
     ```bash
     npm install
     ```
   - Start the Angular development server:
     ```bash
     ng serve
     ```

4. **Access the Application:**
   - Open your browser and navigate to `http://localhost:4200` to access the frontend.

## Diagrams
Here is a diagram of the registration and login process:
<img width="947" alt="English Angular Project Diagram" src="https://github.com/estyxxxx/AngularProject/blob/main/English%20Angular%20Project%20Diagram.jpg">

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.