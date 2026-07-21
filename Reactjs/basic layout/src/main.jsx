import { createRoot } from 'react-dom/client';
import Left from './left.jsx';
import './index.css';
import Bottomleft from './bottomleft.jsx';
import Bottomright from './bottomright.jsx';
import Top from './top.jsx';
var root=document.getElementById('root');
createRoot(root).render(
<> 
< Left/>,
<Bottomleft/>,
<Bottomright/>,
<Top/>
</>
);
