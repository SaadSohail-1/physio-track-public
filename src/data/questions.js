const questions = [
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
    text: "Do you feel knee pain while going downstairs?",
    options: [
      { label: "Yes", category: "patellofemoral" },
      { label: "No", category: null }
    ]
  },
  {
    text: "Does your knee click when squatting?",
    options: [
      { label: "Yes, painful", category: "meniscus" },
      { label: "Yes, not painful", category: null },
      { label: "No", category: null }
    ]
  },
  {
    text: "Does one hip drop when standing on the other leg?",
    options: [
      { label: "Yes", category: "glute_med" },
      { label: "No", category: null }
    ]
  },
  {
    text: "Do you feel sharp leg pain when bending forward?",
    options: [
      { label: "Yes", category: "discogenic_back" },
      { label: "No", category: null }
    ]
  },
  {
    text: "Do you feel lower back pain when rising from sitting?",
    options: [
      { label: "Yes", category: "si_joint" },
      { label: "No", category: null }
    ]
  },
  {
    text: "Do you feel core instability when lifting a leg while lying down?",
    options: [
      { label: "Yes", category: "weak_core" },
      { label: "No", category: null }
    ]
  }
];

export default questions;
