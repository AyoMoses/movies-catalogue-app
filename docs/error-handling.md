# ⚠️ Error Handling

This version of this application only handles in-app errors. API errors and error tracking were not implemented.

### In App Errors

Utilizing error boundaries, we handle errors within specific parts of your application. Since this application on has one feature, only one error boundary for the entire app was implemented.

Ideally, we place multiple error boundaries in different areas. This way, if an error occurs, it can be contained and managed locally without disrupting the entire application's functionality, ensuring a smoother user experience.

[Error Boundary Example Code](../src/providers/app.tsx)
