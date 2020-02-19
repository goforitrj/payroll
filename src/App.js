import React, { useState } from 'react';
import './App.css';
import Table from './components/TotalTable';
import Header from './components/Header';
import Detail from './components/DetailModal';
import Register from './components/RegisterModal';

function App() {
    const [isDetailOpen, toggleDetailOpen] = useState(false);
    const [isRegisterOpen, toggleRegisterOpen] = useState(false);

    const onToggleDetail = () => toggleDetailOpen(!isDetailOpen);
    const onToggleRegister = () => {
        console.log('?');
        toggleRegisterOpen(!isRegisterOpen);
    };

    const onSort = () => {
        console.log('sort');
    };
    return (
        <div className="App">
            <Header></Header>
            <Table
                onToggleDetail={onToggleDetail}
                onToggleRegister={onToggleRegister}
                onSort={onSort}
            ></Table>
            <Detail
                onToggleDetail={onToggleDetail}
                isDetailOpen={isDetailOpen}
            ></Detail>
            <Register
                isRegisterOpen={isRegisterOpen}
                onToggleRegister={onToggleRegister}
            ></Register>
        </div>
    );
}

export default App;
