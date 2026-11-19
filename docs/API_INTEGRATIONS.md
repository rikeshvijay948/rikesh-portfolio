# System APIs & Data Contract Specifications

**Portfolio Author**: Rikesh V  
**Specialization**: AI Automation, Autonomous Agents & Full-Stack Systems  
**Institution**: K.S.R. College of Engineering (B.E. Computer Science)  
**Live Site**: [https://rikeshvijay948.github.io/rikesh-portfolio/](https://rikeshvijay948.github.io/rikesh-portfolio/)

---

## 1. AI-Powered Breed Recognition for Cattle & Buffaloes

*Deep learning computer vision inference service engineered with Python, FastAPI, and TensorFlow/PyTorch.*

### Image Classification Endpoint
`POST /api/v1/predict/breed`

#### Request (Multipart Form-Data)
```http
POST /api/v1/predict/breed HTTP/1.1
Host: api.cattle-ai.local
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary

------WebKitFormBoundary
Content-Disposition: form-data; name="file"; filename="sample_cattle.jpg"
Content-Type: image/jpeg

[Binary Image Buffer]
------WebKitFormBoundary--
```

#### Response (JSON)
```json
{
  "status": "success",
  "prediction": {
    "breed_name": "Kangayam",
    "species": "Bos indicus",
    "origin": "Tamil Nadu, India",
    "confidence": 0.9482,
    "traits": [
      "Indigenous draught breed",
      "Short curved horns",
      "High heat and pest resistance"
    ]
  },
  "inference_latency_ms": 68.4,
  "model_version": "cv-resnet50-v2"
}
```

---

## 2. ResQNet — Real-Time Disaster Management System

*Asynchronous incident triage backend built with Node.js, Express.js, MongoDB Atlas, and Role-Based Access Control (RBAC).*

### Emergency Incident Reporting
`POST /api/v1/incidents`

#### Request (JSON)
```json
{
  "reporter_id": "usr_94821a",
  "category": "Flood Warning",
  "severity": "CRITICAL",
  "location": {
    "type": "Point",
    "coordinates": [77.8286, 11.3410],
    "landmark": "Near Bhavani River Causeway"
  },
  "description": "Flash flooding reported near residential causeway. Immediate rescue boat deployment required.",
  "attachments": [
    "https://cdn.resqnet.org/uploads/incidents/img_20261119_01.jpg"
  ]
}
```

#### Response (JSON)
```json
{
  "incident_id": "INC-2026-8819",
  "status": "DISPATCHED",
  "assigned_units": [
    "Rescue Team Alpha-4 (Namakkal District Unit)",
    "NGO Relief Volunteer Corps"
  ],
  "timestamp": "2026-11-19T16:50:00Z"
}
```

---

## 3. EstateHub — Real Estate Listing Portal

*URL Search Parameters & Client-Side Filtering Aggregation Pipeline.*

### Search Criteria URL Schema
`https://rikeshvijay948.github.io/EstateHub-Real-Estate-Listing-Portal/?city=Namakkal&type=Villa&minPrice=2500000&maxPrice=9500000&sort=price_asc`

#### Aggregation Predicate (JavaScript)
```javascript
const filterPredicate = (property, params) => {
  if (params.city && property.city.toLowerCase() !== params.city.toLowerCase()) return false;
  if (params.type && property.type !== params.type) return false;
  if (params.minPrice && property.price < Number(params.minPrice)) return false;
  if (params.maxPrice && property.price > Number(params.maxPrice)) return false;
  return true;
};
```

---

## 4. Taskflow Pro — Dynamic Productivity Suite

*Zero-dependency client-side state schema & Web Audio API synthesis.*

### LocalStorage Schema (`taskflow_state_v1`)
```json
{
  "tasks": [
    {
      "id": "task_1732034000",
      "title": "Finalize AI Pipeline Deployment",
      "priority": "HIGH",
      "quadrant": "Q1_URGENT_IMPORTANT",
      "status": "IN_PROGRESS",
      "subtasks": [
        { "id": "sub_1", "text": "Benchmark latency", "completed": true },
        { "id": "sub_2", "text": "Generate API documentation", "completed": true }
      ],
      "dueDate": "2026-11-20"
    }
  ],
  "pomodoro": {
    "completedSessions": 14,
    "focusDurationMinutes": 25,
    "shortBreakMinutes": 5
  }
}
```

### Web Audio Chime Synthesis
```javascript
const playChime = () => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5 Harmonic
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 1.2);
};
```
