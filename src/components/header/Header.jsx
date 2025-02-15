import logo from '/images/logo.jpg'

export default function Header() {
    const currentTime = new Date().toLocaleTimeString('ru-RU', { hour12: false });
    
    return (
        <header>
            <div className="header-container">
                <img src={logo} alt="logo" className="logo" />
                <span className="time">Текущее время: {currentTime}</span>
            </div>
        </header>
    );
}
