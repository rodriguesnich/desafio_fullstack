# Lead Management System

This is a Full Stack Lead Management System built with .NET 6 backend and planned React/Angular frontend. The system allows management of sales leads with features for accepting or declining leads, applying discounts, and sending notifications.

## Current State

The project is currently in development with the following implemented:
- Backend API with CQRS pattern for queries
- Domain-Driven Design (DDD) architecture
- Entity Framework Core with SQLite (temporary database for development)
- Basic lead management endpoints

## Prerequisites

- .NET 6 SDK
- Visual Studio Code or Visual Studio 2022
- Entity Framework Core CLI tools (for migrations)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd desafio_fullstack/backend
```

### 2. Install .NET Tools

If you haven't installed Entity Framework Core tools:

```bash
dotnet tool install --global dotnet-ef
```

### 3. Database Setup

The project currently uses SQLite for rapid development. The database will be created automatically when you run the application, but you can also create it manually:

```bash
dotnet ef database update
```

### 4. Running the Application

```bash
dotnet run
```

The API will be available at:
- https://localhost:5001
- http://localhost:5000

Swagger documentation will be available at:
- https://localhost:5001/swagger

## Project Structure

```
backend/
├── Application/          # CQRS queries and handlers
├── Domain/              # Entities and interfaces
├── Infrastructure/      # Data access and implementations
└── Program.cs          # Application entry point
```

## Development Notes

### Current Database Setup
- Using SQLite for development speed and simplicity
- Easy migration to SQL Server planned (thanks to Entity Framework Core abstraction)
- Database schema is managed through Entity Framework Core migrations

### Planned Features
- Migration to SQL Server
- Implementation of Accept/Decline lead endpoints
- Email notification system
- Frontend implementation
- Docker containerization

### API Endpoints

Currently implemented:
- GET `/api/leads/accepted` - List all accepted leads
- GET `/api/leads/pending` - List all pending leads

Planned:
- POST `/api/leads/{id}/accept` - Accept a lead
- POST `/api/leads/{id}/decline` - Decline a lead

## Future Development

1. SQL Server Migration
   - The transition from SQLite to SQL Server will be straightforward due to Entity Framework Core
   - Update connection string in `appsettings.json`
   - Run new migrations for SQL Server

2. Docker Support
   - Dockerfile and docker-compose files will be added
   - SQL Server container will be included
   - Easy development environment setup

## Contributing

1. Create a feature branch
2. Commit your changes
3. Push to the branch
4. Create a Pull Request

## Testing

Testing infrastructure is being set up. Run tests with:

```bash
dotnet test
```

## License

[Add your license here]
