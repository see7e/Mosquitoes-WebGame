//JSX
function App_html () {
    return (
        <><head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Game Mata-mosquito</title>

            <link rel="stylesheet" type="text/css" href="estilo.css" />
            <script type="text/javascript" src="jogo.js"></script>
	    </head>
  
        <body onresize="redimensionarPalco()">
            <div class="painel">
                <div class="vidas">
                    <img id="v3" src="imagens/coracao_cheio.png"></img>
                    <img id="v2" src="imagens/coracao_cheio.png"></img>
                    <img id="v1" src="imagens/coracao_cheio.png"></img>
                </div>
                <div class="cronometro">
                    Tempo restante: <span id="tempo"></span>
                </div>
            </div>

            
            <script type="text/javascript">
                document.getElementById('tempo').innerHTML = tempo	//tempo de jogo

                var criarMosquito = setInterval(function() { 
                    posicaoRandom()
                }, tempoNivel)
            </script>
        </body></>
    )
}

export default App_html