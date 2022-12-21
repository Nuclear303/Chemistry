function sendEmail(){
    let imie = document.querySelector("input[name='name']").value;
    let nazwisko = document.querySelector("input[name='last-name']").value;
    let email = document.querySelector("input[name='e-mail']").value;
    let telefon = document.querySelector("input[name='phone']").value;
    let wiadomosc = document.querySelector("textarea").value;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "krzysztofkajakkontakt@gmail.com",
        Password : "211661CD16697E1F5032FB91D250ED0CF3A8",
        To : 'krzysztofkajakkontakt@gmail.com',
        From : 'krzysztofkajakkontakt@gmail.com',
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