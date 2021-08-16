

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

var dictApi = `https://api.dictionaryapi.dev/api/v2/entries/en/hello`
var linguaApi = `https://lingua-robot.p.rapidapi.com/language/v1/entries/en/hello`
fetch(linguaApi, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "3fc93a864fmsha6eb4d6d234e809p1d678fjsn6ae16889f063",
		"x-rapidapi-host": "lingua-robot.p.rapidapi.com"
	}
})
.then(response => {
	if(!response.ok){
        throw response.json();
    }
    return response.json()
})
.then(linguaData => {
    console.log(linguaData)
})
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




    //color link changes
    // will need to redefine parts of speech variable to match data from api
    // will need to change colors of background to what you wants

    var partofspeech = data.words.speechpart //redefine this to match console.log desired in the localStorage

    switch (partofspeech){
        case x : //this should be part of speech in the localStorage data
    document.body.style.backgroundColor = 'red'
        case b :
    document.body.style.backgroundColor = 'green'            
        case c :
    document.body.style.backgroundColor = 'brown'            
        case d :
    document.body.style.backgroundColor = 'lemonchiffon'            
        case e :
    document.body.style.backgroundColor = 'darkslateblue'            
        case c :
    document.body.style.backgroundColor = 'periwinke'            
        case d :
    document.body.style.backgroundColor = 'white'            
        case e :
    document.body.style.backgroundColor = 'orange'            
    };
   