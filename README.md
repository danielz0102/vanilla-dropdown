# vanilla-dropdown

A dropdown implementation built with vanilla JavaScript and CSS.

## Installation

```bash
npm install vanilla-dropdown
```

## Usage

First, create your dropdown menu with the following HTML structure:

```html
<div class="dropdown">
  <button class="dropdown__btn" data-trigger="click">Toggle Btn</button>
  <ul class="dropdown__list" data-fade>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
</div>
```

- **`.dropdown`**: The container that wraps the entire dropdown menu
- **`.dropdown__btn`**: The element responsible for toggling the menu
- **`.dropdown__list`**: The container of the items to be shown

On the `.dropdown__btn`, you also need to specify how you want to render the menu using the **`data-trigger`** attribute, either by `click` or `hover`.

You can also add a fade transition when the menu is shown or hidden by using the attribute **`data-fade`** on the `.dropdown__list`.

> [!WARNING]
> This fade transition uses the ``@starting-style`` CSS at-rule, which does not have support in Firefox yet.

Then, import the **`setupDropdown`** and pass it the dropdown you created.

```javascript
import setupDropdown from 'vanilla-dropdown'

const drop = document.querySelector('.dropdown')
setupDropdown(drop)
```

Now the menu will show or hide when interacting with the button.
