import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './Home';
import Atv01 from './atv01/components/Atv01';
import Atv02 from './atv02/components/Atv02';
import Atv03 from './atv03/components/Atv03';
import Atv04 from './atv04/components/Atv04';
import Atv05 from './atv05/components/Atv05';

export default function minhasRotas() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atv01" element={<Atv01 />} />
            <Route path="/atv02" element={<Atv02 />} />
            <Route path="/atv03" element={<Atv03 />} />
            <Route path="/atv04" element={<Atv04 />} />
            <Route path="/atv05" element={<Atv05 />} />
        </Routes>
        </BrowserRouter>
    );
}