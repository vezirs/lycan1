import { useState } from 'react';

const MAIL_ITEMS = [
  {
    id: 1,
    from: '@lose',
    subject: 'FIRST 1L ON LYCAN',
    preview: 'Hey! I just made my first 1 line on Lycan...',
    date: '2 days ago',
    read: false,
  },
  {
    id: 2,
    from: '@greed',
    subject: 'Official Middleman',
    preview: 'Confirm onsite / discord. I can help with your trades...',
    date: '1 week ago',
    read: true,
  },
  {
    id: 3,
    from: '@mystic',
    subject: 'Link Trade?',
    preview: 'Interested in trading usernames? Check my profile...',
    date: '3 days ago',
    read: false,
  },
];

export default function Mail() {
  const [mails, setMails] = useState(MAIL_ITEMS);
  const [selectedMail, setSelectedMail] = useState(null);
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'unread' ? mails.filter(m => !m.read) : mails;

  const markAsRead = (id) => {
    setMails(mails.map(m => m.id === id ? { ...m, read: true } : m));
  };

  return (
    <div className="min-h-screen pt-20 bg-dark px-4 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">📧 Your Mailbox</h1>
          <button className="bg-accent text-dark px-6 py-2 rounded-lg font-bold hover:bg-pink-500 transition">
            Compose
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-8 border-b border-secondary pb-4">
          <button
            onClick={() => setFilter('all')}
            className={`pb-2 transition ${
              filter === 'all'
                ? 'text-accent border-b-2 border-accent'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            All ({mails.length})
          </button>
          <button
            onClick={() => setFilter('unread')}
            className={`pb-2 transition ${
              filter === 'unread'
                ? 'text-accent border-b-2 border-accent'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Unread ({mails.filter(m => !m.read).length})
          </button>
        </div>

        {/* Mail List */}
        <div className="space-y-3">
          {filtered.length > 0 ? (
            filtered.map(mail => (
              <div
                key={mail.id}
                onClick={() => {
                  setSelectedMail(mail);
                  markAsRead(mail.id);
                }}
                className={`border rounded-lg p-4 cursor-pointer transition ${
                  mail.read
                    ? 'bg-secondary/30 border-secondary hover:border-accent'
                    : 'bg-accent/10 border-accent hover:bg-accent/20'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent"></div>
                      <p className={`font-bold ${
                        mail.read ? 'text-gray-300' : 'text-accent'
                      }`}>
                        {mail.from}
                      </p>
                    </div>
                    <p className="text-white font-semibold mt-1">{mail.subject}</p>
                    <p className="text-gray-400 text-sm mt-1">{mail.preview}</p>
                  </div>
                  <p className="text-xs text-gray-500 ml-4 flex-shrink-0">{mail.date}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No mails in this filter</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
