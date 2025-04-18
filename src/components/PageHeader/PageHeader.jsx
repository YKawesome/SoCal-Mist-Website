function PageHeader({ title }) {
  return (
    <div className="bg-primary text-primary-content h-[12vh] flex items-center justify-center">
      <h1 className="sm:text-6xl text-4xl font-bold text-center">{title}</h1>
    </div>
  );
}

export default PageHeader;
