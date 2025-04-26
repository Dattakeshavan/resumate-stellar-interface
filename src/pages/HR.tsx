
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import WaveDivider from '@/components/WaveDivider';
import FeatureCard from '@/components/FeatureCard';
import { Search, Star, MessageSquare } from 'lucide-react';

const HR = () => {
  const [jobDescription, setJobDescription] = useState('');

  return (
    <div className="min-h-screen bg-blue-gradient font-poppins overflow-hidden">
      <Navigation />
      
      <main className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto animate-fade-in opacity-0">
          <h1 className="text-4xl md:text-6xl font-bold font-orbitron text-white mb-6 leading-tight">
            Find Perfect <span className="bg-clip-text text-transparent bg-gradient-to-r from-resumate-highlight to-blue-400">Matches</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12">
            Let our AI match the best candidates to your job requirements.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-24">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
            <div className="border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 backdrop-blur-md bg-white bg-opacity-5 hover:bg-opacity-10 border-white border-opacity-30 hover:animate-pulse-glow">
              <Textarea
                placeholder="Enter your job description here..."
                className="min-h-[200px] bg-white bg-opacity-10 border-white border-opacity-20 text-white placeholder:text-gray-400"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
              <button className="mt-4 px-6 py-2 bg-resumate-highlight rounded-full text-white font-medium hover:bg-opacity-90 transition-all">
                Find Matches
              </button>
            </div>
          </div>
        </div>

        <WaveDivider />
        
        <div className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12 font-orbitron animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
            Smart Recruitment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="AI Matching" 
              description="Our AI matches resumes to your job requirements with high accuracy."
              icon={Search}
              delay={400}
            />
            <FeatureCard 
              title="Ranking System" 
              description="Get a ranked list of candidates based on skill matches and experience."
              icon={Star}
              delay={600}
            />
            <FeatureCard 
              title="Detailed Analysis" 
              description="Receive in-depth analysis of each candidate's strengths and potential."
              icon={MessageSquare}
              delay={800}
            />
          </div>
        </div>
      </main>

      <footer className="w-full max-w-7xl mx-auto px-6 py-8 text-center text-gray-400">
        <p>© 2025 ResuMate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HR;
