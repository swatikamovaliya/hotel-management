# Hotel Management System Documentation

## Languages

- HTML
- CSS
- JavaScript
- TypeScript

## Frameworks

- Frontend: React with Vite and TypeScript
- Backend: Node.js with Express.js
- Database: MongoDB

## Frontend URL

- `localhost:5000`

## Backend URL

- `localhost:3005`

## Routes for Frontend

- Home Page: `localhost:5000/`
- All Hotels Page: `localhost:5000/book`
- Book Room: `localhost:5000/book/:hotelid`
- My Booked Rooms: `localhost:5000/myroom`
- Admin Board: `localhost:5000/admin`

## Routes for Backend

- Hotels: `localhost:5000/hotel/`
- Get Hotel by ID: `localhost:5000/hotel/:id`
- Book Hotel: `localhost:5000/hotel/:id/book`
- My Rooms: `localhost:5000/hotel/myrooms`
- Total Revenue: `localhost:5000/admin/TotalRevenue`
- Subscriptions: `localhost:5000/admin/Subscriptions`

## documentation

## Project Overview

- **Project Name:** Hotel Management System
- **Purpose:** To streamline hotel operations and enhance guest experiences.
- **Structure:**
  - **Frontend:** React with Vite and TypeScript
  - **Backend:** Node.js with Express.js
  - **Database:** MongoDB

## Backend Documentation

Endpoints:

- `/hotel/` (GET):

  - Retrieves a list of all hotels.
  - Response:

    ```json
    {
      "success": true,
      "data": [
        {
          "_id": "hotelId1",
          "name": "Hotel Name 1",
          "rating": 4.5,
          "charges": 100,
          "img": "imageUrl1",
          "description": "Hotel description 1",
          "city": "City 1",
          "country": "Country 1",
          "phone": "phoneNumber1"
        }
        // ... more hotels
      ]
    }
    ```

- /hotel/`create` (POST):

  - Creates a new hotel.
  - Request Body:

    ```json
    {
      "name": "New Hotel Name",
      "rating": 4.8,
      "charges": 150,
      "img": "newImageUrl",
      "description": "New hotel description",
      "city": "New City",
      "country": "New Country",
      "phone": "newPhoneNumber"
    }
    ```

  - Response:

    ```json
    {
      "success": true,
      "data": {
        "_id": "newHotelId"
        // ... hotel properties
      }
    }
    ```

- /hotel/`:id` (GET):

  - Retrieves a specific hotel by its ID.
  - Response:

    ```json
    {
      "success": true,
      "data": {
        "_id": "hotelId"
        // ... hotel properties
      }
    }
    ```

- /hotel/:id/`book` (POST):

  - Books a room in a specific hotel.
  - Request Body:

    ```json
    {
      "hotelId": "hotelId",
      "userId": "userId",
      "name": "Room Name",
      "checkInDate": "checkInDateString",
      "checkOutDate": "checkOutDateString",
      "roomType": "AC", // or "NON-AC"
      "adults": 2,
      "children": 1,
      "totalAmount": 250,
      "phoneNumber": "phoneNumber",
      "email": "email"
    }
    ```

  - Response:

    ```json
    {
      "success": true,
      "data": {
        "_id": "bookingId"
        // ... booking properties
      }
    }
    ```

- /hotel/`myrooms` (POST):

  - Retrieves a list of bookings for a specific user.
  - Request Body:

    ```json
    {
      "userId": "userId"
    }
    ```

  - Response:

    ```json
    {
      "success": true,
      "data": [
        {
          "_id": "bookingId1"
          // ... booking properties
        }
        // ... more bookings
      ]
    }
    ```

- /admin/`TotalRevenue` (GET):

  - Calculates the total revenue from all bookings.
  - Response:

    ```json
    {
      "success": true,
      "totalRevenue": 12345 // total revenue amount
    }
    ```

- /admin/`Subscriptions` (GET):

  - Counts the total number of bookings (subscriptions).
  - Response:

    ```json
    {
      "success": true,
      "subscriptions": 265 // total number of bookings
    }
    ```

- /admin/`allSubscriptions` (GET):

  - Retrieves a list of all bookings.
  - Response:

  ```json
  {
    "success": true,
    "data": [
      {
        "_id": "bookingId1"
        // ... booking properties
      }
      // ... more bookings
    ]
  }
  ```

- /admin/`getAllUsers` (GET):

  - Retrieves a list of all users from Clerk.
  - Response:

  ```json
  {
    "success": true,
    "data": [
      {
        "id": "userId1"
        // ... user properties
      }
      // ... more users
    ]
  }
  ```

- /admin/`resentHotels` (GET):

  - Retrieves the 10 most recent hotel bookings.
  - Response:

  ```json
  {
    "success": true,
    "data": [
      {
        "_id": "bookingId1"
        // ... booking properties
      }
      // ... more bookings
    ]
  }
  ```

## Frontend Documentation

Pages:

- Home Page (`/`):

  - Displays a welcome message, hotel highlights, and a call to action to book a room.
  - Includes a navbar for navigation and a mode toggle for light/dark theme.

- All Hotels Page (`/book`):

  - Lists all available hotels with details like name, rating, charges, image, and description.
  - Provides a button to select a room for booking.

- Book Room Page (`/book/:hotelId`):

  - Displays detailed information about the selected hotel and a booking form.
  - The booking form collects user information, room type, dates, and number of guests.
  - Upon submission, the booking is created and the user is redirected to the My Room page.

- My Booked Rooms Page (`/myroom`):

  - Lists all bookings made by the currently logged-in user.
  - Provides a button to view each booking's details.

- Admin Board (`/admin`):
  - Displays an overview of hotel bookings, including total revenue, number of subscriptions, recent bookings, and all users. - Provides options to add new hotels, edit existing hotels, and view all subscriptions.
- Edit Hotel Page (`/admin/:hotelId/edit`):
  - Allows the admin to edit the details of an existing hotel.

Components:

- Navbar:

  - Provides navigation links to different pages of the application.
  - Includes sign-in/sign-out buttons and a mode toggle.

- ModeToggle:

  - Allows the user to switch between light and dark themes.

- CreateHotel:

  - A form component used to create new hotels.

- HotelListAdmin:
  - A data table component that displays a list of hotels for the admin.
    AdminNav:
    A navigation bar specifically for the admin board.
    CalendarDateRangePicker:
    A component that allows users to select a date range for their booking.
    Overview:
    A chart component that displays an overview of hotel bookings.

Additional Notes:

- The frontend uses React Router for navigation and Clerk for user authentication.
- The backend uses Mongoose for interacting with the MongoDB database.
- The project includes ESLint for code linting and Tailwind CSS for styling.
