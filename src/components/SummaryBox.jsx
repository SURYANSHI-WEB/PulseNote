import './SummaryBox.css'

function SummaryBox({ patient }) {
  return (
    <div className="summary-box">
      <div className="summary-section">
        <h3 className="summary-title">Diseases</h3>
        <ul className="summary-list">
          {patient.diseases.map((disease, index) => (
            <li key={index}>{disease}</li>
          ))}
        </ul>
      </div>

      <div className="summary-section">
        <h3 className="summary-title">Medications</h3>
        <ul className="summary-list">
          {patient.medications.map((medication, index) => (
            <li key={index}>{medication}</li>
          ))}
        </ul>
      </div>

      <div className="summary-section">
        <h3 className="summary-title">Vitals</h3>
        <div className="vitals-grid">
          <div className="vital-item">
            <span className="vital-label">Blood Pressure:</span>
            <span className="vital-value">{patient.vitals.bloodPressure}</span>
          </div>
          <div className="vital-item">
            <span className="vital-label">Heart Rate:</span>
            <span className="vital-value">{patient.vitals.heartRate}</span>
          </div>
          <div className="vital-item">
            <span className="vital-label">Temperature:</span>
            <span className="vital-value">{patient.vitals.temperature}</span>
          </div>
          <div className="vital-item">
            <span className="vital-label">Weight:</span>
            <span className="vital-value">{patient.vitals.weight}</span>
          </div>
          <div className="vital-item">
            <span className="vital-label">Height:</span>
            <span className="vital-value">{patient.vitals.height}</span>
          </div>
        </div>
      </div>

      <div className="summary-section">
        <h3 className="summary-title">Precautions</h3>
        <ul className="summary-list">
          {patient.precautions.map((precaution, index) => (
            <li key={index}>{precaution}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SummaryBox