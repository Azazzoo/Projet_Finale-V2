// Function Afficher qui ajoute une question a la page HTML
function afficher() {
    // GET JSON : Obtenir les données du serveur JSON
    $.getJSON('https://641b8c761f5d999a44654df6.mockapi.io/question')
        // .done() est exécuté quand on a reçu la réponse du serveur
        .done(function (clients) { // users va contenir la liste d'objets json
            for (client of clients) { // user représente chaque objet
                $("#append").append(`
                    <div class="card container2 col-lg-5">
                        <div class="card-header">La question de ${client.nom}</div>
                        <div class="card-body ">
                            <h5 class="card-title">${client.titre}</h5>
                            <p class="card-text">${client.question}</p>
                            <a href="mailto:${client.email}" class="btn btn-primary">Répondre</a>
                        </div>
                    </div>
                `)
            }
        });
    }
afficher();









