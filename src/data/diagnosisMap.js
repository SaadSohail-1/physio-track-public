export const DIAGNOSIS_MAP = {
  // --- SHOULDER / UPPER ---
  "supraspinatus": {
    title: "Supraspinatus Tendinopathy",
    description: "Your pain arc suggests irritation of the top rotator cuff muscle.",
    planId: "shoulder_impingement_phase1"
  },
  "infraspinatus": {
    title: "Infraspinatus Weakness",
    description: "Difficulty rotating outward suggests the posterior cuff is weak.",
    planId: "shoulder_rotation_phase1"
  },
  
  // --- BACK ---
  "discogenic": {
    title: "Discogenic Pain Pattern",
    description: "Sharp leg pain with flexion suggests a disc issue irritating the nerve.",
    planId: "lumbar_flexion_control"
  },
  "si_joint": {
    title: "SI Joint Dysfunction",
    description: "Pain when rising suggests the Sacroiliac joint is locking up.",
    planId: "si_joint_stability"
  },

  // --- HIPS / PELVIC ---
  "glute_med": {
    title: "Gluteus Medius Weakness",
    description: "Hip drop indicates poor lateral stability.",
    planId: "hip_stability_basics"
  },

  // --- KNEE ---
  "pfps": {
    title: "Patellofemoral Pain Syndrome",
    description: "Pain on stairs suggests the kneecap isn't tracking smoothly.",
    planId: "knee_tracking_iso"
  },

  // FALLBACK
  "general_mobility": {
    title: "General Mobility Issue",
    description: "We couldn't pinpoint a specific pattern, but movement will help.",
    planId: "full_body_mobility"
  }
};