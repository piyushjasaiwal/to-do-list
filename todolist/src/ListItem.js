// import { render } from '@testing-library/react';
import React from 'react';

function ListItems (props){
    const Items = props.items;
    const listItem = Items.map(item => {
        return <div key = {item.key}>
            {item.text}
        </div>
    })
    return(
        <div>
            {listItem}
        </div>
    );
    
}

export default ListItems;