# Expense Tracker

A mobile expense-tracking application built with React Native, Expo, and TypeScript. The app allows users to record daily expenses, organize them by category, view expense details, and manage their spending. Expense records are stored locally on the device using AsyncStorage.

## Features

- **Track Expenses:** View recorded expenses and the total amount spent.
- **Add Expenses:** Enter an expense title, amount, category, and date.
- **Expense Categories:** Organize expenses into Food, Travel, Shopping, and Other.
- **Input Validation:** Validate required fields and ensure the expense amount is positive.
- **Expense Details:** View the details of an individual expense.
- **Delete Expenses:** Remove an expense from the list.
- **Local Data Storage:** Store expense records using AsyncStorage so they remain available after restarting the app.
- **Cross-Platform Support:** Run the application on Android, iOS, and the web using Expo.

## Tech Stack

- **React Native** – Build the mobile user interface.
- **Expo SDK 57** – Develop and run the application.
- **TypeScript** – Add static typing to the codebase.
- **Expo Router** – Handle file-based navigation between screens.
- **AsyncStorage** – Persist expense data locally on the device.
- **React Navigation 7** – Navigation-related dependencies.
- **React Native Reanimated** – Support animations used in the interface.

## Project Structure

```text
ExpenseTracker/
├── assets/
│   └── images/
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   ├── add-expense.tsx
│   │   ├── expense-detail.tsx
│   │   └── explore.tsx
│   ├── components/
│   ├── constants/
│   │   └── theme.ts
│   ├── context/
│   │   └── ExpenseContext.tsx
│   ├── hooks/
│   ├── storage/
│   │   └── expenses.ts
│   ├── global.css
│   ├── app.json
│   ├── package.json
│   └── README.md
```

## Installation and Setup

### Prerequisites

- Node.js and npm
- Expo-compatible development environment
- Expo Go or an Android/iOS emulator for mobile testing

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project directory

```bash
cd ExpenseTracker
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
npx expo start
```

Follow the instructions in the terminal to open the app on your device or emulator.

### Run on specific platforms

**Android**
```bash
npm run android
```

**iOS**
```bash
npm run ios
```

**Web**
```bash
npm run web
```

## Usage

1. Launch the Expense Tracker application.
2. View your recorded expenses and total spending on the home screen.
3. Open the add-expense screen to enter the expense title, amount, category, and date.
4. Save the expense to add it to your records.
5. Select an expense to view its details.
6. Delete an expense when it is no longer needed.
7. Restart the app to access previously saved expenses.

## Data Storage

The application uses AsyncStorage to store expense records locally on the device. The data is saved in JSON format and loaded when the application starts.

The current implementation uses local storage and does not require a remote database or backend server.

## Screenshots

Add screenshots of your actual application here to demonstrate the home screen, add-expense screen, and expense-details screen.

For example, after adding screenshot files to your repository:

```markdown
![Home Screen](assets/screenshots/home.png)
![Add Expense Screen](assets/screenshots/add-expense.png)
![Expense Details Screen](assets/screenshots/expense-detail.png)
```

## License

This project includes the MIT License. Refer to the [LICENSE](LICENSE) file for the license terms.
