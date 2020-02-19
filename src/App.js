import React from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import Detail from './components/Detail';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Table></Table>
            <Detail></Detail>
        </div>
    );
}

export default App;
