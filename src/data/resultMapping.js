const resultMapping = {
  // ==========================================
  // UPPER EXTREMITY (Shoulder, Elbow, Wrist)
  // ==========================================
  adhesive_capsulitis: {
    label: "Adhesive Capsulitis (Frozen Shoulder)",
    plan: "Shoulder Plan → Range of Motion Restoration",
    video: "https://www.youtube.com/embed/A0KZKk3ON0k" // Gentle mobility
  },
  rotator_cuff: {
    label: "Rotator Cuff Tendinopathy",
    plan: "Shoulder Plan → Cuff Strengthening & Stability",
    video: "https://www.youtube.com/embed/6X1vHzW6u7Y" // Ext rotation
  },
  shoulder_impingement: {
    label: "Shoulder Impingement Syndrome",
    plan: "Shoulder Plan → Scapular Control & Unloading",
    video: "https://www.youtube.com/embed/ZJg6wENtGCE"
  },
  tennis_elbow: {
    label: "Lateral Epicondylitis (Tennis Elbow)",
    plan: "Elbow Plan → Extensor Tendon Loading",
    video: "https://www.youtube.com/embed/g2qM4j4jV4k" // Wrist extension eccentric
  },
  golfers_elbow: {
    label: "Medial Epicondylitis (Golfer's Elbow)",
    plan: "Elbow Plan → Flexor Tendon Loading",
    video: "https://www.youtube.com/embed/J7gG9fJ5z9A"
  },
  carpal_tunnel: {
    label: "Carpal Tunnel Syndrome",
    plan: "Wrist Plan → Nerve Glides & Flexor Stretching",
    video: "https://www.youtube.com/embed/1C1oWqgZ1b0" // Nerve glide
  },

  // ==========================================
  // LOWER EXTREMITY (Hip, Knee, Ankle)
  // ==========================================
  hip_oa: {
    label: "Hip Osteoarthritis / Stiffness",
    plan: "Hip Plan → Joint Mobilization & Glute Strength",
    video: "https://www.youtube.com/embed/2qZ517Rw7ME"
  },
  acl_tear: {
    label: "ACL Deficiency / Instability",
    plan: "Knee Plan → Dynamic Stability & Proprioception",
    video: "https://www.youtube.com/embed/6N8eUQWbjHI"
  },
  meniscus_tear: {
    label: "Meniscus Tear / Irritation",
    plan: "Knee Plan → Non-Weight Bearing ROM & Strength",
    video: "https://www.youtube.com/embed/U_Q4LgdK1J0"
  },
  patellofemoral: {
    label: "Patellofemoral Pain Syndrome (PFPS)",
    plan: "Knee Plan → VMO Activation & Tracking",
    video: "https://www.youtube.com/embed/7fKoT3lvsN8"
  },
  ankle_sprain: {
    label: "Lateral Ankle Sprain",
    plan: "Ankle Plan → Stability & Peroneal Strength",
    video: "https://www.youtube.com/embed/1Y1v5q1f1q0"
  },

  // ==========================================
  // SPINE (Neck & Back)
  // ==========================================
  cervical_radiculopathy: {
    label: "Cervical Radiculopathy",
    plan: "Neck Plan → Neural Glides & Posture Correction",
    video: "https://www.youtube.com/embed/Eq45_iYV5gE"
  },
  tension_headache: {
    label: "Cervicogenic Headache",
    plan: "Neck Plan → Suboccipital Release",
    video: "https://www.youtube.com/embed/xL2eK5Y4ZlU"
  },
  discogenic_back: {
    label: "Discogenic Low Back Pain",
    plan: "Back Plan → Extension Bias & Core Stability",
    video: "https://www.youtube.com/embed/GLd7cE92JFA"
  },
  si_joint: {
    label: "Sacroiliac (SI) Joint Dysfunction",
    plan: "Back Plan → Pelvic Stability & Symmetry",
    video: "https://www.youtube.com/embed/9KjE8hZRL4k"
  },

  // ==========================================
  // FALLBACK
  // ==========================================
  general_mobility: {
    label: "General Mobility Routine",
    plan: "General Plan → Full Body Reset",
    video: "https://www.youtube.com/embed/Vf3TjMGWExg"
  }
};

export default resultMapping;