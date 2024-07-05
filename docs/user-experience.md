# 💻 User Experience

### Accessiblity

- Radix makes it possible to implement keyboard navigation for certain users who'd prefer to navigate the app as so

### Solution

- Use Radio Buttons to indicate single item selection
- Use Checkboxes, allow user to close sort menu after making multiple selections.

For the sake of this challenge, I choose to keep design and functionality as described in instructions, but implement only single sort ability.

## Loading State

Loading state is implemented using skeleton loaders.

## Empty State

Empty state indicating the presence of no data.

## Responsive Design

As per designs, lg screen size starts from 1200px. Grid layout however scales intrinsically.

## Infinite Scrolling

The API is paginated in pages of 10. We utilised the Intersection Observer API to implement infinite scrolling. This allows users access all pages of data.
