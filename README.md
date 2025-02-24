
# Assistly App

## 📄 Overview  
The `assistly-app` repository is a web application project built with **Next.js**. In this project I used advanced tools like GraphQL and StepZen, and utilizing Tailwind CSS for efficient styling.

## 📂 Project Structure  

- **`app/` Directory:** Contains the main application components and pages. The entry point is `app/page.tsx`, which serves as the homepage.  

- **`components/` Directory:** Houses reusable UI components utilized across various parts of the application.  

- **`graphql/` Directory:** Manages GraphQL-related files, indicating that the application interacts with a GraphQL API for data fetching.  

- **`lib/` Directory:** Includes utility functions and libraries that support the application's core functionality.  

- **`public/` Directory:** Stores static assets like images, fonts, and other public resources accessible to the client.  

- **`stepzen/` Directory:** Contains configuration and schema files for StepZen, a platform that simplifies connecting to various data sources through GraphQL.  

- **`types/` Directory:** Defines TypeScript types and interfaces, ensuring type safety and enhancing code reliability.  

## 🔧 Key Configuration Files  

- **`next.config.ts`:** The Next.js configuration file where custom settings and plugins are defined to modify the default build and runtime behavior.  

- **`tailwind.config.ts`:** Configuration for Tailwind CSS, a utility-first CSS framework, indicating that the project employs Tailwind for styling purposes.  

- **`stepzen.config.json`:** Configuration file for StepZen, detailing the setup for connecting to external data sources via GraphQL.  

- **`package.json`:** Lists the project's dependencies, scripts, and metadata. Notable dependencies include Next.js, React, Tailwind CSS, and StepZen, among others.  

## 🚀 Setup and Development  

To set up the development environment:

```bash
# Install Dependencies
npm install

# Start Development Server
npm run dev
```

The application will be accessible at `http://localhost:3000/` by default.

## ✨ Features  

- **GraphQL Integration:** Utilizes GraphQL for efficient data retrieval, enabling the application to request only the necessary data.  

- **StepZen Usage:** Implements StepZen to streamline the process of connecting and managing multiple data sources through a unified GraphQL endpoint.  

- **Tailwind CSS for Styling:** Employs Tailwind CSS, allowing for rapid and consistent UI development with utility-first CSS classes.  

- **TypeScript Support:** The inclusion of TypeScript enhances code quality and maintainability by providing static type checking.

  ![image](https://github.com/user-attachments/assets/cedef1fe-6aeb-4f55-af87-f16985faa807)

