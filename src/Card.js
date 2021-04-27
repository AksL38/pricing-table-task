import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
    return (
        <div className="card mb-5 mb-lg-0">
            <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{props.info.title}</h5>
                <h6 className="card-price text-center">{props.info.price}<span className="period">/{props.info.duration}</span></h6>
                <hr></hr>
                <ul className="fa-ul">
                    <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>{props.info.strongUser?<strong>{props.info.user}</strong>:props.info.user}</li>
                    <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>{props.info.storage}</li>
                    <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>{props.info.limit}</li>
                    <li><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>{props.info.access}</li>
                    {
                        !props.info.private
                            ?
                            <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Unlimited Private Projects</li>
                            :
                            <li ><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Unlimited Private Projects</li>
                    }
                    {
                        !props.info.support
                        ?
                        <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Dedicated Phone Support</li>
                        :
                        <li ><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Dedicated Phone Support</li>
                    }
                    {
                        !props.info.subdomain
                        ?
                        <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Free Subdomain</li>
                        :
                        
                        <li ><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>{props.info.strongSubdomain? <><strong>Unlimited</strong> Free Subdomain</>:"Free Subdomain"}</li>
                    }
                    {
                        !props.info.status
                        ?
                        <li className="text-muted"><span className="fa-li"><FontAwesomeIcon icon={faTimes} /></span>Monthly Status reports</li>
                        :
                        <li ><span className="fa-li"><FontAwesomeIcon icon={faCheck} /></span>Monthly Status reports</li>
                    }
                </ul>
                <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
            </div>
        </div>
    );
}

