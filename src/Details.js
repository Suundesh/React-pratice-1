import React from 'react';

function Details({name,id,section})
{
    return(
        <div>
            <h3>Name :{name} </h3>
            <h3>Id : {id}</h3>
            <h3>Section : {section}</h3>
            
        </div>


    )
}

export default Details;