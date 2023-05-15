import { useEffect, useState, useRef } from "react";
import "./modal.styles.scss";
import JokeTeller from "../jokeTeller/jokeTeller.component";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const refModal = useRef(null);

  const toggleOutsideModal = (e) => {
    if(refModal.current?.contains(e.target)) {
      return;
    } else{
        setModal(!modal);
      }
  };

  const toggleModalButton = () => {
    setModal(!modal);
  }

  useEffect(() => {
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  }, [modal])


  return (
    <>
      <button onClick={toggleModalButton} className="project-button"> 
        Joke
      </button>

      {modal && (
        <div onClick={toggleOutsideModal} className="modal">
          {/* <div onClick={toggleModal} className="overlay"></div> */}
          <div className="modal-content" ref={refModal}>
              <JokeTeller  />
              <div onClick={toggleModalButton} className="modal-menu-bars">
                <div className={`modal-menu-bar1`}></div>
                <div className={`modal-menu-bar2`}></div>
                <div className={`modal-menu-bar3`}></div>
              </div>
            {/* <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button> */}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal; 