import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="landing-page">
      <div className="landing-container">
        <h1 className="landing-title">Medical Record System</h1>
        <p className="landing-subtitle">Digital Healthcare Management</p>
        <div className="login-buttons">
          <button 
            className="login-btn doctor-btn"
            onClick={() => navigate('/doctor')}
          >
            Login as Doctor
          </button>
          <button 
            className="login-btn patient-btn"
            onClick={() => navigate('/patient')}
          >
            Login as Patient
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage