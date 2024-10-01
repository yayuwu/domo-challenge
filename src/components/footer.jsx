import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logoWhite from '/logo-white.svg'

import '../css/footer.css'

export const Footer = () => {
    return (
        <footer className='mt-4' id='contact'>
            <div className='container-fluid mt-5 text-white fw-medium d-flex row-gap-3 flex-column  pt-5 px-4'>
                <div className='px-3 pt-3 d-flex justify-content-between flex-wrap'>
                    <div className='contact-text'>
                        <h3 className='mb-4'>¡Contáctame si te gustó!</h3>
                        <p className='fw-light'>Espero que hayas disfrutado navegando e interactuando con las animaciones tanto como yo lo hice. Te recomiendo que lo pruebes (si estás en computadora) también su versión mobile.</p>
                        <button className='rounded-pill py-2 my-2 px-5 fw-bold'><a href='https://drive.google.com/file/d/1rCvT8Ks41M0F6D2Ufp9ptRlBxlT6H0pC/view?usp=sharing' target='_blank'>CV</a></button>
                    </div>
                    <div>
                        <img src={logoWhite} alt="logo white" id='logo-white' className='pt-4 pb-2'/>
                    </div>
                </div>
                <div className='d-flex column-gap-3 justify-content-center flex-wrap align-items-center icons-container pt-4'>
                    <a href="https://www.linkedin.com/in/yael-correa/" target='_blank'><FontAwesomeIcon icon={faLinkedin} size="2x" color="#ffff" /></a>
                    <a href="https://github.com/yayuwu" target='_blank'><FontAwesomeIcon icon={faGithub} size="2x" color="#ffff" /></a>
                    <a href="https://wa.me/5491170897175?text=Hola%20Yael,%20me%20gustaría%20saber%20más%20sobre%20tu%20trabajo." target='_blank'><FontAwesomeIcon icon={faWhatsapp}  size="2x" color="#ffff" /></a>
                </div>
                <div className='d-flex justify-content-center'>
                    <p className='fw-light copyright text-center'>Copyright © 2024 Yael Correa. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}