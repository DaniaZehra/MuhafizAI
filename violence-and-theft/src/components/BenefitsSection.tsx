import React from 'react';

interface BenefitItemProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-6">
      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
        <span className="text-xl">{icon}</span>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-3 text-white">{title}</h4>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: '💰',
      title: 'Cost-effective & Efficient',
      description: 'Eliminates manual footage review, reducing labor costs and time waste while providing 24/7 automated monitoring.'
    },
    {
      icon: '⚡',
      title: 'Detect Escalations',
      description: 'Early detection of potential violence allows for preventive action before situations escalate into serious incidents.'
    },
    {
      icon: '👥',
      title: 'Crowd Theft Detection',
      description: 'Captures theft activities in crowded environments that typically go unnoticed by human observers.'
    },
    {
      icon: '🔍',
      title: 'Evidence Assistance',
      description: 'Provides investigators and community members with pre-flagged incidents, eliminating the need to review entire footage.'
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Key Benefits
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;