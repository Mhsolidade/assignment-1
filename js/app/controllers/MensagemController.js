class MensagemController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputNome     = $("#nome");
        this._inputEmail    = $("#email");  
        this._inputEmpresa  = $("#empresa");
        
        
    }
    
    adiciona(event) {
        event.preventDefault();
        
        let mensagem  = this._criaMensagem();
        this._enviandoDados(JSON.stringify(mensagem.toJSON));

    }

    _criaMensagem() {
        return new Mensagem (
            ValidaHelper.nulo(this._inputNome),   
            ValidaHelper.email(this._inputEmail.value), 
            ValidaHelper.nulo(this._inputEmpresa)
        );
        
    }
    
    _enviandoDados(dados) {
        let http = new XMLHttpRequest;
        let url = "https://solidade-json-server.herokuapp.com/pesoas";

        // let url ="http://localhost:3000/Pessoas";
        http.open("POST", url, true);
        http.setRequestHeader("Content-Type", "application/json");

       
        http.addEventListener("load", function() {
            if(http.readyState == 4 && http.status == 201) {
                 console.log(`Resposta: ${http.response}`);
g            }else {
                console.log("erro");
            }
            
        });
        
        http.send(dados);

    }

}