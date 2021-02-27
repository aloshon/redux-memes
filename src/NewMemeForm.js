import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import './NewMemeForm.css';

const NewMemeForm = () => {
    const dispatch = useDispatch();
    const add = (data) => dispatch({type: "ADD", payload: data});

    const initialState = {
        top: '',
        bottom: '',
        image: ''
    }

    const [formData, setFormData] = useState(initialState);

    const [id, setId] = useState(0);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    // Set id on form submit so that React can figure out 
    // which meme is clicked on
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.image){
            alert('Meme must contain image!');
            return
        }
        add({...formData, id: id});
        setId(id + 1);
        setFormData(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="top">Top Text</label>
            <input 
            id="top"
            type="text"
            name="top" 
            placeholder="Top Text" 
            value={formData.top} 
            onChange={handleChange}/>
            <label htmlFor="bottom">Bottom Text</label>
            <input 
            id="bottom"
            type="text"
            name="bottom" 
            placeholder="Bottom Text" 
            value={formData.bottom}
            onChange={handleChange}/>
            <label htmlFor="image">Meme Image</label>
            <input 
            id="image"
            type="text"
            name="image" 
            placeholder="Meme Image" 
            value={formData.image}
            onChange={handleChange}/>
            <button className="submit-meme">Add Meme!</button>
        </form>
    )
}

export default NewMemeForm;