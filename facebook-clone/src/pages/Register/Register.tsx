import { Link } from 'react-router-dom';
import './Register.scss'


function Register() {
  return (
    <div className='wrapper'>

      <input className="input" placeholder='Username...' />
      <input className="input" type="email" placeholder='Email...' />
      <input className="input" type="password" placeholder='Password...' />
      <button onClick={() => {
        console.log("asd");
      }} className="button">Register</button>
      <p className="link-text">Already have an account? <Link className="link" to="/">Login</Link></p>

    </div>
  )
}

export default Register