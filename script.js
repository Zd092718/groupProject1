
// creates El for button and definition
btnEl = document.getElementById('btn')
reultsReturnEl = document.getElementById('results-return');
resultsListEl = document.querySelector('#results-list')


// on click, hides button and shows definition
btnEl.addEventListener('click', showDefinition)
function showDefinition(e){
    e.preventDefault()
    btn.classList.add('hide')
    reultsReturnEl.classList.remove('hide');
    generateData();
    colorPart();
}

// api fetch
function generateData(){
  //random word find
var apiKey = `hqt5u78p7wuevhy07jgydyr9ize5b0yt1x4zf5gg5p65hvh1t`
var randomWord = `http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=${apiKey}`
fetch(randomWord)
.then(response => {
    	if(!response.ok){
            throw response.json();
        }
        return response.json();
    })
.then(genRando => {
  //random word dictionary data
    console.log(genRando)
    var word = genRando.word.split('-')[0];
    // var dictApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    var linguaApi = `https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${word}`
    fetch(linguaApi, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "3fc93a864fmsha6eb4d6d234e809p1d678fjsn6ae16889f063",
        "x-rapidapi-host": "lingua-robot.p.rapidapi.com"
    }
    })
	  .then (response =>{
          if(!response.ok){
        throw response.json();
    }
    return response.json()
    })
    .then(dictData => {
        console.log(dictData)
        console.log(word)
        //all subsequent calls need to go here if using the fetch
          // var partofspeech = dictData.entries[0].lexemes[0].partofspeech; //redefine this to match console.log desired in the localStorage

          // switch (partofspeech){
          //     case x : //this should be part of speech in the localStorage data
          // document.body.style.backgroundColor = 'red'
          //     case b :
          // document.body.style.backgroundColor = 'green'            
          //     case c :
          // document.body.style.backgroundColor = 'brown'            
          //     case d :
          // document.body.style.backgroundColor = 'lemonchiffon'            
          //     case e :
          // document.body.style.backgroundColor = 'darkslateblue'            
          //     case c :
          // document.body.style.backgroundColor = 'periwinke'            
          //     case d :
          // document.body.style.backgroundColor = 'white'            
          //     case e :
          // document.body.style.backgroundColor = 'orange'            
          // };
          var definition = dictData.entries[0].lexemes[0].senses[0].definition;
          var defPrint = document.createElement('li');
          defPrint.textContent = definition;
          resultsListEl.append(defPrint);
          var example;

    })
})};




    //color link changes
    // will need to redefine parts of speech variable to match data from api
    // will need to change colors of background to what you wants


