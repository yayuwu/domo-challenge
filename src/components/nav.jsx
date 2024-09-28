import '../css/nav.css';
import logo from '/logo.webp'

export const Nav = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid flex-nowrap">
                <a className="navbar-brand border- border-custom" href="#"><img src={logo} alt="logo" className='w-50'/></a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offCanvasNavbar" aria-controls="offCanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offCanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar nav pe-3 justify-content-center align-items-center">
                            <li className="nav-link"><a href="#" className="nav-link active">Home</a></li>
                            <li className="nav-link"><a href="#" className="nav-link active">About</a></li>
                            <li className="nav-link"><a href="#" className="nav-link active">Pages</a></li>
                            <li className="nav-link"><a href="#" className="nav-link active">Packages</a></li>
                            <li className="nav-link"><a href="#" className="nav-link active">Contact</a></li>
                            <li className="nav-link"><a href="#" className="nav-link-active">Cart[0]</a></li>
                            <button className="btn-consultation">Free Consultation</button>
                        </ul>
                    </div>
                </div>
                <div className="d-none d-lg-flex justify-content-between align-items-center w-100">
                    <ul className="navbar nav pe-3 justify-content-start">
                        <li className="nav-link"><a href="#" className="nav-link-active">Home</a></li>
                        <li className="nav-link"><a href="#" className="nav-link-active">About</a></li>
                        <li className="nav-link"><a href="#" className="nav-link-active">Pages</a></li>
                        <li className="nav-link"><a href="#" className="nav-link-active">Packages</a></li>
                        <li className="nav-link"><a href="#" className="nav-link-active">Contact</a></li>
                        <li className="nav-link"><a href="#" className="nav-link-active">Cart[0]</a></li>
                    </ul>
                        <div>
                            <button className="btn-consultation">Free Consultation</button>
                        </div>
                </div>
            </div>
        </nav>
    );
};
