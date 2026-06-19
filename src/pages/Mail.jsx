import { useState } from 'react';

export default function Mail() {
  const [mails] = useState([
    { id: 1, from: '@lose', subject: 'FIRST 1L ON LYCAN', date: '2 days ago' },
    { id: 2, from: '@greed', subject: 'Official Middleman', date: '1 week ago' },
  ]);

  return (
    <div className="min-h-screen pt-20 bg-dark px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">📧 Your Mailbox</h1>
        
        <div className="space-y-4">
          {mails.length > 0 ? (
            mails.map(mail => (
              <div
                key={mail.id}
                className="bg-secondary/50 border border-secondary rounded-lg p-4 hover:border-accent transition cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-accent">{mail.from}</p>
                    <p className="text-white">{mail.subject}</p>
                  </div>
                  <p className="text-sm text-gray-400">{mail.date}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400">No mails yet</p>
          )}
        </div>
      </div>
    </div>
  );
}
