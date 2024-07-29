type title = {
  title: string;
};

export default function Header({ title }: title) {
  return (
    <header className="container">
      <div className="px-4 py-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center">{title}</h1>
      </div>
    </header>
  );
}
