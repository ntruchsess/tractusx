import { NavLink } from 'react-router-dom'
import './Developer.css'

export default function Developer() {
  return (
    <main className="Developer">
      <h2>Developer</h2>
      <nav>
        <NavLink to="/testapi">Test API</NavLink>
        <NavLink to="/translator">Translator</NavLink>
      </nav>
      <a href="/storybook">Storybook</a>
    </main>
  )
}
