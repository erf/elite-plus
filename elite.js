function el(dom) {
  if (Array.isArray(dom)) {
    return dom.map((o) => el(o));
  }
  const element = document.createElement(dom.n)
  if (dom.t) {
    element.textContent = dom.t
  }
  if (dom.a) {
    Object.entries(dom.a).forEach(([k, v]) => element.setAttribute(k, v))
  }
  if (dom.e) {
    Object.entries(dom.e).forEach(([k, v]) => element.addEventListener(k, v))
  }
  if (dom.c) {
    element.append(...dom.c.map(child => el(child)))
  }
  return element
}

function get(id) {
  return document.getElementById(id)
}

function set(parent, child) {
  parent = typeof parent === 'string' ? get(parent) : parent
  if (Array.isArray(child)) {
    parent.replaceChildren(...child)
  } else {
    parent.replaceChildren(child)
  }
}

function add(parent, child) {
  parent = typeof parent === 'string' ? get(parent) : parent
  if (Array.isArray(child)) {
    parent.append(...child)
  } else {
    parent.append(child)
  }
}