const N = (tag, c, att) => {
  const n = document.createElement(tag)
  if (att)
    for (let a of Object.keys(att))
      n.setAttribute(a, att[a])
  if (typeof (c) === 'undefined' || c === null || c === false)
    return n
  if (!(c instanceof Array))
    c = [c]
  for (let i in c) {
    const tc = typeof c[i]
    if (tc !== 'undefined')
      try {
        n.appendChild(
          tc === 'object'
            ? c[i]
            : document.createTextNode(tc === 'string' ? c[i] : '' + c[i])
        );
      } catch (e) {
        const pre = document.createElement('pre');
        pre.appendChild(document.createTextNode(JSON.stringify(c[i], null, 4)));
        n.appendChild(pre);
      }
  }
  return n
}

const remove = n => n.parentElement.removeChild(n)

const clear = n => {
  if (!n)
    return;
  while (n.childNodes.length > 0)
    n.removeChild(n.firstChild)
  return n
}

const addEvents = (node, evts) => {
  Object.keys(evts).forEach(key => node.addEventListener(key, evts[key]))
  return node
}

function debounce(func, timeout = 220) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => func.apply(this, args), timeout)
  }
}

const processChange = debounce(e => Selector.filter(e))

class Viewable {

  getView() {
    return this.view
  }

  appendTo(p) {
    (p instanceof HTMLElement ? p : p.getView()).appendChild(this.getView())
    return this
  }

}


class SearchInput extends Viewable {

  constructor() {
    super()
    this.view = addEvents(
      N('input', null, { type: 'search', class: 'search', placeholder: 'sign in with', value: localStorage.getItem('IDP') || ''}),
      {
        keyup: e => processChange(e.target.value),
        search: e => processChange(e.target.value)
      }
    )
    this.view.select()
  }

  focus() {
    this.view.focus()
    return this
  }

}


class SelectProvider extends Viewable {

  constructor(providers) {
    super()
    this.providers = providers
    this.view = N('div')
  }

  filter(expr) {
    if (!expr || expr === '')
      expr = '.'
    else
      expr = expr.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
    const regex = new RegExp(expr, 'gi')
    clear(this.view)
    this.view.appendChild(N('ul', this.providers.filter(n => n.name.match(regex)).map(p =>
      N('li',
        addEvents(
          N('a', p.name.replace(/_/g, ' '), {
            href: p.url.match(/^https?:\/\//) ? p.url : `${location.origin}${p.url}`,
            class: p.alias.replace(/-/g, '_')
          }),
          {
            "click": () => { localStorage.setItem('IDP', p.name.replace(/_/g, ' ')) }
          }
        )
      ),
      { class: 'idp' }
    )))
    return this
  }

}


class Main extends Viewable {

  constructor() {
    super()
    this.setIcon()
    this.view = N('div', [
      N('div', 'This is a test environment - please select \'CX Test Access\' to log in with the provided test user.', { class: 'test' }),
      N('div', null, { class: 'logo' })
    ])
    const search = new SearchInput().appendTo(this)
    Selector.appendTo(this)
    setTimeout(() => Selector.filter(search.focus().getView().value), 50)
  }

  setIcon() {
    let icon = document.querySelectorAll('link[rel=icon]')[0]
    if (!icon) {
      icon = N('link', null, {rel: 'icon'})
      document.head.appendChild(icon)
    }
    icon.href = 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABT1JREFUaEPlWT1MY0cQ/ubZkEhJ4TRJS9oIg9FhpFSBpDgp8SNcF0xxRkkPaS8Fpri0QJ8I7iTs64AzKZNAFQkjYWyU9qBMmoCUSLnEZqJ9frbfz+6+fTa6QLKlPW9nvtnZ+WZmCQMu3kQKr2EFQAGECZrH+YBbxvqcYkkHhLmMaTA2AYw4fxFmaB4Hg+wZ99u+AXAJawCWfQrvAgA3ZH4EkAl5604AKGELwEPpUd8RAC+6MR9EcUcAsPKi/R8B7PyUGUkmmw+JaITZzWbAJZgOmi1r78H7NW1ajpWFeBsZEE5u4gSE4UNDrRVmFCJS567FrdVPpn6uyeSMAXAZK2AUtcoMQmjnJJNKNFsrFEzBUQTAtGxP1TfC1y7iQy5jxCWr6SgdILyrY+Lvjt7LsJXY8YRK5JZeASJs5SYbi77fdDvwNpZAjtdTBpquKK+Wq1RHVwDSn6CBEhBv2JNnXQKVhpBDVq9jDdHx2VPJWKQFhyN8S3j9mpKbAIeJz8RgqQzP2Nkzp2QJAdAyrVzhlSjkKI/d4N+Vo7ElEK/3baf6wwM725gJAejD+EMQCsG4b6fGlijyou9Nz8hDAjlOYPAcgA90wIeH6Z374/VffSfAJQhvLRl4THi9SHlH3rdcr5veGzBwRYSCPdnwnWDlKL0FUpQsQqNFs/a9eqULwC2NRZEWtU5BmAt5/SSTSjYdrwvvGS0C9v5OJgoPJmqXsg8qx+kaGOOy/wg0n8vWn3kB7ILxqVYzY5UWwlxQOU7PuanWJFs5XrdAxVy2rr0flePRdTDJI8LlBQcAP8UbSOL3CONDWUaQUlyvAzhsNhOFYIng8I3IKp6OrlIdKwIsur3QYvDXs9mzr9oASvgQwPcaABuU9zcvleroNBFtmpKSzutccsJOhF+K8r3MaA7gGT7DNcpKAC/xFi2iG6fPq+m1WKUA4dS6bhWC9Yyb9Xz3pj8AZXwOxjdSAIQ9mu9dzP3q2DKDRTtpuGjVztZDDOz1unej/gBs4zEIj6QWBS5upTp2YsSqeq+LuPb3067yVwAgrW5oOh4g3mgmksVgegxNMSQe+5cB0AVwXejUKV77pFOMWwWA8aQ5lFgOeb3dBImLalLMnVK+J2eehWLdAX8IqUoBJz2bNEG+Y/IT5X41vcuQkyuBvshl69+2eaBPAKpSwG2Cdgy93oHg4xqXJH9TpTpfKREXgPA6GMuzU41Q/R+zCRL2SctxbRkBIGHRRx/fq/8Q+wREg/JXa/hSWgq056TmJTRhD3+i4CVJgej5UbpA7XujXMPD9Ob98fofHQCPQHiskA6VEUE5FSlp9A/UBInQzWUbTtXbBqAvJWqUx4TMGFkpYEDPN9AEBVpKLsEWJ6dRvk55fBnI690CzMDoTqwP3gTJmnp+ireRxC8RhogmunNpxTDKPNaBG2qC6KKZtDJeruk1NCXnYULbhxp62i92Q00QCKfNRGI6SJReACIkRO6+qXUqxjK0gNBI0CTLeI3QtZ7Bpl49+48DS+H1zhb7x+kXJo2QSesZngsNFkoX7phF+U7mjlzEG4N+Kcrx4Efyydw2iiDn5THO2sBLFIOkFNxAtKIARUw/5E2QzBjldNoZpVsoRk4qAGleVyGPAmBxa0I1So8FoCPsFmZzIOdJVYxNUiCc4xo1WDiI+6waBcDONoxH/l0mjhMng8r+xwHQhZ2ttx/NDVes4zLcUyumPQHGE3uqEfXk5Nv/9gBQMG2U024HgECBFmV0gKXjiA8u6w8h9RTDVNMrPwH3lfKciLdksyNTwzty/wATsrFPLbsvywAAAABJRU5ErkJggg=='
    return this
  }

  /*
  style() {
    document.body.appendChild(
      N('link', null, {
        href: 'https://catenaxdev003util.blob.core.windows.net/util/themes/catenax-central/static/LibreFranklin-VariableFont_wght.79b6e141.ttf',
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous'
      })
    )
  }
  */
}

const Selector = new SelectProvider(CX_PROVIDERS)
new Main().appendTo(document.body)
