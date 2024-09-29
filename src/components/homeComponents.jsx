import { RightArrow } from './rightArrow'
import '../css/home.css'

export const HomeFisrtPart = () => {
    return (
        <section id='firstPart' className='d-flex flex-column justify-content-center'>
            <div>
                <p>Welcome to Businezz X</p>
                <h1>Join us in growing your <span>business</span>.</h1>
            </div>
            <div>
                <p>Elevate your business with Businezz X, a professional Webflow template</p>
                <button className="btn-contact mt-4 pe-3 py-3 fw-bold rounded-pill"><span className='pe-2'>Contact Us</span> <RightArrow/></button>
            </div>
        </section>
    )
}

export const HomeSecondPart = () => {
    return (
        <section id='secondPart' className='d-flex justify-content-center align-items-center'>
            <div className='d-flex flex-column bg-white px-4 py-5'>
                <p>Book your free consultation</p>
                <h2>Get a free consultation</h2>
                <form action="" className='d-flex flex-column'>
                   <div className='d-block d-md-flex my-3'>
                    <input type="text" className="form-control" placeholder='Name'/>
                    <input type="email" className="form-control"  placeholder='contact@email'/>
                   </div>
                    <textarea name="message" id="message" className="form-control  mb-3">Please type your message here...</textarea>
                    <button className="btn-form rounded-2 p-3 fw-bold">Get in Touch</button>
                </form>
            </div>
            
        </section>
    )
}