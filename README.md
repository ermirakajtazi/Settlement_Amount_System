# Settlement amount system

## Description

This project is a implementation utilizing Next.js and React. This technical project involves implementing a settlement process between two parties, Party A and Party B. The system should handle iterative negotiation of settlement amount by Party A, along with approvals or objections from Party B. The process should ensure that all changes and responses are reflected on Party A's and Party B's interface.

## Installation

1. Clone this repository to your local machine.
2. Run `npm install` to install the necessary dependencies.

## Available Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm start`: Start the production server.
- `npm run lint`: Lint the project files.
- `npm test`: Run Jest tests.
- `npm run test:watch`: Run Jest tests in watch mode.

## Dependencies

- Next.js: 14.2.3
- React: ^18
- React DOM: ^18
- React Hot Toast: ^2.4.1
- SQLite: ^5.1.1
- SQLite3: ^5.1.7

## Dev Dependencies

- Various testing libraries
- Autoprefixer: ^10.4.19
- Babel Jest: ^29.7.0
- ESLint: ^8
- and more...

## How to Run

1. After installation, run `npm run dev` to start the development server.
2. Access the application in your browser at `http://localhost:3000`.

### Project Structure

This project follows a specific structure:

- **API Folder**: Contains the following files:

  - `database.js`: Database setup file.
  - APIs for:
    - Getting the amount data in the index page.
    - Responding to the amount API.
    - Submitting the amount API.
  - `table.js`: File for creating the table to store the data.

- **Components Folder**: Contains various components:

  - `Button`: Reusable button component.
  - `PartyA` Component.
  - `PartyB` Component.
  - `SettlementAmountStatus` Component.
  - `LoadingSkeleton` Component.

- **Pages Folder (Index Page)**:

  - Utilizes components like `PartyA` and `PartyB`.
  - Fetches data for the amount and settlement status.

- **Hooks Folder**: Contains custom hooks for data fetching and posting:
  - `useAmountData.ts`: Custom hook for fetching data for the index page.
  - `useFetchData.ts`: Custom hook for posting data to the `respondToAmount` and `submitAmount` APIs.

- **Types Folder**: Contains shared interfaces for components:

  - Holds interfaces for component props shared between `PartyA` and `PartyB`.

- **Database**: Contains the following database file:
  - `mydb.db`: Database file used for storing project data.

- **Styling**: Tailwind CSS is used for styles in this project.

- **Environment Configuration**:
  - Includes `.env.local` and process environment configuration.

- **Tests Folder**: Contains test files for components:
  - Test for the `Button` component.
  - Test for the `SettlementState` component.
  - Test for the `LoadingSkeleton` component.
