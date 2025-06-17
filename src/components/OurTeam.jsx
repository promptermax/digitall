import React from "react";

const team = [
  { name: "Fatou Jallow", role: "Creative Director" },
  { name: "Lamin Sowe", role: "Lead Designer" },
  { name: "Awa Ceesay", role: "Content Strategist" },
  { name: "Ebrima Bah", role: "Media Producer" },
];

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-white py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">Our Team</h1>
      <p className="text-lg max-w-2xl mx-auto mb-10">Meet the talented individuals behind Digitall's creative solutions. Our diverse team brings together expertise in design, media, and communication to deliver outstanding results for our clients.</p>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {team.map((member, idx) => (
          <div key={idx} className="bg-gray-100 rounded-xl p-8 w-64 shadow-md">
            <div className="text-2xl font-bold mb-2">{member.name}</div>
            <div className="text-gray-600 mb-2">{member.role}</div>
            <div className="w-20 h-20 mx-auto bg-gray-300 rounded-full mb-4 flex items-center justify-center text-3xl text-gray-400">👤</div>
          </div>
        ))}
      </div>
    </div>
  );
} 