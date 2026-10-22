// ==========================================
// DATABASE
// ==========================================
const FALLBACK_IMG = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="300" fill="%23131317"><rect width="100%" height="100%"/><text x="50%" y="50%" fill="%236b6b78" font-family="sans-serif" font-size="14" text-anchor="middle">No Image</text></svg>';
const FALLBACK_BANNER = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="400" fill="%230a0a0e"><rect width="100%" height="100%"/><text x="50%" y="50%" fill="%236b6b78" font-family="sans-serif" font-size="24" text-anchor="middle">No Banner</text></svg>';

const ANIME_DB = [
  { id: 1, title: 'צייד השדים', titleEn: 'Kimetsu no Yaiba', rating: 9.1, year: 2024, type: 'TV', genres: ['פעולה','פנטזיה'], img: 'https://cdn.myanimelist.net/images/anime/1286/99889l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg', eps: 26, season: 'עונה 4', studio: 'Ufotable', status: 'משודר', synopsis: 'טנג\'ירו קמאדו, נער אדיב וטוב לב, חי עם משפחתו ההררית. יום אחד, כאשר הוא יוצא למכור פחם בעיירה הסמוכה, משפחתו נטבחת על ידי שדים. אחותו היחידה ששרדה, נזוקו, הפכה בעצמה לשד. טנג\'ירו יוצא למסע כדי להפוך את אחותו חזרה לאנושית ולנקום את מות משפחתו.', badge: 'עונה חדשה', badgeColor: '#e50914' },
  { id: 2, title: 'התקפת הענקים', titleEn: 'Shingeki no Kyojin', rating: 9.0, year: 2023, type: 'TV', genres: ['פעולה','דרמה'], img: 'https://cdn.myanimelist.net/images/anime/10/47347l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg', eps: 87, season: 'עונה 4', studio: 'MAPPA', status: 'הסתיים', synopsis: 'במשך מאה שנים, האנושות חיה בשלום בין החומות המסיביות מפני הענקים המסתוריים שאוכלים בני אדם. ארן יגר, נער צעיר שראה את אמו נאכלת, נשבע לנקום ולהשמיד את כל הענקים.', badge: 'נסוף לאחרונה', badgeColor: '#e50914' },
  { id: 3, title: 'ואן פיס', titleEn: 'One Piece', rating: 8.9, year: 1999, type: 'TV', genres: ['הרפתקאות','קומדיה'], img: 'https://cdn.myanimelist.net/images/anime/6/73245l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg', eps: 1090, season: 'עונה 21', studio: 'Toei Animation', status: 'משודר', synopsis: 'מונקי די. לופי הוא פיראט צעיר שיוצא למסע למצוא את האוצר האגדי "One Piece" ולהפוך למלך הפיראטים. בדרך הוא מגייס צוות מגוון של חברים.', badge: 'פרק חדש', badgeColor: '#3b82f6' },
  { id: 4, title: "ג'וג'וטסו קייסן", titleEn: 'Jujutsu Kaisen', rating: 8.8, year: 2023, type: 'TV', genres: ['פעולה','פנטזיה'], img: 'https://cdn.myanimelist.net/images/anime/1171/109222l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/1171/109222.jpg', eps: 47, season: 'עונה 2', studio: 'MAPPA', status: 'משודר', synopsis: 'יוג\'י איטדורי, תלמיד תיכון, בולע קמע מקולל והופך למארח של שד רב עוצמה. הוא מצטרף לבית הספר למכשפים ג\'וג\'וטסו כדי להילחם בקללות.', badge: 'עונה חדשה', badgeColor: '#e50914' },
  { id: 5, title: "צ'נסומן", titleEn: 'Chainsaw Man', rating: 8.7, year: 2022, type: 'TV', genres: ['פעולה','אימה'], img: 'https://cdn.myanimelist.net/images/anime/1806/126216l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/1806/126216.jpg', eps: 12, season: 'עונה 1', studio: 'MAPPA', status: 'הסתיים', synopsis: 'דנג\'י חי חיים אומללים כצייד שדים. לאחר בגידה, הוא מתמזג עם שד המסור שלו והופך ל"צ\'נסומן", צייד שדים חצי-אנושי חצי-שד.', badge: 'חדש', badgeColor: '#e50914' },
  { id: 6, title: 'ספיי x פמילי', titleEn: 'Spy x Family', rating: 8.6, year: 2024, type: 'TV', genres: ['קומדיה','פעולה'], img: 'https://cdn.myanimelist.net/images/anime/1441/122795l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/1441/122795.jpg', eps: 37, season: 'עונה 2', studio: 'Wit Studio', status: 'משודר', synopsis: 'מרגל עלית חייב להקים משפחה פיקטיבית כדי לבצע משימה. הוא מאמץ ילדה טלפתית ומתחתן עם מתנקשת, בעוד שאף אחד מהם לא יודע את האמת על האחר.', badge: 'עונה חדשה', badgeColor: '#e50914' },
  { id: 7, title: 'נארוטו', titleEn: 'Naruto Shippuden', rating: 8.5, year: 2007, type: 'TV', genres: ['פעולה','הרפתקאות'], img: 'https://cdn.myanimelist.net/images/anime/5/17407l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/5/17407.jpg', eps: 500, season: 'עונה 1', studio: 'Pierrot', status: 'הסתיים', synopsis: 'נארוטו אוזומאקי חוזר לכפר העלים לאחר שנתיים של אימונים. הוא ממשיך במסעו להפוך להוקאגה, מנהיג הכפר, ולהגן על חבריו.', badge: 'קלאסיקה', badgeColor: '#3b82f6' },
  { id: 8, title: "דת' נוט", titleEn: 'Death Note', rating: 9.0, year: 2006, type: 'TV', genres: ['פסיכולוגי','מסתורין'], img: 'https://cdn.myanimelist.net/images/anime/9/9453l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg', eps: 37, season: 'עונה 1', studio: 'Madhouse', status: 'הסתיים', synopsis: 'לייט יאגאמי, תלמיד תיכון מבריק, מוצא מחברת קסומה שהורגת כל אדם ששמו נכתב בה. הוא מחליט להשתמש בה כדי לטהר את העולם מפשע.', badge: 'נסוף לאחרונה', badgeColor: '#e50914' },
  { id: 9, title: 'פרירן', titleEn: 'Sousou no Frieren', rating: 9.2, year: 2024, type: 'TV', genres: ['פנטזיה','הרפתקאות'], img: 'https://cdn.myanimelist.net/images/anime/1015/138006l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/1015/138006.jpg', eps: 28, season: 'עונה 1', studio: 'Madhouse', status: 'הסתיים', synopsis: 'לאחר מסע של עשר שנים להביס את מלך השדים, החבורה מתפזרת. פרירן, קוסמת אלפית, יוצאת למסע חדש — הפעם כדי להבין מה זה אומר להיות אנושית.', badge: 'עונה חדשה', badgeColor: '#e50914' },
  { id: 10, title: 'אל כימאי', titleEn: 'Fullmetal Alchemist', rating: 9.1, year: 2009, type: 'TV', genres: ['פעולה','פנטזיה'], img: 'https://cdn.myanimelist.net/images/anime/1223/96541l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/1223/96541.jpg', eps: 64, season: 'עונה 1', studio: 'Bones', status: 'הסתיים', synopsis: 'שני אחים מנסים להחיות את אמם באמצעות אלכימיה, אך משלמים מחיר כבד. הם יוצאים למסע למצוא את אבן החכמים כדי להחזיר את גופם.', badge: 'קלאסיקה', badgeColor: '#3b82f6' },
  { id: 11, title: 'שטיינס גייט', titleEn: 'Steins;Gate', rating: 9.0, year: 2011, type: 'TV', genres: ['מדע בדיוני','מתח'], img: 'https://cdn.myanimelist.net/images/anime/1935/127974l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg', eps: 24, season: 'עונה 1', studio: 'White Fox', status: 'הסתיים', synopsis: 'מדען מטורף לכאורה והחברים שלו מגלים איך לשלוח הודעות לעבר. עד מהרה הם מגלים שהשינויים בעבר מובילים לתוצאות קטלניות.', badge: 'קלאסיקה', badgeColor: '#3b82f6' },
  { id: 12, title: 'וינלנד סאגה', titleEn: 'Vinland Saga', rating: 8.9, year: 2023, type: 'TV', genres: ['פעולה','דרמה'], img: 'https://cdn.myanimelist.net/images/anime/1500/103005l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/1500/103005.jpg', eps: 48, season: 'עונה 2', studio: 'Wit Studio', status: 'משודר', synopsis: 'תורפין, ילד ויקינגי צעיר, יוצא למסע נקמה נגד האיש שהרג את אביו. לאורך הדרך הוא מגלה את המשמעות האמיתית של להיות לוחם.', badge: 'עונה חדשה', badgeColor: '#e50914' },
  { id: 13, title: 'טוקיו ריבנג\'רס', titleEn: 'Tokyo Revengers', rating: 8.1, year: 2021, type: 'TV', genres: ['פעולה','דרמה'], img: 'https://cdn.myanimelist.net/images/anime/1839/122858l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/1839/122858.jpg', eps: 24, season: 'עונה 1', studio: 'Liden Films', status: 'הסתיים', synopsis: 'טקמיצ\'י האנאגאקי, בחור כושל, מגלה שהוא יכול לחזור בזמן 12 שנים לאחור כדי להציל את אהבתו ולשנות את עתידו.', badge: 'נסוף לאחרונה', badgeColor: '#e50914' },
  { id: 14, title: 'מוב פסייקו 100', titleEn: 'Mob Psycho 100', rating: 8.5, year: 2016, type: 'TV', genres: ['פעולה','קומדיה'], img: 'https://cdn.myanimelist.net/images/anime/8/80356l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/8/80356.jpg', eps: 37, season: 'עונה 1', studio: 'Bones', status: 'הסתיים', synopsis: 'שיגאו קאגיאמה (מוב) הוא תלמיד תיכון בעל כוחות טלפתיים אדירים. הוא מנסה לחיות חיים רגילים תוך כדי עבודה אצל רמאי שמנצל את כוחותיו.', badge: 'קלאסיקה', badgeColor: '#3b82f6' },
  { id: 15, title: 'קוד גיאס', titleEn: 'Code Geass', rating: 8.7, year: 2006, type: 'TV', genres: ['פעולה','מדע בדיוני'], img: 'https://cdn.myanimelist.net/images/anime/1032/135088l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/1032/135088.jpg', eps: 50, season: 'עונה 1', studio: 'Sunrise', status: 'הסתיים', synopsis: 'ללוש לאמפרוג\', נסיך גולה, מקבל כוח מיסטי בשם "גיאס" ומחליט להשתמש בו כדי להפיל את האימפריה הבריטית ולהקים עולם טוב יותר.', badge: 'קלאסיקה', badgeColor: '#3b82f6' },
  { id: 16, title: 'שבועת הסייף', titleEn: 'Bleach', rating: 8.2, year: 2004, type: 'TV', genres: ['פעולה','פנטזיה'], img: 'https://cdn.myanimelist.net/images/anime/3/40451l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/3/40451.jpg', eps: 366, season: 'עונה 1', studio: 'Pierrot', status: 'הסתיים', synopsis: 'איצ\'יגו קורוסאקי, תלמיד תיכון, מקבל כוחות של קוסם מוות (שינגאמי) לאחר שפגש את רוקיה. הוא נלחם ברוחות רעות ומגן על החיים.', badge: 'קלאסיקה', badgeColor: '#3b82f6' },
  { id: 17, title: 'וונדר אגס', titleEn: 'Wonder Egg Priority', rating: 8.0, year: 2021, type: 'TV', genres: ['פנטזיה','פסיכולוגי'], img: 'https://cdn.myanimelist.net/images/anime/1079/110635l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/1079/110635.jpg', eps: 12, season: 'עונה 1', studio: 'CloverWorks', status: 'הסתיים', synopsis: 'איי אוטו, נערה ביישנית, מקבלת הזדמנות להחיות את חברתה שמתה, על ידי לחימה במפלצות בעולם חלומות.', badge: 'חדש', badgeColor: '#e50914' },
  { id: 18, title: 'המסע של צ\'יהירו', titleEn: 'Spirited Away', rating: 8.6, year: 2001, type: 'Movie', genres: ['פנטזיה','הרפתקאות'], img: 'https://cdn.myanimelist.net/images/anime/6/79597l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/6/79597.jpg', eps: 1, season: 'סרט', studio: 'Ghibli', status: 'הסתיים', synopsis: 'צ\'יהירו, ילדה בת 10, מוצאת את עצמה בעולם רוחות קסום לאחר שהוריה הפכו לחזירים. היא חייבת לעבוד בבית מרחץ לרוחות כדי להציל אותם ולחזור הביתה.', badge: 'סרט', badgeColor: '#3b82f6' },
  { id: 19, title: 'השם שלך', titleEn: 'Your Name', rating: 8.4, year: 2016, type: 'Movie', genres: ['רומנטיקה','דרמה'], img: 'https://cdn.myanimelist.net/images/anime/5/87048l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg', eps: 1, season: 'סרט', studio: 'CoMix Wave', status: 'הסתיים', synopsis: 'מיטסוהה, נערה מהעיר, וטקי, נער מהכפר, מתחילים להחליף גופות באופן מסתורי. הם מפתחים קשר עמוק ומנסים להיפגש לפני שיהיה מאוחר מדי.', badge: 'סרט', badgeColor: '#3b82f6' },
  { id: 20, title: 'אקירה', titleEn: 'Akira', rating: 8.3, year: 1988, type: 'Movie', genres: ['מדע בדיוני','פעולה'], img: 'https://cdn.myanimelist.net/images/anime/10/79533l.jpg', banner: 'https://cdn.myanimelist.net/images/anime/10/79533.jpg', eps: 1, season: 'סרט', studio: 'TMS', status: 'הסתיים', synopsis: 'בשנת 2019, ניאו-טוקיו נהרסת על ידי פיצוץ. קאנאדה, מנהיג כנופיית אופנועים, מנסה להציל את חברו טצואו, שמפתח כוחות פסיכוקינטיים הרסניים.', badge: 'סרט', badgeColor: '#3b82f6' }
];

const INITIAL_POSTS = [
  { id: 1, author: 'AnimeMaster', title: 'האם פרירן היא האנימה הטובה של העשור?', content: 'אני לא מצליח להפסיק לחשוב על הסיום של העונה הראשונה. הדרך שבה הסדרה עוסקת בזמן ובזיכרון היא פשוט מדהימה. מה דעתכם?', time: 'לפני שעתיים', likes: 12, liked: false, comments: [] },
  { id: 2, author: 'Sakura', title: 'המלצה: אנימות קצרות לסופ"ש', content: 'אם אתם רוצים משהו קצר ואיכותי, לכו על "Erased" או "Vivy: Fluorite Eye\'s Song". שתיהן מעולות ולא דורשות יותר מ-13 פרקים.', time: 'לפני 5 שעות', likes: 8, liked: false, comments: [{ author: 'JJK_Fan', text: 'מסכים! Vivy ממש טובה.' }] }
];

// STATE
const AppState = {
  searchQuery: '',
  searchGenres: [],
  searchYear: '',
  continueWatching: JSON.parse(localStorage.getItem('go_sub_continue') || '[]'),
  favorites: JSON.parse(localStorage.getItem('go_sub_favorites') || '[]'),
  pendingRedirect: null,
  debounceTimer: null,

  save() {
    localStorage.setItem('go_sub_continue', JSON.stringify(this.continueWatching));
    localStorage.setItem('go_sub_favorites', JSON.stringify(this.favorites));
  },
  addToContinue(anime, epNum) {
    this.continueWatching = this.continueWatching.filter(c => c.animeId !== anime.id);
    this.continueWatching.unshift({ animeId: anime.id, epNum, progress: Math.floor(Math.random() * 80) + 10, timestamp: Date.now() });
    if (this.continueWatching.length > 10) this.continueWatching.pop();
    this.save();
  },
  toggleFavorite(animeId) {
    if (this.favorites.includes(animeId)) {
      this.favorites = this.favorites.filter(id => id !== animeId);
    } else {
      this.favorites.push(animeId);
    }
    this.save();
  },
  isFavorite(animeId) { return this.favorites.includes(animeId); },
  resetFilters() { this.searchQuery = ''; this.searchGenres = []; this.searchYear = ''; }
};

const DB = {
  getUsers: () => JSON.parse(localStorage.getItem('go_sub_users') || '[]'),
  saveUsers: (u) => localStorage.setItem('go_sub_users', JSON.stringify(u)),
  getCurrentUser: () => JSON.parse(localStorage.getItem('go_sub_user') || 'null'),
  setCurrentUser: (u) => localStorage.setItem('go_sub_user', JSON.stringify(u)),
  logout: () => localStorage.removeItem('go_sub_user'),
  getPosts: () => JSON.parse(localStorage.getItem('go_sub_posts') || JSON.stringify(INITIAL_POSTS)),
  savePosts: (p) => localStorage.setItem('go_sub_posts', JSON.stringify(p)),
};

// ROUTER
let videoInterval = null;

function router() {
  if (videoInterval) { clearInterval(videoInterval); videoInterval = null; }
  
  const hash = window.location.hash || '#home';
  const app = document.getElementById('app');
  window.scrollTo(0, 0);
  
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  if (hash === '#home') {
    document.querySelector('[data-nav="home"]').classList.add('active');
    renderHome(app);
  } else if (hash.startsWith('#anime/')) {
    document.querySelector('[data-nav="catalog"]').classList.add('active');
    renderAnimeDetails(app, hash.split('/')[1]);
  } else if (hash.startsWith('#watch/')) {
    const parts = hash.split('/');
    renderWatch(app, parts[1], parts[2] || 1);
  } else if (hash === '#catalog') {
    document.querySelector('[data-nav="catalog"]').classList.add('active');
    renderCatalog(app);
  } else if (hash === '#community') {
    document.querySelector('[data-nav="community"]').classList.add('active');
    renderCommunity(app);
  } else if (hash === '#my-list') {
    document.querySelector('[data-nav="my-list"]').classList.add('active');
    renderMyList(app);
  } else if (hash === '#profile') {
    renderProfile(app);
  } else {
    app.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:60vh;text-align:center;"><h1 style="font-size:120px;font-weight:900;color:var(--primary);margin-bottom:20px;">404</h1><h2 style="font-size:32px;margin-bottom:16px;">האנימה הזו אבדה בדרך...</h2><p style="color:var(--text-muted);margin-bottom:32px;">הדף שחיפשת לא קיים או שהוסר מהאתר.</p><a href="#home" class="btn btn-primary btn-lg">חזור לדף הבית</a></div>`;
  }
  renderAuthArea();
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);

// RENDER: HOME (Hero with search + Netflix Top 10 + All Rows)
function renderHome(app) {
  const top10 = [...ANIME_DB].sort((a,b) => b.rating - a.rating).slice(0, 10);
  const heroAnime = ANIME_DB[0]; // Featured anime for background

  let continueHTML = '';
  if (AppState.continueWatching.length > 0) {
    continueHTML = `
      <section class="section-full">
        <div class="section-header"><h2 class="section-title">▶ המשך צפייה</h2></div>
        <div class="continue-scroll">
          ${AppState.continueWatching.map(c => {
            const a = ANIME_DB.find(x => x.id === c.animeId);
            if (!a) return '';
            return `<div class="continue-card" onclick="window.location.hash='#watch/${a.id}/${c.epNum}'"><img src="${a.banner}" alt="${a.title}" onerror="this.src='${FALLBACK_BANNER}'"><div class="continue-info"><div class="continue-title">${a.title}</div><div class="continue-ep">פרק ${c.epNum}</div></div><div class="continue-progress"><div class="continue-progress-fill" style="width:${c.progress}%"></div></div></div>`;
          }).join('')}
        </div>
      </section>`;
  }

  app.innerHTML = `
    <section class="hero-portal">
      <div class="hero-portal-bg" style="background-image: url('${heroAnime.banner}');"></div>
      <div class="hero-portal-overlay"></div>
      <div class="hero-portal-content">
        <div class="hero-portal-kicker">פורטל האנימה הישראלי</div>
        <h1 class="hero-portal-title">הבית שלך לאנימה בישראל</h1>
        <p class="hero-portal-sub">אלפי פרקים, סרטים, קהילה תוססת וחווית צפייה בלתי נשכחת — הכל בחינם.</p>
        <div class="hero-portal-search">
          <input type="text" id="hero-search-input" placeholder="חפש אנימה, סדרה או ז'אנר..." onkeypress="if(event.key==='Enter') doHeroSearch()" />
          <button onclick="doHeroSearch()">חיפוש</button>
        </div>
        <div class="hero-portal-stats">
          <div class="stat"><span class="stat-val">${ANIME_DB.length}</span><span class="stat-lbl">אנימות</span></div>
          <div class="divider"></div>
          <div class="stat"><span class="stat-val">30,128</span><span class="stat-lbl">פרקים</span></div>
          <div class="divider"></div>
          <div class="stat"><span class="stat-val">54</span><span class="stat-lbl">ז'אנרים</span></div>
          <div class="divider"></div>
          <div class="stat"><span class="stat-val">9,763</span><span class="stat-lbl">משתמשים</span></div>
        </div>
      </div>
    </section>

    ${continueHTML}

    <section class="section-full">
      <div class="section-header"><h2 class="section-title">🔥 פופולרי עכשיו</h2><a href="#catalog" class="view-all">לכל האנימות ←</a></div>
      <div class="episode-scroll">
        ${ANIME_DB.slice(0, 12).map(a => createPosterCard(a)).join('')}
      </div>
    </section>

    <section class="section-full alt">
      <div class="section-header"><h2 class="section-title">🔝 10 הסדרות המובילות בישראל היום</h2></div>
      <div class="netflix-top10-wrap">
        ${top10.map((a, i) => `
          <div class="netflix-item" onclick="window.location.hash='#anime/${a.id}'">
            <div class="netflix-number">${i + 1}</div>
            <div class="poster-card">
              <img src="${a.img}" alt="${a.title}" onerror="this.src='${FALLBACK_IMG}'">
              ${a.badge ? `<div class="netflix-badge ${a.badgeColor === '#3b82f6' ? 'blue' : ''}">${a.badge}</div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="section-full">
      <div class="section-header"><h2 class="section-title">🎬 סרטי אנימה</h2><a href="#catalog" class="view-all">לכל הסרטים ←</a></div>
      <div class="episode-scroll">
        ${ANIME_DB.filter(a => a.type === 'Movie').map(a => createPosterCard(a)).join('')}
      </div>
    </section>

    <section class="section-full alt">
      <div class="section-header"><h2 class="section-title">🆕 חדש באתר</h2><a href="#catalog" class="view-all">לכל האנימות ←</a></div>
      <div class="anime-grid">
        ${ANIME_DB.slice(-10).map(a => createPosterCard(a)).join('')}
      </div>
    </section>
  `;
}

function createPosterCard(a) {
  return `
    <div class="poster-card" onclick="window.location.hash='#anime/${a.id}'">
      <img src="${a.img}" alt="${a.title}" loading="lazy" onerror="this.src='${FALLBACK_IMG}'">
      <div class="poster-info">
        <div class="poster-title">${a.title}</div>
        <div class="poster-en">${a.titleEn}</div>
        <div class="poster-meta"><span>★ ${a.rating}</span> <span>${a.eps} פרקים</span></div>
        <button class="poster-btn">צפה עכשיו</button>
      </div>
    </div>
  `;
}

// RENDER: DETAILS
function renderAnimeDetails(app, id) {
  const a = ANIME_DB.find(x => x.id == id);
  if (!a) { window.location.hash = '#404'; return; }
  
  const epCount = a.eps > 30 ? 24 : a.eps;
  const eps = Array.from({length: epCount}, (_, i) => `<a href="#watch/${a.id}/${i+1}" class="ep-box">פרק ${i+1}</a>`).join('');
  const similar = ANIME_DB.filter(x => x.id !== a.id && x.genres.some(g => a.genres.includes(g))).slice(0, 5);
  const isFav = AppState.isFavorite(a.id);

  app.innerHTML = `
    <div class="detail-page">
      <div class="detail-hero">
        <img src="${a.banner}" class="detail-banner" onerror="this.src='${FALLBACK_BANNER}'">
        <div class="detail-overlay"></div>
      </div>
      <div class="detail-content">
        <div class="detail-poster-wrap"><img src="${a.img}" class="detail-poster" onerror="this.src='${FALLBACK_IMG}'"></div>
        <div class="detail-info">
          <h1 class="detail-title">${a.title}</h1>
          <h2 class="detail-subtitle">${a.titleEn}</h2>
          <div class="detail-tags">
            <span class="detail-tag primary">★ ${a.rating}</span>
            <span class="detail-tag">${a.year}</span>
            <span class="detail-tag">${a.type}</span>
            <span class="detail-tag">${a.season}</span>
            <span class="detail-tag">${a.studio}</span>
            <span class="detail-tag">${a.status}</span>
          </div>
          <p class="detail-synopsis">${a.synopsis}</p>
          <div class="detail-actions" style="display:flex; gap:12px;">
            <a href="#watch/${a.id}/1" class="btn btn-primary btn-lg">▶ צפה בפרק 1</a>
            <button class="btn ${isFav ? 'btn-primary' : 'btn-outline'} btn-lg" onclick="toggleFav(${a.id})">${isFav ? '✓ ברשימה שלי' : '+ הוסף לרשימה שלי'}</button>
          </div>
        </div>
      </div>
      <div class="detail-episodes"><h3>פרקים</h3><div class="ep-grid">${eps}</div></div>
      ${similar.length > 0 ? `<div class="detail-episodes"><h3>אנימות דומות</h3><div class="anime-grid">${similar.map(x => createPosterCard(x)).join('')}</div></div>` : ''}
    </div>
  `;
}

function toggleFav(id) {
  if (!DB.getCurrentUser()) { AppState.pendingRedirect = window.location.hash; openAuthModal('login'); return; }
  AppState.toggleFavorite(id);
  renderAnimeDetails(document.getElementById('app'), id);
}

// RENDER: WATCH
function renderWatch(app, animeId, epNum) {
  const a = ANIME_DB.find(x => x.id == animeId);
  if (!a) { window.location.hash = '#404'; return; }
  const epCount = a.eps > 30 ? 24 : a.eps;
  const currentEp = parseInt(epNum);
  const prevEp = Math.max(1, currentEp - 1);
  const nextEp = Math.min(epCount, currentEp + 1);
  AppState.addToContinue(a, currentEp);

  const epList = Array.from({length: epCount}, (_, i) => `<a href="#watch/${a.id}/${i+1}" class="ep-item ${i+1 === currentEp ? 'active' : ''}"><span>פרק ${i+1}</span></a>`).join('');

  app.innerHTML = `
    <div class="watch-page">
      <div class="watch-nav"><a href="#anime/${a.id}" class="back-link">← חזור לעמוד האנימה</a><h1 class="watch-title">${a.title} - פרק ${currentEp}</h1></div>
      <div class="watch-layout">
        <div class="watch-main">
          <div class="video-container"><div class="video-placeholder">▶</div><div class="video-controls"><div class="progress-bar"><div class="progress-fill" id="progress-fill"></div></div><div class="controls-row"><span>▶</span> <span>🔊</span> <span style="flex:1;"></span> <span>⚙️</span> <span>⛶</span></div></div></div>
          <div class="ep-nav-buttons" style="margin-top:16px; display:flex; gap:12px;">
            <a href="#watch/${a.id}/${prevEp}" class="btn btn-outline" style="${currentEp === 1 ? 'opacity:0.5; pointer-events:none;' : ''}">← פרק קודם</a>
            <a href="#watch/${a.id}/${nextEp}" class="btn btn-primary" style="${currentEp === epCount ? 'opacity:0.5; pointer-events:none;' : ''}">פרק הבא →</a>
          </div>
        </div>
        <div class="watch-sidebar"><h3>רשימת פרקים</h3><div class="ep-list">${epList}</div></div>
      </div>
    </div>
  `;

  let progress = 0;
  videoInterval = setInterval(() => {
    progress += 0.5;
    if (progress > 100) { clearInterval(videoInterval); videoInterval = null; return; }
    const el = document.getElementById('progress-fill');
    if (el) el.style.width = `${progress}%`;
    else { clearInterval(videoInterval); videoInterval = null; }
  }, 100);
}

// RENDER: CATALOG
function renderCatalog(app) {
  app.innerHTML = `
    <div class="catalog-layout">
      <aside class="sidebar-filters">
        <div class="filter-header"><h3>סינון וחיפוש</h3></div>
        <div class="filter-group">
          <div class="filter-search"><input type="text" id="catalog-search-input" placeholder="חפש אנימה..." value="${AppState.searchQuery}" /></div>
          <button class="btn btn-outline" style="width:100%; margin-top:8px; font-size:12px;" onclick="clearAllFilters()">נקה סינון</button>
        </div>
        <div class="filter-group">
          <h3 class="filter-title">ז'אנרים</h3>
          ${['פעולה','הרפתקאות','קומדיה','פנטזיה','אימה'].map(g => `<label class="filter-checkbox"><input type="checkbox" value="${g}" ${AppState.searchGenres.includes(g) ? 'checked' : ''} onchange="toggleGenreFilter('${g}', this.checked)"> ${g}</label>`).join('')}
        </div>
        <div class="filter-group">
          <h3 class="filter-title">שנה</h3>
          <select class="filter-select" onchange="setYearFilter(this.value)" style="width:100%; background: var(--bg-main); border: 1px solid var(--border); padding: 10px; border-radius: 6px; color: #fff; font-size: 14px; cursor: pointer;">
            <option value="">כל השנים</option>
            <option value="2024" ${AppState.searchYear === '2024' ? 'selected' : ''}>2024</option>
            <option value="2023" ${AppState.searchYear === '2023' ? 'selected' : ''}>2023</option>
            <option value="2022" ${AppState.searchYear === '2022' ? 'selected' : ''}>2022</option>
          </select>
        </div>
      </aside>
      <div class="catalog-main">
        <div class="catalog-header"><h1 class="catalog-title">ספריית אנימה</h1><span id="catalog-count">מציג ${getFilteredAnime().length} תוצאות</span></div>
        <div class="anime-grid" id="catalog-grid">${getFilteredAnimeHTML()}</div>
      </div>
    </div>
  `;

  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) searchInput.addEventListener('input', (e) => { AppState.searchQuery = e.target.value; updateCatalogGrid(); });
}

function getFilteredAnime() {
  let filtered = [...ANIME_DB];
  if (AppState.searchQuery) { const q = AppState.searchQuery.toLowerCase(); filtered = filtered.filter(a => a.title.toLowerCase().includes(q) || a.titleEn.toLowerCase().includes(q)); }
  if (AppState.searchGenres.length > 0) filtered = filtered.filter(a => AppState.searchGenres.every(g => a.genres.includes(g)));
  if (AppState.searchYear) filtered = filtered.filter(a => a.year.toString() === AppState.searchYear);
  return filtered;
}
function getFilteredAnimeHTML() {
  const filtered = getFilteredAnime();
  return filtered.length > 0 ? filtered.map(a => createPosterCard(a)).join('') : '<div style="padding:40px;text-align:center;color:#aaa;font-size:18px;grid-column:1/-1;">לא נמצאו תוצאות מתאימות לחיפוש שלך.</div>';
}
function updateCatalogGrid() {
  const grid = document.getElementById('catalog-grid');
  const count = document.getElementById('catalog-count');
  if (grid) grid.innerHTML = getFilteredAnimeHTML();
  if (count) count.textContent = `מציג ${getFilteredAnime().length} תוצאות`;
}
function toggleGenreFilter(genre, isChecked) {
  if (isChecked) { if (!AppState.searchGenres.includes(genre)) AppState.searchGenres.push(genre); }
  else AppState.searchGenres = AppState.searchGenres.filter(g => g !== genre);
  updateCatalogGrid();
}
function setYearFilter(year) { AppState.searchYear = year; updateCatalogGrid(); }
function clearAllFilters() { AppState.resetFilters(); renderCatalog(document.getElementById('app')); }

// RENDER: MY LIST
function renderMyList(app) {
  const user = DB.getCurrentUser();
  if (!user) { app.innerHTML = `<div style="padding:100px;text-align:center;color:#aaa;"><h2>עליך להתחבר כדי לצפות ברשימה שלך.</h2><button class="btn btn-primary" style="margin-top:20px;" onclick="AppState.pendingRedirect='#my-list'; openAuthModal('login')">התחבר</button></div>`; return; }
  const favAnime = ANIME_DB.filter(a => AppState.favorites.includes(a.id));
  app.innerHTML = `<div class="profile-layout"><div class="section-header"><h2 class="section-title">❤️ הרשימה שלי</h2></div>${favAnime.length > 0 ? `<div class="anime-grid">${favAnime.map(a => createPosterCard(a)).join('')}</div>` : '<p style="color:#aaa;text-align:center;margin-top:40px;font-size:18px;">עדיין לא הוספת אנימות לרשימה.</p>'}</div>`;
}

// RENDER: COMMUNITY
function renderCommunity(app) {
  const posts = DB.getPosts();
  const feed = posts.map(p => `<div class="post-card"><div class="post-header"><div class="avatar">${p.author.charAt(0)}</div><div class="post-meta"><span class="post-author" style="font-size:14px;font-weight:800;">${p.author}</span><span class="post-time" style="font-size:11px;color:var(--text-dim);">${p.time}</span></div></div><h3 class="post-title">${p.title}</h3><p class="post-content">${p.content}</p><div class="post-actions"><button class="post-action-btn ${p.liked ? 'liked' : ''}" onclick="toggleLike(${p.id})">${p.liked ? '❤️' : '🤍'} ${p.likes} לייקים</button><button class="post-action-btn" onclick="toggleComments(${p.id})">💬 ${p.comments.length} תגובות</button></div><div class="comments-section" id="comments-${p.id}">${p.comments.map(c => `<div class="comment"><b>${c.author}</b>: ${c.text}</div>`).join('')}${p.comments.length === 0 ? '<div style="font-size:13px;color:#666;margin-bottom:8px;">אין תגובות עדיין.</div>' : ''}<div class="add-comment"><input type="text" placeholder="כתוב תגובה..." onkeypress="if(event.key==='Enter') addComment(${p.id}, this)" /></div></div></div>`).join('');

  app.innerHTML = `<div class="community-layout"><div class="community-header"><h1 class="page-title" style="font-size:32px;font-weight:900;">פורום הקהילה</h1><button class="btn btn-primary" onclick="openNewPostModal()">+ פוסט חדש</button></div><div class="community-feed">${feed}</div><aside class="community-sidebar"><div class="widget"><h3>📊 סטטיסטיקות</h3><ul class="stats-list"><li><span>חברי קהילה</span> <strong>${DB.getUsers().length + 9763}</strong></li><li><span>פוסטים</span> <strong>${posts.length}</strong></li><li><span>תגובות</span> <strong>${posts.reduce((sum, p) => sum + p.comments.length, 0)}</strong></li></ul></div><div class="widget"><h3>📜 חוקי הפורום</h3><p style="font-size:13px; color:#aaa; line-height:1.6;">1. אהבו אחד את השני.<br>2. אין ספוילרים ללא אזהרה.<br>3. תהנו מהאנימה!</p></div></aside></div>`;
}

function toggleLike(id) {
  if (!DB.getCurrentUser()) { AppState.pendingRedirect = window.location.hash; openAuthModal('login'); return; }
  const posts = DB.getPosts(); const post = posts.find(p => p.id === id);
  if (post.liked) { post.likes--; post.liked = false; } else { post.likes++; post.liked = true; }
  DB.savePosts(posts); renderCommunity(document.getElementById('app'));
}
function toggleComments(id) { const el = document.getElementById(`comments-${id}`); if (el) el.classList.toggle('open'); }
function addComment(id, inputEl) {
  if (!DB.getCurrentUser()) { AppState.pendingRedirect = window.location.hash; openAuthModal('login'); return; }
  const text = inputEl.value.trim(); if (!text) return;
  const posts = DB.getPosts(); const post = posts.find(p => p.id === id);
  post.comments.push({ author: DB.getCurrentUser().username, text });
  DB.savePosts(posts); renderCommunity(document.getElementById('app'));
  setTimeout(() => document.getElementById(`comments-${id}`).classList.add('open'), 10);
}

// RENDER: PROFILE
function renderProfile(app) {
  const user = DB.getCurrentUser();
  if (!user) { window.location.hash = '#home'; return; }
  const userPosts = DB.getPosts().filter(p => p.author === user.username);
  app.innerHTML = `<div class="profile-layout"><div class="profile-header"><div class="profile-avatar">${user.username.charAt(0).toUpperCase()}</div><div class="profile-info"><h1>${user.username}</h1><p>חבר קהילה ב-go-sub</p></div><button class="btn btn-outline" style="margin-right:auto;" onclick="logout()">התנתק</button></div><div class="section-header"><h2 class="section-title">📝 הפוסטים שלי</h2></div><div class="community-feed">${userPosts.length > 0 ? userPosts.map(p => `<div class="post-card"><h3 class="post-title">${p.title}</h3><p class="post-content">${p.content}</p></div>`).join('') : '<p style="color:#aaa;">עדיין לא פרסמת פוסטים.</p>'}</div></div>`;
}

// HELPERS
function openInfoModal(title, content) {
  document.getElementById('info-title').textContent = title;
  document.getElementById('info-content').textContent = content;
  document.getElementById('info-modal').showModal();
}
function openNewPostModal() {
  if (!DB.getCurrentUser()) { AppState.pendingRedirect = window.location.hash; openAuthModal('login'); return; }
  document.getElementById('post-form').reset();
  document.getElementById('post-modal').showModal();
}
function handleNewPost(e) {
  e.preventDefault();
  const user = DB.getCurrentUser();
  const posts = DB.getPosts();
  posts.unshift({ id: Date.now(), author: user.username, title: document.getElementById('post-title').value, content: document.getElementById('post-content').value, time: 'עכשיו', likes: 0, liked: false, comments: [] });
  DB.savePosts(posts); closeModal('post-modal'); renderCommunity(document.getElementById('app'));
}
function handleGlobalSearch(val) {
  AppState.searchQuery = val;
  clearTimeout(AppState.debounceTimer);
  AppState.debounceTimer = setTimeout(() => {
    if (window.location.hash === '#catalog') { updateCatalogGrid(); const catInput = document.getElementById('catalog-search-input'); if (catInput) catInput.value = val; }
    else if (val.length > 1) window.location.hash = '#catalog';
  }, 300);
}
function doSearch() { AppState.searchQuery = document.getElementById('global-search').value.trim(); if (window.location.hash === '#catalog') renderCatalog(document.getElementById('app')); else window.location.hash = '#catalog'; }
function doHeroSearch() { const q = document.getElementById('hero-search-input').value.trim(); AppState.searchQuery = q; window.location.hash = '#catalog'; }
function goRandom() { const random = ANIME_DB[Math.floor(Math.random() * ANIME_DB.length)]; window.location.hash = `#anime/${random.id}`; }

let authMode = 'register';
function openAuthModal(mode) {
  authMode = mode;
  document.getElementById('auth-form').reset();
  document.getElementById('auth-error').textContent = '';
  document.getElementById('auth-title').textContent = mode === 'register' ? 'הצטרפות ל-go-sub' : 'התחברות';
  document.getElementById('auth-submit-btn').textContent = mode === 'register' ? 'הצטרף' : 'התחבר';
  document.getElementById('auth-switch-text').textContent = mode === 'register' ? 'יש לך חשבון?' : 'אין לך חשבון?';
  document.getElementById('auth-switch-link').textContent = mode === 'register' ? 'התחבר' : 'הצטרף';
  document.getElementById('auth-modal').showModal();
}
function toggleAuthMode(e) { e.preventDefault(); openAuthModal(authMode === 'register' ? 'login' : 'register'); }
function handleAuth(e) {
  e.preventDefault();
  const username = document.getElementById('auth-username').value;
  const password = document.getElementById('auth-password').value;
  const err = document.getElementById('auth-error');
  let users = DB.getUsers();
  if (authMode === 'register') {
    if (users.find(u => u.username === username)) { err.textContent = 'שם משתמש תפוס.'; return; }
    const newUser = { username, password };
    users.push(newUser); DB.saveUsers(users); DB.setCurrentUser(newUser);
  } else {
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) { err.textContent = 'שם או סיסמה שגויים.'; return; }
    DB.setCurrentUser(user);
  }
  closeModal('auth-modal'); renderAuthArea();
  if (AppState.pendingRedirect) {
    const target = AppState.pendingRedirect;
    AppState.pendingRedirect = null;
    if (window.location.hash === target) router(); else window.location.hash = target;
  }
}
function logout() { DB.logout(); renderAuthArea(); window.location.hash = '#home'; }
function renderAuthArea() {
  const user = DB.getCurrentUser();
  const container = document.getElementById('auth-area');
  if (user) container.innerHTML = `<a href="#profile" class="btn btn-outline btn-sm" style="border-radius:20px;">👤 ${user.username}</a><button class="btn btn-outline btn-sm" onclick="logout()">התנתק</button>`;
  else container.innerHTML = `<button class="btn btn-primary btn-sm" onclick="openAuthModal('register')">הצטרף עכשיו</button>`;
}
function closeModal(id) { document.getElementById(id).close(); }
document.querySelectorAll('dialog').forEach(d => { d.addEventListener('click', (e) => { if (e.target === d) d.close(); }); });
