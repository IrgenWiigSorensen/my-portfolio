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
          <h3>Get in touch</h3>
          <h4>Email: 123Æ</h4>
          <h4>Email: 123Æ</h4>
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