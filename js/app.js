window.onload = function () {
//  evento para inserir a mensagem//
  var button = document.getElementById("button-twittear");
    button.addEventListener("click", PostMessage); //adicionando o contador de letras//
  var textArea = document.getElementById("words");
    textArea.addEventListener("keyup", ChangeColor); 
  };
// função para mudar a cor do contador 
  function ChangeColor (){
    var maximum = "140";
    var twitt = document.getElementById("words").value;
    var long = twitt.length;
    var character=document.getElementById("character");
      // mudando a cor de acordo com a quantidade de letras//
      if(long >="0" & long < "120"){
        character.style.color="green";
        character.value = maximum-long;
      }
      else if(long>="120" & long<"130"){
        character.style.color="yellow";
        character.value = maximum-long;
      }
      else if(long>="130" & long<="140"){
        character.style.color="red";
        character.value = maximum-long;
      }
      else if(long>"140"){
        character.value =("-"+(long-maximum));
      }
  };
  // função para aumentar a caixa
  function autoResize()
    {
        objTextArea = document.getElementById('words');
        while (objTextArea.scrollHeight > objTextArea.offsetHeight)
        {
            objTextArea.rows += 1;
        }
    }
  
// função para postar a mensagem//
  function PostMessage() {
    var length = document.getElementById("words").value.length;
      if (length>"0" & length<="140"){
        var textArea = document.getElementById("words").value;
        var container = document.createElement("div");
        var twitt= document.createElement("p");
        var date = new Date();
        var content = document.createTextNode(textArea + " " + date.getHours()+":"+date.getMinutes());//adicionando hora//
        var main = document.getElementById("boxOne")
          container.appendChild(twitt);
          twitt.appendChild(content);
          twitt.classList.add ("twitt");
          main.appendChild(twitt);

        }
    };
  
