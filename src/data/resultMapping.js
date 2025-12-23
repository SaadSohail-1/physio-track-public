const resultMapping = {
  // ==========================================
  // UPPER EXTREMITY
  // ==========================================
  adhesive_capsulitis: {
    label: "Adhesive Capsulitis (Frozen Shoulder)",
    planId: "shoulder_frozen_phase1",
    video: "https://www.youtube.com/watch?v=voxwcEraw6g"
  },
  rotator_cuff: {
    label: "Rotator Cuff Tendinopathy",
    planId: "shoulder_rotation_phase1",
    video: "https://www.youtube.com/watch?v=kopTVqSoTMQ"
  },
  shoulder_impingement: {
    label: "Shoulder Impingement Syndrome",
    planId: "shoulder_impingement_phase1",
    // Bob & Brad: Shoulder Impingement
    video: "https://www.youtube.com/watch?v=3NyxqGX6amY"
  },
  tennis_elbow: {
    label: "Lateral Epicondylitis (Tennis Elbow)",
    planId: "elbow_tennis_phase1",
    // Bob & Brad: Tennis Elbow Fix
    video: "https://www.youtube.com/watch?v=8ZTXWe81k8E"
  },
  golfers_elbow: {
    label: "Medial Epicondylitis (Golfer's Elbow)",
    planId: "elbow_golfers_phase1",
    // Bob & Brad: Golfer's Elbow
    video: "https://www.youtube.com/watch?v=dDZhNzKV7tA"
  },
  carpal_tunnel: {
    label: "Carpal Tunnel Syndrome",
    planId: "wrist_carpal_tunnel",
    // Bob & Brad: Carpal Tunnel Self Treatment
    video: "https://www.youtube.com/watch?v=AG29IFQWdtk"
  },
  de_quervains: {
    label: "De Quervain's Tenosynovitis",
    planId: "wrist_thumb_stability",
    // Ask Doctor Jo: De Quervain's
    video: "https://www.youtube.com/watch?v=Hm0uVjHaXGk"
  },

  // ==========================================
  // LOWER EXTREMITY
  // ==========================================
  hip_oa: {
    label: "Hip Osteoarthritis / Stiffness",
    planId: "hip_oa_mobility",
    // Ask Doctor Jo: Hip Arthritis
    video: "https://www.youtube.com/watch?v=3RFMtiPHBYQ"
  },
  trochanteric_bursitis: {
    label: "Greater Trochanteric Pain Syndrome",
    planId: "hip_bursitis_relief",
    // Bob & Brad: Hip Bursitis
    video: "https://www.youtube.com/watch?v=E3bQU7AEVII"
  },
  acl_tear: {
    label: "ACL Deficiency / Instability",
    planId: "knee_acl_prehab",
    // Ask Doctor Jo: ACL Rehab
    video: "https://www.youtube.com/watch?v=ZeCZkA7Xeu4"
  },
  meniscus_tear: {
    label: "Meniscus Tear / Irritation",
    planId: "knee_meniscus_unload",
    // Bob & Brad: Meniscus Tear
    video: "https://www.youtube.com/watch?v=hfHhVDW0aVE"
  },
  patellofemoral_pain: {
    label: "Patellofemoral Pain Syndrome (PFPS)",
    planId: "knee_patella_tracking",
    // Bob & Brad: Runner's Knee
    video: "https://www.youtube.com/watch?v=bjHD-sYTFp4"
  },
  lateral_ankle_sprain: {
    label: "Lateral Ankle Sprain",
    planId: "ankle_stability_phase1",
    video: "https://www.youtube.com/watch?v=W9lT3gfehC0"
  },
  plantar_fasciitis: {
    label: "Plantar Fasciitis",
    planId: "ankle_plantar_relief",
    video: "https://www.youtube.com/watch?v=8s84jwwBx0I"
  },

  // ==========================================
  // SPINE (Neck & Back)
  // ==========================================
  cervical_radiculopathy: {
    label: "Cervical Radiculopathy",
    planId: "neck_nerve_glides",
    video: "https://www.youtube.com/watch?v=rZNC-IVPYFI"
  },
  mechanical_neck_pain: {
    label: "Mechanical Neck Pain",
    planId: "neck_posture_reset",
    video: "https://www.youtube.com/watch?v=MDL9hI4Agdw"
  },
  lumbar_radiculopathy: {
    label: "Lumbar Radiculopathy (Sciatica)",
    planId: "back_sciatica_relief",
    video: "https://www.youtube.com/watch?v=4W0t9kP-DqM"
  },
  lumbar_stenosis: {
    label: "Lumbar Spinal Stenosis",
    planId: "back_stenosis_protocol",
    video: "https://www.youtube.com/watch?v=7OvyosNOiUw"
  },
  mechanical_low_back: {
    label: "Mechanical Low Back Pain",
    planId: "back_core_stability",
    video: "https://www.youtube.com/watch?v=L4IRskxywmU"
  },

  // ==========================================
  // FALLBACK
  // ==========================================
  general_mobility: {
    label: "General Mobility Routine",
    planId: "general_mobility",
    video: "https://www.youtube.com/watch?v=Ru1hYrwCZJo"
  }
};

export default resultMapping;