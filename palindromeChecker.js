function palindromeChecker() {
  let word = document.getElementById("text-input").value;

  //Remove alguns acentos e espaços e coloca a palavra em minusculas
  let newWord = word.replace(/[\s_,-.:()]/g, "").toLowerCase();

  if (newWord !== "") {
    var reverseWord = newWord.split("").reverse().join("");

    //Verificar se a palavra invertida é igual a palavra inicial
    if (newWord === reverseWord) {
      document.getElementById("result").innerHTML = ` ${word} is a palindrome`;
    } else {
      document.getElementById(
        "result"
      ).innerHTML = ` ${word}  is not a palindrome`;
    }
  } else {
    alert("Please input a value.");
  }
}
