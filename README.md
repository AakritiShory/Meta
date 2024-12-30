# Meta Project
## Welcome to Meta!

![Homepage Screenshot](https://drive.google.com/uc?export=view&id=1i2BO6IlcGiEagZhNEFzSo4DnmKbAMYZq)



## Overview

This project is a full-stack application that replicates the functionality of Jira, built using **Next.js**, **Shadcn UI**, **Tailwind CSS**, **Clerk**, and **NeonDB**. It serves as a comprehensive tutorial for setting up a robust project management tool.

## Features

- **User Authentication**: Secure login and registration using Clerk.
- **PostgreSQL Database**: Managed with NeonDB for data storage.
- **Project Management**: Create and manage organizations, projects, sprints, and issues.
- **Responsive UI**: Built with Shadcn UI and styled using Tailwind CSS.
- **Custom API Calls**: Efficient data fetching and state management.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Project Structure](#project-structure)
5. [Contributing](#contributing)
6. [License](#license)

## Getting Started

To get started with the project, follow the instructions below to set up your environment.

### Prerequisites

- Node.js (v14 or later)
- PostgreSQL Database
- Clerk account for authentication

## Installation

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

## Usage

- Navigate to `http://localhost:3000` in your browser.
- Register a new account or log in with an existing one.
- Start creating and managing projects, sprints, and issues.

## Project Structure

```
jira-clone/
├── components/         # Reusable components
├── pages/              # Next.js pages
├── public/             # Static assets
├── styles/             # Global styles
├── utils/              # Utility functions
└── ...
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
