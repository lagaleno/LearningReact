import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend JavaScript framework'
    }, 
    {
        title: 'Why use React?', 
        content: 'React is a favorite JS library among engineers'
    }, 
    {
        title: 'How do you use React?', 
        content: 'You use react by creating Components'
    },
];

const options = [ 
    {
        label: 'The color red',
        value: 'red',
    },
    {
        label: 'The color green',
        value: 'green',
    },
    {
        label: 'A shade of Blue',
        value: 'blue'
    }
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <Accordion  items={items}/><br></br>
            <Search /><br></br>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ?
                <Dropdown 
                    label = "Select a color"
                    selected={selected} 
                    onSelectedChange={setSelected}
                    options={options}
                /> : null
            }
            <br></br>
            <Translate />
        </div>    
    );
};

export default App;