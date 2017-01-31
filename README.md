[![npm version](https://badge.fury.io/js/mn-button.svg)](https://badge.fury.io/js/mn-button)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/mn-button.svg)](https://gemnasium.com/github.com/minimalist-components/mn-button)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)   


# mn-button

Buttons flat, raised, and action, with a minimalist design.

See the [demo](https://minimalist-components.github.io/mn-button/)

<a href="https://minimalist-components.github.io/mn-button/">
<img src="https://raw.githubusercontent.com/minimalist-components/mn-button/master/preview.gif">
</a>


### Install

```sh
# to install this module
npm install --save mn-button
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/mn-button/tree/master/dist) with your preferred tool.


### Usage

And then, in your html, you can use the class ```.mn-button``` in buttons or anchor tags, i.e.

```html
<button class="mn-button">Simple button</button>

<a href="#" class="mn-button">Other Simple button</a>
```

You can use the class .mn-button with others class, .raised, and .action.

- .raised - to make a button with 3d depth
- .action - to make rounded buttons, with an icon replacement the text

Raised button example

```html
<button class="mn-button raised">Raised button</button>
```

Action button examples

```html
<button class="mn-button action"><<!-- icon here --></button>
```

Action and raised button example

```html
<button class="mn-button action raised"><<!-- icon here --></button>
```





