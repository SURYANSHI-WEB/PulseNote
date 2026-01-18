import SummaryBox from './SummaryBox'
import './PatientCard.css'

function PatientCard({ patient, onClick, isExpanded }) {
  return (
    <div 
      className={`patient-card ${isExpanded ? 'expanded' : ''}`}
    >
      <div 
        className="patient-card-header-section"
        onClick={onClick}
      >
        <div className="patient-card-header">
          <h3>{patient.name}</h3>
          <span className="patient-age">{patient.age} years</span>
        </div>
        <p className="patient-gender">{patient.gender}</p>
        <div className="patient-diseases">
          <strong>Conditions: </strong>
          {patient.diseases.join(', ')}
        </div>
      </div>
      {isExpanded && (
        <div className="patient-card-expanded-content">
          <SummaryBox patient={patient} />
          <button className="view-full-btn">
            View Full Record
          </button>
        </div>
      )}
    </div>
  )
}

export default PatientCard