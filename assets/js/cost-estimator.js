/* ==========================================================================
   Nuptial Studio - Automatic Cost Estimator & Booking
   Dynamic pricing math, form validation, and instant WhatsApp booking integration
   Developer: Hemamalini S | CODETHRIVE INFOTECH [CTI5492026]
   Client: Nuptial Studio, Coimbatore
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  const estimatorForm = document.getElementById('costEstimatorForm');
  const packageSelect = document.getElementById('estPackageSelect');
  const travelDateInput = document.getElementById('estTravelDate');
  const durationInput = document.getElementById('estDuration');
  const crewSelect = document.getElementById('estCrew');

  // Optional Addons
  const addonDrone = document.getElementById('addonDrone');
  const addonReel = document.getElementById('addonReel');
  const addonAlbum = document.getElementById('addonAlbum');
  const addonMusicVideo = document.getElementById('addonMusicVideo');

  // Display UI Elements
  const displayPackageName = document.getElementById('dispPackageName');
  const displayBaseRate = document.getElementById('dispBaseRate');
  const displayCrewTier = document.getElementById('dispCrewTier');
  const displayAddonsTotal = document.getElementById('dispAddonsTotal');
  const displayGst = document.getElementById('dispGst');
  const displayTotalPrice = document.getElementById('dispTotalPrice');

  // Set minimum travel date to tomorrow
  if (travelDateInput) {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    travelDateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  // Populate Package Select Options
  if (packageSelect && typeof packagesData !== 'undefined') {
    packageSelect.innerHTML = '<option value="">-- Select Photography Package --</option>';
    packagesData.forEach(pkg => {
      const opt = document.createElement('option');
      opt.value = pkg.id;
      opt.textContent = `${pkg.title} - ₹${pkg.basePrice.toLocaleString('en-IN')}`;
      packageSelect.appendChild(opt);
    });

    // Pre-select via URL param if present
    const urlParams = new URLSearchParams(window.location.search);
    const prePkg = urlParams.get('package');
    if (prePkg) {
      packageSelect.value = prePkg;
    }
  }

  // Calculation function
  function calculateCost() {
    if (!packageSelect || !packageSelect.value) {
      resetDisplay();
      return;
    }

    const selectedPkg = packagesData.find(p => p.id === packageSelect.value);
    if (!selectedPkg) {
      resetDisplay();
      return;
    }

    const durationDays = Math.max(1, parseInt(durationInput?.value) || 1);
    const crewMultiplier = parseFloat(crewSelect?.value) || 1.0;

    // Calculate base rate with duration & crew size
    const adjustedBaseRate = Math.round(selectedPkg.basePrice * crewMultiplier * (1 + (durationDays - 1) * 0.45));

    // Calculate optional add-ons
    let addonsTotal = 0;
    if (addonDrone && addonDrone.checked) {
      addonsTotal += 12000 * durationDays; // 4K Drone
    }
    if (addonReel && addonReel.checked) {
      addonsTotal += 8000; // Same day edit reel
    }
    if (addonAlbum && addonAlbum.checked) {
      addonsTotal += 10000; // Extra Luxury Album
    }
    if (addonMusicVideo && addonMusicVideo.checked) {
      addonsTotal += 15000; // Pre-wedding Concept Video
    }

    const subtotal = adjustedBaseRate + addonsTotal;
    const gstAmount = Math.round(subtotal * 0.18); // 18% GST for studio services
    const grandTotal = subtotal + gstAmount;

    // Update DOM
    if (displayPackageName) displayPackageName.textContent = selectedPkg.title;
    if (displayBaseRate) displayBaseRate.textContent = `₹${selectedPkg.basePrice.toLocaleString('en-IN')}`;
    if (displayCrewTier) displayCrewTier.textContent = `${durationDays} Day(s) (${crewSelect.options[crewSelect.selectedIndex].text.split('(')[0].trim()})`;
    if (displayAddonsTotal) displayAddonsTotal.textContent = `₹${addonsTotal.toLocaleString('en-IN')}`;
    if (displayGst) displayGst.textContent = `₹${gstAmount.toLocaleString('en-IN')}`;
    if (displayTotalPrice) displayTotalPrice.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

    return {
      packageTitle: selectedPkg.title,
      durationDays: durationDays,
      totalPrice: grandTotal
    };
  }

  function resetDisplay() {
    if (displayPackageName) displayPackageName.textContent = "No package selected";
    if (displayBaseRate) displayBaseRate.textContent = "₹0";
    if (displayCrewTier) displayCrewTier.textContent = "Standard";
    if (displayAddonsTotal) displayAddonsTotal.textContent = "₹0";
    if (displayGst) displayGst.textContent = "₹0";
    if (displayTotalPrice) displayTotalPrice.textContent = "₹0";
  }

  // Event listeners for recalculation
  const inputsToListen = [
    packageSelect, travelDateInput, durationInput, crewSelect,
    addonDrone, addonReel, addonAlbum, addonMusicVideo
  ];

  inputsToListen.forEach(input => {
    if (input) {
      input.addEventListener('change', calculateCost);
      input.addEventListener('input', calculateCost);
    }
  });

  // Run initial calculation
  calculateCost();

  // Form submission & validation
  if (estimatorForm) {
    estimatorForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      const nameInput = document.getElementById('custName');
      if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
        showError(nameInput, "Please enter your full name (at least 3 characters).");
        isValid = false;
      } else {
        clearError(nameInput);
      }

      // Validate Phone (10 digits)
      const phoneInput = document.getElementById('custPhone');
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(phoneInput.value.trim())) {
        showError(phoneInput, "Please enter a valid 10-digit Indian phone number starting with 6-9.");
        isValid = false;
      } else {
        clearError(phoneInput);
      }

      // Validate Email
      const emailInput = document.getElementById('custEmail');
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        showError(emailInput, "Please enter a valid email address.");
        isValid = false;
      } else {
        clearError(emailInput);
      }

      // Validate Package Choice
      if (!packageSelect.value) {
        showError(packageSelect, "Please select a photography package.");
        isValid = false;
      } else {
        clearError(packageSelect);
      }

      // Validate Event Date
      if (!travelDateInput.value) {
        showError(travelDateInput, "Please select your event date.");
        isValid = false;
      } else {
        clearError(travelDateInput);
      }

      if (!isValid) return;

      // Processing clean submission & WhatsApp link trigger
      const calcResult = calculateCost();
      const name = sanitizeInput(nameInput.value.trim());
      const phone = sanitizeInput(phoneInput.value.trim());
      const email = sanitizeInput(emailInput.value.trim());
      const date = travelDateInput.value;
      const notes = sanitizeInput(document.getElementById('custNotes')?.value.trim() || 'None');

      // Formatted WhatsApp booking text for Nuptial Studio
      const waMsg = `Hi Nuptial Studio!\n\n` +
        `I would like to book/enquire about photography services:\n` +
        `*Name:* ${name}\n` +
        `*Phone:* ${phone}\n` +
        `*Email:* ${email}\n` +
        `*Package:* ${calcResult.packageTitle}\n` +
        `*Event Date:* ${date}\n` +
        `*Event Duration:* ${calcResult.durationDays} Day(s)\n` +
        `*Estimated Total Price:* ₹${calcResult.totalPrice.toLocaleString('en-IN')}\n` +
        `*Special Notes:* ${notes}\n\n` +
        `Please confirm date availability and crew slot. Thank you!`;

      const whatsappURL = `https://wa.me/919876543210?text=${encodeURIComponent(waMsg)}`;

      showToast("Enquiry submitted! Opening WhatsApp...");

      setTimeout(() => {
        window.open(whatsappURL, '_blank');
      }, 1200);
    });
  }

  function showError(input, msg) {
    input.classList.add('is-invalid');
    let feedback = input.nextElementSibling;
    if (!feedback || !feedback.classList.contains('invalid-feedback')) {
      feedback = document.createElement('div');
      feedback.className = 'invalid-feedback';
      input.parentNode.appendChild(feedback);
    }
    feedback.textContent = msg;
    feedback.style.display = 'block';
  }

  function clearError(input) {
    input.classList.remove('is-invalid');
    const feedback = input.parentNode.querySelector('.invalid-feedback');
    if (feedback) {
      feedback.style.display = 'none';
    }
  }

  function sanitizeInput(str) {
    return str.replace(/[&<>"']/g, function (m) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }[m];
    });
  }

  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
});
