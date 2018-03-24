class MensagemController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputNome     = $("#nome");
        this._inputEmail    = $("#email");  
        this._inputEmpresa  = $("#empresa");


    }

    adiciona(event) {
        event.preventDefault();
        
        ValidaHelper.email(this._inputEmail.value);
        ValidaHelper.nulo(this._inputNome);
        ValidaHelper.nulo(this._inputEmpresa);
        let mensagem  = this._criaMensagem();

        alert(mensagem.nome);


    }

    _criaMensagem() {
        return new Mensagem (
            this._inputNome.value,   
            this._inputEmail.value, 
            this._inputEmpresa.value
        );

    }


}