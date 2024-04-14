import certificates from "./certificates.js";

function createCertificateElement(certificate) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <h3 class="certificate-title">${certificate.name}</h3>
    <p>
        <span class="certificate-institution">
          ${certificate.institution}, ${certificate.year}
        </span>
        <span class="certificate-code">
            <a href="${certificate.link}" target="_blank">
                ${certificate.code}
            </a>
        </span>
    </p>
    `;
  return listItem;
}

function displayCertificates() {
  const certificatesList = document.getElementById("certificates");
  certificatesList.innerHTML = "";
  certificates.forEach((certificate) => {
    const certificateElement = createCertificateElement(certificate);
    certificatesList.appendChild(certificateElement);
  });
}

let btnContacto = document.getElementById("btn-contacto");

document.addEventListener("scroll", (event) => {
  if (window.scrollY < 176) {
    btnContacto.classList.add("hidden");
  } else if (window.scrollY > 176 && window.scrollY < 1398) {
    btnContacto.classList.remove("hidden");
    btnContacto.style.backgroundPosition = "0px center";
  } else if (window.scrollY > 1398 && window.scrollY < 1686) {
    btnContacto.classList.remove("hidden");
    btnContacto.style.backgroundPosition = "-100px center";
  } else if (window.scrollY > 1686 && window.scrollY < 2800) {
    btnContacto.classList.remove("hidden");
    btnContacto.style.backgroundPosition = "-200px center";
  } else if (window.scrollY > 2800) {
    btnContacto.classList.remove("hidden");
    btnContacto.style.backgroundPosition = "-200px center";
  }
});

window.onload = displayCertificates;

function changeTheme() {
  var body = document.body;
  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  }
}

// Seleccionar todos los elementos con la clase "palette-switcher"
let btnThemeSwitchers = document.querySelectorAll(".theme-switcher");

// Iterar sobre cada elemento y agregar el evento de clic
btnThemeSwitchers.forEach(function (btn) {
  btn.addEventListener("click", changeTheme);
});
