import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [humanCheck, setHumanCheck] = useState("");
  const [humanError, setHumanError] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (humanCheck.trim() !== "7") {
      setHumanError("Please answer the human verification question correctly.");
      return;
    } else {
      setHumanError("");
    }
    setFormSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setHumanCheck("");
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="mt-1" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="service">Service Interest</Label>
                  <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option value="">Select a service</option>
                    <option value="branding">Creative Design & Branding</option>
                    <option value="digital">Digital Media & Content</option>
                    <option value="video">Audiovisual Production</option>
                    <option value="communication">Corporate Communication</option>
                    <option value="print">Print & Production</option>
                    <option value="event">Event Hosting & Emcee</option>
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="message">Project Details *</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="mt-1" placeholder="Tell us about your project..." />
              </div>
              <div>
                <label htmlFor="humanCheck" className="block text-sm font-medium text-gray-700 mb-1">Human Verification: What is 3 + 4?</label>
                <input id="humanCheck" name="humanCheck" type="text" value={humanCheck} onChange={e => setHumanCheck(e.target.value)} className="w-full px-4 py-2 rounded border border-gray-300" required />
                {humanError && <div className="text-red-600 text-sm mt-1">{humanError}</div>}
              </div>
              <button type="submit" className="btn-primary w-full py-3 rounded-full mt-2 flex items-center justify-center">
                Send Message
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
            {formSubmitted && (
              <div className="text-green-600 text-lg font-semibold mt-6">Your message has been submitted! A member of our team will reach out to you soon.</div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 