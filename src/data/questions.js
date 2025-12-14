const questions = {
  // 1. NECK
  "neck": {
    title: "Neck & Cervical Assessment",
    questions: [
      {
        id: "n1",
        text: "Does looking down at your phone or feet cause pain at the base of your neck?",
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
        text: "Does turning your head to the side (like checking a blind spot) feel restricted?",
        options: [
          { label: "Yes, right side", category: "rotation_limit_right" },
          { label: "Yes, left side", category: "rotation_limit_left" },
          { label: "No", category: null }
        ]
      },
      // NEW QUESTIONS MAPPED TO EXISTING CATEGORIES
      {
        id: "n4",
        text: "Do you notice your shoulders 'hiking' up towards your ears when you are stressed or typing?",
        options: [
          { label: "Yes, constantly", category: "upper_traps_tightness" },
          { label: "No", category: null }
        ]
      },
      {
        id: "n5",
        text: "When you have been reading or working on a laptop for an hour, does the pain get worse?",
        options: [
          { label: "Yes, deep ache at base of neck", category: "cervical_flexion" },
          { label: "No", category: null }
        ]
      }
    ]
  },

  // 2. UPPER EXTREMITY
  "upper-extremity": {
    title: "Upper Body (Shoulder & Arm)",
    questions: [
      {
        id: "u1",
        text: "Does it hurt when you lift your arm outward between 60°–120° (Painful Arc)?",
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
        text: "When placing your hand behind your lower back, do you feel pain or weakness?",
        options: [
          { label: "Yes", category: "subscapularis" },
          { label: "No", category: null }
        ]
      },
      {
        id: "u4",
        text: "Do you feel pain in the front of the shoulder when lifting?",
        options: [
          { label: "Yes", category: "biceps_long_head" },
          { label: "No", category: null }
        ]
      },
      // NEW QUESTIONS MAPPED TO EXISTING CATEGORIES
      {
        id: "u5",
        text: "Does it hurt specifically when you reach across your chest to grab a seatbelt?",
        options: [
          { label: "Yes", category: "supraspinatus" }, 
          { label: "No", category: null }
        ]
      },
      {
        id: "u6",
        text: "Do you struggle to wash your hair or reach up to a high shelf due to weakness?",
        options: [
          { label: "Yes, weakness/pain", category: "supraspinatus" },
          { label: "No", category: null }
        ]
      }
    ]
  },

  // 3. BACK
  "back": {
    title: "Spine & Back Assessment",
    questions: [
      {
        id: "b1",
        text: "Do you feel sharp leg pain (sciatica) when bending forward?",
        options: [
          { label: "Yes, shoots down leg", category: "discogenic_back" },
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
      },
      // NEW QUESTIONS MAPPED TO EXISTING CATEGORIES
      {
        id: "b4",
        text: "Does coughing, sneezing, or bearing down increase your back or leg pain?",
        options: [
          { label: "Yes", category: "discogenic_back" },
          { label: "No", category: null }
        ]
      },
      {
        id: "b5",
        text: "Is your pain focused on one specific side of the 'dimples' in your lower back?",
        options: [
          { label: "Yes, one side hurts", category: "si_joint" },
          { label: "No", category: null }
        ]
      },
      {
        id: "b6",
        text: "Do you feel stiff in the lower back immediately upon waking up, but it gets better after moving?",
        options: [
          { label: "Yes, morning stiffness", category: "erector_spinae" },
          { label: "No", category: null }
        ]
      }
    ]
  },

  // 4. PELVIC
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
      },
      // NEW QUESTIONS MAPPED TO EXISTING CATEGORIES
      {
        id: "p4",
        text: "Do you feel pain or tingling going down the back of your thigh without back pain?",
        options: [
          { label: "Yes", category: "piriformis" },
          { label: "No", category: null }
        ]
      },
      {
        id: "p5",
        text: "When you run or walk for long distances, do your outer hips start to ache or burn?",
        options: [
          { label: "Yes", category: "glute_med" },
          { label: "No", category: null }
        ]
      }
    ]
  },

  // 5. LOWER EXTREMITY
  "lower-extremity": {
    title: "Lower Body (Knee & Ankle)",
    questions: [
      {
        id: "l1",
        text: "Do you feel knee pain when going downstairs?",
        options: [
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
          { label: "Yes", category: "acl" },
          { label: "No", category: null }
        ]
      },
      // NEW QUESTIONS MAPPED TO EXISTING CATEGORIES
      {
        id: "l4",
        text: "Do you have pain behind the kneecap after sitting for a long time (movie theater sign)?",
        options: [
          { label: "Yes, aches after sitting", category: "patellofemoral" },
          { label: "No", category: null }
        ]
      },
      {
        id: "l5",
        text: "Does twisting your knee while your foot is planted cause sharp pain?",
        options: [
          { label: "Yes, sharp pain", category: "meniscus" },
          { label: "No", category: null }
        ]
      }
    ]
  }
};

export default questions;