export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-600 text-sm text-center py-4 mt-auto">
      <p>Sacrament Meeting Planner &mdash; {new Date().getFullYear()}</p>
    </footer>
  );
}