import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ApiUrl } from '../utils/server-connect';

const SignUp = () => {
  const [ form, setForm] = useState({
    email: "",
    password: ""
  })
  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${ApiUrl}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      } else {
        console.error(data);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      
    </div>
  )
}

export default SignUp
