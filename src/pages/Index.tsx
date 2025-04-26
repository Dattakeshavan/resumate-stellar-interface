
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Star, MessageSquare } from 'lucide-react';
import Navigation from '@/components/Navigation';
import FeatureCard from '@/components/FeatureCard';
import WaveDivider from '@/components/WaveDivider';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-gradient font-poppins overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <main className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto animate-fade-in opacity-0">
          <h1 className="text-4xl md:text-6xl font-bold font-orbitron text-white mb-6 leading-tight">
            ResuMate <span className="bg-clip-text text-transparent bg-gradient-to-r from-resumate-highlight to-blue-400">AI</span>-Powered Resume Analyzer
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12">
            Unlock career opportunities with intelligent resume analysis, feedback, and job matching powered by advanced AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/applicant')}
              className="px-8 py-3 rounded-full bg-resumate-highlight text-white font-medium hover:bg-opacity-90 transition-all"
            >
              Upload Your Resume
            </button>
            <button 
              onClick={() => navigate('/hr')}
              className="px-8 py-3 rounded-full bg-white bg-opacity-10 text-white border border-white border-opacity-20 hover:bg-opacity-20 transition-all"
            >
              Post a Job
            </button>
          </div>
        </div>

        <WaveDivider />
        
        {/* Features Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12 font-orbitron animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
            Why Choose ResuMate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Smart Analysis" 
              description="Our AI scans resumes and job descriptions to find the perfect match."
              icon={Search}
              delay={400}
            />
            <FeatureCard 
              title="Match Score" 
              description="Get accurate matching scores between candidates and job requirements."
              icon={Star}
              delay={600}
            />
            <FeatureCard 
              title="Instant Feedback" 
              description="Receive detailed insights and suggestions for both parties."
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

export default Index;
