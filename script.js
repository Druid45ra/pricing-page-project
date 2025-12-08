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
      toggleBtn.classList.remove("bg-gray-700");
      toggleBtn.classList.add("bg-primary");

      toggleCircle.classList.remove("translate-x-0");
      toggleCircle.classList.add("translate-x-6");

      labelYearly.classList.remove("text-gray-400");
      labelYearly.classList.add("text-white");

      labelMonthly.classList.remove("text-white");
      labelMonthly.classList.add("text-gray-400");
    } else {
      // STARE: LUNAR
      toggleBtn.classList.remove("bg-primary");
      toggleBtn.classList.add("bg-gray-700");

      toggleCircle.classList.remove("translate-x-6");
      toggleCircle.classList.add("translate-x-0");

      labelYearly.classList.remove("text-white");
      labelYearly.classList.add("text-gray-400");

      labelMonthly.classList.remove("text-gray-400");
      labelMonthly.classList.add("text-white");
    }

    // Actualizăm Valorile Prețurilor
    prices.forEach((price) => {
      const amount = isYearly
        ? price.getAttribute("data-yearly")
        : price.getAttribute("data-monthly");

      price.style.opacity = 0;
      setTimeout(() => {
        price.textContent = `$${amount}`;
        price.style.opacity = 1;
      }, 200);
    });

    // Actualizăm Perioada (/lună vs /an)
    periods.forEach((period) => {
      period.style.opacity = 0;
      setTimeout(() => {
        period.textContent = isYearly ? "/an" : "/lună";
        period.style.opacity = 1;
      }, 200);
    });
  });

  // ================= LOGICA FAQ ACCORDION (IMBUNĂTĂȚITĂ) =================
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const isCurrentOpen = button.getAttribute("aria-expanded") === "true";
      const content = button.nextElementSibling;

      // Funcție pentru a închide un element
      const closeAccordion = (btn, cont) => {
        btn.setAttribute("aria-expanded", "false");
        cont.classList.remove("open");
        // Setăm max-height la 0 pentru tranziția de închidere
        cont.style.maxHeight = null;
      };

      // Închidem celelalte elemente deschise (comportament strict de acordeon)
      accordionButtons.forEach((otherButton) => {
        if (
          otherButton !== button &&
          otherButton.getAttribute("aria-expanded") === "true"
        ) {
          closeAccordion(otherButton, otherButton.nextElementSibling);
        }
      });

      // Comutăm starea curentă
      if (isCurrentOpen) {
        // Dacă este deschis, îl închidem
        closeAccordion(button, content);
      } else {
        // Dacă este închis, îl deschidem
        button.setAttribute("aria-expanded", "true");
        content.classList.add("open");

        // CALCULUL CRITIC: Setăm max-height la înălțimea reală a conținutului + padding
        // scrollHeight este înălțimea conținutului, inclusiv padding-ul ascuns de overflow: hidden.
        content.style.maxHeight = content.scrollHeight + "px";

        // Opțional, după ce tranziția s-a terminat, putem seta înălțimea pe 'none' sau 'auto'
        // pentru a permite ca elementul să se extindă dacă conținutul se schimbă dinamic,
        // dar lăsăm 'maxHeight' setat la valoarea calculată pentru a păstra tranziția fluidă.
      }
    });
  });
});
