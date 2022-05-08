document.querySelector('button').addEventListener('click', ghibli)

function ghibli(){
    let ghibVal = document.querySelector('input').value
    let url = `https://pokeapi.co/api/v2/pokemon/${ghibVal}`

    fetch(url.toLowerCase()) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
    let urlTwo = `https://g.tenor.com/v1/search?q=${data.name}&key=0JEIUSCOIN7Ulimit=3`
    fetch(urlTwo.toLowerCase())
      .then(res => res.json())
      .then(data => {
        console.log(data)
        document.getElementById('gif').src = data.results[0].media[0].gif.url
      })
      .catch(err => {
        console.log(`err ${err}`)
      })
      console.log(data) 
      document.getElementById('sprite').src = data.sprites.front_default
      document.querySelector('h2').innerText = data.name
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
   
}
