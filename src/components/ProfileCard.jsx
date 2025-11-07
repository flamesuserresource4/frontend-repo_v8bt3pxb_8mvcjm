import React from 'react';

const ProfileCard = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop"
            alt="Profile"
            className="h-24 w-24 rounded-xl object-cover"
          />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold tracking-tight">Alex Johnson</h2>
            <p className="mt-1 text-gray-600">Frontend Engineer • React • TypeScript • UI/UX</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind', 'FastAPI', 'MongoDB'].map((tag) => (
                <span key={tag} className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
