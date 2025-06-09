document.getElementById("kontaktformular").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Danke für Ihre Nachricht! Wir melden uns so schnell wie möglich.");
    this.reset();
});
