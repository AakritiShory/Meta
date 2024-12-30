# Meta Project 🌟 
## 🔄 Welcome to Meta!

![Homepage Screenshot](https://drive.google.com/uc?export=view&id=1i2BO6IlcGiEagZhNEFzSo4DnmKbAMYZq)


## 🌐 Overview

Meta is a modern project management application inspired by industry-leading tools. It empowers teams to plan, track, and collaborate efficiently, offering a seamless experience for managing tasks and workflows. Built with cutting-edge technologies, Meta combines intuitive design with powerful functionality to elevate your productivity.

## ✨ Key Features  
- **Dynamic Task Management**: Easily create, assign, and prioritize tasks within customizable workflows.  
- **Collaborative Boards**: Visualize progress with sleek, drag-and-drop kanban boards.  
- **User Management**: Secure authentication and role-based access powered by Clerk.  
- **Real-Time Updates**: Stay synchronized with live updates for team activities and task changes.  
- **Intuitive UI/UX**: Built with Shadcn UI and styled using Tailwind CSS for a responsive, accessible interface.  
- **Scalable Database**: Leveraging NeonDB for reliable and efficient data storage.  
- **Mobile-First Design**: Enjoy the same seamless experience on all devices.
  
## 🛠️ Tech Stack  
- **Frontend**: Next.js for blazing-fast and scalable UI development.  
- **Styling**: Tailwind CSS and Shadcn UI for modern, responsive designs.  
- **Authentication**: Clerk for secure and user-friendly login functionality.  
- **Database**: NeonDB for high-performance data handling.  

## Table of Contents

1. [Getting Started](#getting-started)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)

## 🚀Getting Started

To get started with the project, follow the instructions below to set up your environment.

###📱Prerequisites

- Node.js (v14 or later)
- PostgreSQL Database
- Clerk account for authentication

##🖥️Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/jira-clone.git
   cd jira-clone
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env.local` file in the root directory and add your Clerk and database credentials:
   ```plaintext
   NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-frontend-api>
   DATABASE_URL=<your-neondb-connection-string>
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

##🎨Usage

- Navigate to `http://localhost:3000` in your browser.
- Register a new account or log in with an existing one.
- Start creating and managing projects, sprints, and issues.

##🤝Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

##📄License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
