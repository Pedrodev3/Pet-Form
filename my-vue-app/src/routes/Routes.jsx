import React from 'react';
import PetCadastro from '../components/PetCadastro';
import { Routes, Route } from "react-router-dom";

function routes() {
    return (
        <Routes>
            <Route path="/" element={<PetCadastro />} />
        </Routes>
    )
}

export default routes;