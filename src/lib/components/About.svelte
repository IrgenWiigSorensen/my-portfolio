<script>
  import { introdata, workExperience, education } from '../content.js';
  import Typewriter from 'svelte-typewriter';
  import profileimg from '../../assets/Profilbilde.jpg';

  const { title, title2, animated, aboutMe } = introdata;
</script>

<section id="about">
  <div class="about-section">
    <div class="section-header">
      <h1>About Me</h1>
    </div>

    <!-- First about me container with typewriter and img -->
    <div class="about-container-1">
      <div class="left-inner-container">
        <h2>{title}</h2>
        <h2>{title2}</h2>
        <h2>
          <Typewriter loop>
            {#each animated as text}
              <p>{text}</p>
            {/each}
          </Typewriter>
        </h2>
      </div>
      <div class="right-inner-container">
        <img src={profileimg} alt="Profile picture" />
      </div>
    </div>

    <!-- Second about me container with a short info -->
    <div class="about-container-2">
      <div class="left-inner-container">
        <h3>A bit about myself</h3>
      </div>
      <div class="right-inner-container">
        <p>{aboutMe}</p>
      </div>
    </div>

    <!-- Work experience -->
    <div class="about-container-2">
      <div class="left-inner-container">
        <h3>Work Timeline</h3>
      </div>
      <div class="right-inner-container">
        {#each workExperience as data}
          <div class="work-experience">
            <h5>{data.title}</h5>
            <p>{data.description}</p>
          </div>
        {/each}
      </div>
    </div>

    <!-- Education -->
    <div class="about-container-2">
      <div class="left-inner-container">
        <h3>Education</h3>
      </div>
      <div class="right-inner-container">
        {#each education as data}
          <div class="work-experience">
            <h5>{data.title}</h5>
            <p>{data.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
