// template_oyb1xx8
// service_cuaityq
// qqO96IaXJEb0zuHc9


function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_cuaityq',
            'template_oyb1xx8',
            event.target,
            'qqO96IaXJEb0zuHc9'
        ).then(() => {
            console.log('this worked')
        })
}