import type { SacramentMeeting } from '@/lib/types';

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  return (
    <article className="max-w-2xl mx-auto p-6 space-y-4">
      <header>
        <h2 className="text-2xl font-bold">{meeting.date}</h2>
        <p className="text-sm uppercase tracking-wide text-slate-500">
          {meeting.meetingType} meeting
        </p>
        <p className="text-sm text-slate-600">
          Presiding: {meeting.presiding} &middot; Conducting: {meeting.conducting}
        </p>
      </header>

      {meeting.announcements && meeting.announcements.length > 0 && (
        <section>
          <h3 className="font-semibold">Announcements</h3>
          <ul className="list-disc list-inside text-sm">
            {meeting.announcements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h3 className="font-semibold">Opening Hymn</h3>
        <p>#{meeting.openingHymn.number} &ndash; {meeting.openingHymn.title}</p>
      </section>

      <section>
        <h3 className="font-semibold">Opening Prayer</h3>
        <p>{meeting.openingPrayer}</p>
      </section>

      {meeting.wardBusiness.length > 0 && (
        <section>
          <h3 className="font-semibold">Ward Business</h3>
          <ul className="list-disc list-inside text-sm">
            {meeting.wardBusiness.map((item, i) => (
              <li key={i}>{item.description}</li>
            ))}
          </ul>
        </section>
      )}

      {meeting.stakeBusiness && (
        <p className="text-sm italic text-slate-600">Includes stake business.</p>
      )}

      <section>
        <h3 className="font-semibold">Sacrament Hymn</h3>
        <p>#{meeting.sacramentHymn.number} &ndash; {meeting.sacramentHymn.title}</p>
      </section>

      {meeting.speakers.length > 0 && (
        <section>
          <h3 className="font-semibold">Speakers &amp; Musical Numbers</h3>
          <ul className="list-disc list-inside text-sm">
            {meeting.speakers.map((s, i) => (
              <li key={i}>
                {s.type === 'speaker'
                  ? `${s.name} — ${s.topic}`
                  : `Musical Number: ${s.name}`}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h3 className="font-semibold">Closing Hymn</h3>
        <p>#{meeting.closingHymn.number} &ndash; {meeting.closingHymn.title}</p>
      </section>

      <section>
        <h3 className="font-semibold">Closing Prayer</h3>
        <p>{meeting.closingPrayer}</p>
      </section>
    </article>
  );
}