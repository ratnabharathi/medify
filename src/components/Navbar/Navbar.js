import React from 'react';


const Navbar = () => {
    return ( <
        nav >
        <
        ul >
        <
        li > < Link to = "/" > Home < /Link></li >
        <
        li > < Link to = "/find-doctors" > Find Doctors < /Link></li >
        <
        li > < Link to = "/hospitals" > Hospitals < /Link></li >
        <
        li >
        <
        Link to = "/medicines" > Medicines < /Link></li > { /* Add more links as needed */ } < /ul> </nav >
    );
};

export default Navbar;