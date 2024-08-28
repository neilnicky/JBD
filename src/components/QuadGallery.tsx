import Image from "next/image";

const QuadGallery = () => {
  const images = [
    ["/5.jpg", "/6.jpg", ],
    ["/6.jpg", "/5.jpg", ],
    ["/5.jpg", "/6.jpg", ],
    ["/6.jpg", "/5.jpg", ],
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((column, index) => (
        <div key={index} className="grid gap-4">
          {column.map((src, idx) => (
            <div key={idx}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={src}
                alt=""
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default QuadGallery;
