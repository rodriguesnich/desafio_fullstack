# Full Stack Lead Management System

This project implements a lead management system with a .NET 8 backend API and React TypeScript frontend. The system allows users to view, accept, and decline sales leads through a modern web interface.

## Project Structure

The project is divided into two main parts:

```
desafio_fullstack/
├── backend/           # .NET 8 API with DDD and CQRS
└── frontend/         # React TypeScript SPA with Material-UI
```

## How to Run the Project

### Backend (.NET 8 API)

> **Note**: The project currently uses .NET 8 for development. During the Docker containerization phase, it will be migrated to .NET 6 to meet the technical evaluation requirements.

1. Prerequisites:
   - .NET 8 SDK (for development)
   - SQLite (included in project)

2. Navigate to the backend directory:
```bash
cd backend
```

3. Restore dependencies and run the API:
```bash
dotnet restore
dotnet run
```

The API will be available at `http://localhost:5225`. Swagger documentation can be accessed at `http://localhost:5225/swagger`.

### Frontend (React)

1. Prerequisites:
   - Node.js
   - npm

2. Navigate to the frontend directory:
```bash
cd frontend
```

3. Install dependencies and start the development server:
```bash
npm install
npm start
```

The frontend application will be available at `http://localhost:3000`.

## Technical Approach

### Frontend Architecture

- **UI Framework**: Material-UI (MUI) for a professional and consistent user interface
- **Design Patterns**:
  - Composite Pattern: Used in the LeadCard component hierarchy for flexible card variations
  - Adapter Pattern: Implemented to decouple the API data structure from the UI components
  - (Planned) Observer Pattern: For real-time notifications

### Backend Architecture

- **Technologies**:
  - .NET 8 with Minimal APIs for efficient endpoint creation
  - EF Core with SQLite (ready for SQL Server migration)
  - DDD (Domain-Driven Design) principles

- **Design Patterns & Architecture**:
  - CQRS: Separating read and write operations for better scalability
  - DDD: Clear separation of domain, infrastructure, and application layers
  - Repository Pattern: For data access abstraction