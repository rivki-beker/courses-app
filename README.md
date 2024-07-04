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
      - By learning method (frontal/Zoom)

## Technologies Used
  - C# (.NET)
  - Angular
  - Bootstrap
  - SweetAlert

## External Libraries
  - Bootstrap for styling.
  - SweetAlert (Swal) for user interactions.

## Usage

1. Clone the repository.
2. Run the backend server.
3. Run the Angular application.
4. Access the application through the provided URL.
 
## Diagrams
Here is a diagram of the registration and login process:
<img width="947" alt="English Angular Project Diagram" src="https://github.com/estyxxxx/AngularProject/blob/main/English%20Angular%20Project%20Diagram.jpg">

## Screenshots
Will reveal soon...

## Contributors

- Rivka - [GitHub: rivki-beker](https://github.com/rivki-beker)

## License

This project is licensed under the [MIT License](LICENSE).
