// Navbar blur on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.style.background =
      window.scrollY > 50
        ? "rgba(255,255,255,0.18)"
        : "rgba(255,255,255,0.1)";
  });
// Navbar blur on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.style.background =
      window.scrollY > 40
        ? "rgba(255,255,255,0.2)"
        : "rgba(255,255,255,0.1)";
  });
  
  // Reveal animation on scroll
  const reveals = document.querySelectorAll(".section");
  
  window.addEventListener("scroll", () => {
    reveals.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        section.classList.add("active");
      }
    });
  });
  
  // Apply reveal class
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.add("reveal");
  });
// Scroll progress
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
  
    const progress = (scrollTop / height) * 100;
    document.getElementById("scroll-progress").style.width = progress + "%";
  });
// Active navbar link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});






const watchFilmBtn = document.getElementById("watchFilmBtn");
const homeVideoWrapper = document.getElementById("homeVideoWrapper");
const ytHomePlayer = document.getElementById("ytHomePlayer");
const closeVideoBtn = document.getElementById("closeVideo");
const hero = document.querySelector(".hero");

/* 🔁 PUT YOUR YOUTUBE VIDEO ID HERE */
const YT_VIDEO_ID = "VIDEO_ID";

/* Open video */
watchFilmBtn.addEventListener("click", () => {
  hero.classList.add("blur");
  homeVideoWrapper.classList.add("active");
  watchFilmBtn.addEventListener("click", () => {
    document.querySelector(".center-logo").style.opacity = "0";
  });
  watchFilmBtn.addEventListener("click", () => {
    document.querySelector(".center-logo").style.opacity = "0";
  });
    
  ytHomePlayer.src =
    `https://www.youtube.com/embed/${YT_VIDEO_ID}?autoplay=1&rel=0`;

  watchFilmBtn.style.display = "none";
});

/* Close video */
closeVideoBtn.addEventListener("click", () => {
  hero.classList.remove("blur");
  homeVideoWrapper.classList.remove("active");

  closeVideoBtn.addEventListener("click", () => {
    document.querySelector(".center-logo").style.opacity = "1";
  });
  

  ytHomePlayer.src = "";
  watchFilmBtn.style.display = "inline-block";
});



/* Desktop mouse tilt */
const card = document.querySelector(".card-3d");
const inner = document.querySelector(".card-inner");

if (card && inner) {
  /* Desktop mouse tilt */
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    inner.style.transform = `
      rotateY(${x / 14}deg)
      rotateX(${-y / 14}deg)
    `;
  });

  card.addEventListener("mouseleave", () => {
    inner.style.transform = "rotateY(0) rotateX(0)";
  });

  card.addEventListener("touchstart", () => {
    inner.style.transform = "rotateY(12deg) rotateX(8deg)";
  });

  card.addEventListener("touchend", () => {
    inner.style.transform = "rotateY(0) rotateX(0)";
  });
}

// Page loader hide
window.addEventListener("load", () => {
    const loader = document.getElementById("page-loader");
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 1000);
  });
  
  
  
  
  
  const bookNowBtn = document.getElementById("bookNowBtn");
  const bookingPanel = document.getElementById("bookingPanel");
  const closeBooking = document.getElementById("closeBooking");
  
  if (bookNowBtn && bookingPanel && closeBooking) {
    bookNowBtn.addEventListener("click", () => {
      bookingPanel.classList.add("active");
    });
  
    closeBooking.addEventListener("click", () => {
      bookingPanel.classList.remove("active");
    });
  }
  
 
  
  const bookingForm = document.getElementById("bookingForm");
  const bookingSuccess = document.getElementById("bookingSuccess");
  if (bookingSuccess) {
    bookingSuccess.style.display = "none";
  }

  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("custPhone").value.trim();
    const service = document.getElementById("serviceType").value;
    const date = document.getElementById("bookingDate").value;
  
    if (!name || !phone || !service || !date) {
      alert("Please fill all fields");
      return;
    }
  
    // ✅ HIDE FORM → SHOW SUCCESS
    bookingForm.style.display = "none";
    bookingSuccess.style.display = "block";
    bookingSuccess.classList.add("active");
  
    // 📲 WhatsApp
    const whatsappNumber = "94762864248";
    const whatsappText =
      `📸 New Booking Request\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Service: ${service}\n` +
      `Date: ${date}`;
  
    setTimeout(() => {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`,
        "_blank"
      );
    }, 1200);
  
    // 📧 Email
    const emailAddress = "dinaganethusahan@gmail.com";
    const subject = "New Booking Request - Studio By RJ";
    const body =
      `Name: ${name}\nPhone: ${phone}\nService: ${service}\nDate: ${date}`;
  
    setTimeout(() => {
      window.location.href =
        `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }, 1600);
  
    // 🔁 CLOSE PANEL AFTER SUCCESS
    setTimeout(() => {
      bookingPanel.classList.remove("active");
      bookingForm.reset();
      bookingForm.style.display = "block";
      bookingSuccess.style.display = "none";
    }, 4000);
  });
  
  
   
  
  
  // Mobile gallery tap interaction
document.querySelectorAll(".img-box").forEach(box => {
    box.addEventListener("click", () => {
      box.classList.toggle("active");
    });
  });
  
