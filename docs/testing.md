# 🧪 Testing

For this version of the application, we only implemented end-to-end (e2e) tests. However, it is important to note that unit test are useful for testing shared components and functions that are used throughout the entire application.

[E2E Example Code](../e2e/smoke.spec.ts)

## Tooling:

#### [Playwright](https://playwright.dev)

Playwright is a tool for running e2e tests in an automated way.
You define all the commands a real world user would execute when using the app and then start the test. It can be started in 2 modes:

#### [MSW](https://mswjs.io)

For prototyping the API use msw, which is a great tool for quickly creating frontends without worrying about servers. It is not an actual backend, but a mocked server inside a service worker that intercepts all HTTP requests and returns desired responses based on the handlers you define.

[API Handlers Example Code](../e2e/mocks/handlers/albums.ts)

[Data Models Example Code](../e2e/mocks/data/albums.ts)

## Recommended Tooling for Unit and Integration Tests:

### [Vitest](https://vitest.dev)

Vitest is a powerful testing framework with features similar to Jest, but it's more up-to-date and works well with modern tools. It's highly customizable and flexible, making it a popular option for testing JavaScript code.

### [Testing Library](https://testing-library.com/)

Testing library is a set of libraries and tools that makes testing easier than ever before. Its philosophy is to test your app in a way it is being used by a real world user instead of testing implementation details.
