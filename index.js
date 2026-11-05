'use strict';

// Centralized interface copy keeps language changes consistent across the page.
// تجميع نصوص الواجهة هنا يجعل تبديل اللغة متناسقًا في كل أجزاء الموقع.
const LANGUAGE_COPY = { en: {} };
const LANGUAGE_ROWS = [
    ['creativeSpace','CREATIVE SPACE','مساحة إبداعية','ESPACIO CREATIVO','ESPACE CRÉATIF','KREATIVER RAUM'],
    ['introWorld','A LITTLE WORLD OF MY OWN','عالمي الصغير الخاص','UN PEQUEÑO MUNDO PROPIO','UN PETIT MONDE À MOI','MEINE KLEINE WELT'],
    ['introUniverse','A PERSONAL UNIVERSE OF IDEAS','عالم شخصي من الأفكار','UN UNIVERSO PERSONAL DE IDEAS','UN UNIVERS PERSONNEL D’IDÉES','EIN PERSÖNLICHES IDEENUNIVERSUM'],
    ['introTagline','IMAGINATION ✦ DESIGN ✦ STORIES','خيال ✦ تصميم ✦ حكايات','IMAGINACIÓN ✦ DISEÑO ✦ HISTORIAS','IMAGINATION ✦ DESIGN ✦ HISTOIRES','FANTASIE ✦ DESIGN ✦ GESCHICHTEN'],
    ['introCopy','A small collection of my projects, interests, and ideas — made with care and still growing.','مجموعة صغيرة من مشاريعي واهتماماتي وأفكاري — صنعتها بحب وما زالت تكبر.','Una pequeña colección de mis proyectos, intereses e ideas, hecha con cariño y en constante crecimiento.','Une petite collection de mes projets, centres d’intérêt et idées, créée avec soin et toujours en évolution.','Eine kleine Sammlung meiner Projekte, Interessen und Ideen – mit Sorgfalt gestaltet und immer im Wandel.'],
    ['home','HOME','الرئيسية','INICIO','ACCUEIL','STARTSEITE'],
    ['about','ABOUT','من أنا','SOBRE MÍ','À PROPOS','ÜBER MICH'],
    ['contacts','CONTACTS','التواصل','CONTACTO','CONTACT','KONTAKT'],
    ['message','MESSAGE','رسالة','MENSAJE','MESSAGE','NACHRICHT'],
    ['primaryNavigation','Primary navigation','التنقل الرئيسي','Navegación principal','Navigation principale','Hauptnavigation'],
    ['localTime','LOCAL TIME','الوقت المحلي','HORA LOCAL','HEURE LOCALE','ORTSZEIT'],
    ['chess','CHESS','الشطرنج','AJEDREZ','ÉCHECS','SCHACH'],
    ['memory','MEMORY','الذاكرة','MEMORIA','MÉMOIRE','MEMORY'],
    ['theme','THEME','السمة','TEMA','THÈME','DESIGN'],
    ['language','LANGUAGE','اللغة','IDIOMA','LANGUE','SPRACHE'],
    ['chooseLanguage','Choose language','اختر اللغة','Elige un idioma','Choisir la langue','Sprache auswählen'],
    ['tapStar','TAP THE STAR','اضغطي على النجمة','TOCA LA ESTRELLA','TOUCHE L’ÉTOILE','STERN ANTIPPEN'],
    ['closeWelcome','Close welcome message','إغلاق رسالة الترحيب','Cerrar bienvenida','Fermer le message de bienvenue','Willkommensnachricht schließen'],
    ['noteFrom','A NOTE FROM MALAK','رسالة من ملك','UNA NOTA DE MALAK','UN MOT DE MALAK','EINE NACHRICHT VON MALAK'],
    ['welcomeTitle','YOU’RE VERY WELCOME','أهلًا وسهلًا بك','TE DOY LA BIENVENIDA','SOIS LA BIENVENUE','HERZLICH WILLKOMMEN'],
    ['welcomeCopy','Uhm, hi! Thank you so much for visiting my website. What do you think of it? What could I improve? If you have any suggestions or feedback, I’d be very grateful if you sent them to me!','أحم، أهلًا! شكرًا جدًا لزيارتك موقعي. إيه رأيك فيه، وإيه نقاط التحسين اللي أقدر أشتغل عليها؟ لو عندك أي ملاحظة، هكون شاكرة لو بعتها لي!','¡Ejem, hola! Muchas gracias por visitar mi sitio web. ¿Qué te parece y qué podría mejorar? Si tienes alguna sugerencia o comentario, ¡te agradecería mucho que me lo enviaras!','Euh, salut ! Merci beaucoup d’avoir visité mon site. Qu’en penses-tu et que pourrais-je améliorer ? Si tu as une remarque ou une suggestion, je serais très reconnaissante si tu me l’envoyais !','Ähm, hi! Vielen Dank für deinen Besuch auf meiner Website. Wie gefällt sie dir und was könnte ich verbessern? Wenn du einen Hinweis oder Vorschlag hast, würde ich mich sehr freuen, wenn du ihn mir schickst!'],
    ['sendMessage','SEND A MESSAGE','أرسلي رسالة','ENVIAR UN MENSAJE','ENVOYER UN MESSAGE','NACHRICHT SENDEN'],
    ['section','SECTION','القسم','SECCIÓN','SECTION','BEREICH'],
    ['whoIAm','1. WHO I AM','١. من أنا','1. QUIÉN SOY','1. QUI SUIS-JE','1. WER BIN ICH'],
    ['interests','2. INTERESTS','٢. اهتماماتي','2. INTERESES','2. CENTRES D’INTÉRÊT','2. INTERESSEN'],
    ['futureGoals','3. FUTURE GOALS','٣. أهدافي المستقبلية','3. METAS FUTURAS','3. OBJECTIFS FUTURS','3. ZUKUNFTSZIELE'],
    ['grade11','GRADE 11','الصف الحادي عشر','11.º CURSO','CLASSE DE PREMIÈRE','11. KLASSE'],
    ['bornDate','BORN: JUNE 24','تاريخ الميلاد: ٢٤ يونيو','NACIMIENTO: 24 DE JUNIO','NÉE LE 24 JUIN','GEBURTSTAG: 24. JUNI'],
    ['whoIAmHeading','WHO I AM','من أنا','QUIÉN SOY','QUI SUIS-JE','WER BIN ICH'],
    ['grade','GRADE','الصف الدراسي','CURSO','CLASSE','KLASSE'],
    ['born','BORN','تاريخ الميلاد','NACIMIENTO','NAISSANCE','GEBURTSTAG'],
    ['june24','JUNE 24','٢٤ يونيو','24 DE JUNIO','24 JUIN','24. JUNI'],
    ['location','LOCATION','الموقع','UBICACIÓN','LIEU','ORT'],
    ['locationValue','KAFR EL-SHEIKH, EG','كفر الشيخ، مصر','KAFR EL-SHEIJ, EGIPTO','KAFR EL-CHEIKH, ÉGYPTE','KAFR EL-SCHEICH, ÄGYPTEN'],
    ['bioParagraph1','I am Malak, a student in Grade 11 born on June 24th from Kafr El-Sheikh, Egypt. I am naturally curious, always eager to learn new things, explore my inner potential, and see what I am truly capable of achieving.','أنا ملك، طالبة في الصف الحادي عشر، وُلدت في ٢٤ يونيو وأعيش في كفر الشيخ، مصر. أحب التعلم واكتشاف أشياء جديدة واستكشاف قدراتي ومعرفة ما يمكنني تحقيقه.','Soy Malak, estudiante de 11.º curso, nacida el 24 de junio en Kafr el-Sheij, Egipto. Me encanta aprender cosas nuevas, explorar mi potencial y descubrir todo lo que puedo lograr.','Je m’appelle Malak, je suis en classe de première et je suis née le 24 juin à Kafr el-Cheikh, en Égypte. J’aime apprendre, explorer mon potentiel et découvrir ce que je peux accomplir.','Ich bin Malak, Schülerin der 11. Klasse, geboren am 24. Juni in Kafr El-Scheich, Ägypten. Ich lerne gern Neues, entdecke mein Potenzial und finde heraus, was ich erreichen kann.'],
    ['bioParagraph2','To be honest, I am not the most social person or great at small talk with people, which is actually why I prefer spending my time diving deep into learning new skills and building things independently.','بصراحة، لست اجتماعية جدًا ولا أجيد الأحاديث العابرة، لذلك أفضل قضاء وقتي في تعلم مهارات جديدة وصنع الأشياء بنفسي.','Sinceramente, no soy muy sociable ni se me da bien la charla informal; por eso prefiero aprender nuevas habilidades y crear cosas por mi cuenta.','Pour être honnête, je ne suis pas très sociable et je ne suis pas douée pour les petites conversations. Je préfère donc apprendre de nouvelles compétences et créer des choses par moi-même.','Ehrlich gesagt bin ich nicht besonders gesellig und nicht gut im Smalltalk. Deshalb lerne ich lieber neue Fähigkeiten und erschaffe Dinge selbstständig.'],
    ['myInterests','MY INTERESTS','اهتماماتي','MIS INTERESES','MES CENTRES D’INTÉRÊT','MEINE INTERESSEN'],
    ['coding','CODING','البرمجة','PROGRAMACIÓN','PROGRAMMATION','PROGRAMMIEREN'],
    ['chessInterest','I love analyzing the board, thinking several steps ahead, and making calculated, deep moves.','أحب تحليل الرقعة والتفكير في الخطوات القادمة واتخاذ قرارات مدروسة.','Me encanta analizar el tablero, anticipar jugadas y tomar decisiones meditadas.','J’aime analyser l’échiquier, anticiper les coups et jouer de façon réfléchie.','Ich analysiere gern das Schachbrett, denke voraus und plane meine Züge sorgfältig.'],
    ['codingInterest','To me, coding feels like magic—it’s not just lines of text, it’s creating logic and life from scratch.','البرمجة بالنسبة لي أشبه بالسحر؛ فهي ليست مجرد نصوص، بل ابتكار المنطق والحياة من الصفر.','Para mí, programar es como magia: no son solo líneas de texto, sino crear lógica y vida desde cero.','Pour moi, coder, c’est magique : ce n’est pas seulement du texte, c’est créer une logique et donner vie à quelque chose.','Programmieren fühlt sich für mich wie Magie an: Es sind nicht nur Textzeilen, sondern Logik und Leben von Grund auf zu erschaffen.'],
    ['artLanguages','ART & LANGUAGES','الفن واللغات','ARTE E IDIOMAS','ART ET LANGUES','KUNST & SPRACHEN'],
    ['artInterest','Art was the very first thing I discovered about myself through sketching. I also love digital art, which I’ve been developing for a while.','كان الرسم أول ما اكتشفته عن نفسي، كما أحب الفن الرقمي وأطوّر مهاراتي فيه منذ فترة.','El dibujo fue lo primero que descubrí de mí misma. También me encanta el arte digital y llevo un tiempo desarrollándolo.','Le dessin est la première chose que j’ai découverte sur moi-même. J’aime aussi l’art numérique, que je pratique depuis un moment.','Durch das Zeichnen habe ich meine Liebe zur Kunst entdeckt. Ich mag auch digitale Kunst und entwickle mich darin weiter.'],
    ['music','MUSIC','الموسيقى','MÚSICA','MUSIQUE','MUSIK'],
    ['musicInterest','Music calms my mind. My taste is quite eclectic, and I listen to various tracks depending on my current mood.','الموسيقى تهدئني. ذوقي متنوع وأستمع إلى أغانٍ مختلفة حسب مزاجي.','La música me tranquiliza. Tengo gustos variados y escucho distintas canciones según mi estado de ánimo.','La musique m’apaise. Mes goûts sont variés et j’écoute différents morceaux selon mon humeur.','Musik beruhigt mich. Mein Geschmack ist vielseitig und ich höre je nach Stimmung unterschiedliche Musik.'],
    ['animals','ANIMALS','الحيوانات','ANIMALES','ANIMAUX','TIERE'],
    ['animalInterest','I deeply adore animals because they are gentle, peaceful creatures, and I love being surrounded by their tranquility.','أحب الحيوانات كثيرًا، فهي كائنات لطيفة وهادئة وأحب وجودها حولي.','Adoro a los animales porque son seres tranquilos y cariñosos; me encanta estar rodeada de ellos.','J’adore les animaux, ces êtres doux et paisibles, et j’aime être entourée d’eux.','Ich liebe Tiere, weil sie sanft und friedlich sind, und bin gern von ihnen umgeben.'],
    ['futureHorizons','FUTURE HORIZONS','آفاق المستقبل','METAS FUTURAS','HORIZONS FUTURS','ZUKUNFTSPERSPEKTIVEN'],
    ['futureIntro','Things I intend to learn and master in upcoming cycles:','أشياء أطمح إلى تعلمها وإتقانها مستقبلًا:','Cosas que quiero aprender y dominar próximamente:','Ce que je souhaite apprendre et maîtriser à l’avenir :','Dinge, die ich künftig lernen und meistern möchte:'],
    ['instruments','PLAYING INSTRUMENTS','العزف على الآلات','TOCAR INSTRUMENTOS','JOUER D’UN INSTRUMENT','INSTRUMENTE SPIELEN'],
    ['instrumentDetails','Mastering the Guitar, Piano, and Harmonica.','إتقان العزف على الجيتار والبيانو والهارمونيكا.','Aprender a tocar la guitarra, el piano y la armónica.','Maîtriser la guitare, le piano et l’harmonica.','Gitarre, Klavier und Mundharmonika meistern.'],
    ['sculpting','SCULPTING','النحت','ESCULTURA','SCULPTURE','BILDHAUEREI'],
    ['sculptingDetails','Exploring physical form, tactile texture, and dimensional crafting.','استكشاف الأشكال والخامات وصناعة مجسمات ثلاثية الأبعاد.','Explorar formas, texturas y creación de objetos tridimensionales.','Explorer les formes, les textures et la création en volume.','Formen, Oberflächen und dreidimensionales Gestalten erkunden.'],
    ['socialSkills','SOCIAL SKILLS','المهارات الاجتماعية','HABILIDADES SOCIALES','APTITUDES SOCIALES','SOZIALE KOMPETENZEN'],
    ['socialDetails','How to socialize more cuz it’s really embarrassing!','كيف أكون اجتماعية أكثر، لأن الأمر محرج فعلًا!','Aprender a socializar más, ¡aunque me da muchísima vergüenza!','Apprendre à être plus sociable, même si c’est vraiment gênant !','Wie ich geselliger werde, obwohl es mir echt peinlich ist!'],
    ['contactChannels','CONTACT CHANNELS','قنوات التواصل','CANALES DE CONTACTO','MOYENS DE CONTACT','KONTAKTWEGE'],
    ['contactIntro','Connect across secure external networks:','تواصلوا معي عبر حساباتي:','Puedes encontrarme en mis redes:','Retrouve-moi sur mes réseaux :','Du findest mich auf meinen Profilen:'],
    ['chessProfile','Chess.com Profile','حساب Chess.com','Perfil de Chess.com','Profil Chess.com','Chess.com-Profil'],
    ['githubProfile','GitHub Repository','حساب GitHub','Perfil de GitHub','Profil GitHub','GitHub-Profil'],
    ['instagramProfile','Instagram Network','حساب Instagram','Perfil de Instagram','Profil Instagram','Instagram-Profil'],
    ['facebookProfile','Facebook Profile','حساب Facebook','Perfil de Facebook','Profil Facebook','Facebook-Profil'],
    ['transmitMessage','SEND A MESSAGE','أرسلي رسالة','ENVIAR UN MENSAJE','ENVOYER UN MESSAGE','NACHRICHT SENDEN'],
    ['sendNote','Send me a note','أرسلي لي رسالة','Envíame un mensaje','Envoie-moi un message','Schreib mir eine Nachricht'],
    ['namePlaceholder','Enter your name...','اكتبي اسمك...','Escribe tu nombre...','Saisis ton nom...','Gib deinen Namen ein...'],
    ['mindLabel','WHAT IS ON YOUR MIND','ماذا يدور في ذهنك؟','¿QUÉ TIENES EN MENTE?','QUE VEUX-TU ME DIRE ?','WAS MÖCHTEST DU MIR SAGEN?'],
    ['messagePlaceholder','Write your message here...','اكتبي رسالتك هنا...','Escribe tu mensaje aquí...','Écris ton message ici...','Schreibe deine Nachricht hier...'],
    ['sendTransmission','SEND TRANSMISSION','إرسال الرسالة','ENVIAR MENSAJE','ENVOYER LE MESSAGE','NACHRICHT SENDEN'],
    ['messageSent','MESSAGE SENT SUCCESSFULLY ✓','تم إرسال الرسالة بنجاح ✓','MENSAJE ENVIADO ✓','MESSAGE ENVOYÉ ✓','NACHRICHT ERFOLGREICH GESENDET ✓'],
    ['closeMemory','Close memory game','إغلاق لعبة الذاكرة','Cerrar el juego de memoria','Fermer le jeu de mémoire','Memory-Spiel schließen'],
    ['brainBreak','A LITTLE BRAIN BREAK','استراحة صغيرة للعقل','UN PEQUEÑO DESCANSO MENTAL','UNE PETITE PAUSE','KLEINE KOPFPAUSE'],
    ['memoryTitle','Memory Match','لعبة تطابق الذاكرة','Parejas de memoria','Jeu de mémoire','Memory-Spiel'],
    ['memoryInstructions','Find all 8 matching pairs. Try to do it in as few moves as you can!','اعثري على الأزواج الثمانية المتطابقة بأقل عدد من الحركات!','Encuentra las 8 parejas con el menor número de movimientos posible.','Trouve les 8 paires en faisant le moins de coups possible !','Finde alle 8 Paare mit möglichst wenigen Zügen!'],
    ['moves','Moves','الحركات','Movimientos','Coups','Züge'],
    ['pairs','Pairs','الأزواج','Parejas','Paires','Paare'],
    ['memoryCards','Memory cards','بطاقات الذاكرة','Cartas de memoria','Cartes mémoire','Memory-Karten'],
    ['memoryStart','Choose any two cards to start.','اختاري أي بطاقتين للبدء.','Elige dos cartas para empezar.','Choisis deux cartes pour commencer.','Wähle zwei Karten zum Starten.'],
    ['newGame','Start a new game','ابدئي لعبة جديدة','Empezar otra partida','Nouvelle partie','Neues Spiel starten'],
    ['memoryMatch','A match! Find another pair.','تطابق! ابحثي عن زوج آخر.','¡Pareja encontrada! Busca otra.','Une paire trouvée ! Cherche-en une autre.','Ein Paar gefunden! Suche das nächste.'],
    ['memoryMismatch','Not a match — try another pair.','ليستا متطابقتين — حاولي مرة أخرى.','No coinciden: prueba otra pareja.','Elles ne correspondent pas — réessaie.','Kein Paar – versuch es noch einmal.'],
    ['memoryWin','You found every pair in {moves} moves. Lovely work!','وجدتِ كل الأزواج في {moves} حركة. أحسنتِ!','Encontraste todas las parejas en {moves} movimientos. ¡Muy bien!','Tu as trouvé toutes les paires en {moves} coups. Bravo !','Alle Paare in {moves} Zügen gefunden. Sehr gut!'],
    ['introSpark','NO. 01 ✦ A LITTLE SPARK','رقم ٠١ ✦ شرارة صغيرة','N.º 01 ✦ UNA PEQUEÑA CHISPA','N° 01 ✦ UNE PETITE ÉTINCELLE','NR. 01 ✦ EIN KLEINER FUNKE'],
    ['introMaking','A WORLD IN THE MAKING','عالم يتشكل','UN MUNDO EN CREACIÓN','UN MONDE EN CRÉATION','EINE WELT IM ENTSTEHEN'],
    ['introNote','A LITTLE NOTE BEFORE YOU EXPLORE','ملاحظة صغيرة قبل الاستكشاف','UNA NOTA ANTES DE EXPLORAR','UN MOT AVANT DE PARTIR À LA DÉCOUVERTE','EINE KLEINE NOTIZ VOR DEM ENTDECKEN'],
    ['madeWithCare','MADE WITH CARE','صُنع بعناية','HECHO CON CARIÑO','FAIT AVEC SOIN','MIT LIEBE GEMACHT'],
    ['takeALook','TAKE A LOOK AROUND','ألقِ نظرة حولك','ECHA UN VISTAZO','FAIS UN TOUR','SIEH DICH UM'],
    ['stepInside','STEP INSIDE','ادخل','ENTRA','ENTRE','TRITT EIN'],
    ['comeIn','COME ON IN','تفضلي بالدخول','ADELANTE','ENTRE','KOMM HINEIN'],
    ['playChess','Play Chess','العب الشطرنج','Jugar al ajedrez','Jouer aux échecs','Schach spielen'],
    ['playMemory','Play the memory match game','العب لعبة تطابق الذاكرة','Jugar a parejas de memoria','Jouer au jeu de mémoire','Memory-Spiel spielen'],
    ['changeTheme','Change Color Theme','تغيير ألوان السمة','Cambiar tema de color','Changer le thème de couleurs','Farbschema ändern'],
    ['closeChess','Close chess game','إغلاق لعبة الشطرنج','Cerrar el ajedrez','Fermer le jeu d’échecs','Schachspiel schließen'],
    ['chessBot','♟ CHESS // VS BOT','♟ الشطرنج // ضد الحاسوب','♟ AJEDREZ // VS ORDENADOR','♟ ÉCHECS // CONTRE L’ORDINATEUR','♟ SCHACH // GEGEN COMPUTER'],
    ['pressPlay','PRESS PLAY TO START','اضغط للبدء','PULSA PARA EMPEZAR','LANCE LA PARTIE','ZUM STARTEN SPIELEN'],
    ['play','PLAY','ابدأ','JUGAR','JOUER','SPIELEN'],
    ['aboutDeck','ABOUT ME','من أنا','SOBRE MÍ','À PROPOS','ÜBER MICH'],
    ['contactDeck','CONTACT CHANNELS','قنوات التواصل','CANALES DE CONTACTO','MOYENS DE CONTACT','KONTAKTWEGE'],
    ['messageDeck','TRANSMISSION TERMINAL','محطة الرسائل','TERMINAL DE MENSAJES','TERMINAL DE MESSAGES','NACHRICHTENSTATION'],
    ['sending','SENDING...','جارٍ الإرسال...','ENVIANDO...','ENVOI...','WIRD GESENDET...'],
    ['transmissionError','Transmission error. Please try again.','تعذر إرسال الرسالة. حاولي مرة أخرى.','Error al enviar. Inténtalo de nuevo.','Erreur d’envoi. Réessaie.','Senden fehlgeschlagen. Bitte erneut versuchen.'],
    ['networkError','Network connection error.','خطأ في الاتصال بالشبكة.','Error de conexión de red.','Erreur de connexion réseau.','Netzwerkverbindungsfehler.'],
    ['chessEngineError','CHESS ENGINE FAILED TO LOAD','تعذر تحميل محرك الشطرنج','NO SE PUDO CARGAR EL MOTOR DE AJEDREZ','ÉCHEC DU CHARGEMENT DU MOTEUR D’ÉCHECS','SCHACHMODUL KONNTE NICHT GELADEN WERDEN'],
    ['checkmateBot','CHECKMATE — BOT WINS','كش مات — فاز الحاسوب','JAQUE MATE — GANA EL ORDENADOR','ÉCHEC ET MAT — L’ORDINATEUR GAGNE','SCHACHMATT — COMPUTER GEWINNT'],
    ['checkmateYou','CHECKMATE — YOU WIN!','كش مات — لقد فزتِ!','¡JAQUE MATE — GANASTE!','ÉCHEC ET MAT — TU AS GAGNÉ !','SCHACHMATT — DU GEWINNST!'],
    ['draw','DRAW','تعادل','EMPATE','ÉGALITÉ','UNENTSCHIEDEN'],
    ['checkTurn','CHECK! YOUR TURN (WHITE)','كش! دورك (الأبيض)','¡JAQUE! TU TURNO (BLANCAS)','ÉCHEC ! À TOI (BLANCS)','SCHACH! DU BIST DRAN (WEISS)'],
    ['yourTurn','YOUR TURN (WHITE)','دورك (الأبيض)','TU TURNO (BLANCAS)','À TOI (BLANCS)','DU BIST DRAN (WEISS)'],
    ['botThinking','BOT THINKING...','الحاسوب يفكر...','EL ORDENADOR PIENSA...','L’ORDINATEUR RÉFLÉCHIT...','COMPUTER DENKT NACH...'],
    ['hiddenCard','Hidden card','بطاقة مخفية','Carta oculta','Carte cachée','Verdeckte Karte'],
    ['revealedCard','Card','بطاقة','Carta','Carte','Karte'],
    ['themeWarm','Neon','نيون','Neón','Néon','Neon'],
    ['themeViolet','Ultraviolet','فوق بنفسجي','Ultravioleta','Ultraviolet','Ultraviolett'],
    ['themeOcean','Cyber Blue','أزرق سيبراني','Azul cyber','Bleu cyber','Cyberblau'],
    ['themeMint','Acid Green','أخضر حمضي','Verde ácido','Vert acide','Säuregrün'],
    ['themeSunset','Afterglow','توهج','Resplandor','Lueur','Nachglühen'],
    ['notifications','Notifications','الإشعارات','Notificaciones','Notifications','Benachrichtigungen'],
    ['notificationsTitle','Notifications','الإشعارات','Notificaciones','Notifications','Benachrichtigungen'],
    ['notificationsEmpty','No notifications yet','لا توجد إشعارات بعد','Aún no hay notificaciones','Aucune notification pour le moment','Noch keine Benachrichtigungen'],
    ['notificationJustNow','Just now','الآن','Ahora mismo','À l’instant','Gerade eben'],
    ['enterPortfolio','Enter Malak’s portfolio','الدخول إلى موقع ملك','Entrar en el sitio de Malak','Entrer dans le portfolio de Malak','Malaks Portfolio öffnen'],
    ['glowingStar','A glowing star','نجمة متوهجة','Una estrella brillante','Une étoile lumineuse','Ein leuchtender Stern'],
    ['welcomeArea','Welcome','الترحيب','Bienvenida','Bienvenue','Willkommen'],
    ['openWelcome','Open welcome message','فتح رسالة الترحيب','Abrir bienvenida','Ouvrir le message de bienvenue','Willkommensnachricht öffnen']
];
LANGUAGE_ROWS.forEach(([key, en]) => {
    LANGUAGE_COPY.en[key] = en;
});

const currentLanguage = 'en';

function translate(key, values = {}) {
    let text = LANGUAGE_COPY[currentLanguage][key] || LANGUAGE_COPY.en[key] || key;
    Object.entries(values).forEach(([name, value]) => {
        text = text.replace(`{${name}}`, String(value));
    });
    return text;
}

function applyLanguage() {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        element.textContent = translate(key);
    });
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        element.title = translate(element.dataset.i18nTitle);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        element.setAttribute('aria-label', translate(element.dataset.i18nAria));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        element.setAttribute('placeholder', translate(element.dataset.i18nPlaceholder));
    });
}
applyLanguage();

/* ======================= BACKGROUND: INTERACTIVE STARFIELD ======================= */

const backgroundCanvas = document.getElementById('background-canvas');
const backgroundContext = backgroundCanvas.getContext('2d');
const backgroundReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const backgroundStars = [];
const backgroundStarLinks = [];
let backgroundFrame = null;
let backgroundWidth = 0;
let backgroundHeight = 0;
let backgroundPointerX = -1;
let backgroundPointerY = -1;
const backgroundNebulae = [
    { x: 0.2, y: 0.25, radius: 0.48, tint: 'blue', drift: 0.18 },
    { x: 0.78, y: 0.35, radius: 0.42, tint: 'pink', drift: 0.14 },
    { x: 0.52, y: 0.86, radius: 0.5, tint: 'purple', drift: 0.11 }
];

function resizeBackground() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    backgroundWidth = window.innerWidth;
    backgroundHeight = window.innerHeight;
    backgroundCanvas.width = Math.round(backgroundWidth * pixelRatio);
    backgroundCanvas.height = Math.round(backgroundHeight * pixelRatio);
    backgroundCanvas.style.width = `${backgroundWidth}px`;
    backgroundCanvas.style.height = `${backgroundHeight}px`;
    backgroundContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const starCount = Math.max(220, Math.min(480, Math.round(backgroundWidth * backgroundHeight / 5000)));
    backgroundStars.length = 0;
    backgroundStarLinks.length = 0;
    for (let index = 0; index < starCount; index++) {
        backgroundStars.push({
            x: Math.random() * backgroundWidth,
            y: Math.random() * backgroundHeight,
            radius: Math.random() > 0.97 ? Math.random() * 0.65 + 1 : Math.random() * 0.65 + 0.3,
            phase: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.35 + 0.12,
            depth: Math.random(),
            tint: Math.random() > 0.88 ? 'pink' : Math.random() > 0.45 ? 'blue' : 'white'
        });
    }

    const maxBackgroundLinks = Math.round(starCount * 1.25);
    for (let firstIndex = 0; firstIndex < backgroundStars.length && backgroundStarLinks.length < maxBackgroundLinks; firstIndex++) {
        const firstStar = backgroundStars[firstIndex];
        let linksForStar = 0;
        for (let secondIndex = firstIndex + 1; secondIndex < backgroundStars.length && linksForStar < 2; secondIndex++) {
            const secondStar = backgroundStars[secondIndex];
            const distance = Math.hypot(firstStar.x - secondStar.x, firstStar.y - secondStar.y);
            if (distance > 92) continue;

            backgroundStarLinks.push({ firstIndex, secondIndex, distance });
            linksForStar += 1;
        }
    }

    drawBackground();
}

function drawBackground() {
    backgroundFrame = null;
    if (document.hidden) return;
    backgroundContext.clearRect(0, 0, backgroundWidth, backgroundHeight);
    const theme = getComputedStyle(document.body);
    const blueStar = theme.getPropertyValue('--neon-blue').trim() || '#a0a95d';
    const pinkStar = theme.getPropertyValue('--accent-pink').trim() || '#e097ae';
    const purpleStar = theme.getPropertyValue('--neon-purple').trim() || '#9870d1';
    const time = performance.now() / 1000;

    backgroundNebulae.forEach((nebula, index) => {
        const pointerOffsetX = backgroundPointerX < 0 ? 0 : (backgroundPointerX / backgroundWidth - 0.5) * 28 * nebula.drift;
        const pointerOffsetY = backgroundPointerY < 0 ? 0 : (backgroundPointerY / backgroundHeight - 0.5) * 22 * nebula.drift;
        const driftX = backgroundReducedMotion.matches ? 0 : Math.sin(time * nebula.drift + index) * 22;
        const driftY = backgroundReducedMotion.matches ? 0 : Math.cos(time * nebula.drift + index) * 17;
        const x = nebula.x * backgroundWidth + driftX - pointerOffsetX;
        const y = nebula.y * backgroundHeight + driftY - pointerOffsetY;
        const radius = Math.max(backgroundWidth, backgroundHeight) * nebula.radius;
        const color = nebula.tint === 'pink' ? pinkStar : nebula.tint === 'purple' ? purpleStar : blueStar;
        const haze = backgroundContext.createRadialGradient(x, y, 0, x, y, radius);
        haze.addColorStop(0, `${color}12`);
        haze.addColorStop(0.48, `${color}08`);
        haze.addColorStop(1, `${color}00`);
        backgroundContext.fillStyle = haze;
        backgroundContext.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    });

    backgroundStarLinks.forEach(link => {
        const firstStar = backgroundStars[link.firstIndex];
        const secondStar = backgroundStars[link.secondIndex];
        const firstX = firstStar.x - (backgroundPointerX < 0 ? 0 : (backgroundPointerX / backgroundWidth - 0.5) * 20 * firstStar.depth);
        const firstY = firstStar.y - (backgroundPointerY < 0 ? 0 : (backgroundPointerY / backgroundHeight - 0.5) * 16 * firstStar.depth);
        const secondX = secondStar.x - (backgroundPointerX < 0 ? 0 : (backgroundPointerX / backgroundWidth - 0.5) * 20 * secondStar.depth);
        const secondY = secondStar.y - (backgroundPointerY < 0 ? 0 : (backgroundPointerY / backgroundHeight - 0.5) * 16 * secondStar.depth);

        backgroundContext.globalAlpha = (1 - link.distance / 92) * 0.14;
        backgroundContext.strokeStyle = blueStar;
        backgroundContext.lineWidth = 0.55;
        backgroundContext.beginPath();
        backgroundContext.moveTo(firstX, firstY);
        backgroundContext.lineTo(secondX, secondY);
        backgroundContext.stroke();
    });

    backgroundStars.forEach(star => {
        const shimmer = backgroundReducedMotion.matches
            ? 0.48
            : 0.2 + (Math.sin(time * star.speed + star.phase) + 1) * 0.19;
        const color = star.tint === 'pink' ? pinkStar : star.tint === 'blue' ? blueStar : '#e8e4ff';
        const dx = star.x - backgroundPointerX;
        const dy = star.y - backgroundPointerY;
        const distance = Math.hypot(dx, dy);
        const influence = backgroundPointerX >= 0 ? Math.max(0, 1 - distance / 115) : 0;
        const parallaxX = backgroundPointerX < 0 ? 0 : (backgroundPointerX / backgroundWidth - 0.5) * 20 * star.depth;
        const parallaxY = backgroundPointerY < 0 ? 0 : (backgroundPointerY / backgroundHeight - 0.5) * 16 * star.depth;
        const slowDriftX = backgroundReducedMotion.matches ? 0 : Math.sin(time * 0.12 + star.phase) * 2.5;
        const slowDriftY = backgroundReducedMotion.matches ? 0 : Math.cos(time * 0.1 + star.phase) * 2;
        const x = star.x - parallaxX + slowDriftX;
        const y = star.y - parallaxY + slowDriftY;

        backgroundContext.globalAlpha = Math.min(0.85, shimmer + influence * 0.14);
        backgroundContext.fillStyle = influence > 0.4 ? pinkStar : color;
        backgroundContext.shadowColor = influence > 0.4 ? pinkStar : color;
        backgroundContext.shadowBlur = star.radius * 3.5 + influence * 2;
        backgroundContext.beginPath();
        backgroundContext.arc(x, y, star.radius + influence * 0.25, 0, Math.PI * 2);
        backgroundContext.fill();

        if (star.radius > 1.4 && shimmer > 0.48) {
            backgroundContext.globalAlpha = shimmer * 0.28;
            backgroundContext.strokeStyle = color;
            backgroundContext.lineWidth = 0.6;
            backgroundContext.beginPath();
            backgroundContext.moveTo(x - star.radius * 2.4, y);
            backgroundContext.lineTo(x + star.radius * 2.4, y);
            backgroundContext.moveTo(x, y - star.radius * 2.4);
            backgroundContext.lineTo(x, y + star.radius * 2.4);
            backgroundContext.stroke();
        }
    });

    if (backgroundPointerX >= 0) {
        let linkedStars = 0;
        backgroundStars.forEach(star => {
            if (linkedStars >= 5) return;
            const distance = Math.hypot(star.x - backgroundPointerX, star.y - backgroundPointerY);
            if (distance > 92) return;

            backgroundContext.globalAlpha = (1 - distance / 92) * 0.12;
            backgroundContext.strokeStyle = blueStar;
            backgroundContext.lineWidth = 0.6;
            backgroundContext.beginPath();
            backgroundContext.moveTo(backgroundPointerX, backgroundPointerY);
            backgroundContext.lineTo(star.x, star.y);
            backgroundContext.stroke();
            linkedStars += 1;
        });

        const pointerGlow = backgroundContext.createRadialGradient(
            backgroundPointerX, backgroundPointerY, 0,
            backgroundPointerX, backgroundPointerY, 115
        );
        pointerGlow.addColorStop(0, `${blueStar}08`);
        pointerGlow.addColorStop(1, `${blueStar}00`);
        backgroundContext.globalAlpha = 1;
        backgroundContext.fillStyle = pointerGlow;
        backgroundContext.fillRect(backgroundPointerX - 115, backgroundPointerY - 115, 230, 230);
    }

    backgroundContext.globalAlpha = 1;
    backgroundContext.shadowBlur = 0;

    if (!backgroundReducedMotion.matches) {
        backgroundFrame = requestAnimationFrame(drawBackground);
    }
}

function requestBackgroundDraw() {
    if (backgroundFrame === null && !document.hidden) {
        backgroundFrame = requestAnimationFrame(drawBackground);
    }
}

window.addEventListener('resize', resizeBackground);
window.addEventListener('pointermove', event => {
    backgroundPointerX = event.clientX;
    backgroundPointerY = event.clientY;
    requestBackgroundDraw();
});
window.addEventListener('pointerleave', () => {
    backgroundPointerX = -1;
    backgroundPointerY = -1;
    requestBackgroundDraw();
});
document.addEventListener('visibilitychange', requestBackgroundDraw);
backgroundReducedMotion.addEventListener('change', requestBackgroundDraw);
resizeBackground();

/* ======================= INTRO: INTERACTIVE PARTICLE NETWORK ======================= */
// The particle network reacts to pointer movement without shifting its palette.

const introStarsCanvas = document.getElementById('intro-stars-canvas');
const iCtx = introStarsCanvas ? introStarsCanvas.getContext('2d') : null;

let introStars = [];
let mouseX = -9999, mouseY = -9999;
let introRipples = [];
let introAnimationTime = 0;
let introStarsAnimationActive = true;

const PARTICLE_COUNT = window.innerWidth < 700 ? 65 : 100;
const LINK_DISTANCE = 130;
const MOUSE_RADIUS = 180;
const MOUSE_PUSH_STRENGTH = 0.65;
const MAX_INTRO_RIPPLES = 7;

function resizeIntroStars() {
    if (!introStarsCanvas) return;
    introStarsCanvas.width = window.innerWidth;
    introStarsCanvas.height = window.innerHeight;

    introStars = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        introStars.push({
            x: Math.random() * introStarsCanvas.width,
            y: Math.random() * introStarsCanvas.height,
            baseX: 0,
            baseY: 0,
            size: Math.random() * 1.6 + 0.6,
            baseAlpha: Math.random() * 0.5 + 0.2,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25
        });
    }
}
window.addEventListener('resize', resizeIntroStars);
resizeIntroStars();

window.addEventListener('pointermove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

window.addEventListener('pointerleave', () => {
    mouseX = -9999;
    mouseY = -9999;
});

window.addEventListener('pointerdown', event => {
    if (introDismissed || !introStarsCanvas) return;
    introRipples.push({ x: event.clientX, y: event.clientY, radius: 0, life: 1 });
    if (introRipples.length > MAX_INTRO_RIPPLES) introRipples.shift();
});

function animateIntroStars() {
    if (!iCtx || !introStarsCanvas || !introStarsAnimationActive) return;
    iCtx.clearRect(0, 0, introStarsCanvas.width, introStarsCanvas.height);

    const computedStyle = getComputedStyle(document.body);
    const pink = computedStyle.getPropertyValue('--accent-pink').trim() || '#e097ae';
    const blue = computedStyle.getPropertyValue('--neon-blue').trim() || '#a0a95d';
    const yellow = computedStyle.getPropertyValue('--neon-yellow').trim() || '#e4bd67';
    introAnimationTime += 0.012;

    if (mouseX >= 0 && mouseY >= 0) {
        const pointerGlow = iCtx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, MOUSE_RADIUS * 1.25);
        pointerGlow.addColorStop(0, `${pink}35`);
        pointerGlow.addColorStop(0.4, `${blue}20`);
        pointerGlow.addColorStop(1, `${blue}00`);
        iCtx.fillStyle = pointerGlow;
        iCtx.fillRect(mouseX - MOUSE_RADIUS * 1.25, mouseY - MOUSE_RADIUS * 1.25, MOUSE_RADIUS * 2.5, MOUSE_RADIUS * 2.5);
    }

    const ambientX = introStarsCanvas.width * (0.5 + Math.sin(introAnimationTime) * 0.28);
    const ambientY = introStarsCanvas.height * (0.48 + Math.cos(introAnimationTime * 0.75) * 0.2);
    const ambientGlow = iCtx.createRadialGradient(ambientX, ambientY, 0, ambientX, ambientY, introStarsCanvas.width * 0.42);
    ambientGlow.addColorStop(0, `${yellow}08`);
    ambientGlow.addColorStop(0.5, `${pink}06`);
    ambientGlow.addColorStop(1, `${pink}00`);
    iCtx.fillStyle = ambientGlow;
    iCtx.fillRect(0, 0, introStarsCanvas.width, introStarsCanvas.height);

    introRipples = introRipples.filter(ripple => ripple.life > 0);
    introRipples.forEach(ripple => {
        ripple.radius += 2.1;
        ripple.life -= 0.012;
        iCtx.beginPath();
        iCtx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        iCtx.strokeStyle = ripple.life > 0.55 ? pink : blue;
        iCtx.lineWidth = 1.2;
        iCtx.globalAlpha = ripple.life * 0.55;
        iCtx.stroke();
        iCtx.globalAlpha = 1;
    });

    // حركة ودفع النقاط بعيدًا عن الماوس
    for (let i = 0; i < introStars.length; i++) {
        const s = introStars[i];
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0) s.x = introStarsCanvas.width;
        if (s.x > introStarsCanvas.width) s.x = 0;
        if (s.y < 0) s.y = introStarsCanvas.height;
        if (s.y > introStarsCanvas.height) s.y = 0;

        const dx = s.x - mouseX;
        const dy = s.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0.01) {
            const force = (1 - dist / MOUSE_RADIUS) * MOUSE_PUSH_STRENGTH;
            s.x += (dx / dist) * force;
            s.y += (dy / dist) * force;
        }
    }

    // خطوط الشبكة بين النقاط القريبة من بعض
    for (let i = 0; i < introStars.length; i++) {
        for (let j = i + 1; j < introStars.length; j++) {
            const a = introStars[i], b = introStars[j];
            const dx = a.x - b.x, dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < LINK_DISTANCE) {
                iCtx.strokeStyle = (dx * dx + dy * dy) < MOUSE_RADIUS * MOUSE_RADIUS ? pink : blue;
                iCtx.lineWidth = 0.5;
                iCtx.globalAlpha = (1 - dist / LINK_DISTANCE) * 0.35;
                iCtx.beginPath();
                iCtx.moveTo(a.x, a.y);
                iCtx.lineTo(b.x, b.y);
                iCtx.stroke();
            }
        }
    }

    // Keep particle brightness and color steady while the network follows the pointer.
    for (let i = 0; i < introStars.length; i++) {
        const s = introStars[i];
        const dx = s.x - mouseX;
        const dy = s.y - mouseY;
        const nearPointer = Math.hypot(dx, dy) < MOUSE_RADIUS;
        iCtx.fillStyle = nearPointer ? yellow : '#ffffff';
        iCtx.globalAlpha = nearPointer ? Math.min(1, s.baseAlpha + 0.25) : s.baseAlpha;
        iCtx.beginPath();
        iCtx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        iCtx.fill();
    }
    iCtx.globalAlpha = 1.0;

    requestAnimationFrame(animateIntroStars);
}
animateIntroStars();

/* ======================= THEME SWITCHER ======================= */

const THEME_CYCLE = ['theme-main', 'theme-violet', 'theme-blue', 'theme-mint', 'theme-sunset'];
const THEME_NAMES = {
    'theme-main': 'themeWarm',
    'theme-violet': 'themeViolet',
    'theme-blue': 'themeOcean',
    'theme-mint': 'themeMint',
    'theme-sunset': 'themeSunset'
};

const THEME_STORAGE_KEY = 'malak-site-theme';

function applyTheme(themeName) {
    THEME_CYCLE.forEach(theme => document.body.classList.remove(theme));
    document.body.classList.add(themeName);
    document.getElementById('theme-name').textContent = translate(THEME_NAMES[themeName]);
}

try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (THEME_CYCLE.includes(savedTheme)) applyTheme(savedTheme);
} catch (error) {
    console.warn('Could not load the saved color theme:', error);
}

function toggleTheme() {
    const body = document.body;
    const currentIndex = THEME_CYCLE.findIndex(t => body.classList.contains(t));
    const nextIndex = (currentIndex === -1) ? 0 : (currentIndex + 1) % THEME_CYCLE.length;

    const nextTheme = THEME_CYCLE[nextIndex];
    applyTheme(nextTheme);
    try {
        window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch (error) {
        console.warn('Could not save the selected color theme:', error);
    }
}

/* ======================= ABOUT PANEL: HOLO STAR CANVAS ======================= */

const creatureCanvas = document.getElementById('interactive-creature-canvas');
const cCtx = creatureCanvas ? creatureCanvas.getContext('2d') : null;

let angle = 0;
function drawInteractiveEntity() {
    if (!creatureCanvas || !cCtx) return;
    cCtx.clearRect(0, 0, creatureCanvas.width, creatureCanvas.height);

    const cx = creatureCanvas.width / 2;
    const cy = creatureCanvas.height / 2;
    const theme = getComputedStyle(document.body);
    const starColor = '#ff4fd8';
    const starHighlight = '#fff36b';
    const accentColor = theme.getPropertyValue('--accent-pink').trim() || '#e097ae';

    cCtx.beginPath();
    cCtx.ellipse(cx, cy, 54, 54, 0, 0, Math.PI * 2);
    cCtx.strokeStyle = starColor;
    cCtx.lineWidth = 0.8;
    cCtx.globalAlpha = 0.16 + (Math.sin(angle * 2) + 1) * 0.035;
    cCtx.setLineDash([2, 6]);
    cCtx.lineDashOffset = -angle * 3;
    cCtx.shadowColor = starColor;
    cCtx.shadowBlur = 5;
    cCtx.stroke();
    cCtx.setLineDash([]);
    cCtx.lineDashOffset = 0;
    cCtx.shadowBlur = 0;
    cCtx.globalAlpha = 1;

    cCtx.save();
    cCtx.translate(cx, cy);
    cCtx.translate(0, Math.sin(angle * 1.5) * 2);

    cCtx.save();
    cCtx.rotate(-angle * 0.55);
    cCtx.beginPath();
    cCtx.arc(0, 0, 48, 0, Math.PI * 2);
    cCtx.strokeStyle = accentColor;
    cCtx.globalAlpha = 0.25 + (Math.sin(angle * 2.5) + 1) * 0.08;
    cCtx.lineWidth = 0.8;
    cCtx.shadowColor = accentColor;
    cCtx.shadowBlur = 7;
    cCtx.stroke();
    cCtx.beginPath();
    cCtx.arc(Math.cos(angle * 1.8) * 48, Math.sin(angle * 1.8) * 48, 2.5, 0, Math.PI * 2);
    cCtx.fillStyle = accentColor;
    cCtx.shadowBlur = 7 + (Math.sin(angle * 3) + 1) * 4;
    cCtx.fill();
    cCtx.restore();

    const drawStar = (outerRadius, innerRadius, rotation) => {
        cCtx.beginPath();
        for (let point = 0; point < 10; point++) {
            const radius = point % 2 === 0 ? outerRadius : innerRadius;
            const theta = rotation + point * Math.PI / 5 - Math.PI / 2;
            const x = Math.cos(theta) * radius;
            const y = Math.sin(theta) * radius;
            if (point === 0) cCtx.moveTo(x, y);
            else cCtx.lineTo(x, y);
        }
        cCtx.closePath();
    };

    cCtx.save();
    cCtx.rotate(angle * 0.8);
    drawStar(43, 35, 0);
    cCtx.strokeStyle = accentColor;
    cCtx.globalAlpha = 0.27 + (Math.sin(angle * 2) + 1) * 0.08;
    cCtx.lineWidth = 0.8;
    cCtx.shadowColor = accentColor;
    cCtx.shadowBlur = 6;
    cCtx.stroke();
    cCtx.restore();

    cCtx.save();
    cCtx.rotate(angle * 0.8 + Math.sin(angle * 0.6) * 0.025);
    drawStar(34, 14, 0);
    const starGradient = cCtx.createLinearGradient(-25, -30, 27, 30);
    starGradient.addColorStop(0, starColor);
    starGradient.addColorStop(0.52, starHighlight);
    starGradient.addColorStop(1, starColor);
    cCtx.fillStyle = starGradient;
    cCtx.strokeStyle = starHighlight;
    cCtx.lineWidth = 2;
    cCtx.lineJoin = 'round';
    cCtx.shadowColor = starColor;
    cCtx.shadowBlur = 12 + (Math.sin(angle * 3) + 1) * 4;
    cCtx.globalAlpha = 0.9;
    cCtx.fill();
    cCtx.globalAlpha = 1;
    cCtx.stroke();

    cCtx.beginPath();
    for (let point = 0; point < 5; point++) {
        const theta = point * Math.PI * 2 / 5 - Math.PI / 2;
        cCtx.moveTo(0, 0);
        cCtx.lineTo(Math.cos(theta) * 34, Math.sin(theta) * 34);
    }
    cCtx.strokeStyle = accentColor;
    cCtx.globalAlpha = 0.38;
    cCtx.lineWidth = 0.65;
    cCtx.shadowBlur = 0;
    cCtx.stroke();

    cCtx.beginPath();
    cCtx.arc(0, 0, 3, 0, Math.PI * 2);
    cCtx.fillStyle = '#ffffff';
    cCtx.shadowColor = '#ffffff';
    cCtx.shadowBlur = 12;
    cCtx.globalAlpha = 0.95;
    cCtx.fill();
    cCtx.restore();
    cCtx.restore();

    angle += 0.035;
    requestAnimationFrame(drawInteractiveEntity);
}
drawInteractiveEntity();

/* ======================= INTRO: GLITCH ALERT SEQUENCE ======================= */
// إنترو ترحيبي هادئ يجهّز التجربة ويستجيب للنقر وحركة المؤشر.

const ALERT_DURATION_MS = 4700;
const DISMISS_DELAY_MS = 600;
const INTRO_SPAM_MESSAGES = [
    'A little space, made just for me.',
    'A place for ideas to find their shape.',
    'Small details can make a big difference.',
    'A sketch can become a whole new world.',
    'Colors can turn a feeling into a picture.',
    'Every project begins with one small thought.',
    'Learning something new opens another door.',
    'There is always room to try something different.',
    'A little creativity can brighten an ordinary day.',
    'Each page holds a piece of my journey.',
    'Thank you for being here — almost ready...',
    'And now, let me introduce myself...'
];
function getIntroSpamMessages() {
    return INTRO_SPAM_MESSAGES;
}

let alertResolveTimer = null;
let dismissTimer = null;
let introDismissed = false;
let introEntryStarted = false;
let introSpamTimer = null;
let introSpamIndex = 0;
let introTypingTimer = null;
let introResolved = false;

function renderIntroSpamText() {
    const consoleEl = document.getElementById('intro-spam-console');
    if (!consoleEl) return;

    const messages = getIntroSpamMessages();
    const message = messages[introSpamIndex];
    const line = document.createElement('div');
    line.className = 'spam-line';
    line.textContent = message;
    consoleEl.prepend(line);
    while (consoleEl.children.length > 4) {
        consoleEl.lastElementChild.remove();
    }

    requestAnimationFrame(() => line.classList.add('visible'));
    setTimeout(() => {
        line.classList.remove('visible');
        line.classList.add('processed');
    }, 1350);

    introSpamIndex += 1;
    if (introSpamIndex >= messages.length && introSpamTimer) {
        clearInterval(introSpamTimer);
        introSpamTimer = null;
    }
}

function startIntroSpamSequence() {
    renderIntroSpamText();
    introSpamTimer = setInterval(renderIntroSpamText, 400);
}

function markAlertResolved() {
    if (introResolved) return;
    introResolved = true;
    const introScreen = document.getElementById('intro-screen');
    const label = document.getElementById('id-scan-label');
    const emblem = document.querySelector('.glitch-emblem-name');
    introScreen.classList.add('resolved');
    if (label) label.textContent = translate('comeIn');

    if (emblem) {
        const text = emblem.dataset.text || 'MALAK';
        let i = 0;
        clearInterval(introTypingTimer);
        introTypingTimer = setInterval(() => {
            emblem.textContent = text.slice(0, i + 1);
            i += 1;
            if (i >= text.length) {
                clearInterval(introTypingTimer);
                introTypingTimer = null;
            }
        }, 75);
    }

    if (introSpamTimer) clearInterval(introSpamTimer);
}

function beginAlertSequence() {
    const emblem = document.querySelector('.glitch-emblem-name');
    if (emblem) emblem.textContent = '';
    startIntroSpamSequence();
    alertResolveTimer = setTimeout(() => {
        markAlertResolved();
        dismissTimer = setTimeout(dismissIntroScreen, DISMISS_DELAY_MS);
    }, ALERT_DURATION_MS);
}
beginAlertSequence();

function startArcadeExperience() {
    if (introDismissed || introEntryStarted) return;
    introEntryStarted = true;
    clearTimeout(alertResolveTimer);
    clearTimeout(dismissTimer);
    if (introSpamTimer) clearInterval(introSpamTimer);
    if (!introResolved) {
        alertResolveTimer = setTimeout(() => {
            markAlertResolved();
            dismissTimer = setTimeout(dismissIntroScreen, DISMISS_DELAY_MS);
        }, 820);
        return;
    }
    dismissTimer = setTimeout(dismissIntroScreen, 700);
}

function dismissIntroScreen() {
    if (introDismissed) return;
    introDismissed = true;
    introStarsAnimationActive = false;
    const intro = document.getElementById('intro-screen');
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.classList.add('hidden');
    }, 800);
}

document.addEventListener('keydown', (event) => {
    if (!introDismissed && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        startArcadeExperience();
    }
});

/* ======================= NAVIGATION SYSTEM (SEPARATE PAGES) ======================= */
// كل قسم صفحته لوحده: الشريط الجانبي بيفتح/يقفل اللوحة المطلوبة بدل ما يعمل سكرول.

const SECTION_TITLES = {
    about: 'aboutDeck',
    contacts: 'contactDeck',
    message: 'messageDeck'
};

// يفتح قسم معيّن، يحدّث العنوان، وحالة الروابط النشطة في الشريط الجانبي
function navigateTo(sectionName) {
    if (!SECTION_TITLES[sectionName]) return;

    document.getElementById('gateway-hub').classList.add('hidden');
    document.getElementById('viewport-deck').classList.remove('hidden');

    document.querySelectorAll('.content-panel').forEach(panel => panel.classList.remove('active'));
    const targetPanel = document.getElementById('panel-' + sectionName);
    if (targetPanel) targetPanel.classList.add('active');

    document.getElementById('deck-title').textContent = translate(SECTION_TITLES[sectionName]);

    document.querySelectorAll('.sidebar-link').forEach(link => {
        const isActive = link.dataset.section === sectionName;
        link.classList.toggle('active', isActive);
        link.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
}

// يرجع لصفحة المكعب الرئيسية ويصفّر حالة التنقل
function returnHome() {
    document.getElementById('viewport-deck').classList.add('hidden');
    document.getElementById('gateway-hub').classList.remove('hidden');

    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
    });
}

let welcomeTypingTimer = null;

function typeWelcomeCopy() {
    const copy = document.getElementById('welcome-copy');
    const fullText = translate('welcomeCopy');
    const characters = Array.from(fullText);
    const characterDeadlines = [];
    let characterIndex = 0;
    let nextCharacterAt = 0;

    if (welcomeTypingTimer !== null) clearTimeout(welcomeTypingTimer);
    copy.setAttribute('aria-label', fullText);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        copy.textContent = fullText;
        copy.classList.remove('is-typing');
        welcomeTypingTimer = null;
        return;
    }

    characters.forEach(character => {
        characterDeadlines.push(nextCharacterAt);
        nextCharacterAt += 50;
        if (/[.,!?;:]/.test(character)) nextCharacterAt += 160;
    });

    copy.textContent = '';
    copy.classList.add('is-typing');
    const typingStartedAt = performance.now();

    function typeNextCharacter() {
        if (welcomeModal.classList.contains('hidden')) {
            copy.classList.remove('is-typing');
            welcomeTypingTimer = null;
            return;
        }

        const elapsed = performance.now() - typingStartedAt;
        while (characterIndex < characters.length && characterDeadlines[characterIndex] <= elapsed) {
            copy.textContent += characters[characterIndex++];
        }

        if (characterIndex >= characters.length) {
            copy.classList.remove('is-typing');
            welcomeTypingTimer = null;
        } else {
            welcomeTypingTimer = window.setTimeout(
                typeNextCharacter,
                Math.max(0, characterDeadlines[characterIndex] - elapsed)
            );
        }
    }

    typeNextCharacter();
}

function openWelcomeMessage() {
    const modal = document.getElementById('welcome-modal');
    modal.classList.remove('hidden');
    document.body.classList.add('welcome-focus-mode');
    typeWelcomeCopy();
    requestAnimationFrame(() => {
        modal.querySelector('.welcome-close').focus();
    });
}

function closeWelcomeMessage(restoreFocus = true) {
    const modal = document.getElementById('welcome-modal');
    if (modal.classList.contains('hidden')) return;
    modal.classList.add('hidden');
    document.body.classList.remove('welcome-focus-mode');
    if (welcomeTypingTimer !== null) {
        clearTimeout(welcomeTypingTimer);
        welcomeTypingTimer = null;
    }
    document.getElementById('welcome-copy').classList.remove('is-typing');
    if (restoreFocus) document.querySelector('.star-art-trigger').focus();
}

function openMessageFromWelcome() {
    closeWelcomeMessage(false);
    navigateTo('message');
    requestAnimationFrame(() => {
        const nameField = document.getElementById('msg-name');
        if (nameField) nameField.focus();
    });
}

const welcomeModal = document.getElementById('welcome-modal');
welcomeModal.addEventListener('click', (event) => {
    if (event.target === welcomeModal) closeWelcomeMessage();
});

document.addEventListener('keydown', (event) => {
    if (welcomeModal.classList.contains('hidden')) return;

    if (event.key === 'Escape') {
        closeWelcomeMessage();
        return;
    }

    if (event.key === 'Tab') {
        const focusable = Array.from(welcomeModal.querySelectorAll('button:not([disabled])'));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }
});

function switchAboutTab(tabName, btnEl) {
    document.querySelectorAll('.about-subnav button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.about-subcontent').forEach(content => content.classList.remove('active'));

    if (btnEl) btnEl.classList.add('active');
    const targetTab = document.getElementById('about-' + tabName);
    if (targetTab) targetTab.classList.add('active');
}

/* ======================= END NAVIGATION SYSTEM ======================= */

/* ======================= CONTACT FORM ======================= */

let successMsgTimer = null;

function handleFormspreeSubmit(e) {
    e.preventDefault();
    const form = document.getElementById('formspree-transmission-form');
    const successMsg = document.getElementById('form-success-msg');
    const submitBtn = form.querySelector('.cyber-submit-btn');

    const formData = new FormData(form);

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.dataset.originalText = submitBtn.dataset.originalText || submitBtn.textContent;
        submitBtn.textContent = translate('sending');
    }

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            form.reset();

            clearTimeout(successMsgTimer);
            successMsg.classList.remove('hidden');
            successMsgTimer = setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 4000);
        } else {
            alert(translate('transmissionError'));
        }
    }).catch(error => {
        alert(translate('networkError'));
    }).finally(() => {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = submitBtn.dataset.originalText;
        }
    });
}

const transmissionForm = document.getElementById('formspree-transmission-form');
if (transmissionForm) {
    transmissionForm.addEventListener('submit', handleFormspreeSubmit);
}

/* ======================= CHESS GAME (POWERED BY chess.js) ======================= */
// بدل المحرك اليدوي المعقد، بنستخدم مكتبة chess.js الجاهزة والموثوقة
// لتوليد الحركات الشرعية وكشف الكش/الكش مات، فالكود هنا بقى بسيط وقصير.

let chessGame = null;          // نسخة من Chess() بعد تحميل المكتبة
let chessGameActive = false;
let chessSelectedSquare = null;   // مربع بالنوتيشن الجبري، مثال: 'e2'
let chessLegalTargets = [];       // نتيجة chessGame.moves({square, verbose:true})

const pieceSymbols = {
    p: '♟', n: '♞', b: '♝', r: '♜', q: '♛', k: '♚'
};
const CHESS_PIECE_VALUE = { p: 1, n: 3, b: 3, r: 5, q: 9, k: 0 };

function algebraic(row, col) {
    return 'abcdefgh'[col] + (8 - row);
}

// نسخة 0.10.2 من chess.js معندهاش .board()، فبنبنيه إحنا بمربع مربع عن طريق .get()
function buildBoardArray() {
    const arr = [];
    for (let row = 0; row < 8; row++) {
        const rowArr = [];
        for (let col = 0; col < 8; col++) {
            rowArr.push(chessGame.get(algebraic(row, col)));
        }
        arr.push(rowArr);
    }
    return arr;
}

function findKingSquare(boardArr, color) {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const p = boardArr[row][col];
            if (p && p.type === 'k' && p.color === color) return algebraic(row, col);
        }
    }
    return null;
}

function openChessModal() {
    document.getElementById('chess-modal').classList.remove('hidden');
    if (!chessGame && typeof Chess !== 'undefined') {
        chessGame = new Chess();
    }
    renderChessBoard();
}

function closeChessModal() {
    document.getElementById('chess-modal').classList.add('hidden');
}

function startChessGame() {
    if (typeof Chess === 'undefined') {
        document.getElementById('chess-status').textContent = translate('chessEngineError');
        return;
    }
    chessGame = new Chess();
    chessGameActive = true;
    chessSelectedSquare = null;
    chessLegalTargets = [];
    updateChessStatus();
    renderChessBoard();
}

function updateChessStatus() {
    const statusEl = document.getElementById('chess-status');
    if (!chessGame) return;

    if (chessGame.in_checkmate()) {
        statusEl.textContent = translate(chessGame.turn() === 'w' ? 'checkmateBot' : 'checkmateYou');
        chessGameActive = false;
        return;
    }
    if (chessGame.in_stalemate() || chessGame.in_draw()) {
        statusEl.textContent = translate('draw');
        chessGameActive = false;
        return;
    }
    if (!chessGameActive) return;

    if (chessGame.turn() === 'w') {
        statusEl.textContent = translate(chessGame.in_check() ? 'checkTurn' : 'yourTurn');
    } else {
        statusEl.textContent = translate('botThinking');
    }
}

function renderChessBoard() {
    const boardEl = document.getElementById('chess-board');
    boardEl.innerHTML = '';
    if (!chessGame) return;

    const boardArr = buildBoardArray(); // صف 0 = رانك 8 ... صف 7 = رانك 1
    const kingInCheckSquare = (chessGameActive && chessGame.in_check())
        ? findKingSquare(boardArr, chessGame.turn())
        : null;

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const sq = document.createElement('div');
            const square = algebraic(row, col);
            sq.className = `chess-square ${(row + col) % 2 === 0 ? 'light' : 'dark'}`;
            sq.dataset.square = square;

            const piece = boardArr[row][col];
            if (piece) {
                sq.innerText = pieceSymbols[piece.type] || '';
                sq.style.color = piece.color === 'w' ? '#fff7e4' : '#e4bd67';
                sq.style.textShadow = piece.color === 'w'
                    ? '0 2px 3px rgba(20, 12, 12, 0.72)'
                    : '0 2px 5px rgba(20, 12, 12, 0.8)';
                sq.setAttribute('aria-label', `${piece.color === 'w' ? 'White' : 'Black'} ${piece.type} on ${square}`);
            } else {
                sq.setAttribute('aria-label', `Empty square ${square}`);
            }

            if (chessSelectedSquare === square) sq.classList.add('selected');

            const legalMove = chessLegalTargets.find(m => m.to === square);
            if (legalMove) {
                const isCapture = legalMove.flags.indexOf('c') !== -1 || legalMove.flags.indexOf('e') !== -1;
                sq.classList.add(isCapture ? 'legal-capture' : 'legal-move');
            }

            if (kingInCheckSquare === square) sq.classList.add('king-in-check');

            sq.addEventListener('click', () => handleSquareClick(square));
            boardEl.appendChild(sq);
        }
    }
}

function handleSquareClick(square) {
    if (!chessGameActive || !chessGame || chessGame.turn() !== 'w') return;

    if (chessSelectedSquare === square) {
        chessSelectedSquare = null;
        chessLegalTargets = [];
        renderChessBoard();
        return;
    }

    if (chessSelectedSquare) {
        const move = chessLegalTargets.find(m => m.to === square);
        if (move) {
            chessGame.move({ from: chessSelectedSquare, to: square, promotion: 'q' });
            chessSelectedSquare = null;
            chessLegalTargets = [];
            renderChessBoard();
            updateChessStatus();
            if (chessGameActive) {
                setTimeout(botMove, 700);
            }
            return;
        }
    }

    const piece = chessGame.get(square);
    if (piece && piece.color === 'w') {
        chessSelectedSquare = square;
        chessLegalTargets = chessGame.moves({ square, verbose: true });
    } else {
        chessSelectedSquare = null;
        chessLegalTargets = [];
    }
    renderChessBoard();
}

// يختار البوت حركة شرعية مع تفضيل الأسر والكش، ويُنهي المباراة فور توفر كش مات.
function botMove() {
    if (!chessGameActive || !chessGame || chessGame.turn() !== 'b') return;

    const moves = chessGame.moves({ verbose: true });
    if (moves.length === 0) return;

    let bestScore = -Infinity;
    let candidates = [];
    moves.forEach(m => {
        chessGame.move({ from: m.from, to: m.to, promotion: m.promotion || 'q' });
        const materialScore = buildBoardArray().flat().reduce((score, piece) => {
            if (!piece) return score;
            const value = CHESS_PIECE_VALUE[piece.type] || 0;
            return score + (piece.color === 'b' ? value : -value);
        }, 0);
        const score = materialScore
            + (chessGame.in_checkmate() ? 1000 : 0)
            + (chessGame.in_check() ? 0.5 : 0);
        chessGame.undo();
        if (score > bestScore) { bestScore = score; candidates = [m]; }
        else if (score === bestScore) { candidates.push(m); }
    });

    const chosen = candidates[Math.floor(Math.random() * candidates.length)];
    chessGame.move({ from: chosen.from, to: chosen.to, promotion: 'q' });

    renderChessBoard();
    updateChessStatus();
}

/* ======================= END CHESS GAME ======================= */

/* ======================= MEMORY MATCH GAME ======================= */

const MEMORY_SYMBOLS = ['✦', '☾', '♫', '♡', '☀', '✿', '☁', '♬'];
const memoryBoard = document.getElementById('memory-board');
const memoryModal = document.getElementById('memory-modal');
let memoryCards = [];
let memoryFirstCard = null;
let memoryLocked = false;
let memoryMoves = 0;
let memoryMatchedPairs = 0;
let memoryMismatchTimer = null;
let memoryOpener = null;

function setMemoryStatus(key, values = {}) {
    document.getElementById('memory-status').textContent = translate(key, values);
}

function resetMemoryGame() {
    if (memoryMismatchTimer) {
        clearTimeout(memoryMismatchTimer);
        memoryMismatchTimer = null;
    }

    memoryFirstCard = null;
    memoryLocked = false;
    memoryMoves = 0;
    memoryMatchedPairs = 0;
    memoryCards = MEMORY_SYMBOLS.concat(MEMORY_SYMBOLS)
        .map(symbol => ({ symbol, matched: false }));
    for (let index = memoryCards.length - 1; index > 0; index--) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [memoryCards[index], memoryCards[swapIndex]] = [memoryCards[swapIndex], memoryCards[index]];
    }

    document.getElementById('memory-moves').textContent = '0';
    document.getElementById('memory-pairs').textContent = '0 / 8';
    setMemoryStatus('memoryStart');
    memoryBoard.replaceChildren();

    memoryCards.forEach((card, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'memory-tile';
        button.dataset.memoryIndex = String(index);
        button.textContent = '?';
        button.setAttribute('aria-label', `${translate('hiddenCard')} ${index + 1}`);
        button.setAttribute('aria-pressed', 'false');
        memoryBoard.appendChild(button);
    });
}

function openMemoryGame() {
    if (!memoryCards.length) resetMemoryGame();
    memoryOpener = document.activeElement;
    memoryModal.classList.remove('hidden');
    memoryModal.querySelector('.memory-close').focus();
}

function closeMemoryGame() {
    if (memoryModal.classList.contains('hidden')) return;
    memoryModal.classList.add('hidden');
    if (memoryOpener instanceof HTMLElement) memoryOpener.focus();
}

function flipMemoryCard(button) {
    const cardIndex = Number(button.dataset.memoryIndex);
    const card = memoryCards[cardIndex];
    if (!card || card.matched || memoryLocked || button === memoryFirstCard) return;

    button.textContent = card.symbol;
    button.classList.add('revealed');
    button.setAttribute('aria-label', `${translate('revealedCard')} ${cardIndex + 1}: ${card.symbol}`);
    button.setAttribute('aria-pressed', 'true');

    if (!memoryFirstCard) {
        memoryFirstCard = button;
        return;
    }

    memoryMoves += 1;
    document.getElementById('memory-moves').textContent = String(memoryMoves);
    const firstIndex = Number(memoryFirstCard.dataset.memoryIndex);
    const firstCard = memoryCards[firstIndex];

    if (firstCard.symbol === card.symbol) {
        firstCard.matched = true;
        card.matched = true;
        memoryFirstCard.classList.add('matched');
        button.classList.add('matched');
        memoryFirstCard.disabled = true;
        button.disabled = true;
        memoryFirstCard = null;
        memoryMatchedPairs += 1;
        document.getElementById('memory-pairs').textContent = `${memoryMatchedPairs} / 8`;
        if (memoryMatchedPairs === 8) {
            setMemoryStatus('memoryWin', { moves: memoryMoves });
        } else {
            setMemoryStatus('memoryMatch');
        }
        return;
    }

    memoryLocked = true;
    setMemoryStatus('memoryMismatch');
    memoryMismatchTimer = setTimeout(() => {
        [memoryFirstCard, button].forEach(cardButton => {
            const index = Number(cardButton.dataset.memoryIndex);
            cardButton.textContent = '?';
            cardButton.classList.remove('revealed');
            cardButton.setAttribute('aria-label', `${translate('hiddenCard')} ${index + 1}`);
            cardButton.setAttribute('aria-pressed', 'false');
        });
        memoryFirstCard = null;
        memoryLocked = false;
        memoryMismatchTimer = null;
    }, 850);
}

memoryBoard.addEventListener('click', event => {
    const cardButton = event.target.closest('[data-memory-index]');
    if (cardButton) flipMemoryCard(cardButton);
});

memoryModal.addEventListener('click', event => {
    if (event.target === memoryModal) closeMemoryGame();
});

document.addEventListener('keydown', event => {
    if (memoryModal.classList.contains('hidden')) return;

    if (event.key === 'Escape') {
        closeMemoryGame();
        return;
    }

    if (event.key === 'Tab') {
        const focusable = Array.from(memoryModal.querySelectorAll('button:not([disabled])'));
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }
});

/* ======================= END MEMORY MATCH GAME ======================= */

/* ======================= GLOBAL EVENT DELEGATION ======================= */
// نقطة دخول واحدة لكل تفاعلات الموقع بدل onclick متفرقة في الـ HTML.
// أسهل في الصيانة وأنضف في القراءة.

const ACTION_HANDLERS = {
    'enter-system': startArcadeExperience,
    'toggle-notifications': toggleNotifications,
    'return-home': returnHome,
    'open-chess': openChessModal,
    'close-chess': closeChessModal,
    'start-chess': startChessGame,
    'open-memory': openMemoryGame,
    'close-memory': closeMemoryGame,
    'reset-memory': resetMemoryGame,
    'toggle-theme': toggleTheme,
    'open-welcome': openWelcomeMessage,
    'close-welcome': closeWelcomeMessage,
    'open-message-from-welcome': openMessageFromWelcome
};

function toggleNotifications() {
    const panel = document.getElementById('notifications-panel');
    const button = document.querySelector('.notification-bell');
    const isOpening = panel.classList.contains('hidden');

    panel.classList.toggle('hidden', !isOpening);
    button.setAttribute('aria-expanded', String(isOpening));
    if (isOpening) {
        document.getElementById('notification-count').classList.add('hidden');
        document.getElementById('notification-toast').classList.add('hidden');
    }
}

function updateLocalClock() {
    const clock = document.getElementById('local-clock');
    const now = new Date();
    clock.textContent = new Intl.DateTimeFormat(navigator.language, {
        hour: '2-digit',
        minute: '2-digit'
    }).format(now);
    clock.dateTime = now.toISOString();
}

updateLocalClock();
window.setInterval(updateLocalClock, 15000);

function updateWelcomeNotificationTime() {
    const sentAt = document.getElementById('welcome-notification').dataset.sentAt;
    if (!sentAt) return;

    const sentAtTimestamp = Number(sentAt);
    const elapsedSeconds = Math.max(0, Math.floor((Date.now() - sentAtTimestamp) / 1000));
    const units = [
        { limit: 60, seconds: 1, unit: 'second' },
        { limit: 3600, seconds: 60, unit: 'minute' },
        { limit: 86400, seconds: 3600, unit: 'hour' },
        { limit: 604800, seconds: 86400, unit: 'day' },
        { limit: 2629800, seconds: 604800, unit: 'week' },
        { limit: 31557600, seconds: 2629800, unit: 'month' },
        { limit: Infinity, seconds: 31557600, unit: 'year' }
    ];
    const timeUnit = units.find(({ limit }) => elapsedSeconds < limit);
    const count = Math.max(1, Math.floor(elapsedSeconds / timeUnit.seconds));
    const timeElement = document.getElementById('notification-sent-time');

    timeElement.textContent = new Intl.RelativeTimeFormat(currentLanguage, { numeric: 'auto' })
        .format(-count, timeUnit.unit);
    timeElement.dateTime = new Date(sentAtTimestamp).toISOString();
}

function deliverWelcomeNotification() {
    document.getElementById('welcome-notification').dataset.sentAt = String(Date.now());
    document.getElementById('notifications-empty').classList.add('hidden');
    document.getElementById('welcome-notification').classList.remove('hidden');
    document.getElementById('notification-count').classList.remove('hidden');
    updateWelcomeNotificationTime();
    window.setInterval(updateWelcomeNotificationTime, 30000);

    const toast = document.getElementById('notification-toast');
    toast.classList.remove('hidden');
    window.setTimeout(() => toast.classList.add('hidden'), 6000);
}

window.setTimeout(deliverWelcomeNotification, 10000);

document.addEventListener('click', (e) => {
    const actionEl = e.target.closest('[data-action]');
    if (actionEl) {
        const handler = ACTION_HANDLERS[actionEl.dataset.action];
        if (handler) handler();
        return;
    }

    const sectionEl = e.target.closest('[data-section]');
    if (sectionEl) {
        navigateTo(sectionEl.dataset.section);
        return;
    }

    const tabEl = e.target.closest('[data-tab]');
    if (tabEl) {
        switchAboutTab(tabEl.dataset.tab, tabEl);
    }
});

document.addEventListener('click', (event) => {
    const widget = document.querySelector('.notification-widget');
    const panel = document.getElementById('notifications-panel');
    if (widget.contains(event.target) || panel.classList.contains('hidden')) return;

    panel.classList.add('hidden');
    document.querySelector('.notification-bell').setAttribute('aria-expanded', 'false');
});

document.addEventListener('keydown', (event) => {
    const panel = document.getElementById('notifications-panel');
    if (event.key !== 'Escape' || panel.classList.contains('hidden')) return;

    panel.classList.add('hidden');
    const button = document.querySelector('.notification-bell');
    button.setAttribute('aria-expanded', 'false');
    button.focus();
});

// دعم لوحة المفاتيح (Enter / مسطرة المسافة) على العناصر التي دورها زرار
// لكنها مش <button> فعليًا (زي شعار البراند)
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;

    const target = e.target.closest('[data-section], [data-action]');
    if (!target || target.tagName === 'BUTTON' || target.id === 'alert-wrapper') return;

    e.preventDefault();
    target.click();
});

/* ======================= END GLOBAL EVENT DELEGATION ======================= */