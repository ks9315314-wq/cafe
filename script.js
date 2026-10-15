/* ============================
   BREW BLISS CAFÉ — SCRIPT.JS
   ============================ */

document.addEventListener("DOMContentLoaded", function () {
  /* ---------- MENU DATA ---------- */
  const menuItems = [
    {
      name: "Cappuccino",
      description:
        "Rich espresso topped with velvety steamed milk and a thick layer of foam.",
      price: "$4.50",
      image:
        "https://images.pexels.com/photos/28496565/pexels-photo-28496565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      name: "Latte",
      description:
        "Smooth espresso blended with creamy steamed milk and delicate latte art.",
      price: "$4.75",
      image:
        "https://images.pexels.com/photos/15801079/pexels-photo-15801079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      name: "Espresso",
      description:
        "A bold, intense shot of pure coffee — the heart of every great drink.",
      price: "$3.25",
      image:
        "https://images.pexels.com/photos/34563915/pexels-photo-34563915.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      name: "Mocha",
      description:
        "Espresso meets rich chocolate and steamed milk, finished with whipped cream.",
      price: "$5.25",
      image:
        "https://images.pexels.com/photos/17558646/pexels-photo-17558646.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      name: "Cold Coffee",
      description:
        "Chilled coffee over ice with milk and a touch of sweetness — refreshingly bold.",
      price: "$4.95",
      image:
        "https://images.pexels.com/photos/38028984/pexels-photo-38028984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
    {
      name: "Chocolate Brownie",
      description:
        "Fudgy, decadent chocolate brownie baked fresh daily — pure indulgence.",
      price: "$3.95",
      image:
        "https://images.pexels.com/photos/38028993/pexels-photo-38028993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    },
  ];

  /* ---------- GALLERY DATA ---------- */
  const galleryItems = [
    "https://images.pexels.com/photos/36851643/pexels-photo-36851643.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/5151354/pexels-photo-5151354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/34493528/pexels-photo-34493528.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/17650199/pexels-photo-17650199.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/3215513/pexels-photo-3215513.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/36848520/pexels-photo-36848520.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/21207660/pexels-photo-21207660.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/2074124/pexels-photo-2074124.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  ];

  /* ---------- RENDER MENU CARDS ---------- */
  const menuGrid = document.getElementById("menuGrid");
  if (menuGrid) {
    menuGrid.innerHTML = menuItems
      .map(
        (item) => `
        <div class="menu-card">
          <div class="menu-card-img">
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
          </div>
          <div class="menu-card-body">
            <h3 class="menu-card-name">${item.name}</h3>
            <p class="menu-card-desc">${item.description}</p>
            <div class="menu-card-footer">
              <span class="menu-card-price">${item.price}</span>
              <button class="menu-card-btn">Add to Order</button>
            </div>
          </div>
        </div>
      `
      )
      .join("");

    /* Interactive menu cards — "Add to Order" button */
    menuGrid.addEventListener("click", function (e) {
      if (e.target.classList.contains("menu-card-btn")) {
        const btn = e.target;
        const originalText = btn.textContent;
        btn.textContent = "Added!";
        btn.style.background = "var(--success)";
        btn.style.color = "var(--white)";
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = "";
          btn.style.color = "";
        }, 1500);
      }
    });
  }

  /* ---------- RENDER GALLERY ---------- */
  const galleryGrid = document.getElementById("galleryGrid");
  if (galleryGrid) {
    galleryGrid.innerHTML = galleryItems
      .map(
        (img) => `
        <div class="gallery-item">
          <img src="${img}" alt="Café gallery" loading="lazy" />
        </div>
      `
      )
      .join("");
  }

  /* ---------- RENDER STAR RATINGS ---------- */
  document.querySelectorAll(".stars").forEach((el) => {
    const rating = parseInt(el.dataset.rating, 10);
    let html = "";
    for (let i = 0; i < 5; i++) {
      html += i < rating ? "★" : "☆";
    }
    el.textContent = html;
    el.style.color = "#d4a574";
  });

  /* ---------- NAVBAR SCROLL EFFECT ---------- */
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    if (window.scrollY > 400) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  /* ---------- BACK TO TOP ---------- */
  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- HAMBURGER MENU ---------- */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    const expanded = hamburger.classList.contains("active");
    hamburger.setAttribute("aria-expanded", expanded);
  });

  /* Close mobile menu when a link is clicked */
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- ACTIVE NAV LINK ON SCROLL ---------- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", function () {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  /* ---------- REVEAL ON SCROLL ---------- */
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  /* ---------- CONTACT FORM VALIDATION ---------- */
  const form = document.getElementById("contactForm");
  const formSuccess = document.getElementById("formSuccess");

  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(fieldId + "Error");
    field.classList.add("error");
    errorEl.textContent = message;
  }

  function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(fieldId + "Error");
    field.classList.remove("error");
    errorEl.textContent = "";
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (form) {
    /* Clear errors on input */
    ["name", "email", "subject", "message"].forEach((id) => {
      const field = document.getElementById(id);
      field.addEventListener("input", () => clearError(id));
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      /* Reset previous errors */
      ["name", "email", "subject", "message"].forEach((id) => clearError(id));

      if (name.length < 2) {
        showError("name", "Please enter your name.");
        valid = false;
      }

      if (!validateEmail(email)) {
        showError("email", "Please enter a valid email address.");
        valid = false;
      }

      if (subject.length < 3) {
        showError("subject", "Please enter a subject.");
        valid = false;
      }

      if (message.length < 10) {
        showError("message", "Please enter a message (at least 10 characters).");
        valid = false;
      }

      if (valid) {
        formSuccess.classList.add("show");
        form.reset();
        setTimeout(() => {
          formSuccess.classList.remove("show");
        }, 5000);
      }
    });
  }
});
