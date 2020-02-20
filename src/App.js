import React, { useState } from 'react';
import './App.css';
import Table from './components/TotalTable';
import Header from './components/Header';
import Detail from './components/DetailModal';
import Register from './components/RegisterModal';
import Compare from './components/CompareModal';

function App() {
    const [isDetailOpen, toggleDetailOpen] = useState(false);
    const [isRegisterOpen, toggleRegisterOpen] = useState(false);
    const [isCompareOpen, toggleCompareOpen] = useState(false);
    const [viewMode, setViewMode] = useState('table');

    const onToggleDetail = () => toggleDetailOpen(!isDetailOpen);
    const onToggleRegister = () => {
        toggleRegisterOpen(!isRegisterOpen);
    };
    const onToggleCompareOpen = () => {
        console.log(isCompareOpen);
        toggleCompareOpen(!isCompareOpen);
    };
    return (
        <div className="App">
            <Header></Header>
            <Table
                onToggleDetail={onToggleDetail}
                onToggleRegister={onToggleRegister}
                onToggleCompareOpen={onToggleCompareOpen}
            ></Table>
            <Detail
                onToggleDetail={onToggleDetail}
                isDetailOpen={isDetailOpen}
            ></Detail>
            <Register
                isRegisterOpen={isRegisterOpen}
                onToggleRegister={onToggleRegister}
                isCompareOpen={isCompareOpen}
            ></Register>
            <Compare
                isCompareOpen={isCompareOpen}
                onToggleCompareOpen={onToggleCompareOpen}
            ></Compare>
        </div>
    );
}

export default App;
