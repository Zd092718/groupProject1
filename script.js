
// creates El for button and definition
var btnEl = document.getElementById('btn')
var resultsReturnEl = document.getElementById('results-return');
var resultsListEl = $('#results-list')

// on click, hides button and shows definition
btnEl.addEventListener('click', showDefinition)
function showDefinition(e){
    e.preventDefault()
    btn.classList.add('hide')
    resultsReturnEl.classList.remove('hide');
    generateData();
}

// api fetch
function generateData(){
  //random word find
var apiKey = `hqt5u78p7wuevhy07jgydyr9ize5b0yt1x4zf5gg5p65hvh1t`
var randomWord = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&excludePartOfSpeech=definite-article%2C%20family-name%2C%20given-name%2C%20idiom%2C%20imperative%2C%20noun-plural%2C%20noun-posessive%2C%20past-participle%2C%20phrasal-prefix%2C%20proper-noun%2C%20proper-noun-plural%2C%20proper-noun-posessive%2C%20suffix%2C%20verb-intransitive%2C%20verb-transitive&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=${apiKey}
`
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
        console.log(dictData.entries)
        console.log(word)

      
          var partOfSpeech = dictData.entries[0].interpretations[0].partOfSpeech; 


        if(dictData.entries === []){
          window.location.reload();
        };
          var partOfSpeech = dictData.entries[0].interpretations[0].partOfSpeech; 

          var wordEl = dictData.entries[0].entry;
          var wordPrint = document.createElement('li');
          wordPrint.classList.add('wordItem');
          wordPrint.textContent = wordEl;
          resultsListEl.append(wordPrint)
          var definition = dictData.entries[0].lexemes[0].senses[0].definition;
          var defPrint = document.createElement('li');
          defPrint.classList.add('defItem');
          defPrint.textContent = definition;
          resultsListEl.append(defPrint);
          var posPrint = document.createElement('li');
          posPrint.classList.add('posItem');
          posPrint.textContent = partOfSpeech;
          resultsListEl.append(posPrint);
          
          switch (partOfSpeech){
              case 'noun' : 
          document.body.style.backgroundColor = 'red'
          document.querySelector('.posItem').style.color = 'red'
            break;
              case 'verb' :
          document.body.style.backgroundColor = 'green'
          document.querySelector('.posItem').style.color = 'green'
          break;            
              case 'adverb' :
          document.body.style.backgroundColor = 'brown'
          document.querySelector('.posItem').style.color = 'brown'
          break;            
              case 'pronoun' :
          document.body.style.backgroundColor = 'lemonchiffon'
          document.querySelector('.posItem').style.color = 'lemonchiffon'
          break;                        
              case 'adjective' :
          document.body.style.backgroundColor = 'darkslateblue'
          document.querySelector('.posItem').style.color = 'darkslateblue' 
          break;           
              case 'article' :
          document.body.style.backgroundColor = 'periwinke'
          document.querySelector('.posItem').style.color = 'periwinke'
          break;                 
              case 'preposition' :
          document.body.style.backgroundColor = 'white' 
          document.querySelector('.posItem').style.color = 'white'
          break;           
              case 'conjunction' :
          document.body.style.backgroundColor = 'orange' 
          document.querySelector('.posItem').style.color = 'orange'
          break;           
          };


    })
})};



