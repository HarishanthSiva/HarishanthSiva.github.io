/**
 * The Elite Peak — Live Google Reviews Loader
 *
 * Uses the Google Maps JavaScript API (Places Library) to fetch
 * real-time rating and top reviews directly from Google.
 *
 * ─────────────────────────────────────────────
 *  HOW TO SET UP (one-time, 5 minutes):
 *  1. Go to https://console.cloud.google.com/
 *  2. Create a project (or use existing)
 *  3. Enable "Maps JavaScript API" and "Places API"
 *  4. Create an API Key → restrict it to your domain
 *  5. Find your Place ID:
 *     • Go to https://developers.google.com/maps/documentation/places/web-service/place-id
 *     • Search for "The Elite Peak Hatton Sri Lanka"
 *     • Copy the Place ID (looks like: ChIJ...)
 *  6. Fill in GOOGLE_API_KEY and PLACE_ID below
 * ─────────────────────────────────────────────
 */

const REVIEWS_CONFIG = {
  GOOGLE_API_KEY: 'YOUR_GOOGLE_API_KEY_HERE',   // ← paste your key
  PLACE_ID:       'YOUR_PLACE_ID_HERE',          // ← paste Place ID (ChIJ...)

  // Fallback data shown if API key is not set or request fails
  FALLBACK: {
    rating: 4.7,
    userRatingCount: 154,
    reviews: [
      {
        authorName: 'Shalaka Gamage',
        rating: 5,
        text: 'The restaurant is very clean, calm, and well maintained. We had Mixed Rice and Chicken Biryani along with Chicken Devilled — all were absolutely delicious. Highly recommended!',
        relativeTime: '2 months ago',
        initials: 'SG'
      },
      {
        authorName: 'sophix sound',
        rating: 5,
        text: 'Amazing food!! Had rice and curry and fried rice — both were fantastic. Very friendly staff members and a really cozy place. Will definitely be coming back!',
        relativeTime: '7 months ago',
        initials: 'SS'
      },
      {
        authorName: 'Adrian Corera',
        rating: 4,
        text: 'A quaint property with a charming restaurant set against a lush green hillock. They serve both local and international cuisine and the food was very flavourful. A lovely spot in Hatton.',
        relativeTime: 'a year ago',
        initials: 'AC'
      },
      {
        authorName: 'Malintha',
        rating: 5,
        text: 'My stay at The Elite Peak was fantastic! The staff were incredibly friendly and made me feel right at home. The foods and beverages were absolutely delicious. Highly recommend!',
        relativeTime: 'a year ago',
        initials: 'M'
      },
      {
        authorName: 'Tània Amills',
        rating: 5,
        text: 'This place is amazing! The food is delicious and the service is spectacular. I ate outside with beautiful views — it was a perfect dining experience. Strongly recommend a visit!',
        relativeTime: 'a year ago',
        initials: 'TA'
      },
      {
        authorName: 'Esme Heath',
        rating: 5,
        text: 'Ate at the restaurant and loved it! Lots of vegetarian options to choose from. Beautiful location with indoor seating and a lovely garden view. A wonderful place to dine.',
        relativeTime: 'a year ago',
        initials: 'EH'
      }
    ]
  }
};

/* ─── Render helpers ─── */

function starHTML(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      html += '<span class="rv-star rv-star-full">★</span>';
    } else if (i - rating < 1 && i - rating > 0) {
      html += '<span class="rv-star rv-star-half">★</span>';
    } else {
      html += '<span class="rv-star rv-star-empty">★</span>';
    }
  }
  return html;
}

function renderReviews(data) {
  const { rating, userRatingCount, reviews } = data;

  /* ── Update every rating badge on the page ── */
  document.querySelectorAll('[data-live-rating]').forEach(el => {
    el.textContent = rating.toFixed(1);
  });
  document.querySelectorAll('[data-live-count]').forEach(el => {
    el.textContent = userRatingCount.toLocaleString();
  });
  document.querySelectorAll('[data-live-stars]').forEach(el => {
    el.innerHTML = starHTML(rating);
  });

  /* ── Build review cards ── */
  const containers = document.querySelectorAll('[data-reviews-container]');
  if (!containers.length) return;

  const cards = reviews.slice(0, 6).map((r, i) => {
    const initials = r.initials || (r.authorName || 'G').split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
    const photoHTML = r.profilePhotoUrl
      ? `<img src="${r.profilePhotoUrl}" alt="${r.authorName}" class="rv-avatar-img" />`
      : `<div class="rv-avatar-placeholder">${initials}</div>`;

    const textTruncated = r.text && r.text.length > 200
      ? r.text.slice(0, 200) + '…'
      : (r.text || '');

    return `
      <div class="rv-card" style="animation-delay:${i * 0.1}s">
        <div class="rv-card-header">
          <div class="rv-avatar">${photoHTML}</div>
          <div class="rv-author">
            <span class="rv-author-name">${r.authorName || 'Google User'}</span>
            <span class="rv-time">${r.relativeTime || r.relativeTimeDescription || ''}</span>
          </div>
          <div class="rv-google-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
        </div>
        <div class="rv-stars">${starHTML(r.rating)}</div>
        <p class="rv-text">${textTruncated}</p>
      </div>
    `;
  }).join('');

  containers.forEach(container => {
    container.innerHTML = `<div class="rv-track">${cards}</div>`;
    initCarousel(container);
  });
}

/* ─── Carousel drag/swipe ─── */
function initCarousel(container) {
  const track = container.querySelector('.rv-track');
  if (!track) return;
  let isDown = false, startX = 0, scrollLeft = 0;
  track.addEventListener('mousedown', e => { isDown = true; startX = e.pageX - track.offsetLeft; scrollLeft = track.scrollLeft; track.style.cursor = 'grabbing'; });
  track.addEventListener('mouseleave', () => { isDown = false; track.style.cursor = 'grab'; });
  track.addEventListener('mouseup', () => { isDown = false; track.style.cursor = 'grab'; });
  track.addEventListener('mousemove', e => { if (!isDown) return; e.preventDefault(); const x = e.pageX - track.offsetLeft; track.scrollLeft = scrollLeft - (x - startX); });
  // Touch
  track.addEventListener('touchstart', e => { startX = e.touches[0].pageX - track.offsetLeft; scrollLeft = track.scrollLeft; }, { passive: true });
  track.addEventListener('touchmove', e => { const x = e.touches[0].pageX - track.offsetLeft; track.scrollLeft = scrollLeft - (x - startX); }, { passive: true });
}

/* ─── Google Places API Loader ─── */

function loadLiveReviews() {
  const { GOOGLE_API_KEY, PLACE_ID, FALLBACK } = REVIEWS_CONFIG;

  if (!GOOGLE_API_KEY || GOOGLE_API_KEY === 'YOUR_GOOGLE_API_KEY_HERE' ||
      !PLACE_ID      || PLACE_ID      === 'YOUR_PLACE_ID_HERE') {
    // No API key configured — use fallback data
    renderReviews(FALLBACK);
    return;
  }

  // Load Maps JS API dynamically, then query Places
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&callback=_elitePeakMapsReady`;
  script.async = true; script.defer = true;
  document.head.appendChild(script);

  window._elitePeakMapsReady = function () {
    // Hidden div needed by PlacesService
    const dummy = document.createElement('div');
    const service = new google.maps.places.PlacesService(dummy);
    service.getDetails(
      {
        placeId: PLACE_ID,
        fields: ['name', 'rating', 'user_ratings_total', 'reviews']
      },
      (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && place) {
          renderReviews({
            rating: place.rating || FALLBACK.rating,
            userRatingCount: place.user_ratings_total || FALLBACK.userRatingCount,
            reviews: (place.reviews || []).map(r => ({
              authorName: r.author_name,
              rating: r.rating,
              text: r.text,
              relativeTime: r.relative_time_description,
              profilePhotoUrl: r.profile_photo_url
            }))
          });
        } else {
          renderReviews(FALLBACK);
        }
      }
    );
  };
}

/* Boot when DOM is ready */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadLiveReviews);
} else {
  loadLiveReviews();
}
