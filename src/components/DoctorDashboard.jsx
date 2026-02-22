import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { patients } from '../data/mockData'
import PatientCard from './PatientCard'
import './DoctorDashboard.css'

function DoctorDashboard() {
  const [expandedPatientId, setExpandedPatientId] = useState(null)
  const navigate = useNavigate()

  const handlePatientClick = (patientId) => {
    setExpandedPatientId(expandedPatientId === patientId ? null : patientId)
  }

  const handleBackToLogin = () => {
    navigate('/')
  }

  return (
    <div className="doctor-dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-left">
          <h1>Doctor Dashboard</h1>
          <p className="role-caption">Viewing as: Doctor (frontend role simulation)</p>
        </div>
        <div className="dashboard-header-actions">
          <button
            className="role-switch-btn"
            type="button"
            onClick={() => navigate('/patient')}
          >
            Switch to Patient View
          </button>
          <button className="back-btn" onClick={handleBackToLogin}>
            Back to Landing
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="patient-list-section">
          <h2>Patients</h2>
          <div className="patient-list">
            {patients.map(patient => (
              <PatientCard
                key={patient.id}
                patient={patient}
                onClick={() => handlePatientClick(patient.id)}
                isExpanded={expandedPatientId === patient.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard