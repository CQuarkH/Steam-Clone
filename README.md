# A Very Basic Steam Store Clone

This project was an experimental endeavor to understand the simple yet effective interaction of React with a RESTful API in Spring Boot, handling client-server interactions in a straightforward manner.

React was used in conjunction with Zustand for managing the interaction and persistence of the global cart state within the application. Additionally, React Router V6 was utilized for routing, which is not secured.

Similarly, the backend does not have any security validations, as this is merely a proof of concept as previously mentioned.

---

## Frontend

To execute the project, navigate to the `rc_shopping_cart` directory and run `npm install` to install all the updated dependencies of the project. To start the React Frontend in development mode, execute `npm start`.

---

## Backend

To execute the backend, it is first necessary to configure the associated database in the `application.properties` file, located at `src/main/resources`:

```properties
spring.datasource.url=jdbc:mysql://YOUR_DATABASE_URL/YOUR_DATABASE_NAME?serverTimezone=UTC
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```
