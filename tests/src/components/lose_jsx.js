//JSX
function Lose_html () {
    return(
        /*<head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Fim de Jogo!</title>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

            <link rel="stylesheet" type="text/css" href="estilo.css">
        </head>*/

        <body>
            <div class="conteiner">
                <div class="row">
                    <div class="col">
                        <div class="d-flex justify-content-center">
                            <img src="imagens/game_over.png"></img>
                        </div>					
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="d-flex justify-content-center">
                            <button type="button" class="btn btn-dark btn-lg"
                            onclick="window.location.href = 'index.html' ">
                                Reiniciar
                            </button>
                        </div>					
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Lose_html