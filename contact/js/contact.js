function sendEmail(){
    let imie = document.querySelector("input[name='name']").value;
    let nazwisko = document.querySelector("input[name='last-name']").value;
    let email = document.querySelector("input[name='e-mail']").value;
    let telefon = document.querySelector("input[name='phone']").value;
    let wiadomosc = document.querySelector("textarea").value;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "renatakonieczna47@gmail.com",
        Password : "7B656E0691F698CBAAE5D07EDBD7EDF85EA0",
        To : 'renatakonieczna47@gmail.com',
        From : 'renatakonieczna47@gmail.com',
        Subject : "Wiadomość ze strony",
        Body : `Imię:${imie} <br>
                Nazwisko: ${nazwisko}<br>
                E-mail: ${email}<br>
                Numer telefonu:${telefon}<br>
                Wiadomość:${wiadomosc}
                `
    }).then(
        message => alert("Dziękujemy za zgłoszenie :)")
    );
    
}