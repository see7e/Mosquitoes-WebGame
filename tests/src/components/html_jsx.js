import React from "react";

//JSX
function Index_html () {
    
    return (
        <>
        <body>
            <div class="conteiner">
                <div class="row">
                    <div class="col">
                        <div class="d-flex justify-content-center">
                            <img src="imagens/game.png"></img>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="d-flex justify-content-center">
                            <div class="mb-2">
                                <select id="nivel" class="form-control">
                                    <option value="">-- Selecionar o nível --</option>
                                    <option value="facil">Fácil</option>
                                    <option value="medio">Médio</option>
                                    <option value="dificil">Difícil</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="row">
                    <div class="col">
                        <div class="d-flex justify-content-center">
                            <button type="button" class="btn btn-danger btn-lg"
                            onclick="iniciarJogo()">
                                Iniciar Jogo!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </body></>
    )
}

export default Index_html