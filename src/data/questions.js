const questions = [
  // SHOULDER
  {
    text: "Does it hurt when you lift your arm outward between 60°–120°?",
    options: [
      { label: "Yes", category: "supraspinatus" },
      { label: "No", category: null }
    ]
  },
  {
    text: "Is it hard to rotate your forearm outward with elbow at your side?",
    options: [
      { label: "Yes", category: "infraspinatus" },
      { label: "No", category: null }
    ]
  },
  {
    text: "When placing your hand behind your lower back, do you feel pain/weakness?",
    options: [
      { label: "Yes", category: "subscapularis" },
      { label: "No", category: null }
    ]
  },
  {
    text: "Do you feel pain in the front of the shoulder when lifting?",
    options: [
      { label: "Yes", category: "biceps_tendon" },
      { label: "No", category: null }
    ]
  },

  // KNEE
  {
    text: "Do you feel knee pain when going downstairs?",
    options: [
      { label: "Yes", category: "pfps" }, // patellofemoral
      { label: "No", category: null }
    ]
  },
  {
    text: "Does your knee click when squatting?",
    options: [
      { label: "Painful click", category: "meniscus" },
      { label: "Click without pain", category: null },
      { label: "No click", category: null }
    ]
  },
  {
    text: "Does your knee feel like it 'gives way' during activity?",
    options: [
      { label: "Yes", category: "acl_instability" },
      { label: "No", category: null }
    ]
  },

  // HIP
  {
    text: "When standing on one leg, does the opposite hip drop?",
    options: [
      { label: "Yes", category: "glute_med" },
      { label: "No", category: null }
    ]
  },
  {
    text: "Do you feel pain in the outer hip while walking?",
    options: [
      { label: "Outer hip pain", category: "piriformis" },
      { label: "Groin pain instead", category: "iliopsoas" },
      { label: "No pain", category: null }
    ]
  },

  // BACK
  {
    text: "Do you feel sharp leg pain when bending forward?",
    options: [
      { label: "Sharp leg pain", category: "discogenic" },
      { label: "Only local back pain", category: "erector_spinae" },
      { label: "No pain", category: null }
    ]
  },
  {
    text: "Do you feel lower back pain when rising after long sitting?",
    options: [
      { label: "Yes", category: "si_joint" },
      { label: "No", category: null }
    ]
  },
  {
    text: "When lifting a leg while lying down, does your lower back arch?",
    options: [
      { label: "Yes", category: "weak_core" },
      { label: "No", category: null }
    ]
  }
];

export default questions;
