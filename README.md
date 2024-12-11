# Fetch Posts React Application

## Description

This React application fetches posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts) and allows users to search for posts by:

1. **User ID**
2. **Post ID**

Users can view detailed information about the posts, including the User ID, Post ID, and Title, based on their search criteria. Additionally, the application dynamically displays the range of Post IDs for each User ID.

---

## Features

- Fetches data using the `axios` library.
- Displays a searchable list of posts.
- Search functionality supports:
  - Filtering by User ID.
  - Filtering by Post ID.
  - Combined filtering using both User ID and Post ID.
- Displays the range of Post IDs for each User ID dynamically.

---

## Project Structure

The application is structured as follows:

```
src/
├── components/
│   └── FormPosts.jsx  # Main component handling post fetching and search functionality
├── App.js             # Application entry point
```

---

## How to Run the Application

### Prerequisites

Ensure that Node.js and npm are installed on your system.

### Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-folder>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

---

## API Used

- **Endpoint:** [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
- **Method:** GET
- **Response Format:** JSON

---

## Components

### FormPosts.jsx

- Fetches posts from the API.
- Renders input fields for User ID and Post ID.
- Filters and displays posts based on search criteria.
- Dynamically calculates and displays Post ID ranges for each User ID.

### App.js

- Imports and renders the `FormPosts` component.

---

## Example Usage

### User ID Post ID Ranges

- **User ID 1:** Post IDs 1 - 10
- **User ID 2:** Post IDs 11 - 20
- **User ID 3:** Post IDs 21 - 30

### Search Results

#### Input:

- User ID: `1`
- Post ID: `2`

#### Output:

- **User ID:** 1
- **Post ID:** 2
- **Title:** "Title of the post"

---

## Dependencies

- **React**: Frontend library for building UI.
- **Axios**: HTTP client for fetching data.
- **JSONPlaceholder API**: Provides mock data for testing and prototyping.

---

## Future Enhancements

- Add pagination for better user experience when dealing with large datasets.
- Provide dropdowns for selecting User IDs and Post IDs.
- Add styling with a CSS framework such as TailwindCSS or Material-UI.

---

## License

This project is licensed under the MIT License.
