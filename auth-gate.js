(function () {
  const sessionKey = 'rcp-guide-unlocked'
  const passwordHash = '5b2bf17bf1deb587e9cd26db02e8a0a593cc39617db67621ebd7120e22d57fd3'

  const style = document.createElement('style')
  style.textContent = `
    html.auth-locked body > :not(.auth-gate) { display: none !important; }
    .auth-gate { min-height: 100dvh; display: grid; place-items: center; padding: 1.5rem; background: #111916; color: #eef5ef; font-family: 'Geist', ui-sans-serif, system-ui, -apple-system, sans-serif; }
    .auth-gate__card { width: min(100%, 30rem); border: 1px solid rgb(238 245 239 / 16%); border-radius: 1rem; background: rgb(255 255 255 / 5%); padding: clamp(1.4rem, 4vw, 2rem); box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 28%); }
    .auth-gate h1 { margin: 0 0 .6rem; font-size: clamp(1.8rem, 7vw, 3rem); line-height: .96; letter-spacing: -.055em; }
    .auth-gate p { margin: 0 0 1.2rem; color: rgb(238 245 239 / 68%); }
    .auth-gate label { display: block; margin: 0 0 .45rem; font-size: .78rem; font-weight: 760; letter-spacing: .12em; text-transform: uppercase; }
    .auth-gate input { width: 100%; border: 1px solid rgb(238 245 239 / 24%); border-radius: .7rem; background: rgb(255 255 255 / 8%); color: #fff; padding: .85rem 1rem; font: inherit; }
    .auth-gate button { width: 100%; margin-top: .9rem; border: 0; border-radius: .7rem; background: #0b5c3b; color: #fff; padding: .85rem 1rem; font: inherit; font-weight: 760; cursor: pointer; }
    .auth-gate__error { min-height: 1.4rem; margin-top: .75rem; color: #ffb4b4 !important; }
  `
  document.head.appendChild(style)

  try {
    if (sessionStorage.getItem(sessionKey) === '1') return
  } catch {}

  document.documentElement.classList.add('auth-locked')

  async function sha256Hex(value) {
    const bytes = new TextEncoder().encode(value)
    const digest = await crypto.subtle.digest('SHA-256', bytes)
    return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('')
  }

  function unlock(gate) {
    try { sessionStorage.setItem(sessionKey, '1') } catch {}
    document.documentElement.classList.remove('auth-locked')
    gate.remove()
  }

  function renderGate() {
    const gate = document.createElement('main')
    gate.className = 'auth-gate'
    gate.innerHTML = `<form class="auth-gate__card" autocomplete="off">
      <h1>Guidebook access</h1>
      <p>Enter the DBMS guide key to open the RCP field manual.</p>
      <label for="guide-password">Password key</label>
      <input id="guide-password" name="password" type="password" required autofocus>
      <button type="submit">Unlock guide</button>
      <p class="auth-gate__error" aria-live="polite"></p>
    </form>`
    document.body.prepend(gate)

    const form = gate.querySelector('form')
    const input = gate.querySelector('input')
    const error = gate.querySelector('.auth-gate__error')
    form.addEventListener('submit', async (event) => {
      event.preventDefault()
      error.textContent = ''
      try {
        if (await sha256Hex(input.value) === passwordHash) unlock(gate)
        else error.textContent = 'Wrong key. Try again.'
      } catch {
        error.textContent = 'This browser cannot verify the key.'
      }
    })
  }

  if (document.body) renderGate()
  else document.addEventListener('DOMContentLoaded', renderGate, { once: true })
})()
