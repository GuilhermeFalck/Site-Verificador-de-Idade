function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var nasc = document.getElementById("nasc");
  var res = document.getElementById("res");
  var name = document.getElementById("name");
  var nameV = name.value;
  if (nasc.value.length == 0 || Number(nasc.value) > ano) {
    alert("[ERRO]Verifique os dados e tente novamente");
  } else {
    var sex = document.getElementsByName("sex");
    var idade = ano - Number(nasc.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (sex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "./imagens/criancaM.png");
      } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute("src", "./imagens/jovemM.png");
      } else if (idade >= 21 && idade < 60) {
        //Adulto
        img.setAttribute("src", "./imagens/adultoM.png");
      } else {
        //idoso
        img.setAttribute("src", "./imagens/idosoM.png");
      }
    } else if (sex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "./imagens/criancaF.png");
      } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute("src", "./imagens/jovemF.png");
      } else if (idade >= 21 && idade < 60) {
        //Adulto
        img.setAttribute("src", "./imagens/adultaF.png");
      } else {
        //idoso
        img.setAttribute("src", "./imagens/idosoF.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Olá ${nameV} você é ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
