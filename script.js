
// creates El for button and definition
btnEl = document.getElementById('btn')
reultsReturnEl = document.getElementById('results-return')


// on click, hides button and shows definition
btnEl.addEventListener('click', showDefinition)
function showDefinition(e){
    e.preventDefault()
    btn.classList.add('hide')
    reultsReturnEl.classList.remove('hide')
}

// api fetch
function generateData(){
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
    console.log(genRando)
    var word = genRando.word;
    var dictApi = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    fetch(dictApi)
    .then(response => {
        if(!response.ok){
            throw response.json();
        }
        return response.json();
    })
    .then(dictData => {
        console.log(dictData)
    });
})
};
generateData();