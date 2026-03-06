<script>
  let joke = '';
  let isSpeaking = false;

  const jokeVoice = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.pitch = 1;
    utterance.rate = 1;
    synth.speak(utterance);
  };

  const getJokes = async () => {
    const apiURL =
      'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      if (data.setup) {
        joke = `${data.setup} ... ${data.delivery}`;
      } else {
        joke = data.joke;
      }
      jokeVoice(joke);
    } catch (error) {
      console.log('Whoops', error);
    }
  };
</script>

<div class="container">
  <button class="jokeButton" on:click={getJokes}>Tell me a Joke</button>
</div>
