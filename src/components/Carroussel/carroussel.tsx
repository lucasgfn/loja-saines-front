import { Autoplay, EffectFade } from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.css';
import {data} from "./util";
import "./carroussel.css";

export const Carroussel: React.FC = () => {
    return (
        <div className="container">
            <Swiper 
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={
                    {
                        delay: 3500,
                        disableOnInteraction: false,
                    }
                }
                pagination={{clickable: true}}
                slidesPerView={1}
                spaceBetween={30}
            
                className="swiper-container"
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide">
                    <img src={item.img} alt={`Slide: ${item.description}`} />
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </div>
        
    )

}