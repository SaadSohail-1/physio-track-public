const plansData = {
  // --- SHOULDER PLANS ---
  "shoulder_impingement_phase1": {
    id: "shoulder_impingement_phase1",
    title: "Rotator Cuff Strengthening (Impingement)",
    description: "A 4-week protocol designed to open up the subacromial space and strengthen the supraspinatus.",
    category: "Shoulder",
    video: { link: "https://www.youtube.com/embed/A0KZKk3ON0k" }, //placeholder vids
    weeks: [
      "Week 1: Isometric External Rotation (3x30s), Scapular Squeezes",
      "Week 2: Side-lying External Rotation (no weight), Wall Slides",
      "Week 3: Banded External Rotation, Prone Y's and T's",
      "Week 4: Full Can Raise, Push-up Plus (knees)"
    ]
  },
  "shoulder_rotation_phase1": {
    id: "shoulder_rotation_phase1",
    title: "Posterior Cuff & Rotation Control",
    description: "Focuses on the Infraspinatus and Teres Minor to stabilize the shoulder joint.",
    category: "Shoulder",
    video: { link: "https://www.youtube.com/embed/6X1vHzW6u7Y" },
    weeks: [
      "Week 1: Doorway Stretch, Isometric External Rotation",
      "Week 2: Banded W's, Side-lying wiper drills",
      "Week 3: Weighted Side-lying External Rotation",
      "Week 4: 90/90 Banded Rotations, Turkish Get-up (partial)"
    ]
  },
  "shoulder_anterior_unloading": {
    id: "shoulder_anterior_unloading",
    title: "Biceps Tendon Relief",
    description: "Unloads the front of the shoulder and corrects rounded posture.",
    category: "Shoulder",
    video: { link: "https://www.youtube.com/embed/nBzM5Jiei7A" },
    weeks: [
      "Week 1: Pec Stretch, Scapular Retraction Iso",
      "Week 2: Bicep Isometrics, Serratus Wall Slides",
      "Week 3: Banded Face Pulls, Rows",
      "Week 4: Eccentric Bicep Curls, Plank Holds"
    ]
  },

  // --- KNEE PLANS ---
  "knee_tracking_iso": {
    id: "knee_tracking_iso",
    title: "Patella Tracking & VMO",
    description: "Strengthens the inner quad (VMO) to stop knee clicking and pain on stairs.",
    category: "Knee",
    video: { link: "https://www.youtube.com/embed/7fKoT3lvsN8" },
    weeks: [
      "Week 1: Quad Sets (Towel under knee), Straight Leg Raise",
      "Week 2: Wall Sits (30s), Clamshells",
      "Week 3: Terminal Knee Extensions (Band), Step-downs",
      "Week 4: Peterson Step-ups, Goblet Squats"
    ]
  },
  "knee_stability_acl": {
    id: "knee_stability_acl",
    title: "Knee Stability (ACL Focus)",
    description: "Proprioception and stability work for giving-way sensations.",
    category: "Knee",
    video: { link: "https://www.youtube.com/embed/6N8eUQWbjHI" },
    weeks: [
      "Week 1: Single Leg Balance (floor), Heel Slides",
      "Week 2: Single Leg Balance (pillow), Mini Squats",
      "Week 3: Single Leg RDL (bodyweight), Monster Walks",
      "Week 4: Box Jumps (Landing focus), Lateral Lunges"
    ]
  },
  "knee_meniscus_unload": {
    id: "knee_meniscus_unload",
    title: "Meniscus Unloading & ROM",
    description: "Low impact movement to lubricate the joint without aggravation.",
    category: "Knee",
    video: { link: "https://www.youtube.com/embed/U_Q4LgdK1J0" },
    weeks: [
      "Week 1: Heel Slides, Calf Pumps, Quad Sets",
      "Week 2: Stationary Bike (Zero resistance), Glute Bridges",
      "Week 3: Mini Wall Sits, Hamstring Curls (standing)",
      "Week 4: Full Range Squats (assisted), Backward Walking"
    ]
  },

  // --- HIP PLANS ---
  "hip_stability_basics": {
    id: "hip_stability_basics",
    title: "Lateral Hip Stability (Glute Med)",
    description: "Fixes hip drop and lateral knee pain.",
    category: "Hip",
    video: { link: "https://www.youtube.com/embed/2qZ517Rw7ME" },
    weeks: [
      "Week 1: Clamshells, Side Lying Leg Raises",
      "Week 2: Banded Clamshells, Glute Bridges",
      "Week 3: Monster Walks (Band at knees), Fire Hydrants",
      "Week 4: Single Leg RDL, Lateral Step-ups"
    ]
  },
  "hip_flexor_release": {
    id: "hip_flexor_release",
    title: "Hip Flexor Release",
    description: "For pinching in the groin and tight hips from sitting.",
    category: "Hip",
    video: { link: "https://www.youtube.com/embed/5pTy9KPXoV8" },
    weeks: [
      "Week 1: Lunge Stretch (Knee down), Glute Squeezes",
      "Week 2: Couch Stretch, Deadbugs",
      "Week 3: Standing Hip Flexor March (Band), Glute Bridges",
      "Week 4: Split Squats, Core Hollow Holds"
    ]
  },

  // --- BACK PLANS ---
  "lumbar_flexion_control": {
    id: "lumbar_flexion_control",
    title: "Discogenic Pain Protocol",
    description: "Extension-biased exercises to centralize disc symptoms.",
    category: "Back",
    video: { link: "https://www.youtube.com/embed/GLd7cE92JFA" },
    weeks: [
      "Week 1: Prone Lying (5 mins), Cobra Press-ups (gentle)",
      "Week 2: Standing Extensions, Bird-Dog (arms only)",
      "Week 3: Full Cobra, Bird-Dog (full)",
      "Week 4: Plank (knees), Cat-Cow (gentle)"
    ]
  },
  "si_joint_stability": {
    id: "si_joint_stability",
    title: "SI Joint Stability",
    description: "Lock down the pelvis to stop shifting pain.",
    category: "Back",
    video: { link: "https://www.youtube.com/embed/9KjE8hZRL4k" },
    weeks: [
      "Week 1: Isometric Adductor Squeeze (Ball between knees)",
      "Week 2: Glute Bridges (Band above knees)",
      "Week 3: Deadbugs (Core braced), Side Planks",
      "Week 4: Single Leg Glute Bridge, Suitcase Carry"
    ]
  },
  "core_motor_control": {
    id: "core_motor_control",
    title: "Core Motor Control",
    description: "Re-learning how to brace the spine during movement.",
    category: "Back",
    video: { link: "https://www.youtube.com/embed/8w6XapnwYHc" },
    weeks: [
      "Week 1: Abdominal Bracing (lying), Pelvic Tilts",
      "Week 2: Deadbug (Legs only), Heel Taps",
      "Week 3: Bird-Dog, Side Plank (knees)",
      "Week 4: Pallof Press, Farmer Carries"
    ]
  },

  // --- NECK PLANS ---
  "neck_deep_flexor": {
    id: "neck_deep_flexor",
    title: "Deep Neck Flexor Training",
    description: "Corrects forward head posture and weak neck stabilizers.",
    category: "Neck",
    video: { link: "https://www.youtube.com/embed/G6jZtZ0tM9E" },
    weeks: [
      "Week 1: Chin Tucks (supine), Scapular Setting",
      "Week 2: Chin Tucks (seated against wall)",
      "Week 3: Chin Tuck with Head Lift (1cm)",
      "Week 4: Quadruped Chin Tucks"
    ]
  },
  "neck_mobility_rotation": {
    id: "neck_mobility_rotation",
    title: "Cervical Mobility & SNAGs",
    description: "Restores lost rotation in the neck.",
    category: "Neck",
    video: { link: "https://www.youtube.com/embed/Eq45_iYV5gE" },
    weeks: [
      "Week 1: Towel Snag (Rotation), Upper Trap Stretch",
      "Week 2: Levator Scapulae Stretch, Doorway Stretch",
      "Week 3: Active Rotation with Overpressure",
      "Week 4: Thoracic Extensions, Wall Angels"
    ]
  },
  
  // --- FALLBACK ---
  "full_body_mobility": {
    id: "full_body_mobility",
    title: "General Mobility Flow",
    description: "A daily routine to keep joints healthy.",
    category: "General",
    video: { link: "https://www.youtube.com/embed/Vf3TjMGWExg" },
    weeks: [
      "Week 1: Cat-Cow, Child's Pose",
      "Week 2: World's Greatest Stretch, Hip 90/90",
      "Week 3: Thoracic Rotation, Deep Squat Hold",
      "Week 4: Sun Salutations, Foam Rolling"
    ]
  }
};

export default plansData;