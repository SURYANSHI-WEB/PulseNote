import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { currentPatient } from '../data/mockData'
import SummaryBox from './SummaryBox'
import './PatientDashboard.css'

function PatientDashboard() {
  const navigate = useNavigate()
  const [selectedFile, setSelectedFile] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [summary, setSummary] = useState(currentPatient)

  const handleBackToLogin = () => {
    navigate('/')
  }

  const handleFileChange = (event) => {
    setError('')
    const file = event.target.files?.[0]
    if (!file) {
      setSelectedFile(null)
      return
    }

    // Simple client-side size guardrail (e.g., 10 MB)
    const maxSizeInBytes = 10 * 1024 * 1024
    if (file.size > maxSizeInBytes) {
      setSelectedFile(null)
      setError('File is too large. Please upload a report under 10 MB.')
      return
    }

    const allowedTypes = [
      'application/pdf',
      'image/png',
      'image/jpeg',
    ]

    if (!allowedTypes.includes(file.type)) {
      setSelectedFile(null)
      setError('Unsupported file type. Please upload a PDF or image (JPG/PNG).')
      return
    }

    setSelectedFile(file)
  }

  const handleProcessReport = async () => {
    if (!selectedFile) {
      setError('Please select a medical report file before processing.')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      // In a real app, this would POST to a Node/Express backend which:
      // 1) Runs OCR on the file
      // 2) Calls an AI API to structure the summary
      // 3) Returns the structured JSON shown in the README
      //
      // For now, simulate a network call and reuse the structured mock data.
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSummary({ ...summary })
    } catch (err) {
      // Frontend safety net in case the backend / AI fails
      setError('Something went wrong while processing the report. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="patient-dashboard">
      <div className="dashboard-header">
        <div className="dashboard-header-left">
          <h1>Patient Dashboard</h1>
          <p className="role-caption">Viewing as: Patient (frontend role simulation)</p>
        </div>
        <div className="dashboard-header-actions">
          <button
            className="role-switch-btn"
            type="button"
            onClick={() => navigate('/doctor')}
          >
            Switch to Doctor View
          </button>
          <button className="back-btn" onClick={handleBackToLogin}>
            Back to Landing
          </button>
        </div>
      </div>

      <div className="patient-info">
        <h2>Welcome, {summary.name}</h2>
        <p className="patient-details">
          Age: {summary.age} | Gender: {summary.gender}
        </p>
      </div>

      <div className="report-upload-section">
        <h2>Upload New Medical Report (Prototype)</h2>
        <p className="upload-description">
          In a production system, this upload would send your report to a Node.js backend, which would run OCR +
          an AI model to generate the structured summary below.
        </p>
        <div className="upload-controls">
          <input
            type="file"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={handleFileChange}
          />
          <button
            className="process-btn"
            onClick={handleProcessReport}
            disabled={isLoading}
          >
            {isLoading ? 'Processing…' : 'Process Report'}
          </button>
        </div>
        {isLoading && (
          <div className="loading-indicator">
            Processing report, please wait…
          </div>
        )}
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
      </div>

      <div className="summary-container">
        <SummaryBox patient={summary} />
        <div className="privacy-note">
          ⚠️ This is a prototype. In production, medical data would be encrypted in transit and at rest,
          and stored only in secure, compliance-ready infrastructure (e.g., HIPAA-ready cloud services).
        </div>
      </div>
    </div>
  )
}

export default PatientDashboard