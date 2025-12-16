export const decisionTree = {
  // 1. UPPER EXTREMITY (Nested by Joint)
  "upper-extremity": {
    subRegions: true, // Flag to tell the UI to ask for location
    regions: {
      shoulder: [
        // PRIORITY 1: Adhesive Capsulitis
        {
          id: "adhesive_capsulitis",
          title: "Adhesive Capsulitis (Frozen Shoulder)",
          threshold: 3,
          questions: [
            "Do you have progressive shoulder stiffness that has worsened over weeks to months?",
            "Is your shoulder painful at night, especially when lying on the affected side?",
            "Is external rotation most restricted, even when someone else tries to move your shoulder?",
            "Is your active and passive range of motion equally limited?",
            "Do you have a history of diabetes or recent immobilization?"
          ]
        },
        // PRIORITY 2: Rotator Cuff
        {
          id: "rotator_cuff",
          title: "Rotator Cuff Injury",
          threshold: 3,
          questions: [
            "Did your shoulder pain start after a recent injury, fall, or sudden movement?",
            "Do you have pain with overhead activity or reaching away from your body?",
            "Do you feel true weakness when lifting the arm, not just pain?",
            "Is your passive range of motion better than your active movement?",
            "Is there night pain when lying on the affected shoulder?"
          ]
        }
        // ... Add Impingement, Bursitis here
      ],
      elbow: [
        {
          id: "tennis_elbow",
          title: "Lateral Epicondylitis (Tennis Elbow)",
          threshold: 2,
          questions: [
            "Do you feel pain on the OUTSIDE of your elbow?",
            "Does gripping objects or shaking hands increase the pain?",
            "Does lifting your wrist backwards against resistance hurt?"
          ]
        },
        {
          id: "golfers_elbow",
          title: "Medial Epicondylitis (Golfer's Elbow)",
          threshold: 2,
          questions: [
            "Do you feel pain on the INSIDE of your elbow?",
            "Does flexing your wrist palm-down against resistance hurt?",
            "Do you feel stiffness in the elbow in the morning?"
          ]
        }
      ],
      wrist: [
        {
          id: "carpal_tunnel",
          title: "Carpal Tunnel Syndrome",
          threshold: 2,
          questions: [
            "Do you feel numbness or tingling in your thumb, index, and middle fingers?",
            "Do symptoms wake you up at night to 'shake out' your hand?",
            "Do you feel weakness when pinching small objects?"
          ]
        }
      ]
    }
  },

  // 2. LOWER EXTREMITY (Nested by Joint)
  "lower-extremity": {
    subRegions: true,
    regions: {
      hip: [
        {
          id: "hip_oa",
          title: "Hip Osteoarthritis",
          threshold: 3,
          questions: [
            "Do you feel stiffness in the groin/hip in the morning that lasts <30 mins?",
            "Is it difficult to put on socks or tie shoes due to stiffness?",
            "Does the pain worsen with activity but improve with rest?"
          ]
        }
        // ... Add Piriformis, Bursitis
      ],
      knee: [
        {
          id: "acl_tear",
          title: "ACL Injury",
          threshold: 2,
          questions: [
            "Did you hear a loud 'pop' at the time of injury?",
            "Did the knee swell up immediately (within 2 hours)?",
            "Does the knee feel unstable or 'give way' when pivoting?"
          ]
        },
        {
          id: "meniscus_tear",
          title: "Meniscus Tear",
          threshold: 2,
          questions: [
            "Does your knee lock, click, or catch painfully?",
            "Is there pain along the joint line when twisting?",
            "Do you have difficulty fully straightening the knee?"
          ]
        }
      ],
      ankle: [
         // Ankle sprains, Plantar Fasciitis etc.
      ]
    }
  },

  // 3. Simple Sections (Direct Lists)
  "neck": [
    {
      id: "cervical_radiculopathy",
      title: "Cervical Radiculopathy",
      threshold: 3,
      questions: ["Question 1...", "Question 2..."]
    }
  ],
  "back": [
    // ...
  ]
};