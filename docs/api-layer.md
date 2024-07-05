# 📡 API Layer

### Use a Single Instance of the API Client

The application interacts with a RESTful API. We use a single instance of the API client (Axios) that has been pre-configured and can be reused throughout the application.

[API Client Example Code](../src/lib/axios.ts)

### Define and Export Request Declarations

API requests are defined and exported separately. Every API request declaration consists of:

- Types and validation schemas for the request and response data
- A fetcher function that calls an endpoint, using the API client instance
- A hook that consumes the fetcher function built on top of [react-query](https://tanstack.com/query) to manage the data fetching and caching logic.

This approach simplifies the tracking of defined endpoints available in the application. Additionally, typing the responses and inferring them further down the application enhances application type safety.

[API Request Declarations - Query - Example Code](../src/album-shelf/api/index.ts)
