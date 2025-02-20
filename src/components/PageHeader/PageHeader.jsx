function PageHeader({ title }) {
  return (
    <div className="hero bg-primary text-primary-content h-[15vh]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="lg:text-6xl text-5xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
