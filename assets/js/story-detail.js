/* ==========================================================================
   CodeThrive Photography Studio - Story & Event Details Logic
   Developer: Hemamalini S | CODETHRIVE INFOTECH [CTI5492026]
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = navMenu.classList.contains('active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });

    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      }
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // 2. Parse Package ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const pkgId = urlParams.get('id') || (packagesData.length > 0 ? packagesData[0].id : null);

  const currentPkg = packagesData.find(p => p.id === pkgId) || packagesData[0];

  if (!currentPkg) return;

  // 3. Populate Hero Section
  document.title = `${currentPkg.coupleName} - Wedding Photography Story | Nuptial Studio`;
  document.getElementById('breadcrumbCoupleName').textContent = currentPkg.coupleName;
  document.getElementById('heroPkgTitle').textContent = currentPkg.title;
  document.getElementById('heroCoupleName').textContent = currentPkg.coupleName;
  document.getElementById('heroQuote').innerHTML = `<i class="fa-solid fa-quote-left" style="color: var(--accent-gold); margin-right: 8px;"></i>${currentPkg.quote}`;

  document.getElementById('metaLocation').textContent = currentPkg.location;
  document.getElementById('metaDuration').textContent = currentPkg.duration;
  document.getElementById('metaRating').textContent = `${currentPkg.rating} (${currentPkg.reviews} Reviews)`;
  document.getElementById('metaBasePrice').textContent = `From ₹${currentPkg.basePrice.toLocaleString('en-IN')}`;

  const heroCoverImg = document.getElementById('heroCoverImg');
  if (heroCoverImg) {
    heroCoverImg.src = currentPkg.image;
    heroCoverImg.alt = `${currentPkg.coupleName} Wedding Cover`;
  }

  const customEstimateBtn = document.getElementById('customEstimateBtn');
  if (customEstimateBtn) {
    customEstimateBtn.href = `quote.html?package=${currentPkg.id}`;
  }

  // 4. Render Event Gallery Photos (6 to 10 photos of different outfits & moments)
  const photosContainer = document.getElementById('storyPhotosContainer');
  const gallery = currentPkg.gallery || [
    { src: currentPkg.image, caption: "Signature Wedding Moment", eventTag: "Wedding Highlights", outfit: "Traditional Wedding Attire" }
  ];

  let currentPhotoIndex = 0;

  if (photosContainer) {
    photosContainer.innerHTML = '';
    gallery.forEach((photo, idx) => {
      const card = document.createElement('div');
      card.className = 'story-photo-card';
      card.innerHTML = `
        <div class="story-photo-img-holder">
          <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
          <span class="photo-zoom-icon"><i class="fa-solid fa-expand"></i></span>
        </div>
        <div class="story-photo-body">
          <h4 class="story-photo-caption">${photo.caption}</h4>
          <div class="story-outfit-tag">
            <i class="fa-solid fa-vest"></i>
            <span>${photo.outfit}</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openLightbox(idx);
      });

      photosContainer.appendChild(card);
    });
  }

  // 5. Render Ceremony Schedule / Itinerary
  const timelineContainer = document.getElementById('storyTimeline');
  if (timelineContainer && currentPkg.itinerary) {
    timelineContainer.innerHTML = '';
    currentPkg.itinerary.forEach(item => {
      const step = document.createElement('div');
      step.className = 'itinerary-step';
      step.innerHTML = `
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      `;
      timelineContainer.appendChild(step);
    });
  }

  // 6. Render Deliverables & Pricing Callout
  const inclusionsList = document.getElementById('storyInclusionsList');
  if (inclusionsList && currentPkg.inclusions) {
    inclusionsList.innerHTML = currentPkg.inclusions.map(inc => `
      <li><i class="fa-solid fa-circle-check"></i> <span>${inc}</span></li>
    `).join('');
  }

  const calloutBasePrice = document.getElementById('calloutBasePrice');
  if (calloutBasePrice) {
    calloutBasePrice.textContent = `₹${currentPkg.basePrice.toLocaleString('en-IN')}`;
  }

  const bookPlanBtn = document.getElementById('bookPlanBtn');
  if (bookPlanBtn) {
    bookPlanBtn.href = `quote.html?package=${currentPkg.id}`;
  }

  // 7. Render Related Stories (Other Couples)
  const relatedContainer = document.getElementById('relatedStoriesContainer');
  if (relatedContainer) {
    const otherPkgs = packagesData.filter(p => p.id !== currentPkg.id).slice(0, 4);
    relatedContainer.innerHTML = '';
    otherPkgs.forEach(pkg => {
      const card = document.createElement('div');
      card.className = 'story-plan-card';
      card.innerHTML = `
        <div class="story-plan-img-wrap">
          <a href="story-detail.html?id=${pkg.id}" aria-label="View ${pkg.coupleName} Wedding Story">
            <img src="${pkg.image}" alt="${pkg.coupleName} - ${pkg.title}" loading="lazy">
          </a>
        </div>
        <div class="story-plan-info">
          <h3 class="story-plan-name">${pkg.coupleName}</h3>
          <p class="story-plan-quote">${pkg.quote}</p>
          <div class="story-plan-action">
            <a href="story-detail.html?id=${pkg.id}" class="btn-story-details">
              View Details
            </a>
          </div>
        </div>
      `;
      relatedContainer.appendChild(card);
    });
  }

  // 8. Lightbox Logic
  const lightbox = document.getElementById('storyLightbox');
  const lightboxImg = document.getElementById('lightboxCurrentImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxOutfit = document.getElementById('lightboxOutfit');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  function openLightbox(index) {
    if (!gallery || gallery.length === 0 || !lightbox) return;
    currentPhotoIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    const item = gallery[currentPhotoIndex];
    if (!item) return;
    lightboxImg.src = item.src;
    lightboxCaption.textContent = item.caption;
    lightboxOutfit.textContent = `Ceremony: ${item.eventTag} | Attire: ${item.outfit}`;
  }

  function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % gallery.length;
    updateLightbox();
  }

  function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + gallery.length) % gallery.length;
    updateLightbox();
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', prevPhoto);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', nextPhoto);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextPhoto();
    if (e.key === 'ArrowLeft') prevPhoto();
  });
});
