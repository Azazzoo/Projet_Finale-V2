$("form").submit(function (event){
    $email = $("#email").val();
    $password = $("#password").val();
    // GET JSON : Obtenir les données du serveur JSON
    $.getJSON('https://641b8c761f5d999a44654df6.mockapi.io/Client')
        // .done() est exécuté quand on a reçu la réponse du serveur
        .done(function (clients) { // users va contenir la liste d'objets json
            for (obj of clients) { // user représente chaque objet
                if (obj.nom !== $email || obj.password !== $password){
                    event.preventDefault();
                    $("#erreurconnection").removeClass("visible")}
                else {
                    membre1 = {'nom': obj.nom, 'prenom': obj.prenom, 'telephone': obj.telephone, 'password': obj.password}
                    $("#erreurnom").addClass("visible")
                    localStorage.setItem('membre', membre1)
                }
            }
        });
})