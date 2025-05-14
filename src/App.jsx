import React from 'react';
import DragonAnimation from './components/DragonAnimation.jsx';
import Intro from "./components/Intro.jsx";
import ContactMe from "./components/ContactMe.jsx";
import SkillsAndKnowledge from "./components/SkillsAndKnowledge.jsx";

function App() {
    return (
        <div className="app" style={{ position: 'relative', minHeight: '100vh', fontFamily: 'sans-serif', color: '#fff' }}>
            <DragonAnimation />
            <div>
               <Intro/>
                <SkillsAndKnowledge/>
                <ContactMe/>
            </div>
        </div>
    );
}

export default App;
