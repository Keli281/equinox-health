const productsData = [
  // ========== MOBILITY AIDS (22 products) ==========
  { id: 1, name: "Standard Wheelchair", price: 13000, category: "mobility", image: "standard-wheelchair.jpg" },
  { id: 2, name: "Lightweight Folding Wheelchair", price: 22000, category: "mobility", image: "lightweight-wheelchair.jpg" },
  { id: 3, name: "Heavy Duty Wheelchair (150kg)", price: 28500, category: "mobility", image: "heavy-duty-wheelchair.jpg" },
  { id: 4, name: "Electric Wheelchair", price: 125000, category: "mobility", image: "electric-wheelchair.jpg" },
  { id: 5, name: "Reclining Electric Wheelchair", price: 130000, category: "mobility", image: "reclining-wheelchair.jpg" },
  { id: 6, name: "Standard Commode Wheelchair", price: 17000, category: "mobility", image: "commode-wheelchair.jpg" },
  { id: 7, name: "Patient Transfer Chair", price: 50000, category: "mobility", image: "transfer-chair.jpg" },
  { id: 8, name: "Walking Stick (Adjustable)", price: 1200, category: "mobility", image: "walking-stick.jpg" },
  { id: 9, name: "Quad Cane (4 Legs)", price: 2500, category: "mobility", image: "quad-cane.jpg" },
  { id: 10, name: "Walking Frame without Wheels", price: 4500, category: "mobility", image: "walking-frame.jpg" },
  { id: 11, name: "Walking Frame / Rollator", price: 5500, category: "mobility", image: "rollator.jpg" },
  { id: 12, name: "Elbow Crutches (Pair)", price: 2800, category: "mobility", image: "elbow-crutches.jpg" },
  { id: 13, name: "Forearm Crutches (Pair)", price: 3200, category: "mobility", image: "forearm-crutches.jpg" },
  { id: 14, name: "Walker Boots Short", price: 9500, category: "mobility", image: "walker-boots-short.jpg" },
  { id: 15, name: "Walker Boots Long", price: 10500, category: "mobility", image: "walker-boots-long.jpg" },
  { id: 16, name: "Folding Mobility Scooter", price: 65000, category: "mobility", image: "scooter.jpg" },
  { id: 17, name: "Toilet Raiser", price: 7500, category: "mobility", image: "toilet-raiser.jpg" },
  { id: 18, name: "Shower Chair", price: 9500, category: "mobility", image: "shower-chair.jpg" },
  { id: 19, name: "Commode Seat", price: 5500, category: "mobility", image: "commode-seat.jpg" },
  { id: 20, name: "Commode Chair with Wheels", price: 8000, category: "mobility", image: "commode-wheels.jpg" },
  { id: 21, name: "Commode Chair without Wheels", price: 7500, category: "mobility", image: "commode-chair.jpg" },
  { id: 22, name: "Bedside Commode Chair", price: 6500, category: "mobility", image: "bedside-commode.jpg" },

  // ========== DIAGNOSTICS (20 products - added Pentorch) ==========
  { id: 23, name: "Omron Blood Pressure Monitor", price: 5000, category: "diagnostics", image: "omron-bp.jpg" },
  { id: 24, name: "Jumper Blood Pressure Monitor", price: 3500, category: "diagnostics", image: "jumper-bp.jpg" },
  { id: 25, name: "Digital Blood Pressure Monitor", price: 4500, category: "diagnostics", image: "digital-bp.jpg" },
  { id: 26, name: "Upper Arm BP Monitor (Premium)", price: 6200, category: "diagnostics", image: "premium-bp.jpg" },
  { id: 27, name: "Glucose Meter Kit (Full Kit)", price: 2800, category: "diagnostics", image: "glucose-meter.jpg" }, // UPDATED price from 1800 to 2800
  { id: 28, name: "Pulse Oximeter (Finger Tip)", price: 2200, category: "diagnostics", image: "oximeter.jpg" },
  { id: 29, name: "Paediatric Pulse Oximeter", price: 1800, category: "diagnostics", image: "pediatric-oximeter.jpg" },
  { id: 30, name: "Digital Thermometer", price: 800, category: "diagnostics", image: "digital-thermometer.jpg" },
  { id: 31, name: "Infrared Thermometer", price: 1800, category: "diagnostics", image: "infrared-thermometer.jpg" },
  { id: 32, name: "Nebulizer Machine", price: 5000, category: "diagnostics", image: "nebulizer.jpg" },
  { id: 33, name: "Portable Mesh Nebulizer", price: 2500, category: "diagnostics", image: "mesh-nebulizer.jpg" },
  { id: 34, name: "Oxygen Concentrator (5L)", price: 45000, category: "diagnostics", image: "oxygen-concentrator.jpg" },
  { id: 35, name: "Portable Oxygen Concentrator", price: 70000, category: "diagnostics", image: "portable-oxygen.jpg" },
  { id: 36, name: "Suction Machine", price: 22000, category: "diagnostics", image: "suction-machine.jpg" },
  { id: 37, name: "Stethoscope (Dual Head)", price: 1800, category: "diagnostics", image: "stethoscope.jpg" },
  { id: 38, name: "Fetal Doppler", price: 4500, category: "diagnostics", image: "fetal-doppler.jpg" },
  { id: 39, name: "DP10 Mindray Ultrasound Machine", price: 360000, category: "diagnostics", image: "ultrasound.jpg" }, // UPDATED price from 350k to 360k, name updated
  { id: 40, name: "Hearing Aids", price: 4000, category: "diagnostics", image: "hearing-aids.jpg" },
  { id: 41, name: "Infrared Light with Stand", price: 20000, category: "diagnostics", image: "infrared-light.jpg" },
  { id: 66, name: "Pentorch (Penlight Torch)", price: 750, category: "diagnostics", image: "pentorch.jpg" }, // NEW PRODUCT

  // ========== ORTHOPEDIC SUPPORTS (15 products - added 4 new) ==========
  { id: 42, name: "Lumbar Corset (Back Support)", price: 2500, category: "orthopedic", image: "lumbar-corset.jpg" },
  { id: 43, name: "Philadelphia Cervical Collar", price: 2600, category: "orthopedic", image: "cervical-collar.jpg" },
  { id: 44, name: "Knee Brace (Hinged)", price: 3000, category: "orthopedic", image: "knee-brace.jpg" }, // UPDATED price from 3200 to 3000
  { id: 45, name: "Compression Stockings (Pair)", price: 1500, category: "orthopedic", image: "compression-stockings.jpg" },
  { id: 46, name: "Arm Sling (Adjustable)", price: 900, category: "orthopedic", image: "arm-sling.jpg" },
  { id: 67, name: "Paediatric Arm Sling", price: 1500, category: "orthopedic", image: "paediatric-arm-sling.jpg" }, // NEW PRODUCT
  { id: 47, name: "Wrist Splint", price: 1200, category: "orthopedic", image: "wrist-splint.jpg" },
  { id: 48, name: "Ankle Support Brace", price: 1300, category: "orthopedic", image: "ankle-brace.jpg" },
  { id: 49, name: "Posture Corrector", price: 2800, category: "orthopedic", image: "posture-corrector.jpg" },
  { id: 50, name: "Silicone Insoles (Pair)", price: 2800, category: "orthopedic", image: "silicone-insoles.jpg" }, // NEW PRODUCT
  { id: 51, name: "Donut Cushion", price: 4200, category: "orthopedic", image: "donut-cushion.jpg" },
  { id: 52, name: "Dilator Set", price: 4500, category: "orthopedic", image: "dilator-set.jpg" },
  { id: 68, name: "Heel Spur Fix Insoles (Pair)", price: 2200, category: "orthopedic", image: "heel-spur-insoles.jpg" }, // NEW PRODUCT
  { id: 69, name: "Heel Silicone Insoles (Pair)", price: 2000, category: "orthopedic", image: "heel-silicone-insoles.jpg" }, // NEW PRODUCT
  { id: 70, name: "Skin Traction Kit", price: 1800, category: "orthopedic", image: "skin-traction-kit.jpg" }, // NEW PRODUCT

  // ========== PATIENT CARE (15 products - added Spacer Mask) ==========
  { id: 53, name: "Double Crank Hospital Bed", price: 38000, category: "patient-care", image: "double-crank-bed.jpg" },
  { id: 54, name: "Single Crank Hospital Bed", price: 28000, category: "patient-care", image: "single-crank-bed.jpg" },
  { id: 55, name: "Ripple Mattress (Anti-Bedsore Air Mattress)", price: 7500, category: "patient-care", image: "ripple-mattress.jpg" },
  { id: 56, name: "Patient Lift Sling", price: 4200, category: "patient-care", image: "lift-sling.jpg" },
  { id: 57, name: "Bed Pan (Stainless Steel)", price: 1100, category: "patient-care", image: "bed-pan.jpg" },
  { id: 58, name: "Urine Bottle", price: 1800, category: "patient-care", image: "urine-bottle.jpg" },
  { id: 59, name: "Bed Pad", price: 2200, category: "patient-care", image: "bed-pad.jpg" },
  { id: 60, name: "Adult Diapers (Pack of 10)", price: 650, category: "patient-care", image: "adult-diapers.jpg" },
  { id: 61, name: "Underpads (Waterproof, 10pcs)", price: 850, category: "patient-care", image: "underpads.jpg" },
  { id: 62, name: "Patient Positioning Wedge", price: 3200, category: "patient-care", image: "wedge.jpg" },
  { id: 63, name: "Foot Massager", price: 2200, category: "patient-care", image: "foot-massager.jpg" },
  { id: 64, name: "Massage Gun", price: 2500, category: "patient-care", image: "massage-gun.jpg" },
  { id: 65, name: "Rehabilitation Hand Robot Glove", price: 35000, category: "patient-care", image: "hand-glove.jpg" },
  { id: 71, name: "Spacer Mask", price: 1700, category: "patient-care", image: "spacer-mask.jpg" } // NEW PRODUCT
];