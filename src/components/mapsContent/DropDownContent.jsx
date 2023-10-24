import { useState } from 'react';

const DropDownContent = () => {
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const toggleDropdown1 = () => {
        setIsDropdownOpen1(!isDropdownOpen1);
    };

    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
    };

    return (
        <div className="maps-box" style={{ margin: '0 -40px' }}>
            <div className="lista-pastas" style={{ justifyContent: 'start' }}>
                <div
                    className="filter-map dropdown"
                    onClick={toggleDropdown1}
                    style={{
                        width: '30vh',
                        textAlign: 'center',
                        fontWeight: 400,
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <div>SÃO PAULO</div>
                    <img style={{ width: 25, height: 20, marginTop: 5 }} src="../images/seta.png" />
                    <div className="dropdown-content" style={{ display: isDropdownOpen1 ? 'block' : 'none' }}>
                        <a href="#">RIO DE JANEIRO</a>
                        <a href="#">MINAS GERAIS</a>
                        <a href="#">MATO GROSSO</a>
                    </div>
                </div>
                <div
                    className="filter-map dropdown"
                    onClick={toggleDropdown2}
                    style={{
                        width: '30vh',
                        textAlign: 'center',
                        fontWeight: 400,
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <div>SÃO PAULO</div>
                    <img style={{ width: 25, height: 20, marginTop: 5 }} src="../images/seta.png" />
                    <div className="dropdown-content" style={{ display: isDropdownOpen2 ? 'block' : 'none' }}>
                        <a href="#">SÃO JOSÉ</a>
                        <a href="#">CAMPINAS</a>
                        <a href="#">SÃO CAETANO</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropDownContent;
