function AboutRow({ title, content, image, imageAlt, index }) {
  // Check if index is even
  const isEven = index % 2 === 0;

  return (
    <div className="flex w-full flex-col lg:flex-row justify-center place-items-center lg:place-items-stretch gap-x-10">
      {isEven ? (
        <>
          {/* Text on the left */}
          <div className="py-5">
            <div className="card card-lg bg-base-100 w-md shadow-sm">
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
              </div>
            </div>
          </div>
          {/* Image on the right */}
          <div className="py-5">
            <div className="card bg-base-100 w-md shadow-sm overflow-hidden rounded-lg h-full">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Image on the left */}
          <div className="py-5">
            <div className="card bg-base-100 w-md shadow-sm overflow-hidden rounded-lg h-full">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Text on the right */}
          <div className="py-5">
            <div className="card card-lg bg-base-100 w-md shadow-sm">
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default AboutRow;