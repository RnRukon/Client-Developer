import React, { useState } from 'react';
import SignIn from './SingIn';
import SignUp from './SingUp';
import Navigation from '../../Components/Navigation/Navigation';

const SingInLayout = () => {
    const [singIn, setSingIn] = useState(false);
    return (
        <React.Fragment>
            <Navigation />
            {
                singIn ?
                    <SignUp setSingIn={setSingIn} singIn={singIn} /> :
                    <SignIn setSingIn={setSingIn} singIn={singIn} />
            }
        </React.Fragment>
    );
};

export default SingInLayout;