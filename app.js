/*
 * app.js - CEnT-S Simulator logic ONLY. No question data lives here.
 *
 * Data comes from external files loaded by simulator.html (edit those to change content):
 *   db_reading.js      -> window.DB_READING       (passages with linked questions)
 *   db_math.js         -> window.DB_MATH
 *   db_logic.js        -> window.DB_LOGIC
 *   db_biology.js      -> window.DB_BIOLOGY
 *   db_chemistry.js    -> window.DB_CHEMISTRY
 *   db_physics.js      -> window.DB_PHYSICS
 *   db_official_test.js-> window.OFFICIAL_SAMPLE_TEST (full 60-question exam)
 *   db_generated_test.js-> window.DB_GENERATED_TESTS  (array of full 60-question exams)
 */
(function () {
    const PRACTICE_SECTIONS = [
        { key: 'Reading', title: 'Reading Comprehension' },
        { key: 'Math', title: 'Mathematics' },
        { key: 'Logic', title: 'Reasoning on Texts and Data' },
        { key: 'Biology', title: 'Biology' },
        { key: 'Chemistry', title: 'Chemistry' },
        { key: 'Physics', title: 'Physics' },
        { key: 'Random', title: 'Random Question' }
    ];

    const VALID_TABS = ['home', 'tests', 'practice', 'bookmarks', 'dictionary'];


    let currentUiLang = localStorage.getItem('cents_ui_lang') || 'ru';
    if (!['ru', 'en', 'it'].includes(currentUiLang)) currentUiLang = 'ru';

    const UI_DICTIONARY = {
        ru: {
            pageTitle: 'CEnT-S Simulator',
            accDefaultName: 'Профиль',
            accTitleAttr: 'Учётная запись',
            logoutBtn: 'Выйти',
            navHome: 'Home',
            navExams: 'Exams',
            navPractice: 'Practice',
            navBookmarks: 'Bookmarks',
            navDict: 'Dictionary',
            mobHome: '🏠 Главная',
            mobExams: '📑 Экзамены',
            mobPractice: '⚡ Практика',
            mobBookmarks: '⭐ Закладки',
            mobDict: '📖 Словарь',
            homeBadge: 'С возвращением',
            homeTitle: 'CEnT-S Preparation Hub',
            homeSubtitle: 'Выбери направление для работы: полноценные симуляции экзамена, тренировка по темам, сохранённые задачи или личный словарь.',
            cardExamsTitle: 'Exams & Simulations',
            cardExamsDesc: 'Полноформатные пробные тесты на 60 заданий с таймером на 140 минут и расчётом баллов по шкале 1500.',
            cardExamsCta: 'Перейти к экзаменам',
            cardPracticeTitle: 'Targeted Practice',
            cardPracticeDesc: 'Отработка отдельных секций (Reading, Math, Logic, Biology, Chemistry, Physics), перемешивание вопросов и режим Random.',
            cardPracticeCta: 'Начать практику',
            cardBookmarksTitle: 'Saved Bookmarks',
            cardBookmarksDesc: 'Избранные задания со звёздочкой, разложенные по разделам для повторного прорешивания и разбора.',
            cardBookmarksCta: 'Открыть закладки',
            cardDictTitle: 'My Vocabulary',
            cardDictDesc: 'Личный словарь терминов и слов, сохранённых при чтении текстов и выполнении заданий.',
            cardDictCta: 'Открыть словарь',
            examsTitle: 'Exams',
            examsOfficial: 'Official Sample Tests',
            examsGenerated: 'Generated Tests',
            examStartTest: 'Начать тест',
            examStartShort: 'Старт',
            examRetakeBtn: 'Перерешать',
            examQuestionsSuffix: 'вопросов',
            examMinutesSuffix: 'мин.',
            practiceTitle: 'Targeted Practice',
            practiceSubtitle: 'Выбери раздел для тренировки или переключись между ними в верхней панели.',
            pracCardDesc0: 'Тексты с разбором деталей, выводов, синонимов и полноэкранным окном чтения.',
            pracCardDesc1: 'Алгебра, функции, геометрия и комбинаторика: задачи в формате CEnT-S с пошаговыми разборами.',
            pracCardDesc2: 'Логические условия, доли, проценты, оценки и работа с числовыми данными.',
            pracCardDesc3: 'Клетка, метаболизм, генетика, физиология и экология с пошаговыми разборами.',
            pracCardDesc4: 'Стехиометрия, строение молекул, реакции и свойства веществ.',
            pracCardDesc5: 'Кинематика, динамика, работа, давление и электрические поля.',
            pracCardDesc6: 'Одна случайная задача из всего банка за раз с подробным объяснением и переходом к следующей.',
            pracCardDesc7: 'Загрузка фотографий своих заданий без обработки и сжатия — с ручным выбором раздела.',
            openSection: 'Открыть раздел',
            launchRandom: 'Запустить Random',
            openPhotoBlock: 'Открыть фото-блок',
            allSections: '← Все разделы',
            addFile: 'Добавить файл',
            shuffleQuestions: '↻ Перемешать вопросы',
            jumpTaskLabel: 'Переход по заданиям',
            jumpBtn: 'Перейти',
            catUnassigned: 'Нераспределённые',
            catTrash: 'Корзина',
            bookmarksTitle: 'Saved Questions',
            bookmarksSubtitle: 'Review your bookmarked tasks grouped by subject.',
            noBookmarksMsg: 'У вас нет закладок. Нажмите на ☆ на любом задании.',
            dictTitle: 'My Vocabulary 📖',
            dictSubtitle: 'Учите слова по карточкам или просматривайте список: ваш словарь, словарь акцента или оба набора вместе.',
            dictCards: 'Карточки',
            dictList: 'Список',
            dictMine: 'Мой словарь',
            dictAccent: 'Словарь акцента',
            dictBoth: 'Вместе (Оба)',
            dictCardLabel: 'Карточка',
            dictOfLabel: 'из',
            dictLearnedLabel: 'Выучено',
            dictShuffleBtn: '🔀 Перемешать',
            dictResetOrderBtn: '↻ По порядку',
            dictFlipBtn: 'Перевернуть',
            dictShowWordBtn: 'Показать слово',
            dictMasteredBtn: 'Выучил ✓',
            dictUnmasteredBtn: 'Убрать отметку ✓',
            dictPrevBtn: '← Назад',
            dictNextBtn: 'Далее →',
            dictFlipHint: 'Нажмите, чтобы перевернуть карточку',
            dictWordSide: 'Слово',
            dictTransSide: 'Перевод',
            dictSummaryMine: 'Мой словарь: {0} слов',
            dictSummaryAccent: 'Словарь акцента: {0} слов',
            dictSummaryBoth: 'Вместе (без дублей): {0} слов (своих: {1}, акцента: {2})',
            exitExam: '← Exit Exam',
            timeRemaining: 'Time Remaining',
            submitExam: 'Submit & Score Exam',
            resultsTitle: 'Результаты экзамена',
            spentTimePrefix: 'Потрачено времени:',
            spentTimeSuffix: 'мин.',
            zoneGreen: '🟢 Green Zone',
            quoteGreen: 'Отличный уровень — материал усвоен уверенно.',
            zoneRed: '🔴 Red Zone',
            quoteRed: 'Хорошая отправная точка — разбери каждый шаг в объяснениях и пробуй снова.',
            zoneOrange: '🟠 Orange Zone',
            quoteOrange: 'Уверенная база уже есть; докрути внимательность к условиям и формулам.',
            zoneYellow: '🟡 Yellow Zone',
            quoteYellow: 'Сильный результат — остаётся отточить сложные ловушки и темп.',
            homeMenu: 'Главное меню',
            retakeTest: '↻ Перерешать тест',
            viewExplanations: 'Посмотреть разборы',
            translatorTitle: 'Translator & Dict 📖',
            translatorPlaceholder: 'Type a word...',
            translateBtn: 'Translate',
            saveToDictBtn: 'Save to Dictionary',
            openDictTitle: 'Открыть словарь',
            switchAccTitle: 'Сменить аккаунт',
            accentTitle: 'Выберите акцентный цвет',
            doneBtn: 'Готово',
            accModalBadge: 'Учётная запись',
            statSolved: 'Решено всего',
            statAccuracy: 'Точность',
            statProb: 'Вероятность / Прогноз',
            statBySec: 'Статистика по разделам',
            statSecLine: 'Решено: {0} • Верно: {1}',
            themeLabel: 'Тема оформления',
            themeSub: 'Светлая / Тёмная',
            themeDarkLabel: 'Тёмная',
            themeLightLabel: 'Светлая',
            langLabel: 'Язык интерфейса',
            langSub: 'Задания остаются на английском',
            accentColorBtn: '🎨 Акцентный цвет',
            switchManageBtn: 'Сменить / Аккаунты',
            uploadTitle: 'Загрузка фотографии',
            uploadDropText: 'Перетащите файл сюда или нажмите для выбора',
            uploadNoFile: 'Файл пока не выбран',
            uploadSelectSec: 'Выберите раздел',
            cancelBtn: 'Отмена',
            addBtn: 'Добавить',
            checkAnswer: 'Check Answer',
            resetTaskBtn: 'Сбросить',
            collapseBtn: 'Свернуть ▲',
            expandBtn: 'Развернуть ▼',
            anotherTaskBtn: 'Другая задача из раздела',
            nextTaskBtn: 'Следующая задача →',
            resetHistoryBtn: '↻ Сбросить историю'
        },
        en: {
            pageTitle: 'CEnT-S Simulator',
            accDefaultName: 'Profile',
            accTitleAttr: 'Account',
            logoutBtn: 'Log out',
            navHome: 'Home',
            navExams: 'Exams',
            navPractice: 'Practice',
            navBookmarks: 'Bookmarks',
            navDict: 'Dictionary',
            mobHome: '🏠 Home',
            mobExams: '📑 Exams',
            mobPractice: '⚡ Practice',
            mobBookmarks: '⭐ Bookmarks',
            mobDict: '📖 Dict',
            homeBadge: 'Welcome back',
            homeTitle: 'CEnT-S Preparation Hub',
            homeSubtitle: 'Choose a study mode: full exam simulations, topic practice, saved bookmarks, or personal vocabulary.',
            cardExamsTitle: 'Exams & Simulations',
            cardExamsDesc: 'Full 60-question mock tests with a 140-minute timer and 1500-point scaled score calculation.',
            cardExamsCta: 'Go to exams',
            cardPracticeTitle: 'Targeted Practice',
            cardPracticeDesc: 'Practice individual sections (Reading, Math, Logic, Biology, Chemistry, Physics), shuffle questions, and use Random mode.',
            cardPracticeCta: 'Start practice',
            cardBookmarksTitle: 'Saved Bookmarks',
            cardBookmarksDesc: 'Starred questions organized by subject for reviewing and re-solving.',
            cardBookmarksCta: 'Open bookmarks',
            cardDictTitle: 'My Vocabulary',
            cardDictDesc: 'Personal dictionary of words and terms saved while reading passages and solving tasks.',
            cardDictCta: 'Open dictionary',
            examsTitle: 'Exams',
            examsOfficial: 'Official Sample Tests',
            examsGenerated: 'Generated Tests',
            examStartTest: 'Start test',
            examStartShort: 'Start',
            examRetakeBtn: 'Retake',
            examQuestionsSuffix: 'questions',
            examMinutesSuffix: 'min.',
            practiceTitle: 'Targeted Practice',
            practiceSubtitle: 'Select a section to practice or switch between sections in the bar above.',
            pracCardDesc0: 'Reading passages with detail, inference, and vocabulary questions plus a fullscreen reader.',
            pracCardDesc1: 'Algebra, functions, geometry, and combinatorics problems in CEnT-S style with step-by-step solutions.',
            pracCardDesc2: 'Logical conditions, fractions, percentages, estimations, and data analysis tasks.',
            pracCardDesc3: 'Cells, metabolism, genetics, physiology, and ecology questions with clear explanations.',
            pracCardDesc4: 'Stoichiometry, molecular structure, chemical reactions, and properties of substances.',
            pracCardDesc5: 'Kinematics, dynamics, work, pressure, and electric fields practice problems.',
            pracCardDesc6: 'One random question from the entire bank at a time with full explanations and next-task flow.',
            pracCardDesc7: 'Upload photos of your own study questions without compression, sorted by subject section.',
            openSection: 'Open section',
            launchRandom: 'Launch Random',
            openPhotoBlock: 'Open photo bank',
            allSections: '← All sections',
            addFile: 'Add file',
            shuffleQuestions: '↻ Shuffle questions',
            jumpTaskLabel: 'Jump to task',
            jumpBtn: 'Go',
            catUnassigned: 'Unassigned',
            catTrash: 'Trash',
            bookmarksTitle: 'Saved Questions',
            bookmarksSubtitle: 'Review your bookmarked tasks grouped by subject.',
            noBookmarksMsg: 'You have no bookmarks yet. Click ☆ on any question.',
            dictTitle: 'My Vocabulary 📖',
            dictSubtitle: 'Read and review English vocabulary cards or browse the word list across your deck and accent list.',
            dictCards: 'Cards',
            dictList: 'List',
            dictMine: 'My dictionary',
            dictAccent: 'Accent vocabulary',
            dictBoth: 'Combined (Both)',
            dictCardLabel: 'Card',
            dictOfLabel: 'of',
            dictLearnedLabel: 'Learned',
            dictShuffleBtn: '🔀 Shuffle',
            dictResetOrderBtn: '↻ In order',
            dictFlipBtn: 'Flip',
            dictShowWordBtn: 'Show word',
            dictMasteredBtn: 'Got it ✓',
            dictUnmasteredBtn: 'Unmark ✓',
            dictPrevBtn: '← Prev',
            dictNextBtn: 'Next →',
            dictFlipHint: 'Click card to flip',
            dictWordSide: 'Word',
            dictTransSide: 'Reading note',
            dictSummaryMine: 'My dictionary: {0} words',
            dictSummaryAccent: 'Accent dictionary: {0} words',
            dictSummaryBoth: 'Combined (no duplicates): {0} words (mine: {1}, accent: {2})',
            exitExam: '← Exit Exam',
            timeRemaining: 'Time Remaining',
            submitExam: 'Submit & Score Exam',
            resultsTitle: 'Exam Results',
            spentTimePrefix: 'Time spent:',
            spentTimeSuffix: 'min.',
            zoneGreen: '🟢 Green Zone',
            quoteGreen: 'Great performance — you have a strong command of the material.',
            zoneRed: '🔴 Red Zone',
            quoteRed: 'Good starting point — review every explanation step carefully and try again.',
            zoneOrange: '🟠 Orange Zone',
            quoteOrange: 'Solid foundation — keep sharpening attention to conditions and formulas.',
            zoneYellow: '🟡 Yellow Zone',
            quoteYellow: 'Strong result — focus on tricky traps and pacing.',
            homeMenu: 'Home Menu',
            retakeTest: '↻ Retake test',
            viewExplanations: 'View explanations',
            translatorTitle: 'Translator & Dict 📖',
            translatorPlaceholder: 'Type a word...',
            translateBtn: 'Translate',
            saveToDictBtn: 'Save to Dictionary',
            openDictTitle: 'Open dictionary',
            switchAccTitle: 'Switch account',
            accentTitle: 'Choose accent color',
            doneBtn: 'Done',
            accModalBadge: 'Account',
            statSolved: 'Total solved',
            statAccuracy: 'Accuracy',
            statProb: 'Score outlook',
            statBySec: 'Stats by section',
            statSecLine: 'Solved: {0} • Correct: {1}',
            themeLabel: 'Theme mode',
            themeSub: 'Light / Dark',
            themeDarkLabel: 'Dark',
            themeLightLabel: 'Light',
            langLabel: 'Interface language',
            langSub: 'Questions stay in English',
            accentColorBtn: '🎨 Accent color',
            switchManageBtn: 'Switch / Accounts',
            uploadTitle: 'Upload photo',
            uploadDropText: 'Drag a file here or click to choose',
            uploadNoFile: 'No file selected yet',
            uploadSelectSec: 'Select section',
            cancelBtn: 'Cancel',
            addBtn: 'Add',
            checkAnswer: 'Check Answer',
            resetTaskBtn: 'Reset',
            collapseBtn: 'Collapse ▲',
            expandBtn: 'Expand ▼',
            anotherTaskBtn: 'Another task in section',
            nextTaskBtn: 'Next task →',
            resetHistoryBtn: '↻ Reset history'
        },
        it: {
            pageTitle: 'CEnT-S Simulator',
            accDefaultName: 'Account',
            accTitleAttr: 'Account',
            logoutBtn: 'Esci',
            navHome: 'Home',
            navExams: 'Esami',
            navPractice: 'Pratica',
            navBookmarks: 'Preferiti',
            navDict: 'Dizionario',
            mobHome: '🏠 Home',
            mobExams: '📑 Esami',
            mobPractice: '⚡ Pratica',
            mobBookmarks: '⭐ Preferiti',
            mobDict: '📖 Dizio',
            homeBadge: 'Bentornato',
            homeTitle: 'CEnT-S Preparation Hub',
            homeSubtitle: 'Scegli una modalità: simulazioni d’esame complete, pratica per argomento, preferiti salvati o dizionario personale.',
            cardExamsTitle: 'Exams & Simulations',
            cardExamsDesc: 'Prove complete da 60 domande con timer di 140 minuti e calcolo del punteggio su scala 1500.',
            cardExamsCta: 'Vai agli esami',
            cardPracticeTitle: 'Targeted Practice',
            cardPracticeDesc: 'Allenamento per singole sezioni (Reading, Math, Logic, Biology, Chemistry, Physics), ordine casuale e modalità Random.',
            cardPracticeCta: 'Inizia pratica',
            cardBookmarksTitle: 'Saved Bookmarks',
            cardBookmarksDesc: 'Domande salvate con la stella, suddivise per materia per ripassarle e rivederle.',
            cardBookmarksCta: 'Apri preferiti',
            cardDictTitle: 'My Vocabulary',
            cardDictDesc: 'Dizionario personale di parole e termini salvati durante la lettura dei testi e lo svolgimento dei quesiti.',
            cardDictCta: 'Apri dizionario',
            examsTitle: 'Esami',
            examsOfficial: 'Official Sample Tests',
            examsGenerated: 'Generated Tests',
            examStartTest: 'Avvia test',
            examStartShort: 'Avvia',
            examRetakeBtn: 'Ripeti',
            examQuestionsSuffix: 'domande',
            examMinutesSuffix: 'min.',
            practiceTitle: 'Pratica mirata',
            practiceSubtitle: 'Scegli una sezione da allenare o passa da una all’altra nella barra qui sopra.',
            pracCardDesc0: 'Brani di lettura con domande su dettagli, deduzioni e lessico più visualizzazione a schermo intero.',
            pracCardDesc1: 'Esercizi di algebra, funzioni, geometria e combinatoria in stile CEnT-S con soluzioni guidate.',
            pracCardDesc2: 'Condizioni logiche, frazioni, percentuali, stime e analisi dei dati.',
            pracCardDesc3: 'Quesiti su cellula, metabolismo, genetica, fisiologia ed ecologia con spiegazioni chiare.',
            pracCardDesc4: 'Stechiometria, struttura molecolare, reazioni e proprietà delle sostanze.',
            pracCardDesc5: 'Esercizi su cinematica, dinamica, lavoro, pressione e campi elettrici.',
            pracCardDesc6: 'Una domanda casuale dall’intero archivio alla volta con spiegazione completa e passaggio successivo.',
            pracCardDesc7: 'Carica le foto dei tuoi quesiti senza compressione, organizzate per sezione.',
            openSection: 'Apri sezione',
            launchRandom: 'Avvia Random',
            openPhotoBlock: 'Apri blocco foto',
            allSections: '← Tutte le sezioni',
            addFile: 'Aggiungi file',
            shuffleQuestions: '↻ Mescola domande',
            jumpTaskLabel: 'Vai al quesito',
            jumpBtn: 'Vai',
            catUnassigned: 'Non assegnati',
            catTrash: 'Cestino',
            bookmarksTitle: 'Domande salvate',
            bookmarksSubtitle: 'Rivedi i quesiti salvati raggruppati per materia.',
            noBookmarksMsg: 'Non hai ancora preferiti. Clicca su ☆ su qualsiasi quesito.',
            dictTitle: 'My Vocabulary 📖',
            dictSubtitle: 'Studia con le schede o sfoglia l’elenco: il tuo dizionario, il vocabolario di accento o entrambi insieme.',
            dictCards: 'Schede',
            dictList: 'Elenco',
            dictMine: 'Il mio dizionario',
            dictAccent: 'Vocabolario accento',
            dictBoth: 'Insieme (Entrambi)',
            dictCardLabel: 'Scheda',
            dictOfLabel: 'di',
            dictLearnedLabel: 'Imparate',
            dictShuffleBtn: '🔀 Mescola',
            dictResetOrderBtn: '↻ In ordine',
            dictFlipBtn: 'Gira',
            dictShowWordBtn: 'Mostra parola',
            dictMasteredBtn: 'Imparata ✓',
            dictUnmasteredBtn: 'Rimuovi segno ✓',
            dictPrevBtn: '← Indietro',
            dictNextBtn: 'Avanti →',
            dictFlipHint: 'Tocca la scheda per girarla',
            dictWordSide: 'Parola',
            dictTransSide: 'Traduzione (IT)',
            dictSummaryMine: 'Il mio dizionario: {0} parole',
            dictSummaryAccent: 'Vocabolario accento: {0} parole',
            dictSummaryBoth: 'Insieme (senza duplicati): {0} parole (mie: {1}, accento: {2})',
            exitExam: '← Esci dall’esame',
            timeRemaining: 'Tempo rimanente',
            submitExam: 'Invia e calcola punteggio',
            resultsTitle: 'Risultati dell’esame',
            spentTimePrefix: 'Tempo impiegato:',
            spentTimeSuffix: 'min.',
            zoneGreen: '🟢 Green Zone',
            quoteGreen: 'Ottimo livello — hai assimilato bene il programma.',
            zoneRed: '🔴 Red Zone',
            quoteRed: 'Buon punto di partenza — rivedi ogni passaggio delle spiegazioni e riprova.',
            zoneOrange: '🟠 Orange Zone',
            quoteOrange: 'Buona base — cura l’attenzione alle condizioni e alle formule.',
            zoneYellow: '🟡 Yellow Zone',
            quoteYellow: 'Risultato solido — resta da affinare i dettagli e il ritmo.',
            homeMenu: 'Menu principale',
            retakeTest: '↻ Ripeti test',
            viewExplanations: 'Vedi spiegazioni',
            translatorTitle: 'Translator & Dict 📖',
            translatorPlaceholder: 'Scrivi una parola...',
            translateBtn: 'Traduci',
            saveToDictBtn: 'Salva nel dizionario',
            openDictTitle: 'Apri dizionario',
            switchAccTitle: 'Cambia account',
            accentTitle: 'Scegli colore accento',
            doneBtn: 'Fatto',
            accModalBadge: 'Account',
            statSolved: 'Risolti totali',
            statAccuracy: 'Precisione',
            statProb: 'Stima punteggio',
            statBySec: 'Statistiche per sezione',
            statSecLine: 'Risolti: {0} • Corrette: {1}',
            themeLabel: 'Tema',
            themeSub: 'Chiaro / Scuro',
            themeDarkLabel: 'Scuro',
            themeLightLabel: 'Chiaro',
            langLabel: 'Lingua interfaccia',
            langSub: 'I quesiti restano in inglese',
            accentColorBtn: '🎨 Colore accento',
            switchManageBtn: 'Cambia / Account',
            uploadTitle: 'Carica foto',
            uploadDropText: 'Trascina qui un file o clicca per scegliere',
            uploadNoFile: 'Nessun file selezionato',
            uploadSelectSec: 'Seleziona sezione',
            cancelBtn: 'Annulla',
            addBtn: 'Aggiungi',
            checkAnswer: 'Verifica risposta',
            resetTaskBtn: 'Ripristina',
            collapseBtn: 'Comprimi ▲',
            expandBtn: 'Espandi ▼',
            anotherTaskBtn: 'Altro quesito della sezione',
            nextTaskBtn: 'Prossimo quesito →',
            resetHistoryBtn: '↻ Azzera cronologia'
        }
    };

    function showSiteConfirmModal(opts) {
        return new Promise((resolve) => {
            const modal = document.getElementById('site-confirm-modal');
            if (!modal) {
                resolve(window.confirm((opts && opts.message) || 'Подтвердить действие?'));
                return;
            }
            const iconEl = document.getElementById('site-confirm-icon');
            const badgeEl = document.getElementById('site-confirm-badge');
            const titleEl = document.getElementById('site-confirm-title');
            const msgEl = document.getElementById('site-confirm-message');
            const cancelBtn = document.getElementById('site-confirm-cancel-btn');
            const okBtn = document.getElementById('site-confirm-ok-btn');
            const closeX = document.getElementById('site-confirm-close-x');

            const isNoticeOnly = Boolean(opts && opts.noticeOnly);
            if (iconEl) iconEl.textContent = (opts && opts.icon) || (isNoticeOnly ? 'ℹ️' : '↻');
            if (badgeEl) badgeEl.textContent = (opts && opts.badge) || (isNoticeOnly ? 'Уведомление' : 'Подтверждение');
            if (titleEl) titleEl.textContent = (opts && opts.title) || (isNoticeOnly ? 'Обратите внимание' : 'Подтвердите действие');
            if (msgEl) msgEl.textContent = (opts && opts.message) || '';
            if (okBtn) okBtn.textContent = (opts && opts.okText) || (isNoticeOnly ? 'Понятно' : 'Подтвердить');
            if (cancelBtn) {
                cancelBtn.textContent = (opts && opts.cancelText) || 'Отмена';
                cancelBtn.classList.toggle('hide', isNoticeOnly);
            }

            let settled = false;
            const finish = (val) => {
                if (settled) return;
                settled = true;
                modal.classList.add('hide');
                document.removeEventListener('keydown', onKey);
                resolve(val);
            };
            const onKey = (e) => {
                if (e.key === 'Escape') finish(false);
                if (e.key === 'Enter') finish(true);
            };

            if (okBtn) okBtn.onclick = () => finish(true);
            if (cancelBtn) cancelBtn.onclick = () => finish(false);
            if (closeX) closeX.onclick = () => finish(false);
            modal.onclick = (e) => { if (e.target === modal) finish(false); };
            document.addEventListener('keydown', onKey);
            modal.classList.remove('hide');
        });
    }

    function showSiteNoticeModal(messageText, titleText, iconChar) {
        return showSiteConfirmModal({
            noticeOnly: true,
            icon: iconChar || 'ℹ️',
            badge: 'Подсказка',
            title: titleText || 'Обратите внимание',
            message: messageText,
            okText: 'Понятно'
        });
    }

    function tUi(key, arg0, arg1, arg2) {
        const pack = UI_DICTIONARY[currentUiLang] || UI_DICTIONARY.ru;
        let raw = pack[key] || UI_DICTIONARY.ru[key] || UI_DICTIONARY.en[key] || key;
        if (arg0 !== undefined) raw = raw.replace('{0}', String(arg0));
        if (arg1 !== undefined) raw = raw.replace('{1}', String(arg1));
        if (arg2 !== undefined) raw = raw.replace('{2}', String(arg2));
        return raw;
    }

    function applySiteLanguage(langCode) {
        currentUiLang = ['ru', 'en', 'it'].includes(langCode) ? langCode : 'ru';
        try { localStorage.setItem('cents_ui_lang', currentUiLang); } catch (e) {}
        document.documentElement.lang = currentUiLang;

        const setTextById = (id, text) => {
            const el = document.getElementById(id);
            if (el) el.textContent = text;
        };

        document.title = tUi('pageTitle');
        updateTwoAccountNavbarUi();
        setTextById('nav-home-pc', tUi('navHome'));
        setTextById('nav-tests-pc', tUi('navExams'));
        setTextById('nav-practice-pc', tUi('navPractice'));
        setTextById('nav-bookmarks-pc', tUi('navBookmarks'));
        setTextById('nav-dictionary-pc', tUi('navDict'));

        const mobSel = document.getElementById('mobile-nav-select');
        if (mobSel && mobSel.options.length >= 5) {
            mobSel.options[0].text = tUi('mobHome');
            mobSel.options[1].text = tUi('mobExams');
            mobSel.options[2].text = tUi('mobPractice');
            mobSel.options[3].text = tUi('mobBookmarks');
            mobSel.options[4].text = tUi('mobDict');
        }

        // Account modal theme & language controls
        setTextById('profile-theme-label', tUi('themeLabel'));
        setTextById('profile-theme-sub', tUi('themeSub'));
        setTextById('profile-lang-label', tUi('langLabel'));
        setTextById('profile-lang-sub', tUi('langSub'));
        setTextById('profile-accent-open-btn', tUi('accentColorBtn'));
        setTextById('profile-switch-acc-btn', tUi('switchManageBtn'));

        const isDark = document.body.classList.contains('dark');
        setTextById('profile-theme-icon', isDark ? '🌙' : '☀️');
        setTextById('profile-theme-btn-text', isDark ? tUi('themeDarkLabel') : tUi('themeLightLabel'));

        document.querySelectorAll('#profile-lang-buttons .ui-lang-btn').forEach((btn) => {
            const isSel = btn.getAttribute('data-ui-lang') === currentUiLang;
            btn.className = isSel
                ? 'ui-lang-btn profile-accent-btn px-3 py-1.5 rounded-full text-xs font-extrabold cursor-pointer transition'
                : 'ui-lang-btn custom-styled-select px-3 py-1.5 rounded-full text-xs font-extrabold cursor-pointer transition';
        });

        // Home hub texts
        const homeBadge = document.querySelector('#view-home .profile-tag');
        if (homeBadge) homeBadge.textContent = tUi('homeBadge');
        const homeH2 = document.querySelector('#view-home h2');
        if (homeH2) homeH2.textContent = tUi('homeTitle');
        const homeSub = document.querySelector('#view-home > div:first-child p');
        if (homeSub) homeSub.textContent = tUi('homeSubtitle');

        const homeCards = document.querySelectorAll('#view-home .grid > div');
        if (homeCards.length >= 4) {
            homeCards[0].querySelector('h3').textContent = tUi('cardExamsTitle');
            homeCards[0].querySelector('p').textContent = tUi('cardExamsDesc');
            const cta0 = homeCards[0].querySelectorAll('div:last-child span');
            if (cta0.length >= 2) cta0[0].textContent = tUi('cardExamsCta');

            homeCards[1].querySelector('h3').textContent = tUi('cardPracticeTitle');
            homeCards[1].querySelector('p').textContent = tUi('cardPracticeDesc');
            const cta1 = homeCards[1].querySelectorAll('div:last-child span');
            if (cta1.length >= 2) cta1[0].textContent = tUi('cardPracticeCta');

            homeCards[2].querySelector('h3').textContent = tUi('cardBookmarksTitle');
            homeCards[2].querySelector('p').textContent = tUi('cardBookmarksDesc');
            const cta2 = homeCards[2].querySelectorAll('div:last-child span');
            if (cta2.length >= 2) cta2[0].textContent = tUi('cardBookmarksCta');

            homeCards[3].querySelector('h3').textContent = tUi('cardDictTitle');
            homeCards[3].querySelector('p').textContent = tUi('cardDictDesc');
            const cta3 = homeCards[3].querySelectorAll('div:last-child span');
            if (cta3.length >= 2) cta3[0].textContent = tUi('cardDictCta');
        }

        // Exams view
        const examsH2 = document.querySelector('#view-tests > div:first-child h2');
        if (examsH2) examsH2.textContent = tUi('examsTitle');
        const examSubs = document.querySelectorAll('#view-tests h3');
        if (examSubs.length >= 2) {
            examSubs[0].textContent = tUi('examsOfficial');
            examSubs[1].textContent = tUi('examsGenerated');
        }

        // Practice view
        const pracH2 = document.querySelector('#view-practice > div:first-child h2');
        if (pracH2) pracH2.textContent = tUi('practiceTitle');
        const pracSub = document.querySelector('#view-practice > div:first-child p');
        if (pracSub) pracSub.textContent = tUi('practiceSubtitle');

        const hubCards = document.querySelectorAll('#practice-hub-screen > div');
        hubCards.forEach((card, idx) => {
            const pEl = card.querySelector('p');
            if (pEl) pEl.textContent = tUi('pracCardDesc' + idx);
            const spans = card.querySelectorAll('div:last-child span');
            if (spans.length >= 2) {
                if (idx === 6) spans[0].textContent = tUi('launchRandom');
                else if (idx === 7) spans[0].textContent = tUi('openPhotoBlock');
                else spans[0].textContent = tUi('openSection');
            }
        });

        const allSecBtn = document.querySelector('#practice-active-bar button[onclick*="exitPracticeToHub"]');
        if (allSecBtn) allSecBtn.textContent = tUi('allSections');
        const quickUpSpan = document.querySelector('#practice-quick-upload-wrap span');
        if (quickUpSpan) quickUpSpan.textContent = tUi('addFile');
        setTextById('practice-regen-btn', tUi('shuffleQuestions'));
        const jumpSpan = document.querySelector('#practice-scrubber-bar .sub-text');
        if (jumpSpan) jumpSpan.textContent = tUi('jumpTaskLabel');
        const jumpGoBtn = document.querySelector('#practice-scrubber-bar button[onclick*="jumpToPracticeTaskNumber"]');
        if (jumpGoBtn) jumpGoBtn.textContent = tUi('jumpBtn');

        // Bookmarks view
        const bmH2 = document.querySelector('#view-bookmarks > div:first-child h2');
        if (bmH2 && bmH2.firstChild) bmH2.firstChild.nodeValue = tUi('bookmarksTitle') + ' ';
        const bmSub = document.querySelector('#view-bookmarks > div:first-child p');
        if (bmSub) bmSub.textContent = tUi('bookmarksSubtitle');

        // Dictionary view
        const dictH2 = document.querySelector('#view-dictionary > div:first-child h2');
        if (dictH2) dictH2.textContent = tUi('dictTitle');
        const dictSub = document.querySelector('#view-dictionary > div:first-child p');
        if (dictSub) dictSub.textContent = tUi('dictSubtitle');
        setTextById('dict-mode-cards-btn', tUi('dictCards'));
        setTextById('dict-mode-list-btn', tUi('dictList'));
        const mineBtn = document.querySelector('.dict-src-btn[data-dict-src="mine"]');
        const accBtn = document.querySelector('.dict-src-btn[data-dict-src="accent"]');
        const bothBtn = document.querySelector('.dict-src-btn[data-dict-src="both"]');
        if (mineBtn) mineBtn.textContent = tUi('dictMine');
        if (accBtn) accBtn.textContent = tUi('dictAccent');
        if (bothBtn) bothBtn.textContent = tUi('dictBoth');

        // Active exam & results
        const exitExamBtn = document.querySelector('#view-active-exam button[onclick*="quitExam"]');
        if (exitExamBtn) exitExamBtn.textContent = tUi('exitExam');
        const timeRemLabel = document.querySelector('#view-active-exam .text-right .sub-text');
        if (timeRemLabel) timeRemLabel.textContent = tUi('timeRemaining');
        const submitExamBtn = document.querySelector('#view-active-exam button[onclick*="submitExam"]');
        if (submitExamBtn) submitExamBtn.textContent = tUi('submitExam');

        const resH2 = document.querySelector('#view-exam-results-screen h2');
        if (resH2) resH2.textContent = tUi('resultsTitle');
        const resBtns = document.querySelectorAll('#view-exam-results-screen .flex button');
        if (resBtns.length >= 3) {
            resBtns[0].textContent = tUi('homeMenu');
            resBtns[1].textContent = tUi('retakeTest');
            resBtns[2].textContent = tUi('viewExplanations');
        }

        // Translator widget
        const trTitle = document.querySelector('#dict-widget > div:first-child span:first-child');
        if (trTitle) trTitle.textContent = tUi('translatorTitle');
        const trInput = document.getElementById('widget-input');
        if (trInput) trInput.placeholder = tUi('translatorPlaceholder');
        const trBtn = document.querySelector('#dict-widget button[onclick*="translateWidget"]');
        if (trBtn) trBtn.textContent = tUi('translateBtn');
        setTextById('widget-save-btn', tUi('saveToDictBtn'));
        const trFab = document.getElementById('dict-open-btn');
        if (trFab) trFab.title = tUi('openDictTitle');

        // Modals
        setTextById('auth-modal-title', tUi('switchAccTitle'));
        const accentH3 = document.querySelector('#accent-color-modal h3');
        if (accentH3) accentH3.textContent = tUi('accentTitle');
        const accentDone = document.querySelector('#accent-color-modal button[onclick*="confirmAccentChoice"]');
        if (accentDone) accentDone.textContent = tUi('doneBtn');

        const accBadge = document.getElementById('account-profile-badge');
        if (accBadge) accBadge.textContent = tUi('accModalBadge');
        const statCards = document.querySelectorAll('#account-profile-modal .grid-cols-3 > div .sub-text');
        if (statCards.length >= 3) {
            statCards[0].textContent = tUi('statSolved');
            statCards[1].textContent = tUi('statAccuracy');
            statCards[2].textContent = tUi('statProb');
        }
        const statBySec = document.querySelector('#account-profile-modal .space-y-2\\.5 > .text-xs');
        if (statBySec) statBySec.textContent = tUi('statBySec');

        const upH3 = document.querySelector('#photo-upload-modal h3');
        if (upH3) upH3.textContent = tUi('uploadTitle');
        const upDrop = document.querySelector('#photo-dropzone > div:nth-child(2)');
        if (upDrop) upDrop.textContent = tUi('uploadDropText');
        const upFileName = document.getElementById('photo-modal-selected-filename');
        if (upFileName && !pendingModalPhotoFiles.length) upFileName.textContent = tUi('uploadNoFile');
        const upSecLbl = document.querySelector('#photo-upload-modal label[for="modal-photo-section-select"]');
        if (upSecLbl) upSecLbl.textContent = tUi('uploadSelectSec');
        const upBtns = document.querySelectorAll('#photo-upload-modal .flex.items-center.justify-end button');
        if (upBtns.length >= 2) {
            upBtns[0].textContent = tUi('cancelBtn');
            upBtns[1].textContent = tUi('addBtn');
        }

        const profModal = document.getElementById('account-profile-modal');
        if (profModal && !profModal.classList.contains('hide')) {
            openAccountProfileModal();
        }
        syncAllVisiblePillBubbles(true);
        requestAnimationFrame(() => {
            syncAllVisiblePillBubbles(true);
            setTimeout(() => syncAllVisiblePillBubbles(true), 60);
        });
    }

    function setSiteLanguage(langCode) {
        applySiteLanguage(langCode);
        if (activeTabName === 'tests') renderTestBlocks();
        if (activeTabName === 'dictionary') loadDictionaryView();
        if (activeTabName === 'bookmarks') loadBookmarksView();
        if (activeTabName === 'practice' && activePracticeCategory) loadPractice(activePracticeCategory, false);
    }

    let currentUser = localStorage.getItem('cents_current_user') || 'guest';
    let currentTheme = localStorage.getItem('cents_theme') || 'light';
    let activeTabName = 'home';
    let activeBookmarkCategory = 'All';

    let currentTimer = null;
    let examTime = 140 * 60;
    let activeExamData = [];
    let activePracticeCategory = null;
    const PRACTICE_ORDER_KEYS = ['Reading', 'Math', 'Logic', 'Biology', 'Chemistry', 'Physics', 'Random', 'MyPhotos'];
    const BOOKMARK_ORDER_KEYS = ['All', 'Reading', 'Math', 'Logic', 'Biology', 'Chemistry', 'Physics'];
    let lastPracticeCategory = null;
    let lastBookmarkCategory = 'All';

    function applyDirectionalSlide(containerEl, dirClass) {
        if (!containerEl) return;
        containerEl.classList.remove('slide-from-left', 'slide-from-right');
        void containerEl.offsetWidth;
        if (dirClass) containerEl.classList.add(dirClass);
    }

    function initHorizontalSwipeNavigation() {
        // Horizontal page-swipe tab switching disabled per user preference so scrubbing/scrolling never changes sections unintentionally.
    }

    let activeGeneratedTestIndex = 0;

    let categoryShuffledIndices = {};
    let activeAnalogByBaseId = {};
    let analogStepByBaseId = {};

    let currentRandomQuestion = null;
    let seenRandomIds = [];
    let randomStepCounter = 1;

    function getRandomQuestionKey(qObj) {
        if (!qObj) return '';
        return String(qObj.id || '') + '::' + String(qObj.q || '').trim();
    }

    function loadPersistedRandomHistory() {
        const saved = getStorage('cents_random_seen_v1');
        if (saved && Array.isArray(saved.seenKeys)) {
            seenRandomIds = saved.seenKeys.slice();
        } else {
            seenRandomIds = [];
        }
        randomStepCounter = Math.max(1, seenRandomIds.length || 1);
    }

    function savePersistedRandomHistory() {
        setStorage('cents_random_seen_v1', {
            seenKeys: Array.isArray(seenRandomIds) ? seenRandomIds : [],
            updatedAt: Date.now()
        });
    }

    function resetRandomPracticeHistory() {
        seenRandomIds = [];
        currentRandomQuestion = null;
        randomStepCounter = 1;
        savePersistedRandomHistory();
        pickNextRandomQuestion(true);
        renderRandomPracticeView();
    }
    let currentTranslation = { word: '', trans: '' };
    let passageCloseTimeout = null;
    let focusCardObserver = null;

    const PHOTO_BLOCK_CATEGORIES = [
        { key: 'Unassigned', title: tUi('catUnassigned') },
        { key: 'Reading', title: 'Reading' },
        { key: 'Math', title: 'Math' },
        { key: 'Logic', title: 'Logic & Data' },
        { key: 'Biology', title: 'Biology' },
        { key: 'Chemistry', title: 'Chemistry' },
        { key: 'Physics', title: 'Physics' },
        { key: 'Trash', title: tUi('catTrash') }
    ];
    let activePhotoBlockCategory = 'Unassigned';
    let photoBlockOpen = false;

    let sessionPhotoTasks = [];
    let photoDbPromise = null;

    function openPhotoIndexedDb() {
        if (photoDbPromise) return photoDbPromise;
        if (typeof indexedDB === 'undefined') {
            photoDbPromise = Promise.resolve(null);
            return photoDbPromise;
        }
        photoDbPromise = new Promise((resolve) => {
            try {
                const req = indexedDB.open('cents_raw_photo_tasks_db', 1);
                req.onupgradeneeded = function (e) {
                    const db = e.target.result;
                    if (!db.objectStoreNames.contains('photos')) {
                        db.createObjectStore('photos', { keyPath: 'id' });
                    }
                };
                req.onsuccess = function (e) {
                    resolve(e.target.result);
                };
                req.onerror = function () {
                    resolve(null);
                };
            } catch (err) {
                resolve(null);
            }
        });
        return photoDbPromise;
    }

    async function putPhotoInIndexedDb(record) {
        const db = await openPhotoIndexedDb();
        if (!db) return false;
        return new Promise((resolve) => {
            try {
                const tx = db.transaction('photos', 'readwrite');
                const store = tx.objectStore('photos');
                store.put(record);
                tx.oncomplete = () => resolve(true);
                tx.onerror = () => resolve(false);
                tx.onabort = () => resolve(false);
            } catch (err) {
                resolve(false);
            }
        });
    }

    async function removePhotoFromIndexedDb(photoId) {
        const db = await openPhotoIndexedDb();
        if (!db) return;
        return new Promise((resolve) => {
            try {
                const tx = db.transaction('photos', 'readwrite');
                tx.objectStore('photos').delete(photoId);
                tx.oncomplete = () => resolve();
                tx.onerror = () => resolve();
            } catch (err) {
                resolve();
            }
        });
    }

    async function loadPhotosFromIndexedDbForUser() {
        const db = await openPhotoIndexedDb();
        if (!db) return;
        return new Promise((resolve) => {
            try {
                const tx = db.transaction('photos', 'readonly');
                const req = tx.objectStore('photos').getAll();
                req.onsuccess = function () {
                    const rows = Array.isArray(req.result) ? req.result : [];
                    const forUser = rows
                        .filter((r) => (r.user || 'guest') === currentUser)
                        .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
                    sessionPhotoTasks = forUser;
                    resolve(forUser);
                };
                req.onerror = () => resolve(sessionPhotoTasks);
            } catch (err) {
                resolve(sessionPhotoTasks);
            }
        });
    }

    function getPhotoTasksList() {
        return Array.isArray(sessionPhotoTasks) ? sessionPhotoTasks : [];
    }

    function renderStandaloneMyPhotosView() {
        const container = document.getElementById('standalone-photo-tasks-container');
        if (!container) return;
        const allPhotos = getPhotoTasksList();
        const activeList = allPhotos.filter((p) => (p.category || 'Unassigned') !== 'Trash');
        if (!activeList.length) {
            container.innerHTML = '<div class="card-bg p-8 rounded-3xl text-center sub-text border shadow-sm text-xs sm:text-sm">Пока нет загруженных фотографий заданий.</div>';
            return;
        }
        container.innerHTML = `
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 smooth-stream-enter">
                ${activeList.map((p) => {
                    const safeId = String(p.id || '').split("'").join("\\'");
                    return `
                        <div class="card-bg border rounded-2xl p-4 shadow-sm flex flex-col justify-between gap-3">
                            <div class="flex items-start justify-between gap-2">
                                <div class="text-xs sm:text-sm font-bold truncate" title="${escapeAttr(p.title)}">${escapeHtml(p.title || 'Фото задания')}</div>
                                <button type="button" onclick="deletePhotoTask('${safeId}'); renderStandaloneMyPhotosView();" title="Удалить фото" class="sub-text hover:text-rose-500 transition text-sm font-bold cursor-pointer flex-shrink-0">✕</button>
                            </div>
                            <div onclick="openRawPhotoViewer('${safeId}')" class="cursor-pointer rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-800 bg-transparent">
                                <img src="${p.imageData}" alt="${escapeAttr(p.title)}" class="w-full h-48 object-contain block">
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }

    function openStandaloneMyPhotosView() {
        ['view-home', 'view-tests', 'view-practice', 'view-bookmarks', 'view-dictionary', 'view-active-exam', 'view-exam-results-screen'].forEach((id) => {
            const el = document.getElementById(id);
            if (el) el.classList.add('hide');
        });
        const scrubberBar = document.getElementById('practice-scrubber-bar');
        if (scrubberBar) scrubberBar.classList.add('hide');
        const myPhotosView = document.getElementById('view-my-photos');
        if (myPhotosView) myPhotosView.classList.remove('hide');
        renderStandaloneMyPhotosView();
        loadPhotosFromIndexedDbForUser().then(() => renderStandaloneMyPhotosView());
    }

    function handleStandalonePhotoUpload(event) {
        const inputEl = event && event.target ? event.target : document.getElementById('standalone-photo-file-input');
        const files = inputEl && inputEl.files ? Array.from(inputEl.files) : [];
        if (!files.length) return;
        const selEl = document.getElementById('standalone-photo-section-select');
        const chosenCat = selEl ? selEl.value : 'Auto';
        uploadRawFilesToCategory(files, chosenCat, inputEl);
        setTimeout(() => renderStandaloneMyPhotosView(), 250);
    }

    let pendingModalPhotoFiles = [];

    function openPhotoUploadModal() {
        pendingModalPhotoFiles = [];
        const modal = document.getElementById('photo-upload-modal');
        const nameEl = document.getElementById('photo-modal-selected-filename');
        const inputEl = document.getElementById('modal-photo-file-input');
        const selEl = document.getElementById('modal-photo-section-select');
        if (inputEl) inputEl.value = '';
        if (nameEl) nameEl.textContent = 'Файл пока не выбран';
        if (selEl) {
            selEl.value = (activePhotoBlockCategory && activePhotoBlockCategory !== 'All')
                ? activePhotoBlockCategory
                : 'Unassigned';
        }
        if (modal) modal.classList.remove('hide');
    }

    function closePhotoUploadModal() {
        pendingModalPhotoFiles = [];
        const modal = document.getElementById('photo-upload-modal');
        const dropEl = document.getElementById('photo-dropzone');
        if (dropEl) dropEl.classList.remove('border-sky-400');
        if (modal) modal.classList.add('hide');
    }

    function applyModalPickedFiles(fileList) {
        const arr = Array.from(fileList || []).filter((f) => f && f.type && f.type.startsWith('image/'));
        pendingModalPhotoFiles = arr;
        const nameEl = document.getElementById('photo-modal-selected-filename');
        if (!nameEl) return;
        if (!arr.length) {
            nameEl.textContent = 'Выберите файл изображения';
        } else if (arr.length === 1) {
            nameEl.textContent = arr[0].name;
        } else {
            nameEl.textContent = `Выбрано файлов: ${arr.length}`;
        }
    }

    function handlePhotoModalFileSelect(event) {
        const files = event && event.target ? event.target.files : [];
        applyModalPickedFiles(files);
    }

    function handlePhotoModalDrop(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        const dropEl = document.getElementById('photo-dropzone');
        if (dropEl) dropEl.classList.remove('border-sky-400');
        const dt = event && event.dataTransfer ? event.dataTransfer : null;
        if (dt && dt.files && dt.files.length) {
            applyModalPickedFiles(dt.files);
        }
    }

    function submitPhotoUploadModal() {
        const inputEl = document.getElementById('modal-photo-file-input');
        const filesToUpload = pendingModalPhotoFiles.length
            ? pendingModalPhotoFiles
            : (inputEl && inputEl.files ? Array.from(inputEl.files) : []);
        if (!filesToUpload.length) {
            showSiteNoticeModal('Сначала выберите или перетащите фотографию.', 'Файл не выбран', '📷');
            return;
        }
        const selEl = document.getElementById('modal-photo-section-select');
        const chosenCat = selEl ? selEl.value : 'Unassigned';
        activePhotoBlockCategory = chosenCat;
        closePhotoUploadModal();
        uploadRawFilesToCategory(filesToUpload, chosenCat, inputEl);
        setTimeout(() => {
            if (activePracticeCategory === 'MyPhotos' && activeTabName === 'practice') {
                renderUnifiedMyPhotosSection(document.getElementById('practice-container'), '');
            }
        }, 250);
    }

    function buildUnifiedPhotoSectionsHtml(allPhotos) {
        const groupsToRender = activePhotoBlockCategory === 'All'
            ? PHOTO_BLOCK_CATEGORIES
            : PHOTO_BLOCK_CATEGORIES.filter((c) => c.key === activePhotoBlockCategory);

        const sectionsHtml = groupsToRender.map((sec) => {
            const items = allPhotos.filter((p) => (p.category || 'Unassigned') === sec.key);
            if (!items.length) return '';
            const cardsHtml = items.map((p) => {
                const safeId = String(p.id || '').split("'").join("\\'");
                const currentCat = p.category || 'Unassigned';
                const moveOptionsHtml = PHOTO_BLOCK_CATEGORIES.map((c) =>
                    `<option value="${c.key}" ${currentCat === c.key ? 'selected' : ''}>${c.title}</option>`
                ).join('');
                const trashBtnHtml = currentCat !== 'Trash'
                    ? `<button type="button" onclick="movePhotoTaskToCategory('${safeId}', 'Trash'); refreshUnifiedPhotoSectionsOnly();" class="custom-styled-select px-2.5 py-1 rounded-lg text-[11px] font-semibold transition cursor-pointer">В корзину</button>`
                    : '';
                return `
                    <div data-task-index="1" class="focus-stream-card card-bg border rounded-2xl p-4 shadow-sm flex flex-col justify-between gap-3">
                        <div class="flex items-start justify-between gap-2">
                            <div class="text-xs sm:text-sm font-bold truncate" title="${escapeAttr(p.title)}">${escapeHtml(p.title || 'Фото задания')}</div>
                            <button type="button" onclick="deletePhotoTask('${safeId}'); refreshUnifiedPhotoSectionsOnly();" title="Удалить фото" class="sub-text hover:text-rose-500 transition text-sm font-bold cursor-pointer flex-shrink-0">✕</button>
                        </div>
                        <div onclick="openRawPhotoViewer('${safeId}')" class="cursor-pointer rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-800 bg-transparent">
                            <img src="${p.imageData}" alt="${escapeAttr(p.title)}" class="w-full h-48 object-contain block">
                        </div>
                        <div class="flex items-center justify-between gap-2 pt-1">
                            <select onchange="movePhotoTaskToCategory('${safeId}', this.value); refreshUnifiedPhotoSectionsOnly();" title="Переместить в раздел" class="custom-styled-select rounded-lg px-2 py-1 text-[11px] font-semibold outline-none cursor-pointer min-w-0 flex-1">
                                ${moveOptionsHtml}
                            </select>
                            ${trashBtnHtml}
                        </div>
                    </div>
                `;
            }).join('');
            return `
                <div class="space-y-3">
                    <div class="flex items-center justify-between border-b border-gray-200 dark:border-zinc-800 pb-2">
                        <h4 class="text-base sm:text-lg font-bold">${sec.title}</h4>
                        <span class="text-xs font-bold px-2.5 py-0.5 rounded-full profile-tag">${items.length}</span>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">${cardsHtml}</div>
                </div>
            `;
        }).join('');

        return sectionsHtml || '<div class="card-bg p-8 rounded-3xl text-center sub-text border shadow-sm text-xs sm:text-sm">В выбранном разделе пока нет фотографий. Нажмите «Добавить файл», чтобы загрузить фото.</div>';
    }

    function updateUnifiedPhotoPillLabelsAndBubble(allPhotos) {
        const counts = { All: allPhotos.length };
        PHOTO_BLOCK_CATEGORIES.forEach((c) => { counts[c.key] = 0; });
        allPhotos.forEach((p) => {
            const k = p.category || 'Unassigned';
            counts[k] = (counts[k] || 0) + 1;
        });

        const labelMap = {
            Unassigned: 'Нераспределённые',
            All: 'All',
            Reading: 'Reading',
            Math: 'Math',
            Logic: 'Logic & Data',
            Biology: 'Biology',
            Chemistry: 'Chemistry',
            Physics: 'Physics',
            Trash: 'Корзина'
        };

        document.querySelectorAll('#unified-photo-filter-buttons .pill-btn').forEach((btn) => {
            const key = btn.getAttribute('data-unified-cat');
            const c = counts[key] || 0;
            btn.textContent = c > 0 ? `${labelMap[key]} (${c})` : labelMap[key];
        });

        const activeBtn = document.querySelector('#unified-photo-filter-buttons .pill-btn[data-unified-cat="' + activePhotoBlockCategory + '"]');
        if (activeBtn) {
            movePillBubble('unified-photo-filter-buttons', 'unified-photo-pill-bubble', activeBtn, 'pill-btn-selected-accent');
        }
    }

    function refreshUnifiedPhotoSectionsOnly() {
        const allPhotos = getPhotoTasksList();
        const secWrap = document.getElementById('unified-photo-sections-wrap');
        if (secWrap) {
            secWrap.innerHTML = buildUnifiedPhotoSectionsHtml(allPhotos);
        }
        updateUnifiedPhotoPillLabelsAndBubble(allPhotos);
        initFocusCardObserver();
    }

    function selectUnifiedPhotoCategory(catKey) {
        const nextCat = (!catKey || catKey === 'All') ? 'Unassigned' : catKey;
        activePhotoBlockCategory = nextCat;
        persistCurrentViewState({ photoBlockCategory: nextCat });
        const btn = document.querySelector('#unified-photo-filter-buttons .pill-btn[data-unified-cat="' + nextCat + '"]');
        if (btn) {
            movePillBubble('unified-photo-filter-buttons', 'unified-photo-pill-bubble', btn, 'pill-btn-selected-accent');
        }
        const secWrap = document.getElementById('unified-photo-sections-wrap');
        if (secWrap) {
            secWrap.innerHTML = buildUnifiedPhotoSectionsHtml(getPhotoTasksList());
            initFocusCardObserver();
        } else {
            renderUnifiedMyPhotosSection(document.getElementById('practice-container'), '');
        }
    }

    function renderUnifiedMyPhotosSection(containerEl, slideDirClass) {
        if (!containerEl) return;
        if (activePhotoBlockCategory === 'All') activePhotoBlockCategory = 'Unassigned';
        const allPhotos = getPhotoTasksList();

        const counts = { All: allPhotos.length };
        PHOTO_BLOCK_CATEGORIES.forEach((c) => { counts[c.key] = 0; });
        allPhotos.forEach((p) => {
            const k = p.category || 'Unassigned';
            counts[k] = (counts[k] || 0) + 1;
        });

        const subjectFilters = [
            { key: 'Unassigned', label: 'Нераспределённые' },
            { key: 'Reading', label: 'Reading' },
            { key: 'Math', label: 'Math' },
            { key: 'Logic', label: 'Logic & Data' },
            { key: 'Biology', label: 'Biology' },
            { key: 'Chemistry', label: 'Chemistry' },
            { key: 'Physics', label: 'Physics' },
            { key: 'Trash', label: 'Корзина' }
        ];

        const filterPillsHtml = subjectFilters.map((sf) => {
            const c = counts[sf.key] || 0;
            const textLabel = c > 0 ? `${sf.label} (${c})` : sf.label;
            return `<button type="button" data-unified-cat="${sf.key}" onclick="selectUnifiedPhotoCategory('${sf.key}'); event.stopPropagation();" class="pill-btn px-3.5 py-1.5 rounded-full font-semibold text-xs transition cursor-pointer relative z-10">${textLabel}</button>`;
        }).join('');

        containerEl.innerHTML = `
            <div class="space-y-4">
                <div class="card-bg border rounded-2xl px-3.5 py-2.5 shadow-sm flex flex-wrap items-center gap-2">
                    <button type="button" onclick="openPhotoUploadModal()" class="profile-accent-btn px-4 py-2 rounded-full text-xs font-bold cursor-pointer inline-flex items-center gap-1.5">
                        <span>Добавить файл</span>
                    </button>
                    <span id="unified-photo-task-status" class="text-[11px] sub-text"></span>
                </div>

                <div class="card-bg border rounded-2xl p-2 flex flex-wrap items-center gap-1.5 shadow-sm">
                    <div id="unified-photo-filter-buttons" class="pill-track flex flex-wrap items-center gap-1 p-1.5 rounded-2xl border border-gray-200/80 dark:border-zinc-800 relative w-full">
                        <div id="unified-photo-pill-bubble" class="sliding-pill-bubble accent-bubble"></div>
                        ${filterPillsHtml}
                    </div>
                </div>

                <div id="unified-photo-sections-wrap" class="space-y-6">
                    ${buildUnifiedPhotoSectionsHtml(allPhotos)}
                </div>
            </div>
        `;
        requestAnimationFrame(() => {
            const activeBtn = document.querySelector('#unified-photo-filter-buttons .pill-btn[data-unified-cat="' + activePhotoBlockCategory + '"]');
            if (activeBtn) movePillBubble('unified-photo-filter-buttons', 'unified-photo-pill-bubble', activeBtn, 'pill-btn-selected-accent');
        });
        if (slideDirClass) applyDirectionalSlide(containerEl, slideDirClass);
        initFocusCardObserver();
    }

    function handleUnifiedPhotoUpload(event) {
        const inputEl = event && event.target ? event.target : document.getElementById('modal-photo-file-input');
        const files = inputEl && inputEl.files ? Array.from(inputEl.files) : [];
        if (!files.length) return;
        const selEl = document.getElementById('modal-photo-section-select');
        const chosenCat = selEl ? selEl.value : 'Unassigned';
        uploadRawFilesToCategory(files, chosenCat, inputEl);
    }

    function openPracticePhotoBlock() {
        loadPractice('MyPhotos', false);
    }

    function filterPhotoTasks(cat) {
        const nextCat = cat || 'All';
        const prevIdx = BOOKMARK_ORDER_KEYS.indexOf(activePhotoBlockCategory);
        const nextIdx = BOOKMARK_ORDER_KEYS.indexOf(nextCat);
        let slideDir = '';
        if (prevIdx !== -1 && nextIdx !== -1 && prevIdx !== nextIdx) {
            slideDir = nextIdx > prevIdx ? 'slide-from-right' : 'slide-from-left';
        }
        activePhotoBlockCategory = nextCat;
        renderPhotoTasksBlock();
        applyDirectionalSlide(document.getElementById('photo-tasks-container'), slideDir);
    }

    async function movePhotoTaskToCategory(photoId, newCategory) {
        if (!photoId || !newCategory) return;
        const idx = sessionPhotoTasks.findIndex((p) => p.id === photoId);
        if (idx === -1) return;
        const updatedRecord = { ...sessionPhotoTasks[idx], category: newCategory };
        sessionPhotoTasks[idx] = updatedRecord;
        await putPhotoInIndexedDb(updatedRecord);
        renderPhotoTasksBlock();
    }

    let tesseractScriptPromise = null;

    async function loadTesseractOcr() {
        if (window.Tesseract && typeof window.Tesseract.recognize === 'function') {
            return window.Tesseract;
        }
        if (tesseractScriptPromise) return tesseractScriptPromise;
        tesseractScriptPromise = new Promise((resolve) => {
            try {
                const timer = setTimeout(() => resolve(window.Tesseract || null), 4500);
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js';
                script.async = true;
                script.onload = () => {
                    clearTimeout(timer);
                    resolve(window.Tesseract || null);
                };
                script.onerror = () => {
                    clearTimeout(timer);
                    resolve(null);
                };
                document.head.appendChild(script);
            } catch (e) {
                resolve(null);
            }
        });
        return tesseractScriptPromise;
    }

        function classifySectionFromOcrText(rawText, fileNameHint) {
        const text = String(rawText || '');
        const hint = String(fileNameHint || '');
        const lowText = text.toLowerCase();
        const lowHint = hint.toLowerCase();
        const combined = lowText + ' ' + lowHint;

        const scores = {
            Reading: 0,
            Math: 0,
            Logic: 0,
            Biology: 0,
            Chemistry: 0,
            Physics: 0
        };

        const addWeighted = (cat, regexList, weight) => {
            regexList.forEach((rx) => {
                const flags = rx.flags.includes('g') ? rx.flags : rx.flags + 'g';
                const matches = combined.match(new RegExp(rx.source, flags));
                if (matches && matches.length > 0) {
                    scores[cat] += weight * Math.min(matches.length, 4);
                }
            });
        };

        // Explicit folder/file hints if present
        if (/(^|[\s_/-])(reading|ридинг|чтен)/i.test(lowHint)) scores.Reading += 12;
        if (/(^|[\s_/-])(math|математ|алгебр|геометр)/i.test(lowHint)) scores.Math += 12;
        if (/(^|[\s_/-])(logic|reasoning|data|логик)/i.test(lowHint)) scores.Logic += 12;
        if (/(^|[\s_/-])(bio|биолог)/i.test(lowHint)) scores.Biology += 12;
        if (/(^|[\s_/-])(chem|хими)/i.test(lowHint)) scores.Chemistry += 12;
        if (/(^|[\s_/-])(phys|физик)/i.test(lowHint)) scores.Physics += 12;

        // 1. CHEMISTRY: chemical elements (names, symbols, formulas, reactions, salts, acids, bases)
        addWeighted('Chemistry', [
            /\b(hydrogen|helium|lithium|beryllium|boron|carbon|nitrogen|oxygen|fluorine|neon|sodium|magnesium|aluminum|aluminium|silicon|phosphorus|sulfur|chlorine|argon|potassium|calcium|iron|copper|zinc|silver|gold|bromine|iodine|barium|lead|mercury|manganese|chromium|nickel|cobalt)\b/i,
            /(водород|гелий|литий|бериллий|бор|углерод|азот|кислород|фтор|неон|натрий|магний|алюминий|кремний|фосфор|сера|хлор|аргон|калий|кальций|железо|медь|цинк|серебро|золото|бром|йод|барий|свинец|ртуть|марганец|хром|никель|кобальт)/i,
            /\b(h2o|co2|nh3|ch4|nacl|hcl|h2so4|hno3|naoh|koh|caco3|cao|cuo|fe2o3|agno3|bacl2|kmno4|k2cr2o7|nahco3|c2h5oh|c6h12o6)\b/i,
            /\b(h\s*\+|\boh\s*-|so4|no3|po4|co3|nh4|mol\b|molar|stoichiometry|ph\b|acid|base|alkali|oxide|salt|reaction|catalyst|precipitate|valence|oxidation|reduction|electrolysis|isomer|polymer|ester|alkane|alkene|alkyne|benzene)\b/i,
            /(моль|реакци[яию]|окислен|восстановлен|кислот[аыуе]|щёлоч|щелоч|оксид[аыуе]?|соль|осадок|раствор|валентност|электролит|катализатор|гидролиз|диссоциац|нейтрализац|углеводород|спирт|альдегид|карбонов|эфир)/i,
            /[A-Z][a-z]?\d+\s*\+|→|⇄|⇌/
        ], 4);

        // 2. BIOLOGY: cells, chlorophyll, meiosis, mitosis, genetics, anatomy, ecology, plants/animals
        addWeighted('Biology', [
            /\b(chlorophyll|chloroplast|mitochondria|meiosis|mitosis|dna|rna|gene|genes|allele|chromosome|chromosomes|ribosome|enzyme|enzymes|protein|proteins|photosynthesis|cellular respiration|atp|adp|neuron|neurons|synapse|hormone|hormones|ecosystem|species|habitat|organism|organisms|tissue|organ|cell|cells|nucleus|membrane|cytoplasm|osmosis|diffusion|genotype|phenotype|dominant|recessive|mutation|evolution|natural selection|fungi|bacteria|virus|plant|plants|animal|animals)\b/i,
            /(хлорофилл|хлоропласт|митохондри[яию]|мейоз|митоз|днк|рнк|ген[аыуе]?|аллел[ьия]|хромосом[аыуе]?|рибосом[аыуе]?|фермент[аыуе]?|белок|белк[аиов]|фотосинтез|атф|нейрон[аыуе]?|гормон[аыуе]?|экосистем[аыуе]?|вид[аыов]?|организм[аыуе]?|ткань|орган[аыуе]?|клетк[аиуе]?|ядро|мембран[аыуе]?|цитоплазм[аыуе]?|осмос|генотип|фенотип|доминантн|рецессивн|мутац|эволюц|естественн[ыоая] отбор|бактери[яию]|растен[ияе]|животн[ыоаяе]|гриб[аыов]?|фототроф|гетеротроф|автотроф)/i
        ], 4);

        // 3. PHYSICS: physical laws, formulas, mechanics, electricity, optics, thermodynamics, units
        addWeighted('Physics', [
            /\b(newton|newtons|joule|joules|watt|watts|pascal|ampere|volt|ohms?|hertz|kelvin|coulomb|tesla|weber)\b/i,
            /(ньютон[аыов]?|джоул[ьияей]|ватт[аыов]?|паскал[ьияей]|ампер[аыов]?|вольт[аыов]?|ом[аыов]?|герц[аыов]?|кельвин[аыов]?|кулон[аыов]?)/i,
            /\b(velocity|speed|acceleration|momentum|impulse|friction|tension|gravity|gravitational|mass|force|forces|work|energy|kinetic|potential|power|pressure|density|buoyancy|archimedes|ohm|ohms|voltage|current|resistance|circuit|capacitor|inductance|magnetic|magnetism|wavelength|frequency|period|amplitude|wave|waves|optics|reflection|refraction|lens|mirror|thermodynamics|entropy|heat|temperature|specific heat|ideal gas|boyle|charles|faraday|lenz|coulomb|newton's law|law of conservation)\b/i,
            /(скорост[ьиию]|ускорен[ияе]|импульс[аыуе]?|сил[аыуе]|трени[яе]|натяжен[ияе]|гравитац|тяготен|масс[аыуе]|работ[аыуе]|энерги[яию]|кинетическ|потенциальн|мощност[ьиию]|давлен[ияе]|плотност[ьиию]|архимед|напряжен[ияе]|ток[ауе]?|сопротивлен[ияе]|цеп[ьиию]|конденсатор|магнитн|длин[аы] волны|частот[аыуе]|период[аыуе]?|амплитуд[аыуе]|волн[аыуе]|оптик[аиуе]|отражен[ияе]|преломлен[ияе]|линз[аыуе]|зеркал[аоуе]|термодинамик|энтропи[яию]|теплот[аыуе]|температур[аыуе]|удельн[аяое] теплоёмкост|удельн[аяое] теплоемкост|закон[аыуе]? [а-яa-z]*|правило ленца|закон ома|закон гука|закон сохранения)/i
        ], 4);

        // 4. LOGIC & DATA: probability, combinatorics, premises, conclusions, deductions, tables/charts/data
        addWeighted('Logic', [
            /\b(probability|chance|odds|likelihood|expected value|expectation|permutation|combination|combinations|premise|premises|conclusion|conclusions|argument|inference|deduction|induction|valid|invalid|contradiction|consistent|necessary|sufficient|all of the following|except|most likely|least likely|cannot be determined|table|chart|graph|diagram|dataset|survey|average|mean|median|mode|percentage|percent|proportion|ratio|correlation|trend|therefore|thus|hence|implies)\b/i,
            /(вероятност[ьиию]|шанс[аыов]?|комбинаторик|перестановк|сочетан[ияе]|посылк[аиуе]?|вывод[аыуе]?|аргумент[аыуе]?|умозаключен|следств[ияе]|логическ|утвержден[ияе]|исключен[ияе]|противореч|необходимо[еых]?|достаточно[еых]?|таблиц[аыуе]?|график[аиуе]?|диаграмм[аыуе]?|данных|опрос[аыуе]?|средн[ееяя] арифметическ|медиан[аыуе]?|мод[аыуе]?|процент[аыов]?|доля|доли|соотношен[ияе]|тенденц[ияию]|следовательно|значит|вытекает)/i
        ], 4);

        // 5. MATH: equations, logarithms, functions, geometry, solving for x, expressions
        const mathTokenCount = (combined.match(/(log|ln|lg|sin|cos|tan|cot|tg|ctg|sqrt|√|∑|∫|π|≤|≥|≠|≈|[0-9]+\s*[+\-*/^×÷=]\s*[0-9]+|\bx\b|\by\b)/gi) || []).length;
        addWeighted('Math', [
            /\b(equation|equations|inequality|inequalities|function|functions|logarithm|logarithms|log|ln|lg|exponent|exponential|polynomial|quadratic|linear|derivative|derivatives|integral|integrals|limit|limits|matrix|matrices|determinant|vector|vectors|triangle|triangles|equilateral|isosceles|right triangle|hypotenuse|cathetus|circle|radius|diameter|circumference|chord|arc|sector|polygon|parallelogram|rhombus|trapezoid|rectangle|square|perimeter|area|volume|surface area|angle|angles|degree|degrees|radian|radians|pythagoras|pythagorean|sequence|arithmetic progression|geometric progression|prime|factor|factorize|simplify|solve for)\b/i,
            /(уравнен[ияе]|неравенств[аоуе]|функци[яию]|логарифм[аыов]?|степен[ьиию]|показательн|квадратн[оаяые]|линейн[оаяые]|производн[аяояые]|интеграл[аыов]?|предел[аыов]?|матриц[аыуе]?|определител[ьияей]|вектор[аыов]?|треугольник[аыов]?|равносторонн|равнобедренн|прямоугольн[ыоая] треугольник|гипотенуз[аыуе]?|катет[аыов]?|окружност[ьиию]|радиус[аыов]?|диаметр[аыов]?|хорд[аыуе]?|дуг[аиуе]?|сектор[аыов]?|многоугольник|параллелограмм|ромб[аыов]?|трапеци[яию]|прямоугольник|квадрат[аыов]?|периметр[аыов]?|площад[ьиию]|объём[аыуе]?|объем[аыуе]?|угол|угл[аыов]?|градус[аыов]?|радиан[аыов]?|пифагор|прогресси[яию]|прост[оаяые] числ|множител[ьияей]|разлож[ите]* на множител|упрост[ите]*|найдите\s+x|найти\s+x|решите\s+уравнен)/i,
            /(log_?\d*|ln\s*\(|\bx\s*[+\-*/^=<>]|\by\s*[+\-*/^=<>]|[0-9]+\s*[+\-*/^×÷]\s*[0-9]+|√|∑|∫|≤|≥)/i
        ], 4);
        if (mathTokenCount >= 2) {
            scores.Math += Math.min(mathTokenCount * 2, 10);
        }

        // 6. READING: long narrative/expository text comprehension
        const wordMatches = text.match(/[A-Za-zА-Яа-яЁё]{2,}/g) || [];
        const wordCount = wordMatches.length;
        const sentenceCount = (text.match(/[.!?…]+/g) || []).length;
        const isLongText = wordCount >= 45 || (wordCount >= 30 && sentenceCount >= 2);

        addWeighted('Reading', [
            /\b(passage|author|narrator|paragraph|metaphor|tone|excerpt|according to the text|main idea|central focus|word could be replaced|best summarizes|author's attitude|context)\b/i,
            /(отрывок|автор[аыуе]?|абзац[аыуе]?|повествоват|текст[аыуе]?|метафор[аыуе]?|тон автор|главн[аяаяые] мысл|смысл фрагмент|в контексте текст)/i
        ], 4);

        if (isLongText) {
            scores.Reading += 5;
        } else if (wordCount >= 22) {
            scores.Reading += 2;
        }

        // If text is clearly long prose AND has very weak math/chemistry/physics/biology/logic signals, boost Reading decisively
        const otherMax = Math.max(scores.Math, scores.Logic, scores.Biology, scores.Chemistry, scores.Physics);
        if (isLongText && otherMax < 4) {
            scores.Reading += 6;
        }

        // If Logic & Data has long prose, only keep Logic ahead when explicit logic/probability/data markers are present
        const hasExplicitLogicOrData = /(probability|шанс|premise|premises|посылк|conclusion|вывод|аргумент|следств|логич|таблиц|график|диаграмм|процент|средн[ееяя]|all of the following|except|most likely|therefore|следовательно)/i.test(combined);
        if (!hasExplicitLogicOrData && scores.Logic > 0) {
            scores.Logic = Math.max(0, scores.Logic - 4);
        }

        const maxScore = Math.max(...Object.values(scores));
        if (maxScore <= 0) {
            return isLongText ? 'Reading' : 'Math';
        }

        // Pick highest scoring section cleanly
        const order = ['Chemistry', 'Biology', 'Physics', 'Math', 'Logic', 'Reading'];
        let bestCat = 'Reading';
        let bestScore = -1;
        order.forEach((cat) => {
            if (scores[cat] > bestScore) {
                bestScore = scores[cat];
                bestCat = cat;
            }
        });
        return bestCat;
    }

function recognizeWithTimeout(tess, imageDataUrl, langCode, timeoutMs) {
        return new Promise((resolve) => {
            let settled = false;
            const timer = setTimeout(() => {
                if (!settled) {
                    settled = true;
                    resolve('');
                }
            }, timeoutMs || 7000);

            Promise.resolve()
                .then(() => tess.recognize(imageDataUrl, langCode))
                .then((res) => {
                    if (!settled) {
                        settled = true;
                        clearTimeout(timer);
                        resolve((res && res.data && res.data.text) ? res.data.text : '');
                    }
                })
                .catch(() => {
                    if (!settled) {
                        settled = true;
                        clearTimeout(timer);
                        resolve('');
                    }
                });
        });
    }

    let cachedTessWorker = null;

    async function getFastOcrWorker(tess) {
        if (!tess || typeof tess.createWorker !== 'function') return null;
        if (cachedTessWorker) return cachedTessWorker;
        try {
            const worker = await tess.createWorker('eng+rus');
            cachedTessWorker = worker;
            return worker;
        } catch (e) {
            return null;
        }
    }

    async function detectCategoryForPhotoDataUrl(imageDataUrl, fileNameHint) {
        try {
            const tess = await loadTesseractOcr();
            const worker = await getFastOcrWorker(tess);
            if (worker && typeof worker.recognize === 'function') {
                const ocrText = await recognizeWithTimeout(worker, imageDataUrl, null, 3200);
                if (ocrText && ocrText.trim().length > 0) {
                    return classifySectionFromOcrText(ocrText, fileNameHint);
                }
            } else if (tess && typeof tess.recognize === 'function') {
                const ocrText = await recognizeWithTimeout(tess, imageDataUrl, 'eng+rus', 3200);
                if (ocrText && ocrText.trim().length > 0) {
                    return classifySectionFromOcrText(ocrText, fileNameHint);
                }
            }
        } catch (err) {
            // Fallback below
        }
        return classifySectionFromOcrText('', fileNameHint);
    }

    async function deleteAllPhotosFromAlbumConfirmed() {
        const list = getPhotoTasksList();
        if (!list.length) {
            showSiteNoticeModal('В альбоме нет фотографий для удаления.', 'Альбом пуст', '🖼️');
            return;
        }
        const ok = await showSiteConfirmModal({
            icon: '🗑️',
            badge: 'Очистка альбома',
            title: 'Удалить все фотографии?',
            message: `Удалить вообще все фотографии (${list.length}) из альбома без возможности восстановления?`,
            okText: 'Удалить все',
            cancelText: 'Отмена'
        });
        if (!ok) return;

        const copy = list.slice();
        sessionPhotoTasks = [];
        for (const item of copy) {
            if (item && item.id) {
                await removePhotoFromIndexedDb(item.id);
            }
        }
        const statusEl = document.getElementById('photo-task-status');
        const uniStatusEl = document.getElementById('unified-photo-task-status');
        const msg = 'Все фотографии удалены из альбома.';
        if (statusEl) statusEl.textContent = msg;
        if (uniStatusEl) uniStatusEl.textContent = msg;

        if (activePracticeCategory === 'MyPhotos' && activeTabName === 'practice') {
            renderUnifiedMyPhotosSection(document.getElementById('practice-container'), '');
        }
        renderPhotoTasksBlock();
        renderStandaloneMyPhotosView();
    }

    async function redistributeAllPhotosByRulesConfirmed() {
        const list = getPhotoTasksList();
        if (!list.length) {
            showSiteNoticeModal('Нет загруженных фотографий для повторного распределения по папкам.', 'Нет фотографий', '🗂️');
            return;
        }
        const ok = await showSiteConfirmModal({
            icon: '🗂️',
            badge: 'Сортировка',
            title: 'Перераспределить фото?',
            message: `Перераспределить уже загруженные фотографии (${list.length}) по разделам заново?`,
            okText: 'Перераспределить',
            cancelText: 'Отмена'
        });
        if (!ok) return;

        const statusEl = document.getElementById('photo-task-status');
        const uniStatusEl = document.getElementById('unified-photo-task-status');
        if (statusEl) statusEl.textContent = `Перераспределяю фото (0 / ${list.length})...`;
        if (uniStatusEl) uniStatusEl.textContent = `Перераспределяю фото (0 / ${list.length})...`;

        let done = 0;
        for (let i = 0; i < sessionPhotoTasks.length; i++) {
            const item = sessionPhotoTasks[i];
            const newCat = await detectCategoryForPhotoDataUrl(item.imageData, item.title);
            const updated = { ...item, category: newCat };
            sessionPhotoTasks[i] = updated;
            await putPhotoInIndexedDb(updated);
            done++;
            const progressMsg = `Перераспределено фото: ${done} / ${list.length}`;
            if (statusEl) statusEl.textContent = progressMsg;
            if (uniStatusEl) uniStatusEl.textContent = progressMsg;
        }

        const doneMsg = `Готово: перераспределено фото ${done}.`;
        if (statusEl) statusEl.textContent = doneMsg;
        if (uniStatusEl) uniStatusEl.textContent = doneMsg;

        if (activePracticeCategory === 'MyPhotos' && activeTabName === 'practice') {
            renderUnifiedMyPhotosSection(document.getElementById('practice-container'), '');
        }
        renderPhotoTasksBlock();
        renderStandaloneMyPhotosView();
    }

    async function autoSortExistingPhotosByOcr() {
        const list = getPhotoTasksList();
        if (!list.length) return;
        const statusEl = document.getElementById('photo-task-status');
        if (statusEl) statusEl.textContent = `Анализирую текст на фото (${list.length})...`;

        let sortedCount = 0;
        for (let i = 0; i < sessionPhotoTasks.length; i++) {
            const item = sessionPhotoTasks[i];
            const detectedCat = await detectCategoryForPhotoDataUrl(item.imageData, item.title);
            const updated = { ...item, category: detectedCat };
            sessionPhotoTasks[i] = updated;
            await putPhotoInIndexedDb(updated);
            sortedCount++;
            if (statusEl) statusEl.textContent = `Разобрано фото: ${sortedCount} / ${list.length}`;
            renderPhotoTasksBlock();
        }
        if (statusEl) statusEl.textContent = `Готово: распределено фото ${sortedCount}.`;
    }

    function uploadRawFilesToCategory(files, chosenCat, inputEl) {
        if (!files.length) return;
        const statusEl = document.getElementById('photo-task-status');
        if (statusEl && chosenCat === 'Auto') statusEl.textContent = 'Распознаю текст на фото...';
        let doneCount = 0;
        let addedCount = 0;
        files.forEach((file, i) => {
            const reader = new FileReader();
            reader.onload = async function (e) {
                const rawDataUrl = e && e.target ? e.target.result : null;
                if (typeof rawDataUrl === 'string' && rawDataUrl.length > 0) {
                    const label = file.name.replace(/\.[^.]+$/, '');
                    const finalCat = chosenCat === 'Auto'
                        ? await detectCategoryForPhotoDataUrl(rawDataUrl, label)
                        : chosenCat;
                    const rec = {
                        id: 'photo-' + Date.now() + '-' + i + '-' + Math.random().toString(36).slice(2, 7),
                        user: currentUser,
                        createdAt: Date.now() + i,
                        category: finalCat,
                        title: label,
                        imageData: rawDataUrl
                    };
                    sessionPhotoTasks.unshift(rec);
                    addedCount++;
                    await putPhotoInIndexedDb(rec);
                }
                doneCount++;
                if (doneCount === files.length) {
                    if (inputEl) inputEl.value = '';
                    const targetViewCat = chosenCat === 'Auto' ? 'All' : chosenCat;
                    const catObj = PHOTO_BLOCK_CATEGORIES.find((c) => c.key === targetViewCat);
                    const catLabel = chosenCat === 'Auto' ? 'по разделам (авто)' : (catObj ? catObj.title : chosenCat);
                    if (statusEl) {
                        statusEl.textContent = `Добавлено: ${addedCount} → ${catLabel}`;
                    }
                    if (photoBlockOpen) {
                        activePhotoBlockCategory = targetViewCat;
                        renderPhotoTasksBlock();
                    }
                }
            };
            reader.onerror = function () {
                doneCount++;
                if (statusEl) statusEl.textContent = 'Ошибка чтения файла.';
            };
            reader.readAsDataURL(file);
        });
    }

    function handleCurrentSectionPhotoUpload(event) {
        const inputEl = event && event.target ? event.target : document.getElementById('practice-section-file-input');
        const files = inputEl && inputEl.files ? Array.from(inputEl.files) : [];
        if (!files.length) return;
        const targetCat = ['Reading', 'Math', 'Logic', 'Biology', 'Chemistry', 'Physics'].includes(activePracticeCategory)
            ? activePracticeCategory
            : 'Math';
        uploadRawFilesToCategory(files, targetCat, inputEl);
    }

    function handlePhotoTaskUpload(event) {
        const inputEl = event && event.target ? event.target : document.getElementById('photo-task-file-input');
        const files = inputEl && inputEl.files ? Array.from(inputEl.files) : [];
        if (!files.length) return;
        const selEl = document.getElementById('photo-task-section-select');
        const chosenCat = selEl ? selEl.value : 'Unassigned';
        uploadRawFilesToCategory(files, chosenCat, inputEl);
    }

    async function deletePhotoTask(photoId) {
        if (!photoId) return;
        sessionPhotoTasks = sessionPhotoTasks.filter((item) => item.id !== photoId);
        await removePhotoFromIndexedDb(photoId);
        renderPhotoTasksBlock();
    }

    function openRawPhotoViewer(photoId) {
        const item = getPhotoTasksList().find((p) => p.id === photoId);
        if (!item || !item.imageData) return;
        const safeImgHtml = `<div class="flex justify-center items-center"><img src="${item.imageData}" alt="${escapeAttr(item.title || 'Task photo')}" class="max-w-full max-h-[72vh] object-contain rounded-xl"></div>`;
        openPassageFullscreen(encodeURIComponent(safeImgHtml), encodeURIComponent(item.title || 'Фото задания'));
    }

    async function moveAllPhotosToDelete() {
        const currentList = getPhotoTasksList();
        if (!currentList.length) return;
        const updated = currentList.map((p) => ({ ...p, category: 'Trash' }));
        sessionPhotoTasks = updated;
        for (const rec of updated) {
            await putPhotoInIndexedDb(rec);
        }
        activePhotoBlockCategory = 'Trash';
        const statusEl = document.getElementById('photo-task-status');
        if (statusEl) statusEl.textContent = `Все фотографии (${updated.length}) перенесены в «Корзину».`;
        renderPhotoTasksBlock();
    }

    async function clearAllPhotosInDelete() {
        const currentList = getPhotoTasksList();
        const toDelete = currentList.filter((p) => (p.category || 'Unassigned') === 'Trash');
        if (!toDelete.length) return;
        sessionPhotoTasks = currentList.filter((p) => (p.category || 'Unassigned') !== 'Trash');
        for (const rec of toDelete) {
            await removePhotoFromIndexedDb(rec.id);
        }
        const statusEl = document.getElementById('photo-task-status');
        if (statusEl) statusEl.textContent = `Удалено фото из «Корзины»: ${toDelete.length}.`;
        renderPhotoTasksBlock();
    }

    function renderPhotoTasksBlock() {
        const container = document.getElementById('photo-tasks-container');
        if (!container) return;
        const allPhotos = getPhotoTasksList();

        const counts = { All: allPhotos.length };
        PHOTO_BLOCK_CATEGORIES.forEach((c) => { counts[c.key] = 0; });
        allPhotos.forEach((p) => {
            const k = p.category || 'Math';
            counts[k] = (counts[k] || 0) + 1;
        });

        document.querySelectorAll('.photo-cat-btn').forEach((btn) => {
            const k = btn.dataset.photoCat;
            const baseMap = {
                All: 'All',
                Reading: 'Reading',
                Math: 'Math',
                Logic: 'Logic & Data',
                Biology: 'Biology',
                Chemistry: 'Chemistry',
                Physics: 'Physics',
                Trash: 'Корзина'
            };
            const c = counts[k] || 0;
            btn.textContent = c > 0 ? `${baseMap[k]} (${c})` : baseMap[k];
        });

        requestAnimationFrame(() => {
            const activeBtn = document.querySelector('#photo-filter-buttons .pill-btn[data-photo-cat="' + activePhotoBlockCategory + '"]');
            if (activeBtn) movePillBubble('photo-filter-buttons', 'photo-pill-bubble', activeBtn, 'pill-btn-selected-accent');
        });

        const groupsToRender = activePhotoBlockCategory === 'All'
            ? PHOTO_BLOCK_CATEGORIES
            : PHOTO_BLOCK_CATEGORIES.filter((c) => c.key === activePhotoBlockCategory);

        const sectionsHtml = groupsToRender.map((sec) => {
            const items = allPhotos.filter((p) => (p.category || 'Unassigned') === sec.key);
            if (!items.length) return '';
            const cardsHtml = items.map((p) => {
                const safeId = String(p.id || '').split("'").join("\\'");
                const currentCat = p.category || 'Math';
                const moveOptionsHtml = PHOTO_BLOCK_CATEGORIES.map((c) =>
                    `<option value="${c.key}" ${currentCat === c.key ? 'selected' : ''}>${c.title}</option>`
                ).join('');
                const trashBtnHtml = currentCat !== 'Trash'
                    ? `<button type="button" onclick="movePhotoTaskToCategory('${safeId}', 'Trash')" class="custom-styled-select px-2.5 py-1 rounded-lg text-[11px] font-semibold transition cursor-pointer">В корзину</button>`
                    : '';
                return `
                    <div class="focus-stream-card card-bg border rounded-2xl p-4 shadow-sm flex flex-col justify-between gap-3">
                        <div class="flex items-start justify-between gap-2">
                            <div class="text-xs sm:text-sm font-bold truncate" title="${escapeAttr(p.title)}">${escapeHtml(p.title || 'Фото задания')}</div>
                            <button type="button" onclick="deletePhotoTask('${safeId}')" title="Удалить фото" class="sub-text hover:text-rose-500 transition text-sm font-bold cursor-pointer flex-shrink-0">✕</button>
                        </div>
                        <div onclick="openRawPhotoViewer('${safeId}')" class="cursor-pointer rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-800 bg-transparent">
                            <img src="${p.imageData}" alt="${escapeAttr(p.title)}" class="w-full h-48 object-contain block">
                        </div>
                        <div class="flex items-center justify-between gap-2 pt-1">
                            <select onchange="movePhotoTaskToCategory('${safeId}', this.value)" title="Переместить в папку" class="custom-styled-select rounded-lg px-2 py-1 text-[11px] font-semibold outline-none cursor-pointer min-w-0 flex-1">
                                ${moveOptionsHtml}
                            </select>
                            ${trashBtnHtml}
                        </div>
                    </div>
                `;
            }).join('');
            return `
                <div class="space-y-3 smooth-stream-enter">
                    <div class="flex items-center justify-between border-b border-gray-200 dark:border-zinc-800 pb-2">
                        <h4 class="text-base sm:text-lg font-bold">${sec.title}</h4>
                        <span class="text-xs font-bold px-2.5 py-0.5 rounded-full profile-tag">${items.length}</span>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">${cardsHtml}</div>
                </div>
            `;
        }).join('');

        if (!sectionsHtml) {
            const secObj = PHOTO_BLOCK_CATEGORIES.find((c) => c.key === activePhotoBlockCategory);
            const label = secObj ? secObj.title : activePhotoBlockCategory;
            container.innerHTML = `<div class="card-bg p-8 rounded-3xl text-center sub-text border shadow-sm text-xs sm:text-sm">В блоке <strong>${label}</strong> пока нет загруженных фото заданий.</div>`;
            return;
        }

        container.innerHTML = sectionsHtml;
        initFocusCardObserver();
    }

    const bubblePullTimers = {};

    function movePillBubble(trackId, bubbleId, activeBtn, selectedClass, instantSnap) {
        const track = document.getElementById(trackId);
        const bubble = document.getElementById(bubbleId);
        if (!track || !bubble) return;
        const buttons = track.querySelectorAll('.pill-btn');
        buttons.forEach((b) => {
            b.classList.remove('pill-btn-selected-accent', 'pill-btn-selected-dark', 'pill-btn-unselected');
            if (b === activeBtn) b.classList.add(selectedClass);
            else b.classList.add('pill-btn-unselected');
        });
        if (!activeBtn || activeBtn.offsetWidth === 0) {
            bubble.style.opacity = '0';
            return;
        }

        const trackW = Math.max(0, track.clientWidth - 8);
        const trackH = Math.max(0, track.clientHeight - 8);
        const rawW = activeBtn.offsetWidth;
        const rawH = activeBtn.offsetHeight;
        const w = trackW > 0 ? Math.min(rawW, trackW) : rawW;
        const h = trackH > 0 ? Math.min(rawH, trackH) : rawH;

        const maxX = Math.max(0, trackW - w);
        const maxY = Math.max(0, trackH - h);
        const targetX = Math.max(0, Math.min(maxX, activeBtn.offsetLeft - 4));
        const targetY = Math.max(0, Math.min(maxY, activeBtn.offsetTop - 4));

        const prevX = parseFloat(bubble.dataset.bubX || 'NaN');
        const prevY = parseFloat(bubble.dataset.bubY || 'NaN');
        const hasPrev = Number.isFinite(prevX) && Number.isFinite(prevY) && bubble.style.opacity !== '0';

        bubble.dataset.bubX = String(targetX);
        bubble.dataset.bubY = String(targetY);

        if (!hasPrev || instantSnap) {
            const prevTrans = bubble.style.transition;
            bubble.style.transition = 'none';
            bubble.style.width = w + 'px';
            bubble.style.height = h + 'px';
            bubble.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
            bubble.style.opacity = '1';
            void bubble.offsetWidth;
            bubble.style.transition = prevTrans || '';
            return;
        }

        if (bubblePullTimers[bubbleId]) {
            clearTimeout(bubblePullTimers[bubbleId]);
            bubblePullTimers[bubbleId] = null;
        }

        bubble.style.opacity = '1';
        bubble.style.width = w + 'px';
        bubble.style.height = h + 'px';
        bubble.classList.remove('is-goo-ooze', 'is-goo-coagulate');
        bubble.classList.add('is-bubble-hop');
        bubble.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;

        bubblePullTimers[bubbleId] = setTimeout(() => {
            bubble.classList.remove('is-bubble-hop');
            bubblePullTimers[bubbleId] = null;
        }, 360);
    }

    function syncAllVisiblePillBubbles(instantSnap) {
        const snap = Boolean(instantSnap);
        const mainBtn = document.querySelector('#main-nav-pill-wrap .pill-btn[data-tab="' + activeTabName + '"]');
        if (mainBtn) movePillBubble('main-nav-pill-wrap', 'main-nav-bubble', mainBtn, 'pill-btn-selected-accent', snap);

        if (activeTabName === 'practice' && activePracticeCategory) {
            const pracBtn = document.querySelector('#practice-buttons .pill-btn[data-cat="' + activePracticeCategory + '"]');
            if (pracBtn) movePillBubble('practice-buttons', 'practice-pill-bubble', pracBtn, 'pill-btn-selected-accent', snap);
        }

        if (activeTabName === 'bookmarks') {
            const bmBtn = document.querySelector('#bookmarks-buttons .pill-btn[data-bm-cat="' + activeBookmarkCategory + '"]');
            if (bmBtn) movePillBubble('bookmarks-buttons', 'bookmarks-pill-bubble', bmBtn, 'pill-btn-selected-accent', snap);
        }

        const uniBtn = document.querySelector('#unified-photo-filter-buttons .pill-btn[data-unified-cat="' + activePhotoBlockCategory + '"]');
        if (uniBtn) movePillBubble('unified-photo-filter-buttons', 'unified-photo-pill-bubble', uniBtn, 'pill-btn-selected-accent', snap);
    }

    function inferBookmarkSectionKey(q) {
        if (!q) return 'General';
        if (q.sectionKey && ['Reading', 'Math', 'Logic', 'Biology', 'Chemistry', 'Physics'].includes(q.sectionKey)) {
            return q.sectionKey;
        }
        const idStr = String(q.id || '').toLowerCase();
        if (q.passage || idStr.includes('read') || idStr.startsWith('off-r') || idStr.includes('-r')) return 'Reading';
        if (idStr.includes('math') || idStr.startsWith('off-m') || idStr.includes('-m') || idStr.startsWith('m-')) return 'Math';
        if (idStr.includes('logic') || idStr.startsWith('off-l') || idStr.includes('-l') || idStr.startsWith('l-')) return 'Logic';
        if (idStr.includes('bio') || idStr.startsWith('off-b') || idStr.includes('-b') || idStr.startsWith('b-')) return 'Biology';
        if (idStr.includes('chem') || idStr.startsWith('off-c') || idStr.includes('-c') || idStr.startsWith('c-')) return 'Chemistry';
        if (idStr.includes('phys') || idStr.startsWith('off-p') || idStr.includes('-p') || idStr.startsWith('p-')) return 'Physics';
        const titleStr = String(q.sectionTitle || '').toLowerCase();
        if (titleStr.includes('read')) return 'Reading';
        if (titleStr.includes('math')) return 'Math';
        if (titleStr.includes('logic') || titleStr.includes('reason')) return 'Logic';
        if (titleStr.includes('bio')) return 'Biology';
        if (titleStr.includes('chem')) return 'Chemistry';
        if (titleStr.includes('phys')) return 'Physics';
        return 'General';
    }

    function escapeAttr(str) {
        return String(str || '').replace(/"/g, '&quot;');
    }

    function escapeHtml(str) {
        return String(str === undefined || str === null ? '' : str)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function sanitizeInlineHtml(str) {
        const raw = String(str || '');
        const tokenMap = [];
        const preserved = raw.replace(/<\/?(?:br|sub|sup|b|strong|i|em|u|span)\b[^>]*>/gi, (m) => {
            const tok = `__HTML_TOK_${tokenMap.length}__`;
            tokenMap.push(m);
            return tok;
        });
        const escaped = preserved.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return escaped.replace(/__HTML_TOK_(\d+)__/g, (_, idx) => tokenMap[Number(idx)] || '');
    }

    function formatLineBreaks(str) {
        return sanitizeInlineHtml(str).split('\n').join('<br>');
    }


    let activeHintTriggerBtn = null;
    let activeHintData = null;
    let activeHintLang = 'ru';

    function extractFirstStepHint(rawExp, correctOptText, isRu) {
        const text = String(rawExp || '').trim();
        if (!text) return '';
        const lines = text.split(/\n+/).map((l) => l.trim()).filter(Boolean);
        let firstPart = lines[0] || '';
        firstPart = firstPart.replace(/^(?:Шаг|Step)\s*1\s*[:.)-]?\s*/i, '').trim();

        // If the explanation is only a single line, trim trailing conclusion/answer parts after '->' or 'Thus/Therefore/Значит/Следовательно'
        if (lines.length === 1) {
            firstPart = firstPart
                .replace(/\s*(?:->|→|⇒|Therefore|Thus|Hence|So,|Значит|Следовательно|Таким образом|Отсюда)\b.*$/i, '')
                .trim();
        } else {
            // Even in Step 1, avoid leaking final solved variable value after '->'
            firstPart = firstPart.replace(/\s*(?:->|→|⇒)\s*[a-zA-Zа-яА-Я0-9_]+\s*=.*$/i, '').trim();
        }

        // Remove exact correct option string if it appears verbatim at the end
        const cleanAns = String(correctOptText || '').trim();
        if (cleanAns.length >= 3 && firstPart.toLowerCase().endsWith(cleanAns.toLowerCase())) {
            firstPart = firstPart.slice(0, -cleanAns.length).replace(/[,:;\s-]+$/, '').trim();
        }
        return firstPart;
    }

    function buildTaskHintData(qObj) {
        const sec = String((qObj && qObj.sectionKey) || '').toLowerCase();
        const defaultRuBySec = {
            reading: 'Найди в тексте абзац, где упоминается ключевое слово из вопроса, и сопоставь его с основной мыслью автора, отсекая слишком крайние утверждения.',
            math: 'Выпиши данные из условия в виде уравнения или пропорции и проверь, какая величина остаётся неизвестной.',
            logic: 'Зафиксируй все ограничения из условия (суммы, неравенства или порядок) и проверь крайний случай.',
            biology: 'Вспомни функцию указанной структуры или этапа процесса и сопоставь её с условием задачи.',
            chemistry: 'Определи тип реакции или степень окисления/концентрацию реагентов и проверь стехиометрические коэффициенты.',
            physics: 'Выдели действующие силы или сохраняющуюся физическую величину и запиши связывающую их формулу.'
        };
        const defaultEnBySec = {
            reading: 'Locate the paragraph mentioning the question’s key term and match the author’s main point while eliminating extreme claims.',
            math: 'Translate the given conditions into an equation or proportion and isolate the target variable step by step.',
            logic: 'List every constraint (totals, inequalities, or ordering) and test the boundary or extreme case.',
            biology: 'Recall the specific role of the structure or stage mentioned and match it to the process in the prompt.',
            chemistry: 'Identify the reaction type, oxidation states, or molar ratios before computing the final quantity.',
            physics: 'Identify the governing physical law or conserved quantity and relate the given variables first.'
        };

        let secBucket = 'logic';
        if (sec.includes('read') || (qObj && qObj.passage)) secBucket = 'reading';
        else if (sec.includes('math')) secBucket = 'math';
        else if (sec.includes('bio')) secBucket = 'biology';
        else if (sec.includes('chem')) secBucket = 'chemistry';
        else if (sec.includes('phys')) secBucket = 'physics';

        const correctOpt = (qObj && Array.isArray(qObj.options) && typeof qObj.ans === 'number')
            ? (qObj.options[qObj.ans] || '')
            : '';

        const customRu = qObj && (qObj.hintRu || qObj.hint);
        const customEn = qObj && (qObj.hintEn || qObj.hint);

        const derivedRu = customRu || extractFirstStepHint(qObj && qObj.expRu, correctOpt, true) || defaultRuBySec[secBucket];
        const derivedEn = customEn || extractFirstStepHint(qObj && qObj.expEn, correctOpt, false) || defaultEnBySec[secBucket];

        return {
            ru: derivedRu,
            en: derivedEn
        };
    }

    function ensureTaskHintDom() {
        let backdrop = document.getElementById('task-hint-backdrop');
        let pop = document.getElementById('task-hint-popover');
        if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.id = 'task-hint-backdrop';
            backdrop.className = 'task-hint-backdrop hide';
            backdrop.addEventListener('click', closeTaskHintPopover);
            document.body.appendChild(backdrop);
        }
        if (!pop) {
            pop = document.createElement('div');
            pop.id = 'task-hint-popover';
            pop.className = 'task-hint-popover card-bg border shadow-2xl p-4 space-y-2.5 hide';
            pop.addEventListener('click', (e) => e.stopPropagation());
            pop.innerHTML = `
                <div class="flex items-center justify-between gap-2">
                    <div class="flex items-center gap-1.5">
                        <span class="text-xs font-extrabold px-2.5 py-0.5 rounded-full profile-tag" id="task-hint-title">💡 Подсказка</span>
                    </div>
                    <div class="flex items-center gap-1.5">
                        <button type="button" id="task-hint-lang-ru" onclick="setTaskHintLang('ru')" class="px-2 py-0.5 rounded-md text-[10px] font-bold cursor-pointer transition">RU</button>
                        <button type="button" id="task-hint-lang-en" onclick="setTaskHintLang('en')" class="px-2 py-0.5 rounded-md text-[10px] font-bold cursor-pointer transition">EN</button>
                        <button type="button" onclick="closeTaskHintPopover()" title="Закрыть" class="custom-styled-select w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center cursor-pointer hover:opacity-85 transition">✕</button>
                    </div>
                </div>
                <div id="task-hint-body" class="adaptive-text text-xs leading-relaxed"></div>
                <div class="pt-1 flex justify-end md:hidden">
                    <button type="button" onclick="closeTaskHintPopover()" class="profile-accent-btn px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer">Понятно</button>
                </div>
            `;
            document.body.appendChild(pop);
        }
        return { backdrop, pop };
    }

    function renderTaskHintContent() {
        if (!activeHintData) return;
        const bodyEl = document.getElementById('task-hint-body');
        const titleEl = document.getElementById('task-hint-title');
        const btnRu = document.getElementById('task-hint-lang-ru');
        const btnEn = document.getElementById('task-hint-lang-en');
        if (titleEl) {
            titleEl.textContent = activeHintLang === 'en' ? '💡 Hint' : '💡 Подсказка';
        }
        if (btnRu) {
            btnRu.className = activeHintLang === 'ru'
                ? 'is-active-lang-btn px-2 py-0.5 rounded-md text-[10px] font-bold cursor-pointer transition'
                : 'is-idle-lang-btn px-2 py-0.5 rounded-md text-[10px] font-bold cursor-pointer transition';
        }
        if (btnEn) {
            btnEn.className = activeHintLang === 'en'
                ? 'is-active-lang-btn px-2 py-0.5 rounded-md text-[10px] font-bold cursor-pointer transition'
                : 'is-idle-lang-btn px-2 py-0.5 rounded-md text-[10px] font-bold cursor-pointer transition';
        }
        if (bodyEl) {
            const rawText = activeHintLang === 'en' ? activeHintData.en : activeHintData.ru;
            bodyEl.innerHTML = formatLineBreaks(rawText);
        }
    }

    function positionTaskHintPopover() {
        const pop = document.getElementById('task-hint-popover');
        const backdrop = document.getElementById('task-hint-backdrop');
        if (!pop || pop.classList.contains('hide')) return;
        const isMobile = window.innerWidth < 768;
        if (backdrop) {
            backdrop.classList.toggle('hide', !isMobile);
            if (isMobile) {
                requestAnimationFrame(() => backdrop.classList.add('is-visible'));
            } else {
                backdrop.classList.remove('is-visible');
            }
        }
        if (isMobile) {
            pop.style.left = '';
            pop.style.top = '';
            pop.style.right = '';
            return;
        }
        if (!activeHintTriggerBtn || !document.body.contains(activeHintTriggerBtn)) return;
        const btnRect = activeHintTriggerBtn.getBoundingClientRect();
        const cardEl = activeHintTriggerBtn.closest('.focus-stream-card, .split-floating-card, .card-bg');
        const cardRect = cardEl ? cardEl.getBoundingClientRect() : btnRect;
        const popW = pop.offsetWidth || 288;
        const popH = pop.offsetHeight || 130;

        // Place to the right of the card if space permits, otherwise right-aligned near the '?' button
        let leftPos = cardRect.right + 12;
        if (leftPos + popW > window.innerWidth - 16) {
            leftPos = Math.max(16, window.innerWidth - popW - 20);
        }
        const topPos = Math.max(82, Math.min(window.innerHeight - popH - 16, btnRect.top - 6));
        pop.style.left = Math.round(leftPos) + 'px';
        pop.style.top = Math.round(topPos) + 'px';
        pop.style.right = 'auto';
    }

    function closeTaskHintPopover() {
        const pop = document.getElementById('task-hint-popover');
        const backdrop = document.getElementById('task-hint-backdrop');
        if (activeHintTriggerBtn) {
            activeHintTriggerBtn.classList.remove('is-hint-open');
            activeHintTriggerBtn = null;
        }
        activeHintData = null;
        if (pop) {
            pop.classList.remove('is-visible');
            setTimeout(() => {
                if (!activeHintData) pop.classList.add('hide');
            }, 190);
        }
        if (backdrop) {
            backdrop.classList.remove('is-visible');
            setTimeout(() => {
                if (!activeHintData) backdrop.classList.add('hide');
            }, 190);
        }
    }

    function setTaskHintLang(langCode) {
        activeHintLang = langCode === 'en' ? 'en' : 'ru';
        renderTaskHintContent();
        positionTaskHintPopover();
    }

    function openTaskHintPopover(btnEl, safeJson) {
        if (activeHintTriggerBtn && activeHintTriggerBtn === btnEl) {
            closeTaskHintPopover();
            return;
        }
        if (activeHintTriggerBtn) {
            activeHintTriggerBtn.classList.remove('is-hint-open');
        }
        let qObj = {};
        try {
            qObj = JSON.parse(decodeURIComponent(safeJson));
        } catch (e) {}

        activeHintTriggerBtn = btnEl || null;
        if (activeHintTriggerBtn) activeHintTriggerBtn.classList.add('is-hint-open');
        activeHintData = buildTaskHintData(qObj);
        activeHintLang = currentUiLang === 'en' ? 'en' : 'ru';

        const { pop } = ensureTaskHintDom();
        renderTaskHintContent();
        pop.classList.remove('hide');
        positionTaskHintPopover();
        requestAnimationFrame(() => {
            pop.classList.add('is-visible');
            positionTaskHintPopover();
        });
    }

    document.addEventListener('click', function (e) {
        if (!activeHintData) return;
        const target = e && e.target;
        if (target && (target.closest('#task-hint-popover') || target.closest('.task-hint-btn'))) return;
        closeTaskHintPopover();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && activeHintData) {
            closeTaskHintPopover();
        }
    });

    window.addEventListener('resize', () => {
        if (activeHintData) positionTaskHintPopover();
    });

    window.addEventListener('scroll', () => {
        if (activeHintData && window.innerWidth >= 768) positionTaskHintPopover();
    }, { passive: true });

    function safeHash(str) {
        let hash = 0;
        const s = String(str || '');
        for (let i = 0; i < s.length; i++) {
            hash = ((hash << 5) - hash) + s.charCodeAt(i);
            hash |= 0;
        }
        return 'uid-' + Math.abs(hash).toString(16);
    }

    function stripTechnicalQuestionLabels(rawText) {
        let s = String(rawText || '').trim();
        // Strip leading bracketed tags like [Statement Check], [Group 1], [Sub 2], [Deduction], [math #016], etc.
        s = s.replace(/^\s*\[[^\]]{1,60}\]\s*/g, '');
        // Strip leading subgroup/bank prefixes like "Extended Bank — ...", "Variant II — ...", "Practice Set B — ...", "Group 1 — ...", "Sub 2 — ...", "Task 12 — ..."
        s = s.replace(/^(?:(?:in|during|from|within|according to|based on|under)\s+(?:[a-z]+\s+){0,4}#\d+[,.]?\s*|extended bank|variant\s*(?:ii|2|i|1)|practice set\s*[a-z0-9]+|group\s*(?:one|two|three|\d+)|sub\s*(?:one|two|three|\d+)|subgroup\s*[a-z0-9]+|task\s*\d+|statement check|condition\s*&\s*constraint|comparison\s*&\s*relation|deduction)\s*(?:[:—–-]\s*(?:solve carefully|determine the correct answer|find the solution|which of the following accurately matches the outcome of|analyze the condition in this problem|determine the relationship established in|deduce the valid answer for)?\s*[:—–-]?\s*)?/i, '');
        // Also strip any stray inline [group ...] / [sub ...] / [variant ...] / [bank ...] tags anywhere in the string
        s = s.replace(/\s*\[(?:group|sub|variant|extended|practice set|statement check|condition|comparison|deduction|math|logic|bio|chem|phys|read)[^\]]*\]\s*/gi, ' ');
        s = s.replace(/\s{2,}/g, ' ').trim();
        if (s.length > 0) {
            s = s.charAt(0).toUpperCase() + s.slice(1);
        }
        return s;
    }

    function deriveQuestionTopicTitle(qObj, category) {
        if (qObj && qObj.title && String(qObj.title).trim().length > 0) return String(qObj.title).trim();
        const cat = category || (qObj && qObj.sectionKey) || '';
        const map = {
            Math: 'Algebra & Functions',
            Logic: 'Data & Reasoning',
            Biology: 'Cellular & Life Sciences',
            Chemistry: 'Chemical Processes',
            Physics: 'Mechanics & Fields',
            Reading: 'Reading Passage'
        };
        return map[cat] || 'Practice Task';
    }

    let focusScrollRafPending = false;

    function updateConveyorFocusStates() {
        focusScrollRafPending = false;
        const vh = window.innerHeight || document.documentElement.clientHeight || 800;
        // Tighter active band: enters later (around 72% down viewport) and exits earlier (around 24% from top)
        const bandTop = vh * 0.22;
        const bandBottom = vh * 0.74;
        const viewportCenter = vh * 0.48;

        // 1. Strictly ONE top-level task card in focus at a time (the one closest to viewport center)
        const topCards = Array.from(document.querySelectorAll('.focus-stream-card'));
        let closestTop = null;
        let closestTopDist = Infinity;

        topCards.forEach((card) => {
            card.classList.remove('in-focus');
            if (!card.offsetParent && card.offsetHeight === 0) return;
            const rect = card.getBoundingClientRect();
            const isVisibleOnScreen = rect.bottom > vh * 0.14 && rect.top < vh * 0.86;
            if (!isVisibleOnScreen) return;

            const cardCenter = rect.top + rect.height * 0.5;
            const dist = Math.abs(cardCenter - viewportCenter);
            if (dist < closestTopDist) {
                closestTopDist = dist;
                closestTop = card;
            }
        });

        if (closestTop) {
            closestTop.classList.add('in-focus');
        }

        // 2. Nested questions inside Reading passages: each question zooms in/out individually as you scroll through the passage
        const subCards = Array.from(document.querySelectorAll('.focus-sub-card'));
        let bestSub = null;
        let bestSubDist = Infinity;
        subCards.forEach((sub) => {
            if (!sub.offsetParent && sub.offsetHeight === 0) return;
            const rect = sub.getBoundingClientRect();
            if (rect.bottom > vh * 0.25 && rect.top < vh * 0.72) {
                const dist = Math.abs((rect.top + rect.height * 0.5) - viewportCenter);
                if (dist < bestSubDist) {
                    bestSubDist = dist;
                    bestSub = sub;
                }
            }
            sub.classList.remove('in-focus');
        });
        if (bestSub) {
            bestSub.classList.add('in-focus');
        }
    }

    function scheduleConveyorUpdate() {
        if (focusScrollRafPending) return;
        focusScrollRafPending = true;
        updatePracticeFloatingSwitcherVisibility();
        requestAnimationFrame(updateConveyorFocusStates);
    }

    function togglePracticeFloatingMenu() {
        const menu = document.getElementById('practice-floating-menu');
        if (!menu) return;
        menu.classList.toggle('hide');
    }

    function closePracticeFloatingMenu() {
        const menu = document.getElementById('practice-floating-menu');
        if (menu) menu.classList.add('hide');
    }

    let practiceBarAnchorTop = null;

    function togglePracticeStripFold() {
        const bar = document.getElementById('practice-active-bar');
        const btn = document.getElementById('practice-strip-fold-btn');
        if (!bar) return;
        const nowFolded = !bar.classList.contains('is-strip-folded');
        bar.classList.toggle('is-strip-folded', nowFolded);
        if (btn) {
            btn.textContent = nowFolded ? '+ Разделы' : '− Свернуть';
        }
        if (!nowFolded) {
            requestAnimationFrame(() => syncAllVisiblePillBubbles(true));
        }
    }

    function syncPracticeBarFollowState() {
        const bar = document.getElementById('practice-active-bar');
        const wrap = document.getElementById('practice-floating-switcher');
        if (wrap) wrap.classList.add('hide');
        if (bar) bar.classList.remove('is-docked-follow', 'is-mobile-collapsed', 'is-scrolled-compact');
        closePracticeFloatingMenu();
    }

    function updatePracticeFloatingSwitcherVisibility() {
        syncPracticeBarFollowState();
    }

    const TAB_LANTERN_COORDS = {
        home: { x1: 14, y1: 16, x2: 86, y2: 24 },
        tests: { x1: 32, y1: 20, x2: 74, y2: 68 },
        practice: { x1: 68, y1: 18, x2: 24, y2: 72 },
        bookmarks: { x1: 82, y1: 34, x2: 36, y2: 78 },
        dictionary: { x1: 48, y1: 14, x2: 84, y2: 76 }
    };
    let lanternAnimFrameId = null;

    function animateBackgroundLanternsForTab(tabKey) {
        const target = TAB_LANTERN_COORDS[tabKey] || TAB_LANTERN_COORDS.home;
        const body = document.body;
        if (!body) return;
        const parsePct = (prop, fallback) => {
            const raw = parseFloat(getComputedStyle(body).getPropertyValue(prop));
            return Number.isFinite(raw) ? raw : fallback;
        };
        const startX1 = parsePct('--bg-spot-1-x', 12);
        const startY1 = parsePct('--bg-spot-1-y', 14);
        const startX2 = parsePct('--bg-spot-2-x', 88);
        const startY2 = parsePct('--bg-spot-2-y', 22);
        const duration = 650;
        const t0 = performance.now();

        if (lanternAnimFrameId) cancelAnimationFrame(lanternAnimFrameId);
        const step = (now) => {
            const p = Math.min(1, (now - t0) / duration);
            const ease = 1 - Math.pow(1 - p, 3);
            const curX1 = startX1 + (target.x1 - startX1) * ease;
            const curY1 = startY1 + (target.y1 - startY1) * ease;
            const curX2 = startX2 + (target.x2 - startX2) * ease;
            const curY2 = startY2 + (target.y2 - startY2) * ease;
            body.style.setProperty('--bg-spot-1-x', curX1.toFixed(2) + '%');
            body.style.setProperty('--bg-spot-1-y', curY1.toFixed(2) + '%');
            body.style.setProperty('--bg-spot-2-x', curX2.toFixed(2) + '%');
            body.style.setProperty('--bg-spot-2-y', curY2.toFixed(2) + '%');
            if (p < 1) {
                lanternAnimFrameId = requestAnimationFrame(step);
            } else {
                lanternAnimFrameId = null;
            }
        };
        lanternAnimFrameId = requestAnimationFrame(step);
    }

    function initFocusCardObserver() {
        if (focusCardObserver) {
            focusCardObserver.disconnect();
            focusCardObserver = null;
        }
        if (!window.__centsConveyorBound) {
            window.__centsConveyorBound = true;
            window.addEventListener('scroll', () => { updatePracticeFloatingSwitcherVisibility(); syncNavbarExamTimerVisibility(); scheduleConveyorUpdate(); }, { passive: true });
            window.addEventListener('resize', scheduleConveyorUpdate, { passive: true });
        }
        requestAnimationFrame(() => {
            updateConveyorFocusStates();
            requestAnimationFrame(updateConveyorFocusStates);
        });
    }

    const ACCOUNTS_REGISTRY_KEY = 'cents_accounts_registry_v1';
    const ACTIVE_SESSION_KEY = 'cents_active_session_user_v1';
    let accountModalMandatory = false;

    function getAccountStorageKey(userKey) {
        return 'acc_' + encodeURIComponent(String(userKey || 'dima'));
    }

    function getUserStore(userKey) {
        const k = getAccountStorageKey(userKey || currentUser);
        try {
            return JSON.parse(localStorage.getItem(k) || '{}');
        } catch (e) {
            return {};
        }
    }

    function setUserStore(userKey, storeObj) {
        const k = getAccountStorageKey(userKey || currentUser);
        try {
            localStorage.setItem(k, JSON.stringify(storeObj || {}));
        } catch (e) {}
    }

    function loadAccountsRegistry() {
        return [FIXED_TWO_ACCOUNTS.dima, FIXED_TWO_ACCOUNTS.dominika];
    }

    function saveAccountsRegistry() {}

    const FIXED_TWO_ACCOUNTS = {
        dima: { key: 'dima', login: 'dima', displayName: 'Дима', emoji: '👱‍♂️' },
        dominika: { key: 'dominika', login: 'dominika', displayName: 'Доминика', emoji: '👱‍♀️' }
    };

    function normalizeTwoAccountKey(rawVal) {
        const low = String(rawVal || '').trim().toLowerCase();
        if (low === 'dominika' || low.includes('доминика')) return 'dominika';
        return 'dima';
    }

    function getTwoAccountRecord(keyOrName) {
        const k = normalizeTwoAccountKey(keyOrName);
        return FIXED_TWO_ACCOUNTS[k] || FIXED_TWO_ACCOUNTS.dima;
    }

    function updateTwoAccountNavbarUi() {
        const sessionUser = localStorage.getItem(ACTIVE_SESSION_KEY);
        const nameEl = document.getElementById('account-display-name');
        const emojiEl = document.getElementById('account-avatar-emoji');
        if (!sessionUser) {
            if (nameEl) nameEl.textContent = currentUiLang === 'en' ? 'Select account' : (currentUiLang === 'it' ? 'Scegli account' : 'Выбрать аккаунт');
            if (emojiEl) emojiEl.textContent = '👥';
            return;
        }
        const k = normalizeTwoAccountKey(sessionUser);
        const acc = getTwoAccountRecord(k);
        if (nameEl) nameEl.textContent = acc.displayName;
        if (emojiEl) emojiEl.textContent = acc.emoji;
    }

    async function selectFixedProfileAccount(accKey) {
        const k = normalizeTwoAccountKey(accKey);
        const acc = getTwoAccountRecord(k);
        currentUser = k;
        localStorage.setItem('cents_current_user', k);
        localStorage.setItem(ACTIVE_SESSION_KEY, k);
        try { sessionStorage.setItem('cents_window_session_active_v1', '1'); } catch (e) {}
        migrateLegacyUserStorageIfNeeded(k);
        updateTwoAccountNavbarUi();
        applyProfileAccent(k);
        sessionPhotoTasks = [];
        currentRandomQuestion = null;
        loadPersistedRandomHistory();
        await pullAccountFromFirebase(k, false);
        await loadPhotosFromIndexedDbForUser();
        renderTestBlocks();
        activePracticeCategory = null;
        accountModalMandatory = false;
        closeAccountModal();
        switchTab('home');
    }

    function setAccountModalMode(mode) {
        const titleEl = document.getElementById('auth-modal-title');
        const displayNameRow = document.getElementById('auth-displayname-row');
        const submitBtn = document.getElementById('auth-submit-btn');
        const tabLogin = document.getElementById('auth-tab-login');
        const tabRegister = document.getElementById('auth-tab-register');
        const isReg = mode === 'register';
        if (titleEl) titleEl.textContent = isReg ? 'Профиль / Настройки' : 'Выбор аккаунта';
        if (displayNameRow) displayNameRow.classList.add('hide');
        if (submitBtn) submitBtn.textContent = 'Готово';
        if (tabLogin) tabLogin.className = 'flex-1 py-1.5 rounded-full text-xs font-bold cursor-pointer transition profile-accent-btn';
        if (tabRegister) tabRegister.className = 'flex-1 py-1.5 rounded-full text-xs font-bold cursor-pointer transition sub-text';
    }

    function openAccountModal(mandatory) {
        accountModalMandatory = Boolean(mandatory);
        const modal = document.getElementById('account-auth-modal');
        const closeBtn = document.getElementById('auth-close-btn');
        if (!modal) return;
        if (closeBtn) closeBtn.classList.toggle('hide', accountModalMandatory);
        setAccountModalMode('login');
        modal.classList.remove('hide');
    }

    function closeAccountModal() {
        if (accountModalMandatory) return;
        const modal = document.getElementById('account-auth-modal');
        if (modal) modal.classList.add('hide');
    }

    function quickFillAccountLogin(loginVal) {
        selectFixedProfileAccount(loginVal);
    }

    function submitAccountAuth(event) {
        if (event) event.preventDefault();
        const loginInput = document.getElementById('auth-username-input');
        const chosen = normalizeTwoAccountKey(loginInput && loginInput.value ? loginInput.value : currentUser);
        selectFixedProfileAccount(chosen);
    }

    function logoutAccount() {
        localStorage.removeItem(ACTIVE_SESSION_KEY);
        sessionPhotoTasks = [];
        currentRandomQuestion = null;
        seenRandomIds = [];
        updateTwoAccountNavbarUi();
        openAccountModal(false);
    }

    const LEGACY_STORAGE_BASES = [
        'cents_bookmarks',
        'cents_dict',
        'cents_practice_state',
        'cents_practice_order',
        'cents_official_history',
        'cents_random_seen_v1'
    ];

    function migrateLegacyUserStorageIfNeeded(userKey) {
        const targetKey = userKey || currentUser;
        if (!targetKey) return;
        const store = getUserStore(targetKey);
        let changed = false;

        LEGACY_STORAGE_BASES.forEach((baseKey) => {
            if (store[baseKey] !== undefined) return;
            const rawLegacy = localStorage.getItem(baseKey + '_' + targetKey);
            if (!rawLegacy) return;
            try {
                const parsed = JSON.parse(rawLegacy);
                if (baseKey === 'cents_bookmarks' || baseKey === 'cents_dict') {
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        store[baseKey] = parsed;
                        changed = true;
                    }
                } else if (parsed && typeof parsed === 'object' && Object.keys(parsed).length > 0) {
                    store[baseKey] = parsed;
                    changed = true;
                }
            } catch (e) {
                // Ignore malformed legacy entry
            }
        });

        if (changed) {
            setUserStore(targetKey, store);
        }
    }

    const FIREBASE_RTDB_URL = 'https://prep-cent-s-default-rtdb.europe-west1.firebasedatabase.app';
    let isApplyingCloudSync = false;
    let cloudSyncDebounceTimer = null;
    let cloudPollIntervalId = null;

    function getFirebaseBaseUrl() {
        return String(FIREBASE_RTDB_URL || '').replace(/\/+$/, '');
    }

    function buildAccountCloudSnapshot(userKey) {
        const k = normalizeTwoAccountKey(userKey || currentUser);
        const rawStore = getUserStore(k);
        const cleanStore = { ...(rawStore && typeof rawStore === 'object' ? rawStore : {}) };
        if (cleanStore.cents_last_view_v1 && typeof cleanStore.cents_last_view_v1 === 'object') {
            const { scrollY, ...restView } = cleanStore.cents_last_view_v1;
            cleanStore.cents_last_view_v1 = restView;
        }
        return {
            updatedAt: Date.now(),
            account: k,
            store: cleanStore
        };
    }

    let localAccentChangedAt = 0;

    function applyCloudSnapshotToLocal(userKey, snapshot) {
        if (!snapshot || typeof snapshot !== 'object' || !snapshot.store || typeof snapshot.store !== 'object') {
            return false;
        }
        const k = normalizeTwoAccountKey(userKey || currentUser);
        const localStore = getUserStore(k);
        const localUpdatedAt = Number(localStore.__cloudSyncedAt || 0);
        const remoteUpdatedAt = Number(snapshot.updatedAt || 0);
        if (remoteUpdatedAt > 0 && localUpdatedAt > remoteUpdatedAt) {
            return false;
        }

        const protectLocalAccent = (Date.now() - localAccentChangedAt) < 30000
            || (localStore.cents_custom_accent_hex && snapshot.store.cents_custom_accent_hex && localStore.cents_custom_accent_hex !== snapshot.store.cents_custom_accent_hex && localUpdatedAt >= remoteUpdatedAt);

        isApplyingCloudSync = true;
        try {
            const mergedStore = {
                ...localStore,
                ...snapshot.store,
                cents_custom_accent_hex: protectLocalAccent
                    ? (localStore.cents_custom_accent_hex || snapshot.store.cents_custom_accent_hex)
                    : (snapshot.store.cents_custom_accent_hex || localStore.cents_custom_accent_hex),
                __cloudSyncedAt: Math.max(remoteUpdatedAt || Date.now(), localUpdatedAt)
            };
            setUserStore(k, mergedStore);
            const activeHex = mergedStore.cents_custom_accent_hex;
            if (activeHex && k === normalizeTwoAccountKey(currentUser)) {
                applyCustomAccentToBody(activeHex);
            }
        } finally {
            isApplyingCloudSync = false;
        }
        return true;
    }

    async function pushAccountToFirebase(userKey) {
        const baseUrl = getFirebaseBaseUrl();
        if (!baseUrl || isApplyingCloudSync) return;
        const k = normalizeTwoAccountKey(userKey || currentUser);
        const payload = buildAccountCloudSnapshot(k);
        try {
            const localStore = getUserStore(k);
            localStore.__cloudSyncedAt = payload.updatedAt;
            setUserStore(k, localStore);

            await fetch(`${baseUrl}/accounts/${encodeURIComponent(k)}.json`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
        } catch (err) {
            console.warn('Firebase push skipped/failed:', err);
        }
    }

    function scheduleFirebasePush(userKey) {
        if (isApplyingCloudSync) return;
        const k = normalizeTwoAccountKey(userKey || currentUser);
        if (cloudSyncDebounceTimer) clearTimeout(cloudSyncDebounceTimer);
        cloudSyncDebounceTimer = setTimeout(() => {
            pushAccountToFirebase(k);
        }, 450);
    }

    async function pullAccountFromFirebase(userKey, refreshUiIfChanged) {
        const baseUrl = getFirebaseBaseUrl();
        if (!baseUrl) return false;
        const k = normalizeTwoAccountKey(userKey || currentUser);
        try {
            const res = await fetch(`${baseUrl}/accounts/${encodeURIComponent(k)}.json`, {
                cache: 'no-store'
            });
            if (!res.ok) return false;
            const data = await res.json();
            if (!data) return false;
            const changed = applyCloudSnapshotToLocal(k, data);
            if (changed && refreshUiIfChanged && k === normalizeTwoAccountKey(currentUser)) {
                if (activeTabName === 'tests') renderTestBlocks();
                if (activeTabName === 'bookmarks') loadBookmarksView();
                if (activeTabName === 'dictionary') loadDictionaryView();
                if (activeTabName === 'practice' && activePracticeCategory) {
                    const keepScroll = window.scrollY || window.pageYOffset || 0;
                    loadPractice(activePracticeCategory, false);
                    requestAnimationFrame(() => window.scrollTo(0, keepScroll));
                }
                const chartsModal = document.getElementById('live-charts-modal');
                if (chartsModal && !chartsModal.classList.contains('hide')) {
                    renderLiveChartsModal();
                }
                const profModal = document.getElementById('account-profile-modal');
                if (profModal && !profModal.classList.contains('hide')) {
                    openAccountProfileModal();
                }
            }
            return changed;
        } catch (err) {
            console.warn('Firebase pull skipped/failed:', err);
            return false;
        }
    }

    function startLiveFirebasePolling() {
        if (cloudPollIntervalId) clearInterval(cloudPollIntervalId);
        pullAccountFromFirebase(currentUser, true);
        cloudPollIntervalId = setInterval(() => {
            pullAccountFromFirebase(currentUser, false);
        }, 20000);
    }

    function getStorage(baseKey) {
        migrateLegacyUserStorageIfNeeded(currentUser);
        const store = getUserStore(currentUser);
        const val = store[baseKey];
        if (val !== undefined) return val;
        if (baseKey === 'cents_dict' || baseKey === 'cents_bookmarks') return [];
        return {};
    }

    function setStorage(baseKey, data) {
        const store = getUserStore(currentUser);
        store[baseKey] = data;
        setUserStore(currentUser, store);
        if (!isApplyingCloudSync && baseKey !== 'cents_last_view_v1') {
            scheduleFirebasePush(currentUser);
        }
    }

    function getPracticeState() {
        const s = getStorage('cents_practice_state');
        return s && typeof s === 'object' ? s : {};
    }

    function savePracticeAnswerState(questionId, chosenVal, isCorrect, chosenText) {
        if (!questionId) return;
        const state = getPracticeState();
        const prev = state[questionId] || {};
        state[questionId] = {
            chosen: chosenVal,
            chosenText: chosenText !== undefined ? String(chosenText) : prev.chosenText,
            checked: Boolean(isCorrect || prev.checked),
            isCorrect: Boolean(isCorrect),
            collapsed: Boolean(prev.collapsed)
        };
        setStorage('cents_practice_state', state);
    }

    function syncPassagePopupTheme(cardEl) {
        if (!cardEl) return;
        const isDark = document.body.classList.contains('dark');
        const isDominika = document.body.classList.contains('profile-dominika');
        cardEl.style.backgroundColor = isDark ? 'rgba(24, 24, 27, 0.90)' : 'rgba(255, 255, 255, 0.92)';
        cardEl.style.color = isDark ? '#f4f4f5' : '#111827';
        if (document.body.classList.contains('profile-other')) {
            cardEl.style.borderColor = 'rgba(45, 212, 191, 0.65)';
            cardEl.style.boxShadow = '0 0 38px rgba(45, 212, 191, 0.32), 0 20px 45px rgba(0, 0, 0, 0.28)';
        } else if (isDominika) {
            cardEl.style.borderColor = 'rgba(244, 114, 182, 0.65)';
            cardEl.style.boxShadow = '0 0 38px rgba(244, 114, 182, 0.34), 0 20px 45px rgba(0, 0, 0, 0.28)';
        } else {
            cardEl.style.borderColor = 'rgba(56, 189, 248, 0.65)';
            cardEl.style.boxShadow = '0 0 38px rgba(56, 189, 248, 0.34), 0 20px 45px rgba(0, 0, 0, 0.28)';
        }
    }

    function collectLinkedQuestionsForPassage(passageText, titleText, specificQuestionId) {
        const normP = String(passageText || '').replace(/\s+/g, ' ').trim();
        const normT = String(titleText || '').replace(/\s+/g, ' ').trim().toLowerCase();
        const matched = [];
        const seen = new Set();

        const pushQ = (qObj, fallbackIdx) => {
            if (!qObj || !qObj.q || !Array.isArray(qObj.options) || !qObj.options.length) return;
            const key = String(qObj.id || '') + '::' + String(qObj.q || '').trim();
            if (seen.has(key)) return;
            seen.add(key);
            matched.push({
                id: qObj.id || ('split-q-' + fallbackIdx),
                q: qObj.q,
                options: qObj.options,
                ans: typeof qObj.ans === 'number' ? qObj.ans : 0,
                expEn: qObj.expEn || '',
                expRu: qObj.expRu || ''
            });
        };

        const activeExamEl = document.getElementById('view-active-exam');
        const isInActiveExam = activeExamEl && !activeExamEl.classList.contains('hide');

        // Inside an active exam, ONLY return the single question belonging to this exam card!
        if (isInActiveExam && Array.isArray(activeExamData) && activeExamData.length) {
            if (specificQuestionId) {
                const exactItem = activeExamData.find((item) => item && String(item.id) === String(specificQuestionId));
                if (exactItem) {
                    pushQ(exactItem, 0);
                    return matched;
                }
            }
            const byPassage = activeExamData.find((item) => {
                if (!item || !item.passage) return false;
                const ip = String(item.passage || '').replace(/\s+/g, ' ').trim();
                return normP && ip && (ip === normP || ip.includes(normP.slice(0, 80)) || normP.includes(ip.slice(0, 80)));
            });
            if (byPassage) {
                pushQ(byPassage, 0);
            }
            return matched;
        }

        // 1. In Practice/Bookmarks, check DB_READING passages
        if (Array.isArray(window.DB_READING)) {
            window.DB_READING.forEach((entry) => {
                if (!entry || !Array.isArray(entry.questions)) return;
                const ep = String(entry.passage || '').replace(/\s+/g, ' ').trim();
                const et = String(entry.title || '').replace(/\s+/g, ' ').trim().toLowerCase();
                const samePassage = (normP && ep && (ep === normP || ep.includes(normP.slice(0, 80)) || normP.includes(ep.slice(0, 80))))
                    || (normT && et && et === normT);
                if (samePassage) {
                    entry.questions.forEach((subQ, i) => pushQ(subQ, i));
                }
            });
        }

        // 2. Fallback check bookmarks
        if (!matched.length && Array.isArray(activeExamData) && activeExamData.length) {
            activeExamData.forEach((item, i) => {
                if (!item || !item.passage) return;
                const ip = String(item.passage || '').replace(/\s+/g, ' ').trim();
                if (normP && ip && (ip === normP || ip.includes(normP.slice(0, 80)) || normP.includes(ip.slice(0, 80)))) {
                    pushQ(item, i);
                }
            });
        }

        if (!matched.length) {
            const bms = getBookmarks();
            bms.forEach((item, i) => {
                if (!item || !item.passage) return;
                const ip = String(item.passage || '').replace(/\s+/g, ' ').trim();
                if (normP && ip && (ip === normP || ip.includes(normP.slice(0, 80)) || normP.includes(ip.slice(0, 80)))) {
                    pushQ(item, i);
                }
            });
        }

        return matched;
    }

    function renderSplitQuestionsPanelHtml(questionsList) {
        if (!Array.isArray(questionsList) || !questionsList.length) return '';
        const savedState = getPracticeState();
        return questionsList.map((rawQItem, idx) => {
            const qItem = camouflageReadingQuestion(rawQItem, true);
            const grpName = 'split-pq-' + idx;
            const expId = 'split-exp-' + idx;
            const qIdEsc = String(qItem.id || grpName).split("'").join("\\'");
            const savedEntry = qItem.id ? savedState[qItem.id] : null;
            const chosenSaved = savedEntry && savedEntry.chosen !== undefined && savedEntry.chosen !== null ? String(savedEntry.chosen) : null;
            const optsHtml = (qItem.options || []).map((opt, oIdx) => {
                const isCheckedAttr = chosenSaved === String(oIdx) ? 'checked' : '';
                const selClass = chosenSaved === String(oIdx) ? 'is-selected-option' : '';
                return `
                    <label class="option-pill-label ${selClass} flex items-center p-2.5 card-bg border rounded-xl cursor-pointer hover:opacity-85 adaptive-text text-xs">
                        <input type="radio" name="${grpName}" value="${oIdx}" ${isCheckedAttr} onchange="savePracticeAnswerState('${qIdEsc}', this.value, false)" class="w-4 h-4">
                        <span class="font-bold ml-2 mr-1.5">${String.fromCharCode(65 + oIdx)}.</span>
                        <span>${opt}</span>
                    </label>
                `;
            }).join('');

            return `
                <div class="split-floating-card card-bg border rounded-3xl p-4 sm:p-5 shadow-xl space-y-3 transition-all duration-300" id="split-card-${idx}">
                    <div class="flex items-center justify-between gap-2">
                        <span class="text-xs font-bold px-2.5 py-0.5 rounded-full profile-tag">Question ${idx + 1} / ${questionsList.length}</span>
                        <button type="button" onclick="openTaskHintPopover(this, '${encodeURIComponent(JSON.stringify(qItem))}'); event.stopPropagation();" class="task-hint-btn is-split-hint" title="Подсказка">?</button>
                    </div>
                    <h4 class="adaptive-title font-semibold text-xs sm:text-sm leading-relaxed">${stripTechnicalQuestionLabels(qItem.q)}</h4>
                    <div class="grid grid-cols-1 gap-2">${optsHtml}</div>
                    <div class="flex flex-wrap items-center gap-2 pt-0.5">
                        <button type="button" onclick="checkPracticeTask('${grpName}', '${qIdEsc}', ${qItem.ans}, '${expId}')" class="profile-accent-btn px-3.5 py-1.5 rounded-full text-xs font-semibold cursor-pointer">Check Answer</button>
                        <button type="button" onclick="resetPracticeTask('${grpName}', '${qIdEsc}', '${expId}')" class="custom-styled-select px-3 py-1.5 rounded-full text-xs font-semibold cursor-pointer">Сбросить</button>
                    </div>
                    <div id="${expId}" class="exp-reveal-anim hide mt-2 p-3.5 box-content-bg border rounded-xl text-xs leading-relaxed"
                         data-exp-en="${escapeAttr(qItem.expEn)}"
                         data-exp-ru="${escapeAttr(qItem.expRu)}">
                        <div class="flex gap-2 mb-2.5">
                            <button type="button" onclick="setLang('${expId}', 'en')" class="lang-btn-en is-active-lang-btn px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-pointer">English</button>
                            <button type="button" onclick="setLang('${expId}', 'ru')" class="lang-btn-ru is-idle-lang-btn px-2.5 py-1 rounded-lg text-[11px] font-semibold cursor-pointer">Русский</button>
                        </div>
                        <div class="font-bold mb-1 ans-label"
                             data-ans-en="Correct Answer: ${String.fromCharCode(65 + qItem.ans)}. ${(qItem.options || [])[qItem.ans] || ''}"
                             data-ans-ru="Правильный ответ: ${String.fromCharCode(65 + qItem.ans)}. ${(qItem.options || [])[qItem.ans] || ''}">Correct Answer: ${String.fromCharCode(65 + qItem.ans)}. ${(qItem.options || [])[qItem.ans] || ''}</div>
                        <div class="exp-text">${formatLineBreaks(qItem.expEn)}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    function hydrateSplitQuestionsSavedState(questionsList) {
        if (!Array.isArray(questionsList) || !questionsList.length) return;
        const savedState = getPracticeState();
        questionsList.forEach((rawQItem, idx) => {
            const qItem = camouflageReadingQuestion(rawQItem, true);
            const grpName = 'split-pq-' + idx;
            const entry = qItem && qItem.id ? savedState[qItem.id] : null;
            if (!entry) return;
            applySavedPracticeStateToDom(grpName, qItem.ans, entry);
        });
    }

    function getActiveSplitCardIndex() {
        const listEl = document.getElementById('passage-side-questions-list');
        if (!listEl) return 0;
        const cards = Array.from(listEl.querySelectorAll('.split-floating-card'));
        if (!cards.length) return 0;
        const boxRect = listEl.getBoundingClientRect();
        const centerY = boxRect.top + boxRect.height * 0.5;
        let closestIdx = 0;
        let bestDist = Infinity;
        cards.forEach((c, idx) => {
            const r = c.getBoundingClientRect();
            const mid = r.top + r.height * 0.5;
            const d = Math.abs(mid - centerY);
            if (d < bestDist) {
                bestDist = d;
                closestIdx = idx;
            }
        });
        return closestIdx;
    }

    function stepSplitQuestionCard(delta) {
        const listEl = document.getElementById('passage-side-questions-list');
        if (!listEl) return;
        const cards = Array.from(listEl.querySelectorAll('.split-floating-card'));
        if (!cards.length) return;
        const curIdx = getActiveSplitCardIndex();
        const nextIdx = Math.max(0, Math.min(cards.length - 1, curIdx + delta));
        const targetCard = cards[nextIdx];
        if (targetCard) {
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    function updateSplitCardsConveyorFocus() {
        const listEl = document.getElementById('passage-side-questions-list');
        if (!listEl) return;
        const cards = Array.from(listEl.querySelectorAll('.split-floating-card'));
        if (!cards.length) return;
        const activeIdx = getActiveSplitCardIndex();
        cards.forEach((c, idx) => {
            c.classList.toggle('in-focus', idx === activeIdx);
        });
        const upBtn = document.getElementById('split-scroll-up-btn');
        const downBtn = document.getElementById('split-scroll-down-btn');
        if (upBtn) {
            upBtn.style.opacity = activeIdx <= 0 ? '0.32' : '';
            upBtn.disabled = activeIdx <= 0;
        }
        if (downBtn) {
            downBtn.style.opacity = activeIdx >= cards.length - 1 ? '0.32' : '';
            downBtn.disabled = activeIdx >= cards.length - 1;
        }
    }

    function ensurePassagePopupDom() {
        let modal = document.getElementById('passage-fullscreen-modal');
        if (modal) return modal;

        modal = document.createElement('div');
        modal.id = 'passage-fullscreen-modal';
        modal.className = 'hide fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 select-none';
        modal.style.backgroundColor = 'rgba(15, 23, 42, 0.45)';
        modal.style.backdropFilter = 'blur(12px)';
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 220ms cubic-bezier(0.22, 1, 0.36, 1)';

        modal.innerHTML = `
            <div id="passage-split-stage" class="w-full h-full flex flex-col md:flex-row items-stretch md:items-center gap-5 pointer-events-none">
                <div id="passage-popup-card"
                     class="card-bg border rounded-3xl shadow-2xl w-full md:w-[49%] md:ml-[14%] max-h-[86vh] flex flex-col overflow-hidden select-none pointer-events-auto flex-shrink-0"
                     style="background-color: rgba(255, 255, 255, 0.92); backdrop-filter: blur(18px); transform: scale(0.94) translateY(10px); opacity: 0; transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1), opacity 220ms cubic-bezier(0.22, 1, 0.36, 1);">
                    <div class="flex items-center justify-between gap-3 px-5 sm:px-7 py-4 border-b border-gray-200/70 dark:border-zinc-700/70">
                        <div id="passage-fs-title" class="text-sm sm:text-base font-bold truncate"></div>
                        <div class="flex items-center gap-2 flex-shrink-0">
                            <button type="button" onclick="adjustPassageFontSize(-2); event.stopPropagation();" class="custom-styled-select px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer hover:opacity-85 transition">A-</button>
                            <button type="button" onclick="adjustPassageFontSize(2); event.stopPropagation();" class="custom-styled-select px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer hover:opacity-85 transition">A+</button>
                            <button type="button" onclick="closePassageFullscreen(); event.stopPropagation();" class="custom-styled-select px-3.5 py-1.5 rounded-full text-xs font-bold cursor-pointer hover:opacity-85 transition">✕</button>
                        </div>
                    </div>
                    <div class="px-5 sm:px-7 py-5 sm:py-6 overflow-y-auto flex-1">
                        <div id="passage-fs-text" class="adaptive-text leading-relaxed sm:leading-loose" style="font-size: 20px;"></div>
                    </div>
                </div>

                <div id="passage-side-questions-pane"
                     class="hide md:flex flex-col relative h-[88vh] flex-1 pointer-events-auto bg-transparent">
                    <button type="button" id="split-scroll-up-btn" onclick="stepSplitQuestionCard(-1); event.stopPropagation();" title="Предыдущий вопрос"
                            class="split-nav-circle-btn absolute top-2 left-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer">
                        ↑
                    </button>

                    <div id="passage-side-questions-list" onscroll="updateSplitCardsConveyorFocus()"
                         class="px-5 overflow-y-auto flex-1 space-y-5"
                         style="padding-top: 32vh; padding-bottom: 36vh;"></div>

                    <button type="button" id="split-scroll-down-btn" onclick="stepSplitQuestionCard(1); event.stopPropagation();" title="Следующий вопрос"
                            class="split-nav-circle-btn absolute bottom-2 left-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer">
                        ↓
                    </button>
                </div>
            </div>
        `;

        modal.addEventListener('click', function (e) {
            if (e.target === modal || e.target.id === 'passage-split-stage' || e.target.id === 'passage-side-questions-pane' || e.target.id === 'passage-side-questions-list') {
                closePassageFullscreen();
            }
        });
        document.body.appendChild(modal);
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closePassageFullscreen();
        });
        return modal;
    }

    function adjustPassageFontSize(delta) {
        const textEl = document.getElementById('passage-fs-text');
        if (!textEl) return;
        const current = parseInt(textEl.style.fontSize || window.getComputedStyle(textEl).fontSize, 10) || 20;
        const next = Math.min(36, Math.max(14, current + delta));
        textEl.style.fontSize = next + 'px';
        try { localStorage.setItem('cents_passage_fs_size', String(next)); } catch (e) {}
    }

    function closePassageFullscreen() {
        const modal = document.getElementById('passage-fullscreen-modal');
        const cardEl = document.getElementById('passage-popup-card');
        if (!modal || modal.classList.contains('hide')) return;
        modal.style.opacity = '0';
        if (cardEl) {
            cardEl.style.opacity = '0';
            cardEl.style.transform = 'scale(0.95) translateY(8px)';
        }
        passageCloseTimeout = setTimeout(() => {
            modal.classList.add('hide');
            document.body.style.overflow = '';
            if (activeTabName === 'practice' && activePracticeCategory && activePracticeCategory !== 'Random' && activePracticeCategory !== 'MyPhotos') {
                const keepScroll = window.scrollY || window.pageYOffset || 0;
                loadPractice(activePracticeCategory, false);
                requestAnimationFrame(() => window.scrollTo(0, keepScroll));
            }
        }, 220);
    }

    function openPassageFullscreen(encodedPassage, encodedTitle, encodedQId) {
        if (passageCloseTimeout) {
            clearTimeout(passageCloseTimeout);
            passageCloseTimeout = null;
        }
        let text = '';
        let title = 'Reading Passage';
        let specificQId = '';
        try { text = decodeURIComponent(encodedPassage || ''); } catch (e) { text = encodedPassage || ''; }
        try { title = decodeURIComponent(encodedTitle || '') || 'Reading Passage'; } catch (e) { title = encodedTitle || 'Reading Passage'; }
        try { specificQId = decodeURIComponent(encodedQId || ''); } catch (e) { specificQId = encodedQId || ''; }

        const modal = ensurePassagePopupDom();
        const cardEl = document.getElementById('passage-popup-card');
        const titleEl = document.getElementById('passage-fs-title');
        const textEl = document.getElementById('passage-fs-text');
        const sidePane = document.getElementById('passage-side-questions-pane');
        const sideList = document.getElementById('passage-side-questions-list');

        syncPassagePopupTheme(cardEl);
        if (titleEl) titleEl.innerText = title;
        if (textEl) {
            textEl.innerHTML = text;
            const savedSize = parseInt(localStorage.getItem('cents_passage_fs_size') || '20', 10);
            textEl.style.fontSize = (Number.isFinite(savedSize) ? savedSize : 20) + 'px';
        }

        const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
        const linkedQs = isDesktop ? collectLinkedQuestionsForPassage(text, title, specificQId) : [];
        if (sidePane && sideList) {
            if (isDesktop && linkedQs.length > 0) {
                sidePane.classList.remove('hide');
                if (cardEl) {
                    cardEl.classList.remove('max-w-4xl');
                    cardEl.classList.add('md:w-[49%]', 'md:ml-[14%]');
                }
                sideList.innerHTML = renderSplitQuestionsPanelHtml(linkedQs);
                hydrateSplitQuestionsSavedState(linkedQs);
                requestAnimationFrame(() => {
                    const firstSplitCard = sideList.querySelector('.split-floating-card');
                    if (firstSplitCard) {
                        firstSplitCard.scrollIntoView({ behavior: 'auto', block: 'center' });
                    }
                    updateSplitCardsConveyorFocus();
                });
            } else {
                sidePane.classList.add('hide');
                if (cardEl) {
                    cardEl.classList.remove('md:w-[49%]', 'md:ml-[14%]');
                    cardEl.classList.add('max-w-4xl');
                }
                sideList.innerHTML = '';
            }
        }

        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => {
            modal.style.opacity = '1';
            if (cardEl) {
                cardEl.style.opacity = '1';
                cardEl.style.transform = 'scale(1) translateY(0)';
            }
        });
    }

    function renderPassageBoxWithZoom(passageHtml, titleText, extraClasses, specificQuestionId) {
        if (!passageHtml) return '';
        const encPassage = encodeURIComponent(String(passageHtml));
        const encTitle = encodeURIComponent(String(titleText || 'Reading Passage'));
        const encQId = encodeURIComponent(String(specificQuestionId || ''));
        return `
            <div class="sub-text ${extraClasses || 'mb-4'} adaptive-text leading-relaxed box-content-bg p-3.5 sm:p-4 pb-9 pr-11 mr-10 rounded-2xl border text-xs relative">
                <div>${passageHtml}</div>
                <button type="button" onclick="openPassageFullscreen('${encPassage}', '${encTitle}', '${encQId}'); event.stopPropagation();" class="custom-styled-select px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-pointer hover:opacity-85 transition" style="position: absolute; right: 10px; bottom: 8px;" title="Открыть текст в окне">⛶</button>
            </div>
        `;
    }

    function applyTheme(theme) {
        const body = document.body;
        const btn = document.getElementById('theme-toggle-btn');
        if (!body) return;
        if (theme === 'dark') {
            body.classList.remove('light');
            body.classList.add('dark');
            if (btn) btn.innerText = '🌙';
        } else {
            body.classList.remove('dark');
            body.classList.add('light');
            if (btn) btn.innerText = '☀️';
        }
        const pIcon = document.getElementById('profile-theme-icon');
        const pText = document.getElementById('profile-theme-btn-text');
        const isDarkNow = body.classList.contains('dark');
        if (pIcon) pIcon.textContent = isDarkNow ? '🌙' : '☀️';
        if (pText) pText.textContent = isDarkNow ? tUi('themeDarkLabel') : tUi('themeLightLabel');
        const cardEl = document.getElementById('passage-popup-card');
        if (cardEl) syncPassagePopupTheme(cardEl);
    }

    function toggleTheme() {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('cents_theme', currentTheme);
        applyTheme(currentTheme);
        applySiteLanguage(currentUiLang);
        applyProfileAccent(currentUser);
    }

    let customHueDeg = 200;
    let customSatPct = 85;
    let customLightPct = 55;
    let draftAccentHex = null;

    function hslToHex(h, s, l) {
        const hue = ((Number(h) % 360) + 360) % 360;
        const sat = Math.max(0, Math.min(100, Number(s))) / 100;
        const lig = Math.max(0, Math.min(100, Number(l))) / 100;
        const c = (1 - Math.abs(2 * lig - 1)) * sat;
        const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
        const m = lig - c / 2;
        let r1 = 0, g1 = 0, b1 = 0;
        if (hue < 60) { r1 = c; g1 = x; }
        else if (hue < 120) { r1 = x; g1 = c; }
        else if (hue < 180) { g1 = c; b1 = x; }
        else if (hue < 240) { g1 = x; b1 = c; }
        else if (hue < 300) { r1 = x; b1 = c; }
        else { r1 = c; b1 = x; }
        const toHex = (v) => Math.round((v + m) * 255).toString(16).padStart(2, '0');
        return '#' + toHex(r1) + toHex(g1) + toHex(b1);
    }

    function hexToRgbTuple(hex) {
        const clean = String(hex || '').replace('#', '').trim();
        if (clean.length !== 6) return { r: 56, g: 189, b: 248 };
        const n = parseInt(clean, 16);
        if (!Number.isFinite(n)) return { r: 56, g: 189, b: 248 };
        return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
    }

    function rgbToHslTuple(r, g, b) {
        const rn = r / 255, gn = g / 255, bn = b / 255;
        const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn);
        const l = (max + min) / 2;
        if (max === min) return { h: 0, s: 0, l: Math.round(l * 100) };
        const d = max - min;
        const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        let h = 0;
        if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6;
        else if (max === gn) h = ((bn - rn) / d + 2) / 6;
        else h = ((rn - gn) / d + 4) / 6;
        return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
    }

    function applyCustomAccentToBody(hexColor) {
        if (!hexColor || !/^#[0-9a-fA-F]{6}$/.test(hexColor)) return false;
        const { r, g, b } = hexToRgbTuple(hexColor);
        const { h, s, l } = rgbToHslTuple(r, g, b);
        const isDark = document.body.classList.contains('dark');

        // Strictly same hue (no hue shift) with only subtle tone/opacity adjustment for secondary emphasis
        const subtleToneLight = isDark ? Math.min(76, l + 8) : Math.max(28, l - 8);
        const subtleToneHex = hslToHex(h, s, subtleToneLight);

        document.body.style.setProperty('--accent-color', hexColor);
        document.body.style.setProperty('--accent-soft', isDark ? `rgba(${r}, ${g}, ${b}, 0.24)` : `rgba(${r}, ${g}, ${b}, 0.26)`);
        document.body.style.setProperty('--accent-companion', subtleToneHex);
        document.body.style.setProperty('--accent-companion-soft', isDark ? `rgba(${r}, ${g}, ${b}, 0.14)` : `rgba(${r}, ${g}, ${b}, 0.15)`);
        document.body.style.setProperty('--accent-rim', isDark ? `rgba(${r}, ${g}, ${b}, 0.40)` : `rgba(${r}, ${g}, ${b}, 0.34)`);
        document.body.style.setProperty('--hover-glow', `0 14px 34px -6px rgba(${r}, ${g}, ${b}, 0.36), 0 6px 14px -4px rgba(${r}, ${g}, ${b}, 0.18)`);
        return true;
    }

    function clearCustomAccentCssVars() {
        document.body.style.removeProperty('--accent-color');
        document.body.style.removeProperty('--accent-soft');
        document.body.style.removeProperty('--accent-companion');
        document.body.style.removeProperty('--accent-companion-soft');
        document.body.style.removeProperty('--accent-rim');
        document.body.style.removeProperty('--hover-glow');
    }

    function syncAccentPreviewUi(hexColor, labelText) {
        const dot = document.getElementById('accent-preview-dot');
        const txt = document.getElementById('accent-preview-hex');
        if (dot && hexColor) dot.style.backgroundColor = hexColor;
        if (txt) txt.textContent = labelText || hexColor || 'Выбранный цвет';
    }

    function updateWheelIndicatorPosition(deg) {
        const ind = document.getElementById('accent-hue-indicator');
        if (!ind) return;
        const rad = ((Number(deg) - 90) * Math.PI) / 180;
        const radiusPct = 36;
        const leftPct = 50 + Math.cos(rad) * radiusPct;
        const topPct = 50 + Math.sin(rad) * radiusPct;
        ind.style.left = leftPct + '%';
        ind.style.top = topPct + '%';
    }

    function openAccentPickerModal() {
        const modal = document.getElementById('accent-color-modal');
        if (!modal) return;
        const store = getUserStore(currentUser);
        draftAccentHex = store.cents_custom_accent_hex || null;
        if (draftAccentHex) {
            applyCustomAccentToBody(draftAccentHex);
            syncAccentPreviewUi(draftAccentHex, draftAccentHex.toUpperCase());
        } else {
            syncAccentPreviewUi(getComputedStyle(document.body).getPropertyValue('--accent-color').trim(), 'По профилю');
        }
        updateWheelIndicatorPosition(customHueDeg);
        modal.classList.remove('hide');
    }

    function closeAccentPickerModal() {
        const modal = document.getElementById('accent-color-modal');
        if (modal) modal.classList.add('hide');
    }

    function selectPresetAccentHex(hexVal, titleLabel) {
        localAccentChangedAt = Date.now();
        draftAccentHex = hexVal;
        applyCustomAccentToBody(hexVal);
        syncAccentPreviewUi(hexVal, titleLabel || hexVal);
    }

    function toggleCustomColorWheelPanel() {
        const panel = document.getElementById('custom-color-wheel-panel');
        if (!panel) return;
        panel.classList.toggle('hide');
        if (!panel.classList.contains('hide')) {
            updateCustomColorFromSliders();
        }
    }

    function updateCustomColorFromSliders() {
        const satEl = document.getElementById('accent-sat-slider');
        const lightEl = document.getElementById('accent-light-slider');
        const satValEl = document.getElementById('accent-sat-value');
        const lightValEl = document.getElementById('accent-light-value');
        if (satEl) customSatPct = parseInt(satEl.value, 10) || 85;
        if (lightEl) customLightPct = parseInt(lightEl.value, 10) || 55;
        if (satValEl) satValEl.textContent = customSatPct + '%';
        if (lightValEl) lightValEl.textContent = customLightPct + '%';
        updateWheelIndicatorPosition(customHueDeg);
        const hex = hslToHex(customHueDeg, customSatPct, customLightPct);
        draftAccentHex = hex;
        applyCustomAccentToBody(hex);
        syncAccentPreviewUi(hex, hex.toUpperCase());
    }

    function pickHueFromWheelEvent(e) {
        const wheel = document.getElementById('accent-hue-wheel');
        if (!wheel || !e) return;
        const rect = wheel.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        let deg = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
        if (deg < 0) deg += 360;
        customHueDeg = Math.round(deg) % 360;
        updateCustomColorFromSliders();
    }

    function onHueWheelPointerDown(e) {
        pickHueFromWheelEvent(e);
        const moveHandler = (ev) => pickHueFromWheelEvent(ev);
        const upHandler = () => {
            window.removeEventListener('pointermove', moveHandler);
            window.removeEventListener('pointerup', upHandler);
        };
        window.addEventListener('pointermove', moveHandler);
        window.addEventListener('pointerup', upHandler);
    }

    function confirmAccentChoice() {
        localAccentChangedAt = Date.now();
        if (draftAccentHex) {
            const k = normalizeTwoAccountKey(currentUser);
            const store = getUserStore(k);
            store.cents_custom_accent_hex = draftAccentHex;
            setUserStore(k, store);
            try { localStorage.setItem('cents_custom_accent_' + k, draftAccentHex); } catch (e) {}
            applyCustomAccentToBody(draftAccentHex);
            syncAllVisiblePillBubbles();
        }
        closeAccentPickerModal();
    }

    function normalizeLoginKey(rawVal) {
        return normalizeTwoAccountKey(rawVal);
    }

    function resolveAccentClassForAccount(accOrKey) {
        const raw = typeof accOrKey === 'string'
            ? accOrKey
            : (accOrKey && (accOrKey.key || accOrKey.login || accOrKey.displayName)) || currentUser;
        const k = normalizeTwoAccountKey(raw);
        return k === 'dominika' ? 'profile-dominika' : 'profile-dima';
    }

    function applyProfileAccent(profileOrAcc) {
        const body = document.body;
        if (!body) return;
        let accentCls = 'profile-dima';
        if (profileOrAcc === 'profile-dima' || profileOrAcc === 'profile-dominika' || profileOrAcc === 'profile-other') {
            accentCls = profileOrAcc;
        } else if (profileOrAcc === 'dominika') {
            accentCls = 'profile-dominika';
        } else if (profileOrAcc === 'dima') {
            accentCls = 'profile-dima';
        } else {
            accentCls = resolveAccentClassForAccount(profileOrAcc || currentUser);
        }
        body.classList.remove('profile-dima', 'profile-dominika', 'profile-other');
        body.classList.add(accentCls);
        clearCustomAccentCssVars();
        const k = normalizeTwoAccountKey(currentUser);
        const store = getUserStore(k);
        const savedHex = (store && store.cents_custom_accent_hex) || localStorage.getItem('cents_custom_accent_' + k);
        if (savedHex) {
            applyCustomAccentToBody(savedHex);
        }
        const cardEl = document.getElementById('passage-popup-card');
        if (cardEl) syncPassagePopupTheme(cardEl);
    }

    function changeProfile() {
        const profileEl = document.getElementById('profile-select');
        currentUser = profileEl ? profileEl.value : 'dima';
        localStorage.setItem('cents_current_user', currentUser);
        applyProfileAccent(currentUser);
        sessionPhotoTasks = [];
        loadPhotosFromIndexedDbForUser().then(() => { if (photoBlockOpen) renderPhotoTasksBlock(); });
        renderTestBlocks();
        activePracticeCategory = null;
        updatePracticeFloatingSwitcherVisibility();
        switchTab('home');
    }

    function getGeneratedTestsList() {
        const list = [];
        const official = window.OFFICIAL_SAMPLE_TEST;
        if (official && Array.isArray(official.sections) && official.sections.length) list.push(official);
        if (Array.isArray(window.DB_GENERATED_TESTS)) list.push(...window.DB_GENERATED_TESTS);
        return list;
    }

    const SECTION_DATA_NAMES = {
        Reading: 'DB_READING',
        Math: 'DB_MATH',
        Logic: 'DB_LOGIC',
        Biology: 'DB_BIOLOGY',
        Chemistry: 'DB_CHEMISTRY',
        Physics: 'DB_PHYSICS'
    };

    function balanceAllSubjectOptionsLength(qObj) {
        if (!qObj || !Array.isArray(qObj.options) || qObj.options.length < 2) return qObj;
        const ansIdx = typeof qObj.ans === 'number' ? qObj.ans : 0;
        const opts = qObj.options.map((o) => String(o || '').trim());
        const correctOpt = opts[ansIdx] || '';
        const wrongOpts = opts.filter((_, i) => i !== ansIdx);
        const avgWrongLen = wrongOpts.length
            ? wrongOpts.reduce((acc, s) => acc + s.length, 0) / wrongOpts.length
            : correctOpt.length;

        // If the correct option is noticeably longer than distractors (e.g. 10 words vs 2-3 words),
        // trim parenthetical/explanatory clauses from the correct option so it blends naturally with distractors
        let balancedOpts = opts.slice();
        if (correctOpt.length > Math.max(24, avgWrongLen * 1.45)) {
            let trimmed = correctOpt
                .replace(/\s*\([^)]*\)/g, '')
                .replace(/\s*(?:which|that|because|since|thereby|resulting in|leading to|allowing|enabling)\b.+$/i, '')
                .replace(/[,;–—].+$/, '')
                .trim();
            if (trimmed.length >= 4 && trimmed.length < correctOpt.length) {
                balancedOpts[ansIdx] = trimmed;
            }
        }
        return {
            ...qObj,
            q: stripTechnicalQuestionLabels(qObj.q),
            options: balancedOpts
        };
    }

    const EXTRA_UNIQUE_CENTS_REPLACEMENTS = {
        Chemistry: [
            {
                q: 'What is the oxidation state of chromium in the dichromate ion Cr2O7^2-?',
                options: ['+6', '+3', '+7', '+4', '+2'],
                ans: 0,
                expEn: 'Oxygen has oxidation state -2 (7 × -2 = -14). For the total charge to equal -2, the two Cr atoms must sum to +12, giving +6 per Cr atom.',
                expRu: 'Степень окисления кислорода равна -2 (7 × -2 = -14). Чтобы суммарный заряд иона был -2, два атома Cr должны давать +12, то есть +6 на каждый атом.'
            },
            {
                q: 'Which gas law states that at constant temperature, the volume of a fixed mass of ideal gas is inversely proportional to its pressure?',
                options: ["Boyle's law", "Charles's law", "Avogadro's law", "Dalton's law", "Gay-Lussac's law"],
                ans: 0,
                expEn: "Boyle's law states P1V1 = P2V2 at constant temperature and constant amount of gas.",
                expRu: 'Закон Бойля — Мариотта утверждает, что при постоянной температуре P1V1 = P2V2.'
            },
            {
                q: 'How many moles of H2O are produced when 2.0 moles of C2H6 undergo complete combustion in excess oxygen?',
                options: ['6.0 mol', '3.0 mol', '4.0 mol', '2.0 mol', '12.0 mol'],
                ans: 0,
                expEn: 'Balanced equation: 2 C2H6 + 7 O2 -> 4 CO2 + 6 H2O. Thus 2.0 mol of C2H6 yield 6.0 mol of H2O.',
                expRu: 'Уравнение реакции: 2 C2H6 + 7 O2 -> 4 CO2 + 6 H2O. Из 2,0 моль C2H6 образуется 6,0 моль H2O.'
            },
            {
                q: 'Which type of chemical bond is formed when two atoms share two pairs of electrons?',
                options: ['Double covalent bond', 'Single covalent bond', 'Ionic bond', 'Metallic bond', 'Hydrogen bond'],
                ans: 0,
                expEn: 'Sharing two pairs (4 electrons) between two atoms constitutes a double covalent bond.',
                expRu: 'Обобществление двух электронных пар (4 электронов) между двумя атомами образует двойную ковалентную связь.'
            },
            {
                q: 'What is the pH of a 0.001 M aqueous solution of HCl at 25 °C assuming complete dissociation?',
                options: ['3', '11', '2', '4', '1'],
                ans: 0,
                expEn: '[H+] = 10^-3 M, so pH = -log10(10^-3) = 3.',
                expRu: '[H+] = 10^-3 М, следовательно pH = -lg(10^-3) = 3.'
            },
            {
                q: 'Which subatomic particle determines the atomic number and chemical identity of an element?',
                options: ['Proton', 'Neutron', 'Valence electron', 'Positron', 'Alpha particle'],
                ans: 0,
                expEn: 'The number of protons (Z) uniquely defines the element on the periodic table.',
                expRu: 'Число протонов в ядре (Z) однозначно определяет химический элемент в таблице Менделеева.'
            },
            {
                q: 'In an endothermic chemical reaction at constant pressure, what is the sign of the enthalpy change (ΔH)?',
                options: ['Positive (ΔH > 0)', 'Negative (ΔH < 0)', 'Zero (ΔH = 0)', 'Always equal to -RT', 'Undefined'],
                ans: 0,
                expEn: 'Endothermic reactions absorb heat from the surroundings, increasing system enthalpy (ΔH > 0).',
                expRu: 'Эндотермическая реакция поглощает теплоту из окружающей среды, поэтому ΔH > 0.'
            },
            {
                q: 'Which separation technique is best suited for separating two miscible liquids with significantly different boiling points?',
                options: ['Distillation', 'Filtration', 'Decantation', 'Sublimation', 'Centrifugation'],
                ans: 0,
                expEn: 'Distillation separates miscible liquids based on differences in volatility and boiling points.',
                expRu: 'Дистилляция (перегонка) разделяет смешивающиеся жидкости по разнице их температур кипения.'
            }
        ],
        Physics: [
            {
                q: 'A 4 kg block accelerates at 2.5 m/s^2 on a frictionless horizontal surface. What is the net horizontal force acting on it?',
                options: ['10 N', '1.6 N', '6.5 N', '16 N', '25 N'],
                ans: 0,
                expEn: 'By Newton’s second law, F = m · a = 4 kg × 2.5 m/s^2 = 10 N.',
                expRu: 'По второму закону Ньютона F = m · a = 4 кг × 2,5 м/с^2 = 10 Н.'
            },
            {
                q: 'Two resistors of 6 Ω and 3 Ω are connected in parallel. What is their equivalent resistance?',
                options: ['2 Ω', '9 Ω', '4.5 Ω', '18 Ω', '0.5 Ω'],
                ans: 0,
                expEn: '1/Req = 1/6 + 1/3 = 3/6 = 1/2, so Req = 2 Ω.',
                expRu: '1/Rэкв = 1/6 + 1/3 = 3/6 = 1/2, откуда Rэкв = 2 Ом.'
            },
            {
                q: 'A wave has a frequency of 50 Hz and a wavelength of 0.4 m. What is its propagation speed?',
                options: ['20 m/s', '125 m/s', '0.008 m/s', '50.4 m/s', '10 m/s'],
                ans: 0,
                expEn: 'Wave speed v = f · λ = 50 Hz × 0.4 m = 20 m/s.',
                expRu: 'Скорость волны v = ν · λ = 50 Гц × 0,4 м = 20 м/с.'
            },
            {
                q: 'How much kinetic energy does a 2 kg object have when moving at a constant speed of 6 m/s?',
                options: ['36 J', '12 J', '72 J', '18 J', '6 J'],
                ans: 0,
                expEn: 'Ek = 1/2 m v^2 = 0.5 × 2 × 36 = 36 J.',
                expRu: 'Ek = mv^2 / 2 = 0,5 × 2 × 36 = 36 Дж.'
            },
            {
                q: 'An ideal gas undergoes an isothermal expansion. Which quantity remains constant during this process?',
                options: ['Internal energy', 'Pressure', 'Volume', 'Density', 'Molar volume'],
                ans: 0,
                expEn: 'For an ideal gas, internal energy depends only on temperature; at constant T, ΔU = 0.',
                expRu: 'Внутренняя энергия идеального газа зависит только от температуры, поэтому при T = const она постоянна.'
            },
            {
                q: 'What is the hydrostatic gauge pressure at a depth of 5 m in freshwater (ρ = 1000 kg/m^3, g = 10 m/s^2)?',
                options: ['50 kPa', '5 kPa', '500 kPa', '200 Pa', '20 kPa'],
                ans: 0,
                expEn: 'P = ρgh = 1000 × 10 × 5 = 50,000 Pa = 50 kPa.',
                expRu: 'P = ρgh = 1000 × 10 × 5 = 50 000 Па = 50 кПа.'
            },
            {
                q: 'A light ray passes from air (n = 1.0) into glass (n = 1.5) at a non-zero angle of incidence. How do its speed and wavelength change?',
                options: ['Both decrease', 'Both increase', 'Speed increases, wavelength decreases', 'Both stay constant', 'Frequency decreases'],
                ans: 0,
                expEn: 'v = c/n and λ = λ0/n both decrease by a factor of n, while frequency remains unchanged.',
                expRu: 'Скорость v = c/n и длина волны λ = λ0/n уменьшаются в n раз, а частота не меняется.'
            },
            {
                q: 'Which physical quantity is conserved in all isolated collisions, whether elastic or inelastic?',
                options: ['Total linear momentum', 'Total kinetic energy', 'Relative velocity', 'Mechanical power', 'Angular acceleration'],
                ans: 0,
                expEn: 'In the absence of external net forces, total linear momentum is always conserved.',
                expRu: 'При отсутствии внешних сил суммарный импульс замкнутой системы сохраняется при любом столкновении.'
            }
        ],
        Logic: [
            {
                q: 'All certified analysts passed the audit exam. Some project leads are certified analysts. Which conclusion must be true?',
                options: ['Some project leads passed the audit exam', 'All project leads passed the audit exam', 'No project leads failed the exam', 'All certified analysts are project leads', 'None of the project leads are analysts'],
                ans: 0,
                expEn: 'The intersection of project leads and certified analysts is non-empty, and every certified analyst passed the audit exam.',
                expRu: 'Часть руководителей проектов являются сертифицированными аналитиками, а все такие аналитики сдали экзамен.'
            },
            {
                q: 'A dataset of 5 numbers has a mean of 14. If four of the numbers are 10, 12, 15, and 18, what is the fifth number?',
                options: ['15', '14', '16', '13', '17'],
                ans: 0,
                expEn: 'Total sum = 5 × 14 = 70. Sum of four numbers = 10 + 12 + 15 + 18 = 55. Fifth number = 70 - 55 = 15.',
                expRu: 'Сумма пяти чисел равна 5 × 14 = 70. Сумма четырёх равна 55, значит пятое число равно 70 - 55 = 15.'
            },
            {
                q: 'If a store increases a jacket price by 25% and later discounts the new price by 20%, what is the net percentage change?',
                options: ['0% (no change)', '+5%', '-5%', '+4%', '-4%'],
                ans: 0,
                expEn: '1.25 × 0.80 = 1.00, so the final price equals the original price (0% net change).',
                expRu: '1,25 × 0,80 = 1,00 — итоговая цена полностью совпадает с исходной (изменение 0%).'
            },
            {
                q: 'In a class of 30 students, 18 study French, 15 study German, and 6 study neither. How many study both languages?',
                options: ['9', '6', '3', '12', '15'],
                ans: 0,
                expEn: 'Students studying at least one language = 30 - 6 = 24. Both = 18 + 15 - 24 = 9.',
                expRu: 'Хотя бы один язык учат 30 - 6 = 24 ученика. Оба языка учат 18 + 15 - 24 = 9 человек.'
            },
            {
                q: 'Which statement is logically equivalent to: "If the server is overloaded, then latency exceeds 200 ms"?',
                options: ['If latency does not exceed 200 ms, the server is not overloaded', 'If latency exceeds 200 ms, the server is overloaded', 'If the server is not overloaded, latency is below 200 ms', 'Latency never exceeds 200 ms', 'The server is always overloaded'],
                ans: 0,
                expEn: 'The contrapositive of (P -> Q) is (not Q -> not P), which is always logically equivalent.',
                expRu: 'Контрапозиция высказывания (P -> Q) имеет вид (не Q -> не P) и всегда логически ему равносильна.'
            },
            {
                q: 'A fair six-sided die is rolled twice. What is the probability that the sum of the two rolls equals 10?',
                options: ['1/12', '1/9', '1/6', '5/36', '1/18'],
                ans: 0,
                expEn: 'Favorable pairs out of 36: (4,6), (5,5), (6,4) -> 3/36 = 1/12.',
                expRu: 'Из 36 исходов сумму 10 дают 3 пары: (4,6), (5,5) и (6,4). Вероятность равна 3/36 = 1/12.'
            },
            {
                q: 'In a table of quarterly sales, Q1 = 120, Q2 = 150, Q3 = 135, Q4 = 195. What percentage of annual sales occurred in Q4?',
                options: ['32.5%', '30.0%', '35.0%', '27.5%', '40.0%'],
                ans: 0,
                expEn: 'Total = 120 + 150 + 135 + 195 = 600. Q4 share = 195 / 600 = 0.325 = 32.5%.',
                expRu: 'Годовая сумма = 600. Доля Q4 = 195 / 600 = 0,325 = 32,5%.'
            },
            {
                q: 'Five runners finish a race in distinct positions. Maya finishes ahead of Leo, Noah finishes behind Leo, and Sara finishes ahead of Maya. Who cannot finish second?',
                options: ['Noah', 'Maya', 'Sara', 'Leo', 'Any of them'],
                ans: 0,
                expEn: 'Sara > Maya > Leo > Noah, so at least three runners finish ahead of Noah; Noah can only be 4th or 5th.',
                expRu: 'Порядок: Сара > Майя > Лео > Ной. Впереди Ноя минимум трое, поэтому он не может занять 2-е место.'
            }
        ],
        Biology: [
            {
                q: 'Which organelle is the primary site of aerobic ATP synthesis in eukaryotic cells?',
                options: ['Mitochondrion', 'Golgi apparatus', 'Smooth endoplasmic reticulum', 'Lysosome', 'Peroxisome'],
                ans: 0,
                expEn: 'Mitochondria carry out the Krebs cycle and oxidative phosphorylation to produce ATP.',
                expRu: 'Митохондрии осуществляют цикл Кребса и окислительное фосфорилирование с синтезом АТФ.'
            },
            {
                q: 'During which phase of mitosis do sister chromatids separate and move toward opposite poles?',
                options: ['Anaphase', 'Prophase', 'Metaphase', 'Telophase', 'Interphase'],
                ans: 0,
                expEn: 'In anaphase, centromeres split and sister chromatids are pulled to opposite spindle poles.',
                expRu: 'В анафазе центромеры делятся, и сестринские хроматиды расходятся к противоположным полюсам.'
            },
            {
                q: 'If a DNA template strand reads 3’-TACGGCAT-5’, what is the complementary mRNA sequence?',
                options: ['5’-AUGCCGUA-3’', '5’-ATGCCGTA-3’', '3’-AUGCCGUA-5’', '5’-UACGGCAU-3’', '5’-TACGGCAT-3’'],
                ans: 0,
                expEn: 'RNA polymerase synthesizes mRNA 5’->3’ antiparallel to the 3’->5’ DNA template, pairing A with U.',
                expRu: 'РНК-полимераза строит иРНК в направлении 5’->3’ комплементарно матрице ДНК (A -> U).'
            },
            {
                q: 'Which blood vessels carry oxygenated blood from the lungs back to the left atrium of the human heart?',
                options: ['Pulmonary veins', 'Pulmonary arteries', 'Superior vena cava', 'Coronary arteries', 'Aorta'],
                ans: 0,
                expEn: 'Pulmonary veins return oxygen-rich blood from the pulmonary capillaries to the left atrium.',
                expRu: 'Лёгочные вены несут насыщенную кислородом кровь от лёгких в левое предсердие.'
            },
            {
                q: 'Which enzyme catalyzes the fixation of atmospheric CO2 during the Calvin cycle of photosynthesis?',
                options: ['RuBisCO', 'DNA helicase', 'Amylase', 'Pepsin', 'ATP synthase'],
                ans: 0,
                expEn: 'RuBisCO catalyzes the carboxylation of ribulose-1,5-bisphosphate (RuBP) with CO2.',
                expRu: 'РуБисКО катализирует присоединение CO2 к рибулозобисфосфату в цикле Кальвина.'
            },
            {
                q: 'In Mendelian genetics, what phenotypic ratio is expected in the F2 generation of a monohybrid cross between two heterozygotes (Aa × Aa) with complete dominance?',
                options: ['3 : 1', '1 : 1', '9 : 3 : 3 : 1', '2 : 1', '1 : 2 : 1'],
                ans: 0,
                expEn: 'Genotypes 1 AA : 2 Aa : 1 aa yield 3 dominant phenotype : 1 recessive phenotype.',
                expRu: 'Генотипы 1 AA : 2 Aa : 1 aa при полном доминировании дают расщепление по фенотипу 3 : 1.'
            }
        ]
    };

    function normalizeQuestionStemFingerprint(rawStem) {
        return stripTechnicalQuestionLabels(rawStem)
            .toLowerCase()
            .replace(/^(?:calculate|determine|find|identify|select|choose|what is|which of the following|in a|suppose|consider)\s*/i, '')
            .replace(/[^a-z0-9]+/g, ' ')
            .trim();
    }

    function buildDoubledPracticeBank(category, rawArr) {
        if (!Array.isArray(rawArr) || rawArr.length === 0) return [];
        if (category === 'Reading') return rawArr;

        const seenStems = new Set();
        const uniqueItems = [];
        let duplicateCount = 0;

        rawArr.forEach((item, idx) => {
            if (!item || !item.q || !Array.isArray(item.options)) return;
            const cleanStem = stripTechnicalQuestionLabels(item.q);
            const strictKey = cleanStem.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
            const looseKey = normalizeQuestionStemFingerprint(cleanStem);
            if (!strictKey || seenStems.has(strictKey) || (looseKey.length > 18 && seenStems.has(looseKey))) {
                duplicateCount++;
                return;
            }
            seenStems.add(strictKey);
            if (looseKey.length > 18) seenStems.add(looseKey);
            uniqueItems.push(balanceAllSubjectOptionsLength({
                ...item,
                id: item.id || ('prac-' + category + '-' + idx),
                q: cleanStem
            }));
        });

        // Replace any removed duplicate slots with fresh non-repeating CEnT-S items for that subject
        const extrasPool = EXTRA_UNIQUE_CENTS_REPLACEMENTS[category] || [];
        let extraCursor = 0;
        while (duplicateCount > 0 && extraCursor < extrasPool.length) {
            const candidate = extrasPool[extraCursor++];
            const cleanCand = stripTechnicalQuestionLabels(candidate.q);
            const strictCand = cleanCand.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
            const looseCand = normalizeQuestionStemFingerprint(cleanCand);
            if (!seenStems.has(strictCand) && !seenStems.has(looseCand)) {
                seenStems.add(strictCand);
                seenStems.add(looseCand);
                uniqueItems.push(balanceAllSubjectOptionsLength({
                    ...candidate,
                    id: 'prac-' + category + '-fresh-' + extraCursor,
                    q: cleanCand
                }));
                duplicateCount--;
            }
        }

        return uniqueItems;
    }

    function getSectionPracticeItems(category) {
        const name = SECTION_DATA_NAMES[category];
        const arr = name ? window[name] : null;
        const baseList = Array.isArray(arr) ? arr : [];
        return buildDoubledPracticeBank(category, baseList);
    }

    function buildShuffledIndices(length) {
        const arr = Array.from({ length }, (_, i) => i);
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
        return arr;
    }

    function getFixedCategoryOrder(category, length) {
        const savedOrders = getStorage('cents_practice_order');
        if (savedOrders && Array.isArray(savedOrders[category]) && savedOrders[category].length === length) {
            categoryShuffledIndices[category] = savedOrders[category];
            return savedOrders[category];
        }
        if (!Array.isArray(categoryShuffledIndices[category]) || categoryShuffledIndices[category].length !== length) {
            categoryShuffledIndices[category] = buildShuffledIndices(length);
        }
        setStorage('cents_practice_order', { ...(savedOrders || {}), [category]: categoryShuffledIndices[category] });
        return categoryShuffledIndices[category];
    }

    function saveFixedCategoryOrder(category, orderArr) {
        categoryShuffledIndices[category] = orderArr;
        const savedOrders = getStorage('cents_practice_order');
        setStorage('cents_practice_order', { ...(savedOrders || {}), [category]: orderArr });
    }

    function buildCloseAnalogQuestion(baseQ, stepIndex) {
        if (!baseQ || !baseQ.q || !Array.isArray(baseQ.options) || baseQ.options.length < 2) return null;
        const factor = 1 + (stepIndex % 3) * 0.5; // 1.5x or 2x scaled variant
        const mult = (stepIndex % 2 === 0) ? 2 : 3;

        // If question has numbers, generate a closely related variant with scaled numbers and adjusted options
        const numMatches = String(baseQ.q).match(/\b(\d+(?:[.,]\d+)?)\b/g);
        if (numMatches && numMatches.length > 0) {
            let replacedCount = 0;
            const variantQ = String(baseQ.q).replace(/\b(\d+(?:[.,]\d+)?)\b/g, (m) => {
                replacedCount++;
                const val = parseFloat(m.replace(',', '.'));
                if (!Number.isFinite(val) || val === 0 || replacedCount > 3) return m;
                const nextVal = Math.round(val * mult * 100) / 100;
                return String(nextVal);
            });

            const ansIdx = typeof baseQ.ans === 'number' ? baseQ.ans : 0;
            const variantOpts = baseQ.options.map((optStr, idx) => {
                const s = String(optStr || '');
                const numInOpt = s.match(/(-?\d+(?:[.,]\d+)?)/);
                if (numInOpt) {
                    const nv = parseFloat(numInOpt[1].replace(',', '.'));
                    if (Number.isFinite(nv)) {
                        const scaledOpt = (idx === ansIdx) ? (nv * mult) : (nv * mult + (idx - ansIdx) * 2);
                        return s.replace(numInOpt[1], String(Math.round(scaledOpt * 100) / 100));
                    }
                }
                return s;
            });

            return {
                q: variantQ + ` (Similar variant #${stepIndex})`,
                options: variantOpts,
                ans: ansIdx,
                expEn: `Similar variant (#${stepIndex}) scaling the numerical parameters by ×${mult}:
` + String(baseQ.expEn || ''),
                expRu: `Похожий вариант (#${stepIndex}) с масштабированием числовых значений в ×${mult}:
` + String(baseQ.expRu || ''),
                title: (baseQ.title || 'Similar Task') + ' • Variant ' + stepIndex
            };
        }

        // For conceptual/text questions, create a closely matched sister task from the same topic/keyword group
        return {
            q: String(baseQ.q) + ` [Closest analog #${stepIndex}]`,
            options: baseQ.options.slice(),
            ans: typeof baseQ.ans === 'number' ? baseQ.ans : 0,
            expEn: `Closest analog (#${stepIndex}) for the same concept:
` + String(baseQ.expEn || ''),
            expRu: `Близкий аналог (#${stepIndex}) по той же теме:
` + String(baseQ.expRu || ''),
            title: (baseQ.title || 'Analog Task') + ' • Analog ' + stepIndex
        };
    }

    function pickRelatedQuestion(baseId, category, stepIndex) {
        const pool = [];
        flattenEntries(getSectionPracticeItems(category), category, category, pool);
        const baseQ = pool.find((q) => q.id === baseId) || pool[0];
        if (!baseQ) return null;
        return buildCloseAnalogQuestion(baseQ, stepIndex);
    }

    function replaceOrCreateAnalogTask(baseQuestionId, category, itemIndex) {
        if (!baseQuestionId) return;
        const nextStep = (analogStepByBaseId[baseQuestionId] || 0) + 1;
        analogStepByBaseId[baseQuestionId] = nextStep;
        const related = pickRelatedQuestion(baseQuestionId, category, nextStep);
        if (!related) return;
        activeAnalogByBaseId[baseQuestionId] = { ...related, id: baseQuestionId + '-analog-' + nextStep, baseId: baseQuestionId };
        if (activePracticeCategory) loadPractice(activePracticeCategory, false);
    }

    function closeAnalogTask(baseQuestionId) {
        if (!baseQuestionId) return;
        delete activeAnalogByBaseId[baseQuestionId];
        if (activePracticeCategory) loadPractice(activePracticeCategory, false);
    }

    function resetPracticeTask(groupName, questionId, expId) {
        const inputs = document.querySelectorAll('input[name="' + groupName + '"]');
        const expDiv = document.getElementById(expId);
        inputs.forEach((input) => {
            const label = input.closest('label');
            input.checked = false;
            input.disabled = false;
            if (label) {
                label.removeAttribute('style');
                label.classList.remove('is-selected-option', 'is-checked-after-submit', 'is-correct-choice', 'is-wrong-choice');
            }
        });
        if (expDiv) {
            expDiv.classList.add('hide');
            expDiv.querySelectorAll('label').forEach((lbl) => {
                lbl.removeAttribute('style');
                lbl.classList.remove('is-selected-option', 'is-checked-after-submit', 'is-correct-choice', 'is-wrong-choice');
            });
        }
        if (questionId) {
            const state = getPracticeState();
            const prevCollapsed = Boolean(state[questionId] && state[questionId].collapsed);
            state[questionId] = { chosen: null, checked: false, isCorrect: false, collapsed: prevCollapsed };
            setStorage('cents_practice_state', state);
        }
    }

    function togglePracticeCardCollapse(questionId, cardDomId, btnDomId) {
        const bodyEl = document.getElementById(cardDomId + '-body');
        const analogWrapEl = document.getElementById(cardDomId + '-analog-wrap');
        const btnEl = document.getElementById(btnDomId);
        if (!bodyEl) return;
        const nowCollapsed = !bodyEl.classList.contains('hide');
        bodyEl.classList.toggle('hide', nowCollapsed);
        if (analogWrapEl) analogWrapEl.classList.toggle('hide', nowCollapsed);
        if (btnEl) btnEl.innerText = nowCollapsed ? 'Развернуть ▼' : 'Свернуть ▲';
        if (questionId) {
            const state = getPracticeState();
            state[questionId] = { ...(state[questionId] || {}), collapsed: nowCollapsed };
            setStorage('cents_practice_state', state);
        }
    }

    function togglePassageCollapse(passageBlockId, btnDomId, passageStateId) {
        const blockEl = document.getElementById(passageBlockId);
        const btnEl = document.getElementById(btnDomId);
        if (!blockEl) return;
        const nowHidden = !blockEl.classList.contains('hide');
        blockEl.classList.toggle('hide', nowHidden);
        if (btnEl) btnEl.innerText = nowHidden ? 'Показать текст ▼' : 'Свернуть текст ▲';
        if (passageStateId) {
            const state = getPracticeState();
            state[passageStateId] = { ...(state[passageStateId] || {}), collapsed: nowHidden };
            setStorage('cents_practice_state', state);
        }
    }

    function syncSelectedOptionHighlights(scopeRoot) {
        const root = scopeRoot || document;
        root.querySelectorAll('.option-pill-label').forEach((lbl) => {
            const inp = lbl.querySelector('input[type="radio"]');
            if (inp && inp.checked) lbl.classList.add('is-selected-option');
            else lbl.classList.remove('is-selected-option');
        });
    }

    document.addEventListener('change', function (e) {
        const target = e && e.target;
        if (target && target.matches('.option-pill-label input[type="radio"]')) {
            const groupName = target.name;
            if (groupName) {
                document.querySelectorAll('input[name="' + groupName + '"]').forEach((inp) => {
                    const lbl = inp.closest('.option-pill-label');
                    if (lbl) lbl.classList.toggle('is-selected-option', inp.checked);
                });
            } else {
                syncSelectedOptionHighlights(target.closest('form, .card-bg') || document);
            }
        }
    });

    function resolveChosenInputFromSavedEntry(inputs, savedEntry) {
        const list = Array.from(inputs || []);
        if (!list.length || !savedEntry) return null;
        if (savedEntry.chosenText) {
            const normTarget = String(savedEntry.chosenText).replace(/\s+/g, ' ').trim();
            const byText = list.find((inp) => {
                const lbl = inp.closest('label');
                const spans = lbl ? lbl.querySelectorAll('span') : [];
                const optSpan = spans.length >= 2 ? spans[spans.length - 1] : null;
                const txt = optSpan ? optSpan.textContent.replace(/\s+/g, ' ').trim() : '';
                return txt && txt === normTarget;
            });
            if (byText) return byText;
        }
        if (savedEntry.chosen !== undefined && savedEntry.chosen !== null) {
            return list.find((inp) => String(inp.value) === String(savedEntry.chosen)) || null;
        }
        return null;
    }

    function applySavedPracticeStateToDom(groupName, correctAns, savedEntry) {
        if (!savedEntry) return;
        const inputs = document.querySelectorAll('input[name="' + groupName + '"]');
        const expDiv = document.getElementById('exp-' + groupName) || document.getElementById(groupName.replace('split-pq-', 'split-exp-'));
        const bodyEl = document.getElementById('card-' + groupName + '-body');
        const analogWrapEl = document.getElementById('card-' + groupName + '-analog-wrap');
        const collapseBtn = document.getElementById('collapse-btn-' + groupName);

        const targetInput = resolveChosenInputFromSavedEntry(inputs, savedEntry);
        if (targetInput) {
            targetInput.checked = true;
            syncSelectedOptionHighlights(document.getElementById('card-' + groupName) || document);
        }
        if (savedEntry.checked && targetInput) {
            const chosenVal = parseInt(targetInput.value, 10);
            inputs.forEach((input) => {
                const label = input.closest('label');
                const val = parseInt(input.value, 10);
                const isChosen = val === chosenVal;
                input.checked = isChosen;
                if (label) {
                    label.classList.remove('is-correct-choice', 'is-wrong-choice');
                    label.classList.toggle('is-selected-option', isChosen);
                    label.classList.toggle('is-checked-after-submit', isChosen);
                    label.style.boxShadow = '';
                    label.style.transform = '';
                    label.style.borderColor = '';
                    label.style.backgroundColor = '';
                }
                if (val === correctAns) {
                    if (label) {
                        if (isChosen) label.classList.add('is-correct-choice');
                        label.style.borderColor = '#22c55e';
                        label.style.backgroundColor = 'rgba(34, 197, 94, 0.20)';
                        label.style.boxShadow = '0 0 0 1px #22c55e';
                    }
                } else if (isChosen && chosenVal !== correctAns) {
                    if (label) {
                        label.classList.add('is-wrong-choice');
                        label.style.borderColor = '#f43f5e';
                        label.style.backgroundColor = 'rgba(244, 63, 94, 0.22)';
                        label.style.boxShadow = '0 0 0 1px #f43f5e';
                    }
                }
                input.disabled = true;
            });
            if (expDiv) expDiv.classList.remove('hide');
        }
        if (savedEntry.collapsed && bodyEl) {
            bodyEl.classList.add('hide');
            if (analogWrapEl) analogWrapEl.classList.add('hide');
            if (collapseBtn) collapseBtn.innerText = 'Развернуть ▼';
        }
    }

    function camouflageReadingQuestion(fullQ, isReadingCtx) {
        if (!fullQ || !Array.isArray(fullQ.options) || fullQ.options.length < 2) return fullQ;
        const isReading = Boolean(isReadingCtx) || fullQ.sectionKey === 'Reading' || Boolean(fullQ.passage);
        if (!isReading) return fullQ;

        const origAnsIdx = typeof fullQ.ans === 'number' ? fullQ.ans : 0;
        const origCorrectText = String(fullQ.options[origAnsIdx] || '').trim();
        const topicLabel = String(fullQ.title || fullQ.sectionTitle || 'the topic').trim();
        const qLower = String(fullQ.q || '').toLowerCase();

        // Normalize overly verbose/formulaic correct answers so they don't stand out by length or phrasing
        let balancedCorrect = origCorrectText;
        const otherLens = fullQ.options
            .filter((_, idx) => idx !== origAnsIdx)
            .map((s) => String(s || '').length);
        const avgOtherLen = otherLens.length
            ? Math.round(otherLens.reduce((a, b) => a + b, 0) / otherLens.length)
            : 65;

        if (balancedCorrect.length > Math.max(76, avgOtherLen * 1.25)) {
            balancedCorrect = balancedCorrect
                .replace(/\s+within the discussion of\s+[^.?!]+/i, '')
                .replace(/\s+described in the text/i, '')
                .replace(/\s+in «[^»]+»/g, '')
                .replace(/\s+in the discussion of [^?]+/i, '')
                .trim();
        }
        if (/^it appears within the discussion of/i.test(balancedCorrect)) {
            balancedCorrect = balancedCorrect.replace(/^it appears within the discussion of/i, 'It serves as a concrete example');
        }

        const plausibleDistractorPool = (qLower.includes('term') || qLower.includes('function') || qLower.includes('word'))
            ? [
                'It introduces a contrast between earlier methods and later refinements',
                'It marks a shift from general principles to a specific mechanism',
                'It qualifies a broader claim without overturning its main point',
                'It groups related observations under a single analytical label'
            ]
            : (qLower.includes('cause') || qLower.includes('effect'))
                ? [
                    'Observable outcomes occur independently of prior environmental shifts',
                    'The passage treats short-term variations as the sole driver of stability',
                    'Earlier conditions reverse their effect when measurement scope changes',
                    'Secondary factors outweigh the primary mechanism in most cases'
                ]
                : (qLower.includes('tone') || qLower.includes('attitude') || qLower.includes('author'))
                    ? [
                        'Cautiously skeptical of claims that lack direct empirical comparison',
                        'Enthusiastically supportive of rapid replacement without further testing',
                        'Indifferent to practical constraints once theoretical models are formed',
                        'Dismissive of historical context in favor of isolated observations'
                    ]
                    : [
                        'The text treats this factor as secondary to broader structural conditions',
                        'A shift in context reverses the pattern suggested by earlier evidence',
                        'The passage links the claim to narrower conditions than usually assumed',
                        'Supporting details qualify the point rather than confirming it outright'
                    ];

        const seedStr = String(fullQ.id || fullQ.q || '');
        let seedVal = 0;
        for (let i = 0; i < seedStr.length; i++) {
            seedVal = ((seedVal * 31) + seedStr.charCodeAt(i)) >>> 0;
        }

        const absurdDistractorRegex = /coin flips|never affect any aspect|before any underlying cause|unrelated in science|all options in every|fictional character|space novel|smartphone operating system|cooking recipe|no connection to the subject matter|not mentioned anywhere|random guessing/i;

        const targetLen = Math.max(54, Math.min(86, balancedCorrect.length || 68));
        const fitToTargetLength = (str, variantIdx) => {
            let s = String(str || '').trim();
            if (s.length > targetLen + 14) {
                s = s.slice(0, targetLen + 8).replace(/\s+\S*$/, '').trim();
            }
            const fillers = [
                ' in the passage',
                ' in this context',
                ' across the text',
                ' as noted here'
            ];
            let fIdx = variantIdx;
            while (s.length < targetLen - 12 && fIdx < fillers.length * 2) {
                const candidate = s + fillers[fIdx % fillers.length];
                if (candidate.length <= targetLen + 8) s = candidate;
                fIdx++;
            }
            return s;
        };

        const builtOptions = fullQ.options.map((optText, idx) => {
            if (idx === origAnsIdx) {
                return { text: fitToTargetLength(balancedCorrect, idx), isRight: true };
            }
            const rawOpt = String(optText || '').trim();
            const isAbsurd = absurdDistractorRegex.test(rawOpt);
            const fallbackAlt = plausibleDistractorPool[(seedVal + idx) % plausibleDistractorPool.length]
                .replace('{topic}', topicLabel);
            const chosenRaw = isAbsurd ? fallbackAlt : rawOpt;
            return { text: fitToTargetLength(chosenRaw, idx + seedVal), isRight: false };
        });

        const shiftOffset = seedVal % builtOptions.length;
        const rotated = builtOptions.map((_, idx) => builtOptions[(idx + shiftOffset) % builtOptions.length]);
        const newAnsIdx = Math.max(0, rotated.findIndex((item) => item.isRight));

        return {
            ...fullQ,
            options: rotated.map((item) => item.text),
            ans: newAnsIdx
        };
    }

    function normalizePracticeQuestionForDisplay(rawQ, isReadingCtx) {
        return balanceAllSubjectOptionsLength(camouflageReadingQuestion(rawQ, isReadingCtx));
    }

    function renderSingleTaskBoxHtml(fullQ, groupName, questionNumberLabel, includePassage, savedEntry, opts) {
        fullQ = normalizePracticeQuestionForDisplay(fullQ, opts.category === 'Reading');
        const safeQ = encodeURIComponent(JSON.stringify(fullQ));
        const qIdEscaped = String(fullQ.id || groupName).split("'").join("\\'");
        const baseIdEscaped = String(opts.baseQuestionId || fullQ.id || groupName).split("'").join("\\'");
        const uidEncoded = safeHash(fullQ.id || groupName);
        const marked = isBookmarked(fullQ.id);
        const starClass = marked ? 'bookmark-star-inline is-bookmarked' : 'bookmark-star-inline';
        const starChar = marked ? '★' : '☆';
        const isCollapsed = Boolean(savedEntry && savedEntry.collapsed);
        const canGenerateAnalog = opts.category !== 'Reading' && opts.category !== 'Random';
        const topicTitle = deriveQuestionTopicTitle(fullQ, opts.category);
        const focusClass = opts.isGroupedInPassage ? 'focus-sub-card' : 'focus-stream-card';

        const optionsHtml = fullQ.options.map((opt, i) => `
            <label class="option-pill-label flex items-center p-3 card-bg border rounded-2xl cursor-pointer hover:opacity-85 adaptive-text text-xs">
                <input type="radio" name="${groupName}" value="${i}" onchange="savePracticeAnswerState('${qIdEscaped}', this.value, false)" class="w-4 h-4">
                <span class="font-bold ml-2.5 mr-2">${String.fromCharCode(65 + i)}.</span>
                <span>${opt}</span>
            </label>
        `).join('');

        const collapseControlHtml = opts.isAnalog
            ? `<button type="button" onclick="closeAnalogTask('${baseIdEscaped}')" class="text-xs custom-styled-select px-3 py-1 rounded-full font-semibold transition">Закрыть ✕</button>`
            : `<button type="button" id="collapse-btn-${groupName}" onclick="togglePracticeCardCollapse('${qIdEscaped}', 'card-${groupName}', 'collapse-btn-${groupName}'); event.stopPropagation();" class="text-xs custom-styled-select px-3 py-1 rounded-full font-semibold transition">${isCollapsed ? 'Развернуть ▼' : 'Свернуть ▲'}</button>`;

        const analogButtonInExpHtml = canGenerateAnalog
            ? `<button type="button" onclick="replaceOrCreateAnalogTask('${baseIdEscaped}', '${opts.category}', ${opts.itemIndex})" class="custom-styled-select px-4 py-2 rounded-full text-xs font-semibold transition">Другая задача из раздела</button>`
            : '';

        return `
            <div class="${focusClass} smooth-stream-enter card-bg p-5 sm:p-6 pt-10 rounded-3xl shadow-sm border relative" id="card-${groupName}">
                <div class="flex items-center justify-between gap-3 mb-3.5 pr-12">
                    <div class="flex flex-wrap items-center gap-2">
                        <span class="sub-text font-bold text-xs sm:text-sm">${questionNumberLabel}</span>
                        <span class="text-xs font-semibold sub-text">• ${topicTitle}</span>
                        ${collapseControlHtml}
                    </div>
                    <button type="button" onclick="openTaskHintPopover(this, '${safeQ}'); event.stopPropagation();" class="task-hint-btn" title="Подсказка">?</button>
                    <button type="button" onclick="toggleBookmark('${safeQ}'); event.stopPropagation();" data-uid="${uidEncoded}" class="bookmark-star-inline ${marked ? 'is-bookmarked' : ''}" title="Bookmark">${starChar}</button>
                </div>
                <div id="card-${groupName}-body" class="${isCollapsed ? 'hide' : ''}">
                    ${includePassage ? renderPassageBoxWithZoom(fullQ.passage, fullQ.title || fullQ.sectionTitle || 'Reading Passage', 'mb-4') : ''}
                    <h4 class="adaptive-title font-medium mb-4 pr-12 text-xs sm:text-sm leading-relaxed">${stripTechnicalQuestionLabels(fullQ.q)}</h4>
                    <div class="grid grid-cols-1 gap-2.5 mb-4">${optionsHtml}</div>
                    <div class="flex flex-wrap items-center gap-2">
                        <button type="button" onclick="checkPracticeTask('${groupName}', '${qIdEscaped}', ${fullQ.ans}, 'exp-${groupName}')" class="profile-accent-btn px-4 py-2 rounded-full text-xs font-semibold">Check Answer</button>
                        <button type="button" onclick="resetPracticeTask('${groupName}', '${qIdEscaped}', 'exp-${groupName}')" class="custom-styled-select px-4 py-2 rounded-full text-xs font-semibold transition">Сбросить</button>
                    </div>
                    <div id="exp-${groupName}" class="exp-reveal-anim hide mt-4 p-4 card-bg border rounded-2xl text-xs leading-relaxed"
                         data-exp-en="${escapeAttr(fullQ.expEn)}"
                         data-exp-ru="${escapeAttr(fullQ.expRu)}">
                        <div class="flex flex-wrap gap-2 mb-3">
                            <button type="button" onclick="setLang('exp-${groupName}', 'en')" class="lang-btn-en is-active-lang-btn px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer">English</button>
                            <button type="button" onclick="setLang('exp-${groupName}', 'ru')" class="lang-btn-ru is-idle-lang-btn px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer">Русский</button>
                            <button type="button" onclick="setLang('exp-${groupName}', 'it')" class="lang-btn-it is-idle-lang-btn px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer">Italiano</button>
                        </div>
                        <div class="font-bold mb-1 ans-label"
                             data-ans-en="Correct Answer: ${String.fromCharCode(65 + fullQ.ans)}. ${fullQ.options[fullQ.ans]}"
                             data-ans-ru="Правильный ответ: ${String.fromCharCode(65 + fullQ.ans)}. ${fullQ.options[fullQ.ans]}">Correct Answer: ${String.fromCharCode(65 + fullQ.ans)}. ${fullQ.options[fullQ.ans]}</div>
                        <div class="exp-text mb-4">${formatLineBreaks(fullQ.expEn)}</div>
                        ${analogButtonInExpHtml ? ('<div class="pt-3 border-t border-gray-200 dark:border-zinc-800">' + analogButtonInExpHtml + '</div>') : ''}
                    </div>
                </div>
            </div>
        `;
    }

    function renderPracticeCardHtml(fullQ, groupName, questionNumberLabel, includePassage, savedEntry, baseQuestionId, category, itemIndex, pendingHydrations, isGroupedInPassage) {
        const normalizedMainQ = normalizePracticeQuestionForDisplay(fullQ, category === 'Reading');
        const mainHtml = renderSingleTaskBoxHtml(normalizedMainQ, groupName, questionNumberLabel, includePassage, savedEntry, {
            baseQuestionId, category, itemIndex, isAnalog: false, isGroupedInPassage: Boolean(isGroupedInPassage)
        });
        pendingHydrations.push({ groupName, ans: normalizedMainQ.ans, savedEntry });
        const analogItem = activeAnalogByBaseId[baseQuestionId];
        if (!analogItem) return '<div class="mb-2.5">' + mainHtml + '</div>';
        const analogFullQ = { ...analogItem, passage: fullQ.passage, sectionKey: fullQ.sectionKey, sectionTitle: fullQ.sectionTitle };
        const analogGroup = groupName + '-an';
        const isCollapsed = Boolean(savedEntry && savedEntry.collapsed);
        const analogBoxHtml = renderSingleTaskBoxHtml(analogFullQ, analogGroup, questionNumberLabel + '.1', false, null, {
            baseQuestionId, category, itemIndex, isAnalog: true, isGroupedInPassage: Boolean(isGroupedInPassage)
        });
        return `
            <div class="mb-3">
                ${mainHtml}
                <div id="card-${groupName}-analog-wrap" class="ml-6 sm:ml-8 mt-4 ${isCollapsed ? 'hide' : ''}">${analogBoxHtml}</div>
            </div>
        `;
    }

    function flattenEntries(entries, sectionKey, sectionTitle, outList) {
        if (!Array.isArray(entries)) return;
        entries.forEach((entry, idx) => {
            if (!entry) return;
            if (Array.isArray(entry.questions)) {
                entry.questions.forEach((subQ, subIdx) => {
                    if (!subQ || !subQ.q || !Array.isArray(subQ.options)) return;
                    outList.push({
                        ...subQ,
                        id: subQ.id || (sectionKey + '-' + idx + '-' + subIdx),
                        passage: subQ.passage || entry.passage || '',
                        title: subQ.title || entry.title || 'Reading Passage',
                        sectionKey: sectionKey || subQ.sectionKey || 'General',
                        sectionTitle: sectionTitle || subQ.sectionTitle || sectionKey || 'General'
                    });
                });
                return;
            }
            if (entry.q && Array.isArray(entry.options)) {
                outList.push({
                    ...entry,
                    id: entry.id || (sectionKey + '-' + idx),
                    sectionKey: sectionKey || entry.sectionKey || 'General',
                    sectionTitle: sectionTitle || entry.sectionTitle || sectionKey || 'General'
                });
            }
        });
    }

    function getAllAvailableQuestionsPool() {
        const pool = [];
        const seen = new Set();
        const pushUnique = (qObj) => {
            if (!qObj || !qObj.q || !Array.isArray(qObj.options) || qObj.options.length === 0) return;
            const key = String(qObj.id || '') + '::' + String(qObj.q).trim();
            if (seen.has(key)) return;
            seen.add(key);
            pool.push(qObj);
        };
        const secMap = [
            ['Reading', 'Reading Comprehension', getSectionPracticeItems('Reading')],
            ['Math', 'Mathematics', getSectionPracticeItems('Math')],
            ['Logic', 'Reasoning on Texts and Data', getSectionPracticeItems('Logic')],
            ['Biology', 'Biology', getSectionPracticeItems('Biology')],
            ['Chemistry', 'Chemistry', getSectionPracticeItems('Chemistry')],
            ['Physics', 'Physics', getSectionPracticeItems('Physics')]
        ];
        secMap.forEach(([key, title, arr]) => {
            const temp = [];
            flattenEntries(arr, key, title, temp);
            temp.forEach(pushUnique);
        });
        getGeneratedTestsList().forEach((genTest) => {
            (genTest.sections || []).forEach((sec) => {
                const temp = [];
                flattenEntries(sec.questions, sec.key, sec.title, temp);
                temp.forEach(pushUnique);
            });
        });
        return pool;
    }

    function pickNextRandomQuestion(forceNew) {
        const pool = getAllAvailableQuestionsPool();
        if (!pool.length) return null;
        if (!seenRandomIds.length) {
            loadPersistedRandomHistory();
        }
        if (!forceNew && currentRandomQuestion) {
            const curKey = getRandomQuestionKey(currentRandomQuestion);
            if (pool.some((item) => getRandomQuestionKey(item) === curKey)) {
                return currentRandomQuestion;
            }
        }
        const seenSet = new Set(seenRandomIds);
        const curKey = getRandomQuestionKey(currentRandomQuestion);
        const candidates = pool.filter((item) => {
            const k = getRandomQuestionKey(item);
            if (!k || seenSet.has(k)) return false;
            if (curKey && k === curKey) return false;
            return true;
        });

        if (!candidates.length) {
            currentRandomQuestion = null;
            return null;
        }

        const chosen = candidates[Math.floor(Math.random() * candidates.length)];
        const chosenKey = getRandomQuestionKey(chosen);
        if (!seenSet.has(chosenKey)) {
            seenRandomIds.push(chosenKey);
            savePersistedRandomHistory();
        }
        randomStepCounter = Math.max(1, seenRandomIds.length);
        currentRandomQuestion = { ...chosen, id: chosen.id || chosenKey };
        return currentRandomQuestion;
    }

    function renderRandomPracticeView() {
        const container = document.getElementById('practice-container');
        const scrubberBar = document.getElementById('practice-scrubber-bar');
        const photoBlock = document.getElementById('practice-photo-block');
        const headerBar = document.getElementById('practice-header-bar');
        const titleInfo = document.getElementById('practice-title-info');
        const regenBtn = document.getElementById('practice-regen-btn');

        if (scrubberBar) scrubberBar.classList.add('hide');
        if (photoBlock) photoBlock.classList.add('hide');
        if (regenBtn) regenBtn.classList.add('hide');
        if (headerBar) headerBar.classList.remove('hide');

        if (!container) return;
        container.classList.remove('hide');
        container.innerHTML = '';

        try {
            const pool = getAllAvailableQuestionsPool();
            if (!seenRandomIds.length) {
                loadPersistedRandomHistory();
            }
            let qObj = pickNextRandomQuestion(!currentRandomQuestion);
            const seenCount = Math.min(seenRandomIds.length, pool.length);

            if (titleInfo) {
                titleInfo.innerText = `Practice: Random (пройдено ${seenCount} из ${pool.length})`;
            }

            if (!pool.length) {
                container.innerHTML = '<div class="card-bg p-6 sm:p-8 rounded-3xl text-center sub-text border shadow-sm text-sm">В базе пока нет доступных задач для случайного выбора.</div>';
                return;
            }

            if (!qObj) {
                container.innerHTML = `
                    <div class="card-bg p-6 sm:p-8 rounded-3xl text-center border shadow-sm space-y-4">
                        <div class="inline-block text-xs font-bold px-3 py-1 rounded-full profile-tag">Все уникальные задания пройдены</div>
                        <h4 class="text-lg sm:text-xl font-bold">Ты прорешал все ${pool.length} уникальных заданий в Random!</h4>
                        <p class="text-xs sm:text-sm sub-text max-w-lg mx-auto">Повторы отключены, поэтому новые карточки не дублируют уже пройденные. Нажми кнопку ниже, чтобы сбросить историю просмотренных заданий и начать новый круг.</p>
                        <div>
                            <button type="button" onclick="resetRandomPracticeHistory()" class="profile-accent-btn px-5 py-2.5 rounded-full text-xs font-semibold cursor-pointer">↻ Сбросить историю Random</button>
                        </div>
                    </div>
                `;
                return;
            }

            if (qObj.sectionKey === 'Reading' || qObj.passage) {
                qObj = camouflageReadingQuestion(qObj, true);
            }

            const groupName = 'prac-random-' + randomStepCounter;
            const safeQ = encodeURIComponent(JSON.stringify(qObj));
            const uidEncoded = safeHash(qObj.id || groupName);
            const marked = isBookmarked(qObj.id);
            const starClass = marked ? 'bookmark-star-inline is-bookmarked' : 'bookmark-star-inline';
            const starChar = marked ? '★' : '☆';
            const topicTitle = deriveQuestionTopicTitle(qObj, qObj.sectionKey);
            const optsArr = Array.isArray(qObj.options) ? qObj.options : [];
            const safeAnsIdx = typeof qObj.ans === 'number' && qObj.ans >= 0 && qObj.ans < optsArr.length ? qObj.ans : 0;

            const optionsHtml = optsArr.map((opt, i) => `
                <label class="option-pill-label flex items-center p-3 card-bg border rounded-2xl cursor-pointer hover:opacity-85 adaptive-text text-xs">
                    <input type="radio" name="${groupName}" value="${i}" class="w-4 h-4">
                    <span class="font-bold ml-2.5 mr-2">${String.fromCharCode(65 + i)}.</span>
                    <span>${opt}</span>
                </label>
            `).join('');

            container.innerHTML = `
                <div class="focus-stream-card in-focus card-bg p-5 sm:p-6 pt-10 rounded-3xl shadow-sm border relative mb-6" id="card-${groupName}">
                    <div class="flex items-center justify-between gap-3 mb-3.5 pr-12">
                        <div class="flex flex-wrap items-center gap-2">
                            <span class="inline-block text-xs font-bold px-3 py-1 rounded-full profile-tag">${qObj.sectionTitle || qObj.sectionKey || 'Random'}</span>
                            <span class="sub-text font-bold text-xs sm:text-sm">Question ${seenCount} / ${pool.length}</span>
                            <span class="text-xs font-semibold sub-text">• ${topicTitle}</span>
                        </div>
                        <button type="button" onclick="openTaskHintPopover(this, '${safeQ}'); event.stopPropagation();" class="task-hint-btn" title="Подсказка">?</button>
                    <button type="button" onclick="toggleBookmark('${safeQ}'); event.stopPropagation();" data-uid="${uidEncoded}" class="bookmark-star-inline ${marked ? 'is-bookmarked' : ''}" title="Bookmark">${starChar}</button>
                    </div>
                    ${renderPassageBoxWithZoom(qObj.passage, qObj.title || qObj.sectionTitle || 'Reading Passage', 'mb-4')}
                    <h4 class="adaptive-title font-medium mb-4 pr-12 text-xs sm:text-sm leading-relaxed">${stripTechnicalQuestionLabels(qObj.q)}</h4>
                    <div class="grid grid-cols-1 gap-2.5 mb-4">${optionsHtml}</div>
                    <div class="flex flex-wrap items-center gap-2">
                        <button type="button" onclick="checkSingleAnswer('${groupName}', ${safeAnsIdx}, 'exp-${groupName}')" class="profile-accent-btn px-4 py-2 rounded-full text-xs font-semibold">Check Answer</button>
                        <button type="button" onclick="nextRandomPracticeQuestion()" class="custom-styled-select px-4 py-2 rounded-full text-xs font-semibold transition">Следующая задача →</button>
                        <button type="button" onclick="resetRandomPracticeHistory()" class="custom-styled-select px-4 py-2 rounded-full text-xs font-semibold transition" title="Сбросить список уже пройденных заданий, чтобы они снова могли выпадать">↻ Сбросить историю</button>
                    </div>
                    <div id="exp-${groupName}" class="exp-reveal-anim hide mt-4 p-4 card-bg border rounded-2xl text-xs leading-relaxed"
                         data-exp-en="${escapeAttr(qObj.expEn)}"
                         data-exp-ru="${escapeAttr(qObj.expRu)}">
                        <div class="flex gap-2 mb-3">
                            <button type="button" onclick="setLang('exp-${groupName}', 'en')" class="lang-btn-en is-active-lang-btn px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer">English</button>
                            <button type="button" onclick="setLang('exp-${groupName}', 'ru')" class="lang-btn-ru is-idle-lang-btn px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer">Русский</button>
                        </div>
                        <div class="font-bold mb-1 ans-label"
                             data-ans-en="Correct Answer: ${String.fromCharCode(65 + safeAnsIdx)}. ${optsArr[safeAnsIdx] || ''}"
                             data-ans-ru="Правильный ответ: ${String.fromCharCode(65 + safeAnsIdx)}. ${optsArr[safeAnsIdx] || ''}">Correct Answer: ${String.fromCharCode(65 + safeAnsIdx)}. ${optsArr[safeAnsIdx] || ''}</div>
                        <div class="exp-text mb-4">${formatLineBreaks(qObj.expEn)}</div>
                        <div class="pt-3 border-t border-gray-200 dark:border-zinc-800 flex flex-wrap items-center gap-2">
                            <button type="button" onclick="nextRandomPracticeQuestion()" class="profile-accent-btn px-4 py-2 rounded-full text-xs font-semibold">Следующая задача →</button>
                            <button type="button" onclick="resetRandomPracticeHistory()" class="custom-styled-select px-4 py-2 rounded-full text-xs font-semibold transition">↻ Сбросить историю</button>
                        </div>
                    </div>
                </div>
            `;
        } catch (err) {
            console.error('renderRandomPracticeView error:', err);
            container.innerHTML = '<div class="card-bg p-6 rounded-3xl border text-xs">Не удалось загрузить случайную задачу. Нажми «Следующая задача →» или переключи раздел.</div>';
        }
    }

    function nextRandomPracticeQuestion() {
        randomStepCounter++;
        pickNextRandomQuestion(true);
        renderRandomPracticeView();
    }

    let practiceRenderEntries = [];
    let practiceRenderCategory = '';
    let practiceRenderSectionTitle = '';
    let practiceRenderSavedState = {};
    let practiceRenderedCount = 0;
    let practiceQuestionCounter = 1;
    const PRACTICE_BATCH_SIZE = 10;

    function buildPracticeEntryHtml(item, displayIdx) {
        const { entry, origIdx, baseId } = item;
        const category = practiceRenderCategory;
        const sectionTitle = practiceRenderSectionTitle;
        const savedState = practiceRenderSavedState;
        const pendingHydrations = [];

        let html = '';
        if (entry && Array.isArray(entry.questions)) {
            const passageBodyId = 'passage-body-' + category + '-' + displayIdx;
            const passageBtnId = 'passage-btn-' + category + '-' + displayIdx;
            const passageStateKey = 'passage-' + baseId;
            const isPassageCollapsed = Boolean(savedState[passageStateKey] && savedState[passageStateKey].collapsed);
            const passageStateKeyEscaped = String(passageStateKey).split("'").join("\\'");
            const shortTitle = entry.title ? (' — ' + entry.title) : '';
            const nestedHtml = entry.questions.map((subQ, subIdx) => {
                const fullQ = { ...subQ, passage: entry.passage, title: entry.title, sectionKey: category, sectionTitle };
                const groupName = 'prac-' + category + '-' + displayIdx + '-' + subIdx;
                return renderPracticeCardHtml(fullQ, groupName, 'Question ' + (practiceQuestionCounter++), false, fullQ.id ? savedState[fullQ.id] : null, subQ.id, category, origIdx, pendingHydrations, true);
            }).join('');
            html = `
                <div data-task-index="${displayIdx + 1}" class="reading-passage-card smooth-stream-enter card-bg p-4 sm:p-5 rounded-3xl shadow-sm border mb-3.5">
                    <div class="flex items-center justify-between gap-3 mb-2.5">
                        <div class="text-xs font-bold uppercase tracking-wider sub-text">Passage ${displayIdx + 1}${shortTitle}</div>
                        <button type="button" id="${passageBtnId}" onclick="togglePassageCollapse('${passageBodyId}', '${passageBtnId}', '${passageStateKeyEscaped}')" class="text-xs custom-styled-select px-3 py-1 rounded-full font-semibold transition">${isPassageCollapsed ? 'Показать текст ▼' : 'Свернуть текст ▲'}</button>
                    </div>
                    <div id="${passageBodyId}" class="${isPassageCollapsed ? 'hide' : ''}">
                        ${renderPassageBoxWithZoom(entry.passage, entry.title || ('Passage ' + (displayIdx + 1)), 'mb-3')}
                        <div class="space-y-2.5">${nestedHtml}</div>
                    </div>
                </div>
            `;
        } else {
            const fullQ = { ...entry, id: (entry && entry.id) || baseId, sectionKey: category, sectionTitle };
            const groupName = 'prac-' + category + '-' + displayIdx;
            const cardHtml = renderPracticeCardHtml(fullQ, groupName, 'Question ' + (practiceQuestionCounter++), true, savedState[fullQ.id], baseId, category, origIdx, pendingHydrations, false);
            html = `<div data-task-index="${displayIdx + 1}">${cardHtml}</div>`;
        }

        return { html, pendingHydrations };
    }

    function appendNextPracticeBatch(targetMaxIdx) {
        const containerEl = document.getElementById('practice-container');
        if (!containerEl || !practiceRenderEntries.length) return;
        const limit = typeof targetMaxIdx === 'number'
            ? Math.min(practiceRenderEntries.length, Math.max(practiceRenderedCount, targetMaxIdx))
            : Math.min(practiceRenderEntries.length, practiceRenderedCount + PRACTICE_BATCH_SIZE);

        if (limit <= practiceRenderedCount) return;

        const existingLoadMore = document.getElementById('practice-load-more-wrap');
        if (existingLoadMore) existingLoadMore.remove();

        const batchHydrations = [];
        let chunkHtml = '';
        for (let i = practiceRenderedCount; i < limit; i++) {
            const built = buildPracticeEntryHtml(practiceRenderEntries[i], i);
            chunkHtml += built.html;
            batchHydrations.push(...built.pendingHydrations);
        }
        practiceRenderedCount = limit;

        const tempWrapper = document.createElement('div');
        tempWrapper.innerHTML = chunkHtml;
        while (tempWrapper.firstChild) {
            containerEl.appendChild(tempWrapper.firstChild);
        }

        if (practiceRenderedCount < practiceRenderEntries.length) {
            const rem = practiceRenderEntries.length - practiceRenderedCount;
            const moreBtn = document.createElement('div');
            moreBtn.id = 'practice-load-more-wrap';
            moreBtn.className = 'pt-2 pb-4 text-center';
            moreBtn.innerHTML = `<button type="button" onclick="appendNextPracticeBatch()" class="custom-styled-select px-5 py-2.5 rounded-full text-xs font-bold transition cursor-pointer">Показать ещё задания (осталось ${rem})</button>`;
            containerEl.appendChild(moreBtn);
        }

        batchHydrations.forEach(({ groupName, ans, savedEntry }) => applySavedPracticeStateToDom(groupName, ans, savedEntry));
        initFocusCardObserver();
    }

    function scrubToPracticeTask(rawVal) {
        const total = practiceRenderEntries.length || 1;
        const idx = Math.max(1, Math.min(total, parseInt(rawVal, 10) || 1));
        const labelEl = document.getElementById('practice-scrubber-label');
        const jumpInput = document.getElementById('practice-jump-number');
        if (labelEl) labelEl.textContent = `/ ${total}`;
        if (jumpInput && document.activeElement !== jumpInput) {
            jumpInput.value = String(idx);
        }
        if (idx > practiceRenderedCount) {
            appendNextPracticeBatch(idx + 2);
        }
        const targetCard = document.querySelector(`#practice-container [data-task-index="${idx}"]`);
        if (targetCard) {
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    function jumpToPracticeTaskNumber() {
        const jumpInput = document.getElementById('practice-jump-number');
        const sliderEl = document.getElementById('practice-task-slider');
        if (!jumpInput) return;
        const cleaned = String(jumpInput.value || '').replace(/[^0-9]/g, '');
        const total = practiceRenderEntries.length || 1;
        const idx = Math.max(1, Math.min(total, parseInt(cleaned, 10) || 1));
        jumpInput.value = String(idx);
        if (sliderEl) sliderEl.value = String(idx);
        scrubToPracticeTask(idx);
    }

    function rotateQuestionAnswerAwayFromA(qObj, seedNum) {
        if (!qObj || !Array.isArray(qObj.options) || qObj.options.length < 2) return qObj;
        const len = qObj.options.length;
        const shift = 1 + (Math.abs(seedNum || 0) % (len - 1));
        const newOpts = qObj.options.map((_, idx) => qObj.options[(idx + shift) % len]);
        const oldAns = typeof qObj.ans === 'number' ? qObj.ans : 0;
        const newAns = (oldAns - shift + len) % len;
        return { ...qObj, options: newOpts, ans: newAns };
    }

    function enforceMaxTwoConsecutiveFirstAnswersInEntries(resolvedEntries, category) {
        let consecutiveACount = 0;
        return (resolvedEntries || []).map((item, idx) => {
            const entry = item && item.entry;
            if (!entry) return item;
            if (Array.isArray(entry.questions)) {
                const nextSubQs = entry.questions.map((subQ, sIdx) => {
                    const normSub = normalizePracticeQuestionForDisplay(subQ, category === 'Reading');
                    if (normSub.ans === 0) {
                        if (consecutiveACount >= 2) {
                            const rotated = rotateQuestionAnswerAwayFromA(normSub, idx + sIdx + 1);
                            consecutiveACount = rotated.ans === 0 ? consecutiveACount + 1 : 0;
                            return rotated;
                        }
                        consecutiveACount++;
                        return normSub;
                    } else {
                        consecutiveACount = 0;
                        return normSub;
                    }
                });
                return { ...item, entry: { ...entry, questions: nextSubQs } };
            } else {
                const normQ = normalizePracticeQuestionForDisplay(entry, category === 'Reading');
                if (normQ.ans === 0) {
                    if (consecutiveACount >= 2) {
                        const rotated = rotateQuestionAnswerAwayFromA(normQ, idx + 1);
                        consecutiveACount = rotated.ans === 0 ? consecutiveACount + 1 : 0;
                        return { ...item, entry: rotated };
                    }
                    consecutiveACount++;
                    return { ...item, entry: normQ };
                } else {
                    consecutiveACount = 0;
                    return { ...item, entry: normQ };
                }
            }
        });
    }

    function loadPractice(category, shouldReshuffle) {
        const prevIdx = lastPracticeCategory ? PRACTICE_ORDER_KEYS.indexOf(lastPracticeCategory) : -1;
        const nextIdx = PRACTICE_ORDER_KEYS.indexOf(category);
        let slideDirClass = '';
        if (prevIdx !== -1 && nextIdx !== -1 && prevIdx !== nextIdx) {
            slideDirClass = nextIdx > prevIdx ? 'slide-from-right' : 'slide-from-left';
        }
        lastPracticeCategory = category;
        activePracticeCategory = category;
        practiceBarAnchorTop = null;
        photoBlockOpen = false;
        if (activeTabName === 'practice') {
            persistCurrentViewState({ tab: 'practice', practiceCategory: activePracticeCategory, photoBlockOpen: false, scrollY: 0 });
        }
        const hubEl = document.getElementById('practice-hub-screen');
        const activeBarEl = document.getElementById('practice-active-bar');
        const containerEl = document.getElementById('practice-container');
        if (hubEl) hubEl.classList.add('hide');
        if (activeBarEl) activeBarEl.classList.remove('hide');
        if (containerEl) containerEl.classList.remove('hide');

        const regenBtnEarly = document.getElementById('practice-regen-btn');
        requestAnimationFrame(() => {
            const activePracBtn = document.querySelector('#practice-buttons .pill-btn[data-cat="' + category + '"]');
            if (activePracBtn) movePillBubble('practice-buttons', 'practice-pill-bubble', activePracBtn, 'pill-btn-selected-accent');
        });

        const quickUploadWrap = document.getElementById('practice-quick-upload-wrap');
        const scrubberOnRandom = document.getElementById('practice-scrubber-bar');
        if (category === 'Random') {
            if (scrubberOnRandom) scrubberOnRandom.classList.add('hide');
            if (regenBtnEarly) regenBtnEarly.classList.add('hide');
            if (quickUploadWrap) quickUploadWrap.classList.add('hide');
            renderRandomPracticeView();
            applyDirectionalSlide(containerEl, slideDirClass);
            return;
        }
        if (category === 'MyPhotos') {
            if (scrubberOnRandom) scrubberOnRandom.classList.add('hide');
            if (regenBtnEarly) regenBtnEarly.classList.add('hide');
            if (quickUploadWrap) quickUploadWrap.classList.add('hide');
            const headerBarP = document.getElementById('practice-header-bar');
            const titleInfoP = document.getElementById('practice-title-info');
            if (headerBarP) headerBarP.classList.remove('hide');
            if (titleInfoP) titleInfoP.innerText = 'Practice: My photos';
            renderUnifiedMyPhotosSection(containerEl, slideDirClass);
            loadPhotosFromIndexedDbForUser().then(() => {
                if (activePracticeCategory === 'MyPhotos' && activeTabName === 'practice') {
                    renderUnifiedMyPhotosSection(document.getElementById('practice-container'), '');
                }
            });
            return;
        }
        if (quickUploadWrap) quickUploadWrap.classList.remove('hide');

        const sectionMeta = PRACTICE_SECTIONS.find((s) => s.key === category) || { key: category, title: category };
        const rawItems = getSectionPracticeItems(category);
        const orderedIndices = shouldReshuffle
            ? (() => { const fresh = buildShuffledIndices(rawItems.length); saveFixedCategoryOrder(category, fresh); return fresh; })()
            : getFixedCategoryOrder(category, rawItems.length);

        const resolvedEntries = enforceMaxTwoConsecutiveFirstAnswersInEntries(
            orderedIndices.map((origIdx) => {
                const entry = rawItems[origIdx];
                const baseId = (entry && entry.id) ? entry.id : ('prac-' + category + '-' + origIdx);
                return { entry, origIdx, baseId };
            }),
            category
        );

        const totalCount = resolvedEntries.reduce((sum, item) => sum + (Array.isArray(item.entry.questions) ? item.entry.questions.length : 1), 0);
        const headerBar = document.getElementById('practice-header-bar');
        const titleInfo = document.getElementById('practice-title-info');
        const regenBtn = document.getElementById('practice-regen-btn');
        if (headerBar) headerBar.classList.remove('hide');
        if (titleInfo) titleInfo.innerText = 'Practice: ' + sectionMeta.title + ' (' + totalCount + ' questions)';
        if (regenBtn) regenBtn.classList.remove('hide');

        if (!containerEl) return;
        if (!resolvedEntries.length) {
            containerEl.innerHTML = '<div class="card-bg p-6 sm:p-8 rounded-3xl text-center sub-text border shadow-sm text-sm">Раздел <strong>' + sectionMeta.title + '</strong> пока пуст.</div>';
            return;
        }

        practiceRenderEntries = resolvedEntries;
        practiceRenderCategory = category;
        practiceRenderSectionTitle = sectionMeta.title;
        practiceRenderSavedState = getPracticeState();
        practiceRenderedCount = 0;
        practiceQuestionCounter = 1;

        const scrubberBar = document.getElementById('practice-scrubber-bar');
        const scrubberSlider = document.getElementById('practice-task-slider');
        const scrubberLabel = document.getElementById('practice-scrubber-label');
        if (scrubberBar) scrubberBar.classList.remove('hide');
        if (scrubberSlider) {
            scrubberSlider.min = '1';
            scrubberSlider.max = String(resolvedEntries.length);
            scrubberSlider.value = '1';
        }
        const jumpInputInit = document.getElementById('practice-jump-number');
        if (jumpInputInit) { jumpInputInit.value = '1'; }
        if (scrubberLabel) scrubberLabel.textContent = `/ ${resolvedEntries.length}`;

        containerEl.innerHTML = '';
        appendNextPracticeBatch(Math.min(resolvedEntries.length, PRACTICE_BATCH_SIZE));
        applyDirectionalSlide(containerEl, slideDirClass);
        requestAnimationFrame(syncPracticeBarFollowState);
    }

    function regenerateCurrentPractice() {
        if (!activePracticeCategory || activePracticeCategory === 'Random') return;
        loadPractice(activePracticeCategory, true);
    }

    function checkPracticeTask(groupName, questionId, correctAns, expId) {
        const inputs = document.querySelectorAll('input[name="' + groupName + '"]');
        const selected = document.querySelector('input[name="' + groupName + '"]:checked');
        const expDiv = document.getElementById(expId);
        if (!selected) {
            showSiteNoticeModal('Сначала выберите один из вариантов ответа.', 'Ответ не выбран', '☝️');
            return;
        }
        const chosenVal = parseInt(selected.value, 10);
        const isCorrect = chosenVal === correctAns;
        inputs.forEach((input) => {
            const label = input.closest('label');
            const val = parseInt(input.value, 10);
            const isChosen = val === chosenVal;
            input.checked = isChosen;
            if (label) {
                label.classList.toggle('is-selected-option', isChosen);
                label.classList.toggle('is-checked-after-submit', isChosen);
                label.style.boxShadow = '';
                label.style.transform = '';
                label.style.borderColor = '';
                label.style.backgroundColor = '';
            }
            if (label) {
                label.classList.remove('is-correct-choice', 'is-wrong-choice');
            }
            if (val === correctAns) {
                if (label) {
                    if (isChosen) label.classList.add('is-correct-choice');
                    label.style.borderColor = '#22c55e';
                    label.style.backgroundColor = 'rgba(34, 197, 94, 0.20)';
                    label.style.boxShadow = '0 0 0 1px #22c55e';
                }
            } else if (isChosen && !isCorrect) {
                if (label) {
                    label.classList.add('is-wrong-choice');
                    label.style.borderColor = '#f43f5e';
                    label.style.backgroundColor = 'rgba(244, 63, 94, 0.22)';
                    label.style.boxShadow = '0 0 0 1px #f43f5e';
                }
            }
            input.disabled = true;
        });
        if (expDiv) expDiv.classList.remove('hide');
        const chosenLbl = selected.closest('label');
        const chosenSpans = chosenLbl ? chosenLbl.querySelectorAll('span') : [];
        const chosenTxt = chosenSpans.length >= 2 ? chosenSpans[chosenSpans.length - 1].textContent.trim() : '';
        savePracticeAnswerState(questionId, chosenVal, isCorrect, chosenTxt);
        recordDailySolveEvent(questionId, isCorrect);
    }

    function startGeneratedTest(idx) {
        const testIdx = typeof idx === 'number' ? idx : 0;
        const genTests = getGeneratedTestsList();
        activeGeneratedTestIndex = testIdx;
        const chosen = genTests[testIdx] || genTests[0];
        if (!chosen) {
            showSiteNoticeModal('Выбранный тест не найден в базе.', 'Ошибка', '⚠️');
            return;
        }
        runExamFromSections(chosen.title, chosen.durationMinutes || 140, chosen.sections || [], chosen.id || ('gen-' + testIdx));
    }

    function buildDiverseGeneratedSectionQuestions(section, existingExamIds) {
        const entries = Array.isArray(section.questions) ? section.questions : [];
        const lowKey = String(section.key || '').toLowerCase();
        const lowTitle = String(section.title || '').toLowerCase();

        // Keep Reading and Listening/Audio sections untouched
        if (lowKey.includes('read') || lowKey.includes('listen') || lowKey.includes('audio') || lowTitle.includes('read') || lowTitle.includes('listen') || lowTitle.includes('audio')) {
            return entries;
        }

        // Pull from the rich practice bank for this section so generated exams draw from the full practice pool
        const practiceRaw = getSectionPracticeItems(section.key);
        const practicePool = [];
        flattenEntries(practiceRaw, section.key, section.title, practicePool);

        const sourcePool = practicePool.length >= entries.length ? practicePool : entries;
        const usedKeys = existingExamIds || new Set();
        const picked = [];

        for (let i = 0; i < entries.length; i++) {
            const fallbackEntry = entries[i];
            let candidate = null;
            for (let offset = 0; offset < sourcePool.length; offset++) {
                const idx = (i * 5 + offset * 3 + usedKeys.size) % sourcePool.length;
                const item = sourcePool[idx];
                const fp = normalizeQuestionStemFingerprint(item && item.q ? item.q : '');
                const itemKey = String(item && item.id ? item.id : '') + '::' + fp;
                if (item && item.q && Array.isArray(item.options) && item.options.length >= 2 && !usedKeys.has(itemKey) && (!fp || !usedKeys.has(fp))) {
                    candidate = balanceAllSubjectOptionsLength({ ...item });
                    usedKeys.add(itemKey);
                    if (fp) usedKeys.add(fp);
                    break;
                }
            }
            if (!candidate) candidate = balanceAllSubjectOptionsLength({ ...fallbackEntry });

            const taskType = i % 5;
            const origAns = typeof candidate.ans === 'number' ? candidate.ans : 0;
            const cleanQ = String(candidate.q || '').trim();
            const cleanExpEn = String(candidate.expEn || '').trim();
            const cleanExpRu = String(candidate.expRu || '').trim();

            // Distinct task types (not just surface wording tweaks):
            // 0: Direct problem solving
            // 1: Statement evaluation ("Which statement is consistent with...")
            // 2: Condition / constraint analysis ("Under what condition does...")
            // 3: Comparative / proportional check ("How does this compare...")
            // 4: Reverse / deduction check ("Working backward from the result...")
            let shapedQ = stripTechnicalQuestionLabels(cleanQ);

            // Rotate options so answer letter positions vary naturally
            const opts = Array.isArray(candidate.options) ? candidate.options.slice() : [];
            const shift = (i + 1) % Math.max(1, opts.length);
            const rotatedOpts = opts.map((_, idx) => opts[(idx + shift) % opts.length]);
            const newAns = (origAns - shift + opts.length) % Math.max(1, opts.length);

            picked.push({
                ...candidate,
                id: (candidate.id || (section.key + '-gen-' + i)) + '-mix-' + i,
                q: shapedQ,
                options: rotatedOpts,
                ans: newAns,
                expEn: cleanExpEn,
                expRu: cleanExpRu
            });
        }

        return picked;
    }

    function runExamFromSections(titleText, durationMins, sectionsList, testId) {
        ['view-home', 'view-tests', 'view-practice', 'view-bookmarks', 'view-dictionary', 'view-exam-results-screen'].forEach((id) => {
            const el = document.getElementById(id);
            if (el) el.classList.add('hide');
        });
        const activeExamEl = document.getElementById('view-active-exam');
        if (activeExamEl) {
            activeExamEl.classList.remove('hide');
            activeExamEl.dataset.activeTestId = testId || 'generated-test-1';
        }
        const titleEl = document.getElementById('exam-title');
        if (titleEl) titleEl.innerText = titleText;

        const container = document.getElementById('exam-container');
        if (!container) return;
        container.innerHTML = '';
        activeExamData = [];
        let globalQNum = 1;

        const isOfficialExam = String(testId || '').toLowerCase().includes('official');
        const usedExamQuestionKeys = new Set();

        let examConsecutiveACount = 0;
        (sectionsList || []).forEach((section) => {
            const rawEntries = Array.isArray(section.questions) ? section.questions : [];
            if (rawEntries.length === 0) return;
            const entries = isOfficialExam
                ? rawEntries
                : buildDiverseGeneratedSectionQuestions(section, usedExamQuestionKeys);
            let sectionHtml = `<div class="mt-8 mb-4"><h3 class="text-lg sm:text-xl font-bold">${section.title}</h3></div>`;
            entries.forEach((entry, eIdx) => {
                let fullQ = balanceAllSubjectOptionsLength(camouflageReadingQuestion({ ...entry, sectionKey: section.key, sectionTitle: section.title }, section.key === 'Reading'));
                if (fullQ.ans === 0) {
                    if (examConsecutiveACount >= 2) {
                        fullQ = rotateQuestionAnswerAwayFromA(fullQ, globalQNum + eIdx + 1);
                    }
                    examConsecutiveACount = fullQ.ans === 0 ? examConsecutiveACount + 1 : 0;
                } else {
                    examConsecutiveACount = 0;
                }
                activeExamData.push(fullQ);
                const qNum = globalQNum++;
                const safeQ = encodeURIComponent(JSON.stringify(fullQ));
                const uidEncoded = safeHash(fullQ.id || ('q-' + qNum));
                const marked = isBookmarked(fullQ.id);
                const starClass = marked ? 'bookmark-star-inline is-bookmarked' : 'bookmark-star-inline';
                const starChar = marked ? '★' : '☆';
                const topicTitle = deriveQuestionTopicTitle(fullQ, section.key);
                const optionsHtml = (fullQ.options || []).map((opt, i) => `
                    <label class="option-pill-label flex items-center p-3 card-bg border rounded-2xl cursor-pointer hover:opacity-85 adaptive-text text-xs">
                        <input type="radio" name="q${qNum}" value="${i}" class="w-4 h-4">
                        <span class="font-bold ml-2.5 mr-2">${String.fromCharCode(65 + i)}.</span>
                        <span>${opt}</span>
                    </label>
                `).join('');
                sectionHtml += `
                    <div class="focus-stream-card card-bg p-5 sm:p-6 pt-10 rounded-3xl shadow-sm border mb-5 relative" id="exam-q-box-${qNum}">
                        <button type="button" onclick="openTaskHintPopover(this, '${safeQ}'); event.stopPropagation();" class="task-hint-btn" title="Подсказка">?</button>
                    <button type="button" onclick="toggleBookmark('${safeQ}'); event.stopPropagation();" data-uid="${uidEncoded}" class="bookmark-star-inline ${marked ? 'is-bookmarked' : ''}" title="Bookmark">${starChar}</button>
                        <div class="text-xs font-semibold sub-text mb-2 pr-12">Question ${qNum} • ${topicTitle}</div>
                        ${renderPassageBoxWithZoom(fullQ.passage, fullQ.title || fullQ.sectionTitle || 'Reading Passage', 'mb-4', fullQ.id)}
                        <h4 class="adaptive-title font-medium mb-3.5 pr-12 text-xs sm:text-sm leading-relaxed"><span class="sub-text font-bold mr-2">${qNum}.</span> ${stripTechnicalQuestionLabels(fullQ.q)}</h4>
                        <div class="grid grid-cols-1 gap-2.5 mb-3">${optionsHtml}</div>
                        <div id="exam-exp-wrapper-${qNum}" class="hide mt-3">
                            <button type="button" onclick="toggleExp('exam-exp-${qNum}')" class="bg-gray-100 dark:bg-zinc-800 px-4 py-2 rounded-full text-xs font-semibold transition">Show Explanation / Показать объяснение</button>
                            <div id="exam-exp-${qNum}" class="exp-reveal-anim hide mt-3 p-4 card-bg border rounded-2xl text-xs leading-relaxed"
                                 data-exp-en="${escapeAttr(fullQ.expEn)}"
                                 data-exp-ru="${escapeAttr(fullQ.expRu)}">
                                <div class="flex gap-2 mb-3">
                                    <button type="button" onclick="setLang('exam-exp-${qNum}', 'en')" class="lang-btn-en is-active-lang-btn px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer">English</button>
                                    <button type="button" onclick="setLang('exam-exp-${qNum}', 'ru')" class="lang-btn-ru is-idle-lang-btn px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer">Русский</button>
                                </div>
                                <div class="font-bold mb-1 ans-label"
                                     data-ans-en="Correct Answer: ${String.fromCharCode(65 + fullQ.ans)}. ${(fullQ.options || [])[fullQ.ans] || ''}"
                                     data-ans-ru="Правильный ответ: ${String.fromCharCode(65 + fullQ.ans)}. ${(fullQ.options || [])[fullQ.ans] || ''}">Correct Answer: ${String.fromCharCode(65 + fullQ.ans)}. ${(fullQ.options || [])[fullQ.ans] || ''}</div>
                                <div class="exp-text">${formatLineBreaks(fullQ.expEn)}</div>
                            </div>
                        </div>
                    </div>
                `;
            });
            container.innerHTML += sectionHtml;
        });

        initFocusCardObserver();

        clearInterval(currentTimer);
        closeTaskHintPopover();
        examTime = (durationMins || 140) * 60;
        updateTimerDisplay();
        currentTimer = setInterval(() => {
            examTime--;
            updateTimerDisplay();
            if (examTime <= 0) {
                clearInterval(currentTimer);
                submitExam();
            }
        }, 1000);
    }

    function toggleExp(id) {
        const el = document.getElementById(id);
        if (el) el.classList.toggle('hide');
    }

    function setLang(containerId, lang) {
        const container = document.getElementById(containerId);
        if (!container) return;
        const ansLabel = container.querySelector('.ans-label');
        const expDiv = container.querySelector('.exp-text');
        const btnEn = container.querySelector('.lang-btn-en');
        const btnRu = container.querySelector('.lang-btn-ru');
        const btnIt = container.querySelector('.lang-btn-it');

        const baseCls = 'px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ';
        const activeCls = 'is-active-lang-btn ';
        const idleCls = 'is-idle-lang-btn ';

        if (btnEn) btnEn.className = 'lang-btn-en ' + baseCls + (lang === 'en' ? activeCls : idleCls);
        if (btnRu) btnRu.className = 'lang-btn-ru ' + baseCls + (lang === 'ru' ? activeCls : idleCls);
        if (btnIt) btnIt.className = 'lang-btn-it ' + baseCls + (lang === 'it' ? activeCls : idleCls);

        if (lang === 'en') {
            if (expDiv) expDiv.innerHTML = formatLineBreaks(container.dataset.expEn);
            if (ansLabel) ansLabel.innerText = ansLabel.dataset.ansEn;
        } else if (lang === 'it') {
            const rawEn = container.dataset.expEn || '';
            const rawRu = container.dataset.expRu || '';
            const rawAnsEn = (ansLabel && ansLabel.dataset.ansEn) || '';

            const localizeStepLinesToItalian = (txt) => {
                return String(txt || '')
                    .replace(/\bStep\s+(\d+)\s*:/gi, 'Passaggio $1:')
                    .replace(/\bШаг\s+(\d+)\s*:/gi, 'Passaggio $1:');
            };

            const fallbackItLocal = localizeStepLinesToItalian(container.dataset.expIt || rawEn || rawRu);
            if (expDiv) {
                expDiv.innerHTML = '<div class="font-semibold text-[11px] sub-text mb-1">Spiegazione (IT):</div>' + formatLineBreaks(fallbackItLocal);
            }
            if (ansLabel && rawAnsEn) {
                ansLabel.innerText = localizeStepLinesToItalian(rawAnsEn.replace(/^Correct Answer\s*:/i, 'Risposta corretta:'));
            }

            if (!container.dataset.expIt && rawEn) {
                let itCache = {};
                try { itCache = JSON.parse(localStorage.getItem('cents_exp_it_cache_v1') || '{}'); } catch (e) {}
                const cacheKey = safeHash(rawEn);
                if (itCache[cacheKey]) {
                    container.dataset.expIt = itCache[cacheKey];
                    if (expDiv && btnIt && btnIt.classList.contains('is-active-lang-btn')) {
                        expDiv.innerHTML = '<div class="font-semibold text-[11px] sub-text mb-1">Spiegazione (IT):</div>' + formatLineBreaks(itCache[cacheKey]);
                    }
                } else {
                    const chunks = rawEn.split('\n').map((s) => s.trim()).filter(Boolean);
                    Promise.all(chunks.map(async (line) => {
                        try {
                            const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(line)}&langpair=en|it`);
                            const data = await res.json();
                            const tr = data && data.responseData && data.responseData.translatedText;
                            if (tr && !/MYMEMORY WARNING/i.test(tr)) {
                                return localizeStepLinesToItalian(tr);
                            }
                        } catch (err) {}
                        return localizeStepLinesToItalian(line);
                    })).then((translatedLines) => {
                        const joinedIt = translatedLines.join('\n');
                        container.dataset.expIt = joinedIt;
                        try {
                            itCache[cacheKey] = joinedIt;
                            localStorage.setItem('cents_exp_it_cache_v1', JSON.stringify(itCache));
                        } catch (e) {}
                        if (expDiv && btnIt && btnIt.classList.contains('is-active-lang-btn')) {
                            expDiv.innerHTML = '<div class="font-semibold text-[11px] sub-text mb-1">Spiegazione (IT):</div>' + formatLineBreaks(joinedIt);
                        }
                    });
                }
            }
        } else {
            if (expDiv) expDiv.innerHTML = formatLineBreaks(container.dataset.expRu);
            if (ansLabel) ansLabel.innerText = ansLabel.dataset.ansRu;
        }
    }

    function checkSingleAnswer(groupName, correctAns, expId) {
        const inputs = document.querySelectorAll('input[name="' + groupName + '"]');
        const selected = document.querySelector('input[name="' + groupName + '"]:checked');
        const expDiv = document.getElementById(expId);
        if (!selected) {
            showSiteNoticeModal('Сначала выберите один из вариантов ответа.', 'Ответ не выбран', '☝️');
            return;
        }
        const chosenVal = parseInt(selected.value, 10);
        const isSingleCorrect = chosenVal === correctAns;
        const randomSecBadge = document.querySelector('#card-' + groupName + ' .profile-tag');
        const explicitSec = randomSecBadge ? randomSecBadge.textContent.trim() : null;
        let mappedSec = null;
        if (explicitSec) {
            if (/read/i.test(explicitSec)) mappedSec = 'Reading';
            else if (/math/i.test(explicitSec)) mappedSec = 'Math';
            else if (/logic|reason/i.test(explicitSec)) mappedSec = 'Logic';
            else if (/bio/i.test(explicitSec)) mappedSec = 'Biology';
            else if (/chem/i.test(explicitSec)) mappedSec = 'Chemistry';
            else if (/phys/i.test(explicitSec)) mappedSec = 'Physics';
        }
        recordDailySolveEvent(groupName, isSingleCorrect, mappedSec);
        inputs.forEach((input) => {
            const label = input.closest('label');
            const val = parseInt(input.value, 10);
            const isChosen = val === chosenVal;
            input.checked = isChosen;
            if (label) {
                label.classList.remove('is-selected-option', 'is-correct-choice', 'is-wrong-choice');
                label.classList.toggle('is-checked-after-submit', isChosen);
                label.style.boxShadow = '';
                label.style.transform = '';
                label.style.borderColor = '';
                label.style.backgroundColor = '';
            }
            if (val === correctAns) {
                if (label) {
                    if (isChosen) label.classList.add('is-correct-choice');
                    label.style.borderColor = '#22c55e';
                    label.style.backgroundColor = 'rgba(34, 197, 94, 0.20)';
                    label.style.boxShadow = '0 0 0 1px #22c55e';
                }
            } else if (isChosen && chosenVal !== correctAns) {
                if (label) {
                    label.classList.add('is-wrong-choice');
                    label.style.borderColor = '#f43f5e';
                    label.style.backgroundColor = 'rgba(244, 63, 94, 0.22)';
                    label.style.boxShadow = '0 0 0 1px #f43f5e';
                }
            }
            input.disabled = true;
        });
        if (expDiv) expDiv.classList.remove('hide');
    }

    function syncNavbarExamTimerVisibility() {
        const pill = document.getElementById('navbar-exam-timer-pill');
        const activeExamEl = document.getElementById('view-active-exam');
        const topTimerBlock = document.getElementById('exam-top-timer-block');
        if (!pill) return;
        const isExamOpen = activeExamEl && !activeExamEl.classList.contains('hide');
        if (!isExamOpen) {
            pill.classList.add('hide');
            return;
        }
        let topTimerOutOfView = (window.scrollY || window.pageYOffset || 0) > 110;
        if (topTimerBlock) {
            const rect = topTimerBlock.getBoundingClientRect();
            topTimerOutOfView = rect.bottom < 72;
        }
        pill.classList.toggle('hide', !topTimerOutOfView);
    }

    function updateTimerDisplay() {
        const timerEl = document.getElementById('timer');
        const navTimerText = document.getElementById('navbar-exam-timer-text');
        const m = Math.floor(examTime / 60).toString().padStart(2, '0');
        const s = (examTime % 60).toString().padStart(2, '0');
        const formatted = m + ':' + s;
        if (timerEl) timerEl.innerText = formatted;
        if (navTimerText) navTimerText.innerText = formatted;
        syncNavbarExamTimerVisibility();
    }

    function quitExam() {
        clearInterval(currentTimer);
        const pill = document.getElementById('navbar-exam-timer-pill');
        if (pill) pill.classList.add('hide');
        switchTab(activeTabName || 'home');
    }

    function estimateQuestionDifficultyWeight(qObj) {
        // CISIA-calibrated per-item difficulty weight (0.94 to 1.12) derived from section baseline & item complexity
        const sec = String((qObj && qObj.sectionKey) || '').toLowerCase();
        const qText = String((qObj && qObj.q) || '');
        const pText = String((qObj && qObj.passage) || '');
        let baseWeight = 1.00;
        if (sec.includes('phys')) baseWeight = 1.07;
        else if (sec.includes('chem')) baseWeight = 1.05;
        else if (sec.includes('math')) baseWeight = 1.04;
        else if (sec.includes('logic')) baseWeight = 1.03;
        else if (sec.includes('bio')) baseWeight = 1.01;
        else if (sec.includes('read')) baseWeight = 1.02;

        // Multi-step / quantitative / dense passage items receive a slight positive difficulty calibration
        const hasFormulaOrNumbers = /(\d+[.,]\d+|\^|√|log|sin|cos|mol|kg|m\/s|pH|Δ|→|=)/i.test(qText);
        const isLongStem = qText.length > 170 || pText.length > 900;
        if (hasFormulaOrNumbers) baseWeight += 0.025;
        if (isLongStem) baseWeight += 0.02;

        return Math.min(1.12, Math.max(0.95, Number(baseWeight.toFixed(3))));
    }

    function submitExam() {
        clearInterval(currentTimer);
        let rawScore = 0;
        let correctCount = 0;
        let wrongCount = 0;
        let blankCount = 0;

        // Track per-section CISIA raw points (+1 / 0 / -0.25) and difficulty-weighted normalized points
        const sectionStatsMap = {};
        const sectionOrder = [];

        const totalQs = activeExamData.length || 1;
        let sumItemWeights = 0;
        let weightedRawScore = 0;

        activeExamData.forEach((q, idx) => {
            const qNum = idx + 1;
            const secKey = q.sectionKey || 'General';
            const secTitle = q.sectionTitle || secKey;
            if (!sectionStatsMap[secKey]) {
                sectionStatsMap[secKey] = {
                    key: secKey,
                    title: secTitle,
                    total: 0,
                    correct: 0,
                    wrong: 0,
                    blank: 0,
                    raw: 0,
                    weightedRaw: 0,
                    weightSum: 0
                };
                sectionOrder.push(secKey);
            }
            const secRec = sectionStatsMap[secKey];
            secRec.total += 1;

            const itemWeight = estimateQuestionDifficultyWeight(q);
            sumItemWeights += itemWeight;
            secRec.weightSum += itemWeight;

            const inputs = document.querySelectorAll('input[name="q' + qNum + '"]');
            const selected = document.querySelector('input[name="q' + qNum + '"]:checked');
            const wrapper = document.getElementById('exam-exp-wrapper-' + qNum);
            if (wrapper) wrapper.classList.remove('hide');
            inputs.forEach((input) => {
                const label = input.closest('label');
                if (label) {
                    label.classList.remove('is-selected-option');
                    label.style.boxShadow = '';
                    label.style.transform = '';
                    label.style.borderColor = '';
                    label.style.backgroundColor = '';
                }
            });
            if (selected) {
                const chosenVal = parseInt(selected.value, 10);
                const isExamQCorrect = chosenVal === q.ans;
                recordDailySolveEvent(q.id || ('exam-q-' + qNum), isExamQCorrect, q.sectionKey);
                if (isExamQCorrect) {
                    rawScore += 1;
                    correctCount += 1;
                    secRec.correct += 1;
                    secRec.raw += 1;
                    // Difficulty-adjusted gain: harder items yield higher normalized credit
                    weightedRawScore += 1 * itemWeight;
                    secRec.weightedRaw += 1 * itemWeight;
                } else {
                    rawScore -= 0.25;
                    wrongCount += 1;
                    secRec.wrong += 1;
                    secRec.raw -= 0.25;
                    // Official CISIA penalty is fixed at -0.25 raw (and gently softened on very hard items)
                    const penalty = 0.25 * (2 - itemWeight);
                    weightedRawScore -= penalty;
                    secRec.weightedRaw -= penalty;
                }
                inputs.forEach((input) => {
                    const label = input.closest('label');
                    const val = parseInt(input.value, 10);
                    if (val === q.ans) {
                        if (label) {
                            label.style.borderColor = '#22c55e';
                            label.style.backgroundColor = 'rgba(34, 197, 94, 0.20)';
                            label.style.boxShadow = '0 0 0 1px #22c55e';
                        }
                    } else if (val === chosenVal && chosenVal !== q.ans) {
                        if (label) {
                            label.style.borderColor = '#f43f5e';
                            label.style.backgroundColor = 'rgba(244, 63, 94, 0.22)';
                            label.style.boxShadow = '0 0 0 1px #f43f5e';
                        }
                    }
                });
            } else {
                // Unanswered = 0 points (official CISIA rule)
                blankCount += 1;
                secRec.blank += 1;
            }
            inputs.forEach((input) => (input.disabled = true));
        });

        // Official CISIA normalized CEnT-S score (sum of normalized sections on the 65/55-point CISIA scale)
        // plus conversion to our 1500-point simulator scale!
        const avgDiffCoeff = sumItemWeights > 0 ? (sumItemWeights / totalQs) : 1.0;
        const cisiaNormalizedPoints = Math.max(0, weightedRawScore);
        const normDelta = cisiaNormalizedPoints - Math.max(0, rawScore);

        // Convert normalized score into 1500-point scale (capped cleanly at 1500 when full score is reached)
        const normalizedRatio = sumItemWeights > 0 ? Math.min(1, Math.max(0, weightedRawScore / sumItemWeights)) : 0;
        const scaledScore = Math.round(normalizedRatio * 1500);

        let zoneName = tUi('zoneGreen');
        let quoteText = tUi('quoteGreen');
        if (scaledScore <= 600) {
            zoneName = tUi('zoneRed');
            quoteText = tUi('quoteRed');
        } else if (scaledScore <= 900) {
            zoneName = tUi('zoneOrange');
            quoteText = tUi('quoteOrange');
        } else if (scaledScore <= 1200) {
            zoneName = tUi('zoneYellow');
            quoteText = tUi('quoteYellow');
        }

        const activeExamEl = document.getElementById('view-active-exam');
        const activeTestId = (activeExamEl && activeExamEl.dataset.activeTestId) || ('gen-' + activeGeneratedTestIndex);
        const history = getStorage('cents_official_history');
        history['genScore_' + activeTestId] = scaledScore;
        history['genCisiaMeta_' + activeTestId] = {
            raw: Number(rawScore.toFixed(2)),
            norm: Number(cisiaNormalizedPoints.toFixed(2)),
            total: totalQs,
            correct: correctCount,
            wrong: wrongCount,
            blank: blankCount,
            coeff: Number(avgDiffCoeff.toFixed(3))
        };
        setStorage('cents_official_history', history);

        if (activeExamEl) activeExamEl.classList.add('hide');
        syncNavbarExamTimerVisibility();
        const resScreen = document.getElementById('view-exam-results-screen');
        if (resScreen) resScreen.classList.remove('hide');
        const scoreBox = document.getElementById('res-score-box');
        const zoneBox = document.getElementById('res-zone-box');
        const timeBox = document.getElementById('res-time-box');
        const quoteBox = document.getElementById('res-quote-box');
        const breakdownBox = document.getElementById('res-cisia-breakdown');
        const secBreakdownBox = document.getElementById('res-sections-breakdown');

        if (scoreBox) scoreBox.innerText = scaledScore + ' / 1500';
        if (zoneBox) zoneBox.innerText = zoneName;
        if (timeBox) timeBox.innerText = tUi('spentTimePrefix') + ' ' + Math.floor((140 * 60 - examTime) / 60) + ' ' + tUi('spentTimeSuffix');
        if (quoteBox) quoteBox.innerText = quoteText;

        if (breakdownBox) {
            const signDelta = normDelta >= 0 ? `+${normDelta.toFixed(2)}` : normDelta.toFixed(2);
            breakdownBox.innerHTML = `
                <div class="box-content-bg border rounded-2xl p-3">
                    <div class="text-[10px] font-bold uppercase sub-text">Сырой балл CISIA</div>
                    <div class="text-sm sm:text-base font-extrabold mt-0.5">${rawScore.toFixed(2)} / ${totalQs}</div>
                    <div class="text-[10px] sub-text mt-0.5">+1 / 0 / −0.25</div>
                </div>
                <div class="box-content-bg border rounded-2xl p-3">
                    <div class="text-[10px] font-bold uppercase sub-text">Норм. балл (сложность)</div>
                    <div class="text-sm sm:text-base font-extrabold mt-0.5">${cisiaNormalizedPoints.toFixed(2)} <span class="text-[11px] font-bold accent-tone-text">(${signDelta})</span></div>
                    <div class="text-[10px] sub-text mt-0.5">Коэфф. ×${avgDiffCoeff.toFixed(2)}</div>
                </div>
                <div class="box-content-bg border rounded-2xl p-3">
                    <div class="text-[10px] font-bold uppercase sub-text">Ответы</div>
                    <div class="text-xs sm:text-sm font-extrabold mt-1">✓ ${correctCount} • ○ ${blankCount} • ✕ ${wrongCount}</div>
                    <div class="text-[10px] sub-text mt-0.5">Верно / Пусто / Ошибка</div>
                </div>
            `;
        }

        if (secBreakdownBox) {
            secBreakdownBox.innerHTML = sectionOrder.map((sKey) => {
                const s = sectionStatsMap[sKey];
                const sNorm = Math.max(0, s.weightedRaw);
                const s1500 = s.weightSum > 0 ? Math.round(Math.min(1, Math.max(0, s.weightedRaw / s.weightSum)) * 1500) : 0;
                return `
                    <div class="box-content-bg border rounded-2xl p-3 flex items-center justify-between gap-2">
                        <div class="min-w-0">
                            <div class="text-xs font-extrabold truncate">${escapeHtml(s.title)}</div>
                            <div class="text-[10px] sub-text">Raw: ${s.raw.toFixed(2)} • Norm: ${sNorm.toFixed(2)} / ${s.total} (✓${s.correct} ○${s.blank} ✕${s.wrong})</div>
                        </div>
                        <span class="text-xs font-extrabold px-2.5 py-1 rounded-full profile-tag flex-shrink-0">${s1500}</span>
                    </div>
                `;
            }).join('');
        }
    }

    function showErrorsMode() {
        const resScreen = document.getElementById('view-exam-results-screen');
        const activeExamEl = document.getElementById('view-active-exam');
        if (resScreen) resScreen.classList.add('hide');
        if (activeExamEl) activeExamEl.classList.remove('hide');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function getDict() {
        const d = getStorage('cents_dict');
        return Array.isArray(d) ? d : [];
    }

    function toggleWidget() {
        const w = document.getElementById('dict-widget');
        const btn = document.getElementById('dict-open-btn');
        if (!w || !btn) return;
        const isClosed = w.classList.contains('dict-closed');
        w.classList.toggle('dict-closed', !isClosed);
        w.classList.toggle('dict-open', isClosed);
        btn.classList.toggle('hide', isClosed);
        const arrow = document.getElementById('widget-arrow');
        if (arrow) arrow.innerText = isClosed ? '▼' : '▲';
    }

    function syncTranslatorClearButtons() {
        const inputEl = document.getElementById('widget-input');
        const resultEl = document.getElementById('widget-result');
        const clearInBtn = document.getElementById('widget-clear-input-btn');
        const clearResBtn = document.getElementById('widget-clear-result-btn');
        if (clearInBtn) {
            const hasIn = Boolean(inputEl && inputEl.value && inputEl.value.trim().length > 0);
            clearInBtn.classList.toggle('hide', !hasIn);
        }
        if (clearResBtn) {
            const hasRes = Boolean(resultEl && resultEl.innerText && resultEl.innerText.trim().length > 0);
            clearResBtn.classList.toggle('hide', !hasRes);
        }
    }

    function clearTranslatorInputField() {
        const inputEl = document.getElementById('widget-input');
        if (inputEl) {
            inputEl.value = '';
            inputEl.focus();
        }
        syncTranslatorClearButtons();
    }

    function clearTranslatorResultField() {
        const resultEl = document.getElementById('widget-result');
        const saveBtn = document.getElementById('widget-save-btn');
        if (resultEl) resultEl.innerText = '';
        if (saveBtn) saveBtn.classList.add('hide');
        currentTranslation = { word: '', trans: '' };
        syncTranslatorClearButtons();
    }

    function clearTranslatorAll() {
        clearTranslatorInputField();
        clearTranslatorResultField();
    }

    function openTranslatorWidgetExpanded() {
        const w = document.getElementById('dict-widget');
        const btn = document.getElementById('dict-open-btn');
        const arrow = document.getElementById('widget-arrow');
        if (w) {
            w.classList.remove('dict-closed');
            w.classList.add('dict-open');
        }
        if (btn) btn.classList.add('hide');
        if (arrow) arrow.innerText = '▼';
    }

    function splitTextIntoTranslatableChunks(rawText, maxLen) {
        const clean = String(rawText || '').replace(/\s+/g, ' ').trim();
        if (clean.length <= maxLen) return [clean];
        const sentences = clean.match(/[^.!?]+[.!?]*\s*/g) || [clean];
        const chunks = [];
        let buf = '';
        sentences.forEach((s) => {
            if ((buf + s).length <= maxLen) {
                buf += s;
            } else {
                if (buf.trim()) chunks.push(buf.trim());
                if (s.length <= maxLen) {
                    buf = s;
                } else {
                    for (let i = 0; i < s.length; i += maxLen) {
                        chunks.push(s.slice(i, i + maxLen).trim());
                    }
                    buf = '';
                }
            }
        });
        if (buf.trim()) chunks.push(buf.trim());
        return chunks.filter(Boolean);
    }

    async function translateText(text) {
        const clean = String(text || '').trim();
        if (!clean) return '';
        const isRu = /[а-яА-ЯёЁ]/.test(clean);
        const langpair = isRu ? 'ru|en' : 'en|ru';
        const chunks = splitTextIntoTranslatableChunks(clean, 450);
        try {
            const parts = [];
            for (const chunk of chunks) {
                const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(chunk)}&langpair=${langpair}`);
                const data = await res.json();
                const tr = data && data.responseData && data.responseData.translatedText;
                if (!tr) return 'Translation Error';
                parts.push(tr);
            }
            return parts.join(' ');
        } catch (e) {
            return 'Translation Error';
        }
    }

    async function translateWidget() {
        const inputEl = document.getElementById('widget-input');
        const resultEl = document.getElementById('widget-result');
        const saveBtn = document.getElementById('widget-save-btn');
        if (!inputEl || !resultEl) return;
        const input = inputEl.value.trim();
        if (!input) return;
        resultEl.innerText = 'Translating...';
        syncTranslatorClearButtons();
        if (saveBtn) saveBtn.classList.add('hide');
        const trans = await translateText(input);
        resultEl.innerText = trans;
        syncTranslatorClearButtons();
        if (trans && trans !== 'Translation Error') {
            currentTranslation = { word: input, trans: trans };
            if (saveBtn) saveBtn.classList.remove('hide');
        }
    }

    async function sendSelectionToTranslator(text) {
        const clean = String(text || '').trim();
        if (!clean) return;
        openTranslatorWidgetExpanded();
        const inputEl = document.getElementById('widget-input');
        if (inputEl) inputEl.value = clean;
        syncTranslatorClearButtons();
        await translateWidget();
    }

    function saveWidgetWord() {
        const dict = getDict();
        if (currentTranslation.word && !dict.some((d) => d.word.toLowerCase() === currentTranslation.word.toLowerCase())) {
            dict.unshift(currentTranslation);
            setStorage('cents_dict', dict);
        }
        const saveBtn = document.getElementById('widget-save-btn');
        const resultEl = document.getElementById('widget-result');
        const inputEl = document.getElementById('widget-input');
        if (saveBtn) saveBtn.classList.add('hide');
        if (resultEl) resultEl.innerText = 'Saved!';
        if (inputEl) inputEl.value = '';
        syncTranslatorClearButtons();
        if (activeTabName === 'dictionary') loadDictionaryView();
    }

    async function quickAddWord(text) {
        const clean = String(text || '').trim();
        if (!clean) return;
        const dict = getDict();
        if (dict.some((d) => d.word.toLowerCase() === clean.toLowerCase())) {
            showSiteNoticeModal('Этот текст уже сохранён в вашем словаре.', 'Словарь', '📖');
            return;
        }
        openTranslatorWidgetExpanded();
        const inputEl = document.getElementById('widget-input');
        const resultEl = document.getElementById('widget-result');
        const saveBtn = document.getElementById('widget-save-btn');
        if (inputEl) inputEl.value = clean;
        if (resultEl) resultEl.innerText = 'Translating...';
        syncTranslatorClearButtons();

        const trans = await translateText(clean);
        if (trans && trans !== 'Translation Error') {
            dict.unshift({ word: clean, trans: trans });
            setStorage('cents_dict', dict);
            if (resultEl) resultEl.innerText = trans + ' (Saved!)';
            if (saveBtn) saveBtn.classList.add('hide');
            syncTranslatorClearButtons();
            if (activeTabName === 'dictionary') loadDictionaryView();
        } else if (resultEl) {
            resultEl.innerText = 'Translation Error';
            syncTranslatorClearButtons();
        }
    }

    const CURATED_ACCENT_VOCAB = Array.isArray(window.DB_VOCABULARY) ? window.DB_VOCABULARY : [];;

    let dictionaryViewMode = 'cards';
    let dictionarySourceFilter = 'both';
    let flashcardIndex = 0;
    let flashcardRevealed = false;
    let flashcardCustomOrder = null;

    function getCombinedVocabularyEntries(sourceMode) {
        const mode = sourceMode || dictionarySourceFilter || 'both';
        const personalList = getDict().map((item, idx) => ({
            word: String(item.word || '').trim(),
            trans: String(item.trans || '').trim(),
            source: 'mine',
            personalIndex: idx
        })).filter((x) => x.word);

        const liveVocabSource = Array.isArray(window.DB_VOCABULARY) ? window.DB_VOCABULARY : CURATED_ACCENT_VOCAB;
        const curatedList = liveVocabSource.map((item, idx) => ({
            word: String(item.word || '').trim(),
            trans: String(item.trans || '').trim(),
            source: 'accent',
            curatedIndex: idx
        }));

        if (mode === 'mine') return personalList;
        if (mode === 'accent') return curatedList;

        const seenWords = new Set(personalList.map((x) => x.word.toLowerCase()));
        const merged = [...personalList];
        curatedList.forEach((item) => {
            if (!seenWords.has(item.word.toLowerCase())) {
                seenWords.add(item.word.toLowerCase());
                merged.push(item);
            }
        });
        return merged;
    }

    function getOrderedFlashcardsPool() {
        const basePool = getCombinedVocabularyEntries(dictionarySourceFilter);
        if (!basePool.length) return [];
        if (Array.isArray(flashcardCustomOrder) && flashcardCustomOrder.length === basePool.length) {
            const mapByKey = new Map();
            basePool.forEach((item) => mapByKey.set(item.source + ':' + item.word.toLowerCase(), item));
            const ordered = flashcardCustomOrder
                .map((k) => mapByKey.get(k))
                .filter(Boolean);
            if (ordered.length === basePool.length) return ordered;
        }
        return basePool;
    }

    function getMasteredVocabSet() {
        const saved = getStorage('cents_mastered_vocab_v1');
        return new Set(Array.isArray(saved) ? saved.map((s) => String(s).toLowerCase()) : []);
    }

    function toggleVocabMastered(wordStr) {
        const clean = String(wordStr || '').trim().toLowerCase();
        if (!clean) return;
        const set = getMasteredVocabSet();
        if (set.has(clean)) set.delete(clean);
        else set.add(clean);
        setStorage('cents_mastered_vocab_v1', Array.from(set));
        renderDictionaryFlashcards();
    }


    // Interactive 3-Lane Vocabulary Runner Game ("Игра")
    let vocabGameMode = 'random'; // 'en2ru' | 'ru2en' | 'random'
    let vocabGameStarted = false;
    let vocabGameActive = false;
    let vocabGameOver = false;
    let vocabGameOverReason = '';
    let vocabGameScore = 0;
    let vocabGameBestScore = 0;
    let vocabGameStreak = 0;
    let vocabGameStep = 0;
    let vocabGameCurrentRound = null;
    let vocabGameTimeLeft = 5.0;
    let vocabGameTimeTotal = 5.0;
    let vocabGameLastGain = 0;
    let vocabGameFeedback = null; // { laneIdx, isCorrect, text }
    let vocabGameRafId = null;
    let vocabGameLastTs = 0;

    function computeVocabGameTimeLimit(stepIdx) {
        // Starts at 5.00s and shrinks with a smooth diminishing curve so late steps never chop off whole seconds
        const s = Math.max(0, Number(stepIdx) || 0);
        const minFloor = 1.45;
        const maxSpan = 5.0 - minFloor; // 3.55s
        const decayTau = 14.0;
        const t = minFloor + maxSpan * Math.exp(-s / decayTau);
        return Math.round(t * 100) / 100;
    }

    function computeGeometricPointsGain(streakAfterHit, timeRatioLeft) {
        // Geometric progression: grows multiplicatively with each consecutive hit + bonus for quick reaction
        const safeStreak = Math.max(1, streakAfterHit);
        const geomFactor = Math.pow(1.22, Math.min(safeStreak - 1, 18));
        const speedBonus = 1 + Math.max(0, Math.min(0.5, (timeRatioLeft || 0) * 0.5));
        return Math.max(10, Math.round(25 * geomFactor * speedBonus));
    }

    function stopVocabGameLoop() {
        if (vocabGameRafId) {
            cancelAnimationFrame(vocabGameRafId);
            vocabGameRafId = null;
        }
        vocabGameLastTs = 0;
    }

    function getVocabGamePool() {
        const pool = getCombinedVocabularyEntries('both');
        return (pool || []).filter((item) => item && item.word && item.trans);
    }

    function buildVocabGameRound(stepIdx, modeOverride) {
        const pool = getVocabGamePool();
        if (pool.length < 3) return null;

        const chosenMode = (modeOverride || vocabGameMode || 'random');
        const dir = chosenMode === 'random'
            ? (Math.random() < 0.5 ? 'en2ru' : 'ru2en')
            : chosenMode;

        const targetIdx = Math.floor(Math.random() * pool.length);
        const targetItem = pool[targetIdx];

        const distractors = [];
        const usedIndices = new Set([targetIdx]);
        while (distractors.length < 2 && usedIndices.size < pool.length) {
            const candIdx = Math.floor(Math.random() * pool.length);
            if (!usedIndices.has(candIdx)) {
                usedIndices.add(candIdx);
                distractors.push(pool[candIdx]);
            }
        }

        const promptText = dir === 'en2ru' ? targetItem.word : targetItem.trans;
        const promptLangBadge = dir === 'en2ru' ? 'EN → RU' : 'RU → EN';
        const correctChoiceText = dir === 'en2ru' ? targetItem.trans : targetItem.word;

        const rawChoices = [
            { text: correctChoiceText, isCorrect: true },
            ...distractors.map((d) => ({
                text: dir === 'en2ru' ? d.trans : d.word,
                isCorrect: false
            }))
        ];

        for (let i = rawChoices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = rawChoices[i];
            rawChoices[i] = rawChoices[j];
            rawChoices[j] = tmp;
        }

        const correctLane = rawChoices.findIndex((c) => c.isCorrect);
        const timeLimit = computeVocabGameTimeLimit(stepIdx);

        return {
            dir,
            promptText,
            promptLangBadge,
            targetWord: targetItem.word,
            targetTrans: targetItem.trans,
            lanes: rawChoices,
            correctLane,
            timeLimit
        };
    }

    function restartVocabRunnerGame() {
        stopVocabGameLoop();
        vocabGameActive = false;
        vocabGameOver = false;
        vocabGameFeedback = null;
        startVocabRunnerGame(vocabGameMode);
    }
    window.restartVocabRunnerGame = restartVocabRunnerGame;
    window.startVocabRunnerGame = startVocabRunnerGame;

    function openVocabRunnerIntro(modeArg) {
        stopVocabGameLoop();
        if (modeArg && ['en2ru', 'ru2en', 'random'].includes(modeArg)) {
            vocabGameMode = modeArg;
        }
        const savedBest = parseInt(localStorage.getItem('cents_vocab_game_best_' + currentUser) || '0', 10) || 0;
        vocabGameBestScore = savedBest;
        vocabGameStarted = false;
        vocabGameActive = false;
        vocabGameOver = false;
        vocabGameFeedback = null;
        renderVocabRunnerGame();
    }
    window.openVocabRunnerIntro = openVocabRunnerIntro;

    function startVocabRunnerGame(modeArg) {
        stopVocabGameLoop();
        if (modeArg && ['en2ru', 'ru2en', 'random'].includes(modeArg)) {
            vocabGameMode = modeArg;
        }
        const savedBest = parseInt(localStorage.getItem('cents_vocab_game_best_' + currentUser) || '0', 10) || 0;
        vocabGameBestScore = savedBest;
        vocabGameStarted = true;
        vocabGameScore = 0;
        vocabGameStreak = 0;
        vocabGameStep = 0;
        vocabGameLastGain = 0;
        vocabGameFeedback = null;
        vocabGameOver = false;
        vocabGameOverReason = '';
        vocabGameActive = true;

        vocabGameCurrentRound = buildVocabGameRound(vocabGameStep, vocabGameMode);
        vocabGameTimeTotal = vocabGameCurrentRound ? vocabGameCurrentRound.timeLimit : 5.0;
        vocabGameTimeLeft = vocabGameTimeTotal;

        renderVocabRunnerGame();
        vocabGameLastTs = performance.now();
        vocabGameRafId = requestAnimationFrame(tickVocabRunnerGame);
    }

    function setVocabGameMode(modeKey) {
        if (!['en2ru', 'ru2en', 'random'].includes(modeKey)) return;
        vocabGameMode = modeKey;
        if (!vocabGameStarted) {
            renderVocabRunnerGame();
            return;
        }
        startVocabRunnerGame(modeKey);
    }

    function finishVocabRunnerGame(reasonStr) {
        stopVocabGameLoop();
        vocabGameActive = false;
        vocabGameOver = true;
        vocabGameOverReason = reasonStr || 'Время вышло!';
        if (vocabGameScore > vocabGameBestScore) {
            vocabGameBestScore = vocabGameScore;
            try { localStorage.setItem('cents_vocab_game_best_' + currentUser, String(vocabGameBestScore)); } catch (e) {}
        }
        renderVocabRunnerGame();
    }

    function chooseVocabGameLane(laneIndex) {
        if (!vocabGameActive || vocabGameOver || !vocabGameCurrentRound) return;
        if (vocabGameFeedback) return;

        const chosenLane = Number(laneIndex);
        const isHit = chosenLane === vocabGameCurrentRound.correctLane;

        if (isHit) {
            vocabGameStreak += 1;
            const ratioLeft = vocabGameTimeTotal > 0 ? Math.max(0, vocabGameTimeLeft / vocabGameTimeTotal) : 0;
            const gain = computeGeometricPointsGain(vocabGameStreak, ratioLeft);
            vocabGameScore += gain;
            vocabGameLastGain = gain;
            if (vocabGameScore > vocabGameBestScore) {
                vocabGameBestScore = vocabGameScore;
                try { localStorage.setItem('cents_vocab_game_best_' + currentUser, String(vocabGameBestScore)); } catch (e) {}
            }
            vocabGameFeedback = { laneIdx: chosenLane, isCorrect: true, text: `+${gain}` };
            renderVocabRunnerGame();

            setTimeout(() => {
                if (!vocabGameActive || vocabGameOver) return;
                vocabGameStep += 1;
                vocabGameFeedback = null;
                vocabGameCurrentRound = buildVocabGameRound(vocabGameStep, vocabGameMode);
                vocabGameTimeTotal = vocabGameCurrentRound ? vocabGameCurrentRound.timeLimit : 5.0;
                vocabGameTimeLeft = vocabGameTimeTotal;
                vocabGameLastTs = performance.now();
                renderVocabRunnerGame();
            }, 260);
        } else {
            vocabGameFeedback = { laneIdx: chosenLane, isCorrect: false, text: '✕' };
            renderVocabRunnerGame();
            setTimeout(() => {
                const rightOpt = vocabGameCurrentRound && vocabGameCurrentRound.lanes && vocabGameCurrentRound.lanes[vocabGameCurrentRound.correctLane];
                const rightLabel = rightOpt ? rightOpt.text : '';
                finishVocabRunnerGame(`Неверная дорожка! Правильный ответ: ${rightLabel}`);
            }, 340);
        }
    }

    function tickVocabRunnerGame(nowTs) {
        if (!vocabGameActive || vocabGameOver) return;
        if (!vocabGameLastTs) vocabGameLastTs = nowTs;
        const dt = Math.min(0.1, Math.max(0, (nowTs - vocabGameLastTs) / 1000));
        vocabGameLastTs = nowTs;

        if (!vocabGameFeedback) {
            vocabGameTimeLeft = Math.max(0, vocabGameTimeLeft - dt);
            const barEl = document.getElementById('vocab-game-timer-bar');
            const txtEl = document.getElementById('vocab-game-timer-text');
            const pct = vocabGameTimeTotal > 0 ? Math.max(0, Math.min(100, (vocabGameTimeLeft / vocabGameTimeTotal) * 100)) : 0;
            if (barEl) barEl.style.width = pct.toFixed(1) + '%';
            if (txtEl) txtEl.textContent = vocabGameTimeLeft.toFixed(1) + 's';

            if (vocabGameTimeLeft <= 0) {
                const rightOpt = vocabGameCurrentRound && vocabGameCurrentRound.lanes && vocabGameCurrentRound.lanes[vocabGameCurrentRound.correctLane];
                const rightLabel = rightOpt ? rightOpt.text : '';
                finishVocabRunnerGame(`Время вышло! Правильный ответ: ${rightLabel}`);
                return;
            }
        }

        vocabGameRafId = requestAnimationFrame(tickVocabRunnerGame);
    }

    function renderVocabRunnerGame() {
        const stage = document.getElementById('dictionary-game-stage');
        if (!stage) return;

        const pool = getVocabGamePool();
        if (pool.length < 3) {
            stage.innerHTML = '<div class="card-bg p-8 rounded-3xl text-center border shadow-sm text-xs sm:text-sm sub-text">Для игры нужно минимум 3 слова в словаре.</div>';
            return;
        }

        const modeButtonsIntro = [
            { key: 'en2ru', label: 'EN → RU' },
            { key: 'ru2en', label: 'RU → EN' },
            { key: 'random', label: '🔀 Random' }
        ].map((m) => {
            const cls = vocabGameMode === m.key
                ? 'profile-accent-btn px-4 py-2 rounded-full text-xs font-extrabold cursor-pointer transition'
                : 'custom-styled-select px-4 py-2 rounded-full text-xs font-bold cursor-pointer transition';
            return `<button type="button" onclick="setVocabGameMode('${m.key}')" class="${cls}">${m.label}</button>`;
        }).join('');

        if (!vocabGameStarted) {
            stage.innerHTML = `
                <div class="max-w-2xl mx-auto card-bg border rounded-3xl p-8 sm:p-12 shadow-sm text-center space-y-6">
                    <div class="inline-flex items-center gap-2 text-xs font-extrabold px-3.5 py-1 rounded-full profile-tag">
                        <span>🏃</span>
                        <span>Word Runner • Рекорд: ${vocabGameBestScore}</span>
                    </div>
                    <div class="space-y-2">
                        <h3 class="text-2xl sm:text-3xl font-extrabold tracking-tight">Забег по словам</h3>
                        <p class="text-xs sm:text-sm sub-text max-w-md mx-auto">Выбирай дорожку с правильным переводом на скорость. С каждым верным ответом множитель растёт в геометрической прогрессии.</p>
                    </div>
                    <div class="flex flex-wrap items-center justify-center gap-2">
                        ${modeButtonsIntro}
                    </div>
                    <div class="pt-2">
                        <button type="button" onclick="startVocabRunnerGame(vocabGameMode)" class="profile-accent-btn px-10 py-4 rounded-full text-base sm:text-lg font-black tracking-wide shadow-lg cursor-pointer inline-flex items-center gap-2.5">
                            <span>▶</span>
                            <span>Старт</span>
                        </button>
                    </div>
                </div>
            `;
            return;
        }

        if (!vocabGameCurrentRound) {
            vocabGameCurrentRound = buildVocabGameRound(0, vocabGameMode);
            vocabGameTimeTotal = vocabGameCurrentRound ? vocabGameCurrentRound.timeLimit : 5.0;
            vocabGameTimeLeft = vocabGameTimeTotal;
        }

        const geomMult = Math.pow(1.22, Math.min(Math.max(0, vocabGameStreak), 18)).toFixed(2);
        const speedKmh = (14 + Math.min(28, vocabGameStreak * 0.9)).toFixed(1);
        const rushDur = Math.max(0.24, 0.72 - Math.min(0.45, vocabGameStreak * 0.025)).toFixed(2) + 's';
        const pct = vocabGameTimeTotal > 0 ? Math.max(0, Math.min(100, (vocabGameTimeLeft / vocabGameTimeTotal) * 100)) : 0;

        const modeButtons = [
            { key: 'en2ru', label: 'EN → RU' },
            { key: 'ru2en', label: 'RU → EN' },
            { key: 'random', label: '🔀 Random' }
        ].map((m) => {
            const cls = vocabGameMode === m.key
                ? 'profile-accent-btn px-3.5 py-1.5 rounded-full text-xs font-extrabold cursor-pointer transition'
                : 'custom-styled-select px-3.5 py-1.5 rounded-full text-xs font-bold cursor-pointer transition';
            return `<button type="button" onclick="setVocabGameMode('${m.key}')" class="${cls}">${m.label}</button>`;
        }).join('');

        const lanesHtml = (vocabGameCurrentRound.lanes || []).map((lane, lIdx) => {
            let extraCls = '';
            if (vocabGameFeedback && vocabGameFeedback.laneIdx === lIdx) {
                extraCls = vocabGameFeedback.isCorrect ? 'is-lane-correct' : 'is-lane-wrong';
            }
            const keyHint = ['← / A', '↑ / W', '→ / D'][lIdx] || '';
            return `
                <button type="button" onclick="chooseVocabGameLane(${lIdx})" ${(!vocabGameActive || vocabGameOver) ? 'disabled' : ''}
                        class="vocab-lane-gate ${extraCls} card-bg border rounded-2xl p-4 flex flex-col justify-between items-center text-center min-h-[112px] cursor-pointer relative">
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full profile-tag">${keyHint}</span>
                    <span class="text-sm sm:text-base font-extrabold leading-snug my-2">${escapeHtml(lane.text)}</span>
                    <span class="text-[10px] font-semibold sub-text">Дорожка ${lIdx + 1}</span>
                </button>
            `;
        }).join('');

        const runnerLanePos = vocabGameFeedback ? vocabGameFeedback.laneIdx : 1;
        const runnerLeftPct = runnerLanePos === 0 ? '16.6%' : (runnerLanePos === 2 ? '83.3%' : '50%');

        const overlayHtml = vocabGameOver ? `
            <div class="box-content-bg border rounded-2xl p-5 text-center space-y-3">
                <div class="text-xs font-extrabold uppercase tracking-wider text-rose-500">Забег окончен</div>
                <div class="text-sm sm:text-base font-bold">${escapeHtml(vocabGameOverReason)}</div>
                <div class="text-xs sub-text">Итоговый счёт: <strong class="adaptive-title">${vocabGameScore}</strong> • Серия: <strong class="adaptive-title">${vocabGameStreak}</strong> • Рекорд: <strong class="adaptive-title">${vocabGameBestScore}</strong></div>
                <button type="button" id="vocab-game-restart-btn" onclick="restartVocabRunnerGame(); event.stopPropagation();" class="profile-accent-btn px-6 py-2.5 rounded-full text-xs font-extrabold cursor-pointer">↻ Бежать снова</button>
            </div>
        ` : (!vocabGameActive ? `
            <div class="text-center">
                <button type="button" onclick="startVocabRunnerGame(vocabGameMode)" class="profile-accent-btn px-6 py-2.5 rounded-full text-xs font-extrabold cursor-pointer">▶ Старт забега</button>
            </div>
        ` : '');

        stage.innerHTML = `
            <div class="max-w-3xl mx-auto card-bg border rounded-3xl p-5 sm:p-6 shadow-sm space-y-5">
                <div class="flex flex-wrap items-center justify-between gap-3">
                    <div class="flex flex-wrap items-center gap-1.5">${modeButtons}</div>
                    <div class="flex flex-wrap items-center gap-2 text-xs font-extrabold">
                        <span class="px-3 py-1 rounded-full profile-tag">Счёт: ${vocabGameScore}</span>
                        <span class="px-3 py-1 rounded-full box-content-bg border">×${geomMult}</span>
                        <span class="px-3 py-1 rounded-full box-content-bg border">${speedKmh} км/ч</span>
                        <span class="px-3 py-1 rounded-full box-content-bg border">Рекорд: ${vocabGameBestScore}</span>
                    </div>
                </div>

                <!-- Timer Bar -->
                <div class="space-y-1.5">
                    <div class="flex items-center justify-between text-xs font-bold">
                        <span class="sub-text">Лимит шага: ${vocabGameTimeTotal.toFixed(2)}s (шаг #${vocabGameStep + 1})</span>
                        <span id="vocab-game-timer-text" class="tabular-nums accent-tone-text">${vocabGameTimeLeft.toFixed(1)}s</span>
                    </div>
                    <div class="w-full h-2.5 rounded-full box-content-bg border overflow-hidden">
                        <div id="vocab-game-timer-bar" class="h-full transition-none rounded-full" style="width:${pct.toFixed(1)}%; background-color: var(--accent-color);"></div>
                    </div>
                </div>

                <!-- 3-Lane Track with Runner & Prompt Word Below -->
                <div class="vocab-runner-track ${vocabGameActive && !vocabGameOver ? 'is-running' : ''} border rounded-3xl p-4 sm:p-5 space-y-4" style="--runner-rush-dur:${rushDur};">
                    <div class="grid grid-cols-3 gap-3 relative">
                        <div class="vocab-lane-dash pointer-events-none absolute top-0 bottom-0 left-1/3 w-[2px]"></div>
                        <div class="vocab-lane-dash pointer-events-none absolute top-0 bottom-0 left-2/3 w-[2px]"></div>
                        ${lanesHtml}
                    </div>

                    <div class="relative h-12 border-t border-dashed border-gray-300 dark:border-zinc-700 flex items-center">
                        <div class="vocab-runner-avatar absolute transition-all duration-150 flex items-center gap-1.5" style="left:${runnerLeftPct}; transform: translateX(-50%); --runner-bob-dur:0.35s;">
                            <span class="text-2xl sm:text-3xl select-none">🏃</span>
                            ${vocabGameFeedback ? `<span class="text-xs font-black px-2 py-0.5 rounded-full ${vocabGameFeedback.isCorrect ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'}">${vocabGameFeedback.text}</span>` : ''}
                        </div>
                    </div>

                    <div class="box-content-bg border rounded-2xl p-4 text-center space-y-1">
                        <span class="inline-block text-[10px] font-extrabold px-2.5 py-0.5 rounded-full profile-tag">${vocabGameCurrentRound.promptLangBadge}</span>
                        <div class="text-xl sm:text-2xl font-black tracking-tight">${escapeHtml(vocabGameCurrentRound.promptText)}</div>
                    </div>
                </div>

                ${overlayHtml}
            </div>
        `;
    }

    document.addEventListener('keydown', function (e) {
        const dictView = document.getElementById('view-dictionary');
        if (!dictView || dictView.classList.contains('hide') || dictionaryViewMode !== 'game' || !vocabGameActive || vocabGameOver) return;
        const activeTag = document.activeElement && document.activeElement.tagName;
        if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') return;
        if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') {
            e.preventDefault();
            chooseVocabGameLane(0);
        } else if (e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') {
            e.preventDefault();
            chooseVocabGameLane(1);
        } else if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') {
            e.preventDefault();
            chooseVocabGameLane(2);
        }
    });

    function setDictionaryViewMode(mode) {
        dictionaryViewMode = (mode === 'list' || mode === 'game') ? mode : 'cards';
        if (dictionaryViewMode !== 'game') {
            stopVocabGameLoop();
            vocabGameActive = false;
        }
        const cardsBtn = document.getElementById('dict-mode-cards-btn');
        const listBtn = document.getElementById('dict-mode-list-btn');
        const gameBtn = document.getElementById('dict-mode-game-btn');
        const stageEl = document.getElementById('dictionary-flashcards-stage');
        const gridEl = document.getElementById('dictionary-container');
        const gameStageEl = document.getElementById('dictionary-game-stage');

        if (cardsBtn) {
            cardsBtn.className = dictionaryViewMode === 'cards'
                ? 'profile-accent-btn px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition'
                : 'custom-styled-select px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition';
        }
        if (listBtn) {
            listBtn.className = dictionaryViewMode === 'list'
                ? 'profile-accent-btn px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition'
                : 'custom-styled-select px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition';
        }
        if (gameBtn) {
            gameBtn.className = dictionaryViewMode === 'game'
                ? 'profile-accent-btn px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition'
                : 'custom-styled-select px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition';
        }
        if (stageEl) stageEl.classList.toggle('hide', dictionaryViewMode !== 'cards');
        if (gridEl) gridEl.classList.toggle('hide', dictionaryViewMode !== 'list');
        if (gameStageEl) gameStageEl.classList.toggle('hide', dictionaryViewMode !== 'game');
        if (dictionaryViewMode === 'game') {
            openVocabRunnerIntro(vocabGameMode);
        }
        loadDictionaryView();
    }
    window.setDictionaryViewMode = setDictionaryViewMode;

    function setDictionarySourceFilter(srcKey) {
        const valid = ['mine', 'accent', 'both'];
        dictionarySourceFilter = valid.includes(srcKey) ? srcKey : 'both';
        flashcardIndex = 0;
        flashcardRevealed = false;
        flashcardCustomOrder = null;

        document.querySelectorAll('.dict-src-btn').forEach((btn) => {
            const isActive = btn.getAttribute('data-dict-src') === dictionarySourceFilter;
            btn.className = isActive
                ? 'dict-src-btn profile-accent-btn px-3.5 py-1.5 rounded-full text-xs font-bold cursor-pointer transition'
                : 'dict-src-btn custom-styled-select px-3.5 py-1.5 rounded-full text-xs font-bold cursor-pointer transition';
        });

        loadDictionaryView();
    }

    let isCardFlipAnimating = false;
    let cardFlipTimeoutId = null;

    const ENGLISH_WORD_EXPLANATIONS = {
        abundant: 'Present in large quantities; plentiful and more than enough.',
        accelerate: 'To increase in speed or cause something to happen faster.',
        accumulate: 'To gradually gather or collect over time.',
        accurate: 'Correct, exact, and free from errors.',
        acknowledge: 'To accept or admit that something exists, is true, or has happened.',
        acquire: 'To gain, learn, or obtain something through effort or experience.',
        acute: 'Severe or intense in degree; also sharp in perception or judgment.',
        adapt: 'To adjust or change to fit new conditions or an environment.',
        adequate: 'Satisfactory or acceptable in quality or quantity, though not abundant.',
        adjacent: 'Next to or adjoining something else.',
        adjust: 'To alter slightly to achieve a desired fit, balance, or result.',
        advocate: 'To publicly support or recommend a particular cause or policy.',
        affect: 'To produce a change in or have an influence on something.',
        aggregate: 'Formed by combining separate elements into a single total or whole.',
        allocate: 'To distribute resources, funds, or time for a specific purpose.',
        alter: 'To change in character, form, or structure without making entirely different.',
        ambiguous: 'Open to more than one interpretation; unclear or not exact.',
        ample: 'Plentiful, spacious, or more than sufficient.',
        analogous: 'Comparable in certain respects, typically in a way that helps explain something.',
        analyze: 'To examine something carefully in detail in order to understand or explain it.',
        anomaly: 'Something that deviates from what is standard, normal, or expected.',
        anticipate: 'To expect or predict something ahead of time and prepare for it.',
        apparent: 'Clearly visible or understood; seeming real or true on the surface.',
        applicable: 'Relevant or appropriate to apply to a particular situation.',
        approximate: 'Close to the actual value or amount, though not completely exact.',
        arbitrary: 'Based on random choice or personal whim rather than reason or a fixed system.',
        assert: 'To state a fact or belief confidently and forcefully.',
        assess: 'To evaluate or estimate the nature, ability, or quality of something.',
        assign: 'To allocate a job, task, role, or value to someone or something.',
        assume: 'To suppose something is the case without direct proof.',
        attain: 'To succeed in achieving or reaching a goal, level, or standard.',
        attribute: 'A quality or feature regarded as a characteristic of someone or something; or to regard something as caused by.',
        augment: 'To make something greater by adding to it; increase.',
        authentic: 'Genuine, real, and true to origin rather than a copy.',
        autonomous: 'Having the freedom to govern oneself or control one’s own affairs.',
        avert: 'To prevent or ward off an undesirable occurrence or danger.',
        bias: 'A preference or prejudice for or against one thing over another, often unfair.',
        bolster: 'To support, strengthen, or prop up an idea, argument, or system.',
        capable: 'Having the ability, fitness, or quality necessary to do something.',
        capacity: 'The maximum amount that something can contain or produce; also ability.',
        catalyst: 'Something that precipitates an event or speeds up a process or change.',
        cease: 'To come or bring to an end; stop.',
        challenge: 'A demanding task or situation; or to dispute or question a claim.',
        coherent: 'Logical, consistent, and easy to understand as a whole.',
        coincide: 'To occur at the same time or correspond closely in nature or idea.',
        collapse: 'To fall down or fail suddenly in structure, order, or function.',
        commence: 'To begin or start.',
        compel: 'To force or oblige someone to do something.',
        compensate: 'To make up for a loss, weakness, or counterbalancing effect.',
        compile: 'To collect and assemble information, data, or items into a list or set.',
        complement: 'To add to something in a way that enhances or completes its qualities.',
        complex: 'Consisting of many interconnected parts; not simple.',
        component: 'A constituent part or element of a larger system or whole.',
        comprise: 'To consist of, include, or be made up of specific parts.',
        conclusive: 'Decisive, convincing, and putting an end to doubt.',
        concurrent: 'Existing, happening, or operating at the same time.',
        conducive: 'Making a certain outcome likely or possible; favorable.',
        confer: 'To grant a title, right, or benefit; or to consult and discuss.',
        confine: 'To keep or restrict someone or something within certain limits.',
        conflict: 'A serious disagreement or clash between ideas, interests, or forces.',
        conform: 'To comply with rules, standards, or expected behavior.',
        confront: 'To face, meet, or deal with a problem or opposition directly.',
        conjecture: 'An opinion or conclusion formed on the basis of incomplete information.',
        consecutive: 'Following continuously in unbroken or logical order.',
        consequence: 'A result or effect of an action or condition.',
        conserve: 'To protect and preserve something from harm, loss, or waste.',
        considerable: 'Notably large in size, amount, or extent.',
        consistent: 'Acting or behaving in the same way over time; compatible without contradiction.',
        consolidate: 'To combine into a single stronger or more effective whole.',
        conspicuous: 'Standing out so as to be clearly visible or attracting notice.',
        constitute: 'To form, make up, or establish the elements of something.',
        constrain: 'To severely restrict or limit someone’s actions or options.',
        construct: 'To build or form an idea, model, or structure systematically.',
        consume: 'To use up a resource, fuel, time, or energy.',
        contaminate: 'To make something impure or unusable by adding a harmful substance.',
        contemplate: 'To think deeply and carefully about something.',
        contemporary: 'Belonging to or occurring in the present time, or of the same era.',
        contend: 'To assert something as a position in an argument, or to compete.',
        context: 'The circumstances, surrounding text, or background that clarify meaning.',
        contradict: 'To assert the opposite of a statement or be in conflict with facts.',
        contrary: 'Opposite in nature, direction, or meaning.',
        contribute: 'To help bring about a result or provide part of what is needed.',
        controversial: 'Giving rise to or likely to cause public disagreement or debate.',
        converge: 'To tend to meet or come together at a single point or result.',
        convert: 'To change something from one form, system, or use into another.',
        convey: 'To communicate or express an idea, feeling, or meaning clearly.',
        convince: 'To persuade someone thoroughly that something is true or right.',
        correlate: 'To have a mutual relationship or connection in which one thing affects another.',
        correspond: 'To match, align with, or be similar to something else.',
        corroborate: 'To confirm or give support to a statement, theory, or finding with evidence.',
        crucial: 'Decisive or critical to the success or outcome of something.',
        cultivate: 'To foster the growth or development of a skill, crop, or relationship.',
        cumulative: 'Increasing or growing in quantity or effect by successive additions.',
        curtail: 'To reduce in extent or quantity; impose a restriction on.',
        decisive: 'Settling an issue clearly and producing a definite result.',
        decline: 'A gradual or continuous loss of strength, numbers, quality, or value.',
        deduce: 'To arrive at a conclusion by reasoning from known facts or premises.',
        deficiency: 'A lack or shortage of something necessary or required.',
        definite: 'Clearly stated or decided; not vague or doubtful.',
        deflect: 'To cause something to change direction or turn aside.',
        degrade: 'To break down, lower in quality or status, or wear away.',
        deliberate: 'Done consciously and intentionally; or carefully considered.',
        demonstrate: 'To clearly show the existence or truth of something by evidence or proof.',
        denote: 'To be a sign of or serve as a specific name or symbol for something.',
        dense: 'Closely packed together in space or content; having high density.',
        depict: 'To represent or show in words, a picture, or a description.',
        deplete: 'To use up the supply or resources of something.',
        derive: 'To obtain something from a specified source, or reach a formula/conclusion logically.',
        detect: 'To discover or identify the presence or fact of something.',
        deteriorate: 'To become progressively worse in quality, condition, or strength.',
        determine: 'To establish or decide something firmly after investigation or calculation.',
        deviate: 'To depart from an established course, norm, or standard.',
        devise: 'To plan or invent a method, system, or strategy carefully.',
        differentiate: 'To recognize or show what makes things different from one another.',
        diffuse: 'To spread out widely over a space or medium; or spread gradually.',
        dilute: 'To make a liquid weaker or thinner by adding water or another solvent.',
        diminish: 'To make or become less in size, importance, or intensity.',
        discrepancy: 'A lack of compatibility or similarity between two or more facts or figures.',
        discrete: 'Individually separate and distinct.',
        disperse: 'To distribute or scatter over a wide area.',
        displace: 'To take over the place or position of someone or something else.',
        disproportionate: 'Too large or too small in comparison with something else.',
        disrupt: 'To interrupt an event, activity, or process by causing a disturbance.',
        dissipate: 'To disappear or scatter gradually, or waste energy/heat.',
        distinct: 'Recognizably different in nature from something else of a similar type.',
        distinguish: 'To recognize or treat someone or something as different.',
        distort: 'To pull or twist out of shape, or misrepresent facts or meaning.',
        distribute: 'To share out or deliver something among a number of recipients or spaces.',
        diverse: 'Showing a great deal of variety; very different from one another.',
        diverge: 'To separate and go in different directions from a common point.',
        divert: 'To cause something to change course or turn attention away from something.',
        domain: 'A specific sphere of activity, knowledge, or influence.',
        dominant: 'Having power and influence over others; most prominent or frequent.',
        drastic: 'Likely to have a strong, far-reaching, or severe effect.',
        dubious: 'Hesitating or doubting; not to be relied upon.',
        duration: 'The time during which something continues or lasts.',
        dynamic: 'Characterized by constant change, activity, or progress.',
        elaborate: 'Developed or presented in great detail; or to explain further.',
        elevate: 'To raise or lift something to a higher position, level, or status.',
        eliminate: 'To completely remove or get rid of something unwanted or unnecessary.',
        elusive: 'Difficult to find, catch, define, or achieve.',
        embed: 'To fix an object or idea firmly and deeply in a surrounding mass or text.',
        emerge: 'To move out of or away from something and come into view or existence.',
        emit: 'To produce and discharge something, especially gas, light, heat, or radiation.',
        empirical: 'Based on observation or experiment rather than theory alone.',
        enable: 'To give someone the authority, means, or ability to do something.',
        encounter: 'To unexpectedly be faced with or experience something.',
        endeavor: 'An earnest attempt or effort to achieve something.',
        endorse: 'To declare one’s public approval or support of someone or something.',
        endure: 'To suffer something painful or difficult patiently, or last over time.',
        enhance: 'To intensify, increase, or further improve the quality or value of something.',
        enormous: 'Very large in scale, quantity, or extent.',
        entail: 'To involve something as a necessary or inevitable part or consequence.',
        entity: 'Something with distinct and independent existence.',
        enumerate: 'To mention a number of things one by one; list.',
        equate: 'To consider one thing to be the same as or equivalent to another.',
        equilibrium: 'A state in which opposing forces or influences are balanced.',
        equivalent: 'Equal in value, amount, function, or meaning.',
        erroneous: 'Wrong; incorrect.',
        establish: 'To set up on a firm basis or prove beyond doubt.',
        estimate: 'A rough calculation of value, number, quantity, or extent.',
        evaluate: 'To form an idea of the amount, number, or value of; assess.',
        evaporate: 'To turn from liquid into vapor; or disappear gradually.',
        evident: 'Plain or obvious; clearly seen or understood.',
        evolve: 'To develop gradually, especially from a simple to a more complex form.',
        exacerbate: 'To make a problem, bad situation, or negative feeling worse.',
        exceed: 'To be greater in number or size than a quantity, limit, or expectation.',
        excerpt: 'A short extract or passage taken from a text, film, or piece of music.',
        excessive: 'More than is necessary, normal, or desirable.',
        exclude: 'To deny access to or leave out of consideration.',
        exemplify: 'To be a typical example of something.',
        exhaust: 'To use up completely; or tire out thoroughly.',
        expand: 'To become or make larger or more extensive.',
        expedite: 'To make an action or process happen sooner or be accomplished more quickly.',
        explicit: 'Stated clearly and in detail, leaving no room for confusion or doubt.',
        exploit: 'To make full use of and derive benefit from a resource; or take unfair advantage.',
        exponent: 'A person who supports an idea or theory; or in math, the power to which a number is raised.',
        expose: 'To make something visible by uncovering it, or subject it to an influence.',
        extensive: 'Covering or affecting a large area or range.',
        external: 'Belonging to or forming the outer surface or structure of something.',
        extract: 'To remove or take out something, especially by effort or force.',
        extrapolate: 'To estimate or conclude something from known facts by projecting a trend.',
        facilitate: 'To make an action or process easier.',
        factor: 'A circumstance, fact, or influence that contributes to a result; or a divisor in math.',
        feasible: 'Possible to do easily or conveniently; achievable.',
        feature: 'A distinctive attribute or aspect of something.',
        finite: 'Having limits or bounds; not infinite.',
        fluctuate: 'To rise and fall irregularly in number or amount.',
        formulate: 'To create or prepare a plan, system, or statement methodically.',
        foster: 'To encourage or promote the development of something favorable.',
        fraction: 'A small or tiny part, amount, or proportion of a whole.',
        fragment: 'A small part broken off or detached from something.',
        framework: 'A basic supporting structure underlying a system, concept, or text.',
        frequency: 'The rate at which something occurs or is repeated over a period of time.',
        fundamental: 'Forming a necessary base or core; of central importance.',
        generate: 'To produce or create something.',
        gradual: 'Taking place or progressing slowly or by degrees.',
        grant: 'To agree to give or allow something requested.',
        guarantee: 'A formal promise or assurance that certain conditions will be met.',
        hamper: 'To hinder or impede the movement or progress of.',
        hazard: 'A danger or risk.',
        hierarchy: 'A system in which members or concepts are ranked according to relative status or authority.',
        hypothesis: 'A supposition or proposed explanation made as a starting point for investigation.',
        identical: 'Similar in every detail; exactly alike.',
        identify: 'To establish or indicate who or what someone or something is.',
        ideology: 'A system of ideas and ideals, especially forming the basis of economic or political theory.',
        illustrate: 'To explain or make something clear by using examples, comparisons, or diagrams.',
        imminent: 'About to happen very soon.',
        impact: 'A marked effect or influence; or the action of one object hitting another.',
        implement: 'To put a decision, plan, or system into effect.',
        implicit: 'Suggested though not directly expressed.',
        imply: 'To strongly suggest the truth or existence of something without stating it directly.',
        impose: 'To force a rule, duty, or burden on someone.',
        incentive: 'A thing that motivates or encourages someone to do something.',
        incidence: 'The occurrence, rate, or frequency of a disease, crime, or phenomenon.',
        incorporate: 'To take in or contain something as part of a whole.',
        increment: 'An increase or addition, especially one of a series on a fixed scale.',
        induce: 'To succeed in bringing about or giving rise to a state or process.',
        inevitable: 'Certain to happen; unavoidable.',
        infer: 'To deduce or conclude information from evidence and reasoning rather than explicit statements.',
        inherent: 'Existing in something as a permanent, essential, or characteristic attribute.',
        inhibit: 'To hinder, restrain, or prevent an action or process.',
        initial: 'Existing or occurring at the beginning.',
        initiate: 'To cause a process or action to begin.',
        innovative: 'Featuring new methods; advanced and original.',
        insight: 'The capacity to gain an accurate and deep intuitive understanding of a subject.',
        inspect: 'To look at something closely, especially to assess its condition or quality.',
        instance: 'An example or single occurrence of something.',
        institute: 'To establish or introduce a system, rule, or organization.',
        integral: 'Necessary to make a whole complete; essential.',
        integrate: 'To combine two or more things so that they work together effectively.',
        intense: 'Of extreme force, degree, or strength.',
        interact: 'To act in such a way as to have an effect on each other.',
        intermittent: 'Occurring at irregular intervals; not continuous or steady.',
        interpret: 'To explain the meaning of information, data, or a text.',
        interval: 'An intervening time or space.',
        intervene: 'To come between so as to prevent or alter a result or course of events.',
        intricate: 'Very complicated or detailed.',
        intrinsic: 'Belonging naturally; essential.',
        invade: 'To enter an area or system to take control or disrupt.',
        invariable: 'Never changing; constant.',
        inverse: 'Opposite or reverse in position, order, or effect.',
        investigate: 'To carry out systematic research or examination to discover facts.',
        invoke: 'To cite or appeal to a rule, authority, or principle as support.',
        isolate: 'To cause a person or thing to be or remain alone or apart from others.',
        issue: 'An important topic or problem for debate or discussion.',
        juxtapose: 'To place or deal with close together for contrasting effect.',
        keen: 'Having or showing eagerness or enthusiasm; or sharp and perceptive.',
        laborious: 'Requiring considerable time and effort.',
        latent: 'Existing but not yet developed or manifest; hidden.',
        launch: 'To start or set in motion a plan, product, or campaign.',
        legitimate: 'Conforming to the law or to rules; able to be defended with logic or justification.',
        levy: 'An amount of tax or fee imposed and collected by authority.',
        liable: 'Responsible by law; or likely to do or experience something.',
        likewise: 'In the same way; also.',
        limitation: 'A limiting rule or circumstance; a restriction.',
        linear: 'Arranged in or extending along a straight line; sequential.',
        link: 'A relationship or connection between two or more things.',
        locate: 'To discover the exact place or position of something.',
        magnitude: 'The great size or extent of something.',
        maintain: 'To cause or enable a condition or situation to continue; or assert.',
        manifest: 'Clear or obvious to the eye or mind; to show clearly.',
        manipulate: 'To handle or control a tool, data, or situation skillfully or unfairly.',
        marginal: 'Minor and not important; or relating to an edge or limit.',
        maximize: 'To make as large or great as possible.',
        mechanism: 'A system of parts working together in a machine or process.',
        mediate: 'To intervene between people or sides in a dispute in order to bring about agreement.',
        merge: 'To combine or cause to combine to form a single entity.',
        methodical: 'Done according to a systematic or established procedure.',
        migrate: 'To move from one region or habitat to another.',
        minimize: 'To reduce something, especially something unwanted, to the smallest possible amount.',
        modify: 'To make partial or minor changes to something.',
        monitor: 'To observe and check the progress or quality of something over a period of time.',
        monopolize: 'To have or take the greatest share of something; dominate.',
        mutually: 'In a way that is shared or experienced equally by two or more parties.',
        negligible: 'So small or unimportant as to be not worth considering; insignificant.',
        network: 'An interconnected group or system.',
        neutralize: 'To make something ineffective or harmless by counteracting its effect.',
        nevertheless: 'In spite of that; however.',
        norm: 'Something that is usual, typical, or standard.',
        notion: 'A conception of or belief about something.',
        notorious: 'Famous or well known, typically for something bad.',
        novel: 'New and not resembling something formerly known or used.',
        nurture: 'To care for and encourage the growth or development of.',
        objective: 'Not influenced by personal feelings or opinions in considering and representing facts.',
        obscure: 'Not discovered or known about; uncertain; or difficult to understand.',
        observe: 'To notice or perceive something; or follow a rule or custom.',
        obsolete: 'No longer produced or used; out of date.',
        obtain: 'To get, acquire, or secure something.',
        obvious: 'Easily perceived or understood; clear.',
        occupy: 'To reside in or fill a place, time, or role.',
        occur: 'To happen; take place.',
        offset: 'To counteract or balance out something by having an opposite effect.',
        omit: 'To leave out or exclude someone or something, either intentionally or forgetfully.',
        ongoing: 'Continuing; still in progress.',
        opponent: 'Someone who competes with or opposes another in a contest, game, or argument.',
        optimize: 'To make the best or most effective use of a situation, resource, or design.',
        option: 'A thing that is or may be chosen.',
        orient: 'To align or position something relative to a direction, goal, or context.',
        originate: 'To have a specified beginning; come into existence.',
        outcome: 'The way a thing turns out; a consequence.',
        output: 'The amount of something produced by a person, machine, or industry.',
        overall: 'Taking everything into account; in general.',
        overlap: 'To extend over so as to cover partly; share common elements.',
        overlook: 'To fail to notice; or look out over from above.',
        overwhelm: 'To have a strong emotional or physical effect on; overpower.',
        paradox: 'A seemingly absurd or self-contradictory statement that may prove to be true.',
        parallel: 'Side by side and having the same distance continuously between them; similar.',
        parameter: 'A numerical or other measurable factor forming one of a set that defines a system.',
        paramount: 'More important than anything else; supreme.',
        partial: 'Existing only in part; incomplete; or biased.',
        participate: 'To take part in an action or endeavor.',
        particle: 'A minute portion of matter.',
        passive: 'Accepting or allowing what happens or what others do, without active response.',
        pattern: 'A repeated or regular arrangement or sequence.',
        peak: 'The point of highest activity, quality, or achievement.',
        perceive: 'To become aware or conscious of something through the senses or mind.',
        perennial: 'Lasting or existing for a long or apparently infinite time; enduring.',
        permeate: 'To spread or diffuse throughout.',
        perpetuate: 'To make something continue indefinitely.',
        persist: 'To continue firmly or obstinately in an opinion or a course of action.',
        perspective: 'A particular attitude toward or way of regarding something; a point of view.',
        pertinent: 'Relevant or applicable to a particular matter.',
        phenomenon: 'A fact or situation that is observed to exist or happen.',
        pivot: 'A central point on which a mechanism turns or a major shift depends.',
        plausible: 'Seeming reasonable or probable.',
        pledge: 'A solemn promise or undertaking.',
        polarity: 'The state of having two opposite or contradictory tendencies, opinions, or poles.',
        policy: 'A course or principle of action adopted or proposed by an organization or individual.',
        portion: 'A part of a whole.',
        pose: 'To present or constitute a problem, danger, or question.',
        positive: 'Constructive, optimistic, or greater than zero.',
        potential: 'Having or showing the capacity to develop into something in the future.',
        pragmatic: 'Dealing with things sensibly and realistically in a way that is based on practical considerations.',
        precede: 'To come before in time, order, or position.',
        precise: 'Marked by exactness and accuracy of expression or detail.',
        preclude: 'To prevent from happening; make impossible.',
        predominant: 'Present as the strongest or main element.',
        preliminary: 'Denoting an action or event preceding or done in preparation for something fuller or more important.',
        premise: 'A previous statement or proposition from which another is inferred or follows as a conclusion.',
        preoccupation: 'The state or condition of being preoccupied with something.',
        presume: 'To suppose that something is the case on the basis of probability.',
        prevalent: 'Widespread in a particular area or at a particular time.',
        previous: 'Existing or occurring before in time or order.',
        primary: 'Of chief importance; principal.',
        prime: 'Of the best possible quality; or a number divisible only by itself and 1.',
        principal: 'First in order of importance; main.',
        principle: 'A fundamental truth or proposition that serves as the foundation for a system of belief or behavior.',
        prior: 'Existing or coming before in time, order, or importance.',
        priority: 'The fact or condition of being regarded or treated as more important than others.',
        proceed: 'To begin or continue a course of action.',
        process: 'A series of actions or steps taken in order to achieve a particular end.',
        proclaim: 'To announce officially or publicly.',
        produce: 'To make or manufacture from components or raw materials.',
        proficient: 'Competent or skilled in doing or using something.',
        profound: 'Very great or intense; having or showing great knowledge or insight.',
        prohibit: 'To formally forbid something by law, rule, or other authority.',
        project: 'An individual or collaborative enterprise; or to estimate or forecast.',
        proliferate: 'To increase rapidly in numbers; multiply.',
        prolong: 'To extend the duration of.',
        promote: 'To further the progress of; support or actively encourage.',
        prompt: 'Done without delay; or to cause or bring about an action.',
        proportion: 'A part, share, or number considered in comparative relation to a whole.',
        propose: 'To put forward an idea or plan for consideration or discussion.',
        prospect: 'The possibility or likelihood of some future event occurring.',
        protocol: 'An official procedure or system of rules.',
        provoke: 'To stimulate or give rise to a reaction or emotion.',
        proximity: 'Nearness in space, time, or relationship.',
        prudent: 'Acting with or showing care and thought for the future.',
        publish: 'To prepare and issue books, journals, or information for public distribution.',
        purchase: 'To acquire something by paying for it.',
        pursue: 'To follow or engage in an activity, goal, or line of inquiry.',
        qualify: 'To be entitled to a particular benefit or fulfill a necessary condition; or limit/modify.',
        quantitative: 'Relating to, measuring, or measured by the quantity of something rather than its quality.',
        radical: 'Relating to or affecting the fundamental nature of something; far-reaching.',
        random: 'Made, done, happening, or chosen without method or conscious decision.',
        range: 'The area of variation between upper and lower limits on a particular scale.',
        ratio: 'The quantitative relation between two amounts showing the number of times one value contains or is contained within the other.',
        rational: 'Based on or in accordance with reason or logic.',
        reconcile: 'To restore friendly relations between; or make two conflicting ideas or facts consistent.',
        recover: 'To return to a normal state of health, mind, or strength; or regain possession of.',
        refine: 'To remove impurities or unwanted elements from; or improve and make more precise.',
        reflect: 'To throw back light or heat; or think deeply or carefully about.',
        reform: 'To make changes in something, typically a social, political, or economic institution or practice, to improve it.',
        refute: 'To prove a statement or theory to be wrong or false.',
        regime: 'A system or ordered way of doing things; or a government.',
        regulate: 'To control or maintain the rate or speed of a machine or process so that it operates properly.',
        reinforce: 'To strengthen or support an object or idea, especially with additional material or evidence.',
        reject: 'To dismiss as inadequate, inappropriate, or not to one’s taste.',
        reluctant: 'Unwilling and hesitant; disinclined.',
        rely: 'To depend on with full trust or confidence.',
        remedy: 'A successful way of curing a problem or dealing with a difficult situation.',
        remote: 'Far away in distance or time; or having very little connection with.',
        render: 'To cause to be or become; or provide or give.',
        renew: 'To resume an activity after an interruption; or make like new again.',
        repeal: 'To revoke or annul a law or act of parliament.',
        replace: 'To take the place of; or put something new in the place of.',
        replicate: 'To make an exact copy of; or repeat a scientific study or experiment.',
        resent: 'To feel bitterness or indignation at a circumstance, action, or person.',
        reserve: 'To retain for future use; or a supply of a commodity not needed for immediate use.',
        resilient: 'Able to withstand or recover quickly from difficult conditions.',
        resolve: 'To settle or find a solution to a problem or dispute.',
        resource: 'A stock or supply of money, materials, staff, and other assets that can be drawn on.',
        respond: 'To say something in reply; or react to a stimulus or situation.',
        restore: 'To bring back or re-establish a previous right, practice, or situation.',
        restrain: 'To prevent someone or something from doing something; keep under control.',
        restrict: 'To put a limit on; keep under control.',
        resume: 'To begin again or continue after a pause or interruption.',
        retain: 'To continue to have; keep possession of.',
        retreat: 'To withdraw from an enemy or position; or move back.',
        retrieve: 'To get or bring something back from somewhere.',
        reveal: 'To make previously unknown or secret information known to others.',
        reverse: 'Going in the opposite direction; or to turn the other way around.',
        revise: 'To reconsider and alter something in the light of further evidence or to review study material.',
        revive: 'To restore to life or consciousness; or give new strength or vigor to.',
        rigid: 'Unable to bend or be forced out of shape; not flexible.',
        robust: 'Strong and healthy; or able to withstand or overcome adverse conditions.',
        rotate: 'To move or cause to move in a circle round an axis or center.',
        routine: 'A sequence of actions regularly followed; a fixed program.',
        rudimentary: 'Involving or limited to basic principles; elementary.',
        rupture: 'An instance of breaking or bursting suddenly and completely.',
        sacred: 'Connected with God or a god or dedicated to a religious purpose and so deserving veneration.',
        salient: 'Most noticeable or important.',
        sample: 'A small part or quantity intended to show what the whole is like.',
        sanction: 'Official permission or approval for an action; or a penalty for disobeying a rule.',
        saturate: 'To hold as much water or other fluid as can be absorbed; or cause something to become thoroughly soaked.',
        scale: 'Each of a series of marks or points at regular intervals used to measure something; or the relative size of something.',
        scarce: 'Insufficient for the demand; rare.',
        scenario: 'A written outline or model of an expected or possible sequence of events.',
        scheme: 'A large-scale systematic plan or arrangement for attaining a particular object.',
        scope: 'The extent of the area or subject matter that something deals with or to which it is relevant.',
        scrutinize: 'To examine or inspect closely and thoroughly.',
        sector: 'An area or portion that is distinct from others, especially in business or economy.',
        secure: 'Fixed or fastened so as not to give way, become loose, or be lost; or to obtain/protect.',
        segment: 'Each of the parts into which something is or may be divided.',
        segregate: 'To set apart from the rest or from each other; isolate.',
        select: 'To carefully choose as being the best or most suitable.',
        sequence: 'A particular order in which related events, movements, or things follow each other.',
        series: 'A number of similar or related events or things, one following another.',
        severe: 'Of something bad or undesirable: very great, intense, or harsh.',
        shift: 'A slight change in position, direction, or tendency.',
        significant: 'Sufficiently great or important to be worthy of attention; having a predictable meaning.',
        simulate: 'To imitate the appearance or character of; or reproduce conditions of a situation or process.',
        simultaneous: 'Occurring, operating, or done at the same time.',
        sketch: 'A rough or unfinished drawing or painting, often made to assist in making a more finished picture.',
        slope: 'A surface of which one end or side is at a higher level than another; or gradient.',
        sole: 'One and only; single.',
        solidify: 'To make or become hard or solid; or make an idea or position firm.',
        specify: 'To identify clearly and definitely.',
        specimen: 'An individual animal, plant, piece of a mineral, etc., used as an example of its species or type for scientific study or display.',
        speculate: 'To form a theory or conjecture about a subject without firm evidence.',
        stabilize: 'To make or become unlikely to change, fail, or decline.',
        stable: 'Not likely to give way or overturn; firmly fixed.',
        standard: 'Something used as a measure, norm, or model in comparative evaluations.',
        static: 'Lacking in movement, action, or change, especially in an undesirable way.',
        statistic: 'A numerical fact or datum collected or analyzed.',
        status: 'The relative social or professional standing of someone or something; or current state.',
        stimulate: 'To raise levels of physiological or nervous activity; or encourage or arouse interest or enthusiasm.',
        strategy: 'A plan of action designed to achieve a long-term or overall aim.',
        stratum: 'A layer or a series of layers of rock in the ground; or a social/analytical layer.',
        streamline: 'To make an organization or system more efficient and effective by employing faster or simpler working methods.',
        stress: 'Pressure or tension exerted on a material object; or emphasis given to a syllable, word, or idea.',
        strict: 'Demanding that rules, concerning behavior or a certain procedure, be observed.',
        strive: 'To make great efforts to achieve or obtain something.',
        structure: 'The arrangement of and relations between the parts or elements of something complex.',
        subordinate: 'Lower in rank or position; or treat or regard as of lesser importance than something else.',
        subsequent: 'Coming after something in time; following.',
        subsidy: 'A sum of money granted by the government or a public body to assist an industry or business so that the price of a commodity or service may remain low or competitive.',
        substantial: 'Of considerable importance, size, or worth.',
        substantiate: 'To provide evidence to support or prove the truth of.',
        substitute: 'A person or thing acting or serving in place of another.',
        subtle: 'So delicate or precise as to be difficult to analyze or describe.',
        succeed: 'To achieve the desired aim or result; or come after and take the place of.',
        sufficient: 'Enough; adequate.',
        summarize: 'To give a brief statement of the main points of something.',
        supplement: 'Something that completes or enhances something else when added to it.',
        suppress: 'To forcibly put an end to; or prevent the development, action, or expression of.',
        surplus: 'An amount of something left over when requirements have been met; excess.',
        surrender: 'To stop resisting to an enemy or opponent and submit to their authority.',
        surveillance: 'Close observation, especially of a suspected person or group.',
        susceptible: 'Likely or liable to be influenced or harmed by a particular thing.',
        suspend: 'To temporarily prevent from continuing or being in force or effect; or hang.',
        sustain: 'To strengthen or support physically or mentally; or uphold, affirm, or confirm the justice or validity of.',
        symbol: 'A thing that represents or stands for something else, especially a material object representing something abstract.',
        synthesize: 'To combine a number of things into a coherent whole.',
        systematic: 'Done or acting according to a fixed plan or system; methodical.',
        tactic: 'An action or strategy carefully planned to achieve a specific end.',
        tangible: 'Perceptible by touch; or clear and definite; real.',
        target: 'A person, object, or place selected as the aim of an attack or goal.',
        technique: 'A way of carrying out a particular task, especially the execution or performance of an artistic work or a scientific procedure.',
        temporary: 'Lasting for only a limited period of time; not permanent.',
        tenacious: 'Tending to keep a firm hold of something; clinging or adhering closely; or persistent.',
        tendency: 'An inclination toward a particular characteristic or type of behavior.',
        tension: 'The state of being stretched tight; or mental or emotional strain.',
        tentative: 'Not certain or fixed; provisional.',
        terminate: 'Bring to an end.',
        theory: 'A supposition or a system of ideas intended to explain something, especially one based on general principles independent of the thing to be explained.',
        thermal: 'Relating to or caused by heat or temperature.',
        threshold: 'The magnitude or intensity that must be exceeded for a certain reaction, phenomenon, result, or condition to occur or be manifested.',
        thrive: 'To prosper; flourish.',
        trace: 'A mark or line left by something that has passed; or find or discover by investigation.',
        tract: 'An area of land; or a continuous stretch of time or a system of organs.',
        tradition: 'The transmission of customs or beliefs from generation to generation, or the fact of being passed on in this way.',
        trajectory: 'The path followed by a projectile flying or an object moving under the action of given forces.',
        tranquil: 'Free from disturbance; calm.',
        transcend: 'To be or go beyond the range or limits of something abstract, conceptual, or physical.',
        transfer: 'To move from one place, person, or situation to another.',
        transform: 'To make a thorough or dramatic change in the form, appearance, or character of.',
        transient: 'Lasting only for a short time; impermanent.',
        transition: 'The process or a period of changing from one state or condition to another.',
        transmit: 'To cause something to pass on from one place or person to another.',
        transparent: 'Allowing light to pass through so that bodies behind can be distinctly seen; or easy to perceive or detect.',
        trigger: 'An event or circumstance that precipitates a reaction or development.',
        trivial: 'Of little value or importance.',
        turbulent: 'Characterized by conflict, disorder, or confusion; not controlled or calm.',
        ultimate: 'Being or happening at the end of a process; final; or best or most extreme.',
        undergo: 'To experience or be subjected to something, typically something unpleasant or arduous.',
        underlie: 'To lie or be situated under; or be the cause or basis of.',
        undermine: 'To lessen the effectiveness, power, or ability of, especially gradually or insidiously.',
        undertake: 'To commit oneself to and begin an enterprise or responsibility.',
        unify: 'To make or become united, uniform, or whole.',
        unique: 'Being the only one of its kind; unlike anything else.',
        universal: 'Applicable to all cases; of or for everyone everywhere.',
        unprecedented: 'Never done or known before.',
        utilize: 'To make practical and effective use of.',
        vacant: 'Not filled or occupied; empty.',
        valid: 'Having a sound basis in logic or fact; reasonable or cogent.',
        variable: 'Not consistent or having a fixed pattern; liable to change; or a quantity that may assume a succession of values.',
        variant: 'A form or version of something that differs in some respect from other forms of the same thing or from a standard.',
        vary: 'To differ in size, amount, degree, or nature from something else of the same general class.',
        vehicle: 'A thing used for transporting people or goods; or a means of expressing or communicating.',
        verify: 'To make sure or demonstrate that something is true, accurate, or justified.',
        versatile: 'Able to adapt or be adapted to many different functions or activities.',
        viable: 'Capable of working successfully; feasible.',
        violate: 'To break or fail to comply with a rule or formal agreement.',
        virtual: 'Almost or nearly as described, but not completely or according to strict definition.',
        visible: 'Able to be seen.',
        vital: 'Absolutely necessary; essential.',
        vivid: 'Producing powerful feelings or strong, clear images in the mind.',
        volatile: 'Liable to change rapidly and unpredictably, especially for the worse.',
        volume: 'The amount of space that a substance or object occupies, or that is enclosed within a container.',
        vulnerable: 'Exposed to the possibility of being attacked or harmed, either physically or emotionally.',
        warrant: 'To justify or necessitate a certain course of action.',
        widespread: 'Found or distributed over a large area or number of people.',
        withdraw: 'To remove or take away something from a particular place or position.',
        withstand: 'To remain undamaged or unaffected by; resist.',
        yield: 'To produce or provide a result, amount, or crop; or give way to argument or force.'
    };

    function buildEnglishExplanationForWord(wordStr) {
        const cleanW = String(wordStr || '').trim();
        const low = cleanW.toLowerCase();
        if (ENGLISH_WORD_EXPLANATIONS[low]) {
            return ENGLISH_WORD_EXPLANATIONS[low];
        }
        return 'An academic English vocabulary word ("' + cleanW + '") used in reading and reasoning contexts; pay attention to how it functions in the surrounding sentence.';
    }

    function buildItalianNoteForWord(wordStr, fallbackTrans) {
        const cleanW = String(wordStr || '').trim();
        const mapIt = {
            abundant: 'abbondante, numeroso',
            accelerate: 'accelerare',
            accumulate: 'accumulare',
            accurate: 'preciso, accurato',
            acknowledge: 'riconoscere, ammettere',
            acquire: 'acquisire, ottenere',
            acute: 'acuto, intenso, perspicace',
            adapt: 'adattare, adattarsi',
            adequate: 'adeguato, sufficiente',
            adjacent: 'adiacente, contiguo',
            adjust: 'regolare, adattare',
            advocate: 'sostenere, promotore',
            affect: 'influenzare, incidere su',
            aggregate: 'aggregato, complessivo',
            allocate: 'assegnare, allocare',
            alter: 'modificare, cambiare',
            ambiguous: 'ambiguo, poco chiaro',
            ample: 'ampio, abbondante',
            analogous: 'analogo, simile',
            analyze: 'analizzare, esaminare',
            anomaly: 'anomalia, deviazione',
            anticipate: 'anticipare, prevedere',
            apparent: 'evidente, manifesto',
            applicable: 'applicabile, pertinente',
            approximate: 'approssimativo, stimare',
            arbitrary: 'arbitrario, casuale',
            assert: 'affermare, sostenere',
            assess: 'valutare, stimare',
            assign: 'assegnare, attribuire',
            assume: 'supporre, presumere',
            attain: 'raggiungere, conseguire',
            attribute: 'attribuire, attributo',
            augment: 'aumentare, accrescere',
            authentic: 'autentico, genuino',
            autonomous: 'autonomo, indipendente',
            avert: 'evitare, scongiurare'
        };
        const low = cleanW.toLowerCase();
        if (mapIt[low]) return mapIt[low];
        return cleanW + ' — termine accademico (' + (currentUiLang === 'it' ? 'IT' : 'EN') + ')';
    }


    const CURATED_COLLOCATIONS_VISUALS = {
        'strong acid': [
            { phrase: 'strong acid solution', ru: 'раствор сильной кислоты', scene: 'acid_solution' },
            { phrase: 'corrosive strong acid', ru: 'едкая сильная кислота', scene: 'acid_corrode' },
            { phrase: 'neutralize a strong acid', ru: 'нейтрализовать сильную кислоту', scene: 'acid_neutralize' }
        ],
        'abundant': [
            { phrase: 'abundant natural resources', ru: 'обильные природные ресурсы', scene: 'abundant_forest' },
            { phrase: 'abundant evidence', ru: 'убедительные доказательства', scene: 'abundant_files' },
            { phrase: 'abundant rainfall', ru: 'обильные осадки', scene: 'abundant_rain' }
        ],
        'accelerate': [
            { phrase: 'accelerate the reaction', ru: 'ускорить реакцию', scene: 'accel_flask' },
            { phrase: 'accelerate economic growth', ru: 'ускорить экономический рост', scene: 'accel_rocket' },
            { phrase: 'accelerate rapidly', ru: 'стремительно ускоряться', scene: 'accel_speedo' }
        ],
        'accurate': [
            { phrase: 'accurate measurement', ru: 'точное измерение', scene: 'acc_caliper' },
            { phrase: 'accurate prediction', ru: 'точный прогноз', scene: 'acc_target' },
            { phrase: 'historically accurate', ru: 'исторически достоверный', scene: 'acc_check' }
        ],
        'catalyst': [
            { phrase: 'chemical catalyst', ru: 'химический катализатор', scene: 'eq_scales' },
            { phrase: 'catalyst for change', ru: 'катализатор перемен', scene: 'accel_rocket' },
            { phrase: 'enzyme catalyst', ru: 'ферментный катализатор', scene: 'accel_flask' }
        ],
        'equilibrium': [
            { phrase: 'chemical equilibrium', ru: 'химическое равновесие', scene: 'eq_scales' },
            { phrase: 'thermal equilibrium', ru: 'тепловое равновесие', scene: 'acc_caliper' },
            { phrase: 'restore equilibrium', ru: 'восстановить равновесие', scene: 'acc_check' }
        ],
        'hypothesis': [
            { phrase: 'test a hypothesis', ru: 'проверить гипотезу', scene: 'accel_flask' },
            { phrase: 'working hypothesis', ru: 'рабочая гипотеза', scene: 'abundant_files' },
            { phrase: 'confirm the hypothesis', ru: 'подтвердить гипотезу', scene: 'acc_target' }
        ],
        'velocity': [
            { phrase: 'initial velocity', ru: 'начальная скорость', scene: 'accel_speedo' },
            { phrase: 'constant velocity', ru: 'постоянная скорость', scene: 'acc_caliper' },
            { phrase: 'escape velocity', ru: 'вторая космическая скорость', scene: 'accel_rocket' }
        ]
    };

    function renderMemorableScenePicture(sceneKey, phraseText, fallbackIdx) {
        const seedStr = String(sceneKey || '') + '|' + String(phraseText || '') + '|' + String(fallbackIdx || 0);
        let hVal = 2166136261;
        for (let i = 0; i < seedStr.length; i++) {
            hVal ^= seedStr.charCodeAt(i);
            hVal = Math.imul(hVal, 16777619);
        }
        const u1 = ((hVal >>> 0) % 1000) / 1000;
        const u2 = (((hVal >>> 8) ^ (hVal >>> 19)) % 1000) / 1000;
        const u3 = (((hVal >>> 16) ^ (hVal >>> 3)) % 1000) / 1000;

        const uid = 'sc-' + safeHash(seedStr);

        // 1. Keep exact hand-crafted scenes for 'strong acid' collocations
        if (sceneKey === 'acid_solution') {
            return `
                <svg viewBox="0 0 240 120" class="w-full h-24 sm:h-28 block">
                    <defs>
                        <linearGradient id="${uid}-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="100%" stop-color="#1e293b"/></linearGradient>
                        <linearGradient id="${uid}-liq" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a3e635"/><stop offset="100%" stop-color="#16a34a"/></linearGradient>
                    </defs>
                    <rect width="240" height="120" rx="14" fill="url(#${uid}-bg)"/>
                    <path d="M98 18h44M106 18v24l-26 52a8 8 0 0 0 7.2 12h65.6a8 8 0 0 0 7.2-12l-26-52V18" fill="none" stroke="#e2e8f0" stroke-width="3" stroke-linecap="round"/>
                    <path d="M88 78h64l10 18a4 4 0 0 1-3.6 6H81.6a4 4 0 0 1-3.6-6l10-18z" fill="url(#${uid}-liq)"/>
                    <circle cx="105" cy="90" r="3" fill="#ecfccb"/><circle cx="128" cy="86" r="4" fill="#ecfccb"/><circle cx="118" cy="70" r="2.5" fill="#bef264"/><circle cx="124" cy="58" r="2" fill="#bef264"/>
                    <rect x="148" y="24" width="66" height="24" rx="7" fill="#dc2626"/>
                    <text x="181" y="40" text-anchor="middle" fill="#ffffff" font-size="11" font-weight="900">pH 1.0 • H+</text>
                </svg>`;
        }
        if (sceneKey === 'acid_corrode') {
            return `
                <svg viewBox="0 0 240 120" class="w-full h-24 sm:h-28 block">
                    <defs>
                        <linearGradient id="${uid}-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#18181b"/><stop offset="100%" stop-color="#3f1d2e"/></linearGradient>
                    </defs>
                    <rect width="240" height="120" rx="14" fill="url(#${uid}-bg)"/>
                    <rect x="42" y="76" width="156" height="22" rx="4" fill="#64748b"/>
                    <path d="M104 76c4 11 10 14 16 14s12-3 16-14z" fill="#18181b"/>
                    <path d="M120 22c-6 12-12 20-12 27a12 12 0 0 0 24 0c0-7-6-15-12-27z" fill="#a3e635"/>
                    <path d="M96 68c-4-7 2-12-2-18M144 68c4-7-2-12 2-18M120 66c-3-6 3-10 0-15" stroke="#cbd5e1" stroke-width="2" fill="none" stroke-linecap="round"/>
                    <text x="120" y="111" text-anchor="middle" fill="#fca5a5" font-size="10" font-weight="800">РАЗЪЕДАЕТ МЕТАЛЛ</text>
                </svg>`;
        }
        if (sceneKey === 'acid_neutralize') {
            return `
                <svg viewBox="0 0 240 120" class="w-full h-24 sm:h-28 block">
                    <rect width="240" height="120" rx="14" fill="#0f172a"/>
                    <rect x="24" y="34" width="64" height="52" rx="12" fill="#ef4444" opacity="0.9"/>
                    <text x="56" y="58" text-anchor="middle" fill="#fff" font-size="13" font-weight="900">H+</text>
                    <text x="56" y="74" text-anchor="middle" fill="#fee2e2" font-size="9" font-weight="700">ACID</text>
                    <text x="102" y="65" text-anchor="middle" fill="#e2e8f0" font-size="18" font-weight="900">+</text>
                    <rect x="116" y="34" width="64" height="52" rx="12" fill="#3b82f6" opacity="0.9"/>
                    <text x="148" y="58" text-anchor="middle" fill="#fff" font-size="13" font-weight="900">OH−</text>
                    <text x="148" y="74" text-anchor="middle" fill="#dbeafe" font-size="9" font-weight="700">BASE</text>
                    <text x="193" y="65" text-anchor="middle" fill="#34d399" font-size="15" font-weight="900">→</text>
                    <circle cx="216" cy="60" r="15" fill="#10b981"/>
                    <text x="216" y="64" text-anchor="middle" fill="#fff" font-size="9" font-weight="900">H2O</text>
                </svg>`;
        }

        // 2. For every other word & phrase, synthesize a unique visual scene derived directly from the phrase's own hash
        //    so each word and each of its 3 examples gets a distinct composition, color palette, geometric motif, and label!
        const hueA = Math.round((u1 * 360) % 360);
        const hueB = Math.round((hueA + 45 + u2 * 90) % 360);
        const huePop = Math.round((hueA + 165 + u3 * 40) % 360);
        const bgStart = `hsl(${hueA}, 46%, 12%)`;
        const bgEnd = `hsl(${hueB}, 52%, 20%)`;
        const accentMain = `hsl(${huePop}, 86%, 60%)`;
        const accentSoft = `hsl(${huePop}, 80%, 72%)`;

        const motifType = ((hVal >>> 4) % 5);
        const cx1 = Math.round(42 + u1 * 32);
        const cy1 = Math.round(44 + u2 * 24);
        const r1 = Math.round(16 + u3 * 12);
        const cx2 = Math.round(176 + u2 * 26);
        const cy2 = Math.round(42 + u1 * 28);
        const barW = Math.round(92 + u3 * 44);
        const shortLabel = escapeHtml(String(phraseText || '').slice(0, 26));

        let motifSvg = '';
        if (motifType === 0) {
            // Orbiting rings + central node
            motifSvg = `
                <circle cx="${cx1}" cy="${cy1}" r="${r1}" fill="${accentMain}" opacity="0.9"/>
                <ellipse cx="${cx2}" cy="${cy2}" rx="24" ry="11" transform="rotate(${Math.round(-25 + u1 * 50)} ${cx2} ${cy2})" fill="none" stroke="${accentSoft}" stroke-width="2.5"/>
                <circle cx="${cx2}" cy="${cy2}" r="4.5" fill="#ffffff"/>
            `;
        } else if (motifType === 1) {
            // Rising stepped columns
            const hBase = Math.round(24 + u2 * 16);
            motifSvg = `
                <rect x="28" y="${78 - hBase}" width="14" height="${hBase}" rx="4" fill="${accentSoft}" opacity="0.65"/>
                <rect x="48" y="${78 - hBase - 10}" width="14" height="${hBase + 10}" rx="4" fill="${accentMain}" opacity="0.85"/>
                <rect x="68" y="${78 - hBase - 20}" width="14" height="${hBase + 20}" rx="4" fill="#ffffff" opacity="0.92"/>
                <circle cx="${cx2}" cy="${cy2}" r="${Math.max(12, r1 - 4)}" fill="none" stroke="${accentMain}" stroke-width="3"/>
            `;
        } else if (motifType === 2) {
            // Triangle beacon + pulse waves
            motifSvg = `
                <polygon points="${cx1},${cy1 - 18} ${cx1 - 18},${cy1 + 16} ${cx1 + 18},${cy1 + 16}" fill="none" stroke="${accentMain}" stroke-width="3" stroke-linejoin="round"/>
                <circle cx="${cx1}" cy="${cy1 + 5}" r="4" fill="${accentSoft}"/>
                <circle cx="${cx2}" cy="${cy2}" r="18" fill="none" stroke="${accentSoft}" stroke-width="2" stroke-dasharray="5 4"/>
            `;
        } else if (motifType === 3) {
            // Dual linked cards / nodes
            motifSvg = `
                <rect x="${cx1 - 16}" y="${cy1 - 14}" width="32" height="28" rx="8" fill="${accentMain}" opacity="0.88"/>
                <rect x="${cx2 - 18}" y="${cy2 - 14}" width="36" height="28" rx="8" fill="none" stroke="${accentSoft}" stroke-width="2.5"/>
                <line x1="${cx1 + 16}" y1="${cy1}" x2="${cx2 - 18}" y2="${cy2}" stroke="#ffffff" stroke-width="2.2" stroke-dasharray="3 3"/>
            `;
        } else {
            // Diamond prism + angle arc
            motifSvg = `
                <polygon points="${cx1},${cy1 - 20} ${cx1 + 18},${cy1} ${cx1},${cy1 + 20} ${cx1 - 18},${cy1}" fill="${accentMain}" opacity="0.85"/>
                <path d="M ${cx2 - 16} ${cy2 + 10} A 20 20 0 0 1 ${cx2 + 16} ${cy2 - 10}" fill="none" stroke="${accentSoft}" stroke-width="3" stroke-linecap="round"/>
            `;
        }

        return `
            <svg viewBox="0 0 240 120" class="w-full h-24 sm:h-28 block">
                <defs>
                    <linearGradient id="${uid}-g" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="${bgStart}"/>
                        <stop offset="100%" stop-color="${bgEnd}"/>
                    </linearGradient>
                </defs>
                <rect width="240" height="120" rx="14" fill="url(#${uid}-g)"/>
                ${motifSvg}
                <rect x="96" y="28" width="${barW}" height="10" rx="5" fill="#ffffff" opacity="0.18"/>
                <rect x="96" y="45" width="${Math.round(barW * 0.72)}" height="8" rx="4" fill="${accentMain}" opacity="0.65"/>
                <text x="120" y="99" text-anchor="middle" fill="#f8fafc" font-size="11" font-weight="800">${shortLabel}</text>
            </svg>
        `;
    }

    function buildFlashcardCollocationsWithVisuals(wordStr, transStr) {
        const cleanW = String(wordStr || '').trim();
        const cleanT = String(transStr || '').trim();
        const low = cleanW.toLowerCase();
        if (CURATED_COLLOCATIONS_VISUALS[low]) {
            return CURATED_COLLOCATIONS_VISUALS[low];
        }
        const primaryRu = cleanT.split(',')[0].split(';')[0].trim() || cleanW;
        return [
            { phrase: `key ${cleanW}`, ru: `основное понятие: ${primaryRu}`, scene: 'motif_a' },
            { phrase: `analyze ${cleanW}`, ru: `изучить (${primaryRu})`, scene: 'motif_b' },
            { phrase: `${cleanW} in context`, ru: `${primaryRu} в контексте`, scene: 'motif_c' }
        ];
    }

    function applyFlashcardFaceContent(cardEl, cardItem, revealed, masteredCount, totalCount) {
        if (!cardEl || !cardItem) return;
        const badgeText = cardItem.source === 'mine' ? tUi('dictMine') : tUi('dictAccent');
        const wordHtml = escapeHtml(cardItem.word);

        if (!revealed) {
            const sideLabel = currentUiLang === 'en' ? 'Word' : tUi('dictWordSide');
            cardEl.innerHTML = `
                <div class="flex items-center justify-between gap-2">
                    <span class="text-[11px] font-bold px-3 py-1 rounded-full profile-tag">${badgeText}</span>
                    <span class="text-[11px] font-semibold sub-text">${sideLabel}</span>
                </div>
                <div class="my-8 text-center space-y-2.5 px-2">
                    <div class="text-2xl sm:text-4xl font-extrabold tracking-tight">${wordHtml}</div>
                    <div class="text-xs sm:text-sm font-semibold sub-text opacity-75">${tUi('dictFlipHint')}</div>
                </div>
                <div class="flex items-center justify-between text-[11px] sub-text pt-2 border-t border-gray-200/70 dark:border-zinc-800">
                    <span>${tUi('dictCardLabel')} ${flashcardIndex + 1} ${tUi('dictOfLabel')} ${totalCount}</span>
                    <span>${tUi('dictLearnedLabel')}: ${masteredCount}</span>
                </div>
            `;
            return;
        }

        const topTitleRaw = currentUiLang === 'en'
            ? buildEnglishExplanationForWord(cardItem.word)
            : (currentUiLang === 'it'
                ? buildItalianNoteForWord(cardItem.word, cardItem.trans)
                : (cardItem.trans || 'Перевод не указан'));
        const sideLabel = currentUiLang === 'en' ? 'Usage & Visuals' : tUi('dictTransSide');
        const collocations = buildFlashcardCollocationsWithVisuals(cardItem.word, cardItem.trans);

        const collocationsHtml = collocations.map((col, idx) => `
            <div class="box-content-bg border rounded-2xl overflow-hidden flex flex-col text-left shadow-sm">
                <div class="w-full overflow-hidden">
                    ${renderMemorableScenePicture(col.scene, col.phrase, idx)}
                </div>
                <div class="p-3 space-y-0.5">
                    <div class="text-xs sm:text-sm font-extrabold leading-snug">${escapeHtml(col.phrase)}</div>
                    <div class="text-[11px] sub-text font-medium">${escapeHtml(col.ru)}</div>
                </div>
            </div>
        `).join('');

        cardEl.innerHTML = `
            <div class="flex items-center justify-between gap-2">
                <span class="text-[11px] font-bold px-3 py-1 rounded-full profile-tag">${badgeText}</span>
                <span class="text-[11px] font-semibold sub-text">${sideLabel}</span>
            </div>

            <div class="my-3.5 text-center space-y-1 px-2">
                <div class="${currentUiLang === 'en' ? 'text-base sm:text-lg font-bold leading-snug accent-tone-text' : 'text-2xl sm:text-3xl font-extrabold tracking-tight accent-tone-text'}">${escapeHtml(topTitleRaw)}</div>
                <div class="text-xs font-bold sub-text opacity-80">${wordHtml}</div>
            </div>

            <div class="space-y-2 my-2">
                <div class="text-[10px] font-extrabold uppercase tracking-wider sub-text text-left px-1">Примеры использования</div>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    ${collocationsHtml}
                </div>
            </div>

            <div class="flex items-center justify-between text-[11px] sub-text pt-2.5 mt-2 border-t border-gray-200/70 dark:border-zinc-800">
                <span>${tUi('dictCardLabel')} ${flashcardIndex + 1} ${tUi('dictOfLabel')} ${totalCount}</span>
                <span>${tUi('dictLearnedLabel')}: ${masteredCount}</span>
            </div>
        `;
    }

function flipCurrentFlashcard() {
        if (isCardFlipAnimating) return;
        const pool = getOrderedFlashcardsPool();
        if (!pool.length) return;
        const cardEl = document.getElementById('dict-flashcard-box');
        const flipBtn = document.getElementById('dict-flip-btn');
        const nextRevealed = !flashcardRevealed;

        if (!cardEl) {
            flashcardRevealed = nextRevealed;
            renderDictionaryFlashcards();
            return;
        }

        isCardFlipAnimating = true;
        if (cardFlipTimeoutId) clearTimeout(cardFlipTimeoutId);
        cardEl.classList.add('is-mid-flip');

        cardFlipTimeoutId = setTimeout(() => {
            flashcardRevealed = nextRevealed;
            const currentCard = pool[flashcardIndex] || pool[0];
            const masteredSet = getMasteredVocabSet();
            applyFlashcardFaceContent(cardEl, currentCard, flashcardRevealed, masteredSet.size, pool.length);
            if (flipBtn) {
                flipBtn.textContent = flashcardRevealed ? 'Показать слово' : 'Перевернуть';
            }
            cardEl.classList.remove('is-mid-flip');

            cardFlipTimeoutId = setTimeout(() => {
                isCardFlipAnimating = false;
                cardFlipTimeoutId = null;
            }, 240);
        }, 210);
    }

    function stepFlashcard(delta) {
        if (cardFlipTimeoutId) {
            clearTimeout(cardFlipTimeoutId);
            cardFlipTimeoutId = null;
        }
        isCardFlipAnimating = false;
        const pool = getOrderedFlashcardsPool();
        if (!pool.length) return;
        flashcardIndex = (flashcardIndex + delta + pool.length) % pool.length;
        flashcardRevealed = false;
        renderDictionaryFlashcards();
    }

    function shuffleFlashcardsDeck() {
        const pool = getCombinedVocabularyEntries(dictionarySourceFilter);
        if (pool.length <= 1) return;
        const keys = pool.map((item) => item.source + ':' + item.word.toLowerCase());
        for (let i = keys.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const tmp = keys[i];
            keys[i] = keys[j];
            keys[j] = tmp;
        }
        flashcardCustomOrder = keys;
        flashcardIndex = 0;
        flashcardRevealed = false;
        renderDictionaryFlashcards();
    }

    function resetFlashcardsOrder() {
        flashcardCustomOrder = null;
        flashcardIndex = 0;
        flashcardRevealed = false;
        renderDictionaryFlashcards();
    }

    function renderDictionaryFlashcards() {
        const stage = document.getElementById('dictionary-flashcards-stage');
        if (!stage) return;
        const pool = getOrderedFlashcardsPool();
        if (!pool.length) {
            stage.innerHTML = `<div class="card-bg p-8 rounded-3xl text-center border shadow-sm space-y-2"><div class="text-sm font-bold">${escapeHtml(tUi('dictBoth'))}</div><p class="text-xs sub-text">${escapeHtml(tUi('dictSubtitle'))}</p></div>`;
            return;
        }

        if (flashcardIndex >= pool.length) flashcardIndex = 0;
        if (flashcardIndex < 0) flashcardIndex = 0;
        const currentCard = pool[flashcardIndex];
        const masteredSet = getMasteredVocabSet();
        const safeWordAttr = escapeAttr(currentCard.word);
        const flipBtnLabel = flashcardRevealed ? tUi('dictShowWordBtn') : tUi('dictFlipBtn');
        const isMastered = masteredSet.has(currentCard.word.toLowerCase());
        const masteredBtnLabel = isMastered ? tUi('dictUnmasteredBtn') : tUi('dictMasteredBtn');

        stage.innerHTML = `
            <div class="max-w-2xl mx-auto space-y-4">
                <div class="flex flex-wrap items-center justify-between gap-2 text-xs font-bold sub-text">
                    <span>${tUi('dictCardLabel')} ${flashcardIndex + 1} ${tUi('dictOfLabel')} ${pool.length} • ${tUi('dictLearnedLabel')}: ${masteredSet.size}</span>
                    <div class="flex items-center gap-1.5">
                        <button type="button" id="dict-shuffle-btn" class="custom-styled-select px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer transition">${tUi('dictShuffleBtn')}</button>
                        <button type="button" id="dict-reset-order-btn" class="custom-styled-select px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer transition">${tUi('dictResetOrderBtn')}</button>
                    </div>
                </div>

                <div class="flashcard-perspective">
                    <div id="dict-flashcard-box" class="flashcard-vflip-card p-7 sm:p-10 flex flex-col justify-between"></div>
                </div>

                <div class="flex items-center justify-between gap-2">
                    <button type="button" id="dict-prev-card-btn" class="custom-styled-select px-3.5 sm:px-4 py-2.5 rounded-full text-xs font-bold cursor-pointer transition flex-shrink-0">${tUi('dictPrevBtn')}</button>
                    <div class="flex items-center justify-center gap-2">
                        <button type="button" id="dict-flip-btn" class="hidden sm:inline-flex custom-styled-select px-4 py-2.5 rounded-full text-xs font-bold cursor-pointer transition">${flipBtnLabel}</button>
                        <button type="button" id="dict-mastered-btn" data-word="${safeWordAttr}" class="profile-accent-btn px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold cursor-pointer transition">${masteredBtnLabel}</button>
                    </div>
                    <button type="button" id="dict-next-card-btn" class="custom-styled-select px-3.5 sm:px-4 py-2.5 rounded-full text-xs font-bold cursor-pointer transition flex-shrink-0">${tUi('dictNextBtn')}</button>
                </div>
            </div>
        `;

        const cardEl = document.getElementById('dict-flashcard-box');
        applyFlashcardFaceContent(cardEl, currentCard, flashcardRevealed, masteredSet.size, pool.length);
    }

    function syncDictionaryTopButtonsUi() {
        const cardsBtn = document.getElementById('dict-mode-cards-btn');
        const listBtn = document.getElementById('dict-mode-list-btn');
        const stageEl = document.getElementById('dictionary-flashcards-stage');
        const gridEl = document.getElementById('dictionary-container');

        if (cardsBtn) {
            cardsBtn.className = dictionaryViewMode === 'cards'
                ? 'profile-accent-btn px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition'
                : 'custom-styled-select px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition';
        }
        if (listBtn) {
            listBtn.className = dictionaryViewMode === 'list'
                ? 'profile-accent-btn px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition'
                : 'custom-styled-select px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition';
        }
        if (stageEl) stageEl.classList.toggle('hide', dictionaryViewMode !== 'cards');
        if (gridEl) gridEl.classList.toggle('hide', dictionaryViewMode !== 'list');

        document.querySelectorAll('.dict-src-btn').forEach((btn) => {
            const isActive = btn.getAttribute('data-dict-src') === dictionarySourceFilter;
            btn.className = isActive
                ? 'dict-src-btn profile-accent-btn px-3.5 py-1.5 rounded-full text-xs font-bold cursor-pointer transition'
                : 'dict-src-btn custom-styled-select px-3.5 py-1.5 rounded-full text-xs font-bold cursor-pointer transition';
        });
    }

    function loadDictionaryView() {
        syncDictionaryTopButtonsUi();
        const container = document.getElementById('dictionary-container');
        const summaryEl = document.getElementById('dict-source-summary');
        const personalCnt = getDict().length;
        const accentCnt = (Array.isArray(window.DB_VOCABULARY) ? window.DB_VOCABULARY : CURATED_ACCENT_VOCAB).length;
        const combinedCnt = getCombinedVocabularyEntries('both').length;

        if (summaryEl) {
            if (dictionarySourceFilter === 'mine') {
                summaryEl.textContent = tUi('dictSummaryMine', personalCnt);
            } else if (dictionarySourceFilter === 'accent') {
                summaryEl.textContent = tUi('dictSummaryAccent', accentCnt);
            } else {
                summaryEl.textContent = tUi('dictSummaryBoth', combinedCnt, personalCnt, accentCnt);
            }
        }

        renderDictionaryFlashcards();

        if (!container) return;
        const listItems = getCombinedVocabularyEntries(dictionarySourceFilter);
        if (listItems.length === 0) {
            container.innerHTML = '<div class="col-span-full card-bg p-8 rounded-3xl text-center sub-text border shadow-sm">В выбранном разделе пока нет слов. Выделяйте слова в текстах или выберите «Словарь акцента (320)».</div>';
            return;
        }
        container.innerHTML = listItems.map((item, idx) => {
            const badgeLabel = item.source === 'mine' ? 'Мой словарь' : 'Словарь акцента';
            const delBtn = item.source === 'mine' && typeof item.personalIndex === 'number'
                ? `<button type="button" onclick="removeDictWord(${item.personalIndex})" class="sub-text hover:text-red-500 transition text-xl cursor-pointer">✕</button>`
                : `<span class="text-[10px] font-bold px-2.5 py-1 rounded-full profile-tag">${badgeLabel}</span>`;
            return `
                <div data-idx="${idx}" class="focus-stream-card card-bg p-5 rounded-2xl shadow-sm border flex justify-between items-center gap-3">
                    <div class="min-w-0">
                        <div class="font-bold text-lg truncate">${escapeHtml(item.word)}</div>
                        <div class="accent-tone-text font-medium text-sm">${escapeHtml(item.trans)}</div>
                    </div>
                    ${delBtn}
                </div>
            `;
        }).join('');
        initFocusCardObserver();
    }

    document.addEventListener('click', function (e) {
        const dictView = document.getElementById('view-dictionary');
        if (!dictView || dictView.classList.contains('hide')) return;
        const target = e && e.target ? e.target : null;
        if (!target) return;

        const modeCardsBtn = target.closest('#dict-mode-cards-btn');
        if (modeCardsBtn) {
            e.preventDefault();
            e.stopPropagation();
            setDictionaryViewMode('cards');
            return;
        }

        const modeListBtn = target.closest('#dict-mode-list-btn');
        if (modeListBtn) {
            e.preventDefault();
            e.stopPropagation();
            setDictionaryViewMode('list');
            return;
        }

        const srcBtn = target.closest('.dict-src-btn');
        if (srcBtn) {
            e.preventDefault();
            e.stopPropagation();
            const srcKey = srcBtn.getAttribute('data-dict-src') || 'both';
            setDictionarySourceFilter(srcKey);
            return;
        }

        const prevBtn = target.closest('#dict-prev-card-btn');
        if (prevBtn) {
            e.preventDefault();
            e.stopPropagation();
            stepFlashcard(-1);
            return;
        }

        const nextBtn = target.closest('#dict-next-card-btn');
        if (nextBtn) {
            e.preventDefault();
            e.stopPropagation();
            stepFlashcard(1);
            return;
        }

        const flipBtn = target.closest('#dict-flip-btn');
        if (flipBtn) {
            e.preventDefault();
            e.stopPropagation();
            flipCurrentFlashcard();
            return;
        }

        const masteredBtn = target.closest('#dict-mastered-btn');
        if (masteredBtn) {
            e.preventDefault();
            e.stopPropagation();
            const wVal = masteredBtn.getAttribute('data-word') || '';
            toggleVocabMastered(wVal);
            stepFlashcard(1);
            return;
        }

        const shuffleBtn = target.closest('#dict-shuffle-btn');
        if (shuffleBtn) {
            e.preventDefault();
            e.stopPropagation();
            shuffleFlashcardsDeck();
            return;
        }

        const resetOrderBtn = target.closest('#dict-reset-order-btn');
        if (resetOrderBtn) {
            e.preventDefault();
            e.stopPropagation();
            resetFlashcardsOrder();
            return;
        }

        const cardInner = target.closest('#dict-flashcard-box');
        if (cardInner) {
            e.preventDefault();
            e.stopPropagation();
            flipCurrentFlashcard();
        }
    });

    document.addEventListener('keydown', function (e) {
        const dictView = document.getElementById('view-dictionary');
        if (!dictView || dictView.classList.contains('hide') || dictionaryViewMode !== 'cards') return;
        const activeTag = document.activeElement && document.activeElement.tagName;
        if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || activeTag === 'SELECT') return;
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            stepFlashcard(-1);
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            stepFlashcard(1);
        } else if (e.key === ' ' || e.key === 'Enter') {
            if (e.target && e.target.closest('button')) return;
            e.preventDefault();
            flipCurrentFlashcard();
        }
    });


    function removeDictWord(idx) {
        const dict = getDict();
        dict.splice(idx, 1);
        setStorage('cents_dict', dict);
        loadDictionaryView();
    }

    function getBookmarks() {
        const b = getStorage('cents_bookmarks');
        return Array.isArray(b) ? b : [];
    }

    function isBookmarked(uid) {
        return getBookmarks().some((item) => item.id === uid);
    }

    function toggleBookmark(safeJson) {
        const data = JSON.parse(decodeURIComponent(safeJson));
        const bookmarks = getBookmarks();
        const idx = bookmarks.findIndex((item) => item.id === data.id);
        let nowMarked = false;
        if (idx > -1) {
            bookmarks.splice(idx, 1);
        } else {
            bookmarks.push(data);
            nowMarked = true;
        }
        setStorage('cents_bookmarks', bookmarks);
        const uidEncoded = safeHash(data.id);
        document.querySelectorAll('button[data-uid="' + uidEncoded + '"]').forEach((btn) => {
            btn.innerHTML = nowMarked ? '★' : '☆';
            btn.classList.remove('star-pop');
            void btn.offsetWidth;
            btn.classList.add('star-pop');
            btn.classList.add('bookmark-star-inline');
            btn.classList.toggle('is-bookmarked', nowMarked);
            btn.classList.remove('bookmark-star-btn', 'text-amber-400', 'text-gray-300', 'dark:text-zinc-600');
        });
        if (activeTabName === 'bookmarks') loadBookmarksView();
    }

    const BOOKMARK_SUBSECTIONS = [
        { key: 'Reading', title: 'Reading Comprehension' },
        { key: 'Math', title: 'Mathematics' },
        { key: 'Logic', title: 'Logic & Data' },
        { key: 'Biology', title: 'Biology' },
        { key: 'Chemistry', title: 'Chemistry' },
        { key: 'Physics', title: 'Physics' }
    ];

    function filterBookmarksByCategory(cat) {
        const nextCat = cat || 'All';
        const prevIdx = BOOKMARK_ORDER_KEYS.indexOf(lastBookmarkCategory);
        const nextIdx = BOOKMARK_ORDER_KEYS.indexOf(nextCat);
        let slideDirClass = '';
        if (prevIdx !== -1 && nextIdx !== -1 && prevIdx !== nextIdx) {
            slideDirClass = nextIdx > prevIdx ? 'slide-from-right' : 'slide-from-left';
        }
        lastBookmarkCategory = nextCat;
        activeBookmarkCategory = nextCat;
        persistCurrentViewState({ bookmarkCategory: nextCat });
        loadBookmarksView();
        applyDirectionalSlide(document.getElementById('bookmarks-container'), slideDirClass);
    }

    function renderSingleBookmarkCard(q, index, secKey) {
        const optionsHtml = q.options.map((opt, i) => `
            <label class="option-pill-label flex items-center p-3 card-bg border rounded-2xl cursor-pointer hover:opacity-85 adaptive-text text-xs">
                <input type="radio" name="bm-${index}" value="${i}" class="w-4 h-4">
                <span class="font-bold ml-2.5 mr-2">${String.fromCharCode(65 + i)}.</span>
                <span>${opt}</span>
            </label>
        `).join('');
        const safeQ = encodeURIComponent(JSON.stringify(q));
        const uidEncoded = safeHash(q.id);
        const isMarked = isBookmarked(q.id);
        const starClass = isMarked ? 'bookmark-star-inline is-bookmarked' : 'bookmark-star-inline';
        const starChar = isMarked ? '★' : '☆';
        const topicTitle = deriveQuestionTopicTitle(q, secKey);
        return `
            <div class="focus-stream-card smooth-stream-enter card-bg p-5 sm:p-6 pt-10 rounded-3xl shadow-sm border relative" id="bm-card-${index}">
                <button type="button" onclick="openTaskHintPopover(this, '${safeQ}'); event.stopPropagation();" class="task-hint-btn" title="Подсказка">?</button>
                <button type="button" onclick="toggleBookmark('${safeQ}'); event.stopPropagation();" data-uid="${uidEncoded}" class="${starClass}" title="Bookmark">${starChar}</button>
                <div class="text-xs font-semibold sub-text mb-2 pr-12">${q.sectionTitle || secKey} • ${topicTitle}</div>
                ${renderPassageBoxWithZoom(q.passage, q.title || q.sectionTitle || 'Reading Passage', 'mb-4')}
                <h3 class="adaptive-title font-medium mb-4 pr-12 text-xs sm:text-sm">${stripTechnicalQuestionLabels(q.q)}</h3>
                <div class="grid grid-cols-1 gap-2.5 mb-5">${optionsHtml}</div>
                <button type="button" onclick="checkSingleAnswer('bm-${index}', ${q.ans}, 'bm-exp-${index}')" class="profile-accent-btn px-5 py-2.5 rounded-full text-xs font-semibold">Check Answer</button>
                <div id="bm-exp-${index}" class="exp-reveal-anim hide mt-4 p-4 card-bg border rounded-2xl text-xs" data-exp-en="${escapeAttr(q.expEn)}" data-exp-ru="${escapeAttr(q.expRu)}">
                    <div class="flex gap-2 mb-3">
                        <button type="button" onclick="setLang('bm-exp-${index}', 'en')" class="lang-btn-en is-active-lang-btn px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer">English</button>
                        <button type="button" onclick="setLang('bm-exp-${index}', 'ru')" class="lang-btn-ru is-idle-lang-btn px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer">Русский</button>
                    </div>
                    <div class="font-bold mb-1 ans-label" data-ans-en="Correct Answer: ${String.fromCharCode(65 + q.ans)}. ${q.options[q.ans]}" data-ans-ru="Правильный ответ: ${String.fromCharCode(65 + q.ans)}. ${q.options[q.ans]}">Correct Answer: ${String.fromCharCode(65 + q.ans)}. ${q.options[q.ans]}</div>
                    <div class="exp-text">${formatLineBreaks(q.expEn)}</div>
                </div>
            </div>
        `;
    }

    function loadBookmarksView() {
        const container = document.getElementById('bookmarks-container');
        if (!container) return;
        const bookmarks = getBookmarks();

        const countsByCat = { All: bookmarks.length };
        BOOKMARK_SUBSECTIONS.forEach((s) => { countsByCat[s.key] = 0; });
        bookmarks.forEach((q) => {
            const k = inferBookmarkSectionKey(q);
            countsByCat[k] = (countsByCat[k] || 0) + 1;
        });

        document.querySelectorAll('.bm-cat-btn').forEach((btn) => {
            const catKey = btn.dataset.bmCat;
            const baseLabels = {
                All: 'All',
                Reading: 'Reading',
                Math: 'Math',
                Logic: 'Logic & Data',
                Biology: 'Biology',
                Chemistry: 'Chemistry',
                Physics: 'Physics'
            };
            const cnt = countsByCat[catKey] || 0;
            btn.textContent = cnt > 0 ? `${baseLabels[catKey]} (${cnt})` : baseLabels[catKey];
        });

        requestAnimationFrame(() => {
            const activeBtn = document.querySelector('#bookmarks-buttons .pill-btn[data-bm-cat="' + activeBookmarkCategory + '"]');
            if (activeBtn) movePillBubble('bookmarks-buttons', 'bookmarks-pill-bubble', activeBtn, 'pill-btn-selected-accent');
        });

        if (bookmarks.length === 0) {
            container.innerHTML = `<div class="smooth-stream-enter card-bg p-8 rounded-3xl text-center sub-text border shadow-sm">${escapeHtml(tUi('noBookmarksMsg'))}</div>`;
            return;
        }

        const groupsToRender = activeBookmarkCategory === 'All'
            ? BOOKMARK_SUBSECTIONS
            : BOOKMARK_SUBSECTIONS.filter((s) => s.key === activeBookmarkCategory);

        let globalIdx = 0;
        const sectionsHtml = groupsToRender.map((sec) => {
            const matched = bookmarks.filter((q) => inferBookmarkSectionKey(q) === sec.key);
            if (matched.length === 0) return '';
            const cardsHtml = matched.map((q) => renderSingleBookmarkCard(q, globalIdx++, sec.key)).join('');
            return `
                <div class="space-y-4 mb-8 smooth-stream-enter">
                    <div class="flex items-center justify-between border-b border-gray-200 dark:border-zinc-800 pb-2">
                        <h3 class="text-base sm:text-lg font-bold">${sec.title}</h3>
                        <span class="text-xs font-bold px-2.5 py-0.5 rounded-full profile-tag">${matched.length}</span>
                    </div>
                    <div class="space-y-5">${cardsHtml}</div>
                </div>
            `;
        }).join('');

        if (!sectionsHtml) {
            const secObj = BOOKMARK_SUBSECTIONS.find((s) => s.key === activeBookmarkCategory);
            const label = secObj ? secObj.title : activeBookmarkCategory;
            container.innerHTML = `<div class="smooth-stream-enter card-bg p-8 rounded-3xl text-center sub-text border shadow-sm">В разделе <strong>${label}</strong> пока нет сохранённых заданий.</div>`;
            return;
        }

        container.innerHTML = sectionsHtml;
        initFocusCardObserver();
    }

    function enterPracticeTab() {
        const hubEl = document.getElementById('practice-hub-screen');
        const activeBarEl = document.getElementById('practice-active-bar');
        const headerBarEl = document.getElementById('practice-header-bar');
        const containerEl = document.getElementById('practice-container');
        if (!activePracticeCategory) {
            if (hubEl) hubEl.classList.remove('hide');
            if (activeBarEl) activeBarEl.classList.add('hide');
            if (headerBarEl) headerBarEl.classList.add('hide');
            if (containerEl) {
                containerEl.classList.add('hide');
                containerEl.innerHTML = '';
            }
            return;
        }
        loadPractice(activePracticeCategory, false);
    }

    function exitPracticeToHub() {
        activePracticeCategory = null;
        photoBlockOpen = false;
        const photoBlockEl = document.getElementById('practice-photo-block');
        const scrubberBarEl = document.getElementById('practice-scrubber-bar');
        if (photoBlockEl) photoBlockEl.classList.add('hide');
        if (scrubberBarEl) scrubberBarEl.classList.add('hide');
        setStorage('cents_last_view_v1', { tab: activeTabName || 'practice', practiceCategory: null, photoBlockOpen: false });
        enterPracticeTab();
    }

    let isRestoringReloadState = false;

    function persistCurrentViewState(extraPatch) {
        if (isRestoringReloadState) return;
        let prev = getStorage('cents_last_view_v1');
        if (!prev || !prev.tab) {
            try {
                const rawPrev = sessionStorage.getItem('cents_exact_reload_state_v1') || localStorage.getItem('cents_global_last_view_v1');
                if (rawPrev) prev = JSON.parse(rawPrev);
            } catch (e) {}
        }
        const resolvedTab = (extraPatch && extraPatch.tab) || activeTabName || (prev && prev.tab) || 'home';
        const resolvedPracCat = (extraPatch && Object.prototype.hasOwnProperty.call(extraPatch, 'practiceCategory'))
            ? extraPatch.practiceCategory
            : (activePracticeCategory !== null && activePracticeCategory !== undefined ? activePracticeCategory : (prev && prev.practiceCategory) || null);
        const resolvedScroll = (extraPatch && typeof extraPatch.scrollY === 'number')
            ? extraPatch.scrollY
            : Math.round(window.scrollY || window.pageYOffset || 0);
        const next = {
            ...(prev && typeof prev === 'object' ? prev : {}),
            tab: resolvedTab,
            practiceCategory: resolvedPracCat,
            bookmarkCategory: activeBookmarkCategory || 'All',
            photoBlockCategory: activePhotoBlockCategory || 'Unassigned',
            photoBlockOpen: Boolean(photoBlockOpen),
            scrollY: resolvedScroll
        };
        setStorage('cents_last_view_v1', next);
        const serialized = JSON.stringify(next);
        try { localStorage.setItem('cents_global_last_view_v1', serialized); } catch (e) {}
        try { sessionStorage.setItem('cents_exact_reload_state_v1', serialized); } catch (e) {}
    }

    function switchTab(tab) {
        const safeTab = VALID_TABS.includes(tab) ? tab : 'home';
        activeTabName = safeTab;
        practiceBarAnchorTop = null;
        syncPracticeBarFollowState();
        clearInterval(currentTimer);

        const navMap = {
            home: 'nav-home-pc',
            tests: 'nav-tests-pc',
            practice: 'nav-practice-pc',
            bookmarks: 'nav-bookmarks-pc',
            dictionary: 'nav-dictionary-pc'
        };

        Object.values(navMap).forEach((elId) => {
            const btn = document.getElementById(elId);
            if (btn) btn.classList.remove('tab-active', 'tab-inactive');
        });
        requestAnimationFrame(() => {
            const activeNavBtn = document.getElementById(navMap[safeTab]);
            if (activeNavBtn) movePillBubble('main-nav-pill-wrap', 'main-nav-bubble', activeNavBtn, 'pill-btn-selected-accent');
        });

        const mobileSelect = document.getElementById('mobile-nav-select');
        if (mobileSelect) mobileSelect.value = safeTab;

        document.getElementById('view-home').classList.toggle('hide', safeTab !== 'home');
        document.getElementById('view-tests').classList.toggle('hide', safeTab !== 'tests');
        document.getElementById('view-practice').classList.toggle('hide', safeTab !== 'practice');
        document.getElementById('view-bookmarks').classList.toggle('hide', safeTab !== 'bookmarks');
        const myPhotosEl = document.getElementById('view-my-photos');
        if (myPhotosEl) myPhotosEl.classList.add('hide');
        document.getElementById('view-dictionary').classList.toggle('hide', safeTab !== 'dictionary');
        animateBackgroundLanternsForTab(safeTab);
        document.getElementById('view-active-exam').classList.add('hide');
        syncNavbarExamTimerVisibility();
        document.getElementById('view-exam-results-screen').classList.add('hide');

        applyProfileAccent(currentUser);
        persistCurrentViewState({ tab: safeTab, scrollY: 0 });
        if (safeTab === 'tests') renderTestBlocks();
        if (safeTab === 'practice') enterPracticeTab();
        if (safeTab === 'bookmarks') loadBookmarksView();
        if (safeTab === 'dictionary') loadDictionaryView();
        requestAnimationFrame(() => syncAllVisiblePillBubbles(false));
    }

    async function resetExamScore(testId, idx, testTitle) {
        const label = testTitle ? `«${testTitle}»` : 'этот тест';
        const ok = await showSiteConfirmModal({
            icon: '✕',
            badge: 'Сброс результата',
            title: 'Сбросить результат теста?',
            message: `Сбросить сохранённый результат для ${label}?`,
            okText: 'Сбросить',
            cancelText: 'Отмена'
        });
        if (!ok) return;
        const history = getStorage('cents_official_history');
        const scoreKey = 'genScore_' + (testId || idx);
        if (Object.prototype.hasOwnProperty.call(history, scoreKey)) {
            delete history[scoreKey];
            delete history['genCisiaMeta_' + (testId || idx)];
            setStorage('cents_official_history', history);
        }
        renderTestBlocks();
    }

    async function retakeExamNow(testId, idx, testTitle) {
        const label = testTitle ? `«${testTitle}»` : 'этот тест';
        const ok = await showSiteConfirmModal({
            icon: '↻',
            badge: 'Пересдача теста',
            title: 'Начать тест заново?',
            message: `Сбросить прошлый результат и начать ${label} заново?`,
            okText: 'Начать заново',
            cancelText: 'Отмена'
        });
        if (!ok) return;
        const history = getStorage('cents_official_history');
        const scoreKey = 'genScore_' + (testId || idx);
        if (Object.prototype.hasOwnProperty.call(history, scoreKey)) {
            delete history[scoreKey];
            delete history['genCisiaMeta_' + (testId || idx)];
            setStorage('cents_official_history', history);
        }
        startGeneratedTest(idx);
    }

    function renderTestBlocks() {
        const gridOfficial = document.getElementById('tests-grid-official');
        const gridGenerated = document.getElementById('tests-grid-generated');
        if (!gridOfficial || !gridGenerated) return;
        const history = getStorage('cents_official_history');
        const allTests = getGeneratedTestsList();

        if (!allTests.length) {
            gridOfficial.innerHTML = '<div class="col-span-full card-bg p-5 rounded-2xl border sub-text text-xs">No tests found.</div>';
            gridGenerated.innerHTML = '';
            return;
        }

        const officialEntries = [];
        const generatedEntries = [];
        allTests.forEach((tObj, idx) => {
            if (tObj === window.OFFICIAL_SAMPLE_TEST) officialEntries.push({ tObj, idx });
            else generatedEntries.push({ tObj, idx, genNum: generatedEntries.length + 1 });
        });

        const qSuffix = tUi('examQuestionsSuffix');
        const mSuffix = tUi('examMinutesSuffix');
        const startFullLabel = tUi('examStartTest');
        const startShortLabel = tUi('examStartShort');
        const retakeLabel = tUi('examRetakeBtn');

        const topCloseBtnHtml = (tObj, idx, compact) => {
            const safeTestId = String(tObj.id || idx).split("'").join("\\'");
            const safeTitle = String(tObj.title || '').split("'").join("\\'");
            const sz = compact ? 'w-7 h-7 text-sm font-medium' : 'w-8 h-8 text-base font-medium';
            const resetCls = 'bg-rose-50/80 dark:bg-rose-300/10 text-rose-700/80 dark:text-rose-200/80 border border-rose-200/75 dark:border-rose-300/30 hover:bg-rose-100/85 dark:hover:bg-rose-300/20';
            return '<button type="button" onclick="event.stopPropagation(); resetExamScore(\'' + safeTestId + '\', ' + idx + ', \'' + safeTitle + '\')" class="' + sz + ' rounded-lg flex items-center justify-center flex-shrink-0 ' + resetCls + ' transition cursor-pointer leading-none">✕</button>';
        };

        const retakeFooterHtml = (tObj, idx, lastScore, compact) => {
            const safeTestId = String(tObj.id || idx).split("'").join("\\'");
            const safeTitle = String(tObj.title || '').split("'").join("\\'");
            const retakeCls = 'bg-amber-50/85 dark:bg-amber-300/10 text-amber-800/85 dark:text-amber-200/85 border border-amber-200/75 dark:border-amber-300/30 hover:bg-amber-100/85 dark:hover:bg-amber-300/20';
            const btnSize = compact ? 'px-3 py-1.5 text-xs' : 'px-3.5 py-1.5 text-xs';
            return (
                '<div class="mt-3.5 pt-2.5 border-t border-gray-200 dark:border-zinc-800 flex items-center justify-between gap-2 text-[11px] font-semibold">' +
                    '<span class="truncate">' + lastScore + ' / 1500</span>' +
                    '<button type="button" onclick="event.stopPropagation(); retakeExamNow(\'' + safeTestId + '\', ' + idx + ', \'' + safeTitle + '\')" class="' + btnSize + ' rounded-lg font-semibold ' + retakeCls + ' transition cursor-pointer flex items-center gap-1 flex-shrink-0">' +
                        '<span>↻</span>' +
                        '<span>' + escapeHtml(retakeLabel) + '</span>' +
                    '</button>' +
                '</div>'
            );
        };

        gridOfficial.innerHTML = officialEntries.map(({ tObj, idx }) => {
            const qCount = (tObj.sections || []).reduce((sum, s) => sum + (Array.isArray(s.questions) ? s.questions.length : 0), 0);
            const scoreKey = 'genScore_' + (tObj.id || idx);
            const lastScore = history[scoreKey];
            const isCompleted = lastScore !== undefined;
            const footerHtml = isCompleted
                ? retakeFooterHtml(tObj, idx, lastScore, false)
                : ('<div class="mt-3.5 pt-2.5 border-t border-gray-200 dark:border-zinc-800 flex items-center justify-between text-[11px] font-semibold"><span>' + escapeHtml(startFullLabel) + '</span><span>→</span></div>');
            return (
                '<div onclick="startGeneratedTest(' + idx + ')" class="levitating-card rounded-2xl p-5 cursor-pointer transition-all flex flex-col justify-between border">' +
                    '<div>' +
                        '<div class="flex items-center justify-between gap-2 mb-2.5">' +
                            '<span class="inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full profile-tag"><span class="text-xs">📄</span><span>Official</span></span>' +
                            (isCompleted ? topCloseBtnHtml(tObj, idx, false) : '') +
                        '</div>' +
                        '<h4 class="text-sm sm:text-base font-bold mb-1 leading-snug">' + escapeHtml(tObj.title) + '</h4>' +
                        '<p class="text-[11px] sub-text">' + qCount + ' ' + escapeHtml(qSuffix) + ' • ' + (tObj.durationMinutes || 140) + ' ' + escapeHtml(mSuffix) + '</p>' +
                    '</div>' +
                    footerHtml +
                '</div>'
            );
        }).join('');

        gridGenerated.innerHTML = generatedEntries.map(({ tObj, idx, genNum }) => {
            const qCount = (tObj.sections || []).reduce((sum, s) => sum + (Array.isArray(s.questions) ? s.questions.length : 0), 0);
            const scoreKey = 'genScore_' + (tObj.id || idx);
            const lastScore = history[scoreKey];
            const isCompleted = lastScore !== undefined;
            const footerHtml = isCompleted
                ? retakeFooterHtml(tObj, idx, lastScore, true)
                : ('<div class="mt-3 pt-2 border-t border-gray-200 dark:border-zinc-800 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold"><span class="truncate">' + escapeHtml(startShortLabel) + '</span><span class="ml-1">→</span></div>');
            return (
                '<div onclick="startGeneratedTest(' + idx + ')" class="levitating-card rounded-2xl p-4 cursor-pointer transition-all flex flex-col justify-between border min-w-0">' +
                    '<div>' +
                        '<div class="flex items-center justify-between gap-1.5 mb-2">' +
                            '<span class="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full profile-tag"><span class="text-xs">🧪</span><span>Test #' + genNum + '</span></span>' +
                            (isCompleted ? topCloseBtnHtml(tObj, idx, true) : '') +
                        '</div>' +
                        '<h4 class="text-xs sm:text-sm font-bold mb-1 truncate" title="' + escapeAttr(tObj.title) + '">' + escapeHtml(tObj.title) + '</h4>' +
                        '<p class="text-[10px] sm:text-[11px] sub-text">' + qCount + ' q • ' + (tObj.durationMinutes || 140) + 'm</p>' +
                    '</div>' +
                    footerHtml +
                '</div>'
            );
        }).join('');
    }

    function checkDataFiles() {
        const required = [
            ['DB_READING', 'db_reading.js'], ['DB_MATH', 'db_math.js'], ['DB_LOGIC', 'db_logic.js'],
            ['DB_BIOLOGY', 'db_biology.js'], ['DB_CHEMISTRY', 'db_chemistry.js'], ['DB_PHYSICS', 'db_physics.js'],
            ['OFFICIAL_SAMPLE_TEST', 'db_official_test.js'], ['DB_GENERATED_TESTS', 'db_generated_test.js']
        ];
        const missing = required.filter(([name]) => {
            const v = window[name];
            return !v || (Array.isArray(v) && v.length === 0);
        }).map(([, file]) => file);
        const homeEl = document.getElementById('view-home');
        const old = document.getElementById('data-warning');
        if (old) old.remove();
        if (!missing.length || !homeEl) return;
        console.warn('CEnT-S: data files missing or empty:', missing.join(', '));
        const box = document.createElement('div');
        box.id = 'data-warning';
        box.className = 'max-w-4xl mx-auto mb-6 p-4 rounded-2xl border border-amber-400 text-xs sm:text-sm';
        box.textContent = 'Не загружены файлы данных: ' + missing.join(', ') + '. Проверь, что они лежат рядом с simulator.html.';
        homeEl.insertBefore(box, homeEl.firstChild);
    }

    function computeAccountStatsBlocks() {
        const pState = getPracticeState();
        const history = getStorage('cents_official_history');
        const dailyLog = getDailyStatsLog();
        const sectionKeys = ['Reading', 'Math', 'Logic', 'Biology', 'Chemistry', 'Physics'];
        const sectionNames = {
            Reading: 'Reading',
            Math: 'Math',
            Logic: 'Logic & Data',
            Biology: 'Biology',
            Chemistry: 'Chemistry',
            Physics: 'Physics'
        };

        const perSection = {};
        sectionKeys.forEach((k) => {
            perSection[k] = { checked: 0, correct: 0 };
        });

        let totalChecked = 0;
        let totalCorrect = 0;

        const hasDailyEntries = Object.keys(dailyLog || {}).length > 0;
        if (hasDailyEntries) {
            Object.values(dailyLog).forEach((dayRec) => {
                if (!dayRec || typeof dayRec !== 'object') return;
                totalChecked += Number(dayRec.solved || 0);
                totalCorrect += Number(dayRec.correct || 0);
                if (dayRec.bySec && typeof dayRec.bySec === 'object') {
                    sectionKeys.forEach((k) => {
                        const sRec = dayRec.bySec[k];
                        if (sRec) {
                            perSection[k].checked += Number(sRec.solved || 0);
                            perSection[k].correct += Number(sRec.correct || 0);
                        }
                    });
                }
            });
        } else {
            Object.entries(pState || {}).forEach(([qid, st]) => {
                if (!st || !st.checked) return;
                totalChecked++;
                const isOk = Boolean(st.isCorrect);
                if (isOk) totalCorrect++;

                const low = String(qid || '').toLowerCase();
                let matchedKey = null;
                if (low.includes('read') || low.includes('off-r')) matchedKey = 'Reading';
                else if (low.includes('math') || low.includes('off-m') || low.startsWith('m-')) matchedKey = 'Math';
                else if (low.includes('logic') || low.includes('off-l') || low.startsWith('l-')) matchedKey = 'Logic';
                else if (low.includes('bio') || low.includes('off-b') || low.startsWith('b-')) matchedKey = 'Biology';
                else if (low.includes('chem') || low.includes('off-c') || low.startsWith('c-')) matchedKey = 'Chemistry';
                else if (low.includes('phys') || low.includes('off-p') || low.startsWith('p-')) matchedKey = 'Physics';

                if (matchedKey && perSection[matchedKey]) {
                    perSection[matchedKey].checked++;
                    if (isOk) perSection[matchedKey].correct++;
                }
            });
        }

        const accuracyPct = totalChecked > 0 ? Math.round((totalCorrect / totalChecked) * 100) : 0;

        const examScores = Object.values(history || {}).filter((v) => typeof v === 'number' && Number.isFinite(v));
        const avgExamRatio = examScores.length > 0
            ? Math.min(1, Math.max(0, (examScores.reduce((a, b) => a + b, 0) / examScores.length) / 1500))
            : 0;

        const volumeFactor = Math.min(1, totalChecked / 60);
        const probabilityPct = totalChecked === 0 && examScores.length === 0
            ? 0
            : Math.min(99, Math.max(5, Math.round((accuracyPct * 0.65) + (avgExamRatio * 100 * 0.25) + (volumeFactor * 10))));

        return {
            totalChecked,
            totalCorrect,
            accuracyPct,
            probabilityPct,
            examScoresCount: examScores.length,
            perSection,
            sectionKeys,
            sectionNames
        };
    }

    let activeLiveChartSubject = 'All';

    function getLocalDateKey(ts) {
        const d = ts ? new Date(ts) : new Date();
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${day}`;
    }

    function formatShortRuDate(dateKey) {
        const parts = String(dateKey || '').split('-');
        if (parts.length !== 3) return dateKey;
        const months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
        const mIdx = Math.max(0, Math.min(11, parseInt(parts[1], 10) - 1));
        return `${parseInt(parts[2], 10)} ${months[mIdx]}`;
    }

    function inferSectionKeyFromAnyId(qid, explicitCat) {
        if (explicitCat && ['Reading', 'Math', 'Logic', 'Biology', 'Chemistry', 'Physics'].includes(explicitCat)) {
            return explicitCat;
        }
        const low = String(qid || '').toLowerCase();
        if (low.includes('read') || low.includes('off-r')) return 'Reading';
        if (low.includes('math') || low.includes('off-m') || low.startsWith('m-')) return 'Math';
        if (low.includes('logic') || low.includes('off-l') || low.startsWith('l-')) return 'Logic';
        if (low.includes('bio') || low.includes('off-b') || low.startsWith('b-')) return 'Biology';
        if (low.includes('chem') || low.includes('off-c') || low.startsWith('c-')) return 'Chemistry';
        if (low.includes('phys') || low.includes('off-p') || low.startsWith('p-')) return 'Physics';
        return activePracticeCategory && ['Reading', 'Math', 'Logic', 'Biology', 'Chemistry', 'Physics'].includes(activePracticeCategory)
            ? activePracticeCategory
            : 'Math';
    }

    function getDailyStatsLog() {
        const raw = getStorage('cents_daily_stats_v1');
        return (raw && typeof raw === 'object' && !Array.isArray(raw)) ? raw : {};
    }

    function ensureDailyStatsSeededFromHistory() {
        const log = getDailyStatsLog();
        if (Object.keys(log).length > 0) return log;
        const stats = computeAccountStatsBlocks();
        if (stats.totalChecked > 0) {
            const todayKey = getLocalDateKey();
            const bySec = {};
            stats.sectionKeys.forEach((k) => {
                const s = stats.perSection[k] || { checked: 0, correct: 0 };
                bySec[k] = { solved: s.checked, correct: s.correct };
            });
            log[todayKey] = {
                solved: stats.totalChecked,
                correct: stats.totalCorrect,
                bySec
            };
            setStorage('cents_daily_stats_v1', log);
        }
        return log;
    }

    function recordDailySolveEvent(questionId, isCorrect, explicitSectionKey) {
        const log = ensureDailyStatsSeededFromHistory();
        const todayKey = getLocalDateKey();
        const secKey = inferSectionKeyFromAnyId(questionId, explicitSectionKey);
        if (!log[todayKey]) {
            log[todayKey] = { solved: 0, correct: 0, bySec: {} };
        }
        log[todayKey].solved = (log[todayKey].solved || 0) + 1;
        if (isCorrect) {
            log[todayKey].correct = (log[todayKey].correct || 0) + 1;
        }
        if (!log[todayKey].bySec) log[todayKey].bySec = {};
        if (!log[todayKey].bySec[secKey]) {
            log[todayKey].bySec[secKey] = { solved: 0, correct: 0 };
        }
        log[todayKey].bySec[secKey].solved += 1;
        if (isCorrect) {
            log[todayKey].bySec[secKey].correct += 1;
        }
        setStorage('cents_daily_stats_v1', log);

        const chartsModal = document.getElementById('live-charts-modal');
        if (chartsModal && !chartsModal.classList.contains('hide')) {
            renderLiveChartsModal();
        }
    }

    function buildLastNDaysKeys(nDays) {
        const keys = [];
        const now = new Date();
        for (let i = nDays - 1; i >= 0; i--) {
            const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
            keys.push(getLocalDateKey(d));
        }
        return keys;
    }

    function renderLiveThinLineSvg(seriesPoints, subjectTitle) {
        const W = 680;
        const H = 230;
        const padL = 38;
        const padR = 38;
        const padT = 22;
        const padB = 34;
        const plotW = W - padL - padR;
        const plotH = H - padT - padB;

        const maxSolved = Math.max(5, ...seriesPoints.map((p) => p.solvedToday));
        const count = seriesPoints.length;

        const xAt = (idx) => count <= 1 ? padL + plotW / 2 : padL + (idx / (count - 1)) * plotW;
        const ySolvedAt = (val) => padT + plotH - (val / maxSolved) * plotH;
        const yPctAt = (pct) => padT + plotH - (Math.max(0, Math.min(100, pct)) / 100) * plotH;

        const solvedCoords = seriesPoints.map((p, idx) => `${xAt(idx).toFixed(1)},${ySolvedAt(p.solvedToday).toFixed(1)}`).join(' ');
        const pctCoords = seriesPoints.map((p, idx) => `${xAt(idx).toFixed(1)},${yPctAt(p.cumulativeAvgPct).toFixed(1)}`).join(' ');

        const gridLines = [0, 0.25, 0.5, 0.75, 1].map((t) => {
            const y = (padT + plotH * (1 - t)).toFixed(1);
            const pctLabel = Math.round(t * 100) + '%';
            const solLabel = Math.round(t * maxSolved);
            return `
                <line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" stroke="currentColor" stroke-opacity="0.10" stroke-width="1" />
                <text x="${padL - 6}" y="${Number(y) + 3}" text-anchor="end" font-size="9" fill="currentColor" opacity="0.55">${solLabel}</text>
                <text x="${W - padR + 6}" y="${Number(y) + 3}" text-anchor="start" font-size="9" fill="var(--accent-companion, #10b981)" opacity="0.80">${pctLabel}</text>
            `;
        }).join('');

        const dotsAndLabels = seriesPoints.map((p, idx) => {
            const cx = xAt(idx).toFixed(1);
            const cyS = ySolvedAt(p.solvedToday).toFixed(1);
            const cyP = yPctAt(p.cumulativeAvgPct).toFixed(1);
            const showDateLbl = count <= 10 || idx % 2 === 0 || idx === count - 1;
            const safeInfo = escapeAttr(`${p.label} (${subjectTitle}): решено ${p.solvedToday} • средний % правильных: ${p.cumulativeAvgPct}%`);
            return `
                ${showDateLbl ? `<text x="${cx}" y="${H - 10}" text-anchor="middle" font-size="9.5" fill="currentColor" opacity="0.65">${p.label}</text>` : ''}
                <circle cx="${cx}" cy="${cyS}" r="3.2" fill="var(--accent-color)" class="cursor-pointer"
                        onmouseenter="document.getElementById('live-chart-hover-readout').textContent='${safeInfo}'"></circle>
                <circle cx="${cx}" cy="${cyP}" r="3.0" fill="var(--accent-companion, #10b981)" class="cursor-pointer"
                        onmouseenter="document.getElementById('live-chart-hover-readout').textContent='${safeInfo}'"></circle>
            `;
        }).join('');

        return `
            <svg viewBox="0 0 ${W} ${H}" class="w-full h-52 sm:h-60 select-none overflow-visible">
                ${gridLines}
                <polyline fill="none" stroke="var(--accent-color)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" points="${solvedCoords}" />
                <polyline fill="none" stroke="var(--accent-companion, #10b981)" stroke-width="1.75" stroke-dasharray="4 2.5" stroke-linecap="round" stroke-linejoin="round" points="${pctCoords}" />
                ${dotsAndLabels}
            </svg>
        `;
    }

    function renderLiveChartsModal() {
        const log = ensureDailyStatsSeededFromHistory();
        const subj = activeLiveChartSubject || 'All';
        const subjectTitles = {
            All: 'Все предметы (Общий график)',
            Reading: 'Reading Comprehension',
            Math: 'Mathematics',
            Logic: 'Logic & Data',
            Biology: 'Biology',
            Chemistry: 'Chemistry',
            Physics: 'Physics'
        };

        const titleEl = document.getElementById('live-charts-modal-title');
        if (titleEl) titleEl.textContent = subjectTitles[subj] || subj;

        document.querySelectorAll('.live-chart-tab-btn').forEach((btn) => {
            const isSel = btn.getAttribute('data-chart-sec') === subj;
            btn.className = isSel
                ? 'live-chart-tab-btn profile-accent-btn px-3.5 py-1.5 rounded-full text-xs font-bold cursor-pointer transition'
                : 'live-chart-tab-btn custom-styled-select px-3.5 py-1.5 rounded-full text-xs font-bold cursor-pointer transition';
        });

        // Build chronological day keys (at least last 10 days + any earlier recorded days)
        const recordedKeys = Object.keys(log).sort();
        const baseDays = buildLastNDaysKeys(10);
        const allKeysSet = new Set([...recordedKeys, ...baseDays]);
        const sortedDays = Array.from(allKeysSet).sort().slice(-14);

        let runningSolved = 0;
        let runningCorrect = 0;
        const points = sortedDays.map((dKey) => {
            const dayRec = log[dKey] || { solved: 0, correct: 0, bySec: {} };
            let daySolved = 0;
            let dayCorrect = 0;
            if (subj === 'All') {
                daySolved = dayRec.solved || 0;
                dayCorrect = dayRec.correct || 0;
            } else {
                const sRec = (dayRec.bySec && dayRec.bySec[subj]) || { solved: 0, correct: 0 };
                daySolved = sRec.solved || 0;
                dayCorrect = sRec.correct || 0;
            }
            runningSolved += daySolved;
            runningCorrect += dayCorrect;
            const cumulativeAvgPct = runningSolved > 0 ? Math.round((runningCorrect / runningSolved) * 100) : 0;
            return {
                dateKey: dKey,
                label: formatShortRuDate(dKey),
                solvedToday: daySolved,
                correctToday: dayCorrect,
                cumulativeAvgPct
            };
        });

        const todayKey = getLocalDateKey();
        const todayPoint = points.find((p) => p.dateKey === todayKey) || { solvedToday: 0, correctToday: 0, cumulativeAvgPct: 0 };
        const todayAccPct = todayPoint.solvedToday > 0 ? Math.round((todayPoint.correctToday / todayPoint.solvedToday) * 100) : 0;
        const overallAvgPct = runningSolved > 0 ? Math.round((runningCorrect / runningSolved) * 100) : 0;

        const elTodaySol = document.getElementById('chart-kpi-today-solved');
        const elTodayAcc = document.getElementById('chart-kpi-today-acc');
        const elAllSol = document.getElementById('chart-kpi-all-solved');
        const elAllAcc = document.getElementById('chart-kpi-all-acc');
        if (elTodaySol) elTodaySol.textContent = String(todayPoint.solvedToday);
        if (elTodayAcc) elTodayAcc.textContent = todayAccPct + '%';
        if (elAllSol) elAllSol.textContent = String(runningSolved);
        if (elAllAcc) elAllAcc.textContent = overallAvgPct + '%';

        const svgWrap = document.getElementById('live-chart-svg-wrap');
        if (svgWrap) {
            svgWrap.innerHTML = renderLiveThinLineSvg(points, subjectTitles[subj] || subj);
        }

        // Render clickable subject cards below (including "Все предметы") with persistent accent highlight on active selection
        const cardsWrap = document.getElementById('live-chart-subject-cards');
        if (cardsWrap) {
            const secs = ['All', 'Reading', 'Math', 'Logic', 'Biology', 'Chemistry', 'Physics'];
            const shortNames = {
                All: 'Все предметы',
                Reading: 'Reading',
                Math: 'Math',
                Logic: 'Logic & Data',
                Biology: 'Biology',
                Chemistry: 'Chemistry',
                Physics: 'Physics'
            };
            cardsWrap.innerHTML = secs.map((sKey) => {
                let sTotal = 0;
                let sCorr = 0;
                let sToday = 0;
                Object.entries(log).forEach(([dk, rec]) => {
                    if (sKey === 'All') {
                        sTotal += rec.solved || 0;
                        sCorr += rec.correct || 0;
                        if (dk === todayKey) sToday += rec.solved || 0;
                    } else {
                        const b = rec && rec.bySec && rec.bySec[sKey];
                        if (!b) return;
                        sTotal += b.solved || 0;
                        sCorr += b.correct || 0;
                        if (dk === todayKey) sToday += b.solved || 0;
                    }
                });
                const sPct = sTotal > 0 ? Math.round((sCorr / sTotal) * 100) : 0;
                const isSelected = subj === sKey;
                const selectedStyle = isSelected
                    ? 'border-color: var(--accent-color); background-color: var(--accent-soft); box-shadow: 0 0 0 1.5px var(--accent-color), 0 8px 20px -6px var(--accent-soft);'
                    : '';
                const badgeCls = isSelected ? 'profile-accent-btn' : 'profile-tag';
                return `
                    <div onclick="selectLiveChartSubject('${sKey}')" style="${selectedStyle}" class="card-bg border rounded-2xl p-3 cursor-pointer hover:opacity-95 transition flex items-center justify-between gap-2 ${sKey === 'All' ? 'col-span-2 sm:col-span-3' : ''}">
                        <div class="min-w-0">
                            <div class="text-xs font-extrabold truncate">${shortNames[sKey]}</div>
                            <div class="text-[11px] sub-text">Сегодня: ${sToday} • Всего: ${sTotal}</div>
                        </div>
                        <span class="text-xs font-extrabold px-2.5 py-1 rounded-full ${badgeCls} flex-shrink-0">${sPct}%</span>
                    </div>
                `;
            }).join('');
        }
    }

    function syncNavbarProfileButtonHighlight() {
        const btn = document.getElementById('account-menu-btn');
        if (!btn) return;
        const profModal = document.getElementById('account-profile-modal');
        const chartsModal = document.getElementById('live-charts-modal');
        const isInProfileOrCharts = (profModal && !profModal.classList.contains('hide'))
            || (chartsModal && !chartsModal.classList.contains('hide'));
        if (isInProfileOrCharts) {
            btn.classList.remove('custom-styled-select');
            btn.classList.add('profile-accent-btn');
        } else {
            btn.classList.remove('profile-accent-btn');
            btn.classList.add('custom-styled-select');
        }
    }

    function openLiveChartsModal(subjectKey) {
        activeLiveChartSubject = subjectKey || 'All';
        const modal = document.getElementById('live-charts-modal');
        if (!modal) return;
        renderLiveChartsModal();
        modal.classList.remove('hide');
        syncNavbarProfileButtonHighlight();
    }

    function closeLiveChartsModal() {
        const modal = document.getElementById('live-charts-modal');
        if (modal) modal.classList.add('hide');
        syncNavbarProfileButtonHighlight();
    }

    function selectLiveChartSubject(subjectKey) {
        activeLiveChartSubject = subjectKey || 'All';
        renderLiveChartsModal();
    }

    function openAccountProfileModal() {
        const modal = document.getElementById('account-profile-modal');
        if (!modal) return;
        const acc = getTwoAccountRecord(currentUser) || {
            key: currentUser || 'kara.1141',
            login: currentUser || 'kara.1141',
            displayName: 'Аккаунт',
            emoji: '👤'
        };
        const titleEl = document.getElementById('profile-modal-title');
        const loginEl = document.getElementById('profile-modal-login');
        const emojiEl = document.getElementById('profile-modal-emoji');
        if (titleEl) titleEl.textContent = acc.displayName || acc.login;
        if (loginEl) loginEl.textContent = '@' + (acc.login || acc.key);
        if (emojiEl) emojiEl.textContent = acc.emoji || (normalizeTwoAccountKey(acc.key) === 'dominika' ? '👱‍♀️' : '👱‍♂️');

        const stats = computeAccountStatsBlocks();
        const totalEl = document.getElementById('stat-total-solved');
        const accEl = document.getElementById('stat-accuracy-pct');
        const probEl = document.getElementById('stat-probability-pct');
        if (totalEl) totalEl.textContent = String(stats.totalChecked);
        if (accEl) accEl.textContent = stats.accuracyPct + '%';
        if (probEl) probEl.textContent = stats.probabilityPct + '%';

        const gridEl = document.getElementById('profile-sections-stats-grid');
        if (gridEl) {
            gridEl.innerHTML = stats.sectionKeys.map((k) => {
                const sec = stats.perSection[k] || { checked: 0, correct: 0 };
                const secAcc = sec.checked > 0 ? Math.round((sec.correct / sec.checked) * 100) : 0;
                return `
                    <div class="box-content-bg border rounded-2xl p-3 flex items-center justify-between gap-2">
                        <div class="min-w-0">
                            <div class="text-xs font-bold truncate">${stats.sectionNames[k]}</div>
                            <div class="text-[11px] sub-text">${escapeHtml(tUi('statSecLine', sec.checked, sec.correct))}</div>
                        </div>
                        <span class="text-xs font-extrabold px-2.5 py-1 rounded-full profile-tag flex-shrink-0">${secAcc}%</span>
                    </div>
                `;
            }).join('');
        }

        modal.classList.remove('hide');
        syncNavbarProfileButtonHighlight();
    }

    function closeAccountProfileModal() {
        const modal = document.getElementById('account-profile-modal');
        if (modal) modal.classList.add('hide');
        syncNavbarProfileButtonHighlight();
    }

    function handleAccountButtonClick() {
        const sessionUser = localStorage.getItem(ACTIVE_SESSION_KEY);
        const activeAcc = sessionUser ? getTwoAccountRecord(sessionUser) : null;
        if (activeAcc) {
            openAccountProfileModal();
        } else {
            openAccountModal(false);
        }
    }

    function initSimulatorApp() {
        try {
        applyTheme(currentTheme);
        applySiteLanguage(currentUiLang);
        if (!localStorage.getItem('cents_clean_deploy_v1')) {
            try {
                localStorage.removeItem(ACCOUNTS_REGISTRY_KEY);
                localStorage.removeItem(ACTIVE_SESSION_KEY);
                localStorage.removeItem('cents_current_user');
                Object.keys(localStorage).forEach((k) => {
                    if (k.startsWith('acc_') || k.startsWith('cents_')) {
                        localStorage.removeItem(k);
                    }
                });
                if (typeof indexedDB !== 'undefined') {
                    indexedDB.deleteDatabase('cents_raw_photo_tasks_db');
                }
                localStorage.setItem('cents_clean_deploy_v1', '1');
            } catch (e) {}
        }

        const rawSession = localStorage.getItem(ACTIVE_SESSION_KEY) || localStorage.getItem('cents_current_user');
        const hasSavedAccount = Boolean(rawSession);
        const activeAcc = hasSavedAccount ? getTwoAccountRecord(rawSession) : FIXED_TWO_ACCOUNTS.dima;
        currentUser = activeAcc.key;
        if (hasSavedAccount) {
            localStorage.setItem('cents_current_user', currentUser);
            localStorage.setItem(ACTIVE_SESSION_KEY, currentUser);
        }

        updateTwoAccountNavbarUi();
        applyProfileAccent(activeAcc);
        if (!hasSavedAccount) {
            openAccountModal(true);
        }
        loadPhotosFromIndexedDbForUser().then(() => {
            if (photoBlockOpen) renderPhotoTasksBlock();
            if (activePracticeCategory === 'MyPhotos' && activeTabName === 'practice') {
                refreshUnifiedPhotoSectionsOnly();
            }
        });
        renderTestBlocks();
        initHorizontalSwipeNavigation();

        let savedView = null;
        try {
            const sRaw = sessionStorage.getItem('cents_exact_reload_state_v1') || localStorage.getItem('cents_global_last_view_v1');
            if (sRaw) savedView = JSON.parse(sRaw);
        } catch (e) {}
        if (!savedView || !savedView.tab) {
            savedView = getStorage('cents_last_view_v1');
        }
        if (savedView && savedView.bookmarkCategory) {
            activeBookmarkCategory = savedView.bookmarkCategory;
            lastBookmarkCategory = savedView.bookmarkCategory;
        }
        if (savedView && savedView.photoBlockCategory && savedView.photoBlockCategory !== 'All') {
            activePhotoBlockCategory = savedView.photoBlockCategory;
        } else {
            activePhotoBlockCategory = 'Unassigned';
        }

        if (savedView && VALID_TABS.includes(savedView.tab)) {
            isRestoringReloadState = true;
            try {
                if (savedView.tab === 'practice' && savedView.practiceCategory) {
                    activePracticeCategory = savedView.practiceCategory;
                }
                switchTab(savedView.tab);
                if (savedView.tab === 'practice') {
                    if (savedView.photoBlockOpen || savedView.practiceCategory === 'MyPhotos') {
                        loadPractice('MyPhotos', false);
                    } else if (savedView.practiceCategory) {
                        loadPractice(savedView.practiceCategory, false);
                    }
                }
                if (typeof savedView.scrollY === 'number' && savedView.scrollY > 0) {
                    const targetScroll = savedView.scrollY;
                    if (savedView.tab === 'practice' && typeof practiceRenderEntries !== 'undefined' && Array.isArray(practiceRenderEntries)) {
                        const estIdx = Math.min(practiceRenderEntries.length, Math.max(10, Math.ceil(targetScroll / 320) + 5));
                        if (estIdx > practiceRenderedCount) {
                            appendNextPracticeBatch(estIdx);
                        }
                    }
                    requestAnimationFrame(() => {
                        window.scrollTo(0, targetScroll);
                        setTimeout(() => window.scrollTo(0, targetScroll), 120);
                    });
                }
            } finally {
                isRestoringReloadState = false;
                persistCurrentViewState(savedView);
            }
        } else {
            switchTab('home');
        }


        let pendingSelectedText = '';

        function updateTextSelectionActionPopover(pointerClientX, pointerClientY) {
            const tooltip = document.getElementById('selection-tooltip');
            if (!tooltip) return;
            const selObj = window.getSelection ? window.getSelection() : null;
            const sel = selObj ? selObj.toString().trim() : '';
            if (!sel) {
                pendingSelectedText = '';
                tooltip.classList.add('hide');
                return;
            }
            const anchorNode = selObj.anchorNode;
            const anchorEl = anchorNode && (anchorNode.nodeType === 1 ? anchorNode : anchorNode.parentElement);
            if (anchorEl && (anchorEl.closest('#dict-widget') || anchorEl.closest('#selection-tooltip'))) {
                return;
            }

            pendingSelectedText = sel;
            let x = typeof pointerClientX === 'number' ? pointerClientX : 0;
            let y = typeof pointerClientY === 'number' ? pointerClientY : 0;
            try {
                if (selObj.rangeCount > 0) {
                    const rect = selObj.getRangeAt(0).getBoundingClientRect();
                    if (rect && (rect.width > 0 || rect.height > 0)) {
                        x = rect.left + rect.width / 2;
                        y = rect.top - 10;
                    }
                }
            } catch (err) {}

            tooltip.classList.remove('hide');
            const tipW = tooltip.offsetWidth || 235;
            const tipH = tooltip.offsetHeight || 42;
            const safeLeft = Math.max(12, Math.min(window.innerWidth - tipW - 12, x - tipW / 2));
            const safeTop = y - tipH < 12 ? Math.min(window.innerHeight - tipH - 12, y + 28) : (y - tipH);
            tooltip.style.left = Math.round(safeLeft) + 'px';
            tooltip.style.top = Math.round(safeTop) + 'px';
        }

        const selDictBtn = document.getElementById('sel-to-dict-btn');
        const selTransBtn = document.getElementById('sel-to-trans-btn');
        if (selDictBtn) {
            selDictBtn.onclick = function (ev) {
                ev.preventDefault();
                ev.stopPropagation();
                const chosenText = pendingSelectedText;
                const tip = document.getElementById('selection-tooltip');
                if (tip) tip.classList.add('hide');
                if (window.getSelection) window.getSelection().removeAllRanges();
                if (chosenText) quickAddWord(chosenText);
            };
        }
        if (selTransBtn) {
            selTransBtn.onclick = function (ev) {
                ev.preventDefault();
                ev.stopPropagation();
                const chosenText = pendingSelectedText;
                const tip = document.getElementById('selection-tooltip');
                if (tip) tip.classList.add('hide');
                if (window.getSelection) window.getSelection().removeAllRanges();
                if (chosenText) sendSelectionToTranslator(chosenText);
            };
        }

        document.addEventListener('mouseup', function (e) {
            if (e && e.target && (e.target.closest('#selection-tooltip') || e.target.closest('#dict-widget'))) return;
            setTimeout(() => updateTextSelectionActionPopover(e.clientX, e.clientY), 10);
        });
        document.addEventListener('touchend', function (e) {
            if (e && e.target && (e.target.closest('#selection-tooltip') || e.target.closest('#dict-widget'))) return;
            const t = e && e.changedTouches && e.changedTouches[0];
            setTimeout(() => updateTextSelectionActionPopover(t ? t.clientX : undefined, t ? t.clientY : undefined), 40);
        });
        document.addEventListener('selectionchange', function () {
            const sel = window.getSelection ? window.getSelection().toString().trim() : '';
            if (!sel) {
                const tip = document.getElementById('selection-tooltip');
                if (tip) tip.classList.add('hide');
            }
        });
        startLiveFirebasePolling();
        } catch (err) {
            console.error('initSimulatorApp error:', err);
        }
    }

    (function registerWindowApis() {
        const map = {
            'toggleTheme': typeof toggleTheme !== 'undefined' ? toggleTheme : undefined,
            'setSiteLanguage': typeof setSiteLanguage !== 'undefined' ? setSiteLanguage : undefined,
            'applySiteLanguage': typeof applySiteLanguage !== 'undefined' ? applySiteLanguage : undefined,
            'openAccountModal': typeof openAccountModal !== 'undefined' ? openAccountModal : undefined,
            'closeAccountModal': typeof closeAccountModal !== 'undefined' ? closeAccountModal : undefined,
            'setAccountModalMode': typeof setAccountModalMode !== 'undefined' ? setAccountModalMode : undefined,
            'submitAccountAuth': typeof submitAccountAuth !== 'undefined' ? submitAccountAuth : undefined,
            'quickFillAccountLogin': typeof quickFillAccountLogin !== 'undefined' ? quickFillAccountLogin : undefined,
            'selectFixedProfileAccount': typeof selectFixedProfileAccount !== 'undefined' ? selectFixedProfileAccount : undefined,
            'logoutAccount': typeof logoutAccount !== 'undefined' ? logoutAccount : undefined,
            'openPhotoUploadModal': typeof openPhotoUploadModal !== 'undefined' ? openPhotoUploadModal : undefined,
            'closePhotoUploadModal': typeof closePhotoUploadModal !== 'undefined' ? closePhotoUploadModal : undefined,
            'handlePhotoModalFileSelect': typeof handlePhotoModalFileSelect !== 'undefined' ? handlePhotoModalFileSelect : undefined,
            'handlePhotoModalDrop': typeof handlePhotoModalDrop !== 'undefined' ? handlePhotoModalDrop : undefined,
            'submitPhotoUploadModal': typeof submitPhotoUploadModal !== 'undefined' ? submitPhotoUploadModal : undefined,
            'deleteAllPhotosFromAlbumConfirmed': typeof deleteAllPhotosFromAlbumConfirmed !== 'undefined' ? deleteAllPhotosFromAlbumConfirmed : undefined,
            'redistributeAllPhotosByRulesConfirmed': typeof redistributeAllPhotosByRulesConfirmed !== 'undefined' ? redistributeAllPhotosByRulesConfirmed : undefined,
            'selectUnifiedPhotoCategory': typeof selectUnifiedPhotoCategory !== 'undefined' ? selectUnifiedPhotoCategory : undefined,
            'renderUnifiedMyPhotosSection': typeof renderUnifiedMyPhotosSection !== 'undefined' ? renderUnifiedMyPhotosSection : undefined,
            'handleUnifiedPhotoUpload': typeof handleUnifiedPhotoUpload !== 'undefined' ? handleUnifiedPhotoUpload : undefined,
            'openStandaloneMyPhotosView': typeof openStandaloneMyPhotosView !== 'undefined' ? openStandaloneMyPhotosView : undefined,
            'handleStandalonePhotoUpload': typeof handleStandalonePhotoUpload !== 'undefined' ? handleStandalonePhotoUpload : undefined,
            'renderStandaloneMyPhotosView': typeof renderStandaloneMyPhotosView !== 'undefined' ? renderStandaloneMyPhotosView : undefined,
            'setVocabGameMode': typeof setVocabGameMode !== 'undefined' ? setVocabGameMode : undefined,
            'startVocabRunnerGame': typeof startVocabRunnerGame !== 'undefined' ? startVocabRunnerGame : undefined,
            'chooseVocabGameLane': typeof chooseVocabGameLane !== 'undefined' ? chooseVocabGameLane : undefined,
            'togglePracticeStripFold': typeof togglePracticeStripFold !== 'undefined' ? togglePracticeStripFold : undefined,
            'togglePracticeFloatingMenu': typeof togglePracticeFloatingMenu !== 'undefined' ? togglePracticeFloatingMenu : undefined,
            'closePracticeFloatingMenu': typeof closePracticeFloatingMenu !== 'undefined' ? closePracticeFloatingMenu : undefined,
            'handleAccountButtonClick': typeof handleAccountButtonClick !== 'undefined' ? handleAccountButtonClick : undefined,
            'openAccountProfileModal': typeof openAccountProfileModal !== 'undefined' ? openAccountProfileModal : undefined,
            'openLiveChartsModal': typeof openLiveChartsModal !== 'undefined' ? openLiveChartsModal : undefined,
            'closeLiveChartsModal': typeof closeLiveChartsModal !== 'undefined' ? closeLiveChartsModal : undefined,
            'selectLiveChartSubject': typeof selectLiveChartSubject !== 'undefined' ? selectLiveChartSubject : undefined,
            'closeAccountProfileModal': typeof closeAccountProfileModal !== 'undefined' ? closeAccountProfileModal : undefined,
            'openAccentPickerModal': typeof openAccentPickerModal !== 'undefined' ? openAccentPickerModal : undefined,
            'closeAccentPickerModal': typeof closeAccentPickerModal !== 'undefined' ? closeAccentPickerModal : undefined,
            'selectPresetAccentHex': typeof selectPresetAccentHex !== 'undefined' ? selectPresetAccentHex : undefined,
            'toggleCustomColorWheelPanel': typeof toggleCustomColorWheelPanel !== 'undefined' ? toggleCustomColorWheelPanel : undefined,
            'updateCustomColorFromSliders': typeof updateCustomColorFromSliders !== 'undefined' ? updateCustomColorFromSliders : undefined,
            'onHueWheelPointerDown': typeof onHueWheelPointerDown !== 'undefined' ? onHueWheelPointerDown : undefined,
            'confirmAccentChoice': typeof confirmAccentChoice !== 'undefined' ? confirmAccentChoice : undefined,
            'deleteAccountByLogin': typeof deleteAccountByLogin !== 'undefined' ? deleteAccountByLogin : undefined,
            'resetCurrentAccountCompletely': typeof resetCurrentAccountCompletely !== 'undefined' ? resetCurrentAccountCompletely : undefined,
            'savePracticeAnswerState': typeof savePracticeAnswerState !== 'undefined' ? savePracticeAnswerState : undefined,
            'switchTab': typeof switchTab !== 'undefined' ? switchTab : undefined,
            'enterPracticeTab': typeof enterPracticeTab !== 'undefined' ? enterPracticeTab : undefined,
            'exitPracticeToHub': typeof exitPracticeToHub !== 'undefined' ? exitPracticeToHub : undefined,
            'loadPractice': typeof loadPractice !== 'undefined' ? loadPractice : undefined,
            'appendNextPracticeBatch': typeof appendNextPracticeBatch !== 'undefined' ? appendNextPracticeBatch : undefined,
            'scrubToPracticeTask': typeof scrubToPracticeTask !== 'undefined' ? scrubToPracticeTask : undefined,
            'jumpToPracticeTaskNumber': typeof jumpToPracticeTaskNumber !== 'undefined' ? jumpToPracticeTaskNumber : undefined,
            'openPracticePhotoBlock': typeof openPracticePhotoBlock !== 'undefined' ? openPracticePhotoBlock : undefined,
            'moveAllPhotosToDelete': typeof moveAllPhotosToDelete !== 'undefined' ? moveAllPhotosToDelete : undefined,
            'autoSortExistingPhotosByOcr': typeof autoSortExistingPhotosByOcr !== 'undefined' ? autoSortExistingPhotosByOcr : undefined,
            'clearAllPhotosInDelete': typeof clearAllPhotosInDelete !== 'undefined' ? clearAllPhotosInDelete : undefined,
            'filterPhotoTasks': typeof filterPhotoTasks !== 'undefined' ? filterPhotoTasks : undefined,
            'handlePhotoTaskUpload': typeof handlePhotoTaskUpload !== 'undefined' ? handlePhotoTaskUpload : undefined,
            'handleCurrentSectionPhotoUpload': typeof handleCurrentSectionPhotoUpload !== 'undefined' ? handleCurrentSectionPhotoUpload : undefined,
            'movePhotoTaskToCategory': typeof movePhotoTaskToCategory !== 'undefined' ? movePhotoTaskToCategory : undefined,
            'deletePhotoTask': typeof deletePhotoTask !== 'undefined' ? deletePhotoTask : undefined,
            'openRawPhotoViewer': typeof openRawPhotoViewer !== 'undefined' ? openRawPhotoViewer : undefined,
            'regenerateCurrentPractice': typeof regenerateCurrentPractice !== 'undefined' ? regenerateCurrentPractice : undefined,
            'checkPracticeTask': typeof checkPracticeTask !== 'undefined' ? checkPracticeTask : undefined,
            'resetPracticeTask': typeof resetPracticeTask !== 'undefined' ? resetPracticeTask : undefined,
            'togglePracticeCardCollapse': typeof togglePracticeCardCollapse !== 'undefined' ? togglePracticeCardCollapse : undefined,
            'togglePassageCollapse': typeof togglePassageCollapse !== 'undefined' ? togglePassageCollapse : undefined,
            'replaceOrCreateAnalogTask': typeof replaceOrCreateAnalogTask !== 'undefined' ? replaceOrCreateAnalogTask : undefined,
            'closeAnalogTask': typeof closeAnalogTask !== 'undefined' ? closeAnalogTask : undefined,
            'nextRandomPracticeQuestion': typeof nextRandomPracticeQuestion !== 'undefined' ? nextRandomPracticeQuestion : undefined,
            'resetRandomPracticeHistory': typeof resetRandomPracticeHistory !== 'undefined' ? resetRandomPracticeHistory : undefined,
            'openPassageFullscreen': typeof openPassageFullscreen !== 'undefined' ? openPassageFullscreen : undefined,
            'adjustPassageFontSize': typeof adjustPassageFontSize !== 'undefined' ? adjustPassageFontSize : undefined,
            'closePassageFullscreen': typeof closePassageFullscreen !== 'undefined' ? closePassageFullscreen : undefined,
            'updateSplitCardsConveyorFocus': typeof updateSplitCardsConveyorFocus !== 'undefined' ? updateSplitCardsConveyorFocus : undefined,
            'stepSplitQuestionCard': typeof stepSplitQuestionCard !== 'undefined' ? stepSplitQuestionCard : undefined,
            'toggleWidget': typeof toggleWidget !== 'undefined' ? toggleWidget : undefined,
            'translateWidget': typeof translateWidget !== 'undefined' ? translateWidget : undefined,
            'saveWidgetWord': typeof saveWidgetWord !== 'undefined' ? saveWidgetWord : undefined,
            'clearTranslatorInputField': typeof clearTranslatorInputField !== 'undefined' ? clearTranslatorInputField : undefined,
            'clearTranslatorResultField': typeof clearTranslatorResultField !== 'undefined' ? clearTranslatorResultField : undefined,
            'clearTranslatorAll': typeof clearTranslatorAll !== 'undefined' ? clearTranslatorAll : undefined,
            'syncTranslatorClearButtons': typeof syncTranslatorClearButtons !== 'undefined' ? syncTranslatorClearButtons : undefined,
            'sendSelectionToTranslator': typeof sendSelectionToTranslator !== 'undefined' ? sendSelectionToTranslator : undefined,
            'removeDictWord': typeof removeDictWord !== 'undefined' ? removeDictWord : undefined,
            'toggleBookmark': typeof toggleBookmark !== 'undefined' ? toggleBookmark : undefined,
            'openTaskHintPopover': typeof openTaskHintPopover !== 'undefined' ? openTaskHintPopover : undefined,
            'closeTaskHintPopover': typeof closeTaskHintPopover !== 'undefined' ? closeTaskHintPopover : undefined,
            'setTaskHintLang': typeof setTaskHintLang !== 'undefined' ? setTaskHintLang : undefined,
            'filterBookmarksByCategory': typeof filterBookmarksByCategory !== 'undefined' ? filterBookmarksByCategory : undefined,
            'startGeneratedTest': typeof startGeneratedTest !== 'undefined' ? startGeneratedTest : undefined,
            'resetExamScore': typeof resetExamScore !== 'undefined' ? resetExamScore : undefined,
            'retakeExamNow': typeof retakeExamNow !== 'undefined' ? retakeExamNow : undefined,
            'toggleExp': typeof toggleExp !== 'undefined' ? toggleExp : undefined,
            'setLang': typeof setLang !== 'undefined' ? setLang : undefined,
            'checkSingleAnswer': typeof checkSingleAnswer !== 'undefined' ? checkSingleAnswer : undefined,
            'quitExam': typeof quitExam !== 'undefined' ? quitExam : undefined,
            'submitExam': typeof submitExam !== 'undefined' ? submitExam : undefined,
            'showErrorsMode': typeof showErrorsMode !== 'undefined' ? showErrorsMode : undefined,
        };
        Object.keys(map).forEach((k) => {
            if (typeof map[k] !== 'undefined') window[k] = map[k];
        });
    })();



    window.addEventListener('resize', () => {
        syncAllVisiblePillBubbles();
    });

    const bootApp = () => {
        initSimulatorApp();
        requestAnimationFrame(() => {
            syncAllVisiblePillBubbles();
            setTimeout(syncAllVisiblePillBubbles, 80);
        });
    };
    let scrollPersistTimer = null;
    window.addEventListener('scroll', () => {
        if (scrollPersistTimer) clearTimeout(scrollPersistTimer);
        scrollPersistTimer = setTimeout(() => {
            persistCurrentViewState();
        }, 180);
    }, { passive: true });
    window.addEventListener('beforeunload', () => {
        persistCurrentViewState();
    });

    window.addEventListener('load', syncAllVisiblePillBubbles);
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootApp);
    } else {
        bootApp();
    }
})();
