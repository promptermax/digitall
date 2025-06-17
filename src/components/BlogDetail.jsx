import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const posts = [
  {
    id: 1,
    title: "How Branding Transforms Businesses in Africa",
    date: "2024-06-01",
    category: "Insights",
    excerpt: "Discover the power of strategic branding and how it elevates African businesses to global standards.",
    content: `Branding is more than just a logo or a catchy slogan. In Africa, where markets are rapidly evolving, strategic branding can be the difference between blending in and standing out. At Digitall, we help businesses craft unique identities that resonate with their audiences, foster trust, and drive growth. From color psychology to storytelling, our approach ensures your brand is memorable and impactful.\n\nWe've seen firsthand how a strong brand can open doors to new markets, attract investment, and build lasting customer loyalty. Whether you're a startup or an established enterprise, investing in branding is investing in your future.`
  },
  {
    id: 2,
    title: "Case Study: Rebranding for Impact",
    date: "2024-05-20",
    category: "Case Studies",
    excerpt: "A deep dive into our process of transforming a local brand into an international success story.",
    content: `When a local business approached us for a rebrand, their goal was clear: expand beyond The Gambia and make a mark internationally. Our team conducted market research, refreshed their visual identity, and developed a new communication strategy.\n\nThe results? Increased brand recognition, higher customer engagement, and successful entry into three new countries. This case study highlights the power of strategic rebranding and the steps we took to achieve measurable results.`
  },
  {
    id: 3,
    title: "Top 5 Design Trends in 2024",
    date: "2024-05-10",
    category: "Design Trends",
    excerpt: "Stay ahead with the latest design trends shaping the creative industry this year.",
    content: `2024 is all about bold colors, minimalism, and immersive digital experiences. Designers are embracing 3D elements, animated graphics, and eco-friendly materials.\n\nAt Digitall, we're constantly exploring new trends to keep our clients ahead of the curve. Whether it's a website redesign or a new brand launch, our team ensures your visuals are fresh, modern, and effective.`
  },
  {
    id: 4,
    title: "Behind the Scenes: Our Creative Process",
    date: "2024-04-28",
    category: "Behind the Scenes",
    excerpt: "Go inside Digitall's studio and see how we bring ideas to life for our clients.",
    content: `Creativity thrives in the right environment. At Digitall, our process starts with brainstorming sessions, mood boards, and lots of coffee! We collaborate closely with clients, turning their ideas into visual concepts.\n\nFrom sketches to final designs, every step is guided by feedback and a passion for excellence. This blog takes you inside our studio and shows how we turn inspiration into reality.`
  },
  {
    id: 5,
    title: "Effective Communication Strategies for Modern Brands",
    date: "2024-04-15",
    category: "Insights",
    excerpt: "Learn the secrets to building strong, lasting relationships with your audience.",
    content: `Modern brands need more than just a great product—they need a voice. We help clients develop communication strategies that connect, engage, and inspire.\n\nFrom social media campaigns to internal newsletters, our approach is holistic and data-driven. Discover how clear messaging and authentic storytelling can set your brand apart in a crowded marketplace.`
  }
];

export default function BlogDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <div className="text-center py-20 text-xl">Blog post not found.</div>;
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] pb-20">
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-3xl mx-auto p-8">
          <CardContent>
            <div className="mb-4 text-xs text-[#B83C3C] font-bold uppercase">{post.category} • {new Date(post.date).toLocaleDateString()}</div>
            <h1 className="text-3xl font-bold mb-6 text-[#2D2D2D]">{post.title}</h1>
            <div className="text-gray-700 text-lg mb-8">{post.content}</div>
            <Button className="btn-primary rounded-full">
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
} 