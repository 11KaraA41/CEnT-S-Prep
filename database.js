// database.js - Official Sample Test (60 questions: 10 distinct Reading passages, 15 Math, 10 Logic/Data, 10 Biology, 10 Chemistry, 5 Physics)

(function () {
    const sims = typeof DB_STANDARD_SIMULATIONS !== 'undefined' && Array.isArray(DB_STANDARD_SIMULATIONS)
        ? DB_STANDARD_SIMULATIONS
        : [];

    const officialTest = {
        id: 'official-sample-1',
        title: 'Official Sample Test (CENT-S Sample Test 1)',
        subtitle: '60 questions: 10 Reading (10 different passages), 15 Math, 10 Logic/Data, 10 Biology, 10 Chemistry, 5 Physics.',
        durationMinutes: 140,
        sections: [
            {
                key: 'Reading',
                title: 'Reading Comprehension',
                questions: [
                    {
                        id: 'off-r01',
                        title: 'Basalt Lava Tubes',
                        passage: 'Lava tubes form when the outer crust of a fluid basaltic flow cools and solidifies while hotter molten lava continues to channel beneath it. Once the eruption subsides and the inner magma drains away, a hollow subterranean conduit remains, often shielded from surface weather and temperature swings. (M. Alvarez, Subterranean Basalt Conduits, 2024)',
                        q: 'What is implicitly conveyed about hollow lava tubes after inner magma drains away?',
                        options: [
                            'They can stay insulated from surface weather and temperature shifts',
                            'They form before any lava reaches the surface',
                            'They are filled with pressurized ocean water',
                            'They never occur in basaltic flows',
                            'They are always exposed to direct sunlight'
                        ],
                        ans: 0,
                        expEn: 'Step 1: The passage notes a hollow subterranean conduit remains and is often shielded from surface weather and temperature swings.\nStep 2: Option A reflects this protection.',
                        expRu: 'Шаг 1: В тексте сказано, что полый канал остаётся и часто защищён от погодных условий и перепадов температур.\nШаг 2: Верный вариант — A.'
                    },
                    {
                        id: 'off-r02',
                        title: 'Limestone Cavern Resonance',
                        passage: 'Limestone caverns often carry sound far farther than open air because smooth rock walls reflect acoustic waves repeatedly with minimal absorption. In prehistoric caves, researchers have noticed that painted figures frequently appear near chambers with strong resonance. (L. Beaumont, Cave Soundscapes, 2023)',
                        q: 'According to the text, why does sound travel farther inside limestone caverns than in open air?',
                        options: [
                            'Smooth rock walls reflect sound waves with minimal absorption',
                            'Cave air has zero density',
                            'Paintings absorb all acoustic echoes',
                            'Open air reflects sound better than limestone',
                            'Torches silence all sound waves'
                        ],
                        ans: 0,
                        expEn: 'Step 1: The text explicitly states smooth rock walls reflect acoustic waves repeatedly with minimal absorption.\nStep 2: Option A is correct.',
                        expRu: 'Шаг 1: В тексте прямо сказано, что гладкие стены отражают звуковые волны при минимальном поглощении.\nШаг 2: Верный вариант — A.'
                    },
                    {
                        id: 'off-r03',
                        title: 'Medieval Craft Guilds',
                        passage: 'During the late Middle Ages, craft guilds regulated apprenticeships, tool standards, and pricing across European towns to curb cutthroat competition. Yet strict entry rules also kept membership restricted, slowing how quickly newcomers could introduce labor-saving methods. (R. Lindqvist, Craft Guilds, 2023)',
                        q: 'Which statement is excluded from the passage?',
                        options: [
                            'Guilds required every member to publish annual stock-market reports',
                            'Guilds regulated apprenticeships and pricing',
                            'Strict entry rules restricted membership',
                            'Newcomers could face limits when introducing labor-saving methods',
                            'Craft guilds operated in European towns'
                        ],
                        ans: 0,
                        expEn: 'Step 1: Annual stock-market reports are not mentioned in the passage.\nStep 2: Options B–E match or follow from the text, so Option A is excluded.',
                        expRu: 'Шаг 1: Про биржевые отчёты в тексте ничего нет.\nШаг 2: Пункты B–E соответствуют тексту, исключённый вариант — A.'
                    },
                    {
                        id: 'off-r04',
                        title: 'Deep-Water Red Algae',
                        passage: 'Red algae growing at greater ocean depths rely heavily on accessory pigments called phycobiliproteins, which absorb blue-green wavelengths that penetrate deeper water than red light does. This broadens the usable light spectrum for photosynthesis at depth. (K. Takahashi, Marine Botany Notes, 2024)',
                        q: 'What is implicitly conveyed about red light underwater compared with blue-green wavelengths?',
                        options: [
                            'Red light does not penetrate as deeply into water as blue-green wavelengths',
                            'Red light reaches deeper than all other wavelengths',
                            'Blue-green light cannot enter seawater',
                            'Red algae do not use light at all',
                            'Seawater is completely opaque at 1 meter'
                        ],
                        ans: 0,
                        expEn: 'Step 1: Blue-green wavelengths penetrate deeper water than red light does.\nStep 2: Thus red light penetrates less deeply (Option A).',
                        expRu: 'Шаг 1: Сине-зелёные волны проникают глубже красного света.\nШаг 2: Значит, красный свет проникает на меньшую глубину (вариант A).'
                    },
                    {
                        id: 'off-r05',
                        title: 'Masonry Arch Compression',
                        passage: 'Arch bridges transfer loads primarily into compression along the curve of the arch rather than bending the span like a simple beam. When masonry blocks are wedged tightly under compression, joints stay pressed together even without mortar if end abutments resist outward thrust. (D. Novak, Civil Heritage, 2022)',
                        q: 'What does «outward thrust» refer to in the passage?',
                        options: [
                            'The sideways push exerted by the arch against its end supports',
                            'Upward pressure from river ice',
                            'The weight of passing pedestrians alone',
                            'Friction inside water pipes',
                            'Thermal shrinkage of stone'
                        ],
                        ans: 0,
                        expEn: 'Step 1: End abutments must resist outward thrust so supports do not shift outward.\nStep 2: Option A describes this sideways push against supports.',
                        expRu: 'Шаг 1: Опоры по краям должны сопротивляться боковому распору арки.\nШаг 2: Верный вариант — A.'
                    },
                    {
                        id: 'off-r06',
                        title: 'Early Coastal Wind Charts',
                        passage: 'Early wind charts helped mariners anticipate prevailing breezes along familiar coasts, though local gusts near headlands could still surprise crews. Plotting wind directions across repeated voyages turned scattered observations into seasonal patterns, yet sudden squalls still required watchkeeping. (M. Costa, Maritime Archive, 2023)',
                        q: 'According to the text, how did navigators turn scattered observations into seasonal patterns?',
                        options: [
                            'By plotting wind directions across repeated voyages',
                            'By using radar satellites',
                            'By sailing only in calm harbors',
                            'By banning coastal routes',
                            'By ignoring wind directions'
                        ],
                        ans: 0,
                        expEn: 'Step 1: The text explicitly states navigators plotted wind directions across repeated voyages.\nStep 2: Option A is correct.',
                        expRu: 'Шаг 1: В тексте сказано, что мореходы наносили направления ветра по итогам повторных рейсов.\nШаг 2: Верный вариант — A.'
                    },
                    {
                        id: 'off-r07',
                        title: 'Early Mechanical Clocks',
                        passage: 'Before standardized mechanical escapements became widespread, early clocks often drifted over a single day because friction, temperature shifts, and weight variations altered their pace. Watchmakers refined gears, balances, and pendulums for steadier timekeeping in navigation and astronomy. (H. Weber, Horology Quarterly, 2024)',
                        q: 'With which word could «drifted» be replaced within the given text?',
                        options: ['Strayed', 'Polished', 'Anchored', 'Multiplied', 'Silenced'],
                        ans: 0,
                        expEn: 'Step 1: Early clocks "drifted" (wandered/strayed) from accurate time over a day.\nStep 2: "Strayed" matches this meaning (Option A).',
                        expRu: 'Шаг 1: Ранние часы «уходили / сбивались» от точного хода.\nШаг 2: Подходящий синоним — «Strayed» (вариант A).'
                    },
                    {
                        id: 'off-r08',
                        title: 'Bioluminescent Forest Fungi',
                        passage: 'Certain forest fungi emit a steady greenish glow produced by a biochemical reaction inside fungal cells. Because the glow is subtle, it is easiest to spot in dark, damp woodland settings away from artificial lights. (E. Morales, Mycology Today, 2024)',
                        q: 'What is implicitly conveyed about viewing these fungi near bright artificial lights?',
                        options: [
                            'Artificial light makes the subtle glow harder to notice',
                            'Artificial light makes the glow turn bright blue',
                            'Fungi stop growing near any light',
                            'Artificial light increases wood moisture',
                            'No biochemical reaction occurs in darkness'
                        ],
                        ans: 0,
                        expEn: 'Step 1: Because the glow is subtle, dark settings away from artificial lights make it easiest to spot.\nStep 2: Bright artificial light reduces visibility of a faint glow (Option A).',
                        expRu: 'Шаг 1: Так как свечение слабое, в темноте без искусственного света оно заметнее всего.\nШаг 2: Яркий свет мешает разглядеть слабое свечение (вариант A).'
                    },
                    {
                        id: 'off-r09',
                        title: 'Sailing Trade Winds & Risk',
                        passage: 'Before steamships dominated ocean freight, sailing merchants balanced cargo weight, hull shape, and seasonal trade winds to keep voyages profitable. Waiting weeks for favorable winds tied up capital in goods and crews, whereas well-timed departures could save days. (A. Pellegrini, Economic History Briefs, 2022)',
                        q: 'What is implicitly conveyed about waiting weeks for favorable winds?',
                        options: [
                            'Delays tied up capital and crews longer, affecting voyage economics',
                            'Waiting always doubled cargo weight',
                            'Trade winds never changed seasonally',
                            'Steamships already existed in antiquity',
                            'Departure timing never affected crossing days'
                        ],
                        ans: 0,
                        expEn: 'Step 1: Waiting weeks tied up capital in goods and crews, whereas well-timed departures saved days.\nStep 2: Option A reflects this economic impact.',
                        expRu: 'Шаг 1: Ожидание на недели замораживало капитал в товарах и экипаже.\nШаг 2: Верный вариант — A.'
                    },
                    {
                        id: 'off-r10',
                        title: 'Chromatic Aberration & Glass',
                        passage: 'Chromatic aberration occurs when a simple lens bends different wavelengths of light by slightly different amounts, focusing colors at slightly varied distances and creating faint colored fringes along high-contrast edges. Optical designers combine different glasses to reduce fringing. (N. Sato, Optics & Instruments, 2024)',
                        q: 'According to the text, how do optical designers reduce color fringing?',
                        options: [
                            'By combining lenses made of different glass types with distinct dispersion properties',
                            'By removing all lenses from optical systems',
                            'By using only one uncoupled lens element',
                            'By eliminating all contrast in every scene',
                            'By increasing wavelength differences'
                        ],
                        ans: 0,
                        expEn: 'Step 1: The text states optical designers combine lenses of different glass types with distinct dispersion properties to reduce fringing.\nStep 2: Option A is correct.',
                        expRu: 'Шаг 1: Конструкторы сочетают линзы из разных сортов стекла с разной дисперсией.\nШаг 2: Верный вариант — A.'
                    }
                ]
            },
            {
                key: 'Math',
                title: 'Mathematics',
                questions: [
                    { id: 'off-m01', q: 'In an equilateral triangle ABC of side 6 cm, D, E, F are midpoints of AB, BC, CA. What is the area of quadrilateral DBFE?', options: ['(9√3)/2 cm²', '(9√3)/4 cm²', '9√3 cm²', '3√3 cm²', '(27√3)/4 cm²'], ans: 0, expEn: 'Step 1: Area of ABC is 9√3 cm².\nStep 2: Three midsegments form 4 congruent triangles of area (9√3)/4 cm² each; DBFE is 2 of them = (9√3)/2 cm² (Option A).', expRu: 'Шаг 1: Площадь ABC равна 9√3 см².\nШаг 2: Средние линии делят треугольник на 4 равных по (9√3)/4 см²; DBFE — два из них: (9√3)/2 см² (вариант A).' },
                    { id: 'off-m02', q: 'How many real points (x; y) satisfy x² + y² = 4, (x - y)² = 4, and x > y?', options: ['2', '0', '1', '3', 'Infinite'], ans: 0, expEn: 'Step 1: x > y with (x - y)² = 4 gives x - y = 2.\nStep 2: Substituting x = y + 2 into x² + y² = 4 gives y = 0 (x = 2) and y = -2 (x = 0) — 2 points (Option A).', expRu: 'Шаг 1: Из x > y и (x - y)² = 4 следует x - y = 2.\nШаг 2: Подставляя в x² + y² = 4, получаем две точки: (2; 0) и (0; -2) (вариант A).' },
                    { id: 'off-m03', q: 'For distinct polynomials p(x) and q(x) of degree 4, what is certainly true?', options: ['deg(p + q) ≤ 4 and deg(p · q) = 8', 'deg(p + q) = 4 and deg(p · q) = 4', 'deg(p + q) = 8 and deg(p · q) = 16', 'deg(p + q) < 4 and deg(p · q) = 4', 'deg(p + q) = 0 and deg(p · q) = 8'], ans: 0, expEn: 'Step 1: deg(p · q) = 4 + 4 = 8.\nStep 2: deg(p + q) ≤ 4 (Option A).', expRu: 'Шаг 1: deg(p · q) = 4 + 4 = 8.\nШаг 2: deg(p + q) ≤ 4 (вариант A).' },
                    { id: 'off-m04', q: 'If 0.45m = 0.75n for non-zero m and n, express m in terms of n.', options: ['(5/3)n', '0.6n', '(3/5)n', '1.5n', '0.3n'], ans: 0, expEn: 'Step 1: m = 0.75n / 0.45 = 75n / 45.\nStep 2: Simplify by 15 to get (5/3)n (Option A).', expRu: 'Шаг 1: m = 0,75n / 0,45 = 75n / 45.\nШаг 2: Сокращаем на 15 и получаем (5/3)n (вариант A).' },
                    { id: 'off-m05', q: 'Given log₃ 5 = u and log₃ 2 = v, find log₃(30) in terms of u and v.', options: ['1 + u + v', 'u + v', '3 + u + v', '1 + uv', '3uv'], ans: 0, expEn: 'Step 1: 30 = 3 × 5 × 2.\nStep 2: log₃(30) = log₃ 3 + u + v = 1 + u + v (Option A).', expRu: 'Шаг 1: 30 = 3 · 5 · 2.\nШаг 2: log₃(30) = 1 + u + v (вариант A).' },
                    { id: 'off-m06', q: 'Let g(x) = ln(x) for x > 0. Which expression equals g(e³ / x⁴)?', options: ['3 - 4g(x)', '3 + 4g(x)', '-12g(x)', '(3/4)g(x)', '3 - 4/g(x)'], ans: 0, expEn: 'Step 1: ln(e³ / x⁴) = 3 ln e - 4 ln x.\nStep 2: Equals 3 - 4g(x) (Option A).', expRu: 'Шаг 1: ln(e³ / x⁴) = 3 ln e - 4 ln x.\nШаг 2: Получаем 3 - 4g(x) (вариант A).' },
                    { id: 'off-m07', q: 'For which k does { 3x - ky = 5; 6x - 4y = 7 } have no solutions?', options: ['2', '-2', '4', '0', 'No value'], ans: 0, expEn: 'Step 1: Multiply first equation by 2: 6x - 2ky = 10.\nStep 2: At k = 2, left sides match (6x - 4y) while right sides differ (10 ≠ 7) — no solutions (Option A).', expRu: 'Шаг 1: Умножим первое уравнение на 2: 6x - 2ky = 10.\nШаг 2: При k = 2 прямые параллельны и различны, решений нет (вариант A).' },
                    { id: 'off-m08', q: 'A committee of 3 is chosen from 5 boys and 4 girls. How many ways include at least one girl?', options: ['74', '84', '10', '64', '40'], ans: 0, expEn: 'Step 1: C(9, 3) = 84 total committees.\nStep 2: Subtract all-boy committees C(5, 3) = 10: 84 - 10 = 74 (Option A).', expRu: 'Шаг 1: Всего C₉³ = 84 способа.\nШаг 2: Вычитаем составы только из мальчиков C₅³ = 10: 84 - 10 = 74 (вариант A).' },
                    { id: 'off-m09', q: 'X rises 20% then falls 20%; Y falls 20% then rises 20%; Z is unchanged. Which ends highest?', options: ['Z is highest', 'X is highest', 'Y is highest', 'X and Y tie above Z', 'All three are equal'], ans: 0, expEn: 'Step 1: Both X and Y end at 0.96 of initial price.\nStep 2: Z stays at 1.00, so Z is highest (Option A).', expRu: 'Шаг 1: X и Y в итоге равны 0,96 от исходного значения.\nШаг 2: Z остаётся на уровне 1,00 — наибольшее у Z (вариант A).' },
                    { id: 'off-m10', q: 'If h(x) = |2x - 7|, what is h(5)?', options: ['h(2)', 'h(0)', 'h(3.5)', 'h(6)', 'h(-2)'], ans: 0, expEn: 'Step 1: h(5) = |10 - 7| = 3.\nStep 2: h(2) = |4 - 7| = 3, so h(5) = h(2) (Option A).', expRu: 'Шаг 1: h(5) = 3.\nШаг 2: h(2) = 3, значит h(5) = h(2) (вариант A).' },
                    { id: 'off-m11', q: 'A rhombus has diagonals 6 cm and 8 cm. What is its perimeter?', options: ['20 cm', '24 cm', '28 cm', '48 cm', '14 cm'], ans: 0, expEn: 'Step 1: Side = √(3² + 4²) = 5 cm.\nStep 2: Perimeter = 4 × 5 = 20 cm (Option A).', expRu: 'Шаг 1: Сторона ромба равна √(3² + 4²) = 5 см.\nШаг 2: Периметр равен 4 · 5 = 20 см (вариант A).' },
                    { id: 'off-m12', q: 'How many integer pairs (x; y) satisfy x² - y² = 7?', options: ['4', '2', '1', '0', 'Infinite'], ans: 0, expEn: 'Step 1: (x - y)(x + y) = 7 with prime 7.\nStep 2: Four factor pairs yield 4 integer pairs (Option A).', expRu: 'Шаг 1: (x - y)(x + y) = 7.\nШаг 2: Получаем 4 целочисленных решения (вариант A).' },
                    { id: 'off-m13', q: 'If p(x) = x² - 4x + 1 and q(x) = x² + 2x - 5, what is deg(p(x) - q(x))?', options: ['1', '2', '0', '4', '3'], ans: 0, expEn: 'Step 1: p(x) - q(x) = -6x + 6.\nStep 2: Degree is 1 (Option A).', expRu: 'Шаг 1: p(x) - q(x) = -6x + 6.\nШаг 2: Степень равна 1 (вариант A).' },
                    { id: 'off-m14', q: 'Solve for x: (2x - 1)/3 = (x + 4)/2.', options: ['14', '10', '2', '-14', '6'], ans: 0, expEn: 'Step 1: 2(2x - 1) = 3(x + 4) → 4x - 2 = 3x + 12.\nStep 2: x = 14 (Option A).', expRu: 'Шаг 1: 4x - 2 = 3x + 12.\nШаг 2: x = 14 (вариант A).' },
                    { id: 'off-m15', q: 'If log₂ x = 5, what is log₄ x?', options: ['2.5', '10', '2', '5', '1.25'], ans: 0, expEn: 'Step 1: log₄ x = log₂ x / log₂ 4 = 5 / 2.\nStep 2: Equals 2.5 (Option A).', expRu: 'Шаг 1: log₄ x = log₂ x / 2 = 5 / 2.\nШаг 2: Получаем 2,5 (вариант A).' }
                ]
            },
            {
                key: 'Logic',
                title: 'Reasoning on Texts and Data',
                questions: [
                    { id: 'off-l01', q: 'In a 30-day month, a courier is idle on 18 days. On each of 12 active days, an express (-40 €) or standard (+25 €) parcel is sent. Net profit is +170 €. How many express parcels?', options: ['2', '10', '12', '4', '6'], ans: 0, expEn: 'Step 1: -40x + 25(12 - x) = 170 → -65x + 300 = 170.\nStep 2: 65x = 130 → x = 2 (Option A).', expRu: 'Шаг 1: -40x + 25(12 - x) = 170 → -65x = -130.\nШаг 2: x = 2 (вариант A).' },
                    { id: 'off-l02', q: 'Two-fifths voted for Alpha and four-fifths voted for Beta. What is guaranteed?', options: ['At least 1/5 voted for both', 'Everyone voting Alpha voted Beta', 'Nobody opposed both', 'At least 4/5 voted Alpha', 'Everyone voted for at least one'], ans: 0, expEn: 'Step 1: 2/5 + 4/5 = 6/5.\nStep 2: Minimum overlap is 6/5 - 1 = 1/5 (Option A).', expRu: 'Шаг 1: 2/5 + 4/5 = 6/5.\nШаг 2: Минимум 1/5 проголосовали за оба варианта (вариант A).' },
                    { id: 'off-l03', q: 'Yeast doubles every hour. Starting with 1 g, it fills a vat in 12 h. Starting with 4 g, how many hours?', options: ['10 hours', '3 hours', '12 hours', '8 hours', '11 hours'], ans: 0, expEn: 'Step 1: 1 g reaches 4 g in 2 hours.\nStep 2: 12 - 2 = 10 hours (Option A).', expRu: 'Шаг 1: С 1 г до 4 г проходит 2 часа.\nШаг 2: 12 - 2 = 10 часов (вариант A).' },
                    { id: 'off-l04', q: 'Boarding requires a ticket or a staff pass. Which statement is equivalent?', options: ['Without a ticket AND without a pass, boarding is not allowed', 'Having a ticket guarantees boarding everywhere', 'No ticket means no boarding always', 'Boarding implies neither ticket nor pass', 'Ticket equals staff pass'], ans: 0, expEn: 'Step 1: Board → (Ticket ∨ Pass).\nStep 2: Contrapositive: ¬(Ticket ∨ Pass) → ¬Board (Option A).', expRu: 'Шаг 1: Посадка требует билета или пропуска.\nШаг 2: Без обоих документов посадка невозможна (вариант A).' },
                    { id: 'off-l05', q: 'Sample has Cu or Zn (or both). If no Cu, then Ni. If Zn, then Sn. Which is possible?', options: ['Only Cu', 'Only Ni and Sn', 'Cu and Zn without Sn', 'Only Zn and Ni', 'Neither Cu nor Zn'], ans: 0, expEn: 'Step 1: "Only Cu" satisfies Cu ∨ Zn and does not trigger ¬Cu or Zn.\nStep 2: Option A is possible.', expRu: 'Шаг 1: «Только медь» не нарушает ни одно из правил.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-l06', q: '3 blue blocks equal 1 red + 1 yellow. Left has 1 blue + 1 red + 1 yellow; right has 3 blue. How to balance?', options: ['Add 1 blue block to the right pan', 'Add 1 red block to the right pan', 'Add 1 yellow block to the right pan', 'Already balanced', 'Add 1 blue block to the left pan'], ans: 0, expEn: 'Step 1: Left = 1B + 3B = 4B.\nStep 2: Right has 3B, so add 1 blue block to right (Option A).', expRu: 'Шаг 1: Слева 1B + 3B = 4B.\nШаг 2: Справа 3B — добавляем 1 синий блок справа (вариант A).' },
                    { id: 'off-l07', q: 'A 200 g bar gives 24% daily magnesium. One 25 g square gives what %?', options: ['3%', '12%', '6%', '1.5%', '4%'], ans: 0, expEn: 'Step 1: 25 g / 200 g = 1/8.\nStep 2: 24% / 8 = 3% (Option A).', expRu: 'Шаг 1: 25 г — это 1/8 от 200 г.\nШаг 2: 24% / 8 = 3% (вариант A).' },
                    { id: 'off-l08', q: 'Eight numbers average 30 (sum = 240). What is the total sum of all eight numbers?', options: ['240', '30', '120', '200', '280'], ans: 0, expEn: 'Step 1: Sum = 8 × 30 = 240.\nStep 2: Option A is correct.', expRu: 'Шаг 1: Сумма равна 8 · 30 = 240.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-l09', q: 'How many 3-digit numbers with distinct digits from {1,2,3,4,5,6} have digits in increasing order?', options: ['20', '120', '60', '15', '30'], ans: 0, expEn: 'Step 1: C(6, 3) = 20.\nStep 2: Option A is correct.', expRu: 'Шаг 1: C₆³ = 20.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-l10', q: 'A 10 € item gets 20% off first, then a 5 € voucher off. Final price?', options: ['3 €', '5 €', '8 €', '2 €', '4 €'], ans: 0, expEn: 'Step 1: 10 × 0.8 = 8 €.\nStep 2: 8 - 5 = 3 € (Option A).', expRu: 'Шаг 1: 10 · 0,8 = 8 €.\nШаг 2: 8 - 5 = 3 € (вариант A).' }
                ]
            },
            {
                key: 'Biology',
                title: 'Biology',
                questions: [
                    { id: 'off-b01', q: 'Which feature characterizes skeletal (voluntary) muscle fibers rather than cardiac muscle?', options: ['Voluntary control and no intercalated discs', 'Intercalated discs with gap junctions', 'Cardiac pacemaker activity', 'Single central nucleus in smooth cells', 'Lack of actin'], ans: 0, expEn: 'Step 1: Skeletal muscle is voluntary and lacks intercalated discs.\nStep 2: Option A is correct.', expRu: 'Шаг 1: Скелетные мышцы произвольные и не имеют вставочных дисков.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-b02', q: 'What makes a carbon atom chiral in an organic molecule?', options: ['Bonding to four different groups', 'Bonding to two identical groups', 'Having a double bond to oxygen', 'Bonding only to four hydrogens', 'Carrying zero bonds'], ans: 0, expEn: 'Step 1: Four distinct groups around carbon give chirality.\nStep 2: Option A is correct.', expRu: 'Шаг 1: Четыре разных заместителя у атома углерода дают хиральность.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-b03', q: 'Which gas is released during photosynthesis and consumed during aerobic respiration?', options: ['O₂', 'CO₂', 'CH₄', 'N₂', 'H₂'], ans: 0, expEn: 'Step 1: Photosynthesis releases O₂; aerobic respiration consumes O₂.\nStep 2: Option A is correct.', expRu: 'Шаг 1: O₂ выделяется при фотосинтезе и потребляется при дыхании.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-b04', q: 'Where does the citric acid (Krebs) cycle take place in animal cells?', options: ['Mitochondrial matrix', 'Ribosome', 'Lysosome', 'Plasma membrane', 'Nucleolus'], ans: 0, expEn: 'Step 1: The citric acid cycle occurs in the mitochondrial matrix.\nStep 2: Option A is correct.', expRu: 'Шаг 1: Цикл Кребса идёт в матриксе митохондрий.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-b05', q: 'How does higher CO₂ / lower pH in active tissues affect hemoglobin’s O₂ affinity?', options: ['Decreases affinity, aiding O₂ release', 'Increases affinity permanently', 'No effect', 'Destroys iron', 'Stops blood flow'], ans: 0, expEn: 'Step 1: Higher CO₂ and lower pH shift the curve right, lowering O₂ affinity to aid release.\nStep 2: Option A is correct.', expRu: 'Шаг 1: Рост CO₂ и падение pH снижают сродство гемоглобина к O₂, помогая отдавать кислород.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-b06', q: 'What distinguishes primary active transport from facilitated diffusion?', options: ['Movement against a gradient using energy', 'Passive movement down a gradient', 'Simple water diffusion', 'Zero proteins', 'No gradient needed'], ans: 0, expEn: 'Step 1: Active transport moves against a gradient using energy.\nStep 2: Option A is correct.', expRu: 'Шаг 1: Активный транспорт идёт против градиента за счёт энергии.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-b07', q: 'Which biomolecule contains nitrogen in addition to C, H, and O?', options: ['Amino acid', 'Glycogen', 'Sucrose', 'Glucose', 'Starch'], ans: 0, expEn: 'Step 1: Amino acids contain nitrogen in -NH₂.\nStep 2: Option A is correct.', expRu: 'Шаг 1: Аминокислота содержит азот в аминогруппе.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-b08', q: 'Which DNA molecule requires a higher temperature to denature?', options: ['Higher percentage of G–C base pairs', 'Higher percentage of A–T base pairs', 'Single-stranded fragment', 'Broken backbone', 'All DNA melts identically'], ans: 0, expEn: 'Step 1: G–C pairs have 3 hydrogen bonds vs. 2 for A–T.\nStep 2: Option A is correct.', expRu: 'Шаг 1: Пары G–C имеют 3 водородные связи против 2 у A–T.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-b09', q: 'In a food chain, if predators are removed, what often happens to direct prey?', options: ['Prey population often increases', 'Prey disappears instantly', 'Prey stops eating', 'No change ever', 'Prey turns into plants'], ans: 0, expEn: 'Step 1: Reduced predation often increases direct prey initially.\nStep 2: Option A is correct.', expRu: 'Шаг 1: Снижение хищничества обычно повышает численность жертв.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-b10', q: 'Which process produces haploid cells (n) from diploid cells (2n)?', options: ['Meiosis', 'Mitosis', 'Interphase', 'Cytokinesis', 'G1 phase'], ans: 0, expEn: 'Step 1: Meiosis halves chromosome number from 2n to n.\nStep 2: Option A is correct.', expRu: 'Шаг 1: Мейоз уменьшает число хромосом вдвое (с 2n до n).\nШаг 2: Верный вариант — A.' }
                ]
            },
            {
                key: 'Chemistry',
                title: 'Chemistry',
                questions: [
                    { id: 'off-c01', q: 'In 2 H₂ + O₂ → 2 H₂O, how many H₂O molecules form from 1 mol O₂ and excess H₂?', options: ['2 × (6,022 × 10²³)', '6,022 × 10²³', '4 × (6,022 × 10²³)', '0,5 × (6,022 × 10²³)', '6,022 × 10⁴⁶'], ans: 0, expEn: 'Step 1: 1 mol O₂ yields 2 mol H₂O.\nStep 2: 2 × 6.022 × 10²³ molecules (Option A).', expRu: 'Шаг 1: Из 1 моль O₂ образуется 2 моль H₂O.\nШаг 2: Это 2 × (6,022 × 10²³) молекул (вариант A).' },
                    { id: 'off-c02', q: 'Which compound reacts with HCl to release CO₂ gas (effervescence)?', options: ['CaCO₃', 'CaSO₄', 'NaCl', 'KNO₃', 'BaSO₄'], ans: 0, expEn: 'Step 1: CaCO₃ + 2 HCl → CaCl₂ + H₂O + CO₂↑.\nStep 2: Option A is correct.', expRu: 'Шаг 1: Карбонат кальция CaCO₃ с HCl выделяет CO₂.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-c03', q: '1. CaO + H₂O → Ca(OH)₂; 2. CaO + CO₂ → CaCO₃; 3. CaO + 2 HCl → CaCl₂ + H₂O. Which form a salt?', options: ['2 and 3 only', '1 and 2 only', '1 and 3 only', '1, 2, and 3', '1 only'], ans: 0, expEn: 'Step 1: Reaction 1 gives a base; Reactions 2 and 3 give salts.\nStep 2: Option A is correct.', expRu: 'Шаг 1: В 1-й реакции образуется основание, во 2-й и 3-й — соли.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-c04', q: 'Which compound has a higher mass percentage of oxygen than H₂O (16/18 ≈ 88.9%)?', options: ['H₂O₂ (32/34 ≈ 94.1%)', 'CO₂ (32/44 ≈ 72.7%)', 'SO₂ (32/64 = 50%)', 'CO (16/28 ≈ 57.1%)', 'NO₂ (32/46 ≈ 69.6%)'], ans: 0, expEn: 'Step 1: H₂O₂ has 32/34 ≈ 94.1% oxygen by mass.\nStep 2: Option A is correct.', expRu: 'Шаг 1: В H₂O₂ массовая доля кислорода 32 / 34 ≈ 94,1%.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-c05', q: 'Which molecule has a bent molecular geometry?', options: ['H₂O', 'CO₂', 'BeCl₂', 'BF₃', 'CH₄'], ans: 0, expEn: 'Step 1: Two bonding pairs and two lone pairs on O give H₂O a bent shape.\nStep 2: Option A is correct.', expRu: 'Шаг 1: Молекула H₂O имеет угловую геометрию.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-c06', q: 'Compare Sodium (Na) with Chlorine (Cl, same period) and Potassium (K, below in Group 1) for atomic radius:', options: ['Na is smaller than K and larger than Cl', 'Na is larger than K and smaller than Cl', 'Na is smaller than both', 'Na is larger than both', 'All equal'], ans: 0, expEn: 'Step 1: Across period radius decreases (Na > Cl); down group radius increases (K > Na).\nStep 2: Option A is correct.', expRu: 'Шаг 1: В периоде радиус уменьшается (Na > Cl), в группе растёт (K > Na).\nШаг 2: Верный вариант — A.' },
                    { id: 'off-c07', q: 'A gas mixture at 1 atm is 60% O₂ and 40% N₂ by volume. Partial pressure of O₂?', options: ['0.6 atm', '0.4 atm', '1.0 atm', '0.2 atm', '0.8 atm'], ans: 0, expEn: 'Step 1: P(O₂) = 0.60 × 1 atm = 0.6 atm.\nStep 2: Option A is correct.', expRu: 'Шаг 1: P(O₂) = 0,60 · 1 = 0,6 атм.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-c08', q: 'Which reaction is a redox reaction?', options: ['Zn + 2 HCl → ZnCl₂ + H₂', 'NaOH + HCl → NaCl + H₂O', 'CaCO₃ → CaO + CO₂', 'AgNO₃ + NaCl → AgCl + NaNO₃', 'BaCl₂ + Na₂SO₄ → BaSO₄ + 2 NaCl'], ans: 0, expEn: 'Step 1: Zn goes 0 → +2 and H goes +1 → 0.\nStep 2: Option A is a redox reaction.', expRu: 'Шаг 1: В Zn + 2 HCl → ZnCl₂ + H₂ меняются степени окисления.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-c09', q: 'Which compound consists of a benzene ring with a hydroxyl group (-OH)?', options: ['Phenol', 'Toluene', 'Benzoic acid', 'Benzaldehyde', 'Hexane'], ans: 0, expEn: 'Step 1: Benzene ring with -OH is phenol.\nStep 2: Option A is correct.', expRu: 'Шаг 1: Бензольное кольцо с группой -OH — фенол.\nШаг 2: Верный вариант — A.' },
                    { id: 'off-c10', q: 'Why must concentrated H₂SO₄ be stored tightly sealed?', options: ['It absorbs water vapor from air (hygroscopic)', 'It evaporates at -100 °C', 'It has no attraction for water', 'It turns into metal', 'It has zero mass'], ans: 0, expEn: 'Step 1: H₂SO₄ is hygroscopic and absorbs moisture from air.\nStep 2: Option A is correct.', expRu: 'Шаг 1: Концентрированная H₂SO₄ гигроскопична и поглощает влагу из воздуха.\nШаг 2: Верный вариант — A.' }
                ]
            },
            {
                key: 'Physics',
                title: 'Physics',
                questions: [
                    { id: 'off-p01', q: 'A body starts from rest with acceleration 4 m/s². At t = 0, another body passes at constant speed 12 m/s. Distance where they meet?', options: ['72 m', '36 m', '24 m', '48 m', '144 m'], ans: 0, expEn: 'Step 1: 2t² = 12t → t = 6 s.\nStep 2: x = 12 × 6 = 72 m (Option A).', expRu: 'Шаг 1: 2t² = 12t → t = 6 с.\nШаг 2: x = 12 · 6 = 72 м (вариант A).' },
                    { id: 'off-p02', q: 'A net force acts always perpendicular to displacement. Work done by this force?', options: ['Zero', 'F · d', 'Always positive', 'm · v²', 'Infinite'], ans: 0, expEn: 'Step 1: cos(90°) = 0, so W = 0 (Option A).', expRu: 'Шаг 1: При угле 90° cos 90° = 0, работа равна нулю (вариант A).' },
                    { id: 'off-p03', q: 'Cylindrical water vessels have heights 10 cm, 25 cm, and 15 cm. Highest bottom pressure?', options: ['25 cm vessel', '10 cm vessel', '15 cm vessel', 'All equal', 'Depends on color'], ans: 0, expEn: 'Step 1: p = ρ g h is largest at h = 25 cm (Option A).', expRu: 'Шаг 1: Давление p = ρ g h наибольшее при h = 25 см (вариант A).' },
                    { id: 'off-p04', q: 'A proton (+e) at rest enters a uniform electric field E. How does it begin to move?', options: ['Uniformly accelerated linear motion along E', 'Uniformly accelerated linear motion opposite to E', 'Uniform motion without acceleration', 'Circular path at constant speed', 'Zero force'], ans: 0, expEn: 'Step 1: F = qE along E gives constant acceleration along E (Option A).', expRu: 'Шаг 1: Сила F = qE направлена вдоль E, разгон идёт прямолинейно вдоль E (вариант A).' },
                    { id: 'off-p05', q: 'Two forces of 3 N and 4 N act at 90°. Resultant magnitude?', options: ['5 N', '7 N', '1 N', '12 N', '25 N'], ans: 0, expEn: 'Step 1: R = √(3² + 4²) = 5 N (Option A).', expRu: 'Шаг 1: R = √(3² + 4²) = 5 Н (вариант A).' }
                ]
            }
        ]
    };

    window.OFFICIAL_SAMPLE_TEST = officialTest;
    window.CentsDB = {
        simulations: sims,
        officialSampleTest: officialTest
    };
})();