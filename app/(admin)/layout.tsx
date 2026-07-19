export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-amber-100 text-amber-800 text-sm text-center py-2">
        Admin Area &mdash; authentication coming in Week 05
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}