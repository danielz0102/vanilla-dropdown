# vanilla-dropdown

A lightweight and simple dropdown implementation built with vanilla JavaScript and CSS.

## Installation

```
npm install vanilla-dropdown
```

## Usage

First you create your dropdown menu with the following HTML structure:

```
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

- **`.dropdown`**: The wrapper of all the dropdown menu
- **`.dropdown__btn`**: The element responsible for toggle the menu
- **`.dropdown__list`**: The container with the elements to be rendered

On the `.dropdown__btn`, you also need to specify how you want to render the menu in the **`data-trigger`** attribute, either by `click` or `hover`.

Then, you can import the **`setupDropdown`** and pass it the dropdown you created.

```
import setupDropdown from 'vanilla-dropdown'

const drop = document.querySelector('.dropdown')
setupDropdown(drop)
```

Now the menu will show or hide when you interact with the button.
