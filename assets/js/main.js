/* ==========================================================================
   CodeThrive Photography Studio - Main UI Interactions & Animations
   Handles Header scroll, Mobile Drawer, Photography Package Modals, Lightbox & Filtering
   Developer: Hemamalini S | CODETHRIVE INFOTECH [CTI5492026]
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Sticky Header Scroll Effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 2. Mobile Drawer Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = navMenu.classList.contains('active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });

    // Close drawer when clicking outside
    document.addEventListener('click', function (e) {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      }
    });

    // Close drawer when clicking a destination link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      });
    });
  }

  // 3. Dynamic Photography Packages Grid & Filtering
  const packagesContainer = document.getElementById('packagesContainer');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (packagesContainer && typeof packagesData !== 'undefined') {
    // Check URL parameters for filter or package
    const urlParams = new URLSearchParams(window.location.search);
    const urlFilter = urlParams.get('filter');
    const urlPackage = urlParams.get('package');

    if (urlFilter) {
      filterBtns.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-filter') === urlFilter);
      });
      const filtered = urlFilter === 'all' ? packagesData : packagesData.filter(pkg => pkg.type === urlFilter || pkg.category === urlFilter);
      renderPackages(filtered);
    } else {
      renderPackages(packagesData);
    }

    if (urlPackage) {
      setTimeout(() => {
        openPackageModal(urlPackage);
      }, 200);
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');
        if (filter === 'all') {
          renderPackages(packagesData);
        } else {
          const filtered = packagesData.filter(pkg => pkg.type === filter || pkg.category === filter);
          renderPackages(filtered);
        }
      });
    });
  }

  function renderPackages(data) {
    if (!packagesContainer) return;
    packagesContainer.innerHTML = '';

    if (data.length === 0) {
      packagesContainer.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 3rem; color: var(--text-muted);">
        <i class="fa-solid fa-camera-retro" style="font-size: 3rem; margin-bottom: 1rem; color: var(--accent-gold);"></i>
        <h3>No photography packages found for this category.</h3>
      </div>`;
      return;
    }

    data.forEach((pkg, index) => {
      const card = document.createElement('div');
      card.className = `story-plan-card scroll-animate ${pkg.cardOffsetClass || ''}`;
      card.style.animationDelay = `${(index % 4) * 0.08}s`;
      card.innerHTML = `
        <div class="story-plan-img-wrap ${pkg.aspectClass || ''}">
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
      packagesContainer.appendChild(card);
    });

    // Animate newly created cards into view
    setTimeout(() => {
      packagesContainer.querySelectorAll('.story-plan-card').forEach(card => {
        card.classList.add('visible');
      });
    }, 50);
  }

  // 4. Photography Package Modal Handler
  const modalBackdrop = document.getElementById('packageModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  if (modalCloseBtn && modalBackdrop) {
    modalCloseBtn.addEventListener('click', () => closeModal(modalBackdrop));
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal(modalBackdrop);
    });
  }

  function openPackageModal(pkgId) {
    const pkg = packagesData.find(p => p.id === pkgId);
    if (!pkg || !modalBackdrop) return;

    document.getElementById('modalPkgTitle').innerHTML = `
      <span class="modal-couple-name">${pkg.coupleName}</span>
      <span class="modal-pkg-subtitle">${pkg.title}</span>
    `;
    
    document.getElementById('modalPkgMeta').innerHTML = `
      <span><i class="fa-solid fa-location-dot text-gold"></i> ${pkg.location}</span> | 
      <span><i class="fa-solid fa-camera text-gold"></i> ${pkg.duration}</span> | 
      <span><i class="fa-solid fa-star text-gold"></i> ${pkg.rating} (${pkg.reviews} Reviews)</span> |
      <span style="color: var(--accent-gold); font-weight: 700;"><i class="fa-solid fa-tag text-gold"></i> From ₹${pkg.basePrice.toLocaleString('en-IN')}</span>
    `;

    // Render Event Schedule / Itinerary
    const timelineContainer = document.getElementById('modalItineraryTimeline');
    timelineContainer.innerHTML = `
      <div class="modal-quote-box">
        <i class="fa-solid fa-quote-left" style="color: var(--accent-gold); margin-right: 6px;"></i>
        ${pkg.quote}
      </div>
    `;
    
    pkg.itinerary.forEach(day => {
      const dayEl = document.createElement('div');
      dayEl.className = 'itinerary-day';
      dayEl.innerHTML = `
        <h4>${day.title}</h4>
        <p>${day.desc}</p>
      `;
      timelineContainer.appendChild(dayEl);
    });

    // Render Deliverables (Inclusions & Exclusions)
    const incList = document.getElementById('modalInclusions');
    incList.innerHTML = pkg.inclusions.map(inc => `<li><i class="fa-solid fa-circle-check"></i> ${inc}</li>`).join('');

    const excList = document.getElementById('modalExclusions');
    excList.innerHTML = pkg.exclusions.map(exc => `<li><i class="fa-solid fa-circle-xmark"></i> ${exc}</li>`).join('');

    const bookModalBtn = document.getElementById('modalBookNowBtn');
    if (bookModalBtn) {
      bookModalBtn.href = `quote.html?package=${pkg.id}`;
      bookModalBtn.innerHTML = `<i class="fa-solid fa-calculator"></i> Calculate Custom Price for ${pkg.coupleName.split(' ')[0]}'s Plan`;
    }

    modalBackdrop.classList.add('active');
  }

  function closeModal(modal) {
    modal.classList.remove('active');
  }

  // 5. Portfolio Lightbox Viewer
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxVideo = document.getElementById('lightboxVideo');
  const lightboxCap = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  if (galleryItems.length > 0 && lightboxModal) {
    galleryItems.forEach(item => {
      item.addEventListener('click', function () {
        const media = this.querySelector('video, img');
        const title = this.querySelector('h4')?.textContent || '';
        const location = this.querySelector('p')?.textContent || '';
        const isVideo = this.querySelector('video') !== null;

        if (isVideo && media && lightboxVideo) {
          lightboxImg.style.display = 'none';
          lightboxVideo.style.display = 'block';
          lightboxVideo.src = media.currentSrc || media.src;
          lightboxVideo.currentTime = 0;
          lightboxVideo.play().catch(() => {});
        } else if (media) {
          lightboxVideo?.pause();
          lightboxVideo && (lightboxVideo.style.display = 'none');
          lightboxImg.style.display = 'block';
          lightboxImg.src = media.currentSrc || media.src;
        }

        lightboxCap.textContent = `${title} - ${location}`;
        lightboxModal.classList.add('active');
      });
    });

    lightboxClose?.addEventListener('click', () => {
      lightboxVideo?.pause();
      if (lightboxVideo) {
        lightboxVideo.currentTime = 0;
        lightboxVideo.style.display = 'none';
        lightboxVideo.removeAttribute('src');
        lightboxVideo.load();
      }
      lightboxImg.style.display = 'block';
      lightboxModal.classList.remove('active');
    });

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxVideo?.pause();
        if (lightboxVideo) {
          lightboxVideo.currentTime = 0;
          lightboxVideo.style.display = 'none';
          lightboxVideo.removeAttribute('src');
          lightboxVideo.load();
        }
        lightboxImg.style.display = 'block';
        lightboxModal.classList.remove('active');
      }
    });
  }

  // 6. Animated Counter for Studio Stats
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    let animated = false;
    window.addEventListener('scroll', function () {
      const statsSection = document.querySelector('.stats-section');
      if (statsSection && !animated) {
        const pos = statsSection.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
          animated = true;
          statNumbers.forEach(num => {
            const target = parseInt(num.getAttribute('data-target'));
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                num.textContent = target + (num.hasAttribute('data-plus') ? '+' : '');
                clearInterval(timer);
              } else {
                num.textContent = Math.floor(current) + (num.hasAttribute('data-plus') ? '+' : '');
              }
            }, 30);
          });
        }
      }
    });
  }

  // 7. Hero Background Image Slider (Slides every 3 sec)
  const heroSliderTrack = document.getElementById('heroSliderTrack');
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroPrevBtn = document.getElementById('heroPrevBtn');
  const heroNextBtn = document.getElementById('heroNextBtn');
  const heroDots = document.querySelectorAll('#heroSliderDots .dot');
  const heroSection = document.getElementById('heroSection');

  if (heroSliderTrack && heroSlides.length > 0) {
    let currentSlide = 0;
    const totalSlides = heroSlides.length;
    const slideIntervalDuration = 3000; // 3 seconds per slide
    let slideTimer = null;

    function goToSlide(index) {
      if (index < 0) {
        currentSlide = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentSlide = 0;
      } else {
        currentSlide = index;
      }

      heroSliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

      heroSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
      });

      heroDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    function startAutoSlide() {
      stopAutoSlide();
      slideTimer = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, slideIntervalDuration);
    }

    function stopAutoSlide() {
      if (slideTimer) clearInterval(slideTimer);
    }

    heroPrevBtn?.addEventListener('click', () => {
      goToSlide(currentSlide - 1);
      startAutoSlide();
    });

    heroNextBtn?.addEventListener('click', () => {
      goToSlide(currentSlide + 1);
      startAutoSlide();
    });

    heroDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        goToSlide(i);
        startAutoSlide();
      });
    });

    if (heroSection) {
      heroSection.addEventListener('mouseenter', stopAutoSlide);
      heroSection.addEventListener('mouseleave', startAutoSlide);
    }

    // Start 3-second slider
    startAutoSlide();
  }

  // 8. Scroll-triggered Reveal Animations (IntersectionObserver)
  const scrollElements = document.querySelectorAll('.scroll-animate');
  if (scrollElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.style.animationDelay || '0s';
          const delayMs = parseFloat(delay) * 1000;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delayMs);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    scrollElements.forEach(el => observer.observe(el));
  }

  // 10. Testimonials Mobile Auto-Slider (1 Row Auto-Play)
  const testimonialsWrapper = document.getElementById('testimonialsSlider');
  const testimonialsTrack = document.getElementById('testimonialsTrack');
  const testimonialsDotsContainer = document.getElementById('testimonialsDots');

  if (testimonialsWrapper && testimonialsTrack) {
    const testimonialCards = testimonialsTrack.querySelectorAll('.testimonial-card');
    const totalCards = testimonialCards.length;
    let currentTestimonial = 0;
    let testimonialTimer = null;
    const intervalDuration = 3500; // 3.5 seconds auto-advance

    // Render navigation dots
    if (testimonialsDotsContainer && totalCards > 1) {
      testimonialsDotsContainer.innerHTML = '';
      testimonialCards.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `testimonial-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to review ${idx + 1}`);
        dot.addEventListener('click', () => {
          goToTestimonial(idx);
          startAutoTestimonials();
        });
        testimonialsDotsContainer.appendChild(dot);
      });
    }

    function isMobileView() {
      return window.innerWidth <= 768;
    }

    function updateDots() {
      if (!testimonialsDotsContainer) return;
      const dots = testimonialsDotsContainer.querySelectorAll('.testimonial-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentTestimonial);
      });
    }

    function goToTestimonial(index) {
      if (!isMobileView()) {
        testimonialsTrack.style.transform = '';
        return;
      }

      if (index < 0) {
        currentTestimonial = totalCards - 1;
      } else if (index >= totalCards) {
        currentTestimonial = 0;
      } else {
        currentTestimonial = index;
      }

      testimonialsTrack.style.transform = `translateX(-${currentTestimonial * 100}%)`;
      updateDots();
    }

    function startAutoTestimonials() {
      stopAutoTestimonials();
      if (!isMobileView() || totalCards <= 1) return;
      testimonialTimer = setInterval(() => {
        goToTestimonial(currentTestimonial + 1);
      }, intervalDuration);
    }

    function stopAutoTestimonials() {
      if (testimonialTimer) {
        clearInterval(testimonialTimer);
        testimonialTimer = null;
      }
    }

    // Touch Swipe Handlers for Mobile
    let touchStartX = 0;
    let touchEndX = 0;
    let isTouching = false;

    testimonialsWrapper.addEventListener('touchstart', (e) => {
      stopAutoTestimonials();
      touchStartX = e.changedTouches[0].screenX;
      isTouching = true;
    }, { passive: true });

    testimonialsWrapper.addEventListener('touchend', (e) => {
      if (!isTouching) return;
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      isTouching = false;
      startAutoTestimonials();
    }, { passive: true });

    testimonialsWrapper.addEventListener('mouseenter', stopAutoTestimonials);
    testimonialsWrapper.addEventListener('mouseleave', startAutoTestimonials);

    function handleSwipe() {
      const diffX = touchStartX - touchEndX;
      if (Math.abs(diffX) > 40) {
        if (diffX > 0) {
          // Swiped Left -> Next Review
          goToTestimonial(currentTestimonial + 1);
        } else {
          // Swiped Right -> Previous Review
          goToTestimonial(currentTestimonial - 1);
        }
      }
    }

    // Responsive Window Resize handling
    window.addEventListener('resize', () => {
      if (isMobileView()) {
        goToTestimonial(currentTestimonial);
        startAutoTestimonials();
      } else {
        stopAutoTestimonials();
        testimonialsTrack.style.transform = '';
      }
    });

    // Start auto slide if page loads in mobile view
    if (isMobileView()) {
      startAutoTestimonials();
    }
  }
});

