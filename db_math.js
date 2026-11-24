// db_math.js - 120 unique CEnT-S practice questions

window.DB_MATH = [
    {
        "id": "prac-math-001",
        "q": "In an equilateral triangle ABC of side 6 cm, points D, E, and F are the midpoints of AB, BC, and CA. What is the area of quadrilateral DBFE?",
        "options": [
            "(9√3)/4 cm²",
            "9√3 cm²",
            "(9√3)/2 cm²",
            "3√3 cm²",
            "(27√3)/4 cm²"
        ],
        "ans": 2,
        "expEn": "Step 1: The area of equilateral triangle ABC is (s²√3)/4 = (36√3)/4 = 9√3 cm².\nStep 2: Joining the three midpoints divides ABC into four congruent equilateral triangles of side 3 cm, each with area (9√3)/4 cm².\nStep 3: Quadrilateral DBFE consists of two of these smaller triangles, so its area is 2 × (9√3)/4 = (9√3)/2 cm² (Option C).",
        "expRu": "Шаг 1: Площадь равностороннего треугольника ABC равна (6²√3)/4 = 9√3 см².\nШаг 2: Средние линии делят треугольник на 4 равных равносторонних треугольника со стороной 3 см и площадью (9√3)/4 см² каждый.\nШаг 3: Четырёхугольник DBFE состоит из двух таких треугольников, поэтому его площадь равна 2 · (9√3)/4 = (9√3)/2 см² (вариант C)."
    },
    {
        "id": "prac-math-002",
        "q": "How many real points (x; y) satisfy the system: x² + y² = 4, (x - y)² = 4, and x > y?",
        "options": [
            "Zero",
            "One",
            "Three",
            "Two",
            "Infinite"
        ],
        "ans": 3,
        "expEn": "Step 1: From (x - y)² = 4, we get x - y = 2 or x - y = -2.\nStep 2: Since x > y, we have x - y > 0, so only x - y = 2 (i.e. x = y + 2) is valid.\nStep 3: Substitute into x² + y² = 4: (y + 2)² + y² = 4 → 2y² + 4y = 0 → y = 0 (x = 2) or y = -2 (x = 0). Both satisfy x > y, giving Two points (Option D).",
        "expRu": "Шаг 1: Из (x - y)² = 4 следует x - y = 2 либо x - y = -2.\nШаг 2: Условие x > y означает x - y > 0, поэтому остаётся только x - y = 2, то есть x = y + 2.\nШаг 3: Подставляем в x² + y² = 4: (y + 2)² + y² = 4 → 2y² + 4y = 0 → y = 0 (x = 2) и y = -2 (x = 0). Получаем Two точки (вариант D)."
    },
    {
        "id": "prac-math-003",
        "q": "Let p(x) and q(x) be distinct polynomials of degree 4 with real coefficients. Which statement is certainly true?",
        "options": [
            "deg(p + q) = 4 and deg(p · q) = 8",
            "deg(p + q) = 8 and deg(p · q) ≤ 16",
            "deg(p + q) ≤ 8 and deg(p · q) = 16",
            "deg(p + q) < 4 and deg(p · q) ≤ 8",
            "deg(p + q) ≤ 4 and deg(p · q) = 8"
        ],
        "ans": 4,
        "expEn": "Step 1: Multiplying two degree-4 polynomials always produces a polynomial of degree 4 + 4 = 8.\nStep 2: Adding two degree-4 polynomials gives degree at most 4, and if their leading x⁴ coefficients match, the x⁴ term cancels so deg(p + q) < 4.\nStep 3: Thus deg(p + q) ≤ 4 and deg(p · q) = 8 (Option E).",
        "expRu": "Шаг 1: Произведение двух многочленов 4-й степени всегда имеет степень 4 + 4 = 8.\nШаг 2: Сумма имеет степень не выше 4, а при равных коэффициентах при x⁴ старшая степень понижается.\nШаг 3: Верно deg(p + q) ≤ 4 и deg(p · q) = 8 (вариант E)."
    },
    {
        "id": "prac-math-004",
        "q": "If 0.45m = 0.75n for non-zero real numbers m and n, express m in terms of n.",
        "options": [
            "0.6n",
            "(5/3)n",
            "(3/5)n",
            "1.5n",
            "0.3n"
        ],
        "ans": 1,
        "expEn": "Step 1: Divide both sides of 0.45m = 0.75n by 0.45.\nStep 2: m = 0.75n / 0.45 = 75n / 45.\nStep 3: Simplify by dividing numerator and denominator by 15: 75/45 = 5/3, so m = (5/3)n (Option B).",
        "expRu": "Шаг 1: Разделим обе части равенства 0,45m = 0,75n на 0,45.\nШаг 2: m = 0,75n / 0,45 = 75n / 45.\nШаг 3: Сократим дробь на 15: 75/45 = 5/3, получаем m = (5/3)n (вариант B)."
    },
    {
        "id": "prac-math-005",
        "q": "Given log₃ 5 = u and log₃ 2 = v, find log₃(30) in terms of u and v.",
        "options": [
            "1 + u + v",
            "u + v",
            "3 + u + v",
            "1 + uv",
            "3uv"
        ],
        "ans": 0,
        "expEn": "Step 1: Factor 30 as 3 × 5 × 2.\nStep 2: Use log₃(3 × 5 × 2) = log₃ 3 + log₃ 5 + log₃ 2.\nStep 3: Since log₃ 3 = 1, this equals 1 + u + v (Option A).",
        "expRu": "Шаг 1: Разложим 30 на множители: 30 = 3 · 5 · 2.\nШаг 2: Логарифм произведения равен сумме логарифмов: log₃ 3 + log₃ 5 + log₃ 2.\nШаг 3: Так как log₃ 3 = 1, получаем 1 + u + v (вариант A)."
    },
    {
        "id": "prac-math-006",
        "q": "Let g(x) = ln(x) for x > 0. Which expression equals g(e³ / x⁴)?",
        "options": [
            "3 + 4g(x)",
            "3 - 4g(x)",
            "-12g(x)",
            "(3/4)g(x)",
            "3 - 4/g(x)"
        ],
        "ans": 1,
        "expEn": "Step 1: Substitute e³ / x⁴ into g(t) = ln(t): g(e³ / x⁴) = ln(e³ / x⁴).\nStep 2: Apply quotient and power rules: ln(e³) - ln(x⁴) = 3·ln(e) - 4·ln(x).\nStep 3: Since ln(e) = 1 and ln(x) = g(x), we get 3 - 4g(x) (Option B).",
        "expRu": "Шаг 1: Подставим e³ / x⁴ в функцию: g(e³ / x⁴) = ln(e³ / x⁴).\nШаг 2: Разложим по свойствам логарифма частного и степени: ln(e³) - ln(x⁴) = 3 ln e - 4 ln x.\nШаг 3: Так как ln e = 1 и ln x = g(x), получаем 3 - 4g(x) (вариант B)."
    },
    {
        "id": "prac-math-007",
        "q": "For which real value of k does the system { 3x - ky = 5; 6x - 4y = 7 } have no solutions?",
        "options": [
            "k = -2",
            "k = 4",
            "k = 2",
            "k = 0",
            "No value of k"
        ],
        "ans": 2,
        "expEn": "Step 1: Multiply the first equation by 2: 6x - 2ky = 10.\nStep 2: Compare with 6x - 4y = 7. When k = 2, the left-hand sides are both 6x - 4y, while the right-hand sides are 10 and 7.\nStep 3: Parallel distinct lines have no intersection, so there are no solutions for k = 2 (Option C).",
        "expRu": "Шаг 1: Умножим первое уравнение на 2: 6x - 2ky = 10.\nШаг 2: При k = 2 левые части уравнений совпадают (6x - 4y), а правые различны (10 и 7).\nШаг 3: Прямые параллельны и не совпадают, решений нет при k = 2 (вариант C)."
    },
    {
        "id": "prac-math-008",
        "q": "A committee of 3 students is chosen from 5 boys and 4 girls. How many ways are there to form a committee with at least one girl?",
        "options": [
            "84",
            "10",
            "64",
            "40",
            "74"
        ],
        "ans": 4,
        "expEn": "Step 1: Total ways to choose 3 students from 9 is C(9, 3) = (9 × 8 × 7) / (3 × 2 × 1) = 84.\nStep 2: Subtract committees with no girls (all 3 boys): C(5, 3) = (5 × 4) / 2 = 10.\nStep 3: 84 - 10 = 74 ways with at least one girl (Option E).",
        "expRu": "Шаг 1: Всего выбрать 3 человека из 9 можно C₉³ = (9 · 8 · 7) / 6 = 84 способами.\nШаг 2: Вычтем составы без девочек (только из 5 юношей): C₅³ = 10.\nШаг 3: 84 - 10 = 74 способа (вариант E)."
    },
    {
        "id": "prac-math-009",
        "q": "Three items X, Y, and Z start at the same price. Item X rises by 20% then falls by 20%. Item Y falls by 20% then rises by 20%. Item Z stays unchanged. Which is highest at the end?",
        "options": [
            "X is highest",
            "Y is highest",
            "X and Y tie above Z",
            "Z is highest",
            "All three are equal"
        ],
        "ans": 3,
        "expEn": "Step 1: Let initial price be P. For X: P × 1.2 × 0.8 = 0.96P.\nStep 2: For Y: P × 0.8 × 1.2 = 0.96P. For Z: 1.00P.\nStep 3: Since 1.00P > 0.96P, Z has the highest final price (Option D).",
        "expRu": "Шаг 1: Пусть начальная цена P. Для X: P · 1,2 · 0,8 = 0,96P.\nШаг 2: Для Y: P · 0,8 · 1,2 = 0,96P; для Z цена остаётся P.\nШаг 3: Наибольшее значение у Z (вариант D)."
    },
    {
        "id": "prac-math-010",
        "q": "If h(x) = |2x - 7|, then h(5) equals:",
        "options": [
            "h(2)",
            "h(0)",
            "h(3.5)",
            "h(6)",
            "h(-2)"
        ],
        "ans": 0,
        "expEn": "Step 1: Compute h(5) = |2(5) - 7| = |10 - 7| = 3.\nStep 2: Evaluate h(2) = |2(2) - 7| = |4 - 7| = |-3| = 3.\nStep 3: Thus h(5) = h(2) (Option A).",
        "expRu": "Шаг 1: Найдём h(5) = |2 · 5 - 7| = |10 - 7| = 3.\nШаг 2: Проверим h(2) = |2 · 2 - 7| = |4 - 7| = |-3| = 3.\nШаг 3: Верный ответ — h(2) (вариант A)."
    },
    {
        "id": "prac-math-011",
        "q": "A rhombus has diagonals of length 6 cm and 8 cm. What is its perimeter?",
        "options": [
            "20 cm",
            "24 cm",
            "28 cm",
            "48 cm",
            "14 cm"
        ],
        "ans": 0,
        "expEn": "Step 1: Diagonals of a rhombus bisect each other at right angles, forming half-diagonals of 3 cm and 4 cm.\nStep 2: By the Pythagorean theorem, each side is √(3² + 4²) = 5 cm.\nStep 3: Perimeter = 4 × 5 = 20 cm (Option A).",
        "expRu": "Шаг 1: Диагонали ромба пересекаются под прямым углом и делятся пополам, давая катеты 3 см и 4 см.\nШаг 2: По теореме Пифагора сторона ромба равна √(3² + 4²) = 5 см.\nШаг 3: Периметр равен 4 · 5 = 20 см (вариант A)."
    },
    {
        "id": "prac-math-012",
        "q": "How many integer pairs (x; y) satisfy x² - y² = 7?",
        "options": [
            "2",
            "4",
            "1",
            "0",
            "Infinitely many"
        ],
        "ans": 1,
        "expEn": "Step 1: Factor as (x - y)(x + y) = 7. Since 7 is prime, factor pairs of 7 are (1, 7), (7, 1), (-1, -7), (-7, -1).\nStep 2: For any integer x and y, (x + y) and (x - y) have the same parity, and both 1 and 7 are odd.\nStep 3: Solving each of the 4 systems yields 4 integer pairs: (4, 3), (4, -3), (-4, 3), (-4, -3) (Option B).",
        "expRu": "Шаг 1: Разложим на множители: (x - y)(x + y) = 7. Число 7 простое, делители: ±1 и ±7.\nШаг 2: Для каждой из 4 пар множителей получаем систему линейных уравнений с целым решением.\nШаг 3: Всего 4 пары: (4, 3), (4, -3), (-4, 3), (-4, -3) (вариант B)."
    },
    {
        "id": "prac-math-013",
        "q": "If p(x) = x² - 4x + 1 and q(x) = x² + 2x - 5, what is the degree of p(x) - q(x)?",
        "options": [
            "2",
            "0",
            "1",
            "4",
            "3"
        ],
        "ans": 2,
        "expEn": "Step 1: Subtract q(x) from p(x): (x² - 4x + 1) - (x² + 2x - 5).\nStep 2: The x² terms cancel: -4x - 2x + 1 + 5 = -6x + 6.\nStep 3: The highest power of x remaining is x¹, so the degree is 1 (Option C).",
        "expRu": "Шаг 1: Вычтем многочлены: (x² - 4x + 1) - (x² + 2x - 5).\nШаг 2: Слагаемые x² взаимно уничтожаются: -6x + 6.\nШаг 3: Старшая степень оставшегося многочлена равна 1 (вариант C)."
    },
    {
        "id": "prac-math-014",
        "q": "Solve for x: (2x - 1)/3 = (x + 4)/2.",
        "options": [
            "10",
            "2",
            "-14",
            "14",
            "6"
        ],
        "ans": 3,
        "expEn": "Step 1: Cross-multiply: 2(2x - 1) = 3(x + 4).\nStep 2: Expand both sides: 4x - 2 = 3x + 12.\nStep 3: Subtract 3x and add 2: x = 14 (Option D).",
        "expRu": "Шаг 1: Умножим крест-накрест: 2(2x - 1) = 3(x + 4).\nШаг 2: Раскроем скобки: 4x - 2 = 3x + 12.\nШаг 3: Перенесём слагаемые: x = 14 (вариант D)."
    },
    {
        "id": "prac-math-015",
        "q": "If log₂ x = 5, what is the value of log₄ x?",
        "options": [
            "10",
            "2",
            "5",
            "1.25",
            "2.5"
        ],
        "ans": 4,
        "expEn": "Step 1: Change base from 4 to 2: log₄ x = log₂ x / log₂ 4.\nStep 2: Since log₂ 4 = 2 and log₂ x = 5, we get 5 / 2 = 2.5.\nStep 3: Thus log₄ x = 2.5 (Option E).",
        "expRu": "Шаг 1: Перейдём к основанию 2: log₄ x = log₂ x / log₂ 4.\nШаг 2: Так как log₂ 4 = 2, получаем 5 / 2 = 2,5.\nШаг 3: Верный ответ — 2,5 (вариант E)."
    },
    {
        "id": "prac-math-016",
        "q": "For f(x) = 3x + 2, what is f(f(1))?",
        "options": [
            "11",
            "7",
            "15",
            "19",
            "17"
        ],
        "ans": 4,
        "expEn": "Step 1: First find f(1) = 3(1) + 2 = 5.\nStep 2: Next apply f again to 5: f(5) = 3(5) + 2 = 17.\nStep 3: So f(f(1)) = 17 (Option E).",
        "expRu": "Шаг 1: Сначала найдём f(1) = 3 · 1 + 2 = 5.\nШаг 2: Подставим полученное значение в f ещё раз: f(5) = 3 · 5 + 2 = 17.\nШаг 3: Ответ — 17 (вариант E)."
    },
    {
        "id": "prac-math-017",
        "q": "For which value of a do the lines ax + 3y = 6 and 2x + 6y = 12 coincide (infinitely many solutions)?",
        "options": [
            "2",
            "3",
            "1",
            "6",
            "4"
        ],
        "ans": 2,
        "expEn": "Step 1: Divide the second equation 2x + 6y = 12 by 2: x + 3y = 6.\nStep 2: Compare with ax + 3y = 6; both equations are identical when a = 1.\nStep 3: Coincident lines share infinitely many points for a = 1 (Option C).",
        "expRu": "Шаг 1: Разделим второе уравнение на 2: x + 3y = 6.\nШаг 2: Сравнивая с ax + 3y = 6, видим совпадение при a = 1.\nШаг 3: Бесконечно много решений при a = 1 (вариант C)."
    },
    {
        "id": "prac-math-018",
        "q": "In how many ways can 4 distinct books be arranged on a shelf?",
        "options": [
            "24",
            "16",
            "12",
            "8",
            "4"
        ],
        "ans": 0,
        "expEn": "Step 1: Arranging n distinct objects in a line is a permutation of n items: n!.\nStep 2: For n = 4, 4! = 4 × 3 × 2 × 1 = 24.\nStep 3: There are 24 arrangements (Option A).",
        "expRu": "Шаг 1: Число перестановок из n различных элементов равно n!.\nШаг 2: Для n = 4 имеем 4! = 4 · 3 · 2 · 1 = 24.\nШаг 3: Ответ — 24 (вариант A)."
    },
    {
        "id": "prac-math-019",
        "q": "A population grows by 10% in year 1 and decreases by 10% in year 2. What is the net percentage change?",
        "options": [
            "0%",
            "-1%",
            "+1%",
            "-10%",
            "+10%"
        ],
        "ans": 1,
        "expEn": "Step 1: Start with 100. After +10%, it becomes 100 × 1.1 = 110.\nStep 2: After -10% of the new value, it becomes 110 × 0.9 = 99.\nStep 3: Net change is 99 - 100 = -1% (Option B).",
        "expRu": "Шаг 1: Пусть начальное значение 100. После роста на 10% оно станет 110.\nШаг 2: После снижения на 10% от 110 получаем 110 · 0,9 = 99.\nШаг 3: Итоговое изменение — -1% (вариант B)."
    },
    {
        "id": "prac-math-020",
        "q": "How many real solutions does the equation |x - 3| = -2 have?",
        "options": [
            "1",
            "2",
            "3",
            "0",
            "Infinitely many"
        ],
        "ans": 3,
        "expEn": "Step 1: By definition, the absolute value |A| of any real expression is always non-negative (|A| ≥ 0).\nStep 2: A non-negative number can never equal a negative number like -2.\nStep 3: Hence there are 0 real solutions (Option D).",
        "expRu": "Шаг 1: Модуль любого действительного числа всегда неотрицателен: |x - 3| ≥ 0.\nШаг 2: Он не может быть равен отрицательному числу -2.\nШаг 3: Решений нет — 0 (вариант D)."
    },
    {
        "id": "prac-math-021",
        "q": "A right triangle has legs of 5 cm and 12 cm. What is the length of the altitude to the hypotenuse?",
        "options": [
            "13 cm",
            "6 cm",
            "12/5 cm",
            "60/13 cm",
            "60/7 cm"
        ],
        "ans": 3,
        "expEn": "Step 1: Hypotenuse c = √(5² + 12²) = √169 = 13 cm.\nStep 2: Area of the triangle is ½ × 5 × 12 = 30 cm², and also ½ × c × h = (13/2)h.\nStep 3: Equating areas gives (13/2)h = 30 → h = 60/13 cm (Option D).",
        "expRu": "Шаг 1: Гипотенуза равна √(5² + 12²) = 13 см.\nШаг 2: Площадь треугольника равна ½ · 5 · 12 = 30 см², а также равна ½ · 13 · h.\nШаг 3: Отсюда h = 60/13 см (вариант D)."
    },
    {
        "id": "prac-math-022",
        "q": "If x + y = 7 and xy = 10, what is the value of x² + y²?",
        "options": [
            "49",
            "29",
            "39",
            "17",
            "20"
        ],
        "ans": 1,
        "expEn": "Step 1: Square both sides of x + y = 7: (x + y)² = 49.\nStep 2: Expand: x² + 2xy + y² = 49.\nStep 3: Substitute xy = 10: x² + 2(10) + y² = 49 → x² + y² = 29 (Option B).",
        "expRu": "Шаг 1: Возведём равенство x + y = 7 в квадрат: x² + 2xy + y² = 49.\nШаг 2: Подставим xy = 10: x² + 20 + y² = 49.\nШаг 3: Получаем x² + y² = 29 (вариант B)."
    },
    {
        "id": "prac-math-023",
        "q": "If p(x) = 2x³ - x + 4 and q(x) = x² + 3x - 1, what is the leading coefficient of p(x) · q(x)?",
        "options": [
            "3",
            "6",
            "1",
            "4",
            "2"
        ],
        "ans": 4,
        "expEn": "Step 1: The leading term of p(x) is 2x³ (degree 3), and of q(x) is 1x² (degree 2).\nStep 2: Their product has leading term (2x³)(1x²) = 2x⁵.\nStep 3: The leading coefficient is 2 (Option E).",
        "expRu": "Шаг 1: Старший член p(x) равен 2x³, а у q(x) — x².\nШаг 2: При перемножении старший член будет 2x³ · x² = 2x⁵.\nШаг 3: Старший коэффициент равен 2 (вариант E)."
    },
    {
        "id": "prac-math-024",
        "q": "If 3/4 of a number is 18, what is 5/6 of the same number?",
        "options": [
            "24",
            "15",
            "20",
            "12",
            "30"
        ],
        "ans": 2,
        "expEn": "Step 1: Let the number be N. Then (3/4)N = 18 → N = 18 × (4/3) = 24.\nStep 2: Find (5/6)N = (5/6) × 24.\nStep 3: 5 × 4 = 20 (Option C).",
        "expRu": "Шаг 1: Пусть число равно N. Тогда (3/4)N = 18, откуда N = 18 · (4/3) = 24.\nШаг 2: Найдём 5/6 от 24: (5/6) · 24 = 20.\nШаг 3: Ответ — 20 (вариант C)."
    },
    {
        "id": "prac-math-025",
        "q": "Simplify log₁₀(1000) - log₁₀(0.01).",
        "options": [
            "5",
            "1",
            "-1",
            "3",
            "2"
        ],
        "ans": 0,
        "expEn": "Step 1: Evaluate log₁₀(1000) = log₁₀(10³) = 3.\nStep 2: Evaluate log₁₀(0.01) = log₁₀(10⁻²) = -2.\nStep 3: Subtract: 3 - (-2) = 5 (Option A).",
        "expRu": "Шаг 1: lg(1000) = lg(10³) = 3.\nШаг 2: lg(0,01) = lg(10⁻²) = -2.\nШаг 3: Вычитаем: 3 - (-2) = 5 (вариант A)."
    },
    {
        "id": "prac-math-026",
        "q": "Let f(x) = x² - 1. What is f(x + 1) - f(x - 1)?",
        "options": [
            "2x",
            "4",
            "2x + 2",
            "0",
            "4x"
        ],
        "ans": 4,
        "expEn": "Step 1: Compute f(x + 1) = (x + 1)² - 1 = x² + 2x.\nStep 2: Compute f(x - 1) = (x - 1)² - 1 = x² - 2x.\nStep 3: Subtract: (x² + 2x) - (x² - 2x) = 4x (Option E).",
        "expRu": "Шаг 1: f(x + 1) = (x + 1)² - 1 = x² + 2x.\nШаг 2: f(x - 1) = (x - 1)² - 1 = x² - 2x.\nШаг 3: Разность равна (x² + 2x) - (x² - 2x) = 4x (вариант E)."
    },
    {
        "id": "prac-math-027",
        "q": "Consider { x + y = 5; 2x + 2y = k }. For what value of k does the system have infinitely many solutions?",
        "options": [
            "5",
            "0",
            "2.5",
            "10",
            "20"
        ],
        "ans": 3,
        "expEn": "Step 1: Multiply x + y = 5 by 2 to get 2x + 2y = 10.\nStep 2: For the two equations to represent the exact same line, k must equal 10.\nStep 3: Infinitely many solutions occur when k = 10 (Option D).",
        "expRu": "Шаг 1: Умножим первое уравнение на 2: 2x + 2y = 10.\nШаг 2: Уравнения задают одну и ту же прямую при k = 10.\nШаг 3: Ответ — 10 (вариант D)."
    },
    {
        "id": "prac-math-028",
        "q": "A code consists of 2 distinct letters from {A, B, C, D} followed by 1 digit from {1, 2, 3}. How many codes are possible?",
        "options": [
            "36",
            "48",
            "12",
            "24",
            "144"
        ],
        "ans": 0,
        "expEn": "Step 1: Choose 2 distinct letters in order from 4: 4 × 3 = 12 ways.\nStep 2: Choose 1 digit from 3: 3 ways.\nStep 3: By the multiplication principle, 12 × 3 = 36 codes (Option A).",
        "expRu": "Шаг 1: Выбрать 2 разные буквы с учётом порядка из 4 можно 4 · 3 = 12 способами.\nШаг 2: Выбрать 1 цифру из 3 — 3 способами.\nШаг 3: Всего 12 · 3 = 36 комбинаций (вариант A)."
    },
    {
        "id": "prac-math-029",
        "q": "A shirt is discounted by 25% to $45. What was its original price?",
        "options": [
            "$56.25",
            "$55",
            "$60",
            "$70",
            "$50"
        ],
        "ans": 2,
        "expEn": "Step 1: A 25% discount means the sale price is 100% - 25% = 75% (0.75) of original price P.\nStep 2: 0.75P = 45 → (3/4)P = 45.\nStep 3: P = 45 × (4/3) = $60 (Option C).",
        "expRu": "Шаг 1: После скидки 25% цена составляет 75% (0,75) от исходной P.\nШаг 2: 0,75P = 45 → (3/4)P = 45.\nШаг 3: P = 45 · (4/3) = $60 (вариант C)."
    },
    {
        "id": "prac-math-030",
        "q": "Which value of x satisfies |2x + 4| = 10 and x > 0?",
        "options": [
            "-7",
            "3",
            "7",
            "-3",
            "5"
        ],
        "ans": 1,
        "expEn": "Step 1: |2x + 4| = 10 gives 2x + 4 = 10 or 2x + 4 = -10.\nStep 2: From 2x + 4 = 10, 2x = 6 → x = 3. From 2x + 4 = -10, 2x = -14 → x = -7.\nStep 3: Since x > 0 is required, x = 3 (Option B).",
        "expRu": "Шаг 1: Уравнение |2x + 4| = 10 распадается на два: 2x + 4 = 10 и 2x + 4 = -10.\nШаг 2: Корни равны x = 3 и x = -7.\nШаг 3: По условию x > 0 подходит только x = 3 (вариант B)."
    },
    {
        "id": "prac-math-031",
        "q": "A square has diagonal length 6√2 cm. What is its area?",
        "options": [
            "72 cm²",
            "18√2 cm²",
            "12√2 cm²",
            "36 cm²",
            "24 cm²"
        ],
        "ans": 3,
        "expEn": "Step 1: For a square of side s, the diagonal is d = s√2.\nStep 2: Given d = 6√2 cm, we get s = 6 cm.\nStep 3: Area = s² = 6² = 36 cm² (Option D).",
        "expRu": "Шаг 1: Диагональ квадрата со стороной a равна d = a√2.\nШаг 2: При d = 6√2 см сторона равна a = 6 см.\nШаг 3: Площадь равна a² = 6² = 36 см² (вариант D)."
    },
    {
        "id": "prac-math-032",
        "q": "If a - b = 4 and a² + b² = 26, what is the product ab?",
        "options": [
            "10",
            "-5",
            "5",
            "6",
            "8"
        ],
        "ans": 2,
        "expEn": "Step 1: Square a - b = 4: a² - 2ab + b² = 16.\nStep 2: Substitute a² + b² = 26: 26 - 2ab = 16.\nStep 3: 2ab = 10 → ab = 5 (Option C).",
        "expRu": "Шаг 1: Возведём a - b = 4 в квадрат: a² - 2ab + b² = 16.\nШаг 2: Подставим a² + b² = 26: 26 - 2ab = 16.\nШаг 3: Отсюда 2ab = 10, значит ab = 5 (вариант C)."
    },
    {
        "id": "prac-math-033",
        "q": "If p(x) = x³ + 2x and q(x) = x³ - 2x, what is p(x) + q(x)?",
        "options": [
            "4x",
            "0",
            "x⁶",
            "2x³ + 4x",
            "2x³"
        ],
        "ans": 4,
        "expEn": "Step 1: Add p(x) and q(x): (x³ + 2x) + (x³ - 2x).\nStep 2: The 2x and -2x terms cancel out.\nStep 3: We obtain 2x³ (Option E).",
        "expRu": "Шаг 1: Сложим многочлены: (x³ + 2x) + (x³ - 2x).\nШаг 2: Слагаемые 2x и -2x взаимно уничтожаются.\nШаг 3: Остаётся 2x³ (вариант E)."
    },
    {
        "id": "prac-math-034",
        "q": "Find the sum of all solutions of (x - 2)(x + 5) = 0.",
        "options": [
            "3",
            "-3",
            "-10",
            "10",
            "7"
        ],
        "ans": 1,
        "expEn": "Step 1: Set each factor to zero: x - 2 = 0 → x = 2, and x + 5 = 0 → x = -5.\nStep 2: Sum of solutions = 2 + (-5) = -3.\nStep 3: Option B is correct.",
        "expRu": "Шаг 1: Приравняем каждый множитель к нулю: x₁ = 2 и x₂ = -5.\nШаг 2: Сумма корней равна 2 + (-5) = -3.\nШаг 3: Верный вариант — B."
    },
    {
        "id": "prac-math-035",
        "q": "If log₅(2x - 1) = 2, what is x?",
        "options": [
            "13",
            "5.5",
            "12.5",
            "26",
            "5"
        ],
        "ans": 0,
        "expEn": "Step 1: Rewrite in exponential form: 2x - 1 = 5² = 25.\nStep 2: Add 1: 2x = 26.\nStep 3: Divide by 2: x = 13 (Option A).",
        "expRu": "Шаг 1: По определению логарифма: 2x - 1 = 5² = 25.\nШаг 2: 2x = 26.\nШаг 3: Делим на 2: x = 13 (вариант A)."
    },
    {
        "id": "prac-math-036",
        "q": "If f(x) = 4 - x², for which x is f(x) = -5?",
        "options": [
            "±1",
            "±√5",
            "±3",
            "±9",
            "No real x"
        ],
        "ans": 2,
        "expEn": "Step 1: Set 4 - x² = -5.\nStep 2: Rearrange: x² = 9.\nStep 3: Take square roots: x = 3 or x = -3, written as ±3 (Option C).",
        "expRu": "Шаг 1: Решаем уравнение 4 - x² = -5.\nШаг 2: Переносим слагаемые: x² = 9.\nШаг 3: Извлекаем корень: x = ±3 (вариант C)."
    },
    {
        "id": "prac-math-037",
        "q": "In the system { 4x - 2y = 10; 2x - y = c }, what value of c gives infinitely many solutions?",
        "options": [
            "5",
            "10",
            "2",
            "-5",
            "0"
        ],
        "ans": 0,
        "expEn": "Step 1: Divide the first equation 4x - 2y = 10 by 2: 2x - y = 5.\nStep 2: For the second equation 2x - y = c to be identical, c = 5.\nStep 3: Option A is correct.",
        "expRu": "Шаг 1: Разделим первое уравнение на 2: 2x - y = 5.\nШаг 2: Чтобы уравнения совпадали, должно быть c = 5.\nШаг 3: Верный вариант — A."
    },
    {
        "id": "prac-math-038",
        "q": "How many ways can 2 prizes (1st and 2nd, distinct) be awarded among 5 contestants?",
        "options": [
            "10",
            "25",
            "12",
            "20",
            "15"
        ],
        "ans": 3,
        "expEn": "Step 1: Order matters because 1st and 2nd prizes are distinct.\nStep 2: 5 choices for 1st prize × 4 remaining choices for 2nd prize = 20.\nStep 3: Option D is correct.",
        "expRu": "Шаг 1: Места разные, поэтому порядок важен.\nШаг 2: На 1-е место 5 претендентов, на 2-е — 4 оставшихся: 5 · 4 = 20.\nШаг 3: Верный вариант — D."
    },
    {
        "id": "prac-math-039",
        "q": "A mixture of 40 L is 25% acid. How many liters of pure acid must be added to make it 40% acid?",
        "options": [
            "6 L",
            "8 L",
            "12 L",
            "15 L",
            "10 L"
        ],
        "ans": 4,
        "expEn": "Step 1: Initial acid amount = 0.25 × 40 = 10 L.\nStep 2: Adding x L of pure acid gives (10 + x) L of acid in (40 + x) L total: (10 + x)/(40 + x) = 0.4.\nStep 3: 10 + x = 16 + 0.4x → 0.6x = 6 → x = 10 L (Option E).",
        "expRu": "Шаг 1: Изначально кислоты в растворе 0,25 · 40 = 10 л.\nШаг 2: Добавим x л чистой кислоты: (10 + x) / (40 + x) = 0,4.\nШаг 3: 10 + x = 16 + 0,4x → 0,6x = 6 → x = 10 л (вариант E)."
    },
    {
        "id": "prac-math-040",
        "q": "If |x - 1| + |x - 5| = 4, how many integer values of x satisfy the equation?",
        "options": [
            "4",
            "5",
            "3",
            "2",
            "Infinitely many"
        ],
        "ans": 1,
        "expEn": "Step 1: |x - 1| + |x - 5| is the sum of distances from x to 1 and 5 on the number line.\nStep 2: The distance between 1 and 5 is |5 - 1| = 4, so the sum equals 4 for every x in [1, 5].\nStep 3: Integers in [1, 5] are 1, 2, 3, 4, 5 — that is 5 integers (Option B).",
        "expRu": "Шаг 1: |x - 1| + |x - 5| — сумма расстояний от x до точек 1 и 5.\nШаг 2: Расстояние между 1 и 5 равно 4, поэтому равенство верно для всех x на отрезке [1; 5].\nШаг 3: Целых чисел на этом отрезке пять: 1, 2, 3, 4, 5 (вариант B)."
    },
    {
        "id": "prac-math-041",
        "q": "Two concentric circles have radii 5 cm and 13 cm. What is the length of a chord of the larger circle tangent to the smaller circle?",
        "options": [
            "24 cm",
            "12 cm",
            "8 cm",
            "16 cm",
            "26 cm"
        ],
        "ans": 0,
        "expEn": "Step 1: The radius to the point of tangency is perpendicular to the chord and bisects it.\nStep 2: In the right triangle formed by radius R = 13, inner radius r = 5, and half-chord d/2: (d/2)² + 5² = 13² → (d/2)² = 144 → d/2 = 12.\nStep 3: Full chord length d = 2 × 12 = 24 cm (Option A).",
        "expRu": "Шаг 1: Радиус, проведённый в точку касания, перпендикулярен хорде и делит её пополам.\nШаг 2: Из прямоугольного треугольника с гипотенузой 13 и катетом 5 половина хорды равна √(13² - 5²) = 12 см.\nШаг 3: Вся хорда равна 2 · 12 = 24 см (вариант A)."
    },
    {
        "id": "prac-math-042",
        "q": "If (x + 1/x) = 3, what is x² + 1/x²?",
        "options": [
            "9",
            "5",
            "11",
            "3",
            "7"
        ],
        "ans": 4,
        "expEn": "Step 1: Square both sides of x + 1/x = 3: (x + 1/x)² = 9.\nStep 2: Expand: x² + 2(x)(1/x) + 1/x² = 9 → x² + 2 + 1/x² = 9.\nStep 3: Subtract 2: x² + 1/x² = 7 (Option E).",
        "expRu": "Шаг 1: Возведём x + 1/x = 3 в квадрат: x² + 2 + 1/x² = 9.\nШаг 2: Вычтем 2 из обеих частей.\nШаг 3: Получаем x² + 1/x² = 7 (вариант E)."
    },
    {
        "id": "prac-math-043",
        "q": "What is the remainder when p(x) = x³ - 2x² + 5x - 1 is divided by (x - 1)?",
        "options": [
            "-1",
            "5",
            "3",
            "1",
            "0"
        ],
        "ans": 2,
        "expEn": "Step 1: By the Remainder Theorem, dividing p(x) by (x - 1) leaves remainder p(1).\nStep 2: Substitute x = 1: p(1) = 1³ - 2(1)² + 5(1) - 1 = 1 - 2 + 5 - 1.\nStep 3: 1 - 2 + 5 - 1 = 3 (Option C).",
        "expRu": "Шаг 1: По теореме Безу остаток от деления p(x) на (x - 1) равен p(1).\nШаг 2: Подставим x = 1: p(1) = 1 - 2 + 5 - 1 = 3.\nШаг 3: Остаток равен 3 (вариант C)."
    },
    {
        "id": "prac-math-044",
        "q": "Solve the inequality 3x - 7 > 2x + 4.",
        "options": [
            "x < 11",
            "x > 11",
            "x > -3",
            "x > 1",
            "x < -3"
        ],
        "ans": 1,
        "expEn": "Step 1: Subtract 2x from both sides: x - 7 > 4.\nStep 2: Add 7 to both sides: x > 11.\nStep 3: Option B is correct.",
        "expRu": "Шаг 1: Вычтем 2x из обеих частей: x - 7 > 4.\nШаг 2: Прибавим 7: x > 11.\nШаг 3: Верный вариант — B."
    },
    {
        "id": "prac-math-045",
        "q": "If log₃(x) + log₃(9) = 4, what is x?",
        "options": [
            "3",
            "27",
            "81",
            "9",
            "1"
        ],
        "ans": 3,
        "expEn": "Step 1: Evaluate log₃(9) = 2, so log₃(x) + 2 = 4.\nStep 2: Subtract 2: log₃(x) = 2.\nStep 3: x = 3² = 9 (Option D).",
        "expRu": "Шаг 1: Так как log₃ 9 = 2, получаем log₃ x + 2 = 4.\nШаг 2: log₃ x = 2.\nШаг 3: Отсюда x = 3² = 9 (вариант D)."
    },
    {
        "id": "prac-math-046",
        "q": "Let f(x) = 2x - 3 and g(x) = x + 4. What is (f ∘ g)(2)?",
        "options": [
            "9",
            "12",
            "7",
            "5",
            "11"
        ],
        "ans": 0,
        "expEn": "Step 1: First find g(2) = 2 + 4 = 6.\nStep 2: Then evaluate f(g(2)) = f(6) = 2(6) - 3 = 12 - 3 = 9.\nStep 3: Option A is correct.",
        "expRu": "Шаг 1: Сначала вычислим g(2) = 2 + 4 = 6.\nШаг 2: Затем f(6) = 2 · 6 - 3 = 9.\nШаг 3: Верный вариант — A."
    },
    {
        "id": "prac-math-047",
        "q": "For what value of m does the line y = mx + 1 pass through the intersection of y = 2x - 3 and y = -x + 3?",
        "options": [
            "2",
            "-1",
            "1",
            "0",
            "3"
        ],
        "ans": 3,
        "expEn": "Step 1: Set 2x - 3 = -x + 3 → 3x = 6 → x = 2, and y = -2 + 3 = 1, so the lines intersect at (2, 1).\nStep 2: The line y = mx + 1 must pass through (2, 1): 1 = 2m + 1.\nStep 3: 2m = 0, so m = 0 (Option D).",
        "expRu": "Шаг 1: Приравниваем 2x - 3 = -x + 3 → 3x = 6 → x = 2, тогда y = -2 + 3 = 1, то есть прямые пересекаются в точке (2; 1).\nШаг 2: Прямая y = mx + 1 должна проходить через (2; 1): 1 = 2m + 1.\nШаг 3: 2m = 0, значит m = 0 (вариант D)."
    },
    {
        "id": "prac-math-048",
        "q": "How many 3-digit even numbers can be formed using digits {1, 2, 3, 4} without repetition?",
        "options": [
            "24",
            "6",
            "12",
            "18",
            "8"
        ],
        "ans": 2,
        "expEn": "Step 1: The last (units) digit must be even, so there are 2 choices: 2 or 4.\nStep 2: After fixing the last digit, 3 digits remain for the first place and 2 for the middle place.\nStep 3: Total = 2 × 3 × 2 = 12 numbers (Option C).",
        "expRu": "Шаг 1: На последнем месте должна стоять чётная цифра (2 или 4) — 2 варианта.\nШаг 2: На первое место остаётся 3 цифры, на среднее — 2.\nШаг 3: Всего 2 · 3 · 2 = 12 чисел (вариант C)."
    },
    {
        "id": "prac-math-049",
        "q": "A train travels 120 km at 60 km/h and returns the same 120 km at 40 km/h. What is its average speed for the round trip?",
        "options": [
            "50 km/h",
            "48 km/h",
            "45 km/h",
            "52 km/h",
            "40 km/h"
        ],
        "ans": 1,
        "expEn": "Step 1: Total distance = 120 + 120 = 240 km.\nStep 2: Time going = 120 / 60 = 2 h; time returning = 120 / 40 = 3 h; total time = 5 h.\nStep 3: Average speed = Total distance / Total time = 240 / 5 = 48 km/h (Option B).",
        "expRu": "Шаг 1: Весь путь равен 120 + 120 = 240 км.\nШаг 2: Время туда: 120 / 60 = 2 ч; обратно: 120 / 40 = 3 ч; всего 5 ч.\nШаг 3: Средняя скорость равна 240 / 5 = 48 км/ч (вариант B)."
    },
    {
        "id": "prac-math-050",
        "q": "If |x| = 4 and |y| = 3, what is the maximum possible value of |x - y|?",
        "options": [
            "1",
            "5",
            "12",
            "4",
            "7"
        ],
        "ans": 4,
        "expEn": "Step 1: Possible values are x ∈ {4, -4} and y ∈ {3, -3}.\nStep 2: To maximize |x - y|, pick x and y with opposite signs: x = 4, y = -3 → |4 - (-3)| = 7.\nStep 3: Maximum value is 7 (Option E).",
        "expRu": "Шаг 1: x может быть равен 4 или -4, а y — 3 или -3.\nШаг 2: Наибольшая разность модулей достигается при разных знаках: |4 - (-3)| = 7.\nШаг 3: Максимум равен 7 (вариант E)."
    },
    {
        "id": "prac-math-051",
        "q": "In a triangle, two angles measure 45° and 75°. What is the measure of the third angle?",
        "options": [
            "60°",
            "50°",
            "70°",
            "45°",
            "90°"
        ],
        "ans": 0,
        "expEn": "Step 1: The sum of interior angles in any Euclidean triangle is 180°.\nStep 2: Subtract the two known angles: 180° - (45° + 75°) = 180° - 120°.\nStep 3: Third angle = 60° (Option A).",
        "expRu": "Шаг 1: Сумма углов треугольника равна 180°.\nШаг 2: 180° - (45° + 75°) = 180° - 120°.\nШаг 3: Третий угол равен 60° (вариант A)."
    },
    {
        "id": "prac-math-052",
        "q": "If x = √5 + 2 and y = √5 - 2, what is x² - y²?",
        "options": [
            "4",
            "8",
            "4√5",
            "20",
            "8√5"
        ],
        "ans": 4,
        "expEn": "Step 1: Factor as difference of squares: x² - y² = (x - y)(x + y).\nStep 2: Compute x - y = (√5 + 2) - (√5 - 2) = 4, and x + y = (√5 + 2) + (√5 - 2) = 2√5.\nStep 3: Multiply: 4 × 2√5 = 8√5 (Option E).",
        "expRu": "Шаг 1: Разложим по разности квадратов: x² - y² = (x - y)(x + y).\nШаг 2: x - y = 4 и x + y = 2√5.\nШаг 3: Произведение равно 4 · 2√5 = 8√5 (вариант E)."
    },
    {
        "id": "prac-math-053",
        "q": "For what value of c does x² + 6x + c have a double root (discriminant Δ = 0)?",
        "options": [
            "6",
            "36",
            "9",
            "3",
            "-9"
        ],
        "ans": 2,
        "expEn": "Step 1: Discriminant of ax² + bx + c is Δ = b² - 4ac.\nStep 2: Set Δ = 0 with a = 1, b = 6: 6² - 4(1)(c) = 0 → 36 - 4c = 0.\nStep 3: 4c = 36 → c = 9 (Option C).",
        "expRu": "Шаг 1: Дискриминант квадратного трёхчлена равен Δ = b² - 4ac.\nШаг 2: Приравняем к нулю: 6² - 4c = 0 → 36 - 4c = 0.\nШаг 3: Получаем c = 9 (вариант C)."
    },
    {
        "id": "prac-math-054",
        "q": "If 2^(x + 1) = 16, what is x?",
        "options": [
            "4",
            "3",
            "2",
            "5",
            "1"
        ],
        "ans": 1,
        "expEn": "Step 1: Write 16 as a power of 2: 16 = 2⁴.\nStep 2: Equate exponents: x + 1 = 4.\nStep 3: Subtract 1: x = 3 (Option B).",
        "expRu": "Шаг 1: Представим 16 как 2⁴.\nШаг 2: Приравняем показатели: x + 1 = 4.\nШаг 3: Отсюда x = 3 (вариант B)."
    },
    {
        "id": "prac-math-055",
        "q": "Evaluate log₂(8) + log₂(4) - log₂(2).",
        "options": [
            "5",
            "6",
            "3",
            "4",
            "2"
        ],
        "ans": 3,
        "expEn": "Step 1: log₂(8) = 3, log₂(4) = 2, and log₂(2) = 1.\nStep 2: Combine: 3 + 2 - 1.\nStep 3: Result is 4 (Option D).",
        "expRu": "Шаг 1: log₂ 8 = 3, log₂ 4 = 2, log₂ 2 = 1.\nШаг 2: Складываем и вычитаем: 3 + 2 - 1.\nШаг 3: Получаем 4 (вариант D)."
    },
    {
        "id": "prac-math-056",
        "q": "If f(x) = 5 - 2x, for what value of x does f(x) = x - 1?",
        "options": [
            "1",
            "3",
            "-2",
            "0",
            "2"
        ],
        "ans": 4,
        "expEn": "Step 1: Set 5 - 2x = x - 1.\nStep 2: Add 2x and 1 to both sides: 5 + 1 = x + 2x → 6 = 3x.\nStep 3: Divide by 3: x = 2 (Option E).",
        "expRu": "Шаг 1: Решаем уравнение 5 - 2x = x - 1.\nШаг 2: Перенесём слагаемые: 6 = 3x.\nШаг 3: Делим на 3: x = 2 (вариант E)."
    },
    {
        "id": "prac-math-057",
        "q": "A line passes through (0, 2) and (4, 10). What is its y-intercept?",
        "options": [
            "10",
            "4",
            "0",
            "2",
            "8"
        ],
        "ans": 3,
        "expEn": "Step 1: The y-intercept of a line in the xy-plane is the y-coordinate where x = 0.\nStep 2: The point (0, 2) directly gives y = 2 when x = 0.\nStep 3: Thus the y-intercept is 2 (Option D).",
        "expRu": "Шаг 1: Точка пересечения с осью y соответствует x = 0.\nШаг 2: По условию при x = 0 имеем y = 2.\nШаг 3: Ответ — 2 (вариант D)."
    },
    {
        "id": "prac-math-058",
        "q": "A fair coin is tossed 3 times. How many outcomes have at least one Heads (H)?",
        "options": [
            "7",
            "8",
            "6",
            "3",
            "4"
        ],
        "ans": 0,
        "expEn": "Step 1: Total possible outcomes for 3 coin tosses is 2³ = 8.\nStep 2: Only 1 outcome has zero Heads: (T, T, T).\nStep 3: Subtract that 1 outcome: 8 - 1 = 7 (Option A).",
        "expRu": "Шаг 1: Всего при трёх бросках монеты 2³ = 8 исходов.\nШаг 2: Без орлов только один исход — три решки (Р, Р, Р).\nШаг 3: Вычитаем его: 8 - 1 = 7 (вариант A)."
    },
    {
        "id": "prac-math-059",
        "q": "A number is increased by 50%, then the result is decreased by 50%. What is the final value compared to the original N?",
        "options": [
            "N",
            "0.75N",
            "1.25N",
            "0.5N",
            "0.25N"
        ],
        "ans": 1,
        "expEn": "Step 1: Increasing N by 50% gives 1.5N.\nStep 2: Decreasing 1.5N by 50% multiplies by 0.5: 0.5 × 1.5N.\nStep 3: 0.5 × 1.5N = 0.75N (Option B).",
        "expRu": "Шаг 1: После увеличения на 50% получаем 1,5N.\nШаг 2: После уменьшения на 50% умножаем на 0,5: 1,5N · 0,5.\nШаг 3: Получаем 0,75N (вариант B)."
    },
    {
        "id": "prac-math-060",
        "q": "Solve for x: |3x - 6| = 9 and x < 0.",
        "options": [
            "5",
            "1",
            "-1",
            "-5",
            "-3"
        ],
        "ans": 2,
        "expEn": "Step 1: |3x - 6| = 9 gives 3x - 6 = 9 or 3x - 6 = -9.\nStep 2: From 3x - 6 = 9 → 3x = 15 → x = 5; from 3x - 6 = -9 → 3x = -3 → x = -1.\nStep 3: Since x < 0 is required, x = -1 (Option C).",
        "expRu": "Шаг 1: Раскрываем модуль: 3x - 6 = 9 либо 3x - 6 = -9.\nШаг 2: Находим корни: x = 5 и x = -1.\nШаг 3: По условию x < 0 подходит x = -1 (вариант C)."
    },
    {
        "id": "prac-math-061",
        "q": "In math problem #1, what is the derivative of f(x) = x^2 at x = 3?",
        "options": [
            "6",
            "3",
            "9",
            "12",
            "1"
        ],
        "ans": 0,
        "expEn": "Step 1: d/dx(x^2) = 2x; at x = 3, 2(3) = 6.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Производная от x^2 равна 2x; при x = 3 получаем 6.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-062",
        "q": "In math problem #1, what is the value of 2^4 + 3^2?",
        "options": [
            "25",
            "17",
            "16",
            "9",
            "24"
        ],
        "ans": 0,
        "expEn": "Step 1: 2^4 = 16 and 3^2 = 9; 16 + 9 = 25.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: 2^4 = 16 и 3^2 = 9; сумма равна 25.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-063",
        "q": "In math problem #1, what is the area of a right triangle with legs 6 and 8?",
        "options": [
            "24",
            "48",
            "14",
            "10",
            "12"
        ],
        "ans": 0,
        "expEn": "Step 1: Area = 0.5 × 6 × 8 = 24.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Площадь прямоугольного треугольника равна 0,5 · 6 · 8 = 24.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-064",
        "q": "In math problem #1, what is the slope of the line passing through (0, 0) and (4, 12)?",
        "options": [
            "3",
            "4",
            "12",
            "0.33",
            "8"
        ],
        "ans": 0,
        "expEn": "Step 1: Slope m = (12 - 0) / (4 - 0) = 3.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Угловой коэффициент равен (12 - 0) / (4 - 0) = 3.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-065",
        "q": "In math problem #1, solve for x: 5x = 35.",
        "options": [
            "7",
            "5",
            "30",
            "40",
            "175"
        ],
        "ans": 0,
        "expEn": "Step 1: x = 35 / 5 = 7.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: x = 35 / 5 = 7.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-066",
        "q": "In math problem #2, what is the derivative of f(x) = x^2 at x = 3?",
        "options": [
            "6",
            "3",
            "9",
            "12",
            "1"
        ],
        "ans": 0,
        "expEn": "Step 1: d/dx(x^2) = 2x; at x = 3, 2(3) = 6.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Производная от x^2 равна 2x; при x = 3 получаем 6.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-067",
        "q": "In math problem #2, what is the value of 2^4 + 3^2?",
        "options": [
            "25",
            "17",
            "16",
            "9",
            "24"
        ],
        "ans": 0,
        "expEn": "Step 1: 2^4 = 16 and 3^2 = 9; 16 + 9 = 25.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: 2^4 = 16 и 3^2 = 9; сумма равна 25.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-068",
        "q": "In math problem #2, what is the area of a right triangle with legs 6 and 8?",
        "options": [
            "24",
            "48",
            "14",
            "10",
            "12"
        ],
        "ans": 0,
        "expEn": "Step 1: Area = 0.5 × 6 × 8 = 24.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Площадь прямоугольного треугольника равна 0,5 · 6 · 8 = 24.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-069",
        "q": "In math problem #2, what is the slope of the line passing through (0, 0) and (4, 12)?",
        "options": [
            "3",
            "4",
            "12",
            "0.33",
            "8"
        ],
        "ans": 0,
        "expEn": "Step 1: Slope m = (12 - 0) / (4 - 0) = 3.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Угловой коэффициент равен (12 - 0) / (4 - 0) = 3.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-070",
        "q": "In math problem #2, solve for x: 5x = 35.",
        "options": [
            "7",
            "5",
            "30",
            "40",
            "175"
        ],
        "ans": 0,
        "expEn": "Step 1: x = 35 / 5 = 7.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: x = 35 / 5 = 7.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-071",
        "q": "In math problem #3, what is the derivative of f(x) = x^2 at x = 3?",
        "options": [
            "6",
            "3",
            "9",
            "12",
            "1"
        ],
        "ans": 0,
        "expEn": "Step 1: d/dx(x^2) = 2x; at x = 3, 2(3) = 6.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Производная от x^2 равна 2x; при x = 3 получаем 6.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-072",
        "q": "In math problem #3, what is the value of 2^4 + 3^2?",
        "options": [
            "25",
            "17",
            "16",
            "9",
            "24"
        ],
        "ans": 0,
        "expEn": "Step 1: 2^4 = 16 and 3^2 = 9; 16 + 9 = 25.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: 2^4 = 16 и 3^2 = 9; сумма равна 25.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-073",
        "q": "In math problem #3, what is the area of a right triangle with legs 6 and 8?",
        "options": [
            "24",
            "48",
            "14",
            "10",
            "12"
        ],
        "ans": 0,
        "expEn": "Step 1: Area = 0.5 × 6 × 8 = 24.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Площадь прямоугольного треугольника равна 0,5 · 6 · 8 = 24.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-074",
        "q": "In math problem #3, what is the slope of the line passing through (0, 0) and (4, 12)?",
        "options": [
            "3",
            "4",
            "12",
            "0.33",
            "8"
        ],
        "ans": 0,
        "expEn": "Step 1: Slope m = (12 - 0) / (4 - 0) = 3.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Угловой коэффициент равен (12 - 0) / (4 - 0) = 3.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-075",
        "q": "In math problem #3, solve for x: 5x = 35.",
        "options": [
            "7",
            "5",
            "30",
            "40",
            "175"
        ],
        "ans": 0,
        "expEn": "Step 1: x = 35 / 5 = 7.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: x = 35 / 5 = 7.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-076",
        "q": "In math problem #4, what is the derivative of f(x) = x^2 at x = 3?",
        "options": [
            "6",
            "3",
            "9",
            "12",
            "1"
        ],
        "ans": 0,
        "expEn": "Step 1: d/dx(x^2) = 2x; at x = 3, 2(3) = 6.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Производная от x^2 равна 2x; при x = 3 получаем 6.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-077",
        "q": "In math problem #4, what is the value of 2^4 + 3^2?",
        "options": [
            "25",
            "17",
            "16",
            "9",
            "24"
        ],
        "ans": 0,
        "expEn": "Step 1: 2^4 = 16 and 3^2 = 9; 16 + 9 = 25.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: 2^4 = 16 и 3^2 = 9; сумма равна 25.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-078",
        "q": "In math problem #4, what is the area of a right triangle with legs 6 and 8?",
        "options": [
            "24",
            "48",
            "14",
            "10",
            "12"
        ],
        "ans": 0,
        "expEn": "Step 1: Area = 0.5 × 6 × 8 = 24.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Площадь прямоугольного треугольника равна 0,5 · 6 · 8 = 24.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-079",
        "q": "In math problem #4, what is the slope of the line passing through (0, 0) and (4, 12)?",
        "options": [
            "3",
            "4",
            "12",
            "0.33",
            "8"
        ],
        "ans": 0,
        "expEn": "Step 1: Slope m = (12 - 0) / (4 - 0) = 3.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Угловой коэффициент равен (12 - 0) / (4 - 0) = 3.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-080",
        "q": "In math problem #4, solve for x: 5x = 35.",
        "options": [
            "7",
            "5",
            "30",
            "40",
            "175"
        ],
        "ans": 0,
        "expEn": "Step 1: x = 35 / 5 = 7.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: x = 35 / 5 = 7.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-081",
        "q": "In math problem #5, what is the derivative of f(x) = x^2 at x = 3?",
        "options": [
            "6",
            "3",
            "9",
            "12",
            "1"
        ],
        "ans": 0,
        "expEn": "Step 1: d/dx(x^2) = 2x; at x = 3, 2(3) = 6.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Производная от x^2 равна 2x; при x = 3 получаем 6.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-082",
        "q": "In math problem #5, what is the value of 2^4 + 3^2?",
        "options": [
            "25",
            "17",
            "16",
            "9",
            "24"
        ],
        "ans": 0,
        "expEn": "Step 1: 2^4 = 16 and 3^2 = 9; 16 + 9 = 25.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: 2^4 = 16 и 3^2 = 9; сумма равна 25.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-083",
        "q": "In math problem #5, what is the area of a right triangle with legs 6 and 8?",
        "options": [
            "24",
            "48",
            "14",
            "10",
            "12"
        ],
        "ans": 0,
        "expEn": "Step 1: Area = 0.5 × 6 × 8 = 24.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Площадь прямоугольного треугольника равна 0,5 · 6 · 8 = 24.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-084",
        "q": "In math problem #5, what is the slope of the line passing through (0, 0) and (4, 12)?",
        "options": [
            "3",
            "4",
            "12",
            "0.33",
            "8"
        ],
        "ans": 0,
        "expEn": "Step 1: Slope m = (12 - 0) / (4 - 0) = 3.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Угловой коэффициент равен (12 - 0) / (4 - 0) = 3.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-085",
        "q": "In math problem #5, solve for x: 5x = 35.",
        "options": [
            "7",
            "5",
            "30",
            "40",
            "175"
        ],
        "ans": 0,
        "expEn": "Step 1: x = 35 / 5 = 7.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: x = 35 / 5 = 7.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-086",
        "q": "In math problem #6, what is the derivative of f(x) = x^2 at x = 3?",
        "options": [
            "6",
            "3",
            "9",
            "12",
            "1"
        ],
        "ans": 0,
        "expEn": "Step 1: d/dx(x^2) = 2x; at x = 3, 2(3) = 6.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Производная от x^2 равна 2x; при x = 3 получаем 6.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-087",
        "q": "In math problem #6, what is the value of 2^4 + 3^2?",
        "options": [
            "25",
            "17",
            "16",
            "9",
            "24"
        ],
        "ans": 0,
        "expEn": "Step 1: 2^4 = 16 and 3^2 = 9; 16 + 9 = 25.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: 2^4 = 16 и 3^2 = 9; сумма равна 25.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-088",
        "q": "In math problem #6, what is the area of a right triangle with legs 6 and 8?",
        "options": [
            "24",
            "48",
            "14",
            "10",
            "12"
        ],
        "ans": 0,
        "expEn": "Step 1: Area = 0.5 × 6 × 8 = 24.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Площадь прямоугольного треугольника равна 0,5 · 6 · 8 = 24.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-089",
        "q": "In math problem #6, what is the slope of the line passing through (0, 0) and (4, 12)?",
        "options": [
            "3",
            "4",
            "12",
            "0.33",
            "8"
        ],
        "ans": 0,
        "expEn": "Step 1: Slope m = (12 - 0) / (4 - 0) = 3.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Угловой коэффициент равен (12 - 0) / (4 - 0) = 3.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-090",
        "q": "In math problem #6, solve for x: 5x = 35.",
        "options": [
            "7",
            "5",
            "30",
            "40",
            "175"
        ],
        "ans": 0,
        "expEn": "Step 1: x = 35 / 5 = 7.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: x = 35 / 5 = 7.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-091",
        "q": "In math problem #7, what is the derivative of f(x) = x^2 at x = 3?",
        "options": [
            "6",
            "3",
            "9",
            "12",
            "1"
        ],
        "ans": 0,
        "expEn": "Step 1: d/dx(x^2) = 2x; at x = 3, 2(3) = 6.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Производная от x^2 равна 2x; при x = 3 получаем 6.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-092",
        "q": "In math problem #7, what is the value of 2^4 + 3^2?",
        "options": [
            "25",
            "17",
            "16",
            "9",
            "24"
        ],
        "ans": 0,
        "expEn": "Step 1: 2^4 = 16 and 3^2 = 9; 16 + 9 = 25.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: 2^4 = 16 и 3^2 = 9; сумма равна 25.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-093",
        "q": "In math problem #7, what is the area of a right triangle with legs 6 and 8?",
        "options": [
            "24",
            "48",
            "14",
            "10",
            "12"
        ],
        "ans": 0,
        "expEn": "Step 1: Area = 0.5 × 6 × 8 = 24.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Площадь прямоугольного треугольника равна 0,5 · 6 · 8 = 24.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-094",
        "q": "In math problem #7, what is the slope of the line passing through (0, 0) and (4, 12)?",
        "options": [
            "3",
            "4",
            "12",
            "0.33",
            "8"
        ],
        "ans": 0,
        "expEn": "Step 1: Slope m = (12 - 0) / (4 - 0) = 3.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Угловой коэффициент равен (12 - 0) / (4 - 0) = 3.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-095",
        "q": "In math problem #7, solve for x: 5x = 35.",
        "options": [
            "7",
            "5",
            "30",
            "40",
            "175"
        ],
        "ans": 0,
        "expEn": "Step 1: x = 35 / 5 = 7.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: x = 35 / 5 = 7.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-096",
        "q": "In math problem #8, what is the derivative of f(x) = x^2 at x = 3?",
        "options": [
            "6",
            "3",
            "9",
            "12",
            "1"
        ],
        "ans": 0,
        "expEn": "Step 1: d/dx(x^2) = 2x; at x = 3, 2(3) = 6.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Производная от x^2 равна 2x; при x = 3 получаем 6.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-097",
        "q": "In math problem #8, what is the value of 2^4 + 3^2?",
        "options": [
            "25",
            "17",
            "16",
            "9",
            "24"
        ],
        "ans": 0,
        "expEn": "Step 1: 2^4 = 16 and 3^2 = 9; 16 + 9 = 25.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: 2^4 = 16 и 3^2 = 9; сумма равна 25.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-098",
        "q": "In math problem #8, what is the area of a right triangle with legs 6 and 8?",
        "options": [
            "24",
            "48",
            "14",
            "10",
            "12"
        ],
        "ans": 0,
        "expEn": "Step 1: Area = 0.5 × 6 × 8 = 24.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Площадь прямоугольного треугольника равна 0,5 · 6 · 8 = 24.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-099",
        "q": "In math problem #8, what is the slope of the line passing through (0, 0) and (4, 12)?",
        "options": [
            "3",
            "4",
            "12",
            "0.33",
            "8"
        ],
        "ans": 0,
        "expEn": "Step 1: Slope m = (12 - 0) / (4 - 0) = 3.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Угловой коэффициент равен (12 - 0) / (4 - 0) = 3.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-100",
        "q": "In math problem #8, solve for x: 5x = 35.",
        "options": [
            "7",
            "5",
            "30",
            "40",
            "175"
        ],
        "ans": 0,
        "expEn": "Step 1: x = 35 / 5 = 7.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: x = 35 / 5 = 7.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-101",
        "q": "In math problem #9, what is the derivative of f(x) = x^2 at x = 3?",
        "options": [
            "6",
            "3",
            "9",
            "12",
            "1"
        ],
        "ans": 0,
        "expEn": "Step 1: d/dx(x^2) = 2x; at x = 3, 2(3) = 6.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Производная от x^2 равна 2x; при x = 3 получаем 6.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-102",
        "q": "In math problem #9, what is the value of 2^4 + 3^2?",
        "options": [
            "25",
            "17",
            "16",
            "9",
            "24"
        ],
        "ans": 0,
        "expEn": "Step 1: 2^4 = 16 and 3^2 = 9; 16 + 9 = 25.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: 2^4 = 16 и 3^2 = 9; сумма равна 25.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-103",
        "q": "In math problem #9, what is the area of a right triangle with legs 6 and 8?",
        "options": [
            "24",
            "48",
            "14",
            "10",
            "12"
        ],
        "ans": 0,
        "expEn": "Step 1: Area = 0.5 × 6 × 8 = 24.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Площадь прямоугольного треугольника равна 0,5 · 6 · 8 = 24.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-104",
        "q": "In math problem #9, what is the slope of the line passing through (0, 0) and (4, 12)?",
        "options": [
            "3",
            "4",
            "12",
            "0.33",
            "8"
        ],
        "ans": 0,
        "expEn": "Step 1: Slope m = (12 - 0) / (4 - 0) = 3.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Угловой коэффициент равен (12 - 0) / (4 - 0) = 3.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-105",
        "q": "In math problem #9, solve for x: 5x = 35.",
        "options": [
            "7",
            "5",
            "30",
            "40",
            "175"
        ],
        "ans": 0,
        "expEn": "Step 1: x = 35 / 5 = 7.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: x = 35 / 5 = 7.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-106",
        "q": "In math problem #10, what is the derivative of f(x) = x^2 at x = 3?",
        "options": [
            "6",
            "3",
            "9",
            "12",
            "1"
        ],
        "ans": 0,
        "expEn": "Step 1: d/dx(x^2) = 2x; at x = 3, 2(3) = 6.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Производная от x^2 равна 2x; при x = 3 получаем 6.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-107",
        "q": "In math problem #10, what is the value of 2^4 + 3^2?",
        "options": [
            "25",
            "17",
            "16",
            "9",
            "24"
        ],
        "ans": 0,
        "expEn": "Step 1: 2^4 = 16 and 3^2 = 9; 16 + 9 = 25.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: 2^4 = 16 и 3^2 = 9; сумма равна 25.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-108",
        "q": "In math problem #10, what is the area of a right triangle with legs 6 and 8?",
        "options": [
            "24",
            "48",
            "14",
            "10",
            "12"
        ],
        "ans": 0,
        "expEn": "Step 1: Area = 0.5 × 6 × 8 = 24.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Площадь прямоугольного треугольника равна 0,5 · 6 · 8 = 24.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-109",
        "q": "In math problem #10, what is the slope of the line passing through (0, 0) and (4, 12)?",
        "options": [
            "3",
            "4",
            "12",
            "0.33",
            "8"
        ],
        "ans": 0,
        "expEn": "Step 1: Slope m = (12 - 0) / (4 - 0) = 3.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Угловой коэффициент равен (12 - 0) / (4 - 0) = 3.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-110",
        "q": "In math problem #10, solve for x: 5x = 35.",
        "options": [
            "7",
            "5",
            "30",
            "40",
            "175"
        ],
        "ans": 0,
        "expEn": "Step 1: x = 35 / 5 = 7.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: x = 35 / 5 = 7.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-111",
        "q": "In math problem #11, what is the derivative of f(x) = x^2 at x = 3?",
        "options": [
            "6",
            "3",
            "9",
            "12",
            "1"
        ],
        "ans": 0,
        "expEn": "Step 1: d/dx(x^2) = 2x; at x = 3, 2(3) = 6.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Производная от x^2 равна 2x; при x = 3 получаем 6.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-112",
        "q": "In math problem #11, what is the value of 2^4 + 3^2?",
        "options": [
            "25",
            "17",
            "16",
            "9",
            "24"
        ],
        "ans": 0,
        "expEn": "Step 1: 2^4 = 16 and 3^2 = 9; 16 + 9 = 25.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: 2^4 = 16 и 3^2 = 9; сумма равна 25.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-113",
        "q": "In math problem #11, what is the area of a right triangle with legs 6 and 8?",
        "options": [
            "24",
            "48",
            "14",
            "10",
            "12"
        ],
        "ans": 0,
        "expEn": "Step 1: Area = 0.5 × 6 × 8 = 24.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Площадь прямоугольного треугольника равна 0,5 · 6 · 8 = 24.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-114",
        "q": "In math problem #11, what is the slope of the line passing through (0, 0) and (4, 12)?",
        "options": [
            "3",
            "4",
            "12",
            "0.33",
            "8"
        ],
        "ans": 0,
        "expEn": "Step 1: Slope m = (12 - 0) / (4 - 0) = 3.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Угловой коэффициент равен (12 - 0) / (4 - 0) = 3.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-115",
        "q": "In math problem #11, solve for x: 5x = 35.",
        "options": [
            "7",
            "5",
            "30",
            "40",
            "175"
        ],
        "ans": 0,
        "expEn": "Step 1: x = 35 / 5 = 7.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: x = 35 / 5 = 7.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-116",
        "q": "In math problem #12, what is the derivative of f(x) = x^2 at x = 3?",
        "options": [
            "6",
            "3",
            "9",
            "12",
            "1"
        ],
        "ans": 0,
        "expEn": "Step 1: d/dx(x^2) = 2x; at x = 3, 2(3) = 6.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Производная от x^2 равна 2x; при x = 3 получаем 6.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-117",
        "q": "In math problem #12, what is the value of 2^4 + 3^2?",
        "options": [
            "25",
            "17",
            "16",
            "9",
            "24"
        ],
        "ans": 0,
        "expEn": "Step 1: 2^4 = 16 and 3^2 = 9; 16 + 9 = 25.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: 2^4 = 16 и 3^2 = 9; сумма равна 25.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-118",
        "q": "In math problem #12, what is the area of a right triangle with legs 6 and 8?",
        "options": [
            "24",
            "48",
            "14",
            "10",
            "12"
        ],
        "ans": 0,
        "expEn": "Step 1: Area = 0.5 × 6 × 8 = 24.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Площадь прямоугольного треугольника равна 0,5 · 6 · 8 = 24.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-119",
        "q": "In math problem #12, what is the slope of the line passing through (0, 0) and (4, 12)?",
        "options": [
            "3",
            "4",
            "12",
            "0.33",
            "8"
        ],
        "ans": 0,
        "expEn": "Step 1: Slope m = (12 - 0) / (4 - 0) = 3.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: Угловой коэффициент равен (12 - 0) / (4 - 0) = 3.\nШаг 2: Верный вариант — A."
    },
    {
        "id": "prac-math-120",
        "q": "In math problem #12, solve for x: 5x = 35.",
        "options": [
            "7",
            "5",
            "30",
            "40",
            "175"
        ],
        "ans": 0,
        "expEn": "Step 1: x = 35 / 5 = 7.\nStep 2: Therefore Option A is correct.",
        "expRu": "Шаг 1: x = 35 / 5 = 7.\nШаг 2: Верный вариант — A."
    }
];
