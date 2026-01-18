export const patients = [
  {
    id: 1,
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    diseases: ['Hypertension', 'Type 2 Diabetes'],
    medications: ['Metformin 500mg (twice daily)', 'Lisinopril 10mg (once daily)'],
    vitals: {
      bloodPressure: '130/85',
      heartRate: '72 bpm',
      temperature: '98.6°F',
      weight: '180 lbs',
      height: '5\'10"'
    },
    precautions: ['Monitor blood sugar daily', 'Low sodium diet', 'Regular exercise']
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 32,
    gender: 'Female',
    diseases: ['Asthma', 'Seasonal Allergies'],
    medications: ['Albuterol inhaler (as needed)', 'Loratadine 10mg (once daily)'],
    vitals: {
      bloodPressure: '118/75',
      heartRate: '68 bpm',
      temperature: '98.4°F',
      weight: '145 lbs',
      height: '5\'6"'
    },
    precautions: ['Avoid triggers', 'Carry inhaler at all times', 'Annual flu shot']
  },
  {
    id: 3,
    name: 'Robert Johnson',
    age: 58,
    gender: 'Male',
    diseases: ['Arthritis', 'High Cholesterol'],
    medications: ['Ibuprofen 400mg (as needed)', 'Atorvastatin 20mg (once daily)'],
    vitals: {
      bloodPressure: '140/90',
      heartRate: '75 bpm',
      temperature: '98.8°F',
      weight: '195 lbs',
      height: '6\'0"'
    },
    precautions: ['Low-fat diet', 'Avoid high-impact activities', 'Regular check-ups']
  },
  {
    id: 4,
    name: 'Emily Davis',
    age: 28,
    gender: 'Female',
    diseases: ['Migraine', 'Anxiety'],
    medications: ['Sumatriptan 50mg (as needed)', 'Sertraline 50mg (once daily)'],
    vitals: {
      bloodPressure: '115/70',
      heartRate: '70 bpm',
      temperature: '98.5°F',
      weight: '135 lbs',
      height: '5\'5"'
    },
    precautions: ['Identify migraine triggers', 'Stress management', 'Regular sleep schedule']
  },
  {
    id: 5,
    name: 'Michael Brown',
    age: 50,
    gender: 'Male',
    diseases: ['COPD', 'Sleep Apnea'],
    medications: ['Advair 250/50 (twice daily)', 'CPAP therapy'],
    vitals: {
      bloodPressure: '135/88',
      heartRate: '78 bpm',
      temperature: '98.7°F',
      weight: '210 lbs',
      height: '6\'2"'
    },
    precautions: ['Use CPAP nightly', 'Avoid smoking', 'Pulmonary rehabilitation']
  }
]

export const currentPatient = patients[0]