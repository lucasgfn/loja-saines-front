import { useEffect, useState } from "react";
import "./info.css";
import info_model from '../../assets/info_model.png'

export const Info: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [isModelVisible, setModeIsVisible] = useState<boolean>(false);
    
    const handleScroll = () => {
        const position = window.scrollY;
        if (position > 100) {
            setIsVisible(true);
            setModeIsVisible(true);
        } else {
            setIsVisible(false);
            setModeIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); 

    return (
        <>
        <div className="info-container">
            <div className={`infos ${isVisible ? 'visible' : ''}`}>
                <h2>A Criação: A Coleção "Essência da Natureza"</h2>
                <p>
                    Uma das nossas criações mais recentes é a coleção "Essência da Natureza", que celebra a beleza e a diversidade do mundo natural. Inspirada por paisagens exuberantes e elementos orgânicos, esta linha inclui roupas feitas de tecidos sustentáveis, acessórios artesanais e peças de decoração que trazem a natureza para dentro de casa.
                    <br />
                    Os produtos da coleção "Essência da Natureza" são projetados para serem versáteis e atemporais, permitindo que você os use em diversas ocasiões. As estampas exclusivas, que retratam flores, folhas e texturas naturais, foram desenvolvidas em colaboração com artistas locais, garantindo que cada peça conte uma história única.
                </p>
            </div>
            <div className={`img_model ${isModelVisible ? 'visible' : ''}`} id="modelo" >
                <img src={info_model} alt='Modelo' className="img_model"/>
            </div>
        </div>
        </>
    );
};