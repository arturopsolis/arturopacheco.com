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
  // handle scroll event
  console.log(window.scrollY);

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
