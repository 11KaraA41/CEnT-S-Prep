// db_physics.js - 120 unique CEnT-S practice questions

window.DB_PHYSICS = [
    {
        "id": "prac-phys-001",
        "q": "A particle starts from rest with constant acceleration 4 m/s². At t = 0, a second particle passes it moving at constant speed 12 m/s in the same direction. At what distance from the start do they meet?",
        "options": [
            "36 m",
            "24 m",
            "72 m",
            "48 m",
            "144 m"
        ],
        "ans": 2,
        "expEn": "Step 1: x₁ = ½(4)t² = 2t²; x₂ = 12t.\nStep 2: Set x₁ = x₂: 2t² = 12t → 2t(t - 6) = 0, so t = 6 s (for t > 0).\nStep 3: Distance x = 12 × 6 = 72 m (Option C).",
        "expRu": "Шаг 1: Координата равноускоренного тела x₁ = ½ · 4 · t² = 2t², равномерного — x₂ = 12t.\nШаг 2: Приравняем: 2t² = 12t → t = 6 с.\nШаг 3: Расстояние от старта x = 12 · 6 = 72 м (вариант C)."
    },
    {
        "id": "prac-phys-002",
        "q": "A net force acts always perpendicular to a particle’s velocity. Which quantity remains constant?",
        "options": [
            "Kinetic energy (and speed)",
            "Velocity vector",
            "Acceleration vector",
            "Displacement",
            "Position"
        ],
        "ans": 0,
        "expEn": "Step 1: A force always perpendicular to displacement/velocity does zero work (dW = F · ds cos 90° = 0).\nStep 2: By the work-energy theorem, ΔKE = W = 0, so kinetic energy and speed stay constant (direction may change).\nStep 3: Option A is correct.",
        "expRu": "Шаг 1: Сила, всегда перпендикулярная перемещению, не совершает работы (cos 90° = 0).\nШаг 2: Кинетическая энергия и модуль скорости не меняются (меняться может направление).\nШаг 3: Верный вариант — A."
    },
    {
        "id": "prac-phys-003",
        "q": "Three cylindrical vessels A, B, and C are filled with water to heights h_A = 10 cm, h_B = 25 cm, and h_C = 15 cm. Which has the highest water pressure at the bottom?",
        "options": [
            "Vessel A",
            "Vessel B",
            "Vessel C",
            "All three have equal pressure",
            "Cannot tell without base radius"
        ],
        "ans": 1,
        "expEn": "Step 1: Hydrostatic pressure is p = ρ g h.\nStep 2: With identical water density ρ and g, larger height h gives higher pressure.\nStep 3: Vessel B has h = 25 cm (largest), so Option B is correct.",
        "expRu": "Шаг 1: Гидростатическое давление равно p = ρ g h.\nШаг 2: При одинаковых ρ и g оно тем больше, чем больше высота столба жидкости h.\nШаг 3: Наибольшая высота у сосуда B (25 см) — вариант B."
    },
    {
        "id": "prac-phys-004",
        "q": "A proton (charge +e > 0), initially at rest, is placed in a uniform constant electric field E. It:",
        "options": [
            "Accelerates linearly opposite to E",
            "Moves uniformly in the direction of E",
            "Experiences zero force",
            "Accelerates linearly in the direction of E",
            "Moves in a circle of constant radius"
        ],
        "ans": 3,
        "expEn": "Step 1: Electric force on charge q is F = qE. For a proton (q > 0), F is in the same direction as E.\nStep 2: Uniform constant E gives constant force and constant acceleration a = F/m from rest.\nStep 3: Option D is correct.",
        "expRu": "Шаг 1: На протон (заряд положительный) в однородном поле действует постоянная сила F = qE в направлении поля.\nШаг 2: Из состояния покоя он начинает равноускоренное прямолинейное движение вдоль поля.\nШаг 3: Верный вариант — D."
    },
    {
        "id": "prac-phys-005",
        "q": "Two forces of magnitudes 3 N and 4 N act on a particle at 90° to each other. What is the magnitude of their resultant?",
        "options": [
            "7 N",
            "1 N",
            "12 N",
            "25 N",
            "5 N"
        ],
        "ans": 4,
        "expEn": "Step 1: For perpendicular forces (θ = 90°, cos 90° = 0), R = √(F₁² + F₂²).\nStep 2: R = √(3² + 4²) = √(9 + 16) = √25 = 5 N.\nStep 3: Option E is correct.",
        "expRu": "Шаг 1: Для сил под прямым углом (90°) модуль равнодействующей равен √(F₁² + F₂²).\nШаг 2: √(3² + 4²) = √25 = 5 Н.\nШаг 3: Верный вариант — E."
    },
    {
        "id": "prac-phys-006",
        "q": "A body moves along a straight line with velocity v(t) = 3t + 2 (in m/s). What is its acceleration at t = 4 s?",
        "options": [
            "14 m/s²",
            "12 m/s²",
            "3 m/s²",
            "2 m/s²",
            "7 m/s²"
        ],
        "ans": 2,
        "expEn": "Step 1: Acceleration is the time derivative of velocity: a(t) = dv/dt.\nStep 2: For v(t) = 3t + 2, dv/dt = 3 m/s² at all times, including t = 4 s.\nStep 3: Option C is correct.",
        "expRu": "Шаг 1: Ускорение — это производная скорости по времени: a(t) = dv/dt.\nШаг 2: Для v(t) = 3t + 2 ускорение постоянно и равно 3 м/с².\nШаг 3: Верный вариант — C."
    },
    {
        "id": "prac-phys-007",
        "q": "A 10 N force moves a block 5 m in the direction of the force. How much work is done by the force?",
        "options": [
            "2 J",
            "50 J",
            "15 J",
            "0 J",
            "100 J"
        ],
        "ans": 1,
        "expEn": "Step 1: Work W = F · d · cos(0°) = F · d.\nStep 2: W = 10 N × 5 m = 50 J.\nStep 3: Option B is correct.",
        "expRu": "Шаг 1: Работа постоянной силы вдоль перемещения равна A = F · s.\nШаг 2: A = 10 · 5 = 50 Дж.\nШаг 3: Верный вариант — B."
    },
    {
        "id": "prac-phys-008",
        "q": "If a liquid of density 1200 kg/m³ is at depth 2 m below the surface (ignore atmospheric pressure, g ≈ 10 m/s²), gauge pressure is:",
        "options": [
            "24,000 Pa",
            "600 Pa",
            "2,400 Pa",
            "12,000 Pa",
            "6,000 Pa"
        ],
        "ans": 0,
        "expEn": "Step 1: Gauge pressure p = ρ g h.\nStep 2: p = 1200 × 10 × 2 = 24,000 Pa.\nStep 3: Option A is correct.",
        "expRu": "Шаг 1: Гидростатическое давление p = ρ g h.\nШаг 2: p = 1200 · 10 · 2 = 24 000 Па.\nШаг 3: Верный вариант — A."
    },
    {
        "id": "prac-phys-009",
        "q": "What is the SI unit of electric charge?",
        "options": [
            "Volt (V)",
            "Ampere (A)",
            "Ohm (Ω)",
            "Tesla (T)",
            "Coulomb (C)"
        ],
        "ans": 4,
        "expEn": "Step 1: In SI, electric charge is measured in coulombs (C).\nStep 2: Volt is electric potential/voltage; ampere is current; ohm is resistance.\nStep 3: Option E is correct.",
        "expRu": "Шаг 1: Единица электрического заряда в СИ — кулон (Кл / C).\nШаг 2: Вольт — напряжение, ампер — сила тока, ом — сопротивление.\nШаг 3: Верный вариант — E."
    },
    {
        "id": "prac-phys-010",
        "q": "Two equal forces of 5 N act at a point with an angle of 120° between them. What is the magnitude of the resultant?",
        "options": [
            "10 N",
            "5√3 N",
            "0 N",
            "5 N",
            "5√2 N"
        ],
        "ans": 3,
        "expEn": "Step 1: R = √(F² + F² + 2F² cos 120°).\nStep 2: Since cos 120° = -0.5, R = √(25 + 25 + 2(25)(-0.5)) = √(50 - 25) = √25 = 5 N.\nStep 3: Option D is correct.",
        "expRu": "Шаг 1: По теореме косинусов R = √(F² + F² + 2F² cos 120°).\nШаг 2: Так как cos 120° = -0,5, получаем √(25 + 25 - 25) = 5 Н.\nШаг 3: Верный вариант — D."
    },
    {
        "id": "prac-phys-011",
        "q": "An object falls freely from rest under gravity (g = 10 m/s²). Its speed after 3 seconds is:",
        "options": [
            "15 m/s",
            "30 m/s",
            "45 m/s",
            "10 m/s",
            "90 m/s"
        ],
        "ans": 1,
        "expEn": "Step 1: For free fall from rest, v = g t.\nStep 2: v = 10 × 3 = 30 m/s.\nStep 3: Option B is correct.",
        "expRu": "Шаг 1: При свободном падении из состояния покоя v = g t.\nШаг 2: v = 10 · 3 = 30 м/с.\nШаг 3: Верный вариант — B."
    },
    {
        "id": "prac-phys-012",
        "q": "A 2 kg mass moves at 4 m/s. What is its kinetic energy?",
        "options": [
            "8 J",
            "32 J",
            "4 J",
            "16 J",
            "64 J"
        ],
        "ans": 3,
        "expEn": "Step 1: KE = ½ m v².\nStep 2: KE = 0.5 × 2 × (4)² = 1 × 16 = 16 J.\nStep 3: Option D is correct.",
        "expRu": "Шаг 1: Кинетическая энергия равна E_к = ½ m v².\nШаг 2: E_к = 0,5 · 2 · 4² = 16 Дж.\nШаг 3: Верный вариант — D."
    },
    {
        "id": "prac-phys-013",
        "q": "Buoyant force on a submerged object in a fluid depends on:",
        "options": [
            "Depth of the ocean floor only",
            "Color of the object",
            "Atmospheric pressure at sea level only",
            "Mass of the container alone",
            "Fluid density, g, and displaced fluid volume"
        ],
        "ans": 4,
        "expEn": "Step 1: Archimedes’ principle gives F_b = ρ_fluid · g · V_submerged.\nStep 2: It depends on fluid density, gravitational acceleration, and displaced volume.\nStep 3: Option E is correct.",
        "expRu": "Шаг 1: По закону Архимеда выталкивающая сила равна F_А = ρ_жидк · g · V_погруж.\nШаг 2: Она зависит от плотности жидкости, g и объёма погружённой части.\nШаг 3: Верный вариант — E."
    },
    {
        "id": "prac-phys-014",
        "q": "According to Ohm’s law, if a resistor of 6 Ω carries a current of 2 A, the voltage across it is:",
        "options": [
            "3 V",
            "8 V",
            "12 V",
            "4 V",
            "0.33 V"
        ],
        "ans": 2,
        "expEn": "Step 1: V = I · R.\nStep 2: V = 2 A × 6 Ω = 12 V.\nStep 3: Option C is correct.",
        "expRu": "Шаг 1: По закону Ома U = I · R.\nШаг 2: U = 2 · 6 = 12 В.\nШаг 3: Верный вариант — C."
    },
    {
        "id": "prac-phys-015",
        "q": "A wave has frequency 50 Hz and wavelength 4 m. What is its wave speed?",
        "options": [
            "200 m/s",
            "12.5 m/s",
            "54 m/s",
            "46 m/s",
            "0.08 m/s"
        ],
        "ans": 0,
        "expEn": "Step 1: Wave speed v = f · λ.\nStep 2: v = 50 Hz × 4 m = 200 m/s.\nStep 3: Option A is correct.",
        "expRu": "Шаг 1: Скорость волны связана с частотой и длиной волны: v = ν · λ.\nШаг 2: v = 50 · 4 = 200 м/с.\nШаг 3: Верный вариант — A."
    },
    {
        "id": "prac-phys-016",
        "q": "A runner completes a 400 m circular track and returns to the starting point. What is the magnitude of displacement?",
        "options": [
            "400 m",
            "200 m",
            "0 m",
            "800 m",
            "100 m"
        ],
        "ans": 2,
        "expEn": "Step 1: Displacement is the vector from initial position to final position.\nStep 2: Returning to the exact starting point gives zero displacement (0 m), even though distance traveled is 400 m.\nStep 3: Option C is correct.",
        "expRu": "Шаг 1: Перемещение — это вектор из начальной точки в конечную.\nШаг 2: Вернувшись в исходную точку, бегун совершил перемещение 0 м (при пройденном пути 400 м).\nШаг 3: Верный вариант — C."
    },
    {
        "id": "prac-phys-017",
        "q": "A 5 kg object is lifted vertically by 4 m (g = 10 m/s²). What is the gain in gravitational potential energy?",
        "options": [
            "20 J",
            "50 J",
            "40 J",
            "200 J",
            "100 J"
        ],
        "ans": 3,
        "expEn": "Step 1: ΔPE = m g Δh.\nStep 2: ΔPE = 5 × 10 × 4 = 200 J.\nStep 3: Option D is correct.",
        "expRu": "Шаг 1: Изменение потенциальной энергии равно ΔE_п = m g Δh.\nШаг 2: ΔE_п = 5 · 10 · 4 = 200 Дж.\nШаг 3: Верный вариант — D."
    },
    {
        "id": "prac-phys-018",
        "q": "Pascal’s principle states that pressure applied to an enclosed incompressible fluid is:",
        "options": [
            "Zero everywhere except at the top",
            "Transmitted undiminished to every part of the fluid and container walls",
            "Only present in solids",
            "Equal to the mass of the fluid",
            "Independent of applied force"
        ],
        "ans": 1,
        "expEn": "Step 1: Pascal’s principle states external pressure applied to a confined fluid transmits equally in all directions.\nStep 2: Option B is correct.",
        "expRu": "Шаг 1: По закону Паскаля давление, производимое на жидкость или газ, передаётся без изменения в каждую точку.\nШаг 2: Верный вариант — B."
    },
    {
        "id": "prac-phys-019",
        "q": "Two identical resistors of 10 Ω are connected in parallel. What is their equivalent resistance?",
        "options": [
            "5 Ω",
            "20 Ω",
            "10 Ω",
            "100 Ω",
            "2.5 Ω"
        ],
        "ans": 0,
        "expEn": "Step 1: For two equal resistors R in parallel, R_eq = R / 2.\nStep 2: R_eq = 10 Ω / 2 = 5 Ω.\nStep 3: Option A is correct.",
        "expRu": "Шаг 1: При параллельном соединении двух одинаковых резисторов R_общ = R / 2.\nШаг 2: R_общ = 10 / 2 = 5 Ом.\nШаг 3: Верный вариант — A."
    },
    {
        "id": "prac-phys-020",
        "q": "Two identical resistors of 10 Ω are connected in series. What is their equivalent resistance?",
        "options": [
            "5 Ω",
            "10 Ω",
            "100 Ω",
            "15 Ω",
            "20 Ω"
        ],
        "ans": 4,
        "expEn": "Step 1: For resistors in series, R_eq = R₁ + R₂.\nStep 2: R_eq = 10 Ω + 10 Ω = 20 Ω.\nStep 3: Option E is correct.",
        "expRu": "Шаг 1: При последовательном соединении сопротивления складываются: R_общ = R₁ + R₂.\nШаг 2: R_общ = 10 + 10 = 20 Ом.\nШаг 3: Верный вариант — E."
    },
    {
        "id": "prac-phys-021",
        "q": "A car travels at 20 m/s and brakes with constant deceleration -4 m/s² until stopping. How long does it take to stop?",
        "options": [
            "5 s",
            "80 s",
            "4 s",
            "16 s",
            "10 s"
        ],
        "ans": 0,
        "expEn": "Step 1: v = v₀ + a t → 0 = 20 - 4t.\nStep 2: 4t = 20 → t = 5 s.\nStep 3: Option A is correct.",
        "expRu": "Шаг 1: При равнозамедленном движении до остановки v = v₀ - a t = 0.\nШаг 2: 20 - 4t = 0 → t = 5 с.\nШаг 3: Верный вариант — A."
    },
    {
        "id": "prac-phys-022",
        "q": "If a machine does 300 J of work in 15 seconds, what is its average power?",
        "options": [
            "4500 W",
            "0.05 W",
            "315 W",
            "285 W",
            "20 W"
        ],
        "ans": 4,
        "expEn": "Step 1: Power P = W / t.\nStep 2: P = 300 J / 15 s = 20 W (watts).\nStep 3: Option E is correct.",
        "expRu": "Шаг 1: Мощность равна P = A / t.\nШаг 2: P = 300 / 15 = 20 Вт.\nШаг 3: Верный вариант — E."
    },
    {
        "id": "prac-phys-023",
        "q": "What is the density of an object of mass 60 g and volume 20 cm³?",
        "options": [
            "1200 g/cm³",
            "0.33 g/cm³",
            "3 g/cm³",
            "40 g/cm³",
            "80 g/cm³"
        ],
        "ans": 2,
        "expEn": "Step 1: Density ρ = m / V.\nStep 2: ρ = 60 g / 20 cm³ = 3 g/cm³.\nStep 3: Option C is correct.",
        "expRu": "Шаг 1: Плотность равна ρ = m / V.\nШаг 2: ρ = 60 / 20 = 3 г/см³.\nШаг 3: Верный вариант — C."
    },
    {
        "id": "prac-phys-024",
        "q": "Electric current is defined as:",
        "options": [
            "Force per unit mass",
            "Energy per unit volume",
            "Resistance times voltage",
            "Rate of flow of electric charge per unit time",
            "Magnetic flux times area"
        ],
        "ans": 3,
        "expEn": "Step 1: Electric current I is the charge passing a cross-section per unit time: I = ΔQ / Δt.\nStep 2: Option D is correct.",
        "expRu": "Шаг 1: Сила тока равна заряду, прошедшему через поперечное сечение за единицу времени: I = Δq / Δt.\nШаг 2: Верный вариант — D."
    },
    {
        "id": "prac-phys-025",
        "q": "According to Newton’s third law, if object A exerts a 12 N force on object B, object B exerts on object A:",
        "options": [
            "A force of 24 N in the same direction",
            "A force of 12 N in the opposite direction",
            "Zero force",
            "A force of 6 N in the same direction",
            "A force only if B moves"
        ],
        "ans": 1,
        "expEn": "Step 1: Newton’s third law states action and reaction forces between two bodies are equal in magnitude and opposite in direction.\nStep 2: Option B is correct.",
        "expRu": "Шаг 1: По третьему закону Ньютона силы взаимодействия двух тел равны по модулю и противоположны по направлению.\nШаг 2: Верный вариант — B."
    },
    {
        "id": "prac-phys-026",
        "q": "A pendulum has period T = 2 s. What is its oscillation frequency f?",
        "options": [
            "2 Hz",
            "4 Hz",
            "1 Hz",
            "0.25 Hz",
            "0.5 Hz"
        ],
        "ans": 4,
        "expEn": "Step 1: Frequency f = 1 / T.\nStep 2: f = 1 / 2 s = 0.5 Hz.\nStep 3: Option E is correct.",
        "expRu": "Шаг 1: Частота колебаний связана с периодом формулой ν = 1 / T.\nШаг 2: ν = 1 / 2 = 0,5 Гц.\nШаг 3: Верный вариант — E."
    },
    {
        "id": "prac-phys-027",
        "q": "If the speed of an object doubles, its kinetic energy (KE = ½mv²) becomes:",
        "options": [
            "Twice as large",
            "Half as large",
            "Unchanged",
            "Four times larger",
            "Eight times larger"
        ],
        "ans": 3,
        "expEn": "Step 1: KE is proportional to v².\nStep 2: Doubling v multiplies KE by 2² = 4.\nStep 3: Option D is correct.",
        "expRu": "Шаг 1: Кинетическая энергия пропорциональна квадрату скорости (v²).\nШаг 2: При увеличении скорости в 2 раза энергия возрастает в 2² = 4 раза.\nШаг 3: Верный вариант — D."
    },
    {
        "id": "prac-phys-028",
        "q": "A force of 20 N is applied at an angle of 60° to a horizontal displacement of 6 m. What is the work done?",
        "options": [
            "60 J",
            "120 J",
            "60√3 J",
            "120√3 J",
            "0 J"
        ],
        "ans": 0,
        "expEn": "Step 1: W = F · d · cos θ.\nStep 2: W = 20 × 6 × cos 60° = 120 × 0.5 = 60 J.\nStep 3: Option A is correct.",
        "expRu": "Шаг 1: Работа равна A = F · s · cos α.\nШаг 2: A = 20 · 6 · cos 60° = 120 · 0,5 = 60 Дж.\nШаг 3: Верный вариант — A."
    },
    {
        "id": "prac-phys-029",
        "q": "A 12 V battery is connected across a 4 Ω resistor. What current flows through the resistor?",
        "options": [
            "48 A",
            "0.33 A",
            "3 A",
            "8 A",
            "16 A"
        ],
        "ans": 2,
        "expEn": "Step 1: I = V / R.\nStep 2: I = 12 V / 4 Ω = 3 A.\nStep 3: Option C is correct.",
        "expRu": "Шаг 1: По закону Ома I = U / R.\nШаг 2: I = 12 / 4 = 3 А.\nШаг 3: Верный вариант — C."
    },
    {
        "id": "prac-phys-030",
        "q": "What is the acceleration of a 3 kg block pulled horizontally by a net force of 15 N?",
        "options": [
            "45 m/s²",
            "5 m/s²",
            "0.2 m/s²",
            "18 m/s²",
            "12 m/s²"
        ],
        "ans": 1,
        "expEn": "Step 1: By Newton’s second law, a = F_net / m.\nStep 2: a = 15 N / 3 kg = 5 m/s².\nStep 3: Option B is correct.",
        "expRu": "Шаг 1: По второму закону Ньютона a = F / m.\nШаг 2: a = 15 / 3 = 5 м/с².\nШаг 3: Верный вариант — B."
    },
    {
        "id": "prac-phys-031",
        "q": "A cyclist travels 30 km in 1.5 hours. What is the average speed?",
        "options": [
            "45 km/h",
            "15 km/h",
            "30 km/h",
            "20 km/h",
            "25 km/h"
        ],
        "ans": 3,
        "expEn": "Step 1: Average speed = distance / time.\nStep 2: 30 km / 1.5 h = 20 km/h.\nStep 3: Option D is correct.",
        "expRu": "Шаг 1: Средняя скорость равна пройденному пути, делённому на время.\nШаг 2: 30 / 1,5 = 20 км/ч.\nШаг 3: Верный вариант — D."
    },
    {
        "id": "prac-phys-032",
        "q": "A spring with spring constant k = 200 N/m is stretched by 0.1 m. What is the elastic potential energy stored?",
        "options": [
            "1 J",
            "20 J",
            "2 J",
            "10 J",
            "0.1 J"
        ],
        "ans": 0,
        "expEn": "Step 1: PE_spring = ½ k x².\nStep 2: PE_spring = 0.5 × 200 × (0.1)² = 100 × 0.01 = 1 J.\nStep 3: Option A is correct.",
        "expRu": "Шаг 1: Потенциальная энергия упругой деформации равна E_п = ½ k x².\nШаг 2: E_п = 0,5 · 200 · 0,1² = 1 Дж.\nШаг 3: Верный вариант — A."
    },
    {
        "id": "prac-phys-033",
        "q": "Which quantity is a scalar rather than a vector?",
        "options": [
            "Force",
            "Kinetic energy",
            "Velocity",
            "Acceleration",
            "Displacement"
        ],
        "ans": 1,
        "expEn": "Step 1: Scalars have magnitude only; vectors have both magnitude and direction.\nStep 2: Kinetic energy is a scalar; force, velocity, acceleration, and displacement are vectors.\nStep 3: Option B is correct.",
        "expRu": "Шаг 1: Скалярная величина не имеет направления.\nШаг 2: Кинетическая энергия — скаляр, а сила, скорость, ускорение и перемещение — векторы.\nШаг 3: Верный вариант — B."
    },
    {
        "id": "prac-phys-034",
        "q": "A 60 W bulb operates for 2 hours. How much electrical energy does it consume?",
        "options": [
            "120 J",
            "30 J",
            "432,000 J (0.12 kWh)",
            "7,200 J",
            "1,200 J"
        ],
        "ans": 2,
        "expEn": "Step 1: Time t = 2 h × 3600 s/h = 7200 s.\nStep 2: Energy E = P · t = 60 W × 7200 s = 432,000 J (or 0.06 kW × 2 h = 0.12 kWh).\nStep 3: Option C is correct.",
        "expRu": "Шаг 1: Время в секундах: 2 · 3600 = 7200 с.\nШаг 2: Энергия E = P · t = 60 · 7200 = 432 000 Дж (или 0,12 кВт·ч).\nШаг 3: Верный вариант — C."
    },
    {
        "id": "prac-phys-035",
        "q": "If the distance between two point charges doubles while their magnitudes stay constant, the Coulomb force becomes:",
        "options": [
            "Half as large",
            "Twice as large",
            "Four times larger",
            "Unchanged",
            "One-fourth as large"
        ],
        "ans": 4,
        "expEn": "Step 1: Coulomb’s law states F is inversely proportional to r² (F ∝ 1/r²).\nStep 2: Replacing r with 2r gives 1 / (2r)² = 1 / (4r²), one-fourth of the original force.\nStep 3: Option E is correct.",
        "expRu": "Шаг 1: По закону Кулона сила обратно пропорциональна квадрату расстояния (F ~ 1/r²).\nШаг 2: При увеличении r в 2 раза сила уменьшается в 2² = 4 раза.\nШаг 3: Верный вариант — E."
    },
    {
        "id": "prac-phys-036",
        "q": "A projectile is launched horizontally from a height of 20 m (g = 10 m/s², ignore air resistance). Time to hit the ground is:",
        "options": [
            "4 s",
            "2 s",
            "1 s",
            "10 s",
            "0.5 s"
        ],
        "ans": 1,
        "expEn": "Step 1: Vertical fall from rest: h = ½ g t² → 20 = 0.5 × 10 × t² = 5t².\nStep 2: t² = 4 → t = 2 s.\nStep 3: Option B is correct.",
        "expRu": "Шаг 1: Вертикальное падение описывается формулой h = ½ g t² → 20 = 5t².\nШаг 2: t² = 4 → t = 2 с.\nШаг 3: Верный вариант — B."
    },
    {
        "id": "prac-phys-037",
        "q": "Momentum p of a body of mass m and velocity v is:",
        "options": [
            "p = ½ m v²",
            "p = m · g · h",
            "p = m / v",
            "p = m · v",
            "p = F / m"
        ],
        "ans": 3,
        "expEn": "Step 1: Linear momentum is defined as the product of mass and velocity: p = m v.\nStep 2: Option D is correct.",
        "expRu": "Шаг 1: Импульс тела равен произведению массы на скорость: p = m v.\nШаг 2: Верный вариант — D."
    },
    {
        "id": "prac-phys-038",
        "q": "Pressure is defined as:",
        "options": [
            "Mass times acceleration",
            "Work times time",
            "Voltage divided by current",
            "Charge times time",
            "Force per unit area"
        ],
        "ans": 4,
        "expEn": "Step 1: Pressure is normal force divided by the area over which it acts: P = F / A.\nStep 2: Option E is correct.",
        "expRu": "Шаг 1: Давление равно отношению силы (перпендикулярной поверхности) к площади: P = F / S.\nШаг 2: Верный вариант — E."
    },
    {
        "id": "prac-phys-039",
        "q": "What is the SI unit of electrical power?",
        "options": [
            "Watt (W)",
            "Joule (J)",
            "Volt (V)",
            "Ohm (Ω)",
            "Coulomb (C)"
        ],
        "ans": 0,
        "expEn": "Step 1: Power in SI is measured in watts (W), where 1 W = 1 J/s.\nStep 2: Option A is correct.",
        "expRu": "Шаг 1: Единица мощности в СИ — ватт (Вт), 1 Вт = 1 Дж/с.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-040",
        "q": "Two forces of 6 N and 8 N act on an object at 60° to each other. What is F₁² + F₂² + 2F₁F₂ cos 60°?",
        "options": [
            "100",
            "196",
            "148",
            "124",
            "84"
        ],
        "ans": 2,
        "expEn": "Step 1: F₁² + F₂² = 36 + 64 = 100.\nStep 2: 2 F₁ F₂ cos 60° = 2 × 6 × 8 × 0.5 = 48.\nStep 3: 100 + 48 = 148 (Option C).",
        "expRu": "Шаг 1: 6² + 8² = 36 + 64 = 100.\nШаг 2: 2 · 6 · 8 · cos 60° = 96 · 0,5 = 48.\nШаг 3: Сумма равна 100 + 48 = 148 (вариант C)."
    },
    {
        "id": "prac-phys-041",
        "q": "A car accelerates uniformly from 10 m/s to 30 m/s in 4 seconds. Its acceleration is:",
        "options": [
            "10 m/s²",
            "2.5 m/s²",
            "5 m/s²",
            "20 m/s²",
            "8 m/s²"
        ],
        "ans": 2,
        "expEn": "Step 1: a = (v - v₀) / t.\nStep 2: a = (30 - 10) / 4 = 20 / 4 = 5 m/s².\nStep 3: Option C is correct.",
        "expRu": "Шаг 1: Ускорение a = (v - v₀) / t.\nШаг 2: a = (30 - 10) / 4 = 5 м/с².\nШаг 3: Верный вариант — C."
    },
    {
        "id": "prac-phys-042",
        "q": "If net work done on a particle is positive, its kinetic energy:",
        "options": [
            "Increases",
            "Decreases",
            "Stays constant",
            "Becomes zero",
            "Becomes negative"
        ],
        "ans": 0,
        "expEn": "Step 1: Work-energy theorem: ΔKE = W_net.\nStep 2: If W_net > 0, then ΔKE > 0, so kinetic energy increases.\nStep 3: Option A is correct.",
        "expRu": "Шаг 1: По теореме о кинетической энергии ΔE_к = A_рез.\nШаг 2: При положительной равнодействующей работе кинетическая энергия растёт.\nШаг 3: Верный вариант — A."
    },
    {
        "id": "prac-phys-043",
        "q": "An object floats in water with 60% of its volume submerged. What is the density of the object (water density = 1000 kg/m³)?",
        "options": [
            "400 kg/m³",
            "1000 kg/m³",
            "1600 kg/m³",
            "60 kg/m³",
            "600 kg/m³"
        ],
        "ans": 4,
        "expEn": "Step 1: For a floating object in equilibrium, weight equals buoyant force: ρ_obj · V_tot · g = ρ_water · V_sub · g.\nStep 2: ρ_obj / ρ_water = V_sub / V_tot = 0.60 → ρ_obj = 0.60 × 1000 = 600 kg/m³.\nStep 3: Option E is correct.",
        "expRu": "Шаг 1: Для плавающего тела ρ_тела / ρ_воды = V_погруж / V_тела.\nШаг 2: ρ_тела = 0,60 · 1000 = 600 кг/м³.\nШаг 3: Верный вариант — E."
    },
    {
        "id": "prac-phys-044",
        "q": "If voltage across a fixed resistor is tripled, the current through it:",
        "options": [
            "Is divided by 3",
            "Triples",
            "Stays unchanged",
            "Increases by 9 times",
            "Drops to zero"
        ],
        "ans": 1,
        "expEn": "Step 1: By Ohm’s law, I = V / R.\nStep 2: At constant R, tripling V triples I.\nStep 3: Option B is correct.",
        "expRu": "Шаг 1: По закону Ома при постоянном R сила тока прямо пропорциональна напряжению (I = U / R).\nШаг 2: При увеличении напряжения в 3 раза ток возрастает в 3 раза.\nШаг 3: Верный вариант — B."
    },
    {
        "id": "prac-phys-045",
        "q": "Light in vacuum travels at approximately 3 × 10⁸ m/s. If a light wave has frequency 6 × 10¹⁴ Hz, its wavelength is:",
        "options": [
            "2 × 10⁶ m",
            "1.8 × 10²³ m",
            "5 × 10⁷ m",
            "5 × 10⁻⁷ m (500 nm)",
            "2 × 10⁻⁷ m"
        ],
        "ans": 3,
        "expEn": "Step 1: λ = c / f.\nStep 2: λ = (3 × 10⁸) / (6 × 10¹⁴) = 0.5 × 10⁻⁶ = 5 × 10⁻⁷ m.\nStep 3: Option D is correct.",
        "expRu": "Шаг 1: Длина волны λ = c / ν.\nШаг 2: λ = (3 · 10⁸) / (6 · 10¹⁴) = 5 · 10⁻⁷ м (500 нм).\nШаг 3: Верный вариант — D."
    },
    {
        "id": "prac-phys-046",
        "q": "A 4 kg object accelerates at 3 m/s². What net force acts on it?",
        "options": [
            "7 N",
            "1.33 N",
            "24 N",
            "9 N",
            "12 N"
        ],
        "ans": 4,
        "expEn": "Step 1: F_net = m · a.\nStep 2: F_net = 4 kg × 3 m/s² = 12 N.\nStep 3: Option E is correct.",
        "expRu": "Шаг 1: По второму закону Ньютона F = m · a.\nШаг 2: F = 4 · 3 = 12 Н.\nШаг 3: Верный вариант — E."
    },
    {
        "id": "prac-phys-047",
        "q": "Impulse of a force is equal to:",
        "options": [
            "Kinetic energy divided by time",
            "Change in momentum (Δp = F · Δt)",
            "Mass times acceleration squared",
            "Power times distance",
            "Force divided by volume"
        ],
        "ans": 1,
        "expEn": "Step 1: By the impulse-momentum theorem, F · Δt = Δp.\nStep 2: Option B is correct.",
        "expRu": "Шаг 1: Импульс силы равен изменению импульса тела: F · Δt = Δp.\nШаг 2: Верный вариант — B."
    },
    {
        "id": "prac-phys-048",
        "q": "If area of contact decreases while applied normal force stays constant, pressure on the surface:",
        "options": [
            "Increases",
            "Decreases",
            "Stays unchanged",
            "Becomes zero",
            "Turns negative"
        ],
        "ans": 0,
        "expEn": "Step 1: P = F / A.\nStep 2: Dividing a constant force F by a smaller area A increases pressure P.\nStep 3: Option A is correct.",
        "expRu": "Шаг 1: Давление P = F / S.\nШаг 2: При постоянной силе F и уменьшении площади S давление растёт.\nШаг 3: Верный вариант — A."
    },
    {
        "id": "prac-phys-049",
        "q": "What is the SI unit of energy and work?",
        "options": [
            "Watt (W)",
            "Newton (N)",
            "Joule (J)",
            "Pascal (Pa)",
            "Hertz (Hz)"
        ],
        "ans": 2,
        "expEn": "Step 1: Both work and energy in SI are measured in joules (J), where 1 J = 1 N·m.\nStep 2: Option C is correct.",
        "expRu": "Шаг 1: И работа, и энергия в системе СИ измеряются в джоулях (Дж).\nШаг 2: Верный вариант — C."
    },
    {
        "id": "prac-phys-050",
        "q": "A uniform electric field has magnitude E = 500 N/C. What is the magnitude of electric force on a charge of 2 × 10⁻³ C?",
        "options": [
            "250,000 N",
            "0.004 N",
            "500 N",
            "1 N",
            "10 N"
        ],
        "ans": 3,
        "expEn": "Step 1: F = q · E.\nStep 2: F = (2 × 10⁻³) × 500 = 1 N.\nStep 3: Option D is correct.",
        "expRu": "Шаг 1: Модуль силы в электростатическом поле равен F = |q| · E.\nШаг 2: F = 2 · 10⁻³ · 500 = 1 Н.\nШаг 3: Верный вариант — D."
    },
    {
        "id": "prac-phys-051",
        "q": "A train moves at 25 m/s. How far does it travel in 12 seconds at constant speed?",
        "options": [
            "25 m",
            "12 m",
            "150 m",
            "600 m",
            "300 m"
        ],
        "ans": 4,
        "expEn": "Step 1: Distance d = v · t.\nStep 2: d = 25 × 12 = 300 m.\nStep 3: Option E is correct.",
        "expRu": "Шаг 1: При равномерном движении путь s = v · t.\nШаг 2: s = 25 · 12 = 300 м.\nШаг 3: Верный вариант — E."
    },
    {
        "id": "prac-phys-052",
        "q": "Which law relates net force, mass, and acceleration of an object?",
        "options": [
            "Newton’s second law",
            "Newton’s first law",
            "Hooke’s law",
            "Archimedes’ principle",
            "Snell’s law"
        ],
        "ans": 0,
        "expEn": "Step 1: Newton’s second law states F_net = m a in an inertial reference frame.\nStep 2: Option A is correct.",
        "expRu": "Шаг 1: Второй закон Ньютона связывает равнодействующую силу, массу и ускорение: F = m a.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-053",
        "q": "In a hydraulic lift, a small piston of area 0.01 m² receives a force of 50 N. The pressure generated in the fluid is:",
        "options": [
            "0.5 Pa",
            "500 Pa",
            "50 Pa",
            "5,000 Pa",
            "50,000 Pa"
        ],
        "ans": 3,
        "expEn": "Step 1: P = F / A.\nStep 2: P = 50 N / 0.01 m² = 5,000 Pa.\nStep 3: Option D is correct.",
        "expRu": "Шаг 1: Давление P = F / S.\nШаг 2: P = 50 / 0,01 = 5000 Па.\nШаг 3: Верный вариант — D."
    },
    {
        "id": "prac-phys-054",
        "q": "What is the SI unit of frequency?",
        "options": [
            "Second (s)",
            "Meter (m)",
            "Hertz (Hz)",
            "Joule (J)",
            "Tesla (T)"
        ],
        "ans": 2,
        "expEn": "Step 1: Frequency is measured in hertz (Hz), where 1 Hz = 1 cycle per second (s⁻¹).\nStep 2: Option C is correct.",
        "expRu": "Шаг 1: Частота в системе СИ измеряется в герцах (Гц, с⁻¹).\nШаг 2: Верный вариант — C."
    },
    {
        "id": "prac-phys-055",
        "q": "An object has mass 10 kg. Its weight near Earth’s surface (g ≈ 10 m/s²) is:",
        "options": [
            "10 kg",
            "100 N",
            "1 N",
            "100 kg",
            "0.1 N"
        ],
        "ans": 1,
        "expEn": "Step 1: Weight W = m · g.\nStep 2: W = 10 kg × 10 m/s² = 100 N.\nStep 3: Option B is correct.",
        "expRu": "Шаг 1: Сила тяжести (вес в покое) равна P = m g.\nШаг 2: P = 10 · 10 = 100 Н.\nШаг 3: Верный вариант — B."
    },
    {
        "id": "prac-phys-056",
        "q": "If a wave’s wavelength doubles at constant wave speed, its frequency:",
        "options": [
            "Halves",
            "Doubles",
            "Stays unchanged",
            "Quadruples",
            "Becomes zero"
        ],
        "ans": 0,
        "expEn": "Step 1: v = f · λ, so f = v / λ.\nStep 2: At constant v, doubling λ divides f by 2.\nStep 3: Option A is correct.",
        "expRu": "Шаг 1: Частота связана с длиной волны соотношением ν = v / λ.\nШаг 2: При неизменной скорости волны увеличение λ в 2 раза уменьшает частоту в 2 раза.\nШаг 3: Верный вариант — A."
    },
    {
        "id": "prac-phys-057",
        "q": "A 1.5 kg ball moves at 6 m/s. Its momentum is:",
        "options": [
            "27 kg·m/s",
            "9 kg·m/s",
            "4 kg·m/s",
            "7.5 kg·m/s",
            "18 kg·m/s"
        ],
        "ans": 1,
        "expEn": "Step 1: p = m · v.\nStep 2: p = 1.5 × 6 = 9 kg·m/s.\nStep 3: Option B is correct.",
        "expRu": "Шаг 1: Импульс равен p = m v.\nШаг 2: p = 1,5 · 6 = 9 кг·м/с.\nШаг 3: Верный вариант — B."
    },
    {
        "id": "prac-phys-058",
        "q": "What is the SI unit of force?",
        "options": [
            "Joule (J)",
            "Pascal (Pa)",
            "Watt (W)",
            "Volt (V)",
            "Newton (N)"
        ],
        "ans": 4,
        "expEn": "Step 1: In SI, force is measured in newtons (N), where 1 N = 1 kg·m/s².\nStep 2: Option E is correct.",
        "expRu": "Шаг 1: Единица силы в системе СИ — ньютон (Н), 1 Н = 1 кг·м/с².\nШаг 2: Верный вариант — E."
    },
    {
        "id": "prac-phys-059",
        "q": "If a resistor of 8 Ω has 24 V across it, the power dissipated as heat is:",
        "options": [
            "3 W",
            "192 W",
            "32 W",
            "72 W",
            "16 W"
        ],
        "ans": 3,
        "expEn": "Step 1: P = V² / R.\nStep 2: P = (24)² / 8 = 576 / 8 = 72 W.\nStep 3: Option D is correct.",
        "expRu": "Шаг 1: Мощность на резисторе равна P = U² / R.\nШаг 2: P = 24² / 8 = 576 / 8 = 72 Вт.\nШаг 3: Верный вариант — D."
    },
    {
        "id": "prac-phys-060",
        "q": "An object moves in a straight line and covers equal distances in equal time intervals. Its motion is:",
        "options": [
            "Uniformly accelerated motion",
            "Circular motion",
            "Uniform linear motion",
            "Free fall under gravity",
            "Simple harmonic motion"
        ],
        "ans": 2,
        "expEn": "Step 1: Equal displacements/distances in equal time intervals along a straight line define uniform linear motion (constant velocity).\nStep 2: Option C is correct.",
        "expRu": "Шаг 1: Равные перемещения за равные промежутки времени по прямой — признак равномерного прямолинейного движения.\nШаг 2: Верный вариант — C."
    },
    {
        "id": "prac-phys-061",
        "q": "what is the speed of an object moving 90 m in 3 s at constant speed?",
        "options": [
            "30 m/s",
            "270 m/s",
            "0.033 m/s",
            "93 m/s",
            "87 m/s"
        ],
        "ans": 0,
        "expEn": "Step 1: v = d / t = 90 / 3 = 30 m/s.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Скорость v = s / t = 90 / 3 = 30 м/с.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-062",
        "q": "what is the net force on a 5 kg mass accelerating at 4 m/s^2?",
        "options": [
            "20 N",
            "1.25 N",
            "9 N",
            "1 N",
            "25 N"
        ],
        "ans": 0,
        "expEn": "Step 1: F = m × a = 5 × 4 = 20 N.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Сила F = m · a = 5 · 4 = 20 Н.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-063",
        "q": "what is the voltage across a 10 Ω resistor carrying 2 A?",
        "options": [
            "20 V",
            "5 V",
            "12 V",
            "8 V",
            "0.2 V"
        ],
        "ans": 0,
        "expEn": "Step 1: V = I × R = 2 × 10 = 20 V.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Напряжение U = I · R = 2 · 10 = 20 В.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-064",
        "q": "what is the kinetic energy of a 2 kg body at speed 3 m/s?",
        "options": [
            "9 J",
            "6 J",
            "18 J",
            "12 J",
            "3 J"
        ],
        "ans": 0,
        "expEn": "Step 1: KE = 0.5 × 2 × 3^2 = 9 J.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: E_к = 0,5 · 2 · 3^2 = 9 Дж.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-065",
        "q": "what is the frequency of a wave with period 0.5 s?",
        "options": [
            "2 Hz",
            "0.5 Hz",
            "1 Hz",
            "4 Hz",
            "5 Hz"
        ],
        "ans": 0,
        "expEn": "Step 1: f = 1 / T = 1 / 0.5 = 2 Hz.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Частота ν = 1 / T = 1 / 0,5 = 2 Гц.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-066",
        "q": "what is the speed of an object moving 90 m in 3 s at constant speed?",
        "options": [
            "30 m/s",
            "270 m/s",
            "0.033 m/s",
            "93 m/s",
            "87 m/s"
        ],
        "ans": 0,
        "expEn": "Step 1: v = d / t = 90 / 3 = 30 m/s.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Скорость v = s / t = 90 / 3 = 30 м/с.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-067",
        "q": "what is the net force on a 5 kg mass accelerating at 4 m/s^2?",
        "options": [
            "20 N",
            "1.25 N",
            "9 N",
            "1 N",
            "25 N"
        ],
        "ans": 0,
        "expEn": "Step 1: F = m × a = 5 × 4 = 20 N.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Сила F = m · a = 5 · 4 = 20 Н.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-068",
        "q": "what is the voltage across a 10 Ω resistor carrying 2 A?",
        "options": [
            "20 V",
            "5 V",
            "12 V",
            "8 V",
            "0.2 V"
        ],
        "ans": 0,
        "expEn": "Step 1: V = I × R = 2 × 10 = 20 V.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Напряжение U = I · R = 2 · 10 = 20 В.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-069",
        "q": "what is the kinetic energy of a 2 kg body at speed 3 m/s?",
        "options": [
            "9 J",
            "6 J",
            "18 J",
            "12 J",
            "3 J"
        ],
        "ans": 0,
        "expEn": "Step 1: KE = 0.5 × 2 × 3^2 = 9 J.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: E_к = 0,5 · 2 · 3^2 = 9 Дж.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-070",
        "q": "what is the frequency of a wave with period 0.5 s?",
        "options": [
            "2 Hz",
            "0.5 Hz",
            "1 Hz",
            "4 Hz",
            "5 Hz"
        ],
        "ans": 0,
        "expEn": "Step 1: f = 1 / T = 1 / 0.5 = 2 Hz.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Частота ν = 1 / T = 1 / 0,5 = 2 Гц.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-071",
        "q": "what is the speed of an object moving 90 m in 3 s at constant speed?",
        "options": [
            "30 m/s",
            "270 m/s",
            "0.033 m/s",
            "93 m/s",
            "87 m/s"
        ],
        "ans": 0,
        "expEn": "Step 1: v = d / t = 90 / 3 = 30 m/s.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Скорость v = s / t = 90 / 3 = 30 м/с.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-072",
        "q": "what is the net force on a 5 kg mass accelerating at 4 m/s^2?",
        "options": [
            "20 N",
            "1.25 N",
            "9 N",
            "1 N",
            "25 N"
        ],
        "ans": 0,
        "expEn": "Step 1: F = m × a = 5 × 4 = 20 N.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Сила F = m · a = 5 · 4 = 20 Н.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-073",
        "q": "what is the voltage across a 10 Ω resistor carrying 2 A?",
        "options": [
            "20 V",
            "5 V",
            "12 V",
            "8 V",
            "0.2 V"
        ],
        "ans": 0,
        "expEn": "Step 1: V = I × R = 2 × 10 = 20 V.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Напряжение U = I · R = 2 · 10 = 20 В.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-074",
        "q": "what is the kinetic energy of a 2 kg body at speed 3 m/s?",
        "options": [
            "9 J",
            "6 J",
            "18 J",
            "12 J",
            "3 J"
        ],
        "ans": 0,
        "expEn": "Step 1: KE = 0.5 × 2 × 3^2 = 9 J.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: E_к = 0,5 · 2 · 3^2 = 9 Дж.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-075",
        "q": "what is the frequency of a wave with period 0.5 s?",
        "options": [
            "2 Hz",
            "0.5 Hz",
            "1 Hz",
            "4 Hz",
            "5 Hz"
        ],
        "ans": 0,
        "expEn": "Step 1: f = 1 / T = 1 / 0.5 = 2 Hz.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Частота ν = 1 / T = 1 / 0,5 = 2 Гц.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-076",
        "q": "what is the speed of an object moving 90 m in 3 s at constant speed?",
        "options": [
            "30 m/s",
            "270 m/s",
            "0.033 m/s",
            "93 m/s",
            "87 m/s"
        ],
        "ans": 0,
        "expEn": "Step 1: v = d / t = 90 / 3 = 30 m/s.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Скорость v = s / t = 90 / 3 = 30 м/с.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-077",
        "q": "what is the net force on a 5 kg mass accelerating at 4 m/s^2?",
        "options": [
            "20 N",
            "1.25 N",
            "9 N",
            "1 N",
            "25 N"
        ],
        "ans": 0,
        "expEn": "Step 1: F = m × a = 5 × 4 = 20 N.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Сила F = m · a = 5 · 4 = 20 Н.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-078",
        "q": "what is the voltage across a 10 Ω resistor carrying 2 A?",
        "options": [
            "20 V",
            "5 V",
            "12 V",
            "8 V",
            "0.2 V"
        ],
        "ans": 0,
        "expEn": "Step 1: V = I × R = 2 × 10 = 20 V.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Напряжение U = I · R = 2 · 10 = 20 В.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-079",
        "q": "what is the kinetic energy of a 2 kg body at speed 3 m/s?",
        "options": [
            "9 J",
            "6 J",
            "18 J",
            "12 J",
            "3 J"
        ],
        "ans": 0,
        "expEn": "Step 1: KE = 0.5 × 2 × 3^2 = 9 J.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: E_к = 0,5 · 2 · 3^2 = 9 Дж.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-080",
        "q": "what is the frequency of a wave with period 0.5 s?",
        "options": [
            "2 Hz",
            "0.5 Hz",
            "1 Hz",
            "4 Hz",
            "5 Hz"
        ],
        "ans": 0,
        "expEn": "Step 1: f = 1 / T = 1 / 0.5 = 2 Hz.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Частота ν = 1 / T = 1 / 0,5 = 2 Гц.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-081",
        "q": "what is the speed of an object moving 90 m in 3 s at constant speed?",
        "options": [
            "30 m/s",
            "270 m/s",
            "0.033 m/s",
            "93 m/s",
            "87 m/s"
        ],
        "ans": 0,
        "expEn": "Step 1: v = d / t = 90 / 3 = 30 m/s.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Скорость v = s / t = 90 / 3 = 30 м/с.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-082",
        "q": "what is the net force on a 5 kg mass accelerating at 4 m/s^2?",
        "options": [
            "20 N",
            "1.25 N",
            "9 N",
            "1 N",
            "25 N"
        ],
        "ans": 0,
        "expEn": "Step 1: F = m × a = 5 × 4 = 20 N.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Сила F = m · a = 5 · 4 = 20 Н.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-083",
        "q": "what is the voltage across a 10 Ω resistor carrying 2 A?",
        "options": [
            "20 V",
            "5 V",
            "12 V",
            "8 V",
            "0.2 V"
        ],
        "ans": 0,
        "expEn": "Step 1: V = I × R = 2 × 10 = 20 V.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Напряжение U = I · R = 2 · 10 = 20 В.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-084",
        "q": "what is the kinetic energy of a 2 kg body at speed 3 m/s?",
        "options": [
            "9 J",
            "6 J",
            "18 J",
            "12 J",
            "3 J"
        ],
        "ans": 0,
        "expEn": "Step 1: KE = 0.5 × 2 × 3^2 = 9 J.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: E_к = 0,5 · 2 · 3^2 = 9 Дж.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-085",
        "q": "what is the frequency of a wave with period 0.5 s?",
        "options": [
            "2 Hz",
            "0.5 Hz",
            "1 Hz",
            "4 Hz",
            "5 Hz"
        ],
        "ans": 0,
        "expEn": "Step 1: f = 1 / T = 1 / 0.5 = 2 Hz.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Частота ν = 1 / T = 1 / 0,5 = 2 Гц.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-086",
        "q": "what is the speed of an object moving 90 m in 3 s at constant speed?",
        "options": [
            "30 m/s",
            "270 m/s",
            "0.033 m/s",
            "93 m/s",
            "87 m/s"
        ],
        "ans": 0,
        "expEn": "Step 1: v = d / t = 90 / 3 = 30 m/s.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Скорость v = s / t = 90 / 3 = 30 м/с.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-087",
        "q": "what is the net force on a 5 kg mass accelerating at 4 m/s^2?",
        "options": [
            "20 N",
            "1.25 N",
            "9 N",
            "1 N",
            "25 N"
        ],
        "ans": 0,
        "expEn": "Step 1: F = m × a = 5 × 4 = 20 N.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Сила F = m · a = 5 · 4 = 20 Н.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-088",
        "q": "what is the voltage across a 10 Ω resistor carrying 2 A?",
        "options": [
            "20 V",
            "5 V",
            "12 V",
            "8 V",
            "0.2 V"
        ],
        "ans": 0,
        "expEn": "Step 1: V = I × R = 2 × 10 = 20 V.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Напряжение U = I · R = 2 · 10 = 20 В.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-089",
        "q": "what is the kinetic energy of a 2 kg body at speed 3 m/s?",
        "options": [
            "9 J",
            "6 J",
            "18 J",
            "12 J",
            "3 J"
        ],
        "ans": 0,
        "expEn": "Step 1: KE = 0.5 × 2 × 3^2 = 9 J.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: E_к = 0,5 · 2 · 3^2 = 9 Дж.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-090",
        "q": "what is the frequency of a wave with period 0.5 s?",
        "options": [
            "2 Hz",
            "0.5 Hz",
            "1 Hz",
            "4 Hz",
            "5 Hz"
        ],
        "ans": 0,
        "expEn": "Step 1: f = 1 / T = 1 / 0.5 = 2 Hz.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Частота ν = 1 / T = 1 / 0,5 = 2 Гц.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-091",
        "q": "what is the speed of an object moving 90 m in 3 s at constant speed?",
        "options": [
            "30 m/s",
            "270 m/s",
            "0.033 m/s",
            "93 m/s",
            "87 m/s"
        ],
        "ans": 0,
        "expEn": "Step 1: v = d / t = 90 / 3 = 30 m/s.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Скорость v = s / t = 90 / 3 = 30 м/с.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-092",
        "q": "what is the net force on a 5 kg mass accelerating at 4 m/s^2?",
        "options": [
            "20 N",
            "1.25 N",
            "9 N",
            "1 N",
            "25 N"
        ],
        "ans": 0,
        "expEn": "Step 1: F = m × a = 5 × 4 = 20 N.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Сила F = m · a = 5 · 4 = 20 Н.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-093",
        "q": "what is the voltage across a 10 Ω resistor carrying 2 A?",
        "options": [
            "20 V",
            "5 V",
            "12 V",
            "8 V",
            "0.2 V"
        ],
        "ans": 0,
        "expEn": "Step 1: V = I × R = 2 × 10 = 20 V.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Напряжение U = I · R = 2 · 10 = 20 В.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-094",
        "q": "what is the kinetic energy of a 2 kg body at speed 3 m/s?",
        "options": [
            "9 J",
            "6 J",
            "18 J",
            "12 J",
            "3 J"
        ],
        "ans": 0,
        "expEn": "Step 1: KE = 0.5 × 2 × 3^2 = 9 J.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: E_к = 0,5 · 2 · 3^2 = 9 Дж.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-095",
        "q": "what is the frequency of a wave with period 0.5 s?",
        "options": [
            "2 Hz",
            "0.5 Hz",
            "1 Hz",
            "4 Hz",
            "5 Hz"
        ],
        "ans": 0,
        "expEn": "Step 1: f = 1 / T = 1 / 0.5 = 2 Hz.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Частота ν = 1 / T = 1 / 0,5 = 2 Гц.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-096",
        "q": "what is the speed of an object moving 90 m in 3 s at constant speed?",
        "options": [
            "30 m/s",
            "270 m/s",
            "0.033 m/s",
            "93 m/s",
            "87 m/s"
        ],
        "ans": 0,
        "expEn": "Step 1: v = d / t = 90 / 3 = 30 m/s.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Скорость v = s / t = 90 / 3 = 30 м/с.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-097",
        "q": "what is the net force on a 5 kg mass accelerating at 4 m/s^2?",
        "options": [
            "20 N",
            "1.25 N",
            "9 N",
            "1 N",
            "25 N"
        ],
        "ans": 0,
        "expEn": "Step 1: F = m × a = 5 × 4 = 20 N.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Сила F = m · a = 5 · 4 = 20 Н.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-098",
        "q": "what is the voltage across a 10 Ω resistor carrying 2 A?",
        "options": [
            "20 V",
            "5 V",
            "12 V",
            "8 V",
            "0.2 V"
        ],
        "ans": 0,
        "expEn": "Step 1: V = I × R = 2 × 10 = 20 V.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Напряжение U = I · R = 2 · 10 = 20 В.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-099",
        "q": "what is the kinetic energy of a 2 kg body at speed 3 m/s?",
        "options": [
            "9 J",
            "6 J",
            "18 J",
            "12 J",
            "3 J"
        ],
        "ans": 0,
        "expEn": "Step 1: KE = 0.5 × 2 × 3^2 = 9 J.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: E_к = 0,5 · 2 · 3^2 = 9 Дж.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-100",
        "q": "what is the frequency of a wave with period 0.5 s?",
        "options": [
            "2 Hz",
            "0.5 Hz",
            "1 Hz",
            "4 Hz",
            "5 Hz"
        ],
        "ans": 0,
        "expEn": "Step 1: f = 1 / T = 1 / 0.5 = 2 Hz.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Частота ν = 1 / T = 1 / 0,5 = 2 Гц.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-101",
        "q": "what is the speed of an object moving 90 m in 3 s at constant speed?",
        "options": [
            "30 m/s",
            "270 m/s",
            "0.033 m/s",
            "93 m/s",
            "87 m/s"
        ],
        "ans": 0,
        "expEn": "Step 1: v = d / t = 90 / 3 = 30 m/s.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Скорость v = s / t = 90 / 3 = 30 м/с.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-102",
        "q": "what is the net force on a 5 kg mass accelerating at 4 m/s^2?",
        "options": [
            "20 N",
            "1.25 N",
            "9 N",
            "1 N",
            "25 N"
        ],
        "ans": 0,
        "expEn": "Step 1: F = m × a = 5 × 4 = 20 N.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Сила F = m · a = 5 · 4 = 20 Н.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-103",
        "q": "what is the voltage across a 10 Ω resistor carrying 2 A?",
        "options": [
            "20 V",
            "5 V",
            "12 V",
            "8 V",
            "0.2 V"
        ],
        "ans": 0,
        "expEn": "Step 1: V = I × R = 2 × 10 = 20 V.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Напряжение U = I · R = 2 · 10 = 20 В.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-104",
        "q": "what is the kinetic energy of a 2 kg body at speed 3 m/s?",
        "options": [
            "9 J",
            "6 J",
            "18 J",
            "12 J",
            "3 J"
        ],
        "ans": 0,
        "expEn": "Step 1: KE = 0.5 × 2 × 3^2 = 9 J.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: E_к = 0,5 · 2 · 3^2 = 9 Дж.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-105",
        "q": "what is the frequency of a wave with period 0.5 s?",
        "options": [
            "2 Hz",
            "0.5 Hz",
            "1 Hz",
            "4 Hz",
            "5 Hz"
        ],
        "ans": 0,
        "expEn": "Step 1: f = 1 / T = 1 / 0.5 = 2 Hz.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Частота ν = 1 / T = 1 / 0,5 = 2 Гц.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-106",
        "q": "what is the speed of an object moving 90 m in 3 s at constant speed?",
        "options": [
            "30 m/s",
            "270 m/s",
            "0.033 m/s",
            "93 m/s",
            "87 m/s"
        ],
        "ans": 0,
        "expEn": "Step 1: v = d / t = 90 / 3 = 30 m/s.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Скорость v = s / t = 90 / 3 = 30 м/с.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-107",
        "q": "what is the net force on a 5 kg mass accelerating at 4 m/s^2?",
        "options": [
            "20 N",
            "1.25 N",
            "9 N",
            "1 N",
            "25 N"
        ],
        "ans": 0,
        "expEn": "Step 1: F = m × a = 5 × 4 = 20 N.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Сила F = m · a = 5 · 4 = 20 Н.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-108",
        "q": "what is the voltage across a 10 Ω resistor carrying 2 A?",
        "options": [
            "20 V",
            "5 V",
            "12 V",
            "8 V",
            "0.2 V"
        ],
        "ans": 0,
        "expEn": "Step 1: V = I × R = 2 × 10 = 20 V.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Напряжение U = I · R = 2 · 10 = 20 В.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-109",
        "q": "what is the kinetic energy of a 2 kg body at speed 3 m/s?",
        "options": [
            "9 J",
            "6 J",
            "18 J",
            "12 J",
            "3 J"
        ],
        "ans": 0,
        "expEn": "Step 1: KE = 0.5 × 2 × 3^2 = 9 J.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: E_к = 0,5 · 2 · 3^2 = 9 Дж.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-110",
        "q": "what is the frequency of a wave with period 0.5 s?",
        "options": [
            "2 Hz",
            "0.5 Hz",
            "1 Hz",
            "4 Hz",
            "5 Hz"
        ],
        "ans": 0,
        "expEn": "Step 1: f = 1 / T = 1 / 0.5 = 2 Hz.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Частота ν = 1 / T = 1 / 0,5 = 2 Гц.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-111",
        "q": "what is the speed of an object moving 90 m in 3 s at constant speed?",
        "options": [
            "30 m/s",
            "270 m/s",
            "0.033 m/s",
            "93 m/s",
            "87 m/s"
        ],
        "ans": 0,
        "expEn": "Step 1: v = d / t = 90 / 3 = 30 m/s.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Скорость v = s / t = 90 / 3 = 30 м/с.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-112",
        "q": "what is the net force on a 5 kg mass accelerating at 4 m/s^2?",
        "options": [
            "20 N",
            "1.25 N",
            "9 N",
            "1 N",
            "25 N"
        ],
        "ans": 0,
        "expEn": "Step 1: F = m × a = 5 × 4 = 20 N.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Сила F = m · a = 5 · 4 = 20 Н.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-113",
        "q": "what is the voltage across a 10 Ω resistor carrying 2 A?",
        "options": [
            "20 V",
            "5 V",
            "12 V",
            "8 V",
            "0.2 V"
        ],
        "ans": 0,
        "expEn": "Step 1: V = I × R = 2 × 10 = 20 V.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Напряжение U = I · R = 2 · 10 = 20 В.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-114",
        "q": "what is the kinetic energy of a 2 kg body at speed 3 m/s?",
        "options": [
            "9 J",
            "6 J",
            "18 J",
            "12 J",
            "3 J"
        ],
        "ans": 0,
        "expEn": "Step 1: KE = 0.5 × 2 × 3^2 = 9 J.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: E_к = 0,5 · 2 · 3^2 = 9 Дж.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-115",
        "q": "what is the frequency of a wave with period 0.5 s?",
        "options": [
            "2 Hz",
            "0.5 Hz",
            "1 Hz",
            "4 Hz",
            "5 Hz"
        ],
        "ans": 0,
        "expEn": "Step 1: f = 1 / T = 1 / 0.5 = 2 Hz.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Частота ν = 1 / T = 1 / 0,5 = 2 Гц.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-116",
        "q": "what is the speed of an object moving 90 m in 3 s at constant speed?",
        "options": [
            "30 m/s",
            "270 m/s",
            "0.033 m/s",
            "93 m/s",
            "87 m/s"
        ],
        "ans": 0,
        "expEn": "Step 1: v = d / t = 90 / 3 = 30 m/s.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Скорость v = s / t = 90 / 3 = 30 м/с.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-117",
        "q": "what is the net force on a 5 kg mass accelerating at 4 m/s^2?",
        "options": [
            "20 N",
            "1.25 N",
            "9 N",
            "1 N",
            "25 N"
        ],
        "ans": 0,
        "expEn": "Step 1: F = m × a = 5 × 4 = 20 N.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Сила F = m · a = 5 · 4 = 20 Н.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-118",
        "q": "what is the voltage across a 10 Ω resistor carrying 2 A?",
        "options": [
            "20 V",
            "5 V",
            "12 V",
            "8 V",
            "0.2 V"
        ],
        "ans": 0,
        "expEn": "Step 1: V = I × R = 2 × 10 = 20 V.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Напряжение U = I · R = 2 · 10 = 20 В.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-119",
        "q": "what is the kinetic energy of a 2 kg body at speed 3 m/s?",
        "options": [
            "9 J",
            "6 J",
            "18 J",
            "12 J",
            "3 J"
        ],
        "ans": 0,
        "expEn": "Step 1: KE = 0.5 × 2 × 3^2 = 9 J.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: E_к = 0,5 · 2 · 3^2 = 9 Дж.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-phys-120",
        "q": "what is the frequency of a wave with period 0.5 s?",
        "options": [
            "2 Hz",
            "0.5 Hz",
            "1 Hz",
            "4 Hz",
            "5 Hz"
        ],
        "ans": 0,
        "expEn": "Step 1: f = 1 / T = 1 / 0.5 = 2 Hz.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Частота ν = 1 / T = 1 / 0,5 = 2 Гц.\nШаг 2: Верный вариант — A."
    }
];
