function sendEmail(){
    let imie = document.querySelector("input[name='name']").value;
    let nazwisko = document.querySelector("input[name='last-name']").value;
    let email = document.querySelector("input[name='e-mail']").value;
    let telefon = document.querySelector("input[name='phone']").value;
    let wiadomosc = document.querySelector("textarea").value;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "m.morzycki980@gmail.com",
        Password : "FA371C4E22B8738B2EFAA5D012E547326ECE",
        To : 'm.morzycki980@gmail.com',
        From : "m.morzycki980@gmail.com",
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