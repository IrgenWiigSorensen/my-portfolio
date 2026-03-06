<script>
  import emailjs from '@emailjs/browser';

  const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  let formEl;

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        emailjsServiceId,
        emailjsTemplateId,
        formEl,
        emailjsPublicKey
      );
      console.log(result.text);
      formEl.reset();
    } catch (error) {
      console.log(error.text);
      alert('Error - could not send email. Try again later');
    }
  };
</script>

<section id="contact">
  <div class="contact-section">
    <div class="section-header">
      <h1>Contact</h1>
    </div>
    <div class="contact-container">
      <div class="left-inner-container">
        <h3>Get in touch</h3>
        <h5>Email: irgenws@icloud.com</h5>
        <h5>Phone: +47 48 36 36 81</h5>
        <p>
          I would be delighted to collaborate with you on creating an application that aligns with your business goals
          and delivers an exceptional user experience. If you are looking for a dedicated partner to help elevate your
          web projects, I would be very interested in connecting with you. Please feel free to reach out, and we can
          explore the possibilities together.
        </p>
      </div>
      <div class="right-inner-container">
        <form class="contact-form" bind:this={formEl} on:submit={sendEmail}>
          <input class="input-box input" placeholder="Name" type="text" name="from_name" />
          <input class="input-box input" placeholder="Email" type="email" name="from_email" />
          <textarea class="input-box text" placeholder="Message" name="message"></textarea>
          <button class="btn-one" type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
</section>
