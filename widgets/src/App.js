import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

//component to decide which component to show

const App = () => {
    const [selected, setSelected] = useState(options[0])

    return (
        <div>
            <Header />
            <Route path="/">< Accordion items={items}/></Route>
            <Route path="/list">< Search/></Route>
            <Route path="/dropdown">
                <Dropdown 
                    label="select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate"><Translate items={items}/></Route>
        </div>    
    );
};

export default App;