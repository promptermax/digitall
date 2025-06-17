import React from "react";

const heroImage = "/logos/logo1.png";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white py-20 text-center">
      <div className="flex justify-center mb-10">
        <div className="h-64 w-full max-w-3xl mx-auto flex items-center justify-center bg-gray-200 rounded-xl shadow-lg text-gray-500 text-2xl">
          [Your inspiring image here]
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg max-w-2xl mx-auto mb-8">Digitall is a creative agency based in The Gambia, dedicated to transforming brands across Africa and beyond. Our team of passionate professionals brings together years of experience in design, media, and communication to deliver world-class solutions with a local touch.</p>
      <div className="max-w-3xl mx-auto text-left">
        <h2 className="text-2xl font-semibold mt-10 mb-2">Our Mission</h2>
        <p className="mb-6">To empower businesses and organizations with creative solutions that inspire, engage, and drive growth. We believe in the power of storytelling, design, and technology to make a positive impact in our communities.</p>
        <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
        <p>To be Africa's leading creative agency, known for innovation, integrity, and excellence in every project we undertake.</p>
      </div>
    </div>
  );
} 