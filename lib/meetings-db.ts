import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    announcements: ['Ward temple night: May 10'],
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: 'In Remembrance of Thy Suffering' },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' },
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
  },
  {
    id: 2,
    date: '2026-05-10',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    announcements: ['Youth conference sign-ups due Friday'],
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'Brother Taylor',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: { number: 193, title: "'Tis Sweet to Sing" },
    speakers: [],
    closingHymn: { number: 89, title: 'Love One Another' },
    closingPrayer: 'Sister Adams',
  },
  {
    id: 3,
    date: '2026-05-17',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    wardBusiness: [{ description: 'Release of Sunday School president' }],
    stakeBusiness: false,
    openingHymn: { number: 66, title: 'Rejoice, the Lord Is King!' },
    openingPrayer: 'Sister Peterson',
    sacramentHymn: { number: 172, title: "O Savior, Thou Who Wearest a Crown" },
    speakers: [
      { name: 'Brother Nguyen', topic: 'Family history and temple work', type: 'speaker' },
    ],
    closingHymn: { number: 214, title: 'Nearer, My God, to Thee' },
    closingPrayer: 'Brother Lopez',
  },
  {
    id: 4,
    date: '2026-05-24',
    meetingType: 'stake',
    presiding: 'President Harris',
    conducting: 'President Harris',
    wardBusiness: [],
    stakeBusiness: true,
    openingHymn: { number: 1, title: 'The Morning Breaks' },
    openingPrayer: 'Sister Fields',
    sacramentHymn: { number: 169, title: 'In Remembrance of Thy Suffering' },
    speakers: [],
    closingHymn: { number: 30, title: 'Come, O Thou King of Kings' },
    closingPrayer: 'Brother Reed',
  },
  {
    id: 5,
    date: '2026-05-31',
    meetingType: 'general',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    wardBusiness: [],
    stakeBusiness: false,
    openingHymn: { number: 27, title: 'Praise to the Man' },
    openingPrayer: 'Sister Klein',
    sacramentHymn: { number: 174, title: 'While of These Emblems We Partake' },
    speakers: [
      { name: 'Sister Klein', topic: 'General conference reflections', type: 'speaker' },
      { name: 'Ward Choir', topic: '', type: 'musical-number' },
    ],
    closingHymn: { number: 219, title: 'God Be with You Till We Meet Again' },
    closingPrayer: 'Brother Nguyen',
  },
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter((m) => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((m) => m.id === id) ?? null;
}