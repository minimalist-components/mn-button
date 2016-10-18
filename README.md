# Minimalist button

Buttons flat, raised, and action, with a minimalist design.

And just 1kb of css. (half of it is gzipped).

See the [demo](https://codepen.io/darlanmendonca/full/vKqLOx)

![https://raw.githubusercontent.com/minimalist-components/mn-button/master/preview.gif](https://codepen.io/darlanmendonca/full/vKqLOx)


### Install

With bower

```sh
bower install --save mn-button
```

Or just download the main file ```dist/mn-button.css``` in your project, and make a reference to their, like:

```html
<link rel="stylesheet" href="path/to/dist/mn-button.css">
```


### Usage

And then, in your html, you can use the class ```.mn-button``` in buttons or anchor tags, i.e.

```html
<button class="mn-button">Simple button</button>

<a href="#">Other Simple button<a>
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
<button class="mn-button action">&#9830;</button>
```

Action and raised button example

```html
<button class="mn-button action raised">&#9830;</button>
```

### Icons
I use in the [demo](https://codepen.io/darlanmendonca/pen/vKqLOx) as example, the zmdi icons, their following material design specs. But you can use what icons you wish.

The following code is valid

```html
<button class="mn-button action raised">
  <span class="zmdi zmdi-edit"></span>
</button>
```





