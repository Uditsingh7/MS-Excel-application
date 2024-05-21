# Simple React Table Project

This is a simple React project that implements a basic table similar to an Excel spreadsheet. The table allows users to enter numbers into cells and perform a basic sum operation by typing `=sum` in a cell, which will sum all numbers in the column above that cell.
![image](https://github.com/Uditsingh7/MS-Excel-application/assets/62390532/46065b39-d2bf-4122-9837-4d58d0bf7d5f)

## Features

- Editable table cells.
- Basic sum functionality by typing `=sum` in a cell.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Uditsingh7/MS-Excel-application.git
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Application

1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000`.

### Usage

1. Enter numbers into cells.
2. To sum the values in a column, click on a cell below the numbers you want to sum, type `=sum`, and press Enter or click outside the cell. The cell will display the sum of the numbers in the column above it.

### Project Structure

- `src/components/Table.js`: Main table component with editable cells and sum functionality.
- `src/css/table.css`: Styling for the table component.

### Code Overview

- `Table.js`:
  - Manages the state of the table data.
  - Handles cell changes and clicks.
  - Evaluates the `=sum` formula to calculate and display the sum of the column above the selected cell.

- `Table.css`:
  - Basic styling for the table and selected cell highlighting.

### Example

Enter the following values in the first column:

```
A1: 10
A2: 20
A3: 30
```

In cell A4, type `=sum`. The cell A4 will update to show `60`, which is the sum of the values in cells A1, A2, and A3.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

