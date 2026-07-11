import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-6 text-center space-y-6">
      <Image
        src="/next.svg"
        alt="Sacrament Meeting Planner logo"
        width={180}
        height={38}
        className="mx-auto dark:invert"
      />
      <h1 className="text-3xl font-bold">Sacrament Meeting Planner</h1>
      <p className="text-slate-600">
        Plan, manage, and review sacrament meeting agendas for your ward.
      </p>
      <Link
        href="/meetings"
        className="inline-block bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-700"
      >
        View Meetings
      </Link>
    </div>
  );
}