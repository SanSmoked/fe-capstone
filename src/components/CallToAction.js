import { useNavigate } from "react-router-dom";
import './CallToAction.css';

function CallToAction(props){
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate(props.navigateTo);
    }

    return(
        <button onClick={handleClick}>
            <p className="callToAction-content">
               {props.text}
            </p>
        </button>
    );
}

export default CallToAction;