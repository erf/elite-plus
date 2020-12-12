# elite

Tiny declarative JS DOM lib

> < 8 KB minified and only 4 functions

## Why

I wanted to split some HTML into separate files and render them given some JSON, whilst avoiding using a large framework.

I came up with this simple solution, somewhat inspired by a talk by Magnar Sveen and Flutter, which made my code neat.

I now compose parts of my web app using `el` blocks given some JSON and import them as ES6 modules by adding `export` to functions.

## API

`el` create an element with a given *tag*, *html*, *attributes*, *events*, and *children*. You can omit arguments after *tag* and replace with *children*.

`set` replaces the *innerHTML* of a parent with the given child element(s).

`get` is a shorthand for *document.getElementById*

`add` uses *Node.appendChild* to append a child element(s) and return the parent.

## Example

See [example.html](example.html)

```Javascript
const page = el('section', [
    el('h1', 'elite', { class: 'elite' }),
    el('p', 'Welcome to elite'),
    el('form', '', {}, someEvent, [
        el('button', 'New game')
    ]),
    el('br'),
    el('form', '', {}, anotherEvent, [
        el('label', 'Join game', { for: 'code' }),
        el('br'),
        el('input', '', { id: 'code', placeholder: 'Enter code', required: true }),
        el('br'),
        el('button', 'Join'),
    ]),
])

set('page', page))
```