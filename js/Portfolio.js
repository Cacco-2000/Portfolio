
const btnHtmlCss = document.getElementById("filtro-html-css");
const btnHtmlCssJs = document.getElementById("filtro-html-css-js");
const btnTutti = document.getElementById("filtro-tutti");

const progetti = document.querySelectorAll(".progetto");
const contenitoreProgetti = document.querySelector('.progetti');

const originalTexts = 
{
    "filtro-html-css": "HTML/CSS",
    "filtro-html-css-js": "HTML/CSS/JavaScript",
    "filtro-tutti": "Mostra Tutti"
};


const filtraProgetti = (tag) => 
{
    let hasVisibleProjects = false;

    progetti.forEach(progetto => 
    {
        const tags = progetto.getAttribute('data-tags').split(' ');
        const showHtmlCss = tag === 'html-css' && tags.includes('html') && tags.includes('css') && !tags.includes('javascript');
        const showHtmlCssJs = tag === 'html-css-js' && tags.includes('html') && tags.includes('css') && tags.includes('javascript');
        const showAll = tag === 'all';

        if (showHtmlCss || showHtmlCssJs || showAll) 
        {
            progetto.classList.add("show");
            progetto.classList.remove("hide");
            hasVisibleProjects = true;
        } 
        else 
        {
            progetto.classList.add("hide");
            progetto.classList.remove("show");
        }
    });

    if (hasVisibleProjects) 
    {
        contenitoreProgetti.classList.add('show');
    } 
    else 
    {
        contenitoreProgetti.classList.remove('show');
    }
};

const resetButtonTexts = () => 
{
    btnHtmlCss.textContent = originalTexts["filtro-html-css"];
    btnHtmlCssJs.textContent = originalTexts["filtro-html-css-js"];
    btnTutti.textContent = originalTexts["filtro-tutti"];
};

const handleButtonClick = (button, tag) => 
{
    if (button.textContent !== 'Rimuovi') 
    {
        resetButtonTexts();
        button.textContent = 'Rimuovi';
        filtraProgetti(tag);
    } 
    else 
    {
        resetButtonTexts();
        progetti.forEach(progetto => 
        {
            progetto.classList.remove('show');
            progetto.classList.add('hide');
        });
        contenitoreProgetti.classList.remove('show');
    }
};

btnHtmlCss.addEventListener('click', () => handleButtonClick(btnHtmlCss, 'html-css'));
btnHtmlCssJs.addEventListener('click', () => handleButtonClick(btnHtmlCssJs, 'html-css-js'));
btnTutti.addEventListener('click', () => handleButtonClick(btnTutti, 'all'));



const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => 
    {
        event.preventDefault();
        alert("Grazie per avermi contattato! Ti risponderò il prima possibile.");
        form.reset();
    });



/* Traduzioni */
const translation = 
{
    it: 
    {
        "title": "Portfolio Spinelli Marco (2025)",
        "introduction": "Introduzione",
        "certifications": "Certificazioni",
        "projects": "Progetti",
        "skills/hobbies": "Competenze/Hobby",
        "contact-me": "Contattami",
        "button-language": "English",
        "button-theme-dark": "Tema Scuro",
        "button-theme-light": "Tema Chiaro",
        "welcome-title": "Benvenuti",
        "welcome-description": `Ciao, sono <span>Marco</span> e sto imparando le fondamenta del web Developing 
            (<span>HTML</span>,<span> CSS</span> e <span>Javascript</span>).`,
        "certifications-title": "Certificazioni",
        "certifications-timeline": "Timeline",
        "timeline-year": "Anno",
        "timeline-experience": "Esperienza",
        "date-1": "Fine Settembre 2024:",
        "experience-1": `Ho iniziato il primo corso di carriera del sito <span>FreeCodeCamp</span> 
            (<span>Responsive Web Design</span>).`,
        "date-2": "Inizio Novembre 2024:",
        "experience-2": `Ho ottenuto la mia prima <a href="https://www.freecodecamp.org/certification/Marco-C/responsive-web-design" 
            aria-label="Visita certificazione" target="_blank">certificazione</a> di HTML e CSS (<span>Responsive Web Design</span>).`,
        "certification-link": "Certificazione",
        "portfolio-link": "Portfolio di FreeCodeCamp completo",
        "projects-title": "Progetti",
        "see-all-filter": "Mostra tutti",
        "project-1": "1: Survey Form",
        "project-link-1": "Visita il progetto",
        "project-2": "2: Tribute Page",
        "project-link-2": "Visita il progetto",
        "project-3": "3: Technical Documentation Page",
        "project-link-3": "Visita il progetto",
        "project-4": "4: Product Landing Page",
        "project-link-4": "Visita il progetto",
        "project-5": "5: Personal Portfolio Webpage",
        "project-link-5": "Visita il progetto",
        "project-6": "6: Palindrome Checker",
        "project-link-6": "Visita il progetto",
        "project-7": "7: Roman Numeral Converter",
        "project-link-7": "Visita il progetto",
        "project-8": "8: Telephone Number Validator",
        "project-link-8": "Visita il progetto",
        "project-9": "9: Cash Register",
        "project-link-9": "Visita il progetto",
        "competents-title": "Competenze",
        "hobby-title": "Hobby",
        "hobby-1": "Leggere",
        "hobby-2": "Ascoltare Musica",
        "hobby-3": "Videogiocare",
        "hobby-4": "Programmare",
        "contact-title": "Contattami",
        "name": "Nome:",
        "email-placeholder": "Inserisci la tua email",
        "name-placeholder": "Inserisci il tuo nome",
        "object-placeholder": "Inserisci l'oggetto",
        "message-placeholder": "Scrivi il tuo messaggio",
        "object": "Oggetto:",
        "message": "Messaggio:",
        "submit": "Invia"
    },
    en: 
    {
        "title": "Portfolio Marco Spinelli (2025)",
        "introduction": "Introduction",
        "certifications": "Certifications",
        "projects": "Projects",
        "skills/hobbies": "Skills/Hobbies",
        "contact-me": "Contact Me",
        "button-language": "Italian",
        "button-theme-dark": "Dark Theme",
        "button-theme-light": "Light Theme",
        "welcome-title": "Welcome",
        "welcome-description": `Hello, I am <span>Marco</span> and I am learning the basics of web developing 
            (<span>HTML</span>,<span> CSS</span>, and <span>Javascript</span>).`,
        "certifications-title": "Certifications",
        "certifications-timeline": "Timeline",
        "timeline-year": "Year",
        "timeline-experience": "Experience",
        "date-1": "End of September 2024:",
        "experience-1": `I started the first career course on the <span>FreeCodeCamp</span> 
            site (<span>Responsive Web Design</span>).`,
        "date-2": "Early November 2024:",
        "experience-2": `I obtained my first <a href="https://www.freecodecamp.org/certification/Marco-C/responsive-web-design" 
            aria-label="Visit Certification" target="_blank">certification</a> in HTML and CSS (<span>Responsive Web Design</span>).`,
        "certification-link": "Certification",
        "portfolio-link": "Complete FreeCodeCamp portfolio",
        "projects-title": "Projects",
        "see-all-filter": "Show all",
        "project-1": "1: Survey Form",
        "project-link-1": "Visit the project",
        "project-2": "2: Tribute Page",
        "project-link-2": "Visit the project",
        "project-3": "3: Technical Documentation Page",
        "project-link-3": "Visit the project",
        "project-4": "4: Product Landing Page",
        "project-link-4": "Visit the project",
        "project-5": "5: Personal Portfolio Webpage",
        "project-link-5": "Visit the project",
        "project-6": "6: Palindrome Checker",
        "project-link-6": "Visit the project",
        "project-7": "7: Roman Numeral Converter",
        "project-link-7": "Visit the project",
        "project-8": "8: Telephone Number Validator",
        "project-link-8": "Visit the project",
        "project-9": "9: Cash Register",
        "project-link-9": "Visit the project",
        "competents-title": "Skills",
        "hobby-title": "Hobbies",
        "hobby-1": "Reading",
        "hobby-2": "Listening to Music",
        "hobby-3": "Gaming",
        "hobby-4": "Programming",
        "contact-title": "Contact Me",
        "name": "Name:",
        "email-placeholder": "Enter your email",
        "name-placeholder": "Enter your name",
        "object-placeholder": "Enter the subject",
        "message-placeholder": "Write your message",
        "object": "Subject:",
        "message": "Message:",
        "submit": "Send"
    }
};



/* Cambio Lingua */
const cambiaLinguaBtn = document.getElementById("cambia-lingua");
let currentLang = "it";


const cambiaLingua = (lingua) => 
{
    document.querySelectorAll("[data-translate]").forEach((el) => 
    {
        const key = el.getAttribute("data-translate");
        el.innerHTML = translation[lingua][key];
    });

    document.getElementById("nome").placeholder = translation[lingua]["name-placeholder"];
    document.getElementById("email").placeholder = translation[lingua]["email-placeholder"];
    document.getElementById("oggetto").placeholder = translation[lingua]["object-placeholder"];
    document.getElementById("messaggio").placeholder = translation[lingua]["message-placeholder"];

    cambiaLinguaBtn.textContent = translation[lingua]["button-language"];
};

cambiaLinguaBtn.textContent = translation[currentLang]["button-language"];

cambiaLinguaBtn.addEventListener("click", () => 
{
    currentLang = currentLang === "it" ? "en" : "it";
    cambiaLingua(currentLang);
    localStorage.setItem("lingua", currentLang);
});

const linguaSalvata = localStorage.getItem("lingua");
if (linguaSalvata) 
{
    currentLang = linguaSalvata;
}
cambiaLingua(currentLang);


/* Cambio Tema */

const temaBottone = document.getElementById("cambia-tema");
const themeLink = document.getElementById("theme-link");

const aggiornaTestoTema = () => 
{
    const temaCorrente = themeLink.getAttribute("href").includes("css/TemaChiaro.css");

    temaBottone.setAttribute("data-translate", temaCorrente ? "button-theme-dark" : "button-theme-light");

    temaBottone.innerHTML = translation[currentLang][temaBottone.getAttribute("data-translate")];
};


temaBottone.addEventListener("click", () => 
{
    const temaCorrente = themeLink.getAttribute("href").includes("css/TemaChiaro.css") ? "css/TemaScuro.css" : "css/TemaChiaro.css";
    themeLink.setAttribute("href", temaCorrente);

    localStorage.setItem("tema", temaCorrente);

    aggiornaTestoTema();
});

const temaSalvato = localStorage.getItem("tema");

if (temaSalvato) 
{
    themeLink.setAttribute("href", temaSalvato);
}
aggiornaTestoTema();