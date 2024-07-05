# 💻 User Experience

## Design Problem

There is a UX issue with the with the design and instructions needed to build the Sort Dropdown. [Instructions & Design](https://interloom.notion.site/Artefacts-for-FE-test-276090f8a8b3436bbbeaf8b45447734e)

### Problem

From Designs, user sorts albums by clicking on a Checkbox. After clicking on a sort item, the dropdown closes.

Checkboxes are usually used for multiple selections. If a user should be able to select multiple items, then the dropdown should not close.

### Solution

- Use Radio Buttons to indicate single item selection
- Use Checkboxes, allow user to close sort menu after making multiple selections.

For the sake of this challenge, I choose to keep design and functionality as described in instructions, but implement only single sort ability.

The API however allows for multiple sort ability by concatinatng sort values using a comma operator (,) as shown below;

`const endpoint = /baseUrlEndpoint?_page&_sort=name,releaseDate,totalTracks`

## Loading State

Loading state is implemented using skeleton loaders.

## Empty State

Empty state indicating the presence of no data.

## Responsive Design

As per designs, lg screen size starts from 1200px. Grid layout however scales intrinsically.

## Infinite Scrolling

The API is paginated in pages of 10. We utilised the Intersection Observer API to implement infinite scrolling. This allows users access all pages of data.
