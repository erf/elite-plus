function elp(dom) {
  const element = document.createElement(dom.tg)
  if (dom.tx) {
    element.textContent = dom.tx
  }
  if (dom.at) {
    Object.entries(dom.at).forEach(([k, v]) => element.setAttribute(k, v))
  }
  if (dom.ev) {
    Object.entries(dom.ev).forEach(([k, v]) => element.addEventListener(k, v))
  }
  if (dom.ch) {
    element.append(...dom.ch.map(child => elp(child)))
  }
  return element
}

function get(id) {
  return document.getElementById(id)
}

function set(parent, child) {
  parent = typeof parent === 'string' ? get(parent) : parent
  parent.replaceChildren(child);
}

function add(parent, child) {
  parent = typeof parent === 'string' ? get(parent) : parent
  parent.append(child)
}