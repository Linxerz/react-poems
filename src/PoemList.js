import React from 'react';
import { PoemCard } from './PoemCard';

export function PoemList(props){
    return (
        <div className="ui cards" style={{ marginTop: 20 }}>
        {props.poemList.map( poem => (
            <PoemCard
                name={poem.name}
                content={poem.content}
                deletePoem={props.deletePoem}
                editPoem={props.editPoem}
            />
        ))}
        </div>
    )
}