// db_logic.js - 120 unique CEnT-S practice questions (10 base patterns + 20 analogs + 90 generated)

window.DB_LOGIC = [
    {
        "id": "prac-logic-001",
        "title": "ECB Rate & Portfolio Balance",
        "q": "Mark analyzed his portfolio and found that each time the ECB raises its discount rate by one decimal point, his revenue drops by 100 €, whereas lowering it by one decimal point raises his revenue by 65 €. In February 2012 (leap year, 29 days), the ECB left the rate unchanged for 19 days, and each change was a single decimal point (at most once per day). If Mark's revenue rose by 155 € over the month, how many times did the ECB raise the rate?",
        "options": [
            "4",
            "9",
            "7",
            "3",
            "8"
        ],
        "ans": 3,
        "expEn": "Step 1: February 2012 has 29 days; with 19 unchanged days, there are 10 days with a rate change (u + d = 10, where u is increases and d is decreases).\nStep 2: Revenue change is -100u + 65d = 155. Substituting d = 10 - u gives -100u + 650 - 65u = 155 -> 165u = 495 -> u = 3 (and d = 7).\nStep 3: Thus the ECB raised the rate 3 times.",
        "expRu": "Шаг 1: В високосном феврале 2012 года 29 дней; за вычетом 19 дней без изменений остаётся 10 дней с изменением ставки: u + d = 10 (u — повышений, d — понижений).\nШаг 2: Изменение дохода равно -100u + 65d = 155. Подставив d = 10 - u, получаем -165u + 650 = 155 -> 165u = 495 -> u = 3 (d = 7).\nШаг 3: Ставку повышали 3 раза."
    },
    {
        "id": "prac-logic-002",
        "title": "ECB Rate & Portfolio Balance (Analog 1)",
        "q": "Each time a central bank raises a benchmark rate by one step, a trader loses 80 €; each time it lowers the rate by one step, the trader gains 50 €. Across 12 days, the rate was unchanged on 6 days, and each change was one step. If the trader's net gain was 40 €, how many times was the rate raised?",
        "options": [
            "2",
            "4",
            "3",
            "5",
            "6"
        ],
        "ans": 0,
        "expEn": "Step 1: Change days = 12 - 6 = 6, so u + d = 6.\nStep 2: -80u + 50(6 - u) = 40 -> -130u = -260 -> u = 2 (and d = 4).\nStep 3: The rate was raised 2 times.",
        "expRu": "Шаг 1: Дней с изменением ставки 12 - 6 = 6, то есть u + d = 6.\nШаг 2: -80u + 50(6 - u) = 40 -> -130u = -260 -> u = 2 (d = 4).\nШаг 3: Ставку повышали 2 раза."
    },
    {
        "id": "prac-logic-003",
        "title": "ECB Rate & Portfolio Balance (Analog 2)",
        "q": "An investor earns 70 € every time an index drops by 1 point and loses 90 € every time it rises by 1 point. In a 30-day month with 22 unchanged days, each change was 1 point. If the net result was +240 €, how many times did the index rise?",
        "options": [
            "5",
            "3",
            "7",
            "2",
            "6"
        ],
        "ans": 3,
        "expEn": "Step 1: Change days = 30 - 22 = 8, so r + f = 8.\nStep 2: -90r + 70(8 - r) = 240 -> -160r = -320 -> r = 2 (and f = 6).\nStep 3: The index rose 2 times.",
        "expRu": "Шаг 1: Дней с изменением 30 - 22 = 8: r + f = 8.\nШаг 2: -90r + 70(8 - r) = 240 -> -160r = -320 -> r = 2 (f = 6).\nШаг 3: Индекс вырос 2 раза."
    },
    {
        "id": "prac-logic-004",
        "title": "Rate & Balance Model #1",
        "q": "Each upward step of a rate costs 60 €, while each downward step yields 40 €. Across 10 days, 4 days had no change, and each change was a single step. If the net result was 40 €, how many upward steps occurred?",
        "options": [
            "0",
            "3",
            "2",
            "4",
            "1"
        ],
        "ans": 2,
        "expEn": "Step 1: Total change steps = 10 - 4 = 6, so u + d = 6.\nStep 2: -60u + 40(6 - u) = 40 gives u = 2 and d = 4.\nStep 3: Thus 2 upward steps occurred.",
        "expRu": "Шаг 1: Число шагов изменения равно 10 - 4 = 6, то есть u + d = 6.\nШаг 2: Из уравнения -60u + 40(6 - u) = 40 находим u = 2 и d = 4.\nШаг 3: Повышений было 2."
    },
    {
        "id": "prac-logic-005",
        "title": "Rate & Balance Model #2",
        "q": "Each upward step of a rate costs 50 €, while each downward step yields 30 €. Across 14 days, 8 days had no change, and each change was a single step. If the net result was 20 €, how many upward steps occurred?",
        "options": [
            "1",
            "4",
            "2",
            "3",
            "5"
        ],
        "ans": 2,
        "expEn": "Step 1: Total change steps = 14 - 8 = 6, so u + d = 6.\nStep 2: -50u + 30(6 - u) = 20 gives u = 2 and d = 4.\nStep 3: Thus 2 upward steps occurred.",
        "expRu": "Шаг 1: Число шагов изменения равно 14 - 8 = 6, то есть u + d = 6.\nШаг 2: Из уравнения -50u + 30(6 - u) = 20 находим u = 2 и d = 4.\nШаг 3: Повышений было 2."
    },
    {
        "id": "prac-logic-006",
        "title": "Rate & Balance Model #3",
        "q": "Each upward step of a rate costs 75 €, while each downward step yields 50 €. Across 15 days, 9 days had no change, and each change was a single step. If the net result was 50 €, how many upward steps occurred?",
        "options": [
            "1",
            "5",
            "3",
            "2",
            "4"
        ],
        "ans": 3,
        "expEn": "Step 1: Total change steps = 15 - 9 = 6, so u + d = 6.\nStep 2: -75u + 50(6 - u) = 50 gives u = 2 and d = 4.\nStep 3: Thus 2 upward steps occurred.",
        "expRu": "Шаг 1: Число шагов изменения равно 15 - 9 = 6, то есть u + d = 6.\nШаг 2: Из уравнения -75u + 50(6 - u) = 50 находим u = 2 и d = 4.\nШаг 3: Повышений было 2."
    },
    {
        "id": "prac-logic-007",
        "title": "Rate & Balance Model #4",
        "q": "Each upward step of a rate costs 60 €, while each downward step yields 45 €. Across 12 days, 7 days had no change, and each change was a single step. If the net result was 15 €, how many upward steps occurred?",
        "options": [
            "0",
            "4",
            "1",
            "3",
            "2"
        ],
        "ans": 4,
        "expEn": "Step 1: Total change steps = 12 - 7 = 5, so u + d = 5.\nStep 2: -60u + 45(5 - u) = 15 gives u = 2 and d = 3.\nStep 3: Thus 2 upward steps occurred.",
        "expRu": "Шаг 1: Число шагов изменения равно 12 - 7 = 5, то есть u + d = 5.\nШаг 2: Из уравнения -60u + 45(5 - u) = 15 находим u = 2 и d = 3.\nШаг 3: Повышений было 2."
    },
    {
        "id": "prac-logic-008",
        "title": "Rate & Balance Model #5",
        "q": "Each upward step of a rate costs 80 €, while each downward step yields 40 €. Across 18 days, 12 days had no change, and each change was a single step. If the net result was 0 €, how many upward steps occurred?",
        "options": [
            "1",
            "5",
            "3",
            "4",
            "2"
        ],
        "ans": 4,
        "expEn": "Step 1: Total change steps = 18 - 12 = 6, so u + d = 6.\nStep 2: -80u + 40(6 - u) = 0 gives u = 2 and d = 4.\nStep 3: Thus 2 upward steps occurred.",
        "expRu": "Шаг 1: Число шагов изменения равно 18 - 12 = 6, то есть u + d = 6.\nШаг 2: Из уравнения -80u + 40(6 - u) = 0 находим u = 2 и d = 4.\nШаг 3: Повышений было 2."
    },
    {
        "id": "prac-logic-009",
        "title": "Rate & Balance Model #6",
        "q": "Each upward step of a rate costs 70 €, while each downward step yields 50 €. Across 16 days, 10 days had no change, and each change was a single step. If the net result was 60 €, how many upward steps occurred?",
        "options": [
            "1",
            "4",
            "3",
            "2",
            "5"
        ],
        "ans": 3,
        "expEn": "Step 1: Total change steps = 16 - 10 = 6, so u + d = 6.\nStep 2: -70u + 50(6 - u) = 60 gives u = 2 and d = 4.\nStep 3: Thus 2 upward steps occurred.",
        "expRu": "Шаг 1: Число шагов изменения равно 16 - 10 = 6, то есть u + d = 6.\nШаг 2: Из уравнения -70u + 50(6 - u) = 60 находим u = 2 и d = 4.\nШаг 3: Повышений было 2."
    },
    {
        "id": "prac-logic-010",
        "title": "Rate & Balance Model #7",
        "q": "Each upward step of a rate costs 90 €, while each downward step yields 60 €. Across 20 days, 14 days had no change, and each change was a single step. If the net result was 60 €, how many upward steps occurred?",
        "options": [
            "1",
            "5",
            "4",
            "2",
            "3"
        ],
        "ans": 3,
        "expEn": "Step 1: Total change steps = 20 - 14 = 6, so u + d = 6.\nStep 2: -90u + 60(6 - u) = 60 gives u = 2 and d = 4.\nStep 3: Thus 2 upward steps occurred.",
        "expRu": "Шаг 1: Число шагов изменения равно 20 - 14 = 6, то есть u + d = 6.\nШаг 2: Из уравнения -90u + 60(6 - u) = 60 находим u = 2 и d = 4.\nШаг 3: Повышений было 2."
    },
    {
        "id": "prac-logic-011",
        "title": "Rate & Balance Model #8",
        "q": "Each upward step of a rate costs 55 €, while each downward step yields 35 €. Across 11 days, 6 days had no change, and each change was a single step. If the net result was -5 €, how many upward steps occurred?",
        "options": [
            "1",
            "3",
            "4",
            "2",
            "5"
        ],
        "ans": 3,
        "expEn": "Step 1: Total change steps = 11 - 6 = 5, so u + d = 5.\nStep 2: -55u + 35(5 - u) = -5 gives u = 2 and d = 3.\nStep 3: Thus 2 upward steps occurred.",
        "expRu": "Шаг 1: Число шагов изменения равно 11 - 6 = 5, то есть u + d = 5.\nШаг 2: Из уравнения -55u + 35(5 - u) = -5 находим u = 2 и d = 3.\nШаг 3: Повышений было 2."
    },
    {
        "id": "prac-logic-012",
        "title": "Rate & Balance Model #9",
        "q": "Each upward step of a rate costs 65 €, while each downward step yields 45 €. Across 13 days, 8 days had no change, and each change was a single step. If the net result was 5 €, how many upward steps occurred?",
        "options": [
            "1",
            "4",
            "2",
            "3",
            "5"
        ],
        "ans": 2,
        "expEn": "Step 1: Total change steps = 13 - 8 = 5, so u + d = 5.\nStep 2: -65u + 45(5 - u) = 5 gives u = 2 and d = 3.\nStep 3: Thus 2 upward steps occurred.",
        "expRu": "Шаг 1: Число шагов изменения равно 13 - 8 = 5, то есть u + d = 5.\nШаг 2: Из уравнения -65u + 45(5 - u) = 5 находим u = 2 и d = 3.\nШаг 3: Повышений было 2."
    },
    {
        "id": "prac-logic-013",
        "title": "Board Voting Overlap",
        "q": "One-third of the members of a company's Administrative Board voted in favor of the restructuring plan, and three-quarters of the same Board voted in favor of budget approval. Therefore, we can be sure that:",
        "options": [
            "at least one member of the Board voted in favor of both the budget approval and the restructuring plan",
            "those who voted in favor of the restructuring plan also voted in favor of the budget approval",
            "no members of the Board voted against the restructuring plan and against the budget approval",
            "some members of the Board voted against the restructuring plan and against the budget approval",
            "those who voted in favor of the budget approval also voted in favor of the restructuring plan"
        ],
        "ans": 0,
        "expEn": "Step 1: The two positive shares are 1/3 and 3/4, whose sum is 1/3 + 3/4 = 13/12 > 1 (100% of the Board).\nStep 2: Because the sum of the two affirmative groups exceeds the whole Board, their overlap cannot be empty.\nStep 3: Hence at least one member voted in favor of both.",
        "expRu": "Шаг 1: Сумма долей проголосовавших «за» равна 1/3 + 3/4 = 13/12 > 1 (больше всего состава совета).\nШаг 2: По принципу пересечения множеств эти группы гарантированно пересекаются.\nШаг 3: Значит, хотя бы один член совета проголосовал «за» оба решения."
    },
    {
        "id": "prac-logic-014",
        "title": "Board Voting Overlap (Analog 1)",
        "q": "Two-thirds of the delegates at a conference support Proposal X, and three-fifths of the same delegates support Proposal Y. Therefore, we can be sure that:",
        "options": [
            "at least one delegate supports both Proposal X and Proposal Y",
            "every delegate who supports Proposal X also supports Proposal Y",
            "no delegate opposes both Proposal X and Proposal Y",
            "every delegate who supports Proposal Y also supports Proposal X",
            "more than half of the delegates oppose both proposals"
        ],
        "ans": 0,
        "expEn": "Step 1: 2/3 + 3/5 = 19/15 > 1.\nStep 2: Since the sum exceeds 100%, the two supporting groups must overlap.\nStep 3: At least one delegate supports both proposals.",
        "expRu": "Шаг 1: 2/3 + 3/5 = 19/15 > 1.\nШаг 2: Поскольку сумма долей больше целого, множества сторонников пересекаются.\nШаг 3: Верный вариант — хотя бы один делегат поддерживает оба предложения."
    },
    {
        "id": "prac-logic-015",
        "title": "Board Voting Overlap (Analog 2)",
        "q": "Three-fifths of the committee members approved the new syllabus, and half of the same committee approved the lab schedule. Therefore, we can be sure that:",
        "options": [
            "at least one committee member approved both the syllabus and the lab schedule",
            "all members who approved the syllabus also approved the lab schedule",
            "no member rejected both the syllabus and the lab schedule",
            "all members who approved the lab schedule also approved the syllabus",
            "at least half of the committee rejected both"
        ],
        "ans": 0,
        "expEn": "Step 1: 3/5 + 1/2 = 11/10 > 1.\nStep 2: The sum of approving fractions exceeds 1, guaranteeing non-empty overlap.\nStep 3: At least one member approved both.",
        "expRu": "Шаг 1: 3/5 + 1/2 = 11/10 > 1.\nШаг 2: Сумма долей больше 1, поэтому группы пересекаются.\nШаг 3: Хотя бы один член комиссии одобрил оба пункта."
    },
    {
        "id": "prac-logic-016",
        "title": "Set Overlap Deduction #1",
        "q": "A share of 3/4 of a group chose Option A, and a share of 2/5 of the same group chose Option B. Since 3/4 + 2/5 > 1, we can be sure that:",
        "options": [
            "at least one member chose both Option A and Option B",
            "all A are B",
            "none reject both",
            "all B are A",
            "half reject both"
        ],
        "ans": 0,
        "expEn": "Step 1: 3/4 + 2/5 > 1, meaning the total affirmative share exceeds the size of the group.\nStep 2: Therefore at least one member belongs to both sets.\nStep 3: Option A is guaranteed.",
        "expRu": "Шаг 1: Так как 3/4 + 2/5 > 1, суммарная доля превышает целое.\nШаг 2: Значит, хотя бы один участник выбрал оба варианта.\nШаг 3: Верный вариант — первый."
    },
    {
        "id": "prac-logic-017",
        "title": "Set Overlap Deduction #2",
        "q": "A share of 4/5 of a group chose Option A, and a share of 1/3 of the same group chose Option B. Since 4/5 + 1/3 > 1, we can be sure that:",
        "options": [
            "at least one member chose both Option A and Option B",
            "all A are B",
            "none reject both",
            "all B are A",
            "none are undecided"
        ],
        "ans": 0,
        "expEn": "Step 1: 4/5 + 1/3 > 1, meaning the total affirmative share exceeds the size of the group.\nStep 2: Therefore at least one member belongs to both sets.\nStep 3: Option A is guaranteed.",
        "expRu": "Шаг 1: Так как 4/5 + 1/3 > 1, суммарная доля превышает целое.\nШаг 2: Значит, хотя бы один участник выбрал оба варианта.\nШаг 3: Верный вариант — первый."
    },
    {
        "id": "prac-logic-018",
        "title": "Set Overlap Deduction #3",
        "q": "A share of 2/3 of a group chose Option A, and a share of 4/7 of the same group chose Option B. Since 2/3 + 4/7 > 1, we can be sure that:",
        "options": [
            "at least one member chose both Option A and Option B",
            "all A are B",
            "none reject both",
            "all B are A",
            "majority reject both"
        ],
        "ans": 0,
        "expEn": "Step 1: 2/3 + 4/7 > 1, meaning the total affirmative share exceeds the size of the group.\nStep 2: Therefore at least one member belongs to both sets.\nStep 3: Option A is guaranteed.",
        "expRu": "Шаг 1: Так как 2/3 + 4/7 > 1, суммарная доля превышает целое.\nШаг 2: Значит, хотя бы один участник выбрал оба варианта.\nШаг 3: Верный вариант — первый."
    },
    {
        "id": "prac-logic-019",
        "title": "Set Overlap Deduction #4",
        "q": "A share of 3/5 of a group chose Option A, and a share of 3/5 of the same group chose Option B. Since 3/5 + 3/5 > 1, we can be sure that:",
        "options": [
            "at least one member chose both Option A and Option B",
            "all A are B",
            "none reject both",
            "all B are A",
            "all abstain"
        ],
        "ans": 0,
        "expEn": "Step 1: 3/5 + 3/5 > 1, meaning the total affirmative share exceeds the size of the group.\nStep 2: Therefore at least one member belongs to both sets.\nStep 3: Option A is guaranteed.",
        "expRu": "Шаг 1: Так как 3/5 + 3/5 > 1, суммарная доля превышает целое.\nШаг 2: Значит, хотя бы один участник выбрал оба варианта.\nШаг 3: Верный вариант — первый."
    },
    {
        "id": "prac-logic-020",
        "title": "Set Overlap Deduction #5",
        "q": "A share of 5/6 of a group chose Option A, and a share of 1/4 of the same group chose Option B. Since 5/6 + 1/4 > 1, we can be sure that:",
        "options": [
            "at least one member chose both Option A and Option B",
            "all A are B",
            "none reject both",
            "all B are A",
            "none abstain"
        ],
        "ans": 0,
        "expEn": "Step 1: 5/6 + 1/4 > 1, meaning the total affirmative share exceeds the size of the group.\nStep 2: Therefore at least one member belongs to both sets.\nStep 3: Option A is guaranteed.",
        "expRu": "Шаг 1: Так как 5/6 + 1/4 > 1, суммарная доля превышает целое.\nШаг 2: Значит, хотя бы один участник выбрал оба варианта.\nШаг 3: Верный вариант — первый."
    },
    {
        "id": "prac-logic-021",
        "title": "Set Overlap Deduction #6",
        "q": "A share of 4/7 of a group chose Option A, and a share of 1/2 of the same group chose Option B. Since 4/7 + 1/2 > 1, we can be sure that:",
        "options": [
            "at least one member chose both Option A and Option B",
            "all A are B",
            "none reject both",
            "all B are A",
            "none disagree"
        ],
        "ans": 0,
        "expEn": "Step 1: 4/7 + 1/2 > 1, meaning the total affirmative share exceeds the size of the group.\nStep 2: Therefore at least one member belongs to both sets.\nStep 3: Option A is guaranteed.",
        "expRu": "Шаг 1: Так как 4/7 + 1/2 > 1, суммарная доля превышает целое.\nШаг 2: Значит, хотя бы один участник выбрал оба варианта.\nШаг 3: Верный вариант — первый."
    },
    {
        "id": "prac-logic-022",
        "title": "Set Overlap Deduction #7",
        "q": "A share of 3/4 of a group chose Option A, and a share of 1/3 of the same group chose Option B. Since 3/4 + 1/3 > 1, we can be sure that:",
        "options": [
            "at least one member chose both Option A and Option B",
            "all A are B",
            "none reject both",
            "all B are A",
            "all disagree"
        ],
        "ans": 0,
        "expEn": "Step 1: 3/4 + 1/3 > 1, meaning the total affirmative share exceeds the size of the group.\nStep 2: Therefore at least one member belongs to both sets.\nStep 3: Option A is guaranteed.",
        "expRu": "Шаг 1: Так как 3/4 + 1/3 > 1, суммарная доля превышает целое.\nШаг 2: Значит, хотя бы один участник выбрал оба варианта.\nШаг 3: Верный вариант — первый."
    },
    {
        "id": "prac-logic-023",
        "title": "Set Overlap Deduction #8",
        "q": "A share of 5/8 of a group chose Option A, and a share of 1/2 of the same group chose Option B. Since 5/8 + 1/2 > 1, we can be sure that:",
        "options": [
            "at least one member chose both Option A and Option B",
            "all A are B",
            "none reject both",
            "all B are A",
            "none abstain"
        ],
        "ans": 0,
        "expEn": "Step 1: 5/8 + 1/2 > 1, meaning the total affirmative share exceeds the size of the group.\nStep 2: Therefore at least one member belongs to both sets.\nStep 3: Option A is guaranteed.",
        "expRu": "Шаг 1: Так как 5/8 + 1/2 > 1, суммарная доля превышает целое.\nШаг 2: Значит, хотя бы один участник выбрал оба варианта.\nШаг 3: Верный вариант — первый."
    },
    {
        "id": "prac-logic-024",
        "title": "Set Overlap Deduction #9",
        "q": "A share of 2/3 of a group chose Option A, and a share of 1/2 of the same group chose Option B. Since 2/3 + 1/2 > 1, we can be sure that:",
        "options": [
            "at least one member chose both Option A and Option B",
            "all A are B",
            "none reject both",
            "all B are A",
            "none abstain"
        ],
        "ans": 0,
        "expEn": "Step 1: 2/3 + 1/2 > 1, meaning the total affirmative share exceeds the size of the group.\nStep 2: Therefore at least one member belongs to both sets.\nStep 3: Option A is guaranteed.",
        "expRu": "Шаг 1: Так как 2/3 + 1/2 > 1, суммарная доля превышает целое.\nШаг 2: Значит, хотя бы один участник выбрал оба варианта.\nШаг 3: Верный вариант — первый."
    },
    {
        "id": "prac-logic-025",
        "title": "Pond Bacteria Doubling",
        "q": "Archaebacteria are single-celled organisms that reproduce by splitting into two once a day. Starting with one bacterium in a pond, the whole surface is covered in 30 days. How many days does it take to cover the whole surface if we start with two bacteria?",
        "options": [
            "30 days",
            "15 days",
            "It depends on the pond surface area",
            "29 days",
            "28 days"
        ],
        "ans": 3,
        "expEn": "Step 1: One bacterium becomes two bacteria after 1 day.\nStep 2: Since starting with two bacteria skips that first doubling day, it reaches full coverage 1 day sooner: 30 - 1 = 29 days.\nStep 3: Notice we do not need the pond's surface area.",
        "expRu": "Шаг 1: Одна бактерия за первый день делится надвое и становится двумя.\nШаг 2: Если сразу начать с двух бактерий, экономится один день: 30 - 1 = 29 дней.\nШаг 3: Площадь пруда знать не требуется."
    },
    {
        "id": "prac-logic-026",
        "title": "Pond Bacteria Doubling (Analog 1)",
        "q": "A yeast culture doubles in volume every day. Starting with 1 unit of culture, a tank is filled in 20 days. How many days does it take to fill the tank starting with 2 units of culture?",
        "options": [
            "20 days",
            "10 days",
            "19 days",
            "18 days",
            "It depends on tank volume"
        ],
        "ans": 2,
        "expEn": "Step 1: Starting with 2 units is equivalent to being 1 day ahead of starting with 1 unit.\nStep 2: Therefore it takes 20 - 1 = 19 days.",
        "expRu": "Шаг 1: 2 единицы культуры вместо 1 соответствуют продвижению на 1 день вперёд.\nШаг 2: Бак заполнится за 20 - 1 = 19 дней."
    },
    {
        "id": "prac-logic-027",
        "title": "Pond Bacteria Doubling (Analog 2)",
        "q": "A patch of duckweed doubles its area every day. Starting with 1 plant, a lake is covered in 40 days. Starting with 4 plants, how many days does it take to cover the lake?",
        "options": [
            "40 days",
            "20 days",
            "38 days",
            "10 days",
            "39 days"
        ],
        "ans": 2,
        "expEn": "Step 1: 1 plant -> 2 after day 1 -> 4 after day 2.\nStep 2: Starting with 4 plants saves 2 days, so it takes 40 - 2 = 38 days.",
        "expRu": "Шаг 1: За 1-й день 1 растение даёт 2, за 2-й день — 4.\nШаг 2: Начиная с 4 растений, мы выигрываем 2 дня: 40 - 2 = 38 дней."
    },
    {
        "id": "prac-logic-028",
        "title": "Doubling Timeline #1",
        "q": "A colony doubles once per day. Starting with 1 unit fills the container in 25 days. How many days does it take starting with 2 units?",
        "options": [
            "25 days",
            "12.5 days",
            "24 days",
            "23 days",
            "Depends on area"
        ],
        "ans": 2,
        "expEn": "Step 1: Starting with 2 units skips 1 doubling step(s).\nStep 2: Time needed is 25 - 1 = 24 days.",
        "expRu": "Шаг 1: Старт с 2 единиц экономит 1 шаг(а) удвоения.\nШаг 2: Время составит 25 - 1 = 24 дней."
    },
    {
        "id": "prac-logic-029",
        "title": "Doubling Timeline #2",
        "q": "A colony doubles once per day. Starting with 1 unit fills the container in 18 days. How many days does it take starting with 2 units?",
        "options": [
            "18 days",
            "9 days",
            "17 days",
            "16 days",
            "Depends on area"
        ],
        "ans": 2,
        "expEn": "Step 1: Starting with 2 units skips 1 doubling step(s).\nStep 2: Time needed is 18 - 1 = 17 days.",
        "expRu": "Шаг 1: Старт с 2 единиц экономит 1 шаг(а) удвоения.\nШаг 2: Время составит 18 - 1 = 17 дней."
    },
    {
        "id": "prac-logic-030",
        "title": "Doubling Timeline #3",
        "q": "A colony doubles once per day. Starting with 1 unit fills the container in 22 days. How many days does it take starting with 4 units?",
        "options": [
            "22 days",
            "11 days",
            "20 days",
            "21 days",
            "Depends on area"
        ],
        "ans": 2,
        "expEn": "Step 1: Starting with 4 units skips 2 doubling step(s).\nStep 2: Time needed is 22 - 2 = 20 days.",
        "expRu": "Шаг 1: Старт с 4 единиц экономит 2 шаг(а) удвоения.\nШаг 2: Время составит 22 - 2 = 20 дней."
    },
    {
        "id": "prac-logic-031",
        "title": "Doubling Timeline #4",
        "q": "A colony doubles once per day. Starting with 1 unit fills the container in 35 days. How many days does it take starting with 2 units?",
        "options": [
            "35 days",
            "17.5 days",
            "34 days",
            "33 days",
            "Depends on area"
        ],
        "ans": 2,
        "expEn": "Step 1: Starting with 2 units skips 1 doubling step(s).\nStep 2: Time needed is 35 - 1 = 34 days.",
        "expRu": "Шаг 1: Старт с 2 единиц экономит 1 шаг(а) удвоения.\nШаг 2: Время составит 35 - 1 = 34 дней."
    },
    {
        "id": "prac-logic-032",
        "title": "Doubling Timeline #5",
        "q": "A colony doubles once per day. Starting with 1 unit fills the container in 16 days. How many days does it take starting with 4 units?",
        "options": [
            "16 days",
            "8 days",
            "14 days",
            "15 days",
            "Depends on area"
        ],
        "ans": 2,
        "expEn": "Step 1: Starting with 4 units skips 2 doubling step(s).\nStep 2: Time needed is 16 - 2 = 14 days.",
        "expRu": "Шаг 1: Старт с 4 единиц экономит 2 шаг(а) удвоения.\nШаг 2: Время составит 16 - 2 = 14 дней."
    },
    {
        "id": "prac-logic-033",
        "title": "Doubling Timeline #6",
        "q": "A colony doubles once per day. Starting with 1 unit fills the container in 28 days. How many days does it take starting with 2 units?",
        "options": [
            "28 days",
            "14 days",
            "27 days",
            "26 days",
            "Depends on area"
        ],
        "ans": 2,
        "expEn": "Step 1: Starting with 2 units skips 1 doubling step(s).\nStep 2: Time needed is 28 - 1 = 27 days.",
        "expRu": "Шаг 1: Старт с 2 единиц экономит 1 шаг(а) удвоения.\nШаг 2: Время составит 28 - 1 = 27 дней."
    },
    {
        "id": "prac-logic-034",
        "title": "Doubling Timeline #7",
        "q": "A colony doubles once per day. Starting with 1 unit fills the container in 24 days. How many days does it take starting with 4 units?",
        "options": [
            "24 days",
            "12 days",
            "22 days",
            "23 days",
            "Depends on area"
        ],
        "ans": 2,
        "expEn": "Step 1: Starting with 4 units skips 2 doubling step(s).\nStep 2: Time needed is 24 - 2 = 22 days.",
        "expRu": "Шаг 1: Старт с 4 единиц экономит 2 шаг(а) удвоения.\nШаг 2: Время составит 24 - 2 = 22 дней."
    },
    {
        "id": "prac-logic-035",
        "title": "Doubling Timeline #8",
        "q": "A colony doubles once per day. Starting with 1 unit fills the container in 32 days. How many days does it take starting with 2 units?",
        "options": [
            "32 days",
            "16 days",
            "31 days",
            "30 days",
            "Depends on area"
        ],
        "ans": 2,
        "expEn": "Step 1: Starting with 2 units skips 1 doubling step(s).\nStep 2: Time needed is 32 - 1 = 31 days.",
        "expRu": "Шаг 1: Старт с 2 единиц экономит 1 шаг(а) удвоения.\nШаг 2: Время составит 32 - 1 = 31 дней."
    },
    {
        "id": "prac-logic-036",
        "title": "Doubling Timeline #9",
        "q": "A colony doubles once per day. Starting with 1 unit fills the container in 26 days. How many days does it take starting with 4 units?",
        "options": [
            "26 days",
            "13 days",
            "24 days",
            "25 days",
            "Depends on area"
        ],
        "ans": 2,
        "expEn": "Step 1: Starting with 4 units skips 2 doubling step(s).\nStep 2: Time needed is 26 - 2 = 24 days.",
        "expRu": "Шаг 1: Старт с 4 единиц экономит 2 шаг(а) удвоения.\nШаг 2: Время составит 26 - 2 = 24 дней."
    },
    {
        "id": "prac-logic-037",
        "title": "Necessary Condition & Contrapositive",
        "q": "To register successfully for an exam, it is necessary that a student follows the online procedure or arrives two hours early. Which statement is equivalent to this?",
        "options": [
            "if a student skips the online procedure or arrives late, registration may still succeed",
            "if registration fails, the student neither followed the online procedure nor arrived two hours early",
            "following the online procedure and arriving two hours early is sufficient to register successfully",
            "if a student does not follow the online procedure and does not arrive two hours early, registration will fail",
            "if registration fails, the student did not follow the online procedure"
        ],
        "ans": 3,
        "expEn": "Step 1: Let R = successful registration, P = online procedure, Q = arrive two hours early. The rule says R -> (P OR Q).\nStep 2: By contrapositive, if NOT (P OR Q), then NOT R.\nStep 3: De Morgan's law says NOT (P OR Q) is (NOT P AND NOT Q), so if neither holds, registration will fail.",
        "expRu": "Шаг 1: Пусть R — успешная регистрация, P — онлайн-процедура, Q — приход за два часа. Условие означает R -> (P ИЛИ Q).\nШаг 2: По закону контрапозиции из НЕ (P ИЛИ Q) следует НЕ R.\nШаг 3: По закону де Моргана НЕ (P ИЛИ Q) равносильно (НЕ P И НЕ Q): если не выполнено ни то, ни другое, регистрация не пройдёт."
    },
    {
        "id": "prac-logic-038",
        "title": "Necessary Condition & Contrapositive (Analog 1)",
        "q": "To board the night train, it is necessary that a passenger has a valid ticket or an official pass. Which statement is equivalent to this?",
        "options": [
            "having a ticket or a pass is sufficient to board the train",
            "if a passenger has neither a valid ticket nor an official pass, they cannot board the train",
            "if a passenger cannot board, they have neither a ticket nor a pass",
            "if a passenger has no ticket or has no pass, they cannot board",
            "if a passenger cannot board, they lack a valid ticket"
        ],
        "ans": 1,
        "expEn": "Step 1: Boarding requires (Ticket OR Pass).\nStep 2: Negating (Ticket OR Pass) gives (No Ticket AND No Pass), which implies cannot board.",
        "expRu": "Шаг 1: Для посадки необходимо выполнение (Билет ИЛИ Пропуск).\nШаг 2: Отрицание (Билет ИЛИ Пропуск) даёт (Нет билета И Нет пропуска), откуда следует невозможность посадки."
    },
    {
        "id": "prac-logic-039",
        "title": "Necessary Condition & Contrapositive (Analog 2)",
        "q": "To unlock the archive, it is necessary that an operator enters the numeric PIN or scans a badge. Which statement is equivalent to this?",
        "options": [
            "entering the PIN or scanning a badge guarantees the archive unlocks",
            "if an operator neither enters the PIN nor scans a badge, the archive will not unlock",
            "if the archive does not unlock, the operator neither entered the PIN nor scanned a badge",
            "if the archive does not unlock, the operator did not enter the PIN",
            "scanning a badge alone is always sufficient to unlock the archive"
        ],
        "ans": 1,
        "expEn": "Step 1: Unlocking requires (PIN OR Badge).\nStep 2: If neither PIN nor Badge is used, the necessary condition fails, so the archive will not unlock.",
        "expRu": "Шаг 1: Открытие архива требует (ПИН ИЛИ Бейдж).\nШаг 2: Если не введён ПИН и не приложен бейдж, необходимое условие нарушено — архив не откроется."
    },
    {
        "id": "prac-logic-040",
        "title": "Contrapositive Rule #1",
        "q": "To proceed, it is necessary that a candidate submit a form or call the desk. Which statement is equivalent to this?",
        "options": [
            "doing submit a form or call the desk is sufficient to proceed",
            "if a person neither submits a form nor calls the desk, the request will not be approved",
            "if request will not be approved, the candidate did neither action",
            "if request will not be approved, the first action was omitted",
            "doing either action always guarantees request will be approved"
        ],
        "ans": 1,
        "expEn": "Step 1: Proceeding requires (submit a form or call the desk).\nStep 2: By contrapositive, if neither condition holds, request will not be approved.",
        "expRu": "Шаг 1: Для перехода необходимо (submit a form or call the desk).\nШаг 2: По контрапозиции при отсутствии обоих условий request will not be approved."
    },
    {
        "id": "prac-logic-041",
        "title": "Contrapositive Rule #2",
        "q": "To proceed, it is necessary that a candidate show an ID or use a student card. Which statement is equivalent to this?",
        "options": [
            "doing show an ID or use a student card is sufficient to proceed",
            "if someone neither shows an ID nor uses a student card, entry will not be granted",
            "if entry will not be granted, the candidate did neither action",
            "if entry will not be granted, the first action was omitted",
            "doing either action always guarantees entry will be granted"
        ],
        "ans": 1,
        "expEn": "Step 1: Proceeding requires (show an ID or use a student card).\nStep 2: By contrapositive, if neither condition holds, entry will not be granted.",
        "expRu": "Шаг 1: Для перехода необходимо (show an ID or use a student card).\nШаг 2: По контрапозиции при отсутствии обоих условий entry will not be granted."
    },
    {
        "id": "prac-logic-042",
        "title": "Contrapositive Rule #3",
        "q": "To proceed, it is necessary that a candidate pay online or pay at the counter. Which statement is equivalent to this?",
        "options": [
            "doing pay online or pay at the counter is sufficient to proceed",
            "if a buyer neither pays online nor pays at the counter, the order will not be confirmed",
            "if order will not be confirmed, the candidate did neither action",
            "if order will not be confirmed, the first action was omitted",
            "doing either action always guarantees order will be confirmed"
        ],
        "ans": 1,
        "expEn": "Step 1: Proceeding requires (pay online or pay at the counter).\nStep 2: By contrapositive, if neither condition holds, order will not be confirmed.",
        "expRu": "Шаг 1: Для перехода необходимо (pay online or pay at the counter).\nШаг 2: По контрапозиции при отсутствии обоих условий order will not be confirmed."
    },
    {
        "id": "prac-logic-043",
        "title": "Contrapositive Rule #4",
        "q": "To proceed, it is necessary that a candidate bring a calculator or use mental math. Which statement is equivalent to this?",
        "options": [
            "doing bring a calculator or use mental math is sufficient to proceed",
            "if a student neither brings a calculator nor uses mental math, the step cannot be completed",
            "if the step cannot be completed, the candidate did neither action",
            "if the step cannot be completed, the first action was omitted",
            "doing either action always guarantees the step cannot be completed"
        ],
        "ans": 1,
        "expEn": "Step 1: Proceeding requires (bring a calculator or use mental math).\nStep 2: By contrapositive, if neither condition holds, the step cannot be completed.",
        "expRu": "Шаг 1: Для перехода необходимо (bring a calculator or use mental math).\nШаг 2: По контрапозиции при отсутствии обоих условий the step cannot be completed."
    },
    {
        "id": "prac-logic-044",
        "title": "Contrapositive Rule #5",
        "q": "To proceed, it is necessary that a candidate sign the log or send an email. Which statement is equivalent to this?",
        "options": [
            "doing sign the log or send an email is sufficient to proceed",
            "if a user neither signs the log nor sends an email, access will not be activated",
            "if access will not be activated, the candidate did neither action",
            "if access will not be activated, the first action was omitted",
            "doing either action always guarantees access will be activated"
        ],
        "ans": 1,
        "expEn": "Step 1: Proceeding requires (sign the log or send an email).\nStep 2: By contrapositive, if neither condition holds, access will not be activated.",
        "expRu": "Шаг 1: Для перехода необходимо (sign the log or send an email).\nШаг 2: По контрапозиции при отсутствии обоих условий access will not be activated."
    },
    {
        "id": "prac-logic-045",
        "title": "Contrapositive Rule #6",
        "q": "To proceed, it is necessary that a candidate wear safety goggles or a face shield. Which statement is equivalent to this?",
        "options": [
            "doing wear safety goggles or a face shield is sufficient to proceed",
            "if a worker neither wears safety goggles nor a face shield, lab work is not permitted",
            "if lab work is not permitted, the candidate did neither action",
            "if lab work is not permitted, the first action was omitted",
            "doing either action always guarantees lab work is permitted"
        ],
        "ans": 1,
        "expEn": "Step 1: Proceeding requires (wear safety goggles or a face shield).\nStep 2: By contrapositive, if neither condition holds, lab work is not permitted.",
        "expRu": "Шаг 1: Для перехода необходимо (wear safety goggles or a face shield).\nШаг 2: По контрапозиции при отсутствии обоих условий lab work is not permitted."
    },
    {
        "id": "prac-logic-046",
        "title": "Contrapositive Rule #7",
        "q": "To proceed, it is necessary that a candidate book a slot or join standby. Which statement is equivalent to this?",
        "options": [
            "doing book a slot or join standby is sufficient to proceed",
            "if a visitor neither books a slot nor joins standby, admission is not guaranteed",
            "if admission is not guaranteed, the candidate did neither action",
            "if admission is not guaranteed, the first action was omitted",
            "doing either action always guarantees admission is guaranteed"
        ],
        "ans": 1,
        "expEn": "Step 1: Proceeding requires (book a slot or join standby).\nStep 2: By contrapositive, if neither condition holds, admission is not guaranteed.",
        "expRu": "Шаг 1: Для перехода необходимо (book a slot or join standby).\nШаг 2: По контрапозиции при отсутствии обоих условий admission is not guaranteed."
    },
    {
        "id": "prac-logic-047",
        "title": "Contrapositive Rule #8",
        "q": "To proceed, it is necessary that a candidate upload a receipt or attach a statement. Which statement is equivalent to this?",
        "options": [
            "doing upload a receipt or attach a statement is sufficient to proceed",
            "if a client neither uploads a receipt nor attaches a statement, refund is not processed",
            "if refund is not processed, the candidate did neither action",
            "if refund is not processed, the first action was omitted",
            "doing either action always guarantees refund is processed"
        ],
        "ans": 1,
        "expEn": "Step 1: Proceeding requires (upload a receipt or attach a statement).\nStep 2: By contrapositive, if neither condition holds, refund is not processed.",
        "expRu": "Шаг 1: Для перехода необходимо (upload a receipt or attach a statement).\nШаг 2: По контрапозиции при отсутствии обоих условий refund is not processed."
    },
    {
        "id": "prac-logic-048",
        "title": "Contrapositive Rule #9",
        "q": "To proceed, it is necessary that a candidate renew by Friday or pay the late fee. Which statement is equivalent to this?",
        "options": [
            "doing renew by Friday or pay the late fee is sufficient to proceed",
            "if a member neither renews by Friday nor pays the late fee, membership is not extended",
            "if membership is not extended, the candidate did neither action",
            "if membership is not extended, the first action was omitted",
            "doing either action always guarantees membership is extended"
        ],
        "ans": 1,
        "expEn": "Step 1: Proceeding requires (renew by Friday or pay the late fee).\nStep 2: By contrapositive, if neither condition holds, membership is not extended.",
        "expRu": "Шаг 1: Для перехода необходимо (renew by Friday or pay the late fee).\nШаг 2: По контрапозиции при отсутствии обоих условий membership is not extended."
    },
    {
        "id": "prac-logic-049",
        "title": "Chemical Mixture Conditions",
        "q": "A chemist knows a sample contains either Sodium or Potassium (or both). If it does NOT contain Sodium, it must contain Iron; if it contains Potassium, it must also contain Iodine. Which scenario is possible?",
        "options": [
            "The sample contains only Potassium (no Sodium, no Iron, no Iodine)",
            "The sample contains only Sodium (no Potassium, no Iron, no Iodine)",
            "The sample contains Potassium and Sodium, but no Iodine",
            "The sample contains no Sodium and no Iron",
            "The sample contains only Iodine"
        ],
        "ans": 1,
        "expEn": "Step 1: If the sample contains only Sodium (Na = true, K = false, Fe = false, I = false), Na OR K holds.\nStep 2: 'If not Sodium, then Iron' is not triggered because Sodium is present.\nStep 3: 'If Potassium, then Iodine' is not triggered because Potassium is absent. Thus 'only Sodium' is possible.",
        "expRu": "Шаг 1: При наличии только натрия (Na — да, K — нет, Fe — нет, I — нет) условие «натрий или калий» выполняется.\nШаг 2: Посылка «если нет натрия» ложна, поэтому железо не обязательно.\nШаг 3: Посылка «если есть калий» тоже ложна, поэтому йод не обязателен. Возможен вариант «только натрий»."
    },
    {
        "id": "prac-logic-050",
        "title": "Chemical Mixture Conditions (Analog 1)",
        "q": "A technician knows a mixture uses either Alloy A or Alloy B (or both). If it does not use Alloy A, it must use Zinc; if it uses Alloy B, it must also use Tin. Which scenario is possible?",
        "options": [
            "The mixture uses only Alloy A (no Alloy B, no Zinc, no Tin)",
            "The mixture uses only Alloy B (no Alloy A, no Zinc, no Tin)",
            "The mixture uses Alloy A and Alloy B, but no Tin",
            "The mixture uses neither Alloy A nor Zinc",
            "The mixture uses only Tin"
        ],
        "ans": 0,
        "expEn": "Step 1: Using only Alloy A satisfies 'Alloy A or Alloy B'.\nStep 2: Neither conditional antecedent ('no Alloy A' or 'uses Alloy B') is violated.\nStep 3: Thus 'only Alloy A' is possible.",
        "expRu": "Шаг 1: Вариант «только сплав A» удовлетворяет условию «сплав A или сплав B».\nШаг 2: Остальные импликации не нарушаются.\nШаг 3: Возможен вариант «только сплав A»."
    },
    {
        "id": "prac-logic-051",
        "title": "Chemical Mixture Conditions (Analog 2)",
        "q": "A lab kit includes either Reagent X or Reagent Y (or both). Without Reagent X, it must include Copper; with Reagent Y, it must include Silver. Which scenario is possible?",
        "options": [
            "The kit includes Reagent Y without Silver",
            "The kit includes only Reagent X (no Reagent Y, no Copper, no Silver)",
            "The kit includes neither Reagent X nor Copper",
            "The kit includes only Silver",
            "The kit includes Reagent X and Reagent Y, but no Silver"
        ],
        "ans": 1,
        "expEn": "Step 1: Only Reagent X satisfies 'Reagent X or Reagent Y'.\nStep 2: Since Reagent X is present, Copper is not required; since Reagent Y is absent, Silver is not required.\nStep 3: 'Only Reagent X' is possible.",
        "expRu": "Шаг 1: «Только реагент X» подходит под условие «X или Y».\nШаг 2: Раз реагент X есть, медь не обязательна; раз реагента Y нет, серебро не обязательно.\nШаг 3: Возможен вариант «только реагент X»."
    },
    {
        "id": "prac-logic-052",
        "title": "Conditional Scenario #1",
        "q": "A setup uses Module 1 or Module 2 (or both). If Module 1 is absent, Tracer is required; if Module 2 is present, Logger is required. Which scenario is possible?",
        "options": [
            "only Module 1 (no Module 2, no Tracer, no Logger)",
            "it uses Module 2 without Logger",
            "it has neither Module 1 nor Tracer",
            "it has only Logger",
            "it uses Module 1 and Module 2 without Logger"
        ],
        "ans": 0,
        "expEn": "Step 1: only Module 1 (no Module 2, no Tracer, no Logger) satisfies 'Module 1 or Module 2' and violates neither implication.\nStep 2: All other choices contradict at least one given rule.",
        "expRu": "Шаг 1: Вариант «only Module 1 (no Module 2, no Tracer, no Logger)» соблюдает оба условия и не нарушает импликаций.\nШаг 2: Остальные варианты противоречат правилам."
    },
    {
        "id": "prac-logic-053",
        "title": "Conditional Scenario #2",
        "q": "A setup uses Sensor A or Sensor B (or both). If Sensor A is absent, Filter is required; if Sensor B is present, Relay is required. Which scenario is possible?",
        "options": [
            "only Sensor A (no Sensor B, no Filter, no Relay)",
            "it uses Sensor B without Relay",
            "it has neither Sensor A nor Filter",
            "it has only Relay",
            "it uses Sensor A and Sensor B without Relay"
        ],
        "ans": 0,
        "expEn": "Step 1: only Sensor A (no Sensor B, no Filter, no Relay) satisfies 'Sensor A or Sensor B' and violates neither implication.\nStep 2: All other choices contradict at least one given rule.",
        "expRu": "Шаг 1: Вариант «only Sensor A (no Sensor B, no Filter, no Relay)» соблюдает оба условия и не нарушает импликаций.\nШаг 2: Остальные варианты противоречат правилам."
    },
    {
        "id": "prac-logic-054",
        "title": "Conditional Scenario #3",
        "q": "A setup uses Route Alpha or Route Beta (or both). If Route Alpha is absent, Toll is required; if Route Beta is present, Escort is required. Which scenario is possible?",
        "options": [
            "only Route Alpha (no Route Beta, no Toll, no Escort)",
            "it uses Route Beta without Escort",
            "it has neither Route Alpha nor Toll",
            "it has only Escort",
            "it uses Route Alpha and Route Beta without Escort"
        ],
        "ans": 0,
        "expEn": "Step 1: only Route Alpha (no Route Beta, no Toll, no Escort) satisfies 'Route Alpha or Route Beta' and violates neither implication.\nStep 2: All other choices contradict at least one given rule.",
        "expRu": "Шаг 1: Вариант «only Route Alpha (no Route Beta, no Toll, no Escort)» соблюдает оба условия и не нарушает импликаций.\nШаг 2: Остальные варианты противоречат правилам."
    },
    {
        "id": "prac-logic-055",
        "title": "Conditional Scenario #4",
        "q": "A setup uses Herb P or Herb Q (or both). If Herb P is absent, Root is required; if Herb Q is present, Bark is required. Which scenario is possible?",
        "options": [
            "only Herb P (no Herb Q, no Root, no Bark)",
            "it uses Herb Q without Bark",
            "it has neither Herb P nor Root",
            "it has only Bark",
            "it uses Herb P and Herb Q without Bark"
        ],
        "ans": 0,
        "expEn": "Step 1: only Herb P (no Herb Q, no Root, no Bark) satisfies 'Herb P or Herb Q' and violates neither implication.\nStep 2: All other choices contradict at least one given rule.",
        "expRu": "Шаг 1: Вариант «only Herb P (no Herb Q, no Root, no Bark)» соблюдает оба условия и не нарушает импликаций.\nШаг 2: Остальные варианты противоречат правилам."
    },
    {
        "id": "prac-logic-056",
        "title": "Conditional Scenario #5",
        "q": "A setup uses Mode Fast or Mode Safe (or both). If Mode Fast is absent, Cache is required; if Mode Safe is present, Log is required. Which scenario is possible?",
        "options": [
            "only Mode Fast (no Mode Safe, no Cache, no Log)",
            "it uses Mode Safe without Log",
            "it has neither Mode Fast nor Cache",
            "it has only Log",
            "it uses Mode Fast and Mode Safe without Log"
        ],
        "ans": 0,
        "expEn": "Step 1: only Mode Fast (no Mode Safe, no Cache, no Log) satisfies 'Mode Fast or Mode Safe' and violates neither implication.\nStep 2: All other choices contradict at least one given rule.",
        "expRu": "Шаг 1: Вариант «only Mode Fast (no Mode Safe, no Cache, no Log)» соблюдает оба условия и не нарушает импликаций.\nШаг 2: Остальные варианты противоречат правилам."
    },
    {
        "id": "prac-logic-057",
        "title": "Conditional Scenario #6",
        "q": "A setup uses Layer 1 or Layer 2 (or both). If Layer 1 is absent, Mask is required; if Layer 2 is present, Guard is required. Which scenario is possible?",
        "options": [
            "only Layer 1 (no Layer 2, no Mask, no Guard)",
            "it uses Layer 2 without Guard",
            "it has neither Layer 1 nor Mask",
            "it has only Guard",
            "it uses Layer 1 and Layer 2 without Guard"
        ],
        "ans": 0,
        "expEn": "Step 1: only Layer 1 (no Layer 2, no Mask, no Guard) satisfies 'Layer 1 or Layer 2' and violates neither implication.\nStep 2: All other choices contradict at least one given rule.",
        "expRu": "Шаг 1: Вариант «only Layer 1 (no Layer 2, no Mask, no Guard)» соблюдает оба условия и не нарушает импликаций.\nШаг 2: Остальные варианты противоречат правилам."
    },
    {
        "id": "prac-logic-058",
        "title": "Conditional Scenario #7",
        "q": "A setup uses Fuel H or Fuel L (or both). If Fuel H is absent, Valve is required; if Fuel L is present, Pump is required. Which scenario is possible?",
        "options": [
            "only Fuel H (no Fuel L, no Valve, no Pump)",
            "it uses Fuel L without Pump",
            "it has neither Fuel H nor Valve",
            "it has only Pump",
            "it uses Fuel H and Fuel L without Pump"
        ],
        "ans": 0,
        "expEn": "Step 1: only Fuel H (no Fuel L, no Valve, no Pump) satisfies 'Fuel H or Fuel L' and violates neither implication.\nStep 2: All other choices contradict at least one given rule.",
        "expRu": "Шаг 1: Вариант «only Fuel H (no Fuel L, no Valve, no Pump)» соблюдает оба условия и не нарушает импликаций.\nШаг 2: Остальные варианты противоречат правилам."
    },
    {
        "id": "prac-logic-059",
        "title": "Conditional Scenario #8",
        "q": "A setup uses Node Left or Node Right (or both). If Node Left is absent, Bridge is required; if Node Right is present, Mirror is required. Which scenario is possible?",
        "options": [
            "only Node Left (no Node Right, no Bridge, no Mirror)",
            "it uses Node Right without Mirror",
            "it has neither Node Left nor Bridge",
            "it has only Mirror",
            "it uses Node Left and Node Right without Mirror"
        ],
        "ans": 0,
        "expEn": "Step 1: only Node Left (no Node Right, no Bridge, no Mirror) satisfies 'Node Left or Node Right' and violates neither implication.\nStep 2: All other choices contradict at least one given rule.",
        "expRu": "Шаг 1: Вариант «only Node Left (no Node Right, no Bridge, no Mirror)» соблюдает оба условия и не нарушает импликаций.\nШаг 2: Остальные варианты противоречат правилам."
    },
    {
        "id": "prac-logic-060",
        "title": "Conditional Scenario #9",
        "q": "A setup uses Key Alpha or Key Beta (or both). If Key Alpha is absent, Token is required; if Key Beta is present, Audit is required. Which scenario is possible?",
        "options": [
            "only Key Alpha (no Key Beta, no Token, no Audit)",
            "it uses Key Beta without Audit",
            "it has neither Key Alpha nor Token",
            "it has only Audit",
            "it uses Key Alpha and Key Beta without Audit"
        ],
        "ans": 0,
        "expEn": "Step 1: only Key Alpha (no Key Beta, no Token, no Audit) satisfies 'Key Alpha or Key Beta' and violates neither implication.\nStep 2: All other choices contradict at least one given rule.",
        "expRu": "Шаг 1: Вариант «only Key Alpha (no Key Beta, no Token, no Audit)» соблюдает оба условия и не нарушает импликаций.\nШаг 2: Остальные варианты противоречат правилам."
    },
    {
        "id": "prac-logic-061",
        "title": "Tiered Tariff & Usage Calculation",
        "q": "A ride-share service charges a base fare of 4 € plus 1.50 € per km for the first 6 km, and 2.50 € per km for each km beyond 6 km. What is the total fare for a 10 km trip?",
        "options": [
            "23 €",
            "22 €",
            "25 €",
            "19 €",
            "24 €"
        ],
        "ans": 0,
        "expEn": "Step 1: Base fare = 4 €.\nStep 2: First 6 km cost 6 × 1.50 € = 9 €; remaining 4 km cost 4 × 2.50 € = 10 €.\nStep 3: Total = 4 + 9 + 10 = 23 €.",
        "expRu": "Шаг 1: Базовая посадка — 4 €.\nШаг 2: Первые 6 км стоят 6 · 1,50 = 9 €, следующие 4 км стоят 4 · 2,50 = 10 €.\nШаг 3: Итого 4 + 9 + 10 = 23 €."
    },
    {
        "id": "prac-logic-062",
        "title": "Tiered Tariff & Usage Calculation (Analog 1)",
        "q": "A courier charges a 5 € pickup fee plus 2 € per kg for the first 4 kg, and 3 € per kg for each kg above 4 kg. What is the cost for a 7 kg parcel?",
        "options": [
            "22 €",
            "20 €",
            "24 €",
            "18 €",
            "21 €"
        ],
        "ans": 0,
        "expEn": "Step 1: Pickup = 5 €.\nStep 2: First 4 kg = 4 × 2 € = 8 €; remaining 3 kg = 3 × 3 € = 9 €.\nStep 3: Total = 5 + 8 + 9 = 22 €.",
        "expRu": "Шаг 1: Забор посылки — 5 €.\nШаг 2: Первые 4 кг стоят 4 · 2 = 8 €, оставшиеся 3 кг — 3 · 3 = 9 €.\nШаг 3: Итого 5 + 8 + 9 = 22 €."
    },
    {
        "id": "prac-logic-063",
        "title": "Tiered Tariff & Usage Calculation (Analog 2)",
        "q": "A parking garage charges 3 € for the first 2 hours and 4 € for each additional hour (or part thereof). How much does parking for 5 hours cost?",
        "options": [
            "15 €",
            "12 €",
            "19 €",
            "14 €",
            "16 €"
        ],
        "ans": 0,
        "expEn": "Step 1: First 2 hours = 3 €.\nStep 2: Remaining 3 hours at 4 € per hour = 12 €.\nStep 3: Total = 3 + 12 = 15 €.",
        "expRu": "Шаг 1: Первые 2 часа стоят 3 €.\nШаг 2: Оставшиеся 3 часа по 4 € дают 12 €.\nШаг 3: Итого 3 + 12 = 15 €."
    },
    {
        "id": "prac-logic-064",
        "title": "Tiered Rate Rule #1",
        "q": "A service charges a 2 € base fee, 2 € per unit for the first 6 units, and 4 € per unit above 6 units. What is the cost for 10 units?",
        "options": [
            "30",
            "28",
            "33",
            "26",
            "35"
        ],
        "ans": 0,
        "expEn": "Step 1: Base fee = 2 €.\nStep 2: First 6 units cost 6 × 2 = 12 €; remaining 4 units cost 4 × 4 = 16 €.\nStep 3: Total = 30 €.",
        "expRu": "Шаг 1: Базовый сбор — 2 €.\nШаг 2: Первые 6 ед. стоят 12 €, следующие 4 ед. — 16 €.\nШаг 3: Итого 30 €."
    },
    {
        "id": "prac-logic-065",
        "title": "Tiered Rate Rule #2",
        "q": "A service charges a 3 € base fee, 2 € per unit for the first 5 units, and 5 € per unit above 5 units. What is the cost for 8 units?",
        "options": [
            "28",
            "26",
            "31",
            "24",
            "33"
        ],
        "ans": 0,
        "expEn": "Step 1: Base fee = 3 €.\nStep 2: First 5 units cost 5 × 2 = 10 €; remaining 3 units cost 3 × 5 = 15 €.\nStep 3: Total = 28 €.",
        "expRu": "Шаг 1: Базовый сбор — 3 €.\nШаг 2: Первые 5 ед. стоят 10 €, следующие 3 ед. — 15 €.\nШаг 3: Итого 28 €."
    },
    {
        "id": "prac-logic-066",
        "title": "Tiered Rate Rule #3",
        "q": "A service charges a 4 € base fee, 2 € per unit for the first 4 units, and 3 € per unit above 4 units. What is the cost for 9 units?",
        "options": [
            "27",
            "25",
            "30",
            "23",
            "32"
        ],
        "ans": 0,
        "expEn": "Step 1: Base fee = 4 €.\nStep 2: First 4 units cost 4 × 2 = 8 €; remaining 5 units cost 5 × 3 = 15 €.\nStep 3: Total = 27 €.",
        "expRu": "Шаг 1: Базовый сбор — 4 €.\nШаг 2: Первые 4 ед. стоят 8 €, следующие 5 ед. — 15 €.\nШаг 3: Итого 27 €."
    },
    {
        "id": "prac-logic-067",
        "title": "Tiered Rate Rule #4",
        "q": "A service charges a 2 € base fee, 2 € per unit for the first 7 units, and 4 € per unit above 7 units. What is the cost for 11 units?",
        "options": [
            "32",
            "30",
            "35",
            "28",
            "37"
        ],
        "ans": 0,
        "expEn": "Step 1: Base fee = 2 €.\nStep 2: First 7 units cost 7 × 2 = 14 €; remaining 4 units cost 4 × 4 = 16 €.\nStep 3: Total = 32 €.",
        "expRu": "Шаг 1: Базовый сбор — 2 €.\nШаг 2: Первые 7 ед. стоят 14 €, следующие 4 ед. — 16 €.\nШаг 3: Итого 32 €."
    },
    {
        "id": "prac-logic-068",
        "title": "Tiered Rate Rule #5",
        "q": "A service charges a 6 € base fee, 2 € per unit for the first 5 units, and 4 € per unit above 5 units. What is the cost for 9 units?",
        "options": [
            "32",
            "30",
            "35",
            "28",
            "37"
        ],
        "ans": 0,
        "expEn": "Step 1: Base fee = 6 €.\nStep 2: First 5 units cost 5 × 2 = 10 €; remaining 4 units cost 4 × 4 = 16 €.\nStep 3: Total = 32 €.",
        "expRu": "Шаг 1: Базовый сбор — 6 €.\nШаг 2: Первые 5 ед. стоят 10 €, следующие 4 ед. — 16 €.\nШаг 3: Итого 32 €."
    },
    {
        "id": "prac-logic-069",
        "title": "Tiered Rate Rule #6",
        "q": "A service charges a 5 € base fee, 2 € per unit for the first 6 units, and 3 € per unit above 6 units. What is the cost for 10 units?",
        "options": [
            "29",
            "27",
            "32",
            "25",
            "34"
        ],
        "ans": 0,
        "expEn": "Step 1: Base fee = 5 €.\nStep 2: First 6 units cost 6 × 2 = 12 €; remaining 4 units cost 4 × 3 = 12 €.\nStep 3: Total = 29 €.",
        "expRu": "Шаг 1: Базовый сбор — 5 €.\nШаг 2: Первые 6 ед. стоят 12 €, следующие 4 ед. — 12 €.\nШаг 3: Итого 29 €."
    },
    {
        "id": "prac-logic-070",
        "title": "Tiered Rate Rule #7",
        "q": "A service charges a 3 € base fee, 2 € per unit for the first 4 units, and 6 € per unit above 4 units. What is the cost for 8 units?",
        "options": [
            "35",
            "33",
            "38",
            "31",
            "40"
        ],
        "ans": 0,
        "expEn": "Step 1: Base fee = 3 €.\nStep 2: First 4 units cost 4 × 2 = 8 €; remaining 4 units cost 4 × 6 = 24 €.\nStep 3: Total = 35 €.",
        "expRu": "Шаг 1: Базовый сбор — 3 €.\nШаг 2: Первые 4 ед. стоят 8 €, следующие 4 ед. — 24 €.\nШаг 3: Итого 35 €."
    },
    {
        "id": "prac-logic-071",
        "title": "Tiered Rate Rule #8",
        "q": "A service charges a 4 € base fee, 2 € per unit for the first 5 units, and 5 € per unit above 5 units. What is the cost for 10 units?",
        "options": [
            "39",
            "37",
            "42",
            "35",
            "44"
        ],
        "ans": 0,
        "expEn": "Step 1: Base fee = 4 €.\nStep 2: First 5 units cost 5 × 2 = 10 €; remaining 5 units cost 5 × 5 = 25 €.\nStep 3: Total = 39 €.",
        "expRu": "Шаг 1: Базовый сбор — 4 €.\nШаг 2: Первые 5 ед. стоят 10 €, следующие 5 ед. — 25 €.\nШаг 3: Итого 39 €."
    },
    {
        "id": "prac-logic-072",
        "title": "Tiered Rate Rule #9",
        "q": "A service charges a 3 € base fee, 2 € per unit for the first 6 units, and 4 € per unit above 6 units. What is the cost for 9 units?",
        "options": [
            "27",
            "25",
            "30",
            "23",
            "32"
        ],
        "ans": 0,
        "expEn": "Step 1: Base fee = 3 €.\nStep 2: First 6 units cost 6 × 2 = 12 €; remaining 3 units cost 3 × 4 = 12 €.\nStep 3: Total = 27 €.",
        "expRu": "Шаг 1: Базовый сбор — 3 €.\nШаг 2: Первые 6 ед. стоят 12 €, следующие 3 ед. — 12 €.\nШаг 3: Итого 27 €."
    },
    {
        "id": "prac-logic-073",
        "title": "Balance Scale Weight Logic",
        "q": "Spheres of the same size weigh differently depending on color (white, red, or green). Two white spheres and one red sphere balance two red spheres and one green sphere. Now we place one white, one red, and one green sphere on the left pan, and two white spheres on the right pan. Which action balances the scale?",
        "options": [
            "Adding one red sphere on the left pan",
            "The scale is already balanced",
            "Adding one white sphere on the left pan",
            "Adding one green sphere on the right pan",
            "Adding one white sphere on the right pan"
        ],
        "ans": 4,
        "expEn": "Step 1: From 2W + R = 2R + G, subtract R from both sides to get 2W = R + G.\nStep 2: Left pan has W + R + G = W + 2W; right pan has 2W.\nStep 3: Adding one white sphere (W) to the right pan makes both sides equal to 2W + W.",
        "expRu": "Шаг 1: Из равенства 2W + R = 2R + G получаем 2W = R + G.\nШаг 2: На левой чаше W + R + G = W + 2W, на правой — 2W.\nШаг 3: Добавив один белый шар (W) на правую чашу, уравняем обе стороны."
    },
    {
        "id": "prac-logic-074",
        "title": "Balance Scale Weight Logic (Analog 1)",
        "q": "Three blue blocks and one yellow block balance one blue block and two yellow blocks. If the left pan holds one blue block and two yellow blocks, and the right pan holds four blue blocks, which action balances the scale?",
        "options": [
            "Adding one yellow block on the right pan",
            "Adding one blue block on the right pan",
            "The scale is already balanced",
            "Adding one blue block on the left pan",
            "Adding one yellow block on the left pan"
        ],
        "ans": 1,
        "expEn": "Step 1: 3B + Y = B + 2Y implies Y = 2B.\nStep 2: Left pan = B + 2(2B) = 5B; right pan = 4B.\nStep 3: Adding one blue block (B) to the right pan brings it to 5B.",
        "expRu": "Шаг 1: Из 3B + Y = B + 2Y получаем Y = 2B.\nШаг 2: Слева B + 2·(2B) = 5B, справа 4B.\nШаг 3: Добавив один синий шар (B) справа, получаем 5B с обеих сторон."
    },
    {
        "id": "prac-logic-075",
        "title": "Balance Scale Weight Logic (Analog 2)",
        "q": "Two gray weights and two black weights balance one gray weight and three black weights. If the left pan holds two gray weights and one black weight, and the right pan holds two black weights, which action balances the scale?",
        "options": [
            "Adding one gray weight on the right pan",
            "Adding one black weight on the right pan",
            "The scale is already balanced",
            "Adding one gray weight on the left pan",
            "Adding one black weight on the left pan"
        ],
        "ans": 0,
        "expEn": "Step 1: 2Gr + 2Bk = Gr + 3Bk => Gr = Bk.\nStep 2: Left pan has 2Gr + Bk = 3Gr; right pan has 2Bk = 2Gr.\nStep 3: Adding one gray weight (Gr) to the right pan makes it 3Gr.",
        "expRu": "Шаг 1: Из 2Gr + 2Bk = Gr + 3Bk следует Gr = Bk.\nШаг 2: Слева 2Gr + Bk = 3Gr, справа 2Bk = 2Gr.\nШаг 3: Добавив один серый груз (Gr) справа, получаем 3Gr."
    },
    {
        "id": "prac-logic-076",
        "title": "Scale Equilibrium #1",
        "q": "In a balance system where two unit weights equal one heavy weight, the current load is 1 unit lighter on one side than the other. Adding one blue block on the right pan restores balance. Which action does this?",
        "options": [
            "Adding one blue block on the right pan",
            "The scale is already balanced",
            "Adding one yellow block on the right pan",
            "Adding one blue block on the left pan",
            "Adding one yellow block on the left pan"
        ],
        "ans": 0,
        "expEn": "Step 1: One side is short by the exact weight of one blue block on the right pan.\nStep 2: Adding one blue block on the right pan makes both pans equal.",
        "expRu": "Шаг 1: Одной чаше не хватает ровно массы, указанной в условии (one blue block on the right pan).\nШаг 2: Верное действие — Adding one blue block on the right pan."
    },
    {
        "id": "prac-logic-077",
        "title": "Scale Equilibrium #2",
        "q": "In a balance system where two unit weights equal one heavy weight, the current load is 1 unit lighter on one side than the other. Adding one red weight on the left pan restores balance. Which action does this?",
        "options": [
            "Adding one red weight on the left pan",
            "The scale is already balanced",
            "Adding one green weight on the left pan",
            "Adding one red weight on the right pan",
            "Adding one green weight on the right pan"
        ],
        "ans": 0,
        "expEn": "Step 1: One side is short by the exact weight of one red weight on the left pan.\nStep 2: Adding one red weight on the left pan makes both pans equal.",
        "expRu": "Шаг 1: Одной чаше не хватает ровно массы, указанной в условии (one red weight on the left pan).\nШаг 2: Верное действие — Adding one red weight on the left pan."
    },
    {
        "id": "prac-logic-078",
        "title": "Scale Equilibrium #3",
        "q": "In a balance system where two unit weights equal one heavy weight, the current load is 1 unit lighter on one side than the other. Adding one green sphere on the right pan restores balance. Which action does this?",
        "options": [
            "Adding one green sphere on the right pan",
            "The scale is already balanced",
            "Adding one red sphere on the right pan",
            "Adding one green sphere on the left pan",
            "Adding one red sphere on the left pan"
        ],
        "ans": 0,
        "expEn": "Step 1: One side is short by the exact weight of one green sphere on the right pan.\nStep 2: Adding one green sphere on the right pan makes both pans equal.",
        "expRu": "Шаг 1: Одной чаше не хватает ровно массы, указанной в условии (one green sphere on the right pan).\nШаг 2: Верное действие — Adding one green sphere on the right pan."
    },
    {
        "id": "prac-logic-079",
        "title": "Scale Equilibrium #4",
        "q": "In a balance system where two unit weights equal one heavy weight, the current load is 1 unit lighter on one side than the other. Adding one white cube on the left pan restores balance. Which action does this?",
        "options": [
            "Adding one white cube on the left pan",
            "The scale is already balanced",
            "Adding one black cube on the left pan",
            "Adding one white cube on the right pan",
            "Adding one black cube on the right pan"
        ],
        "ans": 0,
        "expEn": "Step 1: One side is short by the exact weight of one white cube on the left pan.\nStep 2: Adding one white cube on the left pan makes both pans equal.",
        "expRu": "Шаг 1: Одной чаше не хватает ровно массы, указанной в условии (one white cube on the left pan).\nШаг 2: Верное действие — Adding one white cube on the left pan."
    },
    {
        "id": "prac-logic-080",
        "title": "Scale Equilibrium #5",
        "q": "In a balance system where two unit weights equal one heavy weight, the current load is 1 unit lighter on one side than the other. Adding one blue sphere on the right pan restores balance. Which action does this?",
        "options": [
            "Adding one blue sphere on the right pan",
            "The scale is already balanced",
            "Adding one gold sphere on the right pan",
            "Adding one blue sphere on the left pan",
            "Adding one gold sphere on the left pan"
        ],
        "ans": 0,
        "expEn": "Step 1: One side is short by the exact weight of one blue sphere on the right pan.\nStep 2: Adding one blue sphere on the right pan makes both pans equal.",
        "expRu": "Шаг 1: Одной чаше не хватает ровно массы, указанной в условии (one blue sphere on the right pan).\nШаг 2: Верное действие — Adding one blue sphere on the right pan."
    },
    {
        "id": "prac-logic-081",
        "title": "Scale Equilibrium #6",
        "q": "In a balance system where two unit weights equal one heavy weight, the current load is 1 unit lighter on one side than the other. Adding one red block on the right pan restores balance. Which action does this?",
        "options": [
            "Adding one red block on the right pan",
            "The scale is already balanced",
            "Adding one blue block on the right pan",
            "Adding one red block on the left pan",
            "Adding one blue block on the left pan"
        ],
        "ans": 0,
        "expEn": "Step 1: One side is short by the exact weight of one red block on the right pan.\nStep 2: Adding one red block on the right pan makes both pans equal.",
        "expRu": "Шаг 1: Одной чаше не хватает ровно массы, указанной в условии (one red block on the right pan).\nШаг 2: Верное действие — Adding one red block on the right pan."
    },
    {
        "id": "prac-logic-082",
        "title": "Scale Equilibrium #7",
        "q": "In a balance system where two unit weights equal one heavy weight, the current load is 1 unit lighter on one side than the other. Adding one green weight on the left pan restores balance. Which action does this?",
        "options": [
            "Adding one green weight on the left pan",
            "The scale is already balanced",
            "Adding one white weight on the left pan",
            "Adding one green weight on the right pan",
            "Adding one white weight on the right pan"
        ],
        "ans": 0,
        "expEn": "Step 1: One side is short by the exact weight of one green weight on the left pan.\nStep 2: Adding one green weight on the left pan makes both pans equal.",
        "expRu": "Шаг 1: Одной чаше не хватает ровно массы, указанной в условии (one green weight on the left pan).\nШаг 2: Верное действие — Adding one green weight on the left pan."
    },
    {
        "id": "prac-logic-083",
        "title": "Scale Equilibrium #8",
        "q": "In a balance system where two unit weights equal one heavy weight, the current load is 1 unit lighter on one side than the other. Adding one black stone on the right pan restores balance. Which action does this?",
        "options": [
            "Adding one black stone on the right pan",
            "The scale is already balanced",
            "Adding one white stone on the right pan",
            "Adding one black stone on the left pan",
            "Adding one white stone on the left pan"
        ],
        "ans": 0,
        "expEn": "Step 1: One side is short by the exact weight of one black stone on the right pan.\nStep 2: Adding one black stone on the right pan makes both pans equal.",
        "expRu": "Шаг 1: Одной чаше не хватает ровно массы, указанной в условии (one black stone on the right pan).\nШаг 2: Верное действие — Adding one black stone on the right pan."
    },
    {
        "id": "prac-logic-084",
        "title": "Scale Equilibrium #9",
        "q": "In a balance system where two unit weights equal one heavy weight, the current load is 1 unit lighter on one side than the other. Adding one gold bar on the left pan restores balance. Which action does this?",
        "options": [
            "Adding one gold bar on the left pan",
            "The scale is already balanced",
            "Adding one silver bar on the left pan",
            "Adding one gold bar on the right pan",
            "Adding one silver bar on the right pan"
        ],
        "ans": 0,
        "expEn": "Step 1: One side is short by the exact weight of one gold bar on the left pan.\nStep 2: Adding one gold bar on the left pan makes both pans equal.",
        "expRu": "Шаг 1: Одной чаше не хватает ровно массы, указанной в условии (one gold bar on the left pan).\nШаг 2: Верное действие — Adding one gold bar on the left pan."
    },
    {
        "id": "prac-logic-085",
        "title": "Nutrition Table & %NRV Scaling",
        "q": "A nutrition table lists 100 g of biscuits as containing 19 g fat, 66 g carbs, 2.4 g fiber, 2.27 mg iron (18% NRV), and 136 mg phosphorus (20% NRV), with 5.6 g carbs and 0.6 g protein in 1 biscuit (8.5 g). What percentage of the NRV of iron does one biscuit contain?",
        "options": [
            "Between 15% and 18%",
            "18%",
            "Between 0.1% and 0.2%",
            "Approximately 1.5%",
            "Approximately 2.0%"
        ],
        "ans": 3,
        "expEn": "Step 1: One biscuit weighs 8.5 g, which is 8.5 / 100 = 0.085 of 100 g.\nStep 2: Since 100 g provides 18% of the iron NRV, one biscuit provides 18% × 0.085 = 1.53%.\nStep 3: Rounded to one decimal place, this is approximately 1.5%.",
        "expRu": "Шаг 1: Одно печенье весит 8,5 г, что составляет 8,5 / 100 = 0,085 от 100 г.\nШаг 2: Поскольку в 100 г содержится 18% суточной нормы железа, в одном печенье 18% · 0,085 = 1,53%.\nШаг 3: Это примерно 1,5%."
    },
    {
        "id": "prac-logic-086",
        "title": "Nutrition Table & %NRV Scaling (Analog 1)",
        "q": "In a cereal label, 100 g provides 20% of the daily NRV for magnesium, while one serving bar weighs 25 g. What percentage of the NRV for magnesium does one bar contain?",
        "options": [
            "5%",
            "20%",
            "0.8%",
            "10%",
            "2.5%"
        ],
        "ans": 0,
        "expEn": "Step 1: One bar is 25 / 100 = 0.25 of 100 g.\nStep 2: 20% × 0.25 = 5% of the NRV.",
        "expRu": "Шаг 1: Батончик весит 25 г — это 0,25 от 100 г.\nШаг 2: 20% · 0,25 = 5% нормы."
    },
    {
        "id": "prac-logic-087",
        "title": "Nutrition Table & %NRV Scaling (Analog 2)",
        "q": "A drink carton states that 100 ml provides 12% of the NRV for vitamin C. How much of the vitamin C NRV is in a 50 ml tasting cup?",
        "options": [
            "6%",
            "12%",
            "24%",
            "2.4%",
            "1.2%"
        ],
        "ans": 0,
        "expEn": "Step 1: 50 ml is half (0.5) of 100 ml.\nStep 2: 12% × 0.5 = 6% of the NRV.",
        "expRu": "Шаг 1: 50 мл составляют половину (0,5) от 100 мл.\nШаг 2: 12% · 0,5 = 6% суточной нормы."
    },
    {
        "id": "prac-logic-088",
        "title": "Data Table Proportion #1",
        "q": "A reference table shows that 100 g of a product supplies 20% of a nutrient's NRV. What share of the NRV is in a 10 g portion?",
        "options": [
            "2%",
            "20%",
            "0.5%",
            "10%",
            "4%"
        ],
        "ans": 0,
        "expEn": "Step 1: Portion ratio = 10 / 100 = 0.1.\nStep 2: 20% × 0.1 = 2%.",
        "expRu": "Шаг 1: Доля порции равна 10 / 100 = 0.1.\nШаг 2: Умножаем 20% на эту долю и получаем 2%."
    },
    {
        "id": "prac-logic-089",
        "title": "Data Table Proportion #2",
        "q": "A reference table shows that 100 g of a product supplies 16% of a nutrient's NRV. What share of the NRV is in a 50 g portion?",
        "options": [
            "8%",
            "16%",
            "3.2%",
            "4%",
            "12%"
        ],
        "ans": 0,
        "expEn": "Step 1: Portion ratio = 50 / 100 = 0.5.\nStep 2: 16% × 0.5 = 8%.",
        "expRu": "Шаг 1: Доля порции равна 50 / 100 = 0.5.\nШаг 2: Умножаем 16% на эту долю и получаем 8%."
    },
    {
        "id": "prac-logic-090",
        "title": "Data Table Proportion #3",
        "q": "A reference table shows that 100 g of a product supplies 12% of a nutrient's NRV. What share of the NRV is in a 25 g portion?",
        "options": [
            "3%",
            "12%",
            "4.8%",
            "6%",
            "1.5%"
        ],
        "ans": 0,
        "expEn": "Step 1: Portion ratio = 25 / 100 = 0.25.\nStep 2: 12% × 0.25 = 3%.",
        "expRu": "Шаг 1: Доля порции равна 25 / 100 = 0.25.\nШаг 2: Умножаем 12% на эту долю и получаем 3%."
    },
    {
        "id": "prac-logic-091",
        "title": "Data Table Proportion #4",
        "q": "A reference table shows that 100 g of a product supplies 30% of a nutrient's NRV. What share of the NRV is in a 20 g portion?",
        "options": [
            "6%",
            "30%",
            "1.5%",
            "10%",
            "3%"
        ],
        "ans": 0,
        "expEn": "Step 1: Portion ratio = 20 / 100 = 0.2.\nStep 2: 30% × 0.2 = 6%.",
        "expRu": "Шаг 1: Доля порции равна 20 / 100 = 0.2.\nШаг 2: Умножаем 30% на эту долю и получаем 6%."
    },
    {
        "id": "prac-logic-092",
        "title": "Data Table Proportion #5",
        "q": "A reference table shows that 100 g of a product supplies 40% of a nutrient's NRV. What share of the NRV is in a 10 g portion?",
        "options": [
            "4%",
            "40%",
            "0.25%",
            "8%",
            "10%"
        ],
        "ans": 0,
        "expEn": "Step 1: Portion ratio = 10 / 100 = 0.1.\nStep 2: 40% × 0.1 = 4%.",
        "expRu": "Шаг 1: Доля порции равна 10 / 100 = 0.1.\nШаг 2: Умножаем 40% на эту долю и получаем 4%."
    },
    {
        "id": "prac-logic-093",
        "title": "Data Table Proportion #6",
        "q": "A reference table shows that 100 g of a product supplies 14% of a nutrient's NRV. What share of the NRV is in a 50 g portion?",
        "options": [
            "7%",
            "14%",
            "2.8%",
            "3.5%",
            "10.5%"
        ],
        "ans": 0,
        "expEn": "Step 1: Portion ratio = 50 / 100 = 0.5.\nStep 2: 14% × 0.5 = 7%.",
        "expRu": "Шаг 1: Доля порции равна 50 / 100 = 0.5.\nШаг 2: Умножаем 14% на эту долю и получаем 7%."
    },
    {
        "id": "prac-logic-094",
        "title": "Data Table Proportion #7",
        "q": "A reference table shows that 100 g of a product supplies 24% of a nutrient's NRV. What share of the NRV is in a 25 g portion?",
        "options": [
            "6%",
            "24%",
            "1.0%",
            "12%",
            "3%"
        ],
        "ans": 0,
        "expEn": "Step 1: Portion ratio = 25 / 100 = 0.25.\nStep 2: 24% × 0.25 = 6%.",
        "expRu": "Шаг 1: Доля порции равна 25 / 100 = 0.25.\nШаг 2: Умножаем 24% на эту долю и получаем 6%."
    },
    {
        "id": "prac-logic-095",
        "title": "Data Table Proportion #8",
        "q": "A reference table shows that 100 g of a product supplies 15% of a nutrient's NRV. What share of the NRV is in a 20 g portion?",
        "options": [
            "3%",
            "15%",
            "1.3%",
            "7.5%",
            "6%"
        ],
        "ans": 0,
        "expEn": "Step 1: Portion ratio = 20 / 100 = 0.2.\nStep 2: 15% × 0.2 = 3%.",
        "expRu": "Шаг 1: Доля порции равна 20 / 100 = 0.2.\nШаг 2: Умножаем 15% на эту долю и получаем 3%."
    },
    {
        "id": "prac-logic-096",
        "title": "Data Table Proportion #9",
        "q": "A reference table shows that 100 g of a product supplies 35% of a nutrient's NRV. What share of the NRV is in a 10 g portion?",
        "options": [
            "3.5%",
            "35%",
            "0.3%",
            "7%",
            "5%"
        ],
        "ans": 0,
        "expEn": "Step 1: Portion ratio = 10 / 100 = 0.1.\nStep 2: 35% × 0.1 = 3.5%.",
        "expRu": "Шаг 1: Доля порции равна 10 / 100 = 0.1.\nШаг 2: Умножаем 35% на эту долю и получаем 3.5%."
    },
    {
        "id": "prac-logic-097",
        "title": "Age Sum & Pigeonhole Bounds",
        "q": "The sum of the integer ages of ten adults (each at least 18) is 380 years. Therefore, we can deduce that:",
        "options": [
            "at least one person is 39 years old or older",
            "all ten people are at least 19 years old",
            "all ten people must be younger than 40",
            "if one person is younger than 20, then at least one of the others is older than 40",
            "if one person is older than 40, then at least one of the others is younger than 20"
        ],
        "ans": 4,
        "expEn": "Step 1: The average age of ten people is 380 / 10 = 38 years.\nStep 2: If one person is older than 40 (at least 41), the remaining 9 people have age sum at most 380 - 41 = 339.\nStep 3: Specifically, if one person is > 40, at least one other person must be younger than 20.",
        "expRu": "Шаг 1: Средний возраст десяти человек равен 380 / 10 = 38 лет.\nШаг 2: Если один человек старше 40 лет (минимум 41), чтобы сумма оставалась равной 380, остальные не могут быть все «большими».\nШаг 3: В частности, хотя бы один из остальных моложе 20 лет."
    },
    {
        "id": "prac-logic-098",
        "title": "Age Sum & Pigeonhole Bounds (Analog 1)",
        "q": "The sum of the integer ages of five siblings is 100 years. Therefore, we can deduce that:",
        "options": [
            "at least one sibling is at least 20 years old",
            "all five siblings are exactly 20 years old",
            "no sibling can be older than 30",
            "every sibling is at least 18 years old",
            "at least three siblings are younger than 15"
        ],
        "ans": 0,
        "expEn": "Step 1: The average age of 5 siblings is 100 / 5 = 20.\nStep 2: By the pigeonhole principle, if all 5 were under 20, their sum would be at most 5 × 19 = 95 < 100.\nStep 3: Thus at least one sibling is at least 20 years old.",
        "expRu": "Шаг 1: Средний возраст пяти братьев и сестёр равен 100 / 5 = 20.\nШаг 2: Если бы каждый был младше 20, сумма была бы не больше 5 · 19 = 95 < 100.\nШаг 3: Значит, хотя бы одному не меньше 20 лет."
    },
    {
        "id": "prac-logic-099",
        "title": "Age Sum & Pigeonhole Bounds (Analog 2)",
        "q": "The total points scored by four players in a match is 84. Therefore, we can deduce that:",
        "options": [
            "all four players scored at least 21 points",
            "at least one player scored at least 21 points",
            "no player scored more than 25 points",
            "at least two players tied for the highest score",
            "every player scored an even number of points"
        ],
        "ans": 1,
        "expEn": "Step 1: The mean score across 4 players is 84 / 4 = 21.\nStep 2: If every player scored 20 or fewer, the total could not exceed 80.\nStep 3: Therefore at least one player scored at least 21 points.",
        "expRu": "Шаг 1: Среднее число очков на игрока равно 84 / 4 = 21.\nШаг 2: При максимуме 20 у каждого сумма не превысила бы 80.\nШаг 3: Следовательно, хотя бы один игрок набрал не менее 21 очка."
    },
    {
        "id": "prac-logic-100",
        "title": "Mean & Pigeonhole Deduction #1",
        "q": "The sum of 6 positive integers is 120. What must be true?",
        "options": [
            "at least one of the numbers is at least 20",
            "every number is equal to 20",
            "all numbers are strictly less than 20",
            "at least 5 numbers are equal to 1",
            "the largest number is at most 20"
        ],
        "ans": 0,
        "expEn": "Step 1: Average = 120 / 6 = 20.\nStep 2: If all 6 integers were <= 19, their sum would be at most 114 < 120.\nStep 3: Thus at least one number is >= 20.",
        "expRu": "Шаг 1: Среднее значение равно 120 / 6 = 20.\nШаг 2: Если бы все числа были меньше 20, их сумма не превысила бы 114.\nШаг 3: Значит, хотя бы одно число не меньше 20."
    },
    {
        "id": "prac-logic-101",
        "title": "Mean & Pigeonhole Deduction #2",
        "q": "The sum of 5 positive integers is 110. What must be true?",
        "options": [
            "at least one of the numbers is at least 22",
            "every number is equal to 22",
            "all numbers are strictly less than 22",
            "at least 4 numbers are equal to 1",
            "the largest number is at most 22"
        ],
        "ans": 0,
        "expEn": "Step 1: Average = 110 / 5 = 22.\nStep 2: If all 5 integers were <= 21, their sum would be at most 105 < 110.\nStep 3: Thus at least one number is >= 22.",
        "expRu": "Шаг 1: Среднее значение равно 110 / 5 = 22.\nШаг 2: Если бы все числа были меньше 22, их сумма не превысила бы 105.\nШаг 3: Значит, хотя бы одно число не меньше 22."
    },
    {
        "id": "prac-logic-102",
        "title": "Mean & Pigeonhole Deduction #3",
        "q": "The sum of 4 positive integers is 92. What must be true?",
        "options": [
            "at least one of the numbers is at least 23",
            "every number is equal to 23",
            "all numbers are strictly less than 23",
            "at least 3 numbers are equal to 1",
            "the largest number is at most 23"
        ],
        "ans": 0,
        "expEn": "Step 1: Average = 92 / 4 = 23.\nStep 2: If all 4 integers were <= 22, their sum would be at most 88 < 92.\nStep 3: Thus at least one number is >= 23.",
        "expRu": "Шаг 1: Среднее значение равно 92 / 4 = 23.\nШаг 2: Если бы все числа были меньше 23, их сумма не превысила бы 88.\nШаг 3: Значит, хотя бы одно число не меньше 23."
    },
    {
        "id": "prac-logic-103",
        "title": "Mean & Pigeonhole Deduction #4",
        "q": "The sum of 8 positive integers is 200. What must be true?",
        "options": [
            "at least one of the numbers is at least 25",
            "every number is equal to 25",
            "all numbers are strictly less than 25",
            "at least 7 numbers are equal to 1",
            "the largest number is at most 25"
        ],
        "ans": 0,
        "expEn": "Step 1: Average = 200 / 8 = 25.\nStep 2: If all 8 integers were <= 24, their sum would be at most 192 < 200.\nStep 3: Thus at least one number is >= 25.",
        "expRu": "Шаг 1: Среднее значение равно 200 / 8 = 25.\nШаг 2: Если бы все числа были меньше 25, их сумма не превысила бы 192.\nШаг 3: Значит, хотя бы одно число не меньше 25."
    },
    {
        "id": "prac-logic-104",
        "title": "Mean & Pigeonhole Deduction #5",
        "q": "The sum of 5 positive integers is 135. What must be true?",
        "options": [
            "at least one of the numbers is at least 27",
            "every number is equal to 27",
            "all numbers are strictly less than 27",
            "at least 4 numbers are equal to 1",
            "the largest number is at most 27"
        ],
        "ans": 0,
        "expEn": "Step 1: Average = 135 / 5 = 27.\nStep 2: If all 5 integers were <= 26, their sum would be at most 130 < 135.\nStep 3: Thus at least one number is >= 27.",
        "expRu": "Шаг 1: Среднее значение равно 135 / 5 = 27.\nШаг 2: Если бы все числа были меньше 27, их сумма не превысила бы 130.\nШаг 3: Значит, хотя бы одно число не меньше 27."
    },
    {
        "id": "prac-logic-105",
        "title": "Mean & Pigeonhole Deduction #6",
        "q": "The sum of 6 positive integers is 168. What must be true?",
        "options": [
            "at least one of the numbers is at least 28",
            "every number is equal to 28",
            "all numbers are strictly less than 28",
            "at least 5 numbers are equal to 1",
            "the largest number is at most 28"
        ],
        "ans": 0,
        "expEn": "Step 1: Average = 168 / 6 = 28.\nStep 2: If all 6 integers were <= 27, their sum would be at most 162 < 168.\nStep 3: Thus at least one number is >= 28.",
        "expRu": "Шаг 1: Среднее значение равно 168 / 6 = 28.\nШаг 2: Если бы все числа были меньше 28, их сумма не превысила бы 162.\nШаг 3: Значит, хотя бы одно число не меньше 28."
    },
    {
        "id": "prac-logic-106",
        "title": "Mean & Pigeonhole Deduction #7",
        "q": "The sum of 4 positive integers is 104. What must be true?",
        "options": [
            "at least one of the numbers is at least 26",
            "every number is equal to 26",
            "all numbers are strictly less than 26",
            "at least 3 numbers are equal to 1",
            "the largest number is at most 26"
        ],
        "ans": 0,
        "expEn": "Step 1: Average = 104 / 4 = 26.\nStep 2: If all 4 integers were <= 25, their sum would be at most 100 < 104.\nStep 3: Thus at least one number is >= 26.",
        "expRu": "Шаг 1: Среднее значение равно 104 / 4 = 26.\nШаг 2: Если бы все числа были меньше 26, их сумма не превысила бы 100.\nШаг 3: Значит, хотя бы одно число не меньше 26."
    },
    {
        "id": "prac-logic-107",
        "title": "Mean & Pigeonhole Deduction #8",
        "q": "The sum of 7 positive integers is 210. What must be true?",
        "options": [
            "at least one of the numbers is at least 30",
            "every number is equal to 30",
            "all numbers are strictly less than 30",
            "at least 6 numbers are equal to 1",
            "the largest number is at most 30"
        ],
        "ans": 0,
        "expEn": "Step 1: Average = 210 / 7 = 30.\nStep 2: If all 7 integers were <= 29, their sum would be at most 203 < 210.\nStep 3: Thus at least one number is >= 30.",
        "expRu": "Шаг 1: Среднее значение равно 210 / 7 = 30.\nШаг 2: Если бы все числа были меньше 30, их сумма не превысила бы 203.\nШаг 3: Значит, хотя бы одно число не меньше 30."
    },
    {
        "id": "prac-logic-108",
        "title": "Mean & Pigeonhole Deduction #9",
        "q": "The sum of 5 positive integers is 145. What must be true?",
        "options": [
            "at least one of the numbers is at least 29",
            "every number is equal to 29",
            "all numbers are strictly less than 29",
            "at least 4 numbers are equal to 1",
            "the largest number is at most 29"
        ],
        "ans": 0,
        "expEn": "Step 1: Average = 145 / 5 = 29.\nStep 2: If all 5 integers were <= 28, their sum would be at most 140 < 145.\nStep 3: Thus at least one number is >= 29.",
        "expRu": "Шаг 1: Среднее значение равно 145 / 5 = 29.\nШаг 2: Если бы все числа были меньше 29, их сумма не превысила бы 140.\nШаг 3: Значит, хотя бы одно число не меньше 29."
    },
    {
        "id": "prac-logic-109",
        "title": "Vault Code Digit Constraints",
        "q": "Uncle Scrooge forgot a 4-digit vault combination of distinct digits (0–9). He recalls: it does not contain 4; the third digit is half the fourth; and the digits are in strictly ascending order from first to fourth. What is the minimum number of attempts needed to be sure to open the vault?",
        "options": [
            "6",
            "4",
            "2",
            "5",
            "3"
        ],
        "ans": 4,
        "expEn": "Step 1: Since the 3rd digit d3 is half the 4th digit d4, d4 is even (2, 4, 6, or 8). Digit 4 is excluded, so d4 is not 4 and cannot be 8 (since d3 would be 4).\nStep 2: If d4 = 2, d3 = 1, leaving no two distinct digits strictly less than 1.\nStep 3: If d4 = 6, d3 = 3, and (d1, d2) can be (0,1), (0,2), or (1,2) — only 3 combinations, so 3 attempts guarantee opening it.",
        "expRu": "Шаг 1: Третья цифра вдвое меньше четвёртой, поэтому четвёртая — чётная; цифра 4 запрещена, а 8 невозможна, иначе третья равна 4.\nШаг 2: При четвёртой цифре 2 третья равна 1 — подобрать две меньшие различные цифры нельзя.\nШаг 3: При четвёртой цифре 6 третья равна 3, а пара (первая, вторая) из {0,1,2} может быть только (0,1), (0,2) или (1,2) — всего 3 варианта (3 попытки)."
    },
    {
        "id": "prac-logic-110",
        "title": "Vault Code Digit Constraints (Analog 1)",
        "q": "A 3-digit code uses distinct digits from 1 to 6 in strictly ascending order, and the last digit is twice the first digit. How many possible codes exist?",
        "options": [
            "4",
            "3",
            "2",
            "5",
            "6"
        ],
        "ans": 1,
        "expEn": "Step 1: Let digits be d1 < d2 < d3 with d3 = 2·d1.\nStep 2: For d1 = 2 -> d3 = 4, d2 = 3 (1 code: 234). For d1 = 3 -> d3 = 6, d2 in {4, 5} (2 codes: 346, 356).\nStep 3: Total = 1 + 2 = 3 codes.",
        "expRu": "Шаг 1: Пусть цифры d1 < d2 < d3 и d3 = 2·d1.\nШаг 2: При d1 = 2 получаем 234 (1 вариант); при d1 = 3 получаем 346 и 356 (2 варианта).\nШаг 3: Всего 3 кода."
    },
    {
        "id": "prac-logic-111",
        "title": "Vault Code Digit Constraints (Analog 2)",
        "q": "A 3-digit PIN uses distinct digits from 0 to 5 in strictly ascending order, and the first digit is 1. How many valid PINs are possible?",
        "options": [
            "6",
            "4",
            "3",
            "5",
            "8"
        ],
        "ans": 0,
        "expEn": "Step 1: The first digit is 1, so the next two digits must be chosen from {2, 3, 4, 5} with d2 < d3.\nStep 2: Choosing 2 distinct digits out of 4 in ascending order gives C(4, 2) = 6 PINs.",
        "expRu": "Шаг 1: Первая цифра равна 1, значит вторая и третья выбираются из {2, 3, 4, 5} в порядке возрастания.\nШаг 2: Число пар из 4 элементов равно C(4, 2) = 6."
    },
    {
        "id": "prac-logic-112",
        "title": "Digit Combinatorics #1",
        "q": "A 3-digit lock code consists of distinct digits from 1 to 5 in ascending order starting with 1. How many distinct valid codes exist?",
        "options": [
            "6",
            "7",
            "8",
            "9",
            "10"
        ],
        "ans": 0,
        "expEn": "Step 1: After the starting digit 1, there are 4 larger available digits (2, 3, 4, 5).\nStep 2: Selecting 2 of them in ascending order gives 6 valid codes.",
        "expRu": "Шаг 1: После первой цифры 1 доступно 4 больших цифр (2, 3, 4, 5).\nШаг 2: Выбрать 2 из них по возрастанию можно 6 способами."
    },
    {
        "id": "prac-logic-113",
        "title": "Digit Combinatorics #2",
        "q": "A 3-digit lock code consists of distinct digits from 1 to 6 in ascending order starting with 2. How many distinct valid codes exist?",
        "options": [
            "6",
            "7",
            "8",
            "9",
            "10"
        ],
        "ans": 0,
        "expEn": "Step 1: After the starting digit 2, there are 4 larger available digits (3, 4, 5, 6).\nStep 2: Selecting 2 of them in ascending order gives 6 valid codes.",
        "expRu": "Шаг 1: После первой цифры 2 доступно 4 больших цифр (3, 4, 5, 6).\nШаг 2: Выбрать 2 из них по возрастанию можно 6 способами."
    },
    {
        "id": "prac-logic-114",
        "title": "Digit Combinatorics #3",
        "q": "A 3-digit lock code consists of distinct digits from 0 to 4 in ascending order starting with 1. How many distinct valid codes exist?",
        "options": [
            "3",
            "4",
            "5",
            "6",
            "7"
        ],
        "ans": 0,
        "expEn": "Step 1: After the starting digit 1, there are 3 larger available digits (2, 3, 4).\nStep 2: Selecting 2 of them in ascending order gives 3 valid codes.",
        "expRu": "Шаг 1: После первой цифры 1 доступно 3 больших цифр (2, 3, 4).\nШаг 2: Выбрать 2 из них по возрастанию можно 3 способами."
    },
    {
        "id": "prac-logic-115",
        "title": "Digit Combinatorics #4",
        "q": "A 3-digit lock code consists of distinct digits from 1 to 7 in ascending order starting with 4. How many distinct valid codes exist?",
        "options": [
            "3",
            "4",
            "5",
            "6",
            "7"
        ],
        "ans": 0,
        "expEn": "Step 1: After the starting digit 4, there are 3 larger available digits (5, 6, 7).\nStep 2: Selecting 2 of them in ascending order gives 3 valid codes.",
        "expRu": "Шаг 1: После первой цифры 4 доступно 3 больших цифр (5, 6, 7).\nШаг 2: Выбрать 2 из них по возрастанию можно 3 способами."
    },
    {
        "id": "prac-logic-116",
        "title": "Digit Combinatorics #5",
        "q": "A 3-digit lock code consists of distinct digits from 2 to 6 in ascending order starting with 2. How many distinct valid codes exist?",
        "options": [
            "6",
            "7",
            "8",
            "9",
            "10"
        ],
        "ans": 0,
        "expEn": "Step 1: After the starting digit 2, there are 4 larger available digits (3, 4, 5, 6).\nStep 2: Selecting 2 of them in ascending order gives 6 valid codes.",
        "expRu": "Шаг 1: После первой цифры 2 доступно 4 больших цифр (3, 4, 5, 6).\nШаг 2: Выбрать 2 из них по возрастанию можно 6 способами."
    },
    {
        "id": "prac-logic-117",
        "title": "Digit Combinatorics #6",
        "q": "A 3-digit lock code consists of distinct digits from 0 to 5 in ascending order starting with 2. How many distinct valid codes exist?",
        "options": [
            "3",
            "4",
            "5",
            "6",
            "7"
        ],
        "ans": 0,
        "expEn": "Step 1: After the starting digit 2, there are 3 larger available digits (3, 4, 5).\nStep 2: Selecting 2 of them in ascending order gives 3 valid codes.",
        "expRu": "Шаг 1: После первой цифры 2 доступно 3 больших цифр (3, 4, 5).\nШаг 2: Выбрать 2 из них по возрастанию можно 3 способами."
    },
    {
        "id": "prac-logic-118",
        "title": "Digit Combinatorics #7",
        "q": "A 3-digit lock code consists of distinct digits from 1 to 6 in ascending order starting with 3. How many distinct valid codes exist?",
        "options": [
            "3",
            "4",
            "5",
            "6",
            "7"
        ],
        "ans": 0,
        "expEn": "Step 1: After the starting digit 3, there are 3 larger available digits (4, 5, 6).\nStep 2: Selecting 2 of them in ascending order gives 3 valid codes.",
        "expRu": "Шаг 1: После первой цифры 3 доступно 3 больших цифр (4, 5, 6).\nШаг 2: Выбрать 2 из них по возрастанию можно 3 способами."
    },
    {
        "id": "prac-logic-119",
        "title": "Digit Combinatorics #8",
        "q": "A 3-digit lock code consists of distinct digits from 2 to 7 in ascending order starting with 4. How many distinct valid codes exist?",
        "options": [
            "3",
            "4",
            "5",
            "6",
            "7"
        ],
        "ans": 0,
        "expEn": "Step 1: After the starting digit 4, there are 3 larger available digits (5, 6, 7).\nStep 2: Selecting 2 of them in ascending order gives 3 valid codes.",
        "expRu": "Шаг 1: После первой цифры 4 доступно 3 больших цифр (5, 6, 7).\nШаг 2: Выбрать 2 из них по возрастанию можно 3 способами."
    },
    {
        "id": "prac-logic-120",
        "title": "Digit Combinatorics #9",
        "q": "A 3-digit lock code consists of distinct digits from 0 to 6 in ascending order starting with 4. How many distinct valid codes exist?",
        "options": [
            "1",
            "2",
            "3",
            "4",
            "5"
        ],
        "ans": 0,
        "expEn": "Step 1: After the starting digit 4, there are 2 larger available digits (5, 6).\nStep 2: Selecting 2 of them in ascending order gives 1 valid codes.",
        "expRu": "Шаг 1: После первой цифры 4 доступно 2 больших цифр (5, 6).\nШаг 2: Выбрать 2 из них по возрастанию можно 1 способами."
    }
];
