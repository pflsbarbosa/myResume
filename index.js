/*   Overlay  */
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
  /* calling quote type writter effect function */

}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function ExpandNavNar() {
  var x = document.getElementById("navbar-vertical");
  if (x.className === "navbar navbar-expand-lg navbar-expand-sm navbar-default") {
    x.className = "navbar";
  }
}

function myAge(){
  var today = new Date();
  var ty = today.getFullYear();
  var tm = today.getMonth()+1;
  var tday = today.getDate();
  var myBirthdate = "01/12/1971";
  myBirthdate = new Date(myBirthdate);  
  if(tm>myBirthdate.getMonth()){  
    document.getElementById("myAge").innerHTML =   (ty - myBirthdate.getFullYear()) + " years old.";      
  }
}

function fullYear() {
  var d = new Date();
  var dy = d.getFullYear();
  var dm = d.getMonth()+1;
  var dday =d.getDate();
  document.getElementById("copyright").innerHTML = "© " + dy+"/"+dm+"/"+dday + " Paulo Barbosa";
}

function printMyWindow() {
  window.print();
}

/* quote type writter effect function */
/* https://css-tricks.com/snippets/css/typewriter-effect/
https://www.jqueryscript.net/blog/best-typewriter-typing-animation.html
*/

var i = 0;
var n = 0;
var callCounters = [callQuoteCardCount=0,
                    callQuoteProfileCount=0, callQuoteExperiencesCount=0,
                    callQuoteAbilitiesCount=0, callQuoteProjFrontEndCount=0,
                    callQuoteProjBackEndCount=0];

//var callQuoteCardCount = 0;
var finalQuoteCardCount = 0;
//var callQuoteProfileCount = 0;
var finalQuoteProfileCount =0;
//var callQuoteExperiencesCount=0;
var finalQuoteExperiencesCount=0;
//var callQuoteAbilitiesCount=0;
var finalQuoteAbilitiesCount=0;
//var callQuoteProjFrontEndCount=0;
var finalQuoteProjFrontEndCount=0;
//var callQuoteProjBackEndCount=0;
var finalQuoteProjBackEndCount=0;
VarObject={i, n};

function typeWriterQuote(finalCounter, quoteId, txt_quote, hrId, authorId, txt_author) {
console.log(" start function"+"...quoteId="+quoteId);
  let speed = 10; /* The speed/duration of the effect in milliseconds */
  quoteId = this.quoteId;
  txt_quote = this.txt_quote;
  hrId = this.hrId;
  authorId = this.authorId;
  txt_author = this.txt_author;
  finalCounter = this.finalCounter;
  console.log("after start function and after variables declaration "+"...quoteId="+quoteId+"finalCounter"+finalCounter);
  console.log("Início i="+VarObject.i+"...n="+VarObject.n);
  console.log("Início i="+i+"...n="+n+"...callQuoteCardCount="+callQuoteCardCount+"...callQuoteExperiencesCount="+callQuoteExperiencesCount+"...finalQuoteCardCount="+finalQuoteCardCount+"...finalQuoteExperiencesCount="+finalQuoteExperiencesCount);

  if ((finalCounter===0 )) {

    console.log("Passou a 1ª condição  i=" + i);

    if (i < (txt_quote.length + 1)) {
      document.getElementById(quoteId).innerHTML += txt_quote.charAt(i - 1);
      setTimeout(typeWriterQuote, speed);
      i++;
      console.log("Acréscimo de i=" + i);
      /*
      if (i < (txt_quote.length + 1) && callCount === 0) {
        i++;
        console.log("Acréscimo de i=" + i);
      } */
    }else {

      console.log("N começou e aqui conta i=" + i+"... e n="+n);

      //document.getElementById(hrId).style.display = "block";
      if (n < txt_author.length) {
        document.getElementById(authorId).innerHTML += txt_author.charAt(n);
        setTimeout(typeWriterQuote, speed);
        n++;
        console.log("n="+n)
      }else{
        console.log("n atingiu final n="+n)
        i=0;
        n=0;
        console.log("finalCounter="+finalCounter);

        /* criar aqui um for para ler se o parâmetro entrada é igual a algum deles

        if (quoteId==="experienceSubTitleQuote") {
          finalQuoteExperiencesCount++;
        }else if (quoteId==="quote_TELawrence_Card") {
          finalQuoteCardCount++;
        }
*/
        console.log("atribuição i=0 ...  i=" + i+"...n="+n+ " ...finalQuoteExperiencesCount="+finalQuoteExperiencesCount+ " ...finalQuoteCardCount="+finalQuoteCardCount);
        return VarObject={i, n} ; //Retornar pq fora da função ele volta a zero
      }
    }
  }
console.log("final i="+i);
}




// calling writter effects
function quoteCard() {

  if (callQuoteCardCount === 0) {
    typeWriterQuote(
      finalCounter = finalQuoteCardCount,
      quoteId = "quote_TELawrence_Card",
      txt_quote = "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
      hrId = "quote_hr_Card",
      authorId = "quote_author_Card",
      txt_author = "Mahatma Gandhi"
    );
  }
  callQuoteCardCount++;
}
function quoteProfile() {
  if (callQuoteProfileCount===0) {
    typeWriterQuote(
      finalCounter = finalQuoteProfileCount,
      quoteId = "profileSubTitleQuote",
      txt_quote = "“Be yourself, everyone else is already taken.”",
      hrId = "profileHrQuote",
      authorId = "profileQuoteAuthor",
      txt_author = "Oscar Wilde"
    );
  }
callQuoteProfileCount++;
}
function quoteExperiences() {
  if (callQuoteExperiencesCount===0) {
    typeWriterQuote(
      finalCounter=finalQuoteExperiencesCount,
      quoteId = "experienceSubTitleQuote",
      txt_quote = "“Our greatest glory is not in never falling, but in rising every time we fall.”",
      hrId = "experienceHrQuote",
      authorId = "experienceQuoteAuthor",
      txt_author = "Confucius"
    );

  }
callQuoteExperiencesCount++;
}
function quoteAbilities() {
  if (callQuoteAbilitiesCount===0) {
    typeWriterQuote(
      finalCounter=finalQuoteAbilitiesCount,
      quoteId = "abilitieSubTitleQuote",
      txt_quote = "“The only true wisdom is in knowing you know nothing.”",
      hrId = "abilitieHrQuote",
      authorId = "abilitieQuoteAuthor",
      txt_author = "Socrates"
    );

  }
callQuoteAbilitiesCount++;
}
function quoteProjFrontEnd() {
  if (callQuoteProjFrontEndCount===0) {
    typeWriterQuote(
      finalCounter=finalQuoteProjFrontEndCount,
      quoteId = "projFrontEndSubTitleQuote",
      txt_quote = "“Design is intelligence made visible.”",
      hrId = "projFrontEndHrQuote",
      authorId = "projFrontEndQuoteAuthor",
      txt_author = "Alina Wheeler"
    );

  }
callQuoteProjFrontEndCount++;
}
function quoteProjBackEnd() {
  if (callQuoteProjBackEndCount===0) {
    typeWriterQuote(
      finalCounter=finalQuoteProjBackEndCount,
      quoteId = "projBackEndSubTitleQuote",
      txt_quote = "“Everything you can imagine is real.”",
      hrId = "projBacktEndHrQuote",
      authorId = "projBackEndQuoteAuthor",
      txt_author = "Pablo Picasso"
    );

  }
callQuoteProjBackEndCount++;
}

/* End of writter effects */
