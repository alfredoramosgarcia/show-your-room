"use client";

import Image from "next/image";
import { Images } from "lucide-react";
import { property } from "@/data/property";
import Lightbox from "@/components/Lightbox";

export default function Gallery() {
  return (
    <>
      <Lightbox />

      <section id="gallery" className="gallery">
        <div className="container">
          {/* Header */}

          <div className="galleryHeader">
            <span className="galleryTag">Galería</span>
          </div>

          {/* Grid */}

          <div className="galleryGrid">
            {/* Imagen principal */}

            <a
              href={property.images[0]}
              data-fancybox="gallery"
              className="galleryMain"
            >
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                priority
                className="galleryImage"
              />

              <div className="galleryOverlay" />

              <div className="galleryCount">
                <Images size={18} />
                {property.images.length} fotos
              </div>
            </a>

            {/* Resto */}

            {property.images.slice(1).map((image, index) => (
              <a
                key={index}
                href={image}
                data-fancybox="gallery"
                className="galleryItem"
              >
                <Image
                  src={image}
                  alt={`Imagen ${index + 2}`}
                  fill
                  className="galleryImage"
                />

                <div className="galleryOverlay" />
              </a>
            ))}
          </div>

          {/* CTA */}

          <div className="galleryButtonContainer">
            <a
              href={property.images[0]}
              data-fancybox="gallery"
              className="galleryButton"
            >
              <Images size={22} />
              Ver todas las fotografías
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
