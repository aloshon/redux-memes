import React from 'react';
import {useDispatch} from 'react-redux';
import './Meme.css';

const Meme = ({id, top, bottom, image}) => {
    const dispatch = useDispatch();
    const remove = (index) => dispatch({type: "REMOVE", payload: index});
    return(
        <li className="meme">
            <h6 className="meme-top">{top}</h6>
                <img className="meme-image" src={image}
                alt="meme-img"/>
            <h6 className="meme-bottom">{bottom}</h6>
            <button className="meme-button" onClick={() => remove(id)}>X</button>
        </li>
    )
}
export default Meme;