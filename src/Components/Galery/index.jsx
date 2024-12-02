const Galery = () => {
  const data = [
    {
      src: "/assets/hues-of-paradise-scroll-1.jpg",
      alt: "Mujer leyendo una carta y vistiendo bluson de estampado floral de la marca STUDIO F",
      title: "Blusones de moda Studio F",
    },
    {
      src: "/assets/hues-of-paradise-scroll-2.jpg",
      alt: "Foto de bolso en detalles orgánicos y tonos blanco y beige",
      title: "Studio F bolsos",
    },
    {
      src: "/assets/hues-of-paradise-scroll-3.jpg",
      alt: "Foto de bolso en materiales orgánicos con detalles en dorado y café",
      title: "Bolsos de Studio F",
    },
    {
      src: "/assets/hues-of-paradise-scroll-4.jpg",
      alt: "Modelo mujer usando pantalon palazzo y crop top amarillo",
      title: "Pantalon palazzo",
    },
    {
      src: "/assets/hues-of-paradise-scroll-5.jpg",
      alt: "Foto de mujer usando vestido corto de estampado floral",
      title: "Studio F vestidos",
    },
    {
      src: "/assets/hues-of-paradise-scroll-6.jpg",
      alt: "Foto en detalle de modelo mujer usando blusa estampada y pantalón en color mostaza",
      title: "Bolsos Studio F",
    },
    {
      src: "/assets/hues-of-paradise-scroll-7.jpg",
      alt: "Foto de bolso blanco de la marca Studio F",
      title: "Bolso blanco Studio F",
    },
    {
      src: "/assets/hues-of-paradise-scroll-8.jpg",
      alt: "Foto de modelo mujer usando blusa elegante en color mostaza de la marca Studio F",
      title: "Blusas elegantes Studio F",
    },
  ];

  return data.map((item, index) => (
    <div key={index} className={`gallery-item galery-item-${index}`}>
      <div className="gallery-item-box">
        <img
          key={index}
          className={`galery-item-img galery-item-${index}`}
          src={item.src}
          alt={item.alt}
          title={item.title}
        />
        <div className="gallery-item-caption">
          <img
            className="img-cart"
            src="/assets/hues-of-paradise-shopping.png"
            alt="Carrito de compras"
          />
          <p className="paragraph paragraph-cart-info">COMPRAR AHORA</p>
        </div>
      </div>
    </div>
  ));
};

export default Galery;
