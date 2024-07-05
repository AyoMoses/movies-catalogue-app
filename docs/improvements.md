# Improvements

It is important to highlight some improvements which we can make to the application.

## Storybook

[Storybook](https://storybook.js.org/) is a great tool for developing and testing components in isolation. Think of it as a catalogue of all the components your application is using. Very useful for developing and discoverability of components.

[Storybook Story Example Code](../src/components/ui/button/button.stories.tsx)

### API Errors

Implement an interceptor to manage errors effectively. This interceptor can be utilized to trigger notification toasts informing users of errors, log out unauthorized users, or send requests to refresh tokens to maintain secure and seamless application operation.

[API Errors Notification Example Code](../src/lib/api-client.ts)

### Error Tracking

You should track any errors that occur in production. Although it's possible to implement your own solution, it is a better idea to use tools like [Sentry](https://sentry.io/). It will report any issue that breaks the app. You will also be able to see on which platform, browser, etc. did it occur. Make sure to upload source maps to sentry to see where in your source code did the error happen.
