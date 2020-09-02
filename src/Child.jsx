import React from 'react';

const Child = ({person}) => {
    return (
        <div>
            이름 : {person.name}
            나이 : {person.age}
        </div>
    )
}

export default Child;