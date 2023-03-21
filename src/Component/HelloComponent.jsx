// agar function arrow Hello Component bisa berjalan di react maka tambahkan react
import React from 'react';
import './HelloComponent.css';  

const HelloComponent = () => {
    return <p className='text-p'>ini adalah arrow function yang ada di folder</p>
}

// agar component ini dapat di pakai
export default HelloComponent;