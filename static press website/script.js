


(function setDate() {
  const el = document.getElementById('live-date');
  if (!el) return;
  const now = new Date();
  const opts = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  el.textContent = now.toLocaleDateString('en-GB', opts);
})();


(function setReaders() {
  const el = document.getElementById('reading-count');
  if (!el) return;
  const count = Math.floor(Math.random() * 300) + 120;
  el.textContent = count + ' reading now';
})();


const navLinks = document.querySelectorAll('.nav-link');
const postCards = document.querySelectorAll('.post-card');
const heroPost  = document.querySelector('.hero-post');
const noResults = document.getElementById('no-results');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    const filter = this.dataset.filter;
    let visible = 0;


    if (heroPost) {
      const heroSection = heroPost.closest('.hero-section');
      if (filter === 'all' || heroPost.dataset.category === filter) {
        heroSection.style.display = '';
        visible++;
      } else {
        heroSection.style.display = 'none';
      }
    }

    
    postCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
        visible++;
      } else {
        card.style.display = 'none';
      }
    });

    noResults.classList.toggle('hidden', visible > 0);
  });
});


searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase().trim();
  let visible = 0;

  
  if (heroPost) {
    const heroSection = heroPost.closest('.hero-section');
    const heroText = heroPost.textContent.toLowerCase();
    if (!query || heroText.includes(query)) {
      heroSection.style.display = '';
      visible++;
    } else {
      heroSection.style.display = 'none';
    }
  }

  
  postCards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (!query || text.includes(query)) {
      card.style.display = '';
      visible++;
    } else {
      card.style.display = 'none';
    }
  });

  noResults.classList.toggle('hidden', visible > 0);

  
  if (query) {
    navLinks.forEach(l => l.classList.remove('active'));
  } else {
    navLinks.forEach(l => {
      if (l.dataset.filter === 'all') l.classList.add('active');
    });
  }
});

const subscribeBtn = document.getElementById('subscribe-btn');
const emailInput   = document.getElementById('email-input');
const subscribeMsg = document.getElementById('subscribe-msg');

subscribeBtn.addEventListener('click', function () {
  const email = emailInput.value.trim();

  if (!email || !email.includes('@')) {
    subscribeMsg.style.color = '#b5401a';
    subscribeMsg.textContent = '✗ Please enter a valid email address.';
    return;
  }

  subscribeMsg.style.color = '#5cad7a';
  subscribeMsg.textContent = '✓ You\'re on the list. Welcome to The Press.';
  emailInput.value = '';

  setTimeout(() => { subscribeMsg.textContent = ''; }, 5000);
});

emailInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') subscribeBtn.click();
});


const posts = {
  hero: {
    title: 'The Last Days of the Handmade Web',
    byline: 'By M. Holloway &mdash; Technology &mdash; 8 min read',
    body: [
      'There was a time, not so long ago, when the internet felt like a series of handmade gifts — imperfect, personal, and strange. GeoCities pages with tiled background images and comic sans in forty colours. Guestbooks. Hit counters. Animated flames dancing in the margins.',
      'Today\'s web is smooth. Optimised. A/B tested into corporate submission. Every button the same blue. Every layout a variant of twelve proven patterns. The rough edges have been sanded away, and with them, some essential humanity.',
      'We spoke to a generation of web makers who remember the old days — not with nostalgia for its own sake, but because they believe something was genuinely lost when the handmade web gave way to the platform web.',
      '"It wasn\'t about the aesthetics," says one former GeoCities resident who now works as a designer in Helsinki. "It was about ownership. Your page was yours. Nobody owned the algorithm that decided whether people saw it."',
      'The static site renaissance — a quiet movement of developers abandoning React for plain HTML and CSS — may be the closest we get to recovering what was lost. It won\'t be the same. But it\'s a start.',
    ]
  },
  vinyl: {
    title: 'Why Vinyl Will Outlive Streaming',
    byline: 'By J. Petrov &mdash; Culture &mdash; 5 min read',
    body: [
      'Walk into any independent record shop on a Saturday afternoon and you\'ll find it full. Not nostalgic sixty-somethings rifling through classic rock, but teenagers — people who grew up on Spotify, discovering something they didn\'t know they were missing.',
      'The crackle of a needle finding a groove is, according to audiophiles, a feature rather than a flaw. It is the sound of something being played. Analogue warmth in a world of frictionless digital perfection.',
      'Sales figures bear this out. Vinyl has now outsold CDs for three consecutive years. Something is happening that nobody in the music industry quite predicted.',
      '"It\'s about intentionality," says one Oslo record shop owner who asked not to be named. "When you put a record on, you commit. You sit with it. Streaming makes music furniture. Vinyl makes it an event."',
    ]
  },
  morning: {
    title: 'In Defence of Slow Mornings',
    byline: 'By A. Fontaine &mdash; Opinion &mdash; 4 min read',
    body: [
      'The morning routine industrial complex would have you believe that your first two hours are the most important of the day — the period during which, if you are not journalling, meditating, exercising, and consuming seventeen supplements, you have already failed.',
      'There is, I would argue, another way. It involves sitting with a cup of tea. Looking at a wall. Not achieving anything in particular.',
      'The fetishisation of productive mornings is a recent invention, largely driven by self-help books and the LinkedIn posts of venture capitalists who wake at 4:30am. For most of human history, mornings were simply the start of the day, not a competitive sport.',
      'I am not arguing for laziness. I am arguing for the radical act of easing into consciousness — of allowing the transition from sleep to wakefulness to be gentle rather than optimised.',
    ]
  },
  travel: {
    title: 'Postcards from Nowhere in Particular',
    byline: 'By S. Mukherjee &mdash; Travel &mdash; 7 min read',
    body: [
      'I booked the first train with a vague sense of direction and a notebook that had seen better days. The plan was to have no plan — a decision that felt liberating until the moment I found myself in a station in a town I could not pronounce, at midnight, with no hotel.',
      'It turned out to be one of the finest evenings of the trip. The station café was run by a woman named Hilda who made coffee so strong it was practically a moral position. We talked until the last train left without me.',
      'There is a kind of travel that the internet has made harder — the kind defined by not knowing what comes next. Every destination now has a ratings aggregate, a set of must-do experiences, an optimal route.',
      'My notebook from the trip is full of things I didn't know I would find: the smell of a bakery at 6am, a wrong turn that led to a canal, three hours on a platform with a retired schoolteacher who knew the entire history of the railway by heart.',
    ]
  },
  terminal: {
    title: 'The Terminal Is Not Dead',
    byline: 'By R. Nakamura &mdash; Technology &mdash; 6 min read',
    body: [
      'Every decade or so, someone writes the obituary of the command line. GUIs will replace it. Then graphical IDEs. Then cloud interfaces. Then AI will make typing commands obsolete.',
      'The terminal persists. It is, in some respects, the most stable piece of computing infrastructure that exists — a text interface that has remained fundamentally the same since the seventies, quietly running most of the internet.',
      'What the command line offers that graphical interfaces cannot is composability. Small tools, chained together, doing exactly what you tell them. No more, no less.',
      '"It\'s the closest thing to a conversation with the machine," says one systems engineer in Tokyo. "When a GUI breaks, you see a broken interface. When the terminal breaks, it tells you precisely what went wrong and why."',
      'The rising generation of developers who grew up on visual tools are discovering this for themselves. The terminal subreddit has never had more members. Something about it satisfies an itch that drag-and-drop cannot scratch.',
    ]
  },
  books: {
    title: 'On Reading Paper Books in 2026',
    byline: 'By C. Osei &mdash; Culture &mdash; 3 min read',
    body: [
      'The death of the book has been announced so many times that the announcement itself has become a kind of genre. E-readers would kill it. Then tablets. Then TikTok, or whatever comes after TikTok.',
      'Yet here we are. Bookshops are, in many cities, multiplying. The large chains are struggling, but the independents — curated, opinionated, staffed by people who have actually read the books — are quietly thriving.',
      'There is something about physical books that resists replacement: the marginalia of previous owners, the smell of aged paper, the way a dog-eared page marks a moment in your own life as much as the text\'s.',
      'A book is a technology that is already finished. It requires no updates. It never runs out of battery. It works in sunlight. These are not small advantages.',
    ]
  },
  newsletter: {
    title: 'The Return of the Newsletter',
    byline: 'By M. Holloway &mdash; Opinion &mdash; 5 min read',
    body: [
      'The newsletter was supposed to be dead. It had been replaced by the blog, then by Twitter, then by the algorithmic feed — a conveyor belt of content that never asked you to opt in because you never really had the chance to opt out.',
      'And yet. The newsletter has returned, and this time it feels different. The writers who have moved to email are not doing so out of nostalgia. They are doing so because it is the last medium that belongs entirely to the relationship between writer and reader.',
      'No algorithm decides who sees it. No platform can shadow-ban it into irrelevance. If you subscribed, you receive it. If you no longer want it, you unsubscribe. The transaction is clean.',
      '"It\'s the closest thing I\'ve found to the old web," says one writer who left a major publication to write a newsletter full-time. "People who are here are here on purpose. That changes what you\'re willing to write, and what they\'re willing to read."',
    ]
  }
};

const modalOverlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const modalClose   = document.getElementById('modal-close');

function openPost(key) {
  const post = posts[key];
  if (!post) return;

  const bodyHTML = post.body.map(p => `<p>${p}</p>`).join('');

  modalContent.innerHTML = `
    <h2>${post.title}</h2>
    <p class="modal-byline">${post.byline}</p>
    ${bodyHTML}
  `;

  modalOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.add('hidden');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', function (e) {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});
