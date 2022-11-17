# elite

A minimal JavaScript library for building HTML elements declaratively.

> in only 440 bytes

A bit more descriptive than my [elite](https://github.com/erf/elite) library.

Given a Javascript object tree describing elements with text, attributes, events
and children, the `el` function parses it and returns the given elements.

## Object model

The object model is defined as folows:

```Javascript
const obj = {
    tg: 'p', // tag
    tx: 'Hello', // text
    at: { class: 'awesome', style: 'background: #F00' }, // attributes
    ev: { click: (e) => alert('YO') }, // events
    ch: [ // children
        { tg: 'p', tx: 'hello' },
        { tg: 'p', tx: 'yo' },
    ]
}
```

## API

`el(obj)`

> Create an HTML element(s) given an object as described in [Object model](#object-model)

`get(id)`

> Get element by **id**

`set(element|id, child)`

> Given an **element** or **id**, replace it's children with a given **child** element

`add(elemnt|id, child)`

> Given an **element** or **id** append a **child** element

*Please read the code to understand more, it's quite simple!*

## EXAMPLE

```Javascript
    const app = el({
        tg: 'div', ch: [
            { tg: 'h1', tx: data.title, attr: { class: 'elite' } },
            { tg: 'p', tx: data.description, at: { style: "background: #ffe088; padding: 8pt;" } },
            { tg: 'button', tx: 'Press', at: { class: 'btn' }, ev: { click: (e) => alert('YO') } },
            { tg: 'p', tx: 'Made with ❤ by @apptakk' },
        ]
    })

    set('app', app)

```

Result HTML:

```HTML
<main id="app">
    <div>
        <h1>elite</h1>
        <p style="background: #ffe088; padding: 8pt;">a tiny declarative js dom lib</p>
        <button class="btn">Press</button>
        <p>Made with ❤ by @apptakk</p>
    </div>
</main>
```

[example.html](example.html)

[https://erf.github.io/elite](https://erf.github.io/elite)
