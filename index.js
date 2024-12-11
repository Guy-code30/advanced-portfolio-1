function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal_overlay--loading");
  const success = document.querySelector(".modal_overlay--success");
  loading.classList += " modal_overlay--visible";
  emailjs
    .sendForm(
      "service_cuaityq",
      "template_9ysvcaw",
      event.target,
      "Mmp7Bq8-QgXqI4RfU"
    )
    .then(() => {
      loading.classList.remove("modal_overlay--visible");
      success.classList += " modal_overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal_overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on samellis1403@gmail.com"
      );
    });
}

let isModalOpen = false;
function toggleModal() {
    isModalOpen = !isModalOpen;
    if (isModalOpen) {
        return document.body.classList.remove("modal--open");
    }
    // toggle modal 
    document.body.classList += " modal--open"
}