import certificates from "./certificates.js";

function createCertificateElement(certificate) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <h3 class="certificate-title">${certificate.name}</h3>
    <p>
        <span class="certificate-institution">${certificate.institution}</span>
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

// Llama a la función para mostrar los certificados al cargar la página
window.onload = displayCertificates;

let btnContacto = document.getElementById("btn-contacto");

document.addEventListener("scroll", (event) => {
  // handle scroll event
  console.log(this.scrollY);

  if (this.scrollY < 176) {
    btnContacto.classList.add("hidden");
  } else if (this.scrollY > 176 && this.scrollY < 1398) {
    btnContacto.classList.remove("hidden");
    btnContacto.style.backgroundPosition = "0px center";
  } else if (this.scrollY > 1398 && this.scrollY < 1686) {
    btnContacto.classList.remove("hidden");
    btnContacto.style.backgroundPosition = "-100px center";
  } else if (this.scrollY > 1686 && this.scrollY < 2800) {
    btnContacto.classList.remove("hidden");
    btnContacto.style.backgroundPosition = "-200px center";
  } else if (this.scrollY > 2800) {
    btnContacto.classList.remove("hidden");
    btnContacto.style.backgroundPosition = "-200px center";
  }
});
