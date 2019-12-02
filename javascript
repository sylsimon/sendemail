function sendEmail {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "thesyllieetc@gmail.com",
        Password: "123Pokemon!123",
        To: 'sylvia.simon@cremedigital.com',
        From: "thesyllieetc@gmail.com",
        Subject: "Hi, this is from Propaganda!",
        Body: "We got a lead! Woohoo!"
    }).then(
        message => alert(message)
    );
}