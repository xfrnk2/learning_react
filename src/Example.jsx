import React, {useState, useEffect, Fragment} from 'react';

const Example = ({ }) => {
    // let sweats = [50, 30, 100];

    // let banana = sweats[0];
    // let apple = sweats[1];
    // let berry = sweats[2];

    // let [banana, apple, berry] = sweats;
    let [name, setName] = useState("신형준");
    let [num, setNum] = useState(0);

    const changeName = () => {
        setName("신태호");

    };

    const AddNum = () => {
        setNum(num + 1)
    }

    const MinNum = () => {
        setNum(num - 1)
    }


    return (
        <Fragment>
            <div>
                <button onClick={changeName}>바꿔</button>
                {name}
            </div>
            <div>
                {num}
                <button onClick={AddNum}>+</button>
                <button onClick={MinNum}>-</button>
            </div>
        </Fragment>

    );
}
export default Example;