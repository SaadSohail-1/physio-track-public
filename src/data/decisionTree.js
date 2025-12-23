export const decisionTree = {
  // 1. UPPER EXTREMITY (Nested by Joint)
  "upper-extremity": {
    subRegions: true,
    regions: {
      shoulder: [
        {
          id: "adhesive_capsulitis",
          title: "Adhesive Capsulitis (Frozen Shoulder)",
          threshold: 3,
          questions: [
            "Do you have progressive shoulder stiffness that has worsened over weeks to months?",
            "Is your shoulder painful at night, especially when lying on the affected side?",
            "Is external rotation (turning arm out) restricted even when someone else moves it?",
            "Is your range of motion equally limited whether you move it or someone else moves it?",
            "Do you have a history of diabetes, thyroid issues, or recent arm immobilization?"
          ]
        },
        {
          id: "rotator_cuff",
          title: "Rotator Cuff Injury",
          threshold: 3,
          questions: [
            "Did the pain start after a specific injury, fall, or sudden lifting movement?",
            "Do you have pain specifically when reaching overhead or behind your back?",
            "Do you feel true weakness (inability to lift) rather than just pain-related stiffness?",
            "Is the pain located primarily on the side of the upper arm (deltoid area)?",
            "Can someone else lift your arm higher than you can lift it yourself?"
          ]
        },
        {
          id: "shoulder_impingement",
          title: "Subacromial Impingement",
          threshold: 3,
          questions: [
            "Do you feel a 'painful arc' or pinch when lifting your arm between 60° and 120°?",
            "Does the pain lessen if you lift your arm higher, past the painful point?",
            "Do you have pain when reaching across your body to the opposite shoulder?",
            "Is the pain sharp/catching rather than a dull, deep ache?",
            "Do you have rounded shoulders or poor posture that seems to aggravate the pain?"
          ]
        }
      ],
      elbow: [
        {
          id: "tennis_elbow",
          title: "Lateral Epicondylitis (Tennis Elbow)",
          threshold: 3,
          questions: [
            "Do you feel pain specifically on the bony bump on the OUTSIDE of your elbow?",
            "Does gripping objects (like a coffee cup) or shaking hands increase the pain?",
            "Does lifting your hand backward (wrist extension) against resistance cause pain?",
            "Is there pain when twisting a lid off a jar or turning a doorknob?",
            "Does the pain radiate down into your forearm muscles?"
          ]
        },
        {
          id: "golfers_elbow",
          title: "Medial Epicondylitis (Golfer's Elbow)",
          threshold: 3,
          questions: [
            "Do you feel pain specifically on the bony bump on the INSIDE of your elbow?",
            "Does bending your wrist palm-down (flexion) against resistance cause pain?",
            "Do you feel stiffness or aching in the elbow specifically in the morning?",
            "Does lifting heavy objects with your palm facing up aggravate the pain?",
            "Is there any tingling sensation in your ring or little finger?"
          ]
        }
      ],
      wrist: [
        {
          id: "carpal_tunnel",
          title: "Carpal Tunnel Syndrome",
          threshold: 3,
          questions: [
            "Do you feel numbness or tingling in your thumb, index, and middle fingers?",
            "Do symptoms wake you up at night, requiring you to 'shake out' your hand?",
            "Do you feel weakness or clumsiness when pinching small objects?",
            "Does bending your wrist forward for 60 seconds reproduce the tingling?",
            "Do you find yourself dropping objects more frequently than usual?"
          ]
        },
        {
          id: "de_quervains",
          title: "De Quervain's Tenosynovitis",
          threshold: 3,
          questions: [
            "Is there pain at the base of your thumb near the wrist?",
            "Does making a fist with your thumb tucked inside cause sharp pain?",
            "Is there swelling or tenderness on the thumb side of the wrist?",
            "Does lifting a jug of water or a child aggravate the pain?",
            "Do you feel a 'creaking' or 'squeaking' sensation when moving the thumb?"
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
            "Do you feel stiffness in the groin or deep hip in the morning lasting <30 mins?",
            "Is it difficult to put on socks or tie shoes due to hip stiffness?",
            "Does the pain worsen with extended walking but improve with rest?",
            "Do you have a limited range of motion when rotating your leg inward?",
            "Do you hear or feel a 'grinding' sensation (crepitus) in the hip joint?"
          ]
        },
        {
          id: "trochanteric_bursitis",
          title: "Greater Trochanteric Pain Syndrome",
          threshold: 3,
          questions: [
            "Is the pain located on the *outside* of the hip rather than the groin?",
            "Is the area tender to the touch (e.g., when lying on that side in bed)?",
            "Does the pain worsen when standing on one leg or walking up stairs?",
            "Does the pain radiate down the outside of the thigh (but not past the knee)?",
            "Did the pain start after an increase in walking or running activity?"
          ]
        }
      ],
      knee: [
        {
          id: "acl_tear",
          title: "ACL Injury",
          threshold: 3,
          questions: [
            "Did you hear or feel a loud 'pop' at the specific moment of injury?",
            "Did the knee swell up significantly within 2 hours of the injury?",
            "Does the knee feel unstable or like it will 'give way' when pivoting?",
            "Were you unable to continue playing your sport immediately after the injury?",
            "Do you have difficulty fully straightening the knee due to swelling?"
          ]
        },
        {
          id: "meniscus_tear",
          title: "Meniscus Tear",
          threshold: 3,
          questions: [
            "Does your knee lock, click, or catch painfully during movement?",
            "Is there distinct pain along the joint line (gap between bones) when twisting?",
            "Do you have difficulty fully bending (squatting) or straightening the knee?",
            "Did the pain develop 24-48 hours after a twisting injury (delayed swelling)?",
            "Does the knee feel like it 'gives way' specifically when walking on uneven ground?"
          ]
        },
        {
          id: "patellofemoral_pain",
          title: "Patellofemoral Pain (Runner's Knee)",
          threshold: 3,
          questions: [
            "Is the pain located generally 'around' or 'behind' the kneecap?",
            "Does the pain worsen after sitting for long periods (Movie-goer's sign)?",
            "Is the pain aggravated by descending stairs or squatting?",
            "Do you hear a grinding noise (crepitus) when extending the knee?",
            "Did the pain start gradually without a specific trauma or accident?"
          ]
        }
      ],
      ankle: [
        {
          id: "lateral_ankle_sprain",
          title: "Lateral Ankle Sprain",
          threshold: 3,
          questions: [
            "Did you roll your ankle inwards (inversion) during the injury?",
            "Is there swelling and bruising on the outer side of the ankle?",
            "Is the area tender to touch directly over the outer ankle bone?",
            "Is it painful to turn your foot inwards?",
            "Are you able to bear weight on the foot, even if it is painful?"
          ]
        },
        {
          id: "plantar_fasciitis",
          title: "Plantar Fasciitis",
          threshold: 3,
          questions: [
            "Is the pain located on the bottom of the heel or arch?",
            "Is the pain worst during the first few steps in the morning?",
            "Does the pain decrease after walking for a few minutes, then return later?",
            "Does stretching your big toe upward reproduce the pain?",
            "Have you recently increased time standing on hard surfaces or changed footwear?"
          ]
        }
      ]
    }
  },

  // 3. Simple Sections (Direct Lists)
  "neck": [
    {
      id: "cervical_radiculopathy",
      title: "Cervical Radiculopathy (Pinched Nerve)",
      threshold: 3,
      questions: [
        "Does pain radiate from your neck down into your arm or hand?",
        "Do you experience numbness, tingling, or 'pins and needles' in the fingers?",
        "Does turning your head toward the painful side worsen the arm symptoms?",
        "Does lifting your arm and placing your hand on your head relieve the pain?",
        "Do you have weakness in your grip or arm muscles?"
      ]
    },
    {
      id: "mechanical_neck_pain",
      title: "Mechanical Neck Pain (Postural)",
      threshold: 3,
      questions: [
        "Is the pain localized to the neck and upper shoulders without arm symptoms?",
        "Does the pain worsen with prolonged sitting, driving, or computer use?",
        "Is your neck stiffness worse in the morning or end of the day?",
        "Is the pain relieved by heat, massage, or changing position?",
        "Do you have limited range of motion when turning your head to check blind spots?"
      ]
    }
  ],
  "back": [
    {
      id: "lumbar_radiculopathy",
      title: "Lumbar Radiculopathy (Sciatica)",
      threshold: 3,
      questions: [
        "Does pain shoot from your lower back down into your leg (below the knee)?",
        "Do you have numbness, tingling, or weakness in your foot or leg?",
        "Does bending forward (like touching your toes) increase the leg pain?",
        "Is the leg pain significantly worse than the back pain itself?",
        "Does coughing, sneezing, or straining on the toilet increase the pain?"
      ]
    },
    {
      id: "lumbar_stenosis",
      title: "Lumbar Spinal Stenosis",
      threshold: 3,
      questions: [
        "Are you generally older than 60 years of age?",
        "Does pain or heaviness in the legs worsen when walking or standing upright?",
        "Is the pain relieved quickly by sitting down or leaning forward (shopping cart sign)?",
        "Do you experience cramping in both calves when walking?",
        "Do you have no pain when sitting or sleeping?"
      ]
    },
    {
      id: "mechanical_low_back",
      title: "Mechanical Low Back Pain",
      threshold: 3,
      questions: [
        "Is the pain limited to the lower back without shooting down the legs?",
        "Does the pain change with position (e.g., worse with standing, better with lying)?",
        "Did the pain start after lifting, twisting, or a sudden movement?",
        "Is there muscle spasm or tightness in the lower back area?",
        "Are you generally able to find a comfortable position to sleep in?"
      ]
    }
  ]
};