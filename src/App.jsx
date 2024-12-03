import React from "react";

import TabsComponent from "./Components/Tabs";
import Galery from "./Components/Galery";

const App = () => {
  return (
    <main>
      <div className="container-header">
        <img src="/assets/menu.png" alt="" srcset="" />
      </div>
      <section id="section-1">
        <div className="container-1">
          <picture className="img-banner">
            <source
              srcSet="/assets/hues-of-paradise-treasure-banner-desk.jpg"
              media="(min-width: 769px)"
            />
            <img
              src="/assets/hues-of-paradise-treasure-banner-mob.jpg"
              title="Studio F ropa mujer"
              alt="Madre e hija usando total look en color blanco de la marca Studio F"
            />
          </picture>
        </div>
        <div className="container-2">
          <div className="box-container">
            <div className="box-1">
              <img
                className="img-logo"
                src="/assets/hues-of-paradise-treasure-kv.png"
                alt="logo de referencia"
              />
            </div>
            <div className="box-2">
              <p className="paragraph paragraph-1">
                Entre el blanco de los velos y el azul del cielo, comienza el
                juego que celebra{" "}
                <strong className="strong-paragraph">el amor</strong> más grande
                que tenemos.
              </p>
              <p className="paragraph paragraph-2">
                Acompaña a <strong className="strong-paragraph">mamá</strong> a
                descubrir todos los tesoros que STUDIO F ha escondido para ella,
                en esta excitante{" "}
                <strong className="strong-paragraph">
                  Búsqueda del Tesoro.
                </strong>
              </p>
            </div>
            <div className="box-3">
              <a className="button-explore" href="#section-2">
                EXPLORAR
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="section-2">
        <div className="container-effect">
          <div className="container-1">
            <picture className="img-banner">
              <source
                srcSet="/assets/hues-of-paradise-colores-banner-desk.jpg"
                media="(min-width: 769px)"
              />
              <img
                src="/assets/hues-of-paradise-colores-banner-mob.jpg"
                title="Studio F ropa mujer"
                alt="Madre e hija usando total look en color blanco de la marca Studio F"
              />
            </picture>
          </div>
          <div className="container-2">
            <div className="box-container">
              <div className="box-1">
                <img
                  className="img-logo"
                  src="/assets/hues-of-paradise-treasure-colores-kv.png"
                  alt="logo de referencia"
                />
              </div>
              <div className="box-2">
                <p className="paragraph paragraph-1">
                  Una historia de{" "}
                  <strong className="strong-paragraph">colores</strong> y{" "}
                  <strong className="strong-paragraph">texturas</strong> , donde
                  las grafías florales y los colores del verano convergen para
                  dar origen a esta colección, especialmente{" "}
                  <strong className="strong-paragraph">pensada en mamá.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-3">
          <Galery />
        </div>
      </section>

      <section id="section-3">
        <div className="container-1">
          <div className="box-container">
            <div className="box-1">
              <img
                src="/assets/hues-of-paradise-envelope-fondo.jpg"
                alt="imagen de referencia fondo"
              />
            </div>
            <div className="box-2">
              <div className="item-collage item-collage-1">
                <img
                  src="/assets/hues-of-paradise-envelope-1.jpg"
                  alt="Foto de madre e hija vistiendo ropa en color blanco de la marca Studio F"
                  title="Moda Studio F"
                />
              </div>
              <div className="item-collage item-collage-2">
                <img
                  src="/assets/hues-of-paradise-envelope-2.jpg"
                  alt="Foto en detalle de mujer leyendo una ca rta y vistiendo ropa de color blanco de la marca Studio F"
                  title="Studio f ropa mujer"
                />
              </div>
              <div className="item-collage item-collage-3">
                <div className="divider-box">
                  <img
                    src="/assets/hues-of-paradise-envelope-3.png"
                    alt="Pista Ni"
                    title="Pista Ni"
                  />
                </div>
                <div className="divider-box">
                  <p className="paragraph paragraph-1">
                    “Donde las palmas bailan al ritmo del viento y los velos
                    susurran secretos, descubrirás el primer tesoro, aquel que
                    iluminará los ojos de mamá con encanto completo”
                  </p>
                </div>
              </div>
              <div className="item-collage item-collage-4">
                <img
                  src="/assets/hues-of-paradise-envelope-4.jpg"
                  alt="Modelo mujer sentada en una silla vistiendo blazer y short blanco de la marca Studio F"
                  title="Blazer mujer Studio F"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-2">
          <Letter />
        </div>
      </section>

      <section id="section-4">
        <div className="container-1">
          <div className="box-container">
            <div className="box-1">
              <img
                src="/assets/hues-of-paradise-tesoro-banner.jpg"
                title="Chalecos para mujer"
                alt="Foto de madre e hija usando look total white de la marca Studio F"
              />
            </div>
            <div className="box-2">
              <div className="divider-box-1">
                <img
                  src="/assets/hues-of-paradise-tesoro-title.png"
                  alt="logo de referencia"
                />
              </div>
              <div className="divider-box-2">
                <p className="paragraph">
                  Evocando esa{" "}
                  <strong className="strong-paragraph">
                    calidez y serenidad
                  </strong>{" "}
                  propias de la conexión con mamá, nace nuestra cápsula de linos
                  en tonos natural, una que nos habla de{" "}
                  <strong className="strong-paragraph">
                    elegancia y simplicidad.
                  </strong>
                </p>
              </div>
              <div className="link-collection">
                <a
                  className="show-colecction"
                  href="https://www.studiof.com.co/madres/hues-of-paradise/producto"
                >
                  Ver colección
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-2">
          <div className="box-1">
            <img
              src="/assets/hues-of-paradise-tesoro-fondo.jpg"
              alt="imagen de referencia fondo"
            />
          </div>
          <div className="box-2">
            <div className="item-collage item-collage-1">
              <img
                src="/assets/hues-of-paradise-tesoro-1.jpg"
                alt="Foto de bolso playero con asas en madera de la marca Studio F"
                title="Bolso playero mujer"
              />
            </div>
            <div className="item-collage item-collage-2">
              <img
                src="/assets/hues-of-paradise-tesoro-2.jpg"
                alt="Foto en blanco y negro de madre e hija, caminando agarradas de la mano"
                title="Studio F ropa mujer"
              />
            </div>
            <div className="item-collage item-collage-3">
              <img
                src="/assets/hues-of-paradise-tesoro-3.jpg"
                alt="Foto de madre e hija sosteniendo sombrero de la marca Studio F"
                title="Sombreros Studio F"
              />
            </div>
            <div className="item-collage item-collage-4">
              <img
                src="/assets/hues-of-paradise-tesoro-4.jpg"
                alt="Foto de zapatos cerrados de la marca Studio F"
                title="Zapatos Studio F mujer"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="section-5">
        <TabsComponent />
      </section>

      <div className="footer">
        <img src="/assets/footer-1.png" alt="" srcset="" />
      </div>
    </main>
  );
};

const Letter = () => {
  return (
    <>
      <div className="container-back-letter">
        <img
          src="/assets/hues-of-paradise-sobre-open.png"
          alt="imagen de referencia carta"
        />
      </div>
      <div className="container-letter container-letter-2">
        <div className="box-letter box-letter-2">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className={`letter-img letter-img-${index}`}>
              <div className="gallery-item-caption">
                <img
                  className="img-cart"
                  src="/assets/hues-of-paradise-shopping.png"
                  alt="Carrito de compras"
                />
                <p className="paragraph paragraph-cart-info">COMPRAR AHORA</p>
              </div>
              <img
                src={`/assets/hues-of-paradise-sobre-slider-${index}.jpg`}
                alt={`imagen de referencia ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
