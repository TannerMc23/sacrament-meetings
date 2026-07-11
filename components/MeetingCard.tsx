import Link from 'next/link';
import type { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <Link
      href={`/meetings/${meeting.id}`}
      className="block border rounded-lg p-4 hover:shadow-md transition-shadow"
    >
      <div className="flex justify-between items-center">
        <span className="font-semibold">{meeting.date}</span>
        <span className="text-xs uppercase tracking-wide bg-slate-200 rounded px-2 py-1">
          {meeting.meetingType}
        </span>
      </div>
      <p className="text-sm text-slate-600 mt-1">
        Presiding: {meeting.presiding} &middot; Conducting: {meeting.conducting}
      </p>
    </Link>
  );
}