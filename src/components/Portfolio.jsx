import React from "react";

const projects = [
  { title: "Brand Identity Design", category: "Branding", description: "A complete rebrand for a leading tech company.", color: "bg-blue-500" },
  { title: "Digital Campaign", category: "Digital", description: "A social media campaign that reached over 1M people.", color: "bg-purple-500" },
  { title: "Corporate Video", category: "Video", description: "Produced a corporate video for an international NGO.", color: "bg-green-500" },
  { title: "Print Materials", category: "Print", description: "Designed and printed marketing materials for a major event.", color: "bg-orange-500" },
  { title: "Communication Strategy", category: "Strategy", description: "Developed a communication plan for a non-profit.", color: "bg-red-500" },
  { title: "Social Media Content", category: "Digital", description: "Created engaging content for a lifestyle brand.", color: "bg-pink-500" },
  { title: "Documentary Film", category: "Video", description: "Directed and produced a documentary on local culture.", color: "bg-indigo-500" },
  { title: "Brand Guidelines", category: "Branding", description: "Established brand guidelines for a startup.", color: "bg-yellow-500" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">Portfolio</h1>
      <p className="text-lg max-w-2xl mx-auto mb-10">Explore our latest projects and creative work for clients across Africa and beyond.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-12">
        {projects.map((project, idx) => (
          <div key={idx} className={`rounded-xl shadow-lg p-8 text-left ${project.color} text-white`}>
            <div className="text-lg font-semibold mb-2">{project.title}</div>
            <div className="text-xs mb-2 uppercase opacity-80">{project.category}</div>
            <div className="mb-2">{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 