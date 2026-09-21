'use strict';

/* ======================= BACKGROUND: RETRO GRID CANVAS ======================= */

const canvas = document.getElementById('cyber-canvas');
const ctx = canvas.getContext('2d');

let stars = [];
for (let i = 0; i < 140; i++) {
    stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * (window.innerHeight * 0.5),
        radius: Math.random() * 1.8 + 0.5,
        alpha: Math.random() * 0.8 + 0.2
    });
}

let gridOffset = 0;
let shatterCracks = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

window.addEventListener('click', (e) => {
    let clickX = e.clientX;
    let clickY = e.clientY;
    
    for (let i = 0; i < 6; i++) {
        shatterCracks.push({
            x1: clickX,
            y1: clickY,
            x2: clickX + (Math.random() - 0.5) * 300,
            y2: clickY + (Math.random() - 0.5) * 300,
            alpha: 1.0,
            life: 60
        });
    }
});

function animateRetroGridBackground() {
    ctx.fillStyle = '#020205';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < stars.length; i++) {
        let s = stars[i];
        ctx.globalAlpha = s.alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.globalAlpha = 1.0;

    let computedStyle = getComputedStyle(document.body);
    let neonBlue = computedStyle.getPropertyValue('--neon-blue').trim() || '#00d2ff';
    let horizonY = canvas.height * 0.5;

    ctx.strokeStyle = neonBlue;
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(0, horizonY);
    ctx.lineTo(canvas.width, horizonY);
    ctx.stroke();

    let numLines = 20;
    let centerX = canvas.width / 2;
    for (let i = -numLines; i <= numLines; i++) {
        let bottomX = centerX + i * (canvas.width / 10);
        ctx.beginPath();
        ctx.moveTo(centerX, horizonY);
        ctx.lineTo(bottomX, canvas.height);
        ctx.stroke();
    }

    gridOffset = (gridOffset + 0.6) % 20;
    for (let y = horizonY; y < canvas.height; y += (y - horizonY) * 0.1 + 2) {
        let currentY = y + gridOffset;
        if (currentY > canvas.height) continue;
        
        ctx.beginPath();
        ctx.moveTo(0, currentY);
        ctx.lineTo(canvas.width, currentY);
        ctx.strokeStyle = neonBlue;
        ctx.globalAlpha = Math.min(1, (currentY - horizonY) / (canvas.height - horizonY));
        ctx.stroke();
        ctx.globalAlpha = 1.0;
    }

    if (shatterCracks.length > 0) {
        ctx.lineWidth = 1.5;
        for (let i = shatterCracks.length - 1; i >= 0; i--) {
            let c = shatterCracks[i];
            ctx.strokeStyle = Math.random() > 0.5 ? neonBlue : '#ffdf00';
            ctx.globalAlpha = c.alpha;
            ctx.beginPath();
            ctx.moveTo(c.x1, c.y1);
            ctx.lineTo(c.x2, c.y2);
            ctx.stroke();

            c.life--;
            c.alpha -= 0.015;
            if (c.life <= 0 || c.alpha <= 0) {
                shatterCracks.splice(i, 1);
            }
        }
        ctx.globalAlpha = 1.0;
    }

    requestAnimationFrame(animateRetroGridBackground);
}
animateRetroGridBackground();

/* ======================= INTRO: MOUSE-REACTIVE STARFIELD ======================= */

const introStarsCanvas = document.getElementById('intro-stars-canvas');
const iCtx = introStarsCanvas ? introStarsCanvas.getContext('2d') : null;

let introStars = [];
let mouseX = 0, mouseY = 0;

function resizeIntroStars() {
    if (!introStarsCanvas) return;
    introStarsCanvas.width = window.innerWidth;
    introStarsCanvas.height = window.innerHeight;
    
    introStars = [];
    for (let i = 0; i < 90; i++) {
        introStars.push({
            x: Math.random() * introStarsCanvas.width,
            y: Math.random() * introStarsCanvas.height,
            size: Math.random() * 1.5 + 0.5,
            baseAlpha: Math.random() * 0.7 + 0.2,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3
        });
    }
}
window.addEventListener('resize', resizeIntroStars);
resizeIntroStars();

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // تحديث توهج الماوس التفاعلي في شاشة الإنترو
    const introGlow = document.getElementById('intro-mouse-glow');
    if (introGlow) {
        introGlow.style.setProperty('--mx', mouseX + 'px');
        introGlow.style.setProperty('--my', mouseY + 'px');
    }
});

function animateIntroStars() {
    if (!iCtx || !introStarsCanvas) return;
    iCtx.clearRect(0, 0, introStarsCanvas.width, introStarsCanvas.height);

    let computedStyle = getComputedStyle(document.body);
    let neonYellow = computedStyle.getPropertyValue('--neon-yellow').trim() || '#ffdf00';

    for (let i = 0; i < introStars.length; i++) {
        let s = introStars[i];
        
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0) s.x = introStarsCanvas.width;
        if (s.x > introStarsCanvas.width) s.x = 0;
        if (s.y < 0) s.y = introStarsCanvas.height;
        if (s.y > introStarsCanvas.height) s.y = 0;

        let dx = mouseX - s.x;
        let dy = mouseY - s.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        let alpha = s.baseAlpha;

        if (dist < 120) {
            alpha = Math.min(1.0, alpha + (120 - dist) / 120);
            iCtx.strokeStyle = neonYellow;
            iCtx.lineWidth = 0.4;
            iCtx.globalAlpha = (120 - dist) / 300;
            iCtx.beginPath();
            iCtx.moveTo(s.x, s.y);
            iCtx.lineTo(mouseX, mouseY);
            iCtx.stroke();
        }

        iCtx.fillStyle = '#ffffff';
        iCtx.globalAlpha = alpha;
        iCtx.beginPath();
        iCtx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        iCtx.fill();
    }
    iCtx.globalAlpha = 1.0;

    requestAnimationFrame(animateIntroStars);
}
animateIntroStars();

/* ======================= THEME SWITCHER ======================= */

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('theme-cyan')) {
        body.classList.remove('theme-cyan');
        body.classList.add('theme-pink');
    } else if (body.classList.contains('theme-pink')) {
        body.classList.remove('theme-pink');
        body.classList.add('theme-emerald');
    } else {
        body.classList.remove('theme-emerald');
        body.classList.add('theme-cyan');
    }
}

/* ======================= ABOUT PANEL: HOLO CREATURE CANVAS ======================= */

const creatureCanvas = document.getElementById('interactive-creature-canvas');
const cCtx = creatureCanvas ? creatureCanvas.getContext('2d') : null;

let angle = 0;
function drawInteractiveEntity() {
    if (!creatureCanvas || !cCtx) return;
    cCtx.clearRect(0, 0, creatureCanvas.width, creatureCanvas.height);
    
    let cx = creatureCanvas.width / 2;
    let cy = creatureCanvas.height / 2;

    cCtx.beginPath();
    cCtx.arc(cx, cy, 55, 0, Math.PI * 2);
    cCtx.strokeStyle = 'rgba(0, 210, 255, 0.4)';
    cCtx.lineWidth = 1.5;
    cCtx.setLineDash([4, 4]);
    cCtx.stroke();
    cCtx.setLineDash([]);

    cCtx.save();
    cCtx.translate(cx, cy);
    cCtx.rotate(angle);

    cCtx.beginPath();
    for (let i = 0; i < 5; i++) {
        let theta = (i * 2 * Math.PI) / 5;
        let r1 = 28;
        let r2 = 14;
        let x1 = Math.cos(theta) * r1;
        let y1 = Math.sin(theta) * r1;
        let x2 = Math.cos(theta + Math.PI / 5) * r2;
        let y2 = Math.sin(theta + Math.PI / 5) * r2;
        if (i === 0) cCtx.moveTo(x1, y1);
        else cCtx.lineTo(x1, y1);
        cCtx.lineTo(x2, y2);
    }
    cCtx.closePath();
    cCtx.fillStyle = '#ffdf00';
    cCtx.shadowColor = '#ffdf00';
    cCtx.shadowBlur = 15;
    cCtx.fill();
    cCtx.restore();

    angle += 0.02;
    requestAnimationFrame(drawInteractiveEntity);
}
drawInteractiveEntity();


// يوقف أنيميشن الحلقة المكسورة وشظايا الجليتش ويحول اللون للتأكيد لما التحميل يخلص
function markScanComplete() {
    const emblem = document.getElementById('glitch-emblem');
    const label = document.getElementById('id-scan-label');
    if (emblem) emblem.classList.add('scan-complete');
    if (label) label.textContent = 'ACCESS GRANTED';
}

/* ======================= END INTRO UPGRADE ======================= */

/* ======================= INTRO: BOOT PROGRESS ======================= */

let currentPercent = 0;
const introBar = document.getElementById('intro-bar');
const introPercent = document.getElementById('intro-percent');

const loadTimer = setInterval(() => {
    let step = Math.floor(Math.random() * 2) + 1;
    currentPercent += step;

    if (currentPercent >= 100) {
        currentPercent = 100;
        clearInterval(loadTimer);
        introBar.style.width = '100%';
        introPercent.innerText = 'ONLINE // READY';
        markScanComplete();

        setTimeout(dismissIntroScreen, 400);
    } else {
        introBar.style.width = currentPercent + '%';
        introPercent.innerText = `LOADING... ${currentPercent}%`;
    }
}, 90);

function startArcadeExperience() {
    markScanComplete();

    currentPercent = 100;
    clearInterval(loadTimer);
    introBar.style.width = '100%';
    introPercent.innerText = 'ONLINE // ACTIVATED';
    dismissIntroScreen();
}

function dismissIntroScreen() {
    const intro = document.getElementById('intro-screen');
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.classList.add('hidden');
    }, 800);
}

/* ======================= NAVIGATION SYSTEM ======================= */

const SECTION_TITLES = {
    about: 'ABOUT ME // ARCHIVE DECK',
    contacts: 'CONTACT CHANNELS',
    message: 'TRANSMISSION TERMINAL'
};

function navigateTo(sectionName) {
    if (!SECTION_TITLES[sectionName]) return;

    document.getElementById('gateway-hub').classList.add('hidden');
    document.getElementById('viewport-deck').classList.remove('hidden');

    document.querySelectorAll('.content-panel').forEach(panel => panel.classList.remove('active'));
    const targetPanel = document.getElementById('panel-' + sectionName);
    if (targetPanel) targetPanel.classList.add('active');

    document.getElementById('deck-title').innerText = SECTION_TITLES[sectionName];

    document.querySelectorAll('.nav-link').forEach(link => {
        const isActive = link.dataset.section === sectionName;
        link.classList.toggle('active', isActive);
        link.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
}

// يرجع للصفحة الرئيسية (الهَب) ويصفّر حالة التنقل
function returnHome() {
    document.getElementById('viewport-deck').classList.add('hidden');
    document.getElementById('gateway-hub').classList.remove('hidden');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
    });
}

function switchAboutTab(tabName, btnEl) {
    document.querySelectorAll('.about-subnav button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.about-subcontent').forEach(content => content.classList.remove('active'));

    if (btnEl) btnEl.classList.add('active');
    const targetTab = document.getElementById('about-' + tabName);
    if (targetTab) targetTab.classList.add('active');
}

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
        submitBtn.textContent = 'SENDING...';
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
            alert('Transmission error. Please try again.');
        }
    }).catch(error => {
        alert('Network connection error.');
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

/* ======================= CHESS MINI-GAME (VS RANDOM BOT) ======================= */

// --- نظام الشطرنج التفاعلي المصغر ضد الكمبيوتر ---
let chessBoardState = [];
let selectedSquare = null;
let turn = 'white'; // white = player, black = bot
let gameActive = false;

const initialBoard = [
    ['r','n','b','q','k','b','n','r'],
    ['p','p','p','p','p','p','p','p'],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['P','P','P','P','P','P','P','P'],
    ['R','N','B','Q','K','B','N','R']
];

const pieceSymbols = {
    'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟',
    'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙'
};

function openChessModal() {
    document.getElementById('chess-modal').classList.remove('hidden');
    renderChessBoard();
}

function closeChessModal() {
    document.getElementById('chess-modal').classList.add('hidden');
}

function startChessGame() {
    chessBoardState = initialBoard.map(row => [...row]);
    turn = 'white';
    gameActive = true;
    selectedSquare = null;
    document.getElementById('chess-status').innerText = "YOUR TURN (WHITE)";
    renderChessBoard();
}

function renderChessBoard() {
    const boardEl = document.getElementById('chess-board');
    boardEl.innerHTML = '';

    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const sq = document.createElement('div');
            sq.className = `chess-square ${(r + c) % 2 === 0 ? 'light' : 'dark'}`;
            sq.dataset.row = r;
            sq.dataset.col = c;

            const piece = chessBoardState[r][c];
            if (piece) {
                sq.innerText = pieceSymbols[piece] || '';
                // تمييز قطع اللاعب بلون وقطع البوت بلون آخر
                sq.style.color = piece === piece.toUpperCase() ? '#000' : '#d946ef';
            }

            if (selectedSquare && selectedSquare.row === r && selectedSquare.col === c) {
                sq.classList.add('selected');
            }

            sq.addEventListener('click', () => handleSquareClick(r, c));
            boardEl.appendChild(sq);
        }
    }
}

function handleSquareClick(r, c) {
    if (!gameActive || turn !== 'white') return;

    const piece = chessBoardState[r][c];


    if (!selectedSquare) {
        if (piece && piece === piece.toUpperCase()) {
            selectedSquare = { row: r, col: c };
            renderChessBoard();
        }
    } else {
        // تحريك القطعة للمربع الجديد
        let sR = selectedSquare.row;
        let sC = selectedSquare.col;

        if (sR === r && sC === c) {
            selectedSquare = null; // إلغاء التحديد عند الضغط مرتين
        } else {
            // نقل الحركة وتحديث اللوحة
            chessBoardState[r][c] = chessBoardState[sR][sC];
            chessBoardState[sR][sC] = '';
            selectedSquare = null;
            turn = 'black';
            document.getElementById('chess-status').innerText = "BOT THINKING...";
            renderChessBoard();

        
            setTimeout(botMove, 800);
        }
        renderChessBoard();
    }
}

function botMove() {
    if (!gameActive) return;

    // random moves
    let botPieces = [];
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            let p = chessBoardState[r][c];
            if (p && p === p.toLowerCase()) {
                botPieces.push({r, c, p});
            }
        }
    }

    if (botPieces.length > 0) {
        
        let randomPiece = botPieces[Math.floor(Math.random() * botPieces.length)];
        let targetRow = randomPiece.r + 1;
        if (targetRow < 8 && chessBoardState[targetRow][randomPiece.c] === '') {
            chessBoardState[targetRow][randomPiece.c] = randomPiece.p;
            chessBoardState[randomPiece.r][randomPiece.c] = '';
        }
    }

    turn = 'white';
    document.getElementById('chess-status').innerText = "YOUR TURN (WHITE)";
    renderChessBoard();
}


const ACTION_HANDLERS = {
    'enter-system': startArcadeExperience,
    'return-home': returnHome,
    'open-chess': openChessModal,
    'close-chess': closeChessModal,
    'start-chess': startChessGame,
    'toggle-theme': toggleTheme
};

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

// دعم لوحة المفاتيح (Enter / مسطرة المسافة) على العناصر التي دورها زرار
// لكنها مش <button> فعليًا (زي كروت الهَب وشعار البراند)
document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;

    const target = e.target.closest('[data-section], [data-action]');
    if (!target || target.tagName === 'BUTTON') return; // الأزرار الحقيقية بتشتغل تلقائيًا

    e.preventDefault();
    target.click();
});

/* ======================= END GLOBAL EVENT DELEGATION ======================= */