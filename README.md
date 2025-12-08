# pricing-page-project
# 🌑 Pricing Page (Dark Mode) - Proiect Frontend

## Descriere Proiect

Acest proiect reprezintă o pagină de prețuri (Pricing Page) modernă și responsive, concepută pentru un produs SaaS (Software as a Service) imaginar. Pagina utilizează un design întunecat (Dark Mode) și include funcționalități cheie pentru a demonstra abilitățile de dezvoltare frontend:

1.  **Carduri de Prețuri:** Trei planuri distincte, cu diferențiere vizuală (planul **"Professional"** este evidențiat).
2.  **Toggle Switch:** Comutator funcțional pentru vizualizarea prețurilor **lunare** vs. **anuale** (cu discount).
3.  **Secțiune FAQ (Accordion):** O componentă de tip acordion pentru întrebările frecvente, implementată cu tranziții fluide.

## 🛠 Tehnologii Utilizate

* **HTML5:** Structura de bază a paginii.
* **Tailwind CSS (via CDN):** Utilizat pentru stilizare rapidă, responsive design, stări **hover** avansate, și **tranziții** fluide.
* **Vanilla JavaScript:** Implementarea logicii pentru comutarea prețurilor și gestionarea stării componentelor FAQ (Accordion).

## 🚀 Cum Rulezi Proiectul

Acest proiect nu necesită un mediu de build complex (Webpack, Vite etc.) deoarece Tailwind CSS este inclus prin CDN.

1.  **Clonare depozit (sau salvare fișiere):**
    ```bash
    git clone [LINK-UL_TAU_LA_REPO_AICI]
    cd pricing-page-dark
    ```

2.  **Rulare:**
    * Deschide fișierul `index.html` direct în browser-ul tău preferat (Chrome, Firefox, etc.).

    > **Notă:** Deoarece nu există solicitări de backend, un simplu "Open with" sau un double-click pe `index.html` este suficient.

## 📂 Structura Proiectului

```text
/pricing-page-dark
│
├── index.html          # Pagina principală. Conține structura, stilizarea Tailwind.
├── script.js           # Logica JavaScript (Toggle și Accordion).
└── README.md           # Fișierul curent de documentație.
