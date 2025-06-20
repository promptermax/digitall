import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";

const categories = ["All", "Insights", "Case Studies", "Design Trends", "Behind the Scenes"];

const posts = [
  {
    id: 1,
    title: "How Branding Transforms Businesses in Africa",
    date: "2024-06-01",
    category: "Insights",
    image: "/logos/logo1.png",
    excerpt: "Discover the power of strategic branding and how it elevates African businesses to global standards.",
    content: `Branding is more than just a logo or a catchy slogan. In Africa, where markets are rapidly evolving, strategic branding can be the difference between blending in and standing out. At Digitall, we help businesses craft unique identities that resonate with their audiences, foster trust, and drive growth. From color psychology to storytelling, our approach ensures your brand is memorable and impactful.\n\nWe've seen firsthand how a strong brand can open doors to new markets, attract investment, and build lasting customer loyalty. Whether you're a startup or an established enterprise, investing in branding is investing in your future.`
  },
  {
    id: 2,
    title: "Case Study: Rebranding for Impact",
    date: "2024-05-20",
    category: "Case Studies",
    image: "/logos/logo2.png",
    excerpt: "A deep dive into our process of transforming a local brand into an international success story.",
    content: `When a local business approached us for a rebrand, their goal was clear: expand beyond The Gambia and make a mark internationally. Our team conducted market research, refreshed their visual identity, and developed a new communication strategy.\n\nThe results? Increased brand recognition, higher customer engagement, and successful entry into three new countries. This case study highlights the power of strategic rebranding and the steps we took to achieve measurable results.`
  },
  {
    id: 3,
    title: "Top 5 Design Trends in 2024",
    date: "2024-05-10",
    category: "Design Trends",
    image: "/logos/logo3.png",
    excerpt: "Stay ahead with the latest design trends shaping the creative industry this year.",
    content: `2024 is all about bold colors, minimalism, and immersive digital experiences. Designers are embracing 3D elements, animated graphics, and eco-friendly materials.\n\nAt Digitall, we're constantly exploring new trends to keep our clients ahead of the curve. Whether it's a website redesign or a new brand launch, our team ensures your visuals are fresh, modern, and effective.`
  },
  {
    id: 4,
    title: "Behind the Scenes: Our Creative Process",
    date: "2024-04-28",
    category: "Behind the Scenes",
    image: "/logos/logo4.png",
    excerpt: "Go inside Digitall's studio and see how we bring ideas to life for our clients.",
    content: `Creativity thrives in the right environment. At Digitall, our process starts with brainstorming sessions, mood boards, and lots of coffee! We collaborate closely with clients, turning their ideas into visual concepts.\n\nFrom sketches to final designs, every step is guided by feedback and a passion for excellence. This blog takes you inside our studio and shows how we turn inspiration into reality.`
  },
  {
    id: 5,
    title: "Effective Communication Strategies for Modern Brands",
    date: "2024-04-15",
    category: "Insights",
    image: "/logos/logo5.png",
    excerpt: "Learn the secrets to building strong, lasting relationships with your audience.",
    content: `Modern brands need more than just a great product—they need a voice. We help clients develop communication strategies that connect, engage, and inspire.\n\nFrom social media campaigns to internal newsletters, our approach is holistic and data-driven. Discover how clear messaging and authentic storytelling can set your brand apart in a crowded marketplace.`
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-center text-white mb-12">
        <h1 className="text-5xl font-extrabold mb-4">Digitall Blog</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Insights, stories, and trends from The Gambia's leading creative agency.
        </p>
      </section>

      {/* Filter & Search */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              className={`rounded-full px-6 py-2 font-semibold transition ${selectedCategory === cat ? "bg-[#B83C3C] text-white" : "bg-white text-[#2D2D2D] hover:bg-[#B83C3C]/10"}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
        <Input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs bg-white border border-gray-300 rounded-full px-4 py-2"
        />
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-5xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-20 text-xl">No posts found.</div>
        )}
        {filteredPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white rounded-2xl flex flex-col">
            <CardContent className="flex-1 flex flex-col p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase text-[#B83C3C]">{post.category}</span>
                <span className="text-xs text-gray-400">• {new Date(post.date).toLocaleDateString()}</span>
              </div>
              <h2 className="text-xl font-bold mb-2 text-[#2D2D2D]">{post.title}</h2>
              <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
              <Button className="btn-primary rounded-full mt-auto px-6 py-2">
                <Link to={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 