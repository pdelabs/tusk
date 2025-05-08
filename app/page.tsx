"use client";

import Image from "next/image";
import React from "react";
import "./styles.css";

export default function HomePage() {
  return (
    <>
      {/* HEADER */}
      <header>
        <a href="#inicio" className="logo">
          <Image
            src="/logo.png"
            alt="Tusk Trade Logo"
            width={100}
            height={50}
          />
        </a>
        <nav>
          <ul>
            <li>
              <a href="#empresa">Empresa</a>
            </li>
            <li>
              <a href="#ofrecemos">Qué ofrecemos</a>
            </li>
            <li>
              <a href="#mercados">Mercados</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="hero-texto">
          <h1>Tusk Trade Company</h1>
          <p>
            Comercio internacional de alimentos desde Uruguay hacia el mundo.
          </p>
        </div>
        <div className="hero-imagen">
          {/* Uncomment if image is available */}
          {/* <Image src="/hero.jpg" alt="Exportación de alimentos" width={800} height={400} /> */}
        </div>
      </section>

      {/* EMPRESA */}
      <section id="empresa" className="seccion">
        <h2>La Empresa</h2>
        <p>
        TUSK Trade Company es una empresa con base en Uruguay cuya actividad principal es el comercio internacional de alimentos de Latinoamérica hacia el mundo. Los fundadores de la empresa tienen vasta experiencia en la comercialización global de alimentos, trabajando con importantes clientes en diversos mercados del mundo.
Los principales productos con los que trabajamos son carne vacuna, ovina, carne de caballo, pollos, manteca, leche en polvo, suero en polvo, leche UHT, poroto de soja, maíz, pre-mezclas para alimento animal, trigo, arroz, entre otros. Nuestros proveedores son los productores y exportadores más importantes de estos productos en sus respectivos países, garantizando así una gran calidad. Compramos productos mayoritariamente en Uruguay, Paraguay, Brasil, Argentina y Chile.
Nuestros clientes se concentran básicamente en la Federación Rusa, Reino Unido, Alemania, Noruega, Holanda, Suecia, China, Hong Kong, Vietnam, Egipto, Turquía, Ghana, Sudáfrica, Canadá, Estados Unidos, entre otros. Constantemente buscamos nuevos mercados donde poder comercializar nuestros productos.
Estamos convencidos de que nuestra región tiene el potencial de convertirse en uno de los principales proveedores de alimentos del mundo y queremos participar activamente en ese proceso. Es por esto que permanentemente buscamos desarrollar relaciones comerciales de largo plazo con nuevas empresas profesionales y confiables que tengan interés en alimentos de Sudamérica.
Tenemos la certeza que mediante nuestro servicio profesional, eficiente y rápido podemos agregar valor a las operaciones comerciales en las que participamos. Asimismo, nuestra excelente y fluida relación comercial con los principales proveedores de la región nos permite ofrecer los precios más competitivos y cumplir con las exigencias de fechas de embarque y demás aspectos sustanciales de cada operación.
        </p>
      </section>

      {/* QUÉ OFRECEMOS */}
      <section id="ofrecemos" className="seccion">
        <h2>¿Qué ofrecemos?</h2>
        <div className="cards">
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <h3>Carnes</h3>
                <p>
                  Exportamos cortes vacunos, ovinos y porcinos de alta calidad.
                </p>
              </div>
              <div className="card-back">
                La carne de Latinoamérica es reconocida mundialmente por su
                excelente calidad. Ofrecemos todos los cortes bovinos, tanto
                enfriados como congelados, con y sin hueso.
              </div>
            </div>
          </div>
          <div className="card">
            <h3>Lácteos</h3>
            <p>Quesos, leche en polvo y manteca de primeras marcas.</p>
          </div>
          <div className="card">
            <h3>Granos</h3>
            <p>Soja, arroz, maíz y otros granos uruguayos de exportación.</p>
          </div>
          <div className="card">
            <h3>Frutas y verduras</h3>
            <p>Productos frescos y seleccionados de productores locales.</p>
          </div>
          <div className="card">
            <h3>Alimentos procesados</h3>
            <p>Conservas, snacks y productos envasados listos para exportar.</p>
          </div>
          <div className="card">
            <h3>Otros productos</h3>
            <p>Productos según requerimiento específico del cliente.</p>
          </div>
        </div>
      </section>

      {/* MERCADOS */}
      <section id="mercados" className="seccion mercados">
        <div className="mercados-texto">
          <h2>Mercados</h2>
          <p>
            Nuestros principales destinos son países de América Latina, África
            del Norte, Medio Oriente y Asia. Adaptamos nuestras exportaciones a
            normativas y necesidades de cada región.
          </p>
        </div>
        <div className="mercados-img">
          <Image
            src="/mapa.jpg"
            alt="Mapa de exportaciones"
            width={600}
            height={300}
          />
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="seccion contacto">
        <h2>Contacto</h2>
        <p>
          <strong>Email:</strong> tusktrade@gmail.com
        </p>
        <p>
          <strong>Teléfono:</strong> +598 94 276 007
        </p>
        <p>
          <strong>Ubicación:</strong> Montevideo, Uruguay
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" rows={5} required />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2025 Tusk Trade Company. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
