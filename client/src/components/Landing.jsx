import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
      <h1>Welcome to LandingPage</h1>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  )
}
