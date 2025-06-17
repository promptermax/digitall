import React, { useState, useEffect } from "react";

const heroImage = "/logos/logo4.png";

const quotes = [
  {
    name: "Mariama S.",
    text: "Working at Digitall was a turning point in my career. The team is supportive, creative, and always striving for excellence!"
  },
  {
    name: "Ousman J.",
    text: "Digitall gave me the opportunity to grow and learn every day. The culture here is truly inspiring."
  },
  {
    name: "Fatou C.",
    text: "I loved the collaborative spirit and the chance to work on impactful projects that make a difference."
  }
];

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", cv: "" });
  const [quoteIdx, setQuoteIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", cv: "" });
  };

  const nextQuote = () => setQuoteIdx((quoteIdx + 1) % quotes.length);
  const prevQuote = () => setQuoteIdx((quoteIdx - 1 + quotes.length) % quotes.length);

  return (
    <div className="min-h-screen bg-white py-20 text-center">
      <div className="flex justify-center mb-10">
        <div className="h-64 w-full max-w-3xl mx-auto flex items-center justify-center bg-gray-200 rounded-xl shadow-lg text-gray-500 text-2xl">
          [Your inspiring image here]
        </div>
      </div>
      <div className="max-w-xl mx-auto mb-10">
        <div className="relative bg-gray-100 rounded-xl p-8 shadow-md">
          <button onClick={prevQuote} className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400 hover:text-[#B83C3C]">&#8592;</button>
          <div className="text-lg italic mb-2">"{quotes[quoteIdx].text}"</div>
          <div className="font-semibold text-[#B83C3C]">- {quotes[quoteIdx].name}</div>
          <button onClick={nextQuote} className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-400 hover:text-[#B83C3C]">&#8594;</button>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-6">Careers</h1>
      <p className="text-lg max-w-2xl mx-auto mb-8">At Digitall, we believe in nurturing talent and empowering our team to grow. We're always looking for creative, passionate, and driven individuals to join us on our mission to transform brands and make a difference. If you're ready to be part of a dynamic team and work on exciting projects, we'd love to hear from you!</p>
      <div className="max-w-md mx-auto bg-gray-100 rounded-xl p-8 mt-10 shadow-md">
        {submitted ? (
          <div className="text-green-600 text-lg font-semibold">Thank you for submitting your CV! A member of our team will reach out to you soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-2 rounded border border-gray-300"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-2 rounded border border-gray-300"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full px-4 py-2 rounded border border-gray-300"
              />
            </div>
            <div>
              <input
                type="text"
                name="cv"
                value={form.cv}
                onChange={handleChange}
                placeholder="Link to your CV (Google Drive, Dropbox, etc.)"
                required
                className="w-full px-4 py-2 rounded border border-gray-300"
              />
            </div>
            <button type="submit" className="btn-primary w-full py-2 rounded-full bg-[#B83C3C] text-white font-semibold">Submit CV</button>
          </form>
        )}
      </div>
    </div>
  );
} 