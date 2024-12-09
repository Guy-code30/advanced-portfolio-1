function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_cuaityq',
            'template_9ysvcaw',
            event.target,
            'Mmp7Bq8-QgXqI4RfU'
        ).then(() => {
            console.log('this worked')
        })
        const loading = document.querySelector('.modal_overlay--loading');
        const success = document.querySelector('.modal_overlay--success');
        loading.classList += " modal_overlay--visible";
        setTimeout(() => {
            console.log('it worked ')
        }, 500)
}