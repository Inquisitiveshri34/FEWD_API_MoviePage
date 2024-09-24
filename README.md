# Mini Movie Booking App

## Problem Statement
Create a mini movie booking app where users can search for movies and book tickets using their wallet balance. The cost of one ticket is Rs. 100 (fixed).

## Description
### Pages
1. **index.html**
   - Allows users to add money to their wallet.
   - Contains an input box for accepting the amount and a button labeled "Add to Wallet."
   - Displays the wallet amount at the top right corner using an `<h1>` tag with the id `wallet`.
   - Provides a link to `movies.html` with the id `book_movies`.

2. **movies.html**
   - Features a search bar for users to search for movies, with the input box having the id `search`.
   - Implements debouncing on the search functionality.
   - Utilizes the OMDB API to fetch movie data.
   - Displays the wallet amount at the top right corner.
   - Shows relevant movies in real-time as users type, appending results inside a `<div>` with the id `movies`.
   - Each movie card will have the class `movie_tab`, displaying the movie image, title, and a "Book Now" button with the class `book_now`.
   - Clicking the "Book Now" button stores the selected movie in local storage with the key `movie` and redirects users to `checkout.html`.

3. **checkout.html**
   - Displays the movie information for booking.
   - Contains an input box for the user's name with the id `user_name`.
   - Provides an input box for the number of tickets with the id `number_of_seats`.
   - Includes a submit button to confirm the booking with the id `confirm`.
   - Alerts the user with:
     - "Insufficient Balance!" if wallet balance is insufficient.
     - "Booking successful!" if the booking is confirmed.

## Functionality
- **Wallet Management**
  - Use local storage to maintain the wallet amount, stored with the key `amount`.
  
- **Movie Search**
  - The search functionality should update dynamically without a search button.
  
- **Booking Process**
  - Validate wallet balance before confirming bookings.

## HTML Structure Requirements
- Wallet amount should be displayed in an `<h1>` tag with the id `wallet`.
- Input box for adding money must have the id `amount`.
- The "Add to Wallet" button must have the id `add_to_wallet`.
- Search input box must have the id `search`.
- Movie results should be appended to a `<div>` with the id `movies`, using the class `movie_tab` for movie cards.
- "Book Now" buttons should have the class `book_now`.
- Selected movie details must be saved in local storage with the key `movie`.
- In `checkout.html`, the name input box must have the id `user_name`, and the number of seats input box must have the id `number_of_seats`.
- The submit button for booking confirmation must have the id `confirm`.

## Alerts
- "Insufficient Balance!" for insufficient funds.
- "Booking successful!" for successful bookings.

## Note
Focus primarily on the functionality of the app. Styling can be added after completing the end-to-end flow. Good luck!