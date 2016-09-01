# Minimalist buttons

Buttons flat, raised, and action, with a minimalist design.

And just 1kb of css. (half of it is gzipped).

See the [demo](https://codepen.io/darlanmendonca/pen/vKqLOx)


### Install

With bower

```sh
bower install --save mn-buttons
```

Or just download the main file ```dist/app.css``` in your project, and make a reference to their, like:

```html
<link rel="stylesheet" href="path/to/app.css" />
```


### Usage

And then, in your html, you can use the class ```.mn-button``` in buttons or anchor tags, i.e.

```html
<button class="mn-button">Simple button</button>

<a href="#">Other Simple button<a>
```

You can use the class .mn-button with others class, .raised, and .action.

.raised - to make a button with 3d depth
.action - to make rounded buttons, with an icon replacement the text

Raised button example

```html
<button class="mn-button raised">Raised button</button>
```

Action button examples

```html
<button class="mn-button action">&#9830;</button>
```

Action and raised button example

```html
<button class="mn-button action raised">&#9830;</button>
```






