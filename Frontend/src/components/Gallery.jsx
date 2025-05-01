import React from 'react'

const Gallery = () => {
  const gallery = [
    { src: "/img1.webp", title: "Power Session" },
    { src: "/img12.jpg", title: "Flex Time" },
    { src: "/img13.jpg", title: "Push Hard" },
    { src: "/img14.jpg", title: "Train Beast" },
    { src: "/img15.jpg", title: "Hardcore" },
    { src: "/img16.jpg", title: "No Pain" },
    { src: "/img17.jpg", title: "Full Burn" },
    { src: "/img8.jpg",  title: "Grind Time" },
  ];

  return (
    <section className="gallery-section">
      <h1>Better Beats Best</h1>
      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.src} alt={item.title} />
            <div className="overlay">
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
