# elite-plus

A tiny JavaScript library for building HTML declaratively.

This is a more descriptive version of [elite](https://github.com/erf/elite) which allows you to create elements using named arguments.

Given a Javascript Object or Array describing elements with a tag name (**n**), text (**t**), attributes (**a**), events (**e**) and children (**c**), the `el` function builds and returns a set of HTML elements.

## Object model

The object model is defined as folows:

```Javascript
const obj = {
    n: 'p', // tag name
    t: 'Hello', // text
    a: { class: 'awesome', style: 'background: #F00' }, // attributes
    e: { click: (e) => alert('YO') }, // events
    c: [ // children
        { n: 'p', t: 'hello' },
        { n: 'p', t: 'yo' },
    ]
}
```

## API

`el(object|array)`

> Create an HTML element(s) given an object or array of objects as described in [Object model](#object-model)

`get(id)`

> Get element by **id**

`set(element|id, child)`

> Given an **element** or **id**, replace it's children with a given **child(s)** element

`add(elemnt|id, child)`

> Given an **element** or **id** append a **child(s)** element

*Please read the code to understand more, it's quite simple!*

## EXAMPLE

```Javascript
    const app = el([
        { n: 'h1', t: data.title, a: { class: 'elite' } },
        { n: 'p', t: data.description, a: { style: "background: #ffe088; padding: 8pt;" } },
        { n: 'button', tx: 'Press', a: { class: 'btn' }, e: { click: (e) => alert('YO') } },
        { n: 'p', t: 'Made with ❤ by @apptakk' },
    ])
    set('app', app)

```

Result HTML:

```HTML
<main id="app">
    <h1>elite</h1>
    <p style="background: #ffe088; padding: 8pt;">a tiny declarative js dom lib</p>
    <button class="btn">Press</button>
    <p>Made with ❤ by @apptakk</p>
</main>
```

[example.html](example.html)

[TODO.html](TODO.html)

[https://erf.github.io/elite](https://erf.github.io/elite)
