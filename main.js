
let Somalia = ['Iskuul','Dowlad','Guri','Gaari','kitchen','Kumbayuter','Sariir','Degmo','Waqti','Gobol','Magaalo'];
let English = ['School','Government','House','Car','Jiko','Computer','Bed','District','Time','State','city'];

function generateSom() {
    let randomSom = Math.floor(Math.random() * 10);
    document.getElementById("question-input").value = Somalia[randomSom];
    return Somalia[randomSom];
   
  }

  function generateEng(){
      let randomEng = Math.floor(Math.random() * 10);
      document.getElementById("question-input").value = English [randomEng];
      return English[randomEng];
    

  }

function selectLanguage(){
    let lan = document.getElementById("choose-lang").value;
    if(lan == ""){
        alert("Please Select Language");
        reset();
    }
    else if(lan == "Somalia"){  

        document.getElementById("select_language").innerHTML="Dooro Luuqada";
        document.getElementById("header-title").innerHTML ="Baro oo Ciyaar";
        document.getElementById("header-subtitle").innerHTML ="Baro Erayo Cusub oo luuqad kale ah";
        document.getElementById("question-label").innerHTML="U Turjun Eraygan english:";
        document.getElementById("answer-label").innerHTML= "Geli Jawaabtaada:";
        document.getElementById("submit-answer").innerHTML = "Hubi";
        document.getElementById("reset").innerHTML="Markle isku day";
        
        document.getElementById('answer-input').value ="";
        generateSom();
    }else if(lan == "English"){
        document.getElementById("select_language").innerHTML ="Select Language";
        document.getElementById("header-title").innerHTML ="Learn & Play";
        document.getElementById("header-subtitle").innerHTML ="Learn new words of another language";
        document.getElementById("question-label").innerHTML ='Translate this Word to Somali';
        document.getElementById("answer-label").innerHTML = 'Enter Your Answer';
        document.getElementById("submit-answer").innerHTML = 'Check';
        document.getElementById("reset").innerHTML = 'Reset';

        document.getElementById('answer-input').value ="";
        generateEng();
    }
}

function ChechAns(){
    let lan = document.getElementById("choose-lang").value;
    if(lan == "Somalia"){
        let reQue =  document.getElementById("question-input").value;
        let reAns =  document.getElementById("answer-input").value;
        
        console.log(Somalia.indexOf(reQue));
        console.log(English.indexOf(reAns));
        
       
        if(Somalia.indexOf(reQue) == English.indexOf(reAns)){
            document.getElementById('result').innerHTML="Sax..";
            document.getElementById('answer-input').value =""; 
            document.getElementById("result").style.fontSize = "25px"; 
            document.getElementById("result").style.color = "green";  
            generateSom(); 
        }else{
            document.getElementById('result').innerHTML="Qalad..";
            document.getElementById("result").style.fontSize = "25px";
            document.getElementById("result").style.color = "red"; 
        }
}else if(lan == 'English'){
        let reQu = document.getElementById("question-input").value;
        let reAn = document.getElementById("answer-input").value;
        if(English.indexOf(reQu) == Somalia.indexOf(reAn)){
            document.getElementById('result').innerHTML="Correct:)";
            document.getElementById('answer-input').value ="";  
            document.getElementById("result").style.fontSize = "25px"; 
            document.getElementById("result").style.color = "green"; 
            generateEng(); 
            
        }else{
            document.getElementById("result").innerHTML="Incorrect";
           
            document.getElementById("result").style.fontSize = "25px";
            document.getElementById("result").style.color = "red";
        }
}

}

function reset() {
    document.getElementById('choose-lang').value="";
    document.getElementById('question-input').value="";
    document.getElementById('answer-input').value="";
  }







