import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Menu, X, ChevronDown, Star, ArrowRight, Play, Users, Award, Globe, Palette, Video, Megaphone, FileText, Printer, Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react'
import ClientLogos from "@/components/ClientLogos"
import Blog from "./components/Blog"
import { Routes, Route, Link } from "react-router-dom"
import './App.css'

function HomePage(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.')
      return
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.')
      return
    }
    
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design & Branding",
      description: "From logos to complete brand identities that make lasting impressions"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Media & Content",
      description: "Social media management and digital campaigns that engage audiences"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Audiovisual Production",
      description: "Documentaries, commercials, and podcast production with professional quality"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Corporate Communication Consultancy",
      description: "Strategic communication frameworks and team training for organizational excellence"
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: "Print & Production",
      description: "High-quality printing and marketing materials that leave lasting impressions"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Event Hosting & Emcee",
      description: "Professional event hosting, emcee services, and seamless event organization—complete with creative branding and memorable experiences."
    }
  ]

  const portfolioItems = [
    { title: "Brand Identity Design", category: "Branding", color: "bg-blue-500" },
    { title: "Digital Campaign", category: "Digital", color: "bg-purple-500" },
    { title: "Corporate Video", category: "Video", color: "bg-green-500" },
    { title: "Print Materials", category: "Print", color: "bg-orange-500" },
    { title: "Communication Strategy", category: "Strategy", color: "bg-red-500" },
    { title: "Social Media Content", category: "Digital", color: "bg-pink-500" },
    { title: "Documentary Film", category: "Video", color: "bg-indigo-500" },
    { title: "Brand Guidelines", category: "Branding", color: "bg-yellow-500" }
  ]

  const testimonials = [
    {
      text: "Digitall transformed our brand identity completely. Their international expertise combined with local insight is unmatched.",
      author: "Sarah Johnson",
      company: "Tech Innovations Ltd"
    },
    {
      text: "The communication strategy they developed for our organization has improved our internal and external communications dramatically.",
      author: "Michael Chen",
      company: "Global Solutions Inc"
    },
    {
      text: "Professional, creative, and results-driven. Digitall delivers world-class quality every time.",
      author: "Amina Kone",
      company: "West Africa Development Bank"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full float-animation"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-white/30 rounded-full float-animation-reverse"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-white/25 rounded-full float-animation"></div>
          <div className="absolute bottom-20 right-10 w-5 h-5 bg-white/20 rounded-full float-animation-reverse"></div>
          <div className="absolute top-60 left-1/3 w-2 h-2 bg-white/30 rounded-full float-animation"></div>
          <div className="absolute top-80 right-1/3 w-4 h-4 bg-white/25 rounded-full float-animation-reverse"></div>
        </div>

        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="hero-title font-bold mb-6">
            Creative Solutions That Transform Brands
          </h1>
          <p className="hero-subtitle mb-8 max-w-3xl mx-auto">
            We bring your vision to life through innovative design, compelling storytelling, and strategic communication across all media.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary px-8 py-3 rounded-full text-lg">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button className="btn-secondary px-8 py-3 rounded-full text-lg">
              <Play className="mr-2 w-5 h-5" />
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--digitall-charcoal)' }}>
              What We Do Best
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive creative services that elevate your brand and amplify your message
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center" style={{ color: 'var(--digitall-red)' }}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--digitall-charcoal)' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--digitall-charcoal)' }}>
                Why Choose Digitall?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Led by an industry veteran with experience working alongside top brands and international organizations, we deliver world-class creative solutions with local insight.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: 'var(--digitall-red)' }}>50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: 'var(--digitall-red)' }}>15+</div>
                  <div className="text-gray-600">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: 'var(--digitall-red)' }}>100%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: 'var(--digitall-red)' }}>24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-blue-500 h-32 rounded-lg"></div>
                <div className="bg-purple-500 h-24 rounded-lg"></div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-green-500 h-24 rounded-lg"></div>
                <div className="bg-orange-500 h-32 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--digitall-charcoal)' }}>
              Our Latest Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our creative excellence across various industries and mediums
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {portfolioItems.map((item, index) => (
              <div key={index} className={`portfolio-item ${item.color} h-64 rounded-lg relative overflow-hidden cursor-pointer`}>
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <div className="text-white">
                    <div className="text-sm opacity-80 mb-1">{item.category}</div>
                    <div className="font-semibold">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="btn-primary px-8 py-3 rounded-full">
              View All Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--digitall-charcoal)' }}>
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by organizations across Africa and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold" style={{ color: 'var(--digitall-charcoal)' }}>
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--digitall-charcoal)' }}>
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to start your project? Let's discuss how we can help transform your brand.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Service Interest</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
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
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-1"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button type="submit" className="btn-primary w-full py-3 rounded-full">
                    Send Message
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--digitall-charcoal)' }}>
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-4" style={{ color: 'var(--digitall-red)' }} />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">contact@digitall.gm</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-4" style={{ color: 'var(--digitall-red)' }} />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-gray-600">+220 7048481</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 mr-4" style={{ color: 'var(--digitall-red)' }} />
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-gray-600">Wellingara, Kombo North, West Coast Region</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--digitall-charcoal)' }}>
                  Response Time
                </h4>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 24 hours. For urgent projects, please call us directly.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--digitall-charcoal)' }}>
                  Office Hours
                </h4>
                <div className="text-gray-600">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                  <div>Saturday: 10:00 AM - 4:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            LET'S MAKE IT HAPPEN.
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to transform your brand with world-class creative solutions? Let's start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary px-8 py-3 rounded-full text-lg bg-white text-gray-900 hover:bg-gray-100">
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button className="btn-secondary px-8 py-3 rounded-full text-lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'header-blur shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <img
                src="/logos/digitalllogo.png"
                alt="Digitall Logo"
                className="h-10 w-auto"
                style={{ maxHeight: '40px' }}
              />
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-red-600 transition-colors">Services</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-600 transition-colors">About</Link>
              <Link to="/portfolio" className="text-gray-700 hover:text-red-600 transition-colors">Portfolio</Link>
              <Link to="/blog" className="text-gray-700 hover:text-red-600 transition-colors">Blog</Link>
              <Link to="/contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</Link>
            </nav>
            {/* CTA Button */}
            <Button className="hidden md:block btn-primary px-6 py-2 rounded-full">
              Start Your Project
            </Button>
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <nav className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/services" className="text-gray-700 hover:text-red-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link>
                <Link to="/about" className="text-gray-700 hover:text-red-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="/portfolio" className="text-gray-700 hover:text-red-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
                <Link to="/blog" className="text-gray-700 hover:text-red-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                <Link to="/contact" className="text-gray-700 hover:text-red-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <Button className="btn-primary px-6 py-2 rounded-full w-fit">
                  Start Your Project
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content (with padding for fixed header) */}
      <div style={{ paddingTop: 96 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4" style={{ color: 'var(--digitall-red)' }}>
                Digitall
              </div>
              <p className="text-gray-400 mb-4">
                Creative solutions that transform brands across Africa and beyond.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/digitalltech/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-8 h-8 text-gray-400 hover:text-[#B83C3C] transition" />
                </a>
                <a href="https://x.com/digitall_gm?s=21" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                  <Twitter className="w-8 h-8 text-gray-400 hover:text-[#B83C3C] transition" />
                </a>
                <a href="https://www.facebook.com/share/1CAzxjQ4GY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="w-8 h-8 text-gray-400 hover:text-[#B83C3C] transition" />
                </a>
                <a href="https://www.instagram.com/digitall_gm" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-8 h-8 text-gray-400 hover:text-[#B83C3C] transition" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Creative Design & Branding</li>
                <li>Digital Media & Content</li>
                <li>Audiovisual Production</li>
                <li>Corporate Communication</li>
                <li>Print & Production</li>
                <li>Event Hosting & Emcee</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@digitall.gm</li>
                <li>+220 7048481</li>
                <li>Wellingara, Kombo North, West Coast Region</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Digitall. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

