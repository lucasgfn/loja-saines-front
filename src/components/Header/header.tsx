import logo from '../../assets/logo.jpg'
import "./header.css"

interface HeaderProps {
    scrollToSection: (section: string) => void

}


export const Header : React.FC<HeaderProps> = ({scrollToSection} ) => {

    return (
        
        <div className="header">
            <img src={logo} id="logo" alt='Logo'/>
            <div className="menu">
                <button onClick={() => scrollToSection('card-grid')}>
                    Produtos
                </button>
                <button onClick={() => scrollToSection('info-grid')}>
                    História da Saines
                </button>
               
            </div>
        </div>
        
    )

}