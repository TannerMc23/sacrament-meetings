export default function Header() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="bg-slate-800 text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-xl font-semibold">Maple Grove Ward</h1>
      <p className="text-sm text-slate-300">{today}</p>
    </header>
  );
}