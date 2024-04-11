import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '~h07/pages/Home/Home';
import { Contacts } from '~h07/pages/Contacts/Contacts';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Contacts />} path="/contacts" />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
