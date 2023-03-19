import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Rpgs from './pages/Rpgs';
import { useState } from 'react';


function App() {
    const [token, setToken] = useState()

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login token={token} setToken={setToken} />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="rpgs" element={<Rpgs />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;