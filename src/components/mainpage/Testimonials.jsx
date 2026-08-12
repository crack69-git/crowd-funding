import React from "react";
import { Card, Avatar } from "@heroui/react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "TECH INNOVATOR",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    quote:
      '"Crowdfundly helped me turn my tech prototype into a reality. The community support is incredible."',
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "ACTIVE BACKER",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    quote:
      '"I love discovering and supporting innovative projects. The platform is so easy to use and transparent."',
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "CREATIVE DIRECTOR",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    quote:
      "\"As a creator, the withdrawal process is seamless. It's the most professional crowdfunding tool I've used.\"",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          What Our Community Says
        </h2>
        <p className="mt-3 text-base text-slate-600 max-w-xl mx-auto">
          Join thousands of satisfied creators and backers.
        </p>

        {/* Testimonial Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {testimonials.map((item) => (
            <Card
              key={item.id}
              shadow="none"
              className="border border-emerald-100/80 rounded-2xl bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div>
                {/* User Info Header */}
                <div className="flex items-center gap-4 mb-6">
                  <Avatar
                    src={item.avatar}
                    className="w-14 h-14 text-large flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-800 tracking-wider uppercase mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  {item.quote}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
