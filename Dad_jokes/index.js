const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('joke_Btn')
jokeBtn.addEventListener('click', () =>{
    generateJoke();
})
// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  try{
      const res = await fetch('https://api.chucknorris.io/jokes/random', config)
      const data = await res.json();
      jokeEl.innerHTML = data.value;
  }
  catch(error){
    console.log("error")
  }
}
