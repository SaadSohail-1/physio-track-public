const resultMapping = {
  // --- SHOULDER ---
  supraspinatus: {
    label: "Supraspinatus Tendinitis",
    plan: "Shoulder Plan → Rotator cuff strengthening",
    video: "https://www.youtube.com/embed/A0KZKk3ON0k"
  },
  infraspinatus: {
    label: "Infraspinatus / Teres Minor Weakness",
    plan: "Shoulder Plan → External rotation protocol",
    video: "https://www.youtube.com/embed/6X1vHzW6u7Y"
  },
  subscapularis: {
    label: "Subscapularis Weakness",
    plan: "Shoulder Plan → Internal rotation protocol",
    video: "https://www.youtube.com/embed/ZJg6wENtGCE"
  },
  biceps_long_head: {
    label: "Biceps Tendinopathy",
    plan: "Shoulder Plan → Anterior shoulder unloading",
    video: "https://www.youtube.com/embed/nBzM5Jiei7A"
  },

  // --- KNEE ---
  patellofemoral: {
    label: "VMO Weakness / PFPS",
    plan: "Knee Plan → Patella tracking + VMO activation",
    video: "https://www.youtube.com/embed/7fKoT3lvsN8"
  },
  acl: {
    label: "ACL Instability",
    plan: "Knee Plan → Stabilization & controlled flexion",
    video: "https://www.youtube.com/embed/6N8eUQWbjHI"
  },
  meniscus: {
    label: "Meniscus Irritation",
    plan: "Knee Plan → ROM + low-load strengthening",
    video: "https://www.youtube.com/embed/U_Q4LgdK1J0"
  },

  // --- HIP ---
  glute_med: {
    label: "Gluteus Medius Weakness",
    plan: "Hip Plan → Lateral hip strengthening",
    video: "https://www.youtube.com/embed/2qZ517Rw7ME"
  },
  piriformis: {
    label: "Piriformis Syndrome",
    plan: "Hip Plan → External rotator stretching",
    video: "https://www.youtube.com/embed/pQdoR3yEcmI"
  },
  iliopsoas: {
    label: "Iliopsoas Tightness",
    plan: "Hip Plan → Hip flexor release",
    video: "https://www.youtube.com/embed/5pTy9KPXoV8"
  },

  // --- BACK ---
  discogenic_back: {
    label: "Discogenic Low Back Pain",
    plan: "Back Plan → Flexion avoidance + core control",
    video: "https://www.youtube.com/embed/GLd7cE92JFA"
  },
  si_joint: {
    label: "SI Joint Dysfunction",
    plan: "Back Plan → SI stability drills",
    video: "https://www.youtube.com/embed/9KjE8hZRL4k"
  },
  weak_core: {
    label: "Weak Core Stabilizers",
    plan: "Back Plan → TVA activation + motor control",
    video: "https://www.youtube.com/embed/8w6XapnwYHc"
  },
  // ADDED: Missing back item
  erector_spinae: {
    label: "Paraspinal Muscle Strain",
    plan: "Back Plan → Soft tissue release & mobility",
    video: "https://www.youtube.com/embed/29_7k5lT6Fw" // Generic back stretch
  },

  // --- NECK (NEW ADDITIONS) ---
  cervical_flexion: {
    label: "Cervical Flexion Intolerance",
    plan: "Neck Plan → Deep neck flexor endurance",
    video: "https://www.youtube.com/embed/G6jZtZ0tM9E" // Chin tucks
  },
  upper_traps_tightness: {
    label: "Upper Trapezius Hypertonicity",
    plan: "Neck Plan → Trap release & scapular setting",
    video: "https://www.youtube.com/embed/1vR5_z4n-b0" // Trap stretch
  },
  tension_headache: {
    label: "Cervicogenic Headache",
    plan: "Neck Plan → Suboccipital release & posture",
    video: "https://www.youtube.com/embed/xL2eK5Y4ZlU" // Suboccipital release
  },
  rotation_limit_right: {
    label: "Right Cervical Rotation Restriction",
    plan: "Neck Plan → Right rotation SNAGs",
    video: "https://www.youtube.com/embed/Eq45_iYV5gE" // Rotation stretch
  },
  rotation_limit_left: {
    label: "Left Cervical Rotation Restriction",
    plan: "Neck Plan → Left rotation SNAGs",
    video: "https://www.youtube.com/embed/Eq45_iYV5gE"
  },

  // --- FALLBACK ---
  general_mobility: {
    label: "General Assessment Inconclusive",
    plan: "General Plan → Full body mobility routine",
    video: "https://www.youtube.com/embed/Vf3TjMGWExg"
  }
};

export default resultMapping;