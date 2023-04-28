import './contact.styles.scss'

const Contact = () => {

  return (
    <section>
    <div className="contact-section">
      <div  className='section-header'>
        <h1>Contact</h1>
      </div>
      <div className="contact-container">
        <div className='left-inner-container'>
          <h4>Contact me</h4>
          <h4>Email: 123Æ</h4>
          <h4>Email: 123Æ</h4>
        </div>
        <div className='right-inner-container'>
          <form>
            <input className='name-input'/>
            <input className='email-input' />
            <textarea className='text-input'/>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact; 