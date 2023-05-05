import './contact.styles.scss'

const Contact = () => {

  return (
    <section id='contact'>
    <div className="contact-section">
      <div  className='section-header'>
        <h1>Contact</h1>
      </div>
      <div className="contact-container">
        <div className='left-inner-container'>
          <h2>Get in touch</h2>
          <h3>Email: irgenws@icloud.com</h3>
          <h3>Phone: +47 48 36 36 81</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magnam id sit repudiandae tempore labore nemo est. Iste, ipsa. Maiores eaque nihil quod expedita esse aspernatur iure explicabo eveniet ipsam.</p>
        </div>
        <div className='right-inner-container'>
          <form className='contact-form'>
            <input className='input-box input' placeholder='Name'/>
            <input className='input-box input' placeholder='Email'/>
            <textarea className='input-box text' placeholder='Message'/>
            <button className='btn-one'>Send</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact; 