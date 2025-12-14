const questions = {
  // 1. NECK (Note: You still need to add these keys to resultMapping!)
  "neck": {
    title: "Neck & Cervical Assessment",
    questions: [
      {
        id: "n1",
        text: "Does looking down at your phone/feet cause pain at the base of your neck?",
        options: [
          { label: "Yes, sharp pain", category: "cervical_flexion" },
          { label: "Just tightness", category: "upper_traps_tightness" },
          { label: "No", category: null }
        ]
      },
      {
        id: "n2",
        text: "Do you get headaches that start at the base of your skull and radiate forward?",
        options: [
          { label: "Yes, frequently", category: "tension_headache" },
          { label: "No", category: null }
        ]
      },
      {
        id: "n3",
        text: "Does turning your head to the side (like checking blind spot) feel restricted?",
        options: [
          { label: "Yes, right side", category: "rotation_limit_right" },
          { label: "Yes, left side", category: "rotation_limit_left" },
          { label: "No", category: null }
        ]
      }
    ]
  },

  // 2. UPPER EXTREMITY (Shoulder, Elbow, Wrist)
  "upper-extremity": {
    title: "Upper Body (Shoulder & Arm)",
    questions: [
      {
        id: "u1",
        text: "Does it hurt when you lift your arm outward between 60°–120°?",
        options: [
          { label: "Yes", category: "supraspinatus" },
          { label: "No", category: null }
        ]
      },
      {
        id: "u2",
        text: "Is it hard to rotate your forearm outward with your elbow at your side?",
        options: [
          { label: "Yes", category: "infraspinatus" },
          { label: "No", category: null }
        ]
      },
      {
        id: "u3",
        text: "When placing your hand behind your lower back, do you feel pain/weakness?",
        options: [
          { label: "Yes", category: "subscapularis" },
          { label: "No", category: null }
        ]
      },
      {
        id: "u4",
        text: "Do you feel pain in the front of the shoulder when lifting?",
        options: [
          // FIXED: Changed 'biceps_tendon' to 'biceps_long_head'
          { label: "Yes", category: "biceps_long_head" }, 
          { label: "No", category: null }
        ]
      }
    ]
  },

  // 3. BACK (Upper and Lower Spine)
  "back": {
    title: "Spine & Back Assessment",
    questions: [
      {
        id: "b1",
        text: "Do you feel sharp leg pain (sciatica) when bending forward?",
        options: [
          // FIXED: Changed 'discogenic' to 'discogenic_back'
          { label: "Yes, shoots down leg", category: "discogenic_back" },
          // NOTE: 'erector_spinae' is missing from your resultMapping!
          { label: "Only local back pain", category: "erector_spinae" }, 
          { label: "No pain", category: null }
        ]
      },
      {
        id: "b2",
        text: "Do you feel lower back pain when rising after sitting for a long time?",
        options: [
          { label: "Yes", category: "si_joint" },
          { label: "No", category: null }
        ]
      },
      {
        id: "b3",
        text: "When lying on your back and lifting one leg, does your lower back arch uncontrollably?",
        options: [
          { label: "Yes", category: "weak_core" },
          { label: "No", category: null }
        ]
      }
    ]
  },

  // 4. PELVIC (Hips & Core)
  "pelvic": {
    title: "Pelvic & Hip Stability",
    questions: [
      {
        id: "p1",
        text: "When standing on one leg, does the opposite hip drop?",
        options: [
          { label: "Yes", category: "glute_med" },
          { label: "No", category: null }
        ]
      },
      {
        id: "p2",
        text: "Do you feel pain deep in the buttock area?",
        options: [
          { label: "Yes, deep ache", category: "piriformis" },
          { label: "No", category: null }
        ]
      },
      {
        id: "p3",
        text: "Do you have pain in the front groin area when lifting your knee?",
        options: [
          { label: "Yes", category: "iliopsoas" },
          { label: "No", category: null }
        ]
      }
    ]
  },

  // 5. LOWER EXTREMITY (Knee, Ankle, Foot)
  "lower-extremity": {
    title: "Lower Body (Knee & Ankle)",
    questions: [
      {
        id: "l1",
        text: "Do you feel knee pain when going downstairs?",
        options: [
          // FIXED: Changed 'pfps' to 'patellofemoral'
          { label: "Yes", category: "patellofemoral" }, 
          { label: "No", category: null }
        ]
      },
      {
        id: "l2",
        text: "Does your knee click or lock when squatting?",
        options: [
          { label: "Painful click/lock", category: "meniscus" },
          { label: "Click without pain", category: null },
          { label: "No click", category: null }
        ]
      },
      {
        id: "l3",
        text: "Does your knee feel like it 'gives way' or buckles during activity?",
        options: [
          // FIXED: Changed 'acl_instability' to 'acl'
          { label: "Yes", category: "acl" }, 
          { label: "No", category: null }
        ]
      }
    ]
  }
};

export default questions;