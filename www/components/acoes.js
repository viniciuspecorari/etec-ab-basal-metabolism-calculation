// This is a JavaScript file

//pega o valor dos inputs 
var id = $('#idade').val();
var alt = $('#altura').val();
var pes = $('#peso').val();

$(document).on('click', '#continuar', function(){

//verifica a opção selecionada
var atiFisica;
if( atiFisica = $("input[name='seden']:checked").val()){

    //pega o valor do select sexo
    if($("#sexo option:selected").val() == "masculino"){
      var sex = "Masculino";

      //faz a conta
      conta = 1.2 * 66 + [(13,7 * pes) + ( 5 * alt - (6,8 * id))];
      $('#teste').val(conta);
      alert("OLAAAAA");


    }else{
      sex="Feminino";
    }

}if(atiFisica =$("input[name='levAtivo']:checked").val()){
    
    //pega o valor do select sexo
    if($("#sexo option:selected").val() == "masculino"){
      var sex = "Masculino";
    }else{
      sex="Feminino";
    }
}if(atiFisica = $("input[name='modAtivo']:checked").val()){
    
    //pega o valor do select sexo
    if($("#sexo option:selected").val() == "masculino"){
      var sex = "Masculino";
    }else{
      sex="Feminino";
    }
}if(atifisica =$("input[name='altatAtivo']:checked").val()){
    
    //pega o valor do select sexo
    if($("#sexo option:selected").val() == "masculino"){
      var sex = "Masculino";
    }else{
      sex="Feminino";
    }
}if(exAtivo =$("input[name='exAtivo']:checked").val()){
    
    //pega o valor do select sexo
    if($("#sexo option:selected").val() == "masculino"){
      var sex = "Masculino";
    }else{
      sex="Feminino";
    }
}

});


