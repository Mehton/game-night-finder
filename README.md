# WEB103 Project 3 - _Game Night Finder_

Submitted by: **Bhupinder jit Mehton**

**Game Night Finder is a virtual community space for tabletop fans. Click one of four local venues on the interactive map to see its board game nights, tournaments, and trivia, with a countdown to each upcoming event. Built with React, Express, and a Render PostgreSQL database.**

Time spent: **5** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x] **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT \* FROM tablename;' to display your table contents.**
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [x] _Note: A non-visual list of links to different locations is insufficient._
- [x] **Each location has a detail page with its own unique URL.**
- [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [x] An additional page shows all possible events
  - [x] Users can sort _or_ filter events by location.
- [x] Events display a countdown showing the time remaining before that event
  - [x] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [x] Events are listed in date order, soonest first
- [x] Venue pages show each venue's address and a short description
- [x] Pages show a loading message while data is being fetched
- [x] The API returns a 404 error for events or locations that don't exist

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='/game-night-finder.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->

GIF created with ...
[ScreenToGif](https://www.screentogif.com/) for Windows

## Notes

- My database connection kept getting empty credentials. ES module imports run before the rest of the file, so the database pool was created before `dotenv.config()` ran. I fixed it by importing a small `config/dotenv.js` file at the very top of `server.js`.

- I added a 404 page in React for unknown URLs, and a JSON 404 for unknown API routes so they don't fall through to the React app in production.

- The starter code was built for music venues, so I changed the routes, map links and seed data to four game-night venues. The map image and its clickable areas come from the starter.

## License

Copyright 2026 Bhupinder jit Mehton

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
