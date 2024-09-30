import { PropagateLoader } from 'react-spinners'
import '../css/load.css'

export const LoadPage = ({isExiting}) => {
    return(
        <div className={`load-container ${isExiting ? 'animation-slide-out' : ''} d-flex justify-content-center align-items-center`}>
            <PropagateLoader color="#022b41"/>
        </div>
    )
}