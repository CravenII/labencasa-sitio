/* SolLingo para Nelly — app 100% estática. Sin CDNs, sin login, sin pagos. */
(function () {
  'use strict';

  /* ==================== Datos ==================== */
  var LESSONS = [
    {
      id: 'l1', num: '01',
      title: 'Mi día, a mi manera',
      desc: 'Mañanas, planes y conversaciones en casa',
      phrases: [
        ['Me levanto a las siete', 'I wake up at seven'],
        ['Preparo el desayuno', 'I make breakfast'],
        ['¿Dónde están mis llaves?', 'Where are my keys?'],
        ['Hoy trabajo desde casa', 'I work from home today'],
        ['Llamo a mi hija', 'I call my daughter'],
        ['La cena está lista', 'Dinner is ready'],
        ['Buenas noches, hasta mañana', 'Good night, see you tomorrow']
      ]
    },
    {
      id: 'l2', num: '02',
      title: 'Recados sin miedo',
      desc: 'Tiendas, transporte, pagos y paquetes',
      phrases: [
        ['¿Cuánto cuesta?', 'How much is it?'],
        ['¿Aceptan tarjeta?', 'Do you take card?'],
        ['Necesito una bolsa, por favor', 'I need a bag, please'],
        ['¿Dónde queda la farmacia?', 'Where is the pharmacy?'],
        ['Un boleto de ida, por favor', 'A one-way ticket, please'],
        ['¿A qué hora sale el autobús?', 'What time does the bus leave?'],
        ['El paquete llegó ayer', 'The package arrived yesterday']
      ]
    },
    {
      id: 'l3', num: '03',
      title: 'Gente que quiero',
      desc: 'Familia y amigos',
      phrases: [
        ['Mi esposo me ayuda mucho', 'My husband helps me a lot'],
        ['Hablamos todos los días', 'We talk every day'],
        ['Ella es mi mejor amiga', 'She is my best friend'],
        ['Vamos a visitar a la familia', 'We are going to visit family'],
        ['Te quiero mucho', 'I love you very much'],
        ['Nos vemos el domingo', 'See you on Sunday']
      ]
    },
    {
      id: 'l4', num: '04',
      title: 'Salgo y disfruto',
      desc: 'Salidas y restaurante',
      phrases: [
        ['Una mesa para dos, por favor', 'A table for two, please'],
        ['La cuenta, por favor', 'The check, please'],
        ['Estaba delicioso', 'It was delicious'],
        ['¿Qué me recomienda?', 'What do you recommend?'],
        ['Vamos a dar un paseo', "Let's go for a walk"],
        ['Qué bonito atardecer', 'What a beautiful sunset']
      ]
    }
  ];

  var PRAISE = [
    '¡Excelente, Nelly!',
    '¡Muy bien, Nelly!',
    '¡Increíble! ¡Sigue así!',
    '¡Vas muy bien, Nelly!',
    '¡Qué orgullo, Nelly!',
    '¡Perfecto, Nelly!'
  ];

  var COMFORT = [
    'Casi, casi... ¡tú puedes, Nelly!',
    'No pasa nada, inténtalo otra vez',
    'Vas bien, fíjate otra vez'
  ];

  var WIN_PHRASE = '¡Felicidades, Nelly! ¡Completaste la lección!';

  /* ==================== Utilidades ==================== */
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function rnd(n) { return Math.floor(Math.random() * n); }
  function choice(a) { return a[rnd(a.length)]; }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ==================== Persistencia (con try/catch) ==================== */
  var store = {
    get: function (k, d) {
      try {
        var v = localStorage.getItem(k);
        return v === null ? d : JSON.parse(v);
      } catch (e) { return d; }
    },
    set: function (k, v) {
      try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* la app sigue funcionando */ }
    }
  };
  var xp = store.get('sollingo_xp', 0);
  var doneIds = store.get('sollingo_done', []);
  var muted = store.get('sollingo_muted', false);

  /* ==================== Sonidos (Web Audio, sin archivos) ==================== */
  var actx = null;
  function ac() {
    try {
      if (!actx) {
        var AC = window.AudioContext || window.webkitAudioContext;
        actx = new AC();
      }
      if (actx.state === 'suspended') { actx.resume(); }
      return actx;
    } catch (e) { return null; }
  }
  function beep(freq, delay, dur, type, vol) {
    if (muted) return;
    var ctx = ac();
    if (!ctx) return;
    try {
      var t = ctx.currentTime + delay;
      var o = ctx.createOscillator();
      var g = ctx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g);
      g.connect(ctx.destination);
      o.start(t);
      o.stop(t + dur + 0.05);
    } catch (e) { /* silencio elegante */ }
  }
  function sfxCorrect() {
    var notes = [523.25, 659.25, 783.99, 1046.5];
    for (var i = 0; i < notes.length; i++) beep(notes[i], i * 0.09, 0.28, 'sine', 0.18);
  }
  function sfxWrong() {
    beep(196, 0, 0.30, 'sine', 0.12);
    beep(147, 0.14, 0.40, 'sine', 0.10);
  }
  function sfxFanfare() {
    var notes = [523.25, 523.25, 523.25, 659.25, 783.99, 1046.5];
    for (var i = 0; i < notes.length; i++) beep(notes[i], i * 0.13, 0.30, 'triangle', 0.16);
    beep(1318.5, notes.length * 0.13, 0.7, 'triangle', 0.16);
  }

  /* ==================== Voces ==================== */
  var voices = [];
  function loadVoices() {
    try { voices = window.speechSynthesis.getVoices() || []; }
    catch (e) { voices = []; }
  }
  if ('speechSynthesis' in window) {
    loadVoices();
    try { window.speechSynthesis.onvoiceschanged = loadVoices; } catch (e) {}
  }
  function findVoice(prefixes) {
    for (var i = 0; i < prefixes.length; i++) {
      for (var j = 0; j < voices.length; j++) {
        var l = (voices[j].lang || '').toLowerCase();
        if (l.indexOf(prefixes[i]) === 0) return voices[j];
      }
    }
    return null;
  }
  function speak(text, lang) {
    if (muted) return;
    try {
      if (!('speechSynthesis' in window)) return;
      var u = new SpeechSynthesisUtterance(text);
      if (lang === 'es') {
        var v = findVoice(['es-us', 'es-mx', 'es_419', 'es-es', 'es']);
        u.lang = v ? v.lang : 'es-ES';
        if (v) u.voice = v;
        u.rate = 1;
        u.pitch = 1.1;
      } else {
        var w = findVoice(['en-us', 'en']);
        u.lang = w ? w.lang : 'en-US';
        if (w) u.voice = w;
        u.rate = 0.9;
      }
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch (e) { /* sin voz, pero la app sigue */ }
  }
  function stopSpeak() {
    try {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    } catch (e) {}
  }

  /* ==================== DOM ==================== */
  var $ = function (id) { return document.getElementById(id); };
  var xpVal = $('xpVal'), doneVal = $('doneVal'), muteBtn = $('muteBtn');
  var screenHome = $('screen-home'), screenLesson = $('screen-lesson'), screenWin = $('screen-win');
  var lessonList = $('lessonList'), exerciseBox = $('exercise'), progressFill = $('progressFill');
  var feedback = $('feedback'), feedbackCard = $('feedbackCard');
  var feedbackTitle = $('feedbackTitle'), feedbackSub = $('feedbackSub');

  function showScreen(name) {
    screenHome.classList.toggle('hidden', name !== 'home');
    screenLesson.classList.toggle('hidden', name !== 'lesson');
    screenWin.classList.toggle('hidden', name !== 'win');
    window.scrollTo(0, 0);
  }

  function refreshHeader() {
    xpVal.textContent = xp;
    var n = 0;
    for (var i = 0; i < LESSONS.length; i++) {
      if (doneIds.indexOf(LESSONS[i].id) >= 0) n++;
    }
    doneVal.textContent = n;
    muteBtn.textContent = muted ? '🔇' : '🔊';
  }

  /* ==================== Inicio ==================== */
  function renderHome() {
    var html = '';
    for (var i = 0; i < LESSONS.length; i++) {
      var l = LESSONS[i];
      var isDone = doneIds.indexOf(l.id) >= 0;
      html += '<button class="lesson-card" data-lesson="' + l.id + '">' +
        '<span class="lesson-num">' + l.num + '</span>' +
        '<span class="lesson-info"><h3>' + esc(l.title) + '</h3><p>' + esc(l.desc) + '</p>' +
        (isDone ? '<span class="lesson-done">✓ Completada</span>' : '') +
        '</span><span class="playbtn">▶</span></button>';
    }
    lessonList.innerHTML = html;
    var cards = lessonList.querySelectorAll('.lesson-card');
    for (var k = 0; k < cards.length; k++) {
      cards[k].addEventListener('click', function () {
        startLesson(this.getAttribute('data-lesson'));
      });
    }
  }

  /* ==================== Lección ==================== */
  var S = { lesson: null, exs: [], idx: 0, xpGain: 0, locked: false };

  function startLesson(id) {
    var lesson = null;
    for (var i = 0; i < LESSONS.length; i++) {
      if (LESSONS[i].id === id) lesson = LESSONS[i];
    }
    if (!lesson) return;
    S.lesson = lesson;
    S.idx = 0;
    S.xpGain = 0;
    S.locked = false;
    S.exs = buildExercises(lesson);
    showScreen('lesson');
    renderExercise();
  }

  function buildExercises(lesson) {
    var types = shuffle(['choose', 'listen', 'order', 'fill', 'choose', 'listen', 'order', 'fill']);
    var exs = [];
    var last = -1;
    for (var i = 0; i < types.length; i++) {
      var pi;
      do { pi = rnd(lesson.phrases.length); } while (pi === last);
      last = pi;
      exs.push({ type: types[i], pi: pi });
    }
    return exs;
  }

  /* Frases de las demás lecciones como distractores */
  function otherPhrases() {
    var pool = [];
    for (var i = 0; i < LESSONS.length; i++) {
      if (LESSONS[i].id === S.lesson.id) continue;
      for (var j = 0; j < LESSONS[i].phrases.length; j++) pool.push(LESSONS[i].phrases[j]);
    }
    return shuffle(pool);
  }

  function renderExercise() {
    S.locked = false;
    progressFill.style.width = Math.round((S.idx / S.exs.length) * 100) + '%';
    var ex = S.exs[S.idx];
    if (ex.type === 'choose') renderChoose(ex);
    else if (ex.type === 'listen') renderListen(ex);
    else if (ex.type === 'order') renderOrder(ex);
    else renderFill(ex);
  }

  /* ---- Tipo 1: elige la traducción ---- */
  function renderChoose(ex) {
    var ph = S.lesson.phrases[ex.pi];
    var dir = Math.random() < 0.5 ? 'es2en' : 'en2es';
    var q, correctAns, getOpt;
    if (dir === 'es2en') { q = ph[0]; correctAns = ph[1]; getOpt = function (p) { return p[1]; }; }
    else { q = ph[1]; correctAns = ph[0]; getOpt = function (p) { return p[0]; }; }

    var pool = [];
    for (var i = 0; i < S.lesson.phrases.length; i++) {
      if (i !== ex.pi) pool.push(S.lesson.phrases[i]);
    }
    pool = pool.concat(otherPhrases());
    pool = shuffle(pool);

    var opts = [correctAns];
    for (var k = 0; k < pool.length && opts.length < 4; k++) {
      var cand = getOpt(pool[k]);
      if (opts.indexOf(cand) < 0) opts.push(cand);
    }
    opts = shuffle(opts);

    var html = '<div class="ex-label">Elige la traducción</div>' +
      '<div class="ex-prompt">' + esc(q) + '</div><div class="options">';
    for (var m = 0; m < opts.length; m++) {
      html += '<button class="option" data-val="' + esc(opts[m]) + '">' + esc(opts[m]) + '</button>';
    }
    exerciseBox.innerHTML = html + '</div>';

    var btns = exerciseBox.querySelectorAll('.option');
    for (var b = 0; b < btns.length; b++) {
      btns[b].addEventListener('click', function () {
        if (S.locked) return;
        var val = this.getAttribute('data-val');
        var ok = (val === correctAns);
        paintOptions(btns, correctAns);
        answer(ok, correctAns);
      });
    }
  }

  function paintOptions(btns, correctAns) {
    for (var i = 0; i < btns.length; i++) {
      btns[i].disabled = true;
      if (btns[i].getAttribute('data-val') === correctAns) btns[i].classList.add('correct');
    }
  }

  /* ---- Tipo 2: escucha y elige ---- */
  function renderListen(ex) {
    var ph = S.lesson.phrases[ex.pi];
    var pool = [];
    for (var i = 0; i < S.lesson.phrases.length; i++) {
      if (i !== ex.pi) pool.push(S.lesson.phrases[i]);
    }
    pool = shuffle(pool.concat(otherPhrases()));

    var opts = [ph[0]];
    for (var k = 0; k < pool.length && opts.length < 4; k++) {
      if (opts.indexOf(pool[k][0]) < 0) opts.push(pool[k][0]);
    }
    opts = shuffle(opts);

    var html = '<div class="ex-label">Escucha y elige</div>' +
      '<div class="listen-box"><button class="listen-play" id="replayBtn" aria-label="Escuchar de nuevo">🔊</button>' +
      '<p>Toca para escuchar la frase en inglés</p></div>' +
      '<div class="ex-hint">¿Qué significa?</div><div class="options">';
    for (var m = 0; m < opts.length; m++) {
      html += '<button class="option" data-val="' + esc(opts[m]) + '">' + esc(opts[m]) + '</button>';
    }
    exerciseBox.innerHTML = html + '</div>';

    var sayIt = function () { speak(ph[1], 'en'); };
    $('replayBtn').addEventListener('click', sayIt);
    setTimeout(sayIt, 350);

    var btns = exerciseBox.querySelectorAll('.option');
    for (var b = 0; b < btns.length; b++) {
      btns[b].addEventListener('click', function () {
        if (S.locked) return;
        var val = this.getAttribute('data-val');
        var ok = (val === ph[0]);
        paintOptions(btns, ph[0]);
        answer(ok, ph[0]);
      });
    }
  }

  /* ---- Tipo 3: ordena las palabras ---- */
  function renderOrder(ex) {
    var ph = S.lesson.phrases[ex.pi];
    var words = ph[1].split(' ');
    var bank = shuffle(words);
    var tries = 0;
    while (tries < 20 && bank.join(' ') === ph[1]) { bank = shuffle(words); tries++; }

    var html = '<div class="ex-label">Ordena las palabras</div>' +
      '<div class="ex-hint">' + esc(ph[0]) + '</div>' +
      '<div class="answer-line" id="answerLine"><span class="empty">Toca las palabras en orden…</span></div>' +
      '<div class="word-bank" id="wordBank"></div>' +
      '<button class="btn primary" id="checkBtn">Comprobar</button>';
    exerciseBox.innerHTML = html;

    var bankEl = $('wordBank'), lineEl = $('answerLine');
    var placed = [];

    for (var i = 0; i < bank.length; i++) {
      (function (w) {
        var b = document.createElement('button');
        b.className = 'word';
        b.textContent = w;
        b.addEventListener('click', function () {
          if (S.locked || b.classList.contains('in-answer')) return;
          b.classList.add('in-answer');
          placed.push({ w: w, btn: b });
          drawLine();
        });
        bankEl.appendChild(b);
      })(bank[i]);
    }

    function drawLine() {
      lineEl.innerHTML = '';
      if (placed.length === 0) {
        lineEl.innerHTML = '<span class="empty">Toca las palabras en orden…</span>';
        return;
      }
      for (var i = 0; i < placed.length; i++) {
        (function (item) {
          var c = document.createElement('button');
          c.className = 'word in-answer';
          c.textContent = item.w;
          c.addEventListener('click', function () {
            if (S.locked) return;
            item.btn.classList.remove('in-answer');
            placed.splice(placed.indexOf(item), 1);
            drawLine();
          });
          lineEl.appendChild(c);
        })(placed[i]);
      }
    }

    $('checkBtn').addEventListener('click', function () {
      if (S.locked || placed.length !== words.length) return;
      var built = placed.map(function (p) { return p.w; }).join(' ');
      answer(built === ph[1], ph[1]);
    });
  }

  /* ---- Tipo 4: completa la frase ---- */
  function renderFill(ex) {
    var ph = S.lesson.phrases[ex.pi];
    var words = ph[1].split(' ');
    var candIdx = [];
    for (var i = 0; i < words.length; i++) {
      if (words[i].length >= 3) candIdx.push(i);
    }
    if (candIdx.length === 0) candIdx.push(0);
    var blankAt = choice(candIdx);
    var correctWord = words[blankAt];

    var shown = words.slice();
    shown[blankAt] = '_____';

    var poolWords = [];
    var seen = {};
    function addWords(list) {
      for (var i = 0; i < list.length; i++) {
        var ws = list[i][1].split(' ');
        for (var j = 0; j < ws.length; j++) {
          var w = ws[j];
          if (w.length >= 2 && w !== correctWord && !seen[w]) { seen[w] = 1; poolWords.push(w); }
        }
      }
    }
    addWords(S.lesson.phrases);
    for (var li = 0; li < LESSONS.length && poolWords.length < 12; li++) {
      if (LESSONS[li].id !== S.lesson.id) addWords(LESSONS[li].phrases);
    }
    poolWords = shuffle(poolWords);

    var opts = [correctWord];
    for (var k = 0; k < poolWords.length && opts.length < 4; k++) {
      if (opts.indexOf(poolWords[k]) < 0) opts.push(poolWords[k]);
    }
    opts = shuffle(opts);

    var html = '<div class="ex-label">Completa la frase</div>' +
      '<div class="ex-hint">' + esc(ph[0]) + '</div>' +
      '<div class="ex-prompt">' + esc(shown.join(' ')) + '</div><div class="options">';
    for (var m = 0; m < opts.length; m++) {
      html += '<button class="option" data-val="' + esc(opts[m]) + '">' + esc(opts[m]) + '</button>';
    }
    exerciseBox.innerHTML = html + '</div>';

    var btns = exerciseBox.querySelectorAll('.option');
    for (var b = 0; b < btns.length; b++) {
      btns[b].addEventListener('click', function () {
        if (S.locked) return;
        var val = this.getAttribute('data-val');
        var ok = (val === correctWord);
        paintOptions(btns, correctWord);
        answer(ok, correctWord);
      });
    }
  }

  /* ==================== Respuesta y feedback ==================== */
  function answer(ok, correctText) {
    if (S.locked) return;
    S.locked = true;
    if (ok) {
      S.xpGain += 10;
      xp += 10;
      store.set('sollingo_xp', xp);
      refreshHeader();
      sfxCorrect();
      speak(choice(PRAISE), 'es');
      feedbackCard.className = 'feedback-card good';
      feedbackTitle.textContent = '¡Muy bien! 🎉';
      feedbackSub.textContent = '';
    } else {
      sfxWrong();
      speak(choice(COMFORT), 'es');
      feedbackCard.className = 'feedback-card bad';
      feedbackTitle.textContent = 'Casi, casi…';
      feedbackSub.innerHTML = 'La respuesta correcta era: <strong>' + esc(correctText) + '</strong>';
    }
    feedback.classList.remove('hidden');
  }

  $('continueBtn').addEventListener('click', function () {
    feedback.classList.add('hidden');
    stopSpeak();
    S.idx++;
    if (S.idx >= S.exs.length) finishLesson();
    else renderExercise();
  });

  /* ==================== Fin de lección ==================== */
  function finishLesson() {
    if (doneIds.indexOf(S.lesson.id) < 0) {
      doneIds.push(S.lesson.id);
      store.set('sollingo_done', doneIds);
    }
    refreshHeader();
    $('winText').textContent = '¡Completaste la lección "' + S.lesson.title + '"!';
    $('winXp').textContent = '+' + S.xpGain + ' XP';
    showScreen('win');
    sfxFanfare();
    setTimeout(function () { speak(WIN_PHRASE, 'es'); }, 900);
  }

  $('againBtn').addEventListener('click', function () { startLesson(S.lesson.id); });
  $('homeBtn').addEventListener('click', function () {
    stopSpeak();
    renderHome();
    refreshHeader();
    showScreen('home');
  });
  $('quitBtn').addEventListener('click', function () {
    stopSpeak();
    feedback.classList.add('hidden');
    renderHome();
    showScreen('home');
  });

  /* ==================== Silenciar ==================== */
  muteBtn.addEventListener('click', function () {
    muted = !muted;
    store.set('sollingo_muted', muted);
    if (muted) stopSpeak();
    refreshHeader();
  });

  /* ==================== Arranque ==================== */
  renderHome();
  refreshHeader();
  showScreen('home');
})();
