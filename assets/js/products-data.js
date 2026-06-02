const productsData = [
  // ========== MOBILITY AIDS ==========
  { id: 1, name: "Standard Wheelchair", price: 13000, category: "mobility", image: "standard-wheelchair.jpg" },
  { id: 2, name: "Lightweight Folding Wheelchair", price: 22000, category: "mobility", image: "lightweight-wheelchair.jpg" },
  { id: 3, name: "Electric Wheelchair", price: 125000, category: "mobility", image: "electric-wheelchair.jpg" },
  { id: 4, name: "Reclining Electric Wheelchair", price: 130000, category: "mobility", image: "reclining-wheelchair.jpg" },
  { id: 5, name: "Standard Commode Wheelchair", price: 17000, category: "mobility", image: "commode-wheelchair.jpg" },
  { id: 6, name: "Patient Transfer Chair", price: 50000, category: "mobility", image: "transfer-chair.jpg" },
  { id: 7, name: "Quad Cane (4 Legs)", price: 2500, category: "mobility", image: "quad-cane.jpg" },
  { id: 8, name: "Walking Frame without Wheels", price: 4500, category: "mobility", image: "walking-frame.jpg" },
  { id: 9, name: "Elbow Crutches (Pair)", price: 2800, category: "mobility", image: "elbow-crutches.jpg" },
  { id: 10, name: "Axillary Crutches (Pair)", price: 2800, category: "mobility", image: "axillary-crutches.jpg" },
  { id: 11, name: "Tripod Walking Stick", price: 2300, category: "mobility", image: "tripod-walking-stick.jpg" },
  { id: 12, name: "Extra Wide Heavy Duty Wheelchair", price: 23500, category: "mobility", image: "extra-wide-wheelchair.jpg" },
  { id: 13, name: "Walker Boots Short", price: 9500, category: "mobility", image: "walker-boots-short.jpg" },
  { id: 14, name: "Walker Boots Long", price: 10500, category: "mobility", image: "walker-boots-long.jpg" },
  { id: 15, name: "Toilet Raiser", price: 7500, category: "mobility", image: "toilet-raiser.jpg" },
  { id: 16, name: "Shower Chair", price: 9500, category: "mobility", image: "shower-chair.jpg" },
  { id: 17, name: "Commode Seat", price: 5500, category: "mobility", image: "commode-seat.jpg" },
  { id: 18, name: "Commode Chair with Wheels", price: 8000, category: "mobility", image: "commode-wheels.jpg" },
  { id: 19, name: "Commode Chair without Wheels", price: 7500, category: "mobility", image: "commode-chair.jpg" },
  { id: 20, name: "Drip Stand", price: 3500, category: "mobility", image: "drip-stand.jpg" },

  // ========== DIAGNOSTICS ==========
  { id: 21, name: "Omron Blood Pressure Monitor", price: 5000, category: "diagnostics", image: "omron-bp.jpg" },
  { id: 22, name: "Jumper Blood Pressure Monitor", price: 3500, category: "diagnostics", image: "jumper-bp.jpg" },
  { id: 23, name: "Glucose Meter Kit (Full Kit)", price: 2800, category: "diagnostics", image: "glucose-meter.jpg" },
  { id: 24, name: "Pulse Oximeter (Finger Tip)", price: 2200, category: "diagnostics", image: "oximeter.jpg" },
  { id: 25, name: "Hand Held Pulse Oximeter", price: 15000, category: "diagnostics", image: "handheld-oximeter.jpg" },
  { id: 26, name: "Infrared Thermometer", price: 1800, category: "diagnostics", image: "infrared-thermometer.jpg" },
  { id: 27, name: "Thermogun", price: 1600, category: "diagnostics", image: "thermogun.jpg" },
  { id: 28, name: "Nebulizer Machine", price: 5000, category: "diagnostics", image: "nebulizer.jpg" },
  { id: 29, name: "Portable Mesh Nebulizer", price: 2500, category: "diagnostics", image: "mesh-nebulizer.jpg" },
  { id: 30, name: "Oxygen Concentrator (5L)", price: 45000, category: "diagnostics", image: "oxygen-concentrator.jpg" },
  { id: 31, name: "Portable Oxygen Concentrator", price: 70000, category: "diagnostics", image: "portable-oxygen.jpg" },
  { id: 32, name: "Suction Machine", price: 20000, category: "diagnostics", image: "suction-machine.jpg" },
  { id: 33, name: "Fetal Doppler", price: 4000, category: "diagnostics", image: "fetal-doppler.jpg" },
  { id: 34, name: "Rechargeable Fetal Doppler", price: 7500, category: "diagnostics", image: "rechargeable-fetal-doppler.jpg" },
  { id: 35, name: "Alcohol Breath Tester", price: 3500, category: "diagnostics", image: "alcohol-tester.jpg" },
  { id: 36, name: "DP10 Mindray Ultrasound Machine", price: 360000, category: "diagnostics", image: "ultrasound.jpg" },
  { id: 37, name: "Diagnostic Set", price: 7000, category: "diagnostics", image: "diagnostic-set.jpg" },
  { id: 38, name: "Hearing Aids", price: 4000, category: "diagnostics", image: "hearing-aids.jpg" },
  { id: 39, name: "Infrared Light with Stand", price: 20000, category: "diagnostics", image: "infrared-light.jpg" },
  { id: 40, name: "Pentorch (Penlight Torch)", price: 750, category: "diagnostics", image: "pentorch.jpg" },
  { id: 41, name: "Vein Finder", price: 7500, category: "diagnostics", image: "vein-finder.jpg" },
  { id: 42, name: "On Call Machine with Strips", price: 2600, category: "diagnostics", image: "on-call-machine.jpg" },
  { id: 68, name: "Haematology Machine", price: 370000, category: "diagnostics", image: "haematology-machine.jpg" }, // NEW
  { id: 69, name: "Centrifuge", price: 9500, category: "diagnostics", image: "centrifuge.jpg" }, // NEW
  { id: 70, name: "Round Centrifuge", price: 8500, category: "diagnostics", image: "round-centrifuge.jpg" }, // NEW
  { id: 71, name: "Microscope", price: 25000, category: "diagnostics", image: "microscope.jpg" }, // NEW
  { id: 72, name: "Laboratory Oven", price: 42000, category: "diagnostics", image: "laboratory-oven.jpg" }, // NEW
  { id: 73, name: "Water Distiller", price: 38000, category: "diagnostics", image: "water-distiller.jpg" }, // NEW
  { id: 74, name: "Purple Tops (100s)", price: 900, category: "diagnostics", image: "purple-tops.jpg" }, // NEW

  // ========== ORTHOPEDIC SUPPORTS ==========
  { id: 43, name: "Lumbar Corset (Back Support)", price: 3000, category: "orthopedic", image: "lumbar-corset.jpg" },
  { id: 44, name: "Philadelphia Cervical Collar", price: 2600, category: "orthopedic", image: "cervical-collar.jpg" },
  { id: 45, name: "Knee Brace (Hinged)", price: 3000, category: "orthopedic", image: "knee-brace.jpg" },
  { id: 46, name: "Range of Motion Knee Brace", price: 9000, category: "orthopedic", image: "rom-knee-brace.jpg" },
  { id: 47, name: "Paediatric Arm Sling", price: 1500, category: "orthopedic", image: "paediatric-arm-sling.jpg" },
  { id: 48, name: "Silicone Insoles (Pair)", price: 2800, category: "orthopedic", image: "silicone-insoles.jpg" },
  { id: 49, name: "Donut Cushion", price: 4200, category: "orthopedic", image: "donut-cushion.jpg" },
  { id: 50, name: "Dilator Set", price: 4500, category: "orthopedic", image: "dilator-set.jpg" },
  { id: 51, name: "Heel Spur Fix Insoles (Pair)", price: 2200, category: "orthopedic", image: "heel-spur-insoles.jpg" },
  { id: 52, name: "Heel Silicone Insoles (Pair)", price: 2000, category: "orthopedic", image: "heel-silicone-insoles.jpg" },
  { id: 53, name: "Skin Traction Kit", price: 1800, category: "orthopedic", image: "skin-traction-kit.jpg" },

  // ========== PATIENT CARE ==========
  { id: 54, name: "Double Crank Hospital Bed", price: 38000, category: "patient-care", image: "double-crank-bed.jpg" },
  { id: 55, name: "Single Crank Hospital Bed", price: 28000, category: "patient-care", image: "single-crank-bed.jpg" },
  { id: 56, name: "Ripple Mattress (Anti-Bedsore Air Mattress)", price: 7500, category: "patient-care", image: "ripple-mattress.jpg" },
  { id: 57, name: "Urine Bottle", price: 1800, category: "patient-care", image: "urine-bottle.jpg" },
  { id: 58, name: "Bed Pad", price: 2200, category: "patient-care", image: "bed-pad.jpg" },
  { id: 59, name: "Manual Height & Weight Weighing Scale", price: 9000, category: "patient-care", image: "weighing-scale.jpg" },
  { id: 60, name: "Examination Lamp", price: 12500, category: "patient-care", image: "examination-lamp.jpg" },
  { id: 61, name: "Reusable Patient Gown", price: 1600, category: "patient-care", image: "patient-gown.jpg" },
  { id: 62, name: "4-Channel TENS Machine", price: 7500, category: "patient-care", image: "tens-machine.jpg" },
  { id: 63, name: "18L Autoclave", price: 18500, category: "patient-care", image: "autoclave.jpg" },
  { id: 64, name: "Foot Massager", price: 2200, category: "patient-care", image: "foot-massager.jpg" },
  { id: 65, name: "Massage Gun", price: 2800, category: "patient-care", image: "massage-gun.jpg" },
  { id: 66, name: "Rehabilitation Hand Robot Glove", price: 35000, category: "patient-care", image: "hand-glove.jpg" },
  { id: 67, name: "Spacer Mask", price: 1700, category: "patient-care", image: "spacer-mask.jpg" },
  { id: 75, name: "Delivery Bed", price: 32000, category: "patient-care", image: "delivery-bed.jpg" }, // NEW
  { id: 76, name: "Operating Table", price: 280000, category: "patient-care", image: "operating-table.jpg" }, // NEW
  { id: 77, name: "3 Function Electric Bed", price: 120000, category: "patient-care", image: "3-function-electric-bed.jpg" }, // NEW
  { id: 78, name: "Emergency Trolley / Crash Cart", price: 58000, category: "patient-care", image: "crash-cart.jpg" }, // NEW
  { id: 79, name: "Theatre Light", price: 350000, category: "patient-care", image: "theatre-light.jpg" } // NEW
];