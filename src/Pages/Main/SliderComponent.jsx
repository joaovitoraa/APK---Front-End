import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './SliderComponent.css';

const slides = [
  {
    image:
      'https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259371/slide_vonz78.png',
    title: (
      <>
        <strong>Soluções de transporte inteligente</strong> com planejamento e
        prevenção de riscos
      </>
    ),
  },
  {
    image:
      'https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259369/bg-02_z97vis.png',
    title: (
      <>
        <strong>Frota equipada</strong> com o{' '}
        <strong> melhor da tecnologia </strong> do segmento
      </>
    ),
  },
  {
    image:
      'https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259369/bg-03_krpzkk.png',
    title: (
      <>
        <strong>Segurança no transporte</strong> nacional e internacional
      </>
    ),
  },
  {
    image:
      'https://res.cloudinary.com/dj3gku8z9/image/upload/v1738259369/bg-04_hkenuw.png',
    title: (
      <>
        <strong>
          APK <br />
        </strong>
        Somos muito mais que uma transportadora!
      </>
    ),
  },
];

const SliderComponent = () => {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="overlay"></div>
              <div className="slide-content">
                <h2>{slide.title}</h2>
                <button className="slide-button">SAIBA MAIS</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
