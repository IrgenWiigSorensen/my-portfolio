import './jokeTeller.styles.scss'
import { useState } from 'react'; 
// import robotGif from '../../assets/robot.gif'


const JokeTeller = () => {
  // const [buttonDisabled, setButtonDisabled] = useState(false);

  // const toggleJokeButton = () => {
  //   setButtonDisabled(!buttonDisabled); 
  // }
  
  const jokeVoice = (joke) =>  {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(joke);
    utterance.lang = 'en-GB'; // Set language to English (United Kingdom)
    utterance.pitch = 1; // Set pitch to 1
    utterance.rate = 1; // Set pitch to 1
    synth.speak(utterance);

  };

  const getJokes = async() => {
    let joke = '';
    const apiURL = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

    try {
        const response =  await fetch(apiURL);
        const data = await response.json();
       
        if(data.setup) {
            joke = `${data.setup} ... ${data.delivery}`; 
        } else {
            joke = data.joke;
        }
        //Text-to-Speech
        jokeVoice(joke)
        //Disable Button
        // toggleJokeButton(); 



    } catch (error) {
        //Catch Errors Here
        console.log('Whoops', error)
    }
};




  return (
      <div className="container">
        <button className='jokeButton' onClick={getJokes}>Tell me a Joke</button>
      </div>
  )
}

export default JokeTeller; 

