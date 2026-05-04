import { useState } from "react";

function Card({ id, name, info, price, image ,removeTour}) {
    const [readmore, setReadMore] = useState(false);

    const description = readmore ? info : `${info.substring(0, 200)}...`

    function readmoreHandler() {
        setReadMore(!readmore);
    }

    

    return (
        <div className="card">
            <img className="image" src={image}></img>
            <div className="tour-info">
                <div className="tour-detail">
                    <h4 className=" tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span onClick={readmoreHandler} className="read-more">
                        {readmore ? `show less` : `Read more`}
                    </span>
                </div>

            </div>

            <button onClick={() => removeTour(id)} className="btn-red">
                Not Interested
            </button>
        </div>
    );
}

export default Card;