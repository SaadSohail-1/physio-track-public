const plansData = {
  // ==========================================
  // SHOULDER PLANS
  // ==========================================
  "shoulder_frozen_phase1": {
    id: "shoulder_frozen_phase1",
    title: "Frozen Shoulder (Mobility Focus)",
    description: "Gentle, progressive stretching to restore range of motion in stiff shoulders.",
    category: "Shoulder",
    video: { link: "https://www.youtube.com/embed/A0KZKk3ON0k" },
    weeks: [
      "Week 1: Pendulum Swings, Passive Table Slides",
      "Week 2: Cane Exercises (Flexion & Ext Rotation)",
      "Week 3: Pulley System Mobilization, Wall Crawls",
      "Week 4: Active Assistive Overhead Reach, Cross-Body Stretch"
    ]
  },
  "shoulder_impingement_phase1": {
    id: "shoulder_impingement_phase1",
    title: "Rotator Cuff Strengthening (Impingement)",
    description: "A 4-week protocol designed to open up the subacromial space and strengthen the supraspinatus.",
    category: "Shoulder",
    video: { link: "https://www.youtube.com/embed/ZJg6wENtGCE" },
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

  // ==========================================
  // ELBOW & WRIST PLANS
  // ==========================================
  "elbow_tennis_phase1": {
    id: "elbow_tennis_phase1",
    title: "Tennis Elbow Rehab (Lateral)",
    description: "Eccentric loading protocol for the common extensor tendon.",
    category: "Elbow",
    video: { link: "https://www.youtube.com/embed/g2qM4j4jV4k" },
    weeks: [
      "Week 1: Wrist Extensor Isometrics (Hold 45s), Massage",
      "Week 2: Eccentric Wrist Extension (Lowering only)",
      "Week 3: Concentric Wrist Extension (Light weight)",
      "Week 4: Tyler Twist (Bar), Hammer Curls"
    ]
  },
  "elbow_golfers_phase1": {
    id: "elbow_golfers_phase1",
    title: "Golfer's Elbow Rehab (Medial)",
    description: "Loading protocol for the flexor pronator mass.",
    category: "Elbow",
    video: { link: "https://www.youtube.com/embed/J7gG9fJ5z9A" },
    weeks: [
      "Week 1: Wrist Flexor Isometrics, Ulnar Deviation",
      "Week 2: Eccentric Wrist Flexion (lowering focus)",
      "Week 3: Pronation/Supination with Hammer",
      "Week 4: Grip Strengthening, Farmer Carries"
    ]
  },
  "wrist_carpal_tunnel": {
    id: "wrist_carpal_tunnel",
    title: "Carpal Tunnel Relief",
    description: "Nerve gliding and tendon gliding exercises to reduce compression.",
    category: "Wrist",
    video: { link: "https://www.youtube.com/embed/1C1oWqgZ1b0" },
    weeks: [
      "Week 1: Wrist Splinting (Night), Tendon Glides A & B",
      "Week 2: Median Nerve Glides (Gentle)",
      "Week 3: Wrist Flexor Stretching, Grip work",
      "Week 4: Nerve Glides (Advanced), Weight Bearing Prep"
    ]
  },
  "wrist_thumb_stability": {
    id: "wrist_thumb_stability",
    title: "Thumb/De Quervain's Protocol",
    description: "Unloading the thumb tendons and improving stability.",
    category: "Wrist",
    video: { link: "https://www.youtube.com/embed/vLH_h-y0HfY" },
    weeks: [
      "Week 1: Thumb Spica Splinting, Isometric Abduction",
      "Week 2: Finkelstein Stretch (Gentle), Opposition drills",
      "Week 3: Rubber Band Extension (Finger spread)",
      "Week 4: Hammer Grip Isometrics, Wrist Radial Deviation"
    ]
  },

  // ==========================================
  // HIP & KNEE PLANS
  // ==========================================
  "hip_oa_mobility": {
    id: "hip_oa_mobility",
    title: "Hip Osteoarthritis Management",
    description: "Joint mobilization to reduce stiffness and improve walking tolerance.",
    category: "Hip",
    video: { link: "https://www.youtube.com/embed/2qZ517Rw7ME" },
    weeks: [
      "Week 1: Hip Pendulums, Lying Abduction",
      "Week 2: Glute Bridges, Sit-to-Stand (High Chair)",
      "Week 3: Clamshells, Stationary Bike",
      "Week 4: Step-ups, Lateral Band Walks"
    ]
  },
  "hip_bursitis_relief": {
    id: "hip_bursitis_relief",
    title: "Lateral Hip Pain Relief",
    description: "Unloading the bursa and strengthening the glute medius.",
    category: "Hip",
    video: { link: "https://www.youtube.com/embed/5pTy9KPXoV8" },
    weeks: [
      "Week 1: Side Lying Pillow Squeeze, Isometric Abduction",
      "Week 2: Clamshells (No band), Standing Abduction",
      "Week 3: Lateral Band Walk (Ankles), Single Leg Stance",
      "Week 4: Side Planks (Knees), Step Downs"
    ]
  },
  "knee_acl_prehab": {
    id: "knee_acl_prehab",
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
  "knee_patella_tracking": {
    id: "knee_patella_tracking",
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

  // ==========================================
  // ANKLE PLANS
  // ==========================================
  "ankle_stability_phase1": {
    id: "ankle_stability_phase1",
    title: "Ankle Sprain Rehab",
    description: "Restoring stability and peroneal strength after a lateral sprain.",
    category: "Ankle",
    video: { link: "https://www.youtube.com/embed/1Y1v5q1f1q0" },
    weeks: [
      "Week 1: Isometrics (Eversion), Alphabet Tracing",
      "Week 2: Single Leg Balance, Calf Raises (Double)",
      "Week 3: Single Leg Calf Raise, Banded Eversion",
      "Week 4: Hop and Stick, Star Excursion Balance"
    ]
  },
  "ankle_plantar_relief": {
    id: "ankle_plantar_relief",
    title: "Plantar Fasciitis Relief",
    description: "Stretching the calf and fascia to reduce morning heel pain.",
    category: "Ankle",
    video: { link: "https://www.youtube.com/embed/h0K2o1J1aWk" },
    weeks: [
      "Week 1: Frozen Water Bottle Roll, Towel Scrunches",
      "Week 2: Gastroc Stretch (Wall), Soleus Stretch",
      "Week 3: Eccentric Heel Drops (Two up, one down)",
      "Week 4: Single Leg Heel Raise (Weighted), Jump Rope (Gentle)"
    ]
  },

  // ==========================================
  // SPINE (Neck & Back)
  // ==========================================
  "neck_nerve_glides": {
    id: "neck_nerve_glides",
    title: "Cervical Radiculopathy Protocol",
    description: "Reduces arm pain and numbness through neural mobilization.",
    category: "Neck",
    video: { link: "https://www.youtube.com/embed/Eq45_iYV5gE" },
    weeks: [
      "Week 1: Scapular Retractions, Upper Trap Stretch",
      "Week 2: Median Nerve Glides (Level 1), Chin Tucks",
      "Week 3: Wall Angels, Thoracic Extension",
      "Week 4: Nerve Glides (Level 2), Prone T's"
    ]
  },
  "neck_posture_reset": {
    id: "neck_posture_reset",
    title: "Postural Neck Reset",
    description: "Corrects 'Tech Neck' and mechanical stiffness.",
    category: "Neck",
    video: { link: "https://www.youtube.com/embed/G6jZtZ0tM9E" },
    weeks: [
      "Week 1: Chin Tucks (Supine), Pec Stretch",
      "Week 2: Seated Chin Tucks, Levator Scap Stretch",
      "Week 3: Deep Neck Flexor Holds, Banded Pull Aparts",
      "Week 4: Quadruped Chin Tucks, Foam Rolling T-Spine"
    ]
  },
  "back_disc_protocol": {
    id: "back_disc_protocol",
    title: "Discogenic (Extension) Protocol",
    description: "Extension-biased exercises to centralize disc symptoms (better with standing).",
    category: "Back",
    video: { link: "https://www.youtube.com/embed/GLd7cE92JFA" },
    weeks: [
      "Week 1: Prone Lying (5 mins), Cobra Press-ups (gentle)",
      "Week 2: Standing Extensions, Bird-Dog (arms only)",
      "Week 3: Full Cobra, Bird-Dog (full)",
      "Week 4: Plank (knees), Cat-Cow (gentle)"
    ]
  },
  "back_stenosis_protocol": {
    id: "back_stenosis_protocol",
    title: "Stenosis (Flexion) Protocol",
    description: "Flexion-biased exercises to open the spinal canal (better with sitting).",
    category: "Back",
    video: { link: "https://www.youtube.com/embed/8w6XapnwYHc" },
    weeks: [
      "Week 1: Double Knee to Chest, Posterior Pelvic Tilts",
      "Week 2: Child's Pose, Deadbugs (Legs supported)",
      "Week 3: Seated Flexion Stretch, Glute Bridges",
      "Week 4: Stationary Bike (Leaning forward), Core Bracing"
    ]
  },
  "back_core_stability": {
    id: "back_core_stability",
    title: "Mechanical Back Pain (Core)",
    description: "General stability for muscular back pain.",
    category: "Back",
    video: { link: "https://www.youtube.com/embed/9KjE8hZRL4k" },
    weeks: [
      "Week 1: Finding Neutral Spine, Deadbug (Hold)",
      "Week 2: Bird Dog, Side Plank (Knees)",
      "Week 3: Pallof Press, Farmer Carry",
      "Week 4: Full Plank, Squat with Bracing"
    ]
  },
  "back_sciatica_relief": {
    id: "back_sciatica_relief",
    title: "Sciatica & Nerve Flossing",
    description: "Mobilizing the sciatic nerve to reduce leg pain.",
    category: "Back",
    video: { link: "https://www.youtube.com/embed/tFnGWE2rmcg" },
    weeks: [
      "Week 1: Sciatic Nerve Glide (Lying), Piriformis Stretch",
      "Week 2: Sciatic Glide (Seated), Hamstring Stretch",
      "Week 3: Slump Flossing, Glute Strengthening",
      "Week 4: Nerve Glide (Standing), Core Integration"
    ]
  },
  
  // ==========================================
  // FALLBACK
  // ==========================================
  "general_mobility": {
    id: "general_mobility",
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