import { useNavigate } from 'react-router-dom'
import { currentPatient } from '../data/mockData'
import SummaryBox from './SummaryBox'
import './PatientDashboard.css'

function PatientDashboard() {
  const navigate = useNavigate()

  const handleBackToLogin = () => {
    navigate('/')
  }

  return (
    <div className="patient-dashboard">
      <div className="dashboard-header">
        <h1>Patient Dashboard</h1>
        <button className="back-btn" onClick={handleBackToLogin}>
          Back to Login
        </button>
      </div>

      <div className="patient-info">
        <h2>Welcome, {currentPatient.name}</h2>
        <p className="patient-details">
          Age: {currentPatient.age} | Gender: {currentPatient.gender}
        </p>
      </div>

      <div className="summary-container">
        <SummaryBox patient={currentPatient} />
      </div>
    </div>
  )
}

export default PatientDashboard