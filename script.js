document.addEventListener("DOMContentLoaded", () => {
  // ================= LOGICA PRICING TOGGLE =================
  const toggleBtn = document.getElementById("toggle-btn");
  const toggleCircle = toggleBtn.querySelector("span");
  const prices = document.querySelectorAll(".price-value");
  const periods = document.querySelectorAll(".billing-period");
  const labelMonthly = document.getElementById("label-monthly");
  const labelYearly = document.getElementById("label-yearly");

  let isYearly = false;

  // Setăm tranziția CSS pentru prețuri prin JS pentru efectul de fade
  prices.forEach((el) => (el.style.transition = "opacity 0.2s ease-in-out"));
  periods.forEach((el) => (el.style.transition = "opacity 0.2s ease-in-out"));

  toggleBtn.addEventListener("click", () => {
    isYearly = !isYearly; // Inversăm starea

    if (isYearly) {
      // STARE: ANUAL

      // 1. Modificăm Butonul (Fundal Activ)
      toggleBtn.classList.remove("bg-gray-700", "bg-gray-200"); // Curățăm orice fundal inactiv
      toggleBtn.classList.add("bg-primary"); // Adăugăm fundalul activ

      // 2. Mutăm Cercul
      toggleCircle.classList.remove("translate-x-0");
      toggleCircle.classList.add("translate-x-6");

      // 3. Modificăm culorile etichetelor text
      labelYearly.classList.remove("text-gray-400");
      labelYearly.classList.add("text-white");

      labelMonthly.classList.remove("text-white");
      labelMonthly.classList.add("text-gray-400");
    } else {
      // STARE: LUNAR

      // 1. Modificăm Butonul (Fundal Inactiv - Dark Mode)
      toggleBtn.classList.remove("bg-primary");
      toggleBtn.classList.add("bg-gray-700");

      // 2. Mutăm Cercul înapoi
      toggleCircle.classList.remove("translate-x-6");
      toggleCircle.classList.add("translate-x-0");

      // 3. Resetăm culorile etichetelor
      labelYearly.classList.remove("text-white");
      labelYearly.classList.add("text-gray-400");

      labelMonthly.classList.remove("text-gray-400");
      labelMonthly.classList.add("text-white");
    }

    // 4. Actualizăm Valorile Prețurilor
    prices.forEach((price) => {
      const amount = isYearly
        ? price.getAttribute("data-yearly")
        : price.getAttribute("data-monthly");

      // Efect vizual de fade
      price.style.opacity = 0;
      setTimeout(() => {
        price.textContent = `$${amount}`;
        price.style.opacity = 1;
      }, 200);
    });

    // 5. Actualizăm Perioada (/lună vs /an)
    periods.forEach((period) => {
      period.style.opacity = 0;
      setTimeout(() => {
        period.textContent = isYearly ? "/an" : "/lună";
        period.style.opacity = 1;
      }, 200);
    });
  });

  // ================= LOGICA FAQ ACCORDION =================
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const isCurrentOpen = button.getAttribute("aria-expanded") === "true";
      const content = button.nextElementSibling;

      // Închidem celelalte (opțional, pentru comportament strict de acordeon)
      accordionButtons.forEach((otherButton) => {
        if (otherButton !== button) {
          otherButton.setAttribute("aria-expanded", "false");
          otherButton.nextElementSibling.classList.remove("open");
        }
      });

      // Comutăm starea curentă
      if (isCurrentOpen) {
        button.setAttribute("aria-expanded", "false");
        content.classList.remove("open");
      } else {
        button.setAttribute("aria-expanded", "true");
        content.classList.add("open");
      }
    });
  });
});
