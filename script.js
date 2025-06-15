/* ---- Data definitions ----------------------- */
const MOODS = [
  { id: "grounded", label: "Grounded", icon: "🌿", genres: ["Vedic & Ayurveda", "Somatic", "Fem Wisdom"] },
  { id: "quick", label: "Quick Mode", icon: "⚡", genres: ["Breathwork", "Fem Fitness"] },
  { id: "dreamy", label: "Dreamy", icon: "🌙", genres: ["Rituals", "Fem Wisdom", "Esoteric", "Occult"] },
  { id: "shadow", label: "Shadow", icon: "🖤", genres: ["Somatic", "Esoteric", "Occult"] },
  { id: "fiery", label: "Fiery", icon: "🔥", genres: ["Fem Fitness", "Rituals"] },
  { id: "intense", label: "Intense", icon: "💫", genres: ["Breathwork", "Somatic", "Esoteric", "Occult"] }
];

const APPS = [
  // Feminine Wisdom
  { name: "Living Embodiment", genres: ["Fem Wisdom"], description: "Body-soul connection" },
  { name: "Feminine Codes", genres: ["Fem Wisdom"], description: "Sacred feminine teachings" },
  { name: "The Vessel", genres: ["Fem Wisdom"], description: "Inner wisdom container" },
  { name: "WMW", genres: ["Fem Wisdom"], description: "Wild mystical woman" },
  { name: "Mana Mei", genres: ["Fem Wisdom"], description: "Life force cultivation" },
  { name: "Moonly", genres: ["Fem Wisdom", "Vedic & Ayurveda"], description: "Lunar wisdom cycles" },
  { name: "Radiant Rituals", genres: ["Fem Wisdom"], description: "Radiant ceremony" },

  // Feminine Fitness
  { name: "Goddess", genres: ["Fem Fitness"], description: "Divine feminine movement" },
  { name: "Deliciously Ella", genres: ["Fem Fitness"], description: "Nourishing wellness" },
  { name: "Core Tara", genres: ["Fem Fitness"], description: "Sacred core strength" },
  { name: "Shakti Shala", genres: ["Fem Fitness"], description: "Divine energy practice" },
  { name: "28", genres: ["Fem Fitness"], description: "Cycle-synced fitness" },
  { name: "Vedic Lab", genres: ["Fem Fitness", "Vedic & Ayurveda"], description: "Ancient fitness wisdom" },
  { name: "Skin Within", genres: ["Fem Fitness", "Somatic"], description: "Inner body awareness" },
  { name: "GOT", genres: ["Fem Fitness", "Breathwork"], description: "Transformational fitness" },
  { name: "Daily OM", genres: ["Fem Fitness"], description: "Mindful movement" },

  // Somatic Wellness
  { name: "Soma Well", genres: ["Somatic"], description: "Body wisdom healing" },
  { name: "Rituals app", genres: ["Somatic"], description: "Embodied rituals" },
  { name: "She Blooms", genres: ["Somatic"], description: "Feminine flowering" },
  { name: "Forest Therapy", genres: ["Somatic"], description: "Nature healing" },

  // Breathwork
  { name: "Somawell", genres: ["Breathwork"], description: "Breathwork healing" },
  { name: "SomaBreath", genres: ["Breathwork"], description: "Body-centered breathing" },
  { name: "Insight Timer", genres: ["Breathwork"], description: "Guided breath meditation" },
  { name: "Everything Spiritual", genres: ["Breathwork"], description: "Spiritual breathing" },

  // Rituals
  { name: "Magick", genres: ["Rituals"], description: "Sacred ritual magic" },
  { name: "Moon Calendar Rituals", genres: ["Rituals"], description: "Lunar ceremonies" },
  { name: "Be Ceremonial", genres: ["Rituals"], description: "Daily ceremony practice" },

  // Occult
  { name: "Witchy Coven", genres: ["Occult"], description: "Mystical community" },
  { name: "Runic Form", genres: ["Occult"], description: "Ancient symbols" },
  { name: "Celtic Wicca", genres: ["Occult"], description: "Celtic spiritual practice" },
  { name: "The Moon School", genres: ["Occult"], description: "Lunar wisdom education" },
  { name: "Meaningful Moon", genres: ["Occult"], description: "Moon cycle meanings" },
  { name: "Shamanic Courses", genres: ["Occult"], description: "Divine shamanic work" },

  // Esoteric
  { name: "ICTZI", genres: ["Esoteric"], description: "Ancient wisdom" },
  { name: "Mind", genres: ["Esoteric"], description: "Consciousness exploration" },
  { name: "Spiritual You", genres: ["Esoteric"], description: "Inner spiritual journey" },
  { name: "Guide to Light", genres: ["Esoteric"], description: "Spiritual guidance" },
  { name: "Mystics App", genres: ["Esoteric"], description: "Mystical practices" },
  { name: "Kemetic app", genres: ["Esoteric"], description: "Ancient Egyptian wisdom" },
  { name: "Metaphysical Girl", genres: ["Esoteric"], description: "Metaphysical exploration" },

  // Vedic & Ayurveda
  { name: "Divine Whisper", genres: ["Vedic & Ayurveda"], description: "Sacred guidance" },
  { name: "Mokx", genres: ["Vedic & Ayurveda"], description: "Liberation practices" },
  { name: "Youniverse", genres: ["Vedic & Ayurveda"], description: "Personal cosmic connection" },
  { name: "Sol", genres: ["Vedic & Ayurveda"], description: "Solar energy alignment" },
  { name: "Home – Hinduism", genres: ["Vedic & Ayurveda"], description: "Traditional practices" },
  { name: "A & A", genres: ["Vedic & Ayurveda"], description: "Ayurvedic wisdom" },
  { name: "Plum Village", genres: ["Vedic & Ayurveda"], description: "Mindful practice" }
];

const FITNESS_APPS = [
  { name: "Goddess", genres: ["Fem Fitness"], description: "Divine feminine movement" },
  { name: "Deliciously Ella", genres: ["Fem Fitness"], description: "Nourishing wellness" },
  { name: "Core Tara", genres: ["Fem Fitness"], description: "Sacred core strength" },
  { name: "Shakti Shala", genres: ["Fem Fitness"], description: "Divine energy practice" },
  { name: "28", genres: ["Fem Fitness"], description: "Cycle-synced fitness" },
  { name: "Vedic Lab", genres: ["Fem Fitness", "Vedic & Ayurveda"], description: "Ancient fitness wisdom" },
  { name: "Skin Within", genres: ["Fem Fitness", "Somatic"], description: "Inner body awareness" },
  { name: "GOT", genres: ["Fem Fitness", "Breathwork"], description: "Transformational fitness" },
  { name: "Daily OM", genres: ["Fem Fitness"], description: "Mindful movement" }
];

const BREATHWORK_APPS = [
  { name: "Somawell", genres: ["Breathwork"], description: "Breathwork healing" },
  { name: "SomaBreath", genres: ["Breathwork"], description: "Body-centered breathing" },
  { name: "Insight Timer", genres: ["Breathwork"], description: "Guided breath meditation" },
  { name: "Everything Spiritual", genres: ["Breathwork"], description: "Spiritual breathing" }
];

const RITUAL_APPS = [
  { name: "Magick", genres: ["Rituals"], description: "Sacred ritual magic" },
  { name: "Moon Calendar Rituals", genres: ["Rituals"], description: "Lunar ceremonies" },
  { name: "Be Ceremonial", genres: ["Rituals"], description: "Daily ceremony practice" }
];

const MOON_RELATED_APPS = [
  { name: "Moonly", genres: ["Fem Wisdom", "Vedic & Ayurveda"], description: "Lunar wisdom cycles" },
  { name: "Moon Calendar Rituals", genres: ["Rituals"], description: "Lunar ceremonies" },
  { name: "The Moon School", genres: ["Occult"], description: "Lunar wisdom education" },
  { name: "Meaningful Moon", genres: ["Occult"], description: "Moon cycle meanings" }
];

/* ---- State management ----------------------- */
let currentSection = 'planner';
let userHistory = JSON.parse(localStorage.getItem('mysticMoodHistory') || '[]');
let userStats = JSON.parse(localStorage.getItem('mysticMoodStats') || '{}');
let userNotes = JSON.parse(localStorage.getItem('mysticMoodNotes') || '[]');
let userGoals = JSON.parse(localStorage.getItem('mysticMoodGoals') || '[]');
let userFavorites = JSON.parse(localStorage.getItem('mysticMoodFavorites') || '[]');
let currentSpecialtyType = null;
let currentNormalApps = []; // Store current normal mood apps
let selectedMoods = []; // For mood blending
let currentApps = []; // Store current app selection for favorites

/* ---- Utility Functions ---------------------- */
function saveToStorage() {
  localStorage.setItem('mysticMoodHistory', JSON.stringify(userHistory));
  localStorage.setItem('mysticMoodStats', JSON.stringify(userStats));
  localStorage.setItem('mysticMoodNotes', JSON.stringify(userNotes));
  localStorage.setItem('mysticMoodGoals', JSON.stringify(userGoals));
  localStorage.setItem('mysticMoodFavorites', JSON.stringify(userFavorites));
}

function addToHistory(mood, apps, specialtyType = null) {
  const entry = {
    date: new Date().toISOString(),
    mood: mood,
    apps: apps,
    specialtyType: specialtyType
  };

  userHistory.unshift(entry);
  if (userHistory.length > 50) userHistory.pop(); // Keep last 50 entries

  // Update stats
  userStats.totalSessions = (userStats.totalSessions || 0) + 1;
  userStats.moodCounts = userStats.moodCounts || {};
  userStats.moodCounts[mood.id] = (userStats.moodCounts[mood.id] || 0) + 1;
  userStats.appsExplored = new Set([...(userStats.appsExplored || []), ...apps.map(app => app.name)]);
  userStats.appsExplored = Array.from(userStats.appsExplored);

  saveToStorage();
  updateProgressStats();
}

function getMostFrequentMood() {
  if (!userStats.moodCounts) return "—";

  const moodEntries = Object.entries(userStats.moodCounts);
  if (moodEntries.length === 0) return "—";

  const mostFrequent = moodEntries.reduce((a, b) => a[1] > b[1] ? a : b);
  const mood = MOODS.find(m => m.id === mostFrequent[0]);
  return mood ? `${mood.icon} ${mood.label}` : "—";
}

function updateProgressStats() {
  const totalSessions = document.getElementById('total-sessions');
  const favoriteMood = document.getElementById('favorite-mood');
  const appsExplored = document.getElementById('apps-explored');

  if (totalSessions) totalSessions.textContent = userStats.totalSessions || 0;
  if (favoriteMood) favoriteMood.textContent = getMostFrequentMood();
  if (appsExplored) appsExplored.textContent = (userStats.appsExplored || []).length;
}

/* ---- Notes Functions ------------------------ */
function parseMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    .replace(/\n/g, '<br>');
}

function addNote() {
  const noteInput = document.getElementById('note-input');
  const noteText = noteInput.value.trim();

  if (!noteText) return;

  const newNote = {
    id: Date.now(),
    content: noteText,
    date: new Date().toISOString(),
    parsedContent: parseMarkdown(noteText)
  };

  userNotes.unshift(newNote);
  if (userNotes.length > 100) userNotes.pop(); // Keep last 100 notes

  saveToStorage();
  renderNotes();
  noteInput.value = '';

  showNotification('✨ Mystical note captured!');
}

function deleteNote(noteId) {
  userNotes = userNotes.filter(note => note.id !== noteId);
  saveToStorage();
  renderNotes();
  showNotification('🗑️ Note released to the cosmos');
}

function renderNotes() {
  const container = document.getElementById('notes-list');
  if (!container) return;

  if (userNotes.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📝</div>
        <h3>No mystical notes yet</h3>
        <p>Start capturing your spiritual journey</p>
      </div>
    `;
    return;
  }

  const html = userNotes.map(note => {
    const date = new Date(note.date);

    return `
      <div class="note-item">
        <div class="note-header">
          <div class="note-date">${date.toLocaleDateString()} at ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
          <button class="note-delete" onclick="deleteNote(${note.id})">🗑️</button>
        </div>
        <div class="note-content">${note.parsedContent}</div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

/* ---- App Selection Logic -------------------- */
function selectMoodApps(moodId) {
  const mood = MOODS.find(m => m.id === moodId);
  if (!mood) return [];

  const matchingApps = APPS.filter(app => 
    app.genres.some(genre => mood.genres.includes(genre))
  );

  const shuffled = [...matchingApps].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 2);
}

function selectSpecialtyApp(moodId, specialtyGenre, appsList) {
  const mood = MOODS.find(m => m.id === moodId);
  if (!mood) return null;

  let matchingApps = appsList.filter(app => 
    app.genres.includes(specialtyGenre) &&
    app.genres.some(genre => mood.genres.includes(genre))
  );

  if (matchingApps.length === 0) {
    matchingApps = appsList.filter(app => app.genres.includes(specialtyGenre));
  }

  return matchingApps.length > 0 
    ? matchingApps[Math.floor(Math.random() * matchingApps.length)] 
    : null;
}

/* ---- UI Rendering Functions ----------------- */
function renderApps(apps, title = "Today's Recommendations") {
  const container = document.getElementById('app-results');
  if (!container) return;

  const html = `
    <h3>${title}</h3>
    <div class="apps-grid">
      ${apps.map(app => `
        <div class="app-card ${app.specialty ? 'mandatory' : ''}" style="animation-delay: ${Math.random() * 0.3}s">
          <h4>${app.name} ${app.specialty ? '⭐' : ''}</h4>
          <p class="app-genres">${app.description || app.genres.join(' • ')}</p>
        </div>
      `).join('')}
    </div>
  `;

  container.innerHTML = html;
  container.style.animation = 'fadeInUp 0.6s ease-out';
}

function renderHistory() {
  const container = document.getElementById('history-content');
  if (!container) return;

  if (userHistory.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📖</div>
        <h3>No history yet</h3>
        <p>Start exploring moods to build your journey</p>
      </div>
    `;
    return;
  }

  const html = userHistory.map(entry => {
    const date = new Date(entry.date);
    const mood = MOODS.find(m => m.id === entry.mood.id) || entry.mood;

    return `
      <div class="history-item">
        <div class="history-date">${date.toLocaleDateString()} at ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
        <div class="history-mood">${mood.icon} ${mood.label} ${entry.specialtyType ? `(${entry.specialtyType})` : ''}</div>
        <div class="history-apps">${entry.apps.map(app => app.name).join(' • ')}</div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

/* ---- Goals Functions ------------------------ */
function addGoal() {
  const goalInput = document.getElementById('goal-input');
  const goalText = goalInput.value.trim();

  if (!goalText) return;

  const newGoal = {
    id: Date.now(),
    text: goalText,
    completed: false,
    date: new Date().toISOString()
  };

  userGoals.unshift(newGoal);
  if (userGoals.length > 50) userGoals.pop(); // Keep last 50 goals

  saveToStorage();
  renderGoals();
  goalInput.value = '';

  showNotification('🎯 Goal set with intention!');
}

function toggleGoal(goalId) {
  const goal = userGoals.find(g => g.id === goalId);
  if (goal) {
    goal.completed = !goal.completed;
    saveToStorage();
    renderGoals();
    showNotification(goal.completed ? '✨ Goal completed!' : '🔄 Goal reactivated');
  }
}

function deleteGoal(goalId) {
  userGoals = userGoals.filter(goal => goal.id !== goalId);
  saveToStorage();
  renderGoals();
  showNotification('🗑️ Goal released to the universe');
}

function renderGoals() {
  const container = document.getElementById('goals-list');
  if (!container) return;

  if (userGoals.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🎯</div>
        <h3>No goals yet</h3>
        <p>Set your spiritual intentions</p>
      </div>
    `;
    return;
  }

  const html = userGoals.map(goal => `
    <div class="goal-item ${goal.completed ? 'completed' : ''}">
      <div class="goal-content">
        <input 
          type="checkbox" 
          class="goal-checkbox" 
          ${goal.completed ? 'checked' : ''} 
          onchange="toggleGoal(${goal.id})"
        >
        <div class="goal-text">${goal.text}</div>
      </div>
      <button class="goal-delete" onclick="deleteGoal(${goal.id})">🗑️</button>
    </div>
  `).join('');

  container.innerHTML = html;
}

/* ---- Favorites Functions -------------------- */
function addCurrentToFavorites() {
  if (currentApps.length === 0) {
    showNotification('⚡ Select a mood first!');
    return;
  }

  const favorite = {
    id: Date.now(),
    apps: [...currentApps],
    date: new Date().toISOString(),
    name: `${currentApps.length} App Selection`
  };

  userFavorites.unshift(favorite);
  if (userFavorites.length > 20) userFavorites.pop(); // Keep last 20 favorites

  saveToStorage();
  showNotification('⭐ Added to favorites!');
}

function useFavorite(favoriteId) {
  const favorite = userFavorites.find(f => f.id === favoriteId);
  if (favorite) {
    currentApps = [...favorite.apps];
    renderApps(favorite.apps, "Your Favorite Selection");
    showNotification('✨ Favorite loaded!');
  }
}

function deleteFavorite(favoriteId) {
  userFavorites = userFavorites.filter(fav => fav.id !== favoriteId);
  saveToStorage();
  renderFavorites();
  showNotification('🗑️ Favorite removed');
}

function renderFavorites() {
  const container = document.getElementById('favorites-list');
  if (!container) return;

  if (userFavorites.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">⭐</div>
        <h3>No favorites yet</h3>
        <p>Save your perfect combinations</p>
      </div>
    `;
    return;
  }

  const html = userFavorites.map(favorite => {
    const date = new Date(favorite.date);
    return `
      <div class="favorite-item">
        <div class="favorite-header">
          <span>${favorite.name}</span>
          <button class="favorite-delete" onclick="deleteFavorite(${favorite.id})">🗑️</button>
        </div>
        <div class="favorite-apps">${favorite.apps.map(app => app.name).join(' • ')}</div>
        <div class="favorite-date">${date.toLocaleDateString()}</div>
        <button class="favorite-use" onclick="useFavorite(${favorite.id})">✨ Use This</button>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

/* ---- Moon Phase Functions ------------------- */
function getCurrentMoonPhase() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  // Simplified moon phase calculation
  const c = Math.floor((year - 1900) / 100);
  const e = 2 * (year - 1900 - 100 * c);
  const f = Math.floor((146097 * c) / 4) + Math.floor((1461 * e) / 4) + Math.floor((153 * (month + 1) + 2) / 5) + day + 1721119;
  const phase = ((f - 2451550.1) / 29.530588853) % 1;

  if (phase < 0.125) return { name: "New Moon", icon: "🌑", energy: "New beginnings, manifestation" };
  if (phase < 0.25) return { name: "Waxing Crescent", icon: "🌒", energy: "Growth, intention setting" };
  if (phase < 0.375) return { name: "First Quarter", icon: "🌓", energy: "Action, decision making" };
  if (phase < 0.5) return { name: "Waxing Gibbous", icon: "🌔", energy: "Refinement, persistence" };
  if (phase < 0.625) return { name: "Full Moon", icon: "🌕", energy: "Peak power, release" };
  if (phase < 0.75) return { name: "Waning Gibbous", icon: "🌖", energy: "Gratitude, sharing wisdom" };
  if (phase < 0.875) return { name: "Last Quarter", icon: "🌗", energy: "Forgiveness, letting go" };
  return { name: "Waning Crescent", icon: "🌘", energy: "Rest, reflection" };
}

/* ---- Random Mood Function ------------------- */
function handleRandomMood() {
  const randomMood = MOODS[Math.floor(Math.random() * MOODS.length)];
  handleMoodSelection(randomMood.id);
  showNotification(`🎲 Random mood: ${randomMood.icon} ${randomMood.label}!`);
}

/* ---- Moon Phase Click Handler --------------- */
function handleMoonPhaseClick() {
  const moonPhase = getCurrentMoonPhase();
  if (moonPhase.name === "New Moon") {
    showNotification('🌑 New Moon: Perfect time for new beginnings!');
    
    // Select one random moon-related app
    const randomMoonApp = MOON_RELATED_APPS[Math.floor(Math.random() * MOON_RELATED_APPS.length)];
    currentApps = [randomMoonApp];
    
    renderApps([randomMoonApp], "🌑 New Moon Guidance");
    
    // Add to history with New Moon as the mood
    const newMoonMood = {
      id: 'new-moon',
      label: 'New Moon',
      icon: '🌑'
    };
    
    addToHistory(newMoonMood, [randomMoonApp]);
  } else {
    showNotification(`${moonPhase.icon} ${moonPhase.name}: ${moonPhase.energy}`);
  }
}

/* ---- Theme Functions ------------------------ */
function applyTheme(themeName) {
  const root = document.documentElement;

  switch(themeName) {
    case 'cosmic':
      root.style.setProperty('--primary-gradient', 'linear-gradient(135deg, #b83d89 0%, #a33677 50%, #8e2b65 100%)');
      root.style.setProperty('--secondary-gradient', 'linear-gradient(135deg, #c9449a 0%, #b83d89 100%)');
      root.style.setProperty('--bg-primary', '#240d1f');
      root.style.setProperty('--bg-secondary', '#331426');
      break;
    case 'forest':
      root.style.setProperty('--primary-gradient', 'linear-gradient(135deg, #1e3a2e 0%, #2d5a3d 50%, #4a7c59 100%)');
      root.style.setProperty('--secondary-gradient', 'linear-gradient(135deg, #2d5a3d 0%, #4a7c59 50%, #6b8e5a 100%)');
      root.style.setProperty('--bg-primary', '#0f1f14');
      root.style.setProperty('--bg-secondary', '#1a2f20');
      break;
    case 'ocean':
      root.style.setProperty('--primary-gradient', 'linear-gradient(135deg, #0077be 0%, #4fc3f7 100%)');
      root.style.setProperty('--secondary-gradient', 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)');
      root.style.setProperty('--bg-primary', '#0a1929');
      root.style.setProperty('--bg-secondary', '#1e2a3a');
      break;
    case 'sunset':
      root.style.setProperty('--primary-gradient', 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)');
      root.style.setProperty('--secondary-gradient', 'linear-gradient(135deg, #ff9a56 0%, #ffad56 100%)');
      root.style.setProperty('--bg-primary', '#2a1810');
      root.style.setProperty('--bg-secondary', '#3d2418');
      break;
    default: // Default mystical theme
      root.style.setProperty('--primary-gradient', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
      root.style.setProperty('--secondary-gradient', 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)');
      root.style.setProperty('--bg-primary', '#0f0715');
      root.style.setProperty('--bg-secondary', '#1a0f2e');
  }

  localStorage.setItem('selectedTheme', themeName);
  showNotification(`🎨 Theme changed to ${themeName}!`);
}

/* ---- Mood Blending Functions ---------------- */
function updateMoodBlendDisplay() {
  const container = document.getElementById('mood-blend-display');
  if (!container) return;

  if (selectedMoods.length === 0) {
    container.style.display = 'none';
    return;
  }

  container.style.display = 'block';
  const moodsHtml = selectedMoods.map(mood => 
    `<span class="blend-mood">${mood.icon} ${mood.label}</span>`
  ).join('');

  container.innerHTML = `
    <h4>🌈 Blended Moods:</h4>
    <div class="blend-moods">${moodsHtml}</div>
    <button class="blend-create-btn" onclick="createBlendedSelection()">✨ Create Blend</button>
    <button class="blend-clear-btn" onclick="clearMoodBlend()">🗑️ Clear</button>
  `;
}

function handleMoodBlend(moodId) {
  const mood = MOODS.find(m => m.id === moodId);
  if (!mood) return;

  const existingIndex = selectedMoods.findIndex(m => m.id === moodId);
  if (existingIndex >= 0) {
    selectedMoods.splice(existingIndex, 1);
  } else if (selectedMoods.length < 3) {
    selectedMoods.push(mood);
  } else {
    showNotification('⚡ Maximum 3 moods for blending!');
    return;
  }

  updateMoodBlendDisplay();
}

function createBlendedSelection() {
  if (selectedMoods.length < 2) {
    showNotification('⚡ Select at least 2 moods to blend!');
    return;
  }

  const allGenres = [...new Set(selectedMoods.flatMap(mood => mood.genres))];
  const matchingApps = APPS.filter(app => 
    app.genres.some(genre => allGenres.includes(genre))
  );

  const shuffled = [...matchingApps].sort(() => 0.5 - Math.random());
  const blendedApps = shuffled.slice(0, 3);

  currentApps = blendedApps;
  renderApps(blendedApps, `🌈 Blended Selection (${selectedMoods.map(m => m.icon).join('')})`);

  const blendedMood = {
    id: 'blended',
    label: selectedMoods.map(m => m.label).join(' + '),
    icon: selectedMoods.map(m => m.icon).join('')
  };

  addToHistory(blendedMood, blendedApps);
  showNotification('🌈 Blended selection created!');
}

function clearMoodBlend() {
  selectedMoods = [];
  updateMoodBlendDisplay();
  document.querySelectorAll('.mood-card').forEach(card => {
    card.classList.remove('blend-mode');
  });
  showNotification('🧹 Mood blend cleared');
}

/* ---- Event Handlers ------------------------- */
function handleMoodSelection(moodId) {
  const mood = MOODS.find(m => m.id === moodId);
  if (!mood) return;

  // Check if we're in blend mode
  const isBlendMode = document.getElementById('blend-mode')?.checked;
  if (isBlendMode) {
    handleMoodBlend(moodId);
    return;
  }

  const regularApps = selectMoodApps(moodId);
  currentNormalApps = regularApps; // Store the normal apps
  currentApps = regularApps; // Store for favorites

  renderApps(regularApps, `Perfect for your ${mood.label} mood`);
  addToHistory(mood, regularApps);

  // Add visual feedback
  showNotification(`✨ Found ${regularApps.length} apps for your ${mood.label} mood!`);
}

function handleSpecialtySelection(specialtyType, moodId) {
  const mood = MOODS.find(m => m.id === moodId);
  if (!mood) return;

  // Use existing normal apps if available, otherwise generate new ones
  const regularApps = currentNormalApps.length > 0 ? currentNormalApps : selectMoodApps(moodId);
  let specialtyApp = null;
  let appsList = [];

  switch(specialtyType) {
    case 'fitness':
      appsList = FITNESS_APPS;
      break;
    case 'breathwork':
      appsList = BREATHWORK_APPS;
      break;
    case 'rituals':
      appsList = RITUAL_APPS;
      break;
  }

  specialtyApp = selectSpecialtyApp(moodId, specialtyType === 'fitness' ? 'Fem Fitness' : specialtyType.charAt(0).toUpperCase() + specialtyType.slice(1), appsList);

  const allApps = [...regularApps];
  if (specialtyApp) {
    allApps.push({ ...specialtyApp, specialty: true });
  }

  currentApps = allApps; // Store for favorites
  renderApps(allApps, `${mood.label} ${specialtyType.charAt(0).toUpperCase() + specialtyType.slice(1)} Plan`);
  addToHistory(mood, allApps, specialtyType);

  showNotification(`🎯 Added ${specialtyType} app to your current selection!`);
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 24px;
    border-radius: 25px;
    font-weight: 500;
    z-index: 2000;
    animation: slideInDown 0.3s ease-out;
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOutUp 0.3s ease-out forwards';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function showMoodModal(specialtyType) {
  currentSpecialtyType = specialtyType;
  const modal = document.getElementById('mood-modal');
  const title = document.getElementById('modal-title');

  if (title) {
    title.textContent = `Select your mood for ${specialtyType}`;
  }

  if (modal) {
    modal.classList.add('active');
  }
}

function hideModal() {
  const modal = document.getElementById('mood-modal');
  if (modal) {
    modal.classList.remove('active');
  }
  currentSpecialtyType = null;
}

function switchSection(sectionName) {
  // Update navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === sectionName);
  });

  // Update content sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.toggle('active', section.id === sectionName);
  });

  currentSection = sectionName;

  // Load section-specific content
  if (sectionName === 'history') {
    renderHistory();
  } else if (sectionName === 'notes') {
    renderNotes();
  } else if (sectionName === 'goals') {
    renderGoals();
  } else if (sectionName === 'favorites') {
    renderFavorites();
  }
}

/* ---- Event Listeners ------------------------ */
function initializeEventListeners() {
  // Navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;
      if (section) {
        switchSection(section);
      }
    });
  });

  // Mood cards
  document.querySelectorAll('.mood-card').forEach(card => {
    card.addEventListener('click', () => {
      const moodId = card.dataset.mood;
      handleMoodSelection(moodId);
    });
  });

  // Specialty buttons
  document.querySelectorAll('.specialty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const specialtyType = btn.dataset.specialty;
      showMoodModal(specialtyType);
    });
  });

  // Modal events
  const modal = document.getElementById('mood-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal || e.target.classList.contains('modal-close')) {
        hideModal();
      }
    });
  }

  // Separate event listeners for modal mood buttons to prevent double-tap
  document.querySelectorAll('.modal-mood-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const moodId = btn.dataset.modalMood;
      if (currentSpecialtyType) {
        handleSpecialtySelection(currentSpecialtyType, moodId);
      }
      hideModal();
    });
  });

  // Notes functionality
  const addNoteBtn = document.getElementById('add-note-btn');
  const noteInput = document.getElementById('note-input');

  if (addNoteBtn) {
    addNoteBtn.addEventListener('click', addNote);
  }

  if (noteInput) {
    noteInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        addNote();
      } else if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const start = noteInput.selectionStart;
        const value = noteInput.value;
        const beforeCursor = value.substring(0, start);
        const afterCursor = value.substring(start);

        // Add new line with star bullet
        const newValue = beforeCursor + '\n✨ ' + afterCursor;
        noteInput.value = newValue;

        // Position cursor after the star and space
        noteInput.selectionStart = noteInput.selectionEnd = start + 3;
      }
    });
  }

  // Goals functionality
  const addGoalBtn = document.getElementById('add-goal-btn');
  const goalInput = document.getElementById('goal-input');

  if (addGoalBtn) {
    addGoalBtn.addEventListener('click', addGoal);
  }

  if (goalInput) {
    goalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        addGoal();
      }
    });
  }

  // Random mood button
  const randomMoodBtn = document.getElementById('random-mood-btn');
  if (randomMoodBtn) {
    randomMoodBtn.addEventListener('click', handleRandomMood);
  }

  // Add to favorites button
  const addFavoriteBtn = document.getElementById('add-favorite-btn');
  if (addFavoriteBtn) {
    addFavoriteBtn.addEventListener('click', addCurrentToFavorites);
  }

  // Theme selector
  const themeSelector = document.getElementById('theme-selector');
  if (themeSelector) {
    themeSelector.addEventListener('change', (e) => {
      applyTheme(e.target.value);
    });
  }

  // Mood blending checkbox
  const blendModeCheckbox = document.getElementById('blend-mode');
  if (blendModeCheckbox) {
    blendModeCheckbox.addEventListener('change', (e) => {
      const isBlending = e.target.checked;
      document.querySelectorAll('.mood-card').forEach(card => {
        if (isBlending) {
          card.classList.add('blend-mode');
        } else {
          card.classList.remove('blend-mode');
          selectedMoods = [];
          updateMoodBlendDisplay();
        }
      });
    });
  }
}

/* ---- Animation styles ----------------------- */
function addAnimationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideInDown {
      from { 
        opacity: 0; 
        transform: translateX(-50%) translateY(-20px); 
      }
      to { 
        opacity: 1; 
        transform: translateX(-50%) translateY(0); 
      }
    }

    @keyframes slideOutUp {
      from { 
        opacity: 1; 
        transform: translateX(-50%) translateY(0); 
      }
      to { 
        opacity: 0; 
        transform: translateX(-50%) translateY(-20px); 
      }
    }

    .clickable-moon {
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    .clickable-moon:hover {
      transform: scale(1.05);
    }
  `;
  document.head.appendChild(style);
}

/* ---- Initialize App ------------------------- */
function initializeApp() {
  addAnimationStyles();
  initializeEventListeners();
  updateProgressStats();

  // Load saved theme
  const savedTheme = localStorage.getItem('selectedTheme') || 'mystical';
  const themeSelector = document.getElementById('theme-selector');
  if (themeSelector) {
    themeSelector.value = savedTheme;
    applyTheme(savedTheme);
  }

  // Render moon phase
  const moonPhase = getCurrentMoonPhase();
  const moonContainer = document.getElementById('moon-phase-display');
  if (moonContainer) {
    moonContainer.innerHTML = `
      <div class="moon-phase clickable-moon" onclick="handleMoonPhaseClick()">
        <div class="moon-icon">${moonPhase.icon}</div>
        <div class="moon-info">
          <div class="moon-name">${moonPhase.name}</div>
          <div class="moon-energy">${moonPhase.energy}</div>
        </div>
      </div>
    `;
  }

  // Show welcome message for new users
  if (userHistory.length === 0) {
    setTimeout(() => {
      showNotification('✨ Welcome to your mystical journey!');
    }, 1000);
  }
}

// Make functions globally accessible
window.deleteNote = deleteNote;
window.addNote = addNote;
window.addGoal = addGoal;
window.toggleGoal = toggleGoal;
window.deleteGoal = deleteGoal;
window.useFavorite = useFavorite;
window.deleteFavorite = deleteFavorite;
window.createBlendedSelection = createBlendedSelection;
window.clearMoodBlend = clearMoodBlend;
window.handleMoonPhaseClick = handleMoonPhaseClick;

// Start the app when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}