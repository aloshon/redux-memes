import React from 'react';
import {useSelector} from 'react-redux';
import NewMemeForm from './NewMemeForm';
import Meme from './Meme';

const MemesList = () => {
    const memes = useSelector(store => store);

    // ul styles are for removing bullet points and centering list
    return (
        <div style={{width: '100%', marginTop: '50px'}}>
            <NewMemeForm />
            <h1>Masterpieces</h1>
            <ul style={{listStyleType: 'none', padding: 0}}>
                {memes.map(m => (
                    <Meme key={m.id}
                    id={m.id}
                    top={m.top} 
                    bottom={m.bottom} 
                    image={m.image} />
                ))}
            </ul>
        </div>
    )
}

export default MemesList;