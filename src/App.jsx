import React from 'react'
import ProfileCard from './componentes/ProfileCard'
import Contador from './componentes/Contador'

const App = () => {
    return (
        <>
            <ProfileCard name="John" lastname="Doe" phone="1 555 55 55" address="A" />
            <ProfileCard name="Jane" lastname="Doe" phone="1 556 55 55" address="B" />
            <ProfileCard name="Tommy" lastname="Doe" phone="1 557 55 55" address="C" />

            <Contador />
        </>
    )
}

export default App
