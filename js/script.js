/* ============ CONFIGURACIÓN: EDITA AQUÍ TUS DATOS (todo se actualiza solo) ============ */
const CONFIG = {
  brand: "Winxy Nails",                   // ← NOMBRE
  tagline: "La belleza de las hadas en tus manos.",
  intro: "Técnica profesional en uñas, con diseños que van de lo delicado a lo fantástico. Agenda tu cita y cuéntame tu idea.", // ← DESCRIPCIÓN
  place: "Nezahualcóyotl, Estado de México", // ← UBICACIÓN
  phone: "+52 56 1012 8107",              // ← WHATSAPP (texto visible)
  whatsappLink: "https://wa.me/525610128107?text=Hola%2C%20quiero%20agendar%20una%20cita", // ← ENLACE WHATSAPP
  social: [                               // ← REDES (cambia los enlaces)
    {n:"Instagram", url:"https://www.instagram.com/winxy_nails", svg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>'},
    {n:"Facebook", url:"https://facebook.com/", svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h2.5V5H14c-2.5 0-4 1.6-4 4v1.5H8v3h2V21h3v-7.5h2.4l.4-3H13V9.2c0-.7.3-1.2 1-1.2z"/></svg>'},
    {n:"TikTok", url:"https://tiktok.com/", svg:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 3c.3 2.3 1.7 3.7 4 3.9v3c-1.5 0-2.9-.4-4-1.2V15a6 6 0 1 1-6-6v3.2a2.9 2.9 0 1 0 3 2.8V3z"/></svg>'}],
  featName: "Alas de cromo dorado",        // ← DISEÑO DESTACADO
  featDesc: "Uñas largas en verde bosque con cromo dorado y una mariposa de cristales. Un diseño de hada.",
  featPrice: "Desde $XXX MXN",
  aboutTitle: "Detrás de Winxy Nails",     // ← SOBRE LA MANICURISTA (agrega tu nombre y tu historia)
  aboutText: "Soy nail artist y trabajo sola, por cita, para dedicarte todo el tiempo que tu diseño necesita.",
  aboutPhil: "Me gusta lo fantástico, pero cada diseño se adapta a ti: delicado, elegante, temático o atrevido.",
  services: [                              // ← SERVICIOS Y PRECIOS
    {i:"💅", n:"Manicure", d:"Cuidado y diseño de uñas de manos.", p:"Desde $XXX MXN"},
    {i:"🦶", n:"Pedicure", d:"Cuidado y diseño de uñas de pies.", p:"Desde $XXX MXN"},
    {i:"🧚", n:"Nail Art", d:"Detalles en 3D, cromo, cristales y pintura a mano.", p:"Desde $XXX MXN"},
    {i:"🎨", n:"Diseños temáticos", d:"Hadas, anime, fechas especiales o la idea que traigas.", p:"Desde $XXX MXN"}],
  testimonials: [                          // ← TESTIMONIOS (ejemplos: reemplázalos por reales)
    ["Me encantó el resultado, exactamente como lo imaginaba.","Andrea"],
    ["El diseño quedó precioso y la atención fue excelente.","Fernanda"],
    ["Le llevé una foto y lo hizo aún mejor.","Valeria"],
    ["Un lugar tranquilo, se nota el cuidado en cada detalle.","Daniela"]],
  img: {hero:"hero.jpg", about:"about.jpg", featured:"featured.jpg"}  // ← FOTOS en assets/images/
};
/* Estilos: id, etiqueta, colores del fondo de reemplazo */
const STYLES = [["hadas","Hadas","#dfe8d9","#8fa58f"],["elegantes","Elegantes","#efe3cf","#b3945b"],["delicados","Delicados","#f1e4ee","#c9b3d1"],["nailart","Nail Art","#e3dcef","#9a86bd"],["tematicos","Temáticos","#d7e4ec","#7fa4bd"],["atrevidos","Atrevidos","#e8c9d3","#a6557a"]];
/* Galería: 24 trabajos → g01.jpg…g24.jpg. Cambia el estilo de cada uno aquí */
const GALLERY = "hadas,tematicos,elegantes,delicados,nailart,hadas,atrevidos,tematicos,delicados,elegantes,hadas,nailart,tematicos,delicados,hadas,elegantes,atrevidos,nailart,hadas,delicados,tematicos,elegantes,nailart,hadas".split(",");
/* ============ FIN DE CONFIGURACIÓN ============ */

const $ = s => document.querySelector(s), cat = id => STYLES.find(s => s[0] === id);
const ph = (file, id) => { const c = cat(id || "elegantes"); return `<div class="ph" style="--a:${c[2]};--b:${c[3]}">✦<img src="assets/images/${file}" alt="" loading="lazy" onerror="this.remove()"></div>`; };
const T = { brand:CONFIG.brand, tagline:CONFIG.tagline, intro:CONFIG.intro, place:CONFIG.place, phone:CONFIG.phone, featName:CONFIG.featName, featDesc:CONFIG.featDesc, featPrice:CONFIG.featPrice, aboutTitle:CONFIG.aboutTitle, aboutText:CONFIG.aboutText, aboutPhil:CONFIG.aboutPhil };
document.querySelectorAll("[data-t]").forEach(e => e.textContent = T[e.dataset.t]);
document.querySelectorAll("[data-wa]").forEach(e => e.href = CONFIG.whatsappLink);
document.title = CONFIG.brand + " | Manicure, pedicure y nail art";
$("#yr").textContent = new Date().getFullYear();

$("#heroImg").innerHTML = ph(CONFIG.img.hero, "hadas");
$("#featImg").innerHTML = ph(CONFIG.img.featured, "elegantes");
$("#aboutImg").innerHTML = ph(CONFIG.img.about, "delicados");
$("#services").innerHTML = CONFIG.services.map(s => `<div class="sv rv"><i>${s.i}</i><h3>${s.n}</h3><p>${s.d}</p><p class="price">${s.p}</p></div>`).join("");
$("#quotes").innerHTML = CONFIG.testimonials.map(q => `<div class="q rv"><p>“${q[0]}”</p><small>— ${q[1]}</small></div>`).join("");
const soc = CONFIG.social.map(s => `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.n}">${s.svg}</a>`).join("");
$("#social").innerHTML = $("#social2").innerHTML = soc;

$("#grid").innerHTML = GALLERY.map((id, i) => `<div class="g rv" data-c="${id}">${ph("g" + String(i + 1).padStart(2, "0") + ".jpg", id)}<span>${cat(id)[1]}</span></div>`).join("");
$("#styles").innerHTML = STYLES.map(s => `<button class="st rv" data-f="${s[0]}">${ph("style-" + s[0] + ".jpg", s[0])}<b>${s[1]}</b></button>`).join("");

function filter(f) {
  document.querySelectorAll(".g").forEach(g => g.classList.toggle("hide", f !== "todos" && g.dataset.c !== f));
  document.querySelectorAll("#filters button").forEach(b => b.classList.toggle("on", b.dataset.f === f));
}
$("#filters").innerHTML = [["todos", "Todos"], ...STYLES].map(s => `<button data-f="${s[0]}">${s[1]}</button>`).join("");
$("#filters").onclick = e => e.target.dataset.f && filter(e.target.dataset.f);
$("#styles").onclick = e => { const b = e.target.closest(".st"); if (b) { filter(b.dataset.f); $("#disenos").scrollIntoView(); } };
filter("todos");

/* Lightbox */
let cur = 0;
const vis = () => [...document.querySelectorAll(".g:not(.hide)")];
function open(i) { const l = vis(); cur = (i + l.length) % l.length; $("#lbBox").innerHTML = l[cur].querySelector(".ph").outerHTML; $("#lb").hidden = false; }
$("#grid").onclick = e => { const g = e.target.closest(".g"); if (g) open(vis().indexOf(g)); };
$(".x").onclick = () => $("#lb").hidden = true;
$(".p").onclick = () => open(cur - 1); $(".n").onclick = () => open(cur + 1);
$("#lb").onclick = e => { if (e.target.id === "lb") e.target.hidden = true; };
addEventListener("keydown", e => { if ($("#lb").hidden) return; if (e.key === "Escape") $("#lb").hidden = true; if (e.key === "ArrowLeft") open(cur - 1); if (e.key === "ArrowRight") open(cur + 1); });

/* Menú móvil */
const nav = document.querySelector("nav"), bg = $(".burger");
bg.onclick = () => bg.setAttribute("aria-expanded", nav.classList.toggle("open"));
nav.onclick = e => { if (e.target.tagName === "A") { nav.classList.remove("open"); bg.setAttribute("aria-expanded", false); } };

/* Aparición al hacer scroll */
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add("on"), io.unobserve(e.target))), { threshold: .08 });
document.querySelectorAll(".rv").forEach(e => io.observe(e));
