import React from 'react';

interface DemoCardProps {
  title: string;
  description: string;
  videoPlaceholder: string;
}

const DemoCard: React.FC<DemoCardProps> = ({ title, description, videoPlaceholder }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
      <h3 className="text-2xl font-semibold mb-4 text-purple-400">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
      <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border-2 border-dashed border-purple-500/30">
        <span className="text-6xl text-purple-400">{videoPlaceholder}</span>
        {/* Replace with actual video component */}
        {/* <video controls className="w-full h-full rounded-xl">
          <source src="your-video.mp4" type="video/mp4" />
        </video> */}
      </div>
    </div>
  );
};

const DemoSection: React.FC = () => {
  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          See It In Action
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <DemoCard
            title="Violence Detection"
            description="Watch how our AI instantly identifies violent behavior patterns and triggers immediate alerts to prevent escalation."
            videoPlaceholder="📹"
          />
          <DemoCard
            title="Theft Detection"
            description="See how our system catches theft activities that human eyes often miss, even in crowded environments."
            videoPlaceholder="📹"
          />
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
