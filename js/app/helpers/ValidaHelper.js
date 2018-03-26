class ValidaHelper{

    constructor(){
        throw new Error ('esta class não pode ser instanciada');
    }

    static nulo(element) {
        // try{
            if(element.value === "" || element.value == null ){
            
                throw new Error (`Preencher o campo ${element.id}  `);
            }
        // }catch(e) {
        //     console.log("valida");
        //     console.log(e);
        //     return e;
        // }
            
            return element.value;
    

    }

   static email(email) {
    // try {
       if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) 
            || email === "" || email === null
        ){
            throw new Error ("E-mail invalido");
        // }
    // } catch(e) {
        // alert(e);
        // return false;
    }
        return email;
        

   }

}