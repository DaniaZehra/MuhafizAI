'use client';
import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl text-center border border-purple-500/10 hover:-translate-y-2 hover:border-purple-500/50 transition-all duration-300">
      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-3xl">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Real-time Detection',
      description: 'Instant analysis of CCTV footage with immediate flagging of suspicious activities'
    },
    {
      icon: '📱',
      title: 'Smart Alerts',
      description: 'SMS and app notifications sent to shop owners, security personnel, or homeowners'
    },
    {
      icon: '💾',
      title: 'Evidence Collection',
      description: 'Automatic recording of 15-30 second clips with timestamps and camera IDs'
    },
    {
      icon: '🧠',
      title: 'Self-Learning AI',
      description: 'Feedback loop system that continuously improves detection accuracy over time'
    },
    {
      icon: '📊',
      title: 'Monthly Reports',
      description: 'Comprehensive incident analysis and security insights for stakeholders'
    },
    {
      icon: '☁️',
      title: 'Cloud Backend',
      description: 'Secure cloud storage and processing with scalable infrastructure'
    }
  ];

  return (
    <section id="features" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Advanced Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
