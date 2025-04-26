
import React from 'react';
import { Search, Star, MessageSquare } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import ResumeUploader from '@/components/ResumeUploader';
import WaveDivider from '@/components/WaveDivider';

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-gradient font-poppins overflow-hidden">
      {/* Header Section */}
      <header className="w-full max-w-7xl mx-auto pt-10 px-6 md:px-8">
        <div className="flex justify-between items-center">
          <h1 className="font-orbitron font-bold text-2xl text-white">ResuMate</h1>
          <button className="px-4 py-1.5 rounded-full bg-white bg-opacity-10 text-white border border-white border-opacity-20 hover:bg-opacity-20 transition-all text-sm">
            Sign In
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto animate-fade-in opacity-0">
          <h1 className="text-4xl md:text-6xl font-bold font-orbitron text-white mb-6 leading-tight">
            ResuMate <span className="bg-clip-text text-transparent bg-gradient-to-r from-resumate-highlight to-blue-400">AI</span>-Powered Resume Analyzer
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12">
            Unlock career opportunities with intelligent resume analysis, feedback, and job matching powered by advanced AI.
          </p>
        </div>

        {/* Upload Section */}
        <div className="max-w-xl mx-auto mb-24">
          <ResumeUploader />
        </div>

        <WaveDivider />
        
        {/* Features Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-center mb-12 font-orbitron animate-fade-in opacity-0" style={{ animationDelay: '300ms' }}>
            Enhance Your Job Search
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Smart Analysis" 
              description="Our AI scans your resume and provides detailed insights on strengths and improvement areas."
              icon={Search}
              delay={400}
            />
            <FeatureCard 
              title="Match Score" 
              description="See how well your resume matches job descriptions with our intelligent scoring system."
              icon={Star}
              delay={600}
            />
            <FeatureCard 
              title="Instant Feedback" 
              description="Receive personalized suggestions to optimize your resume for ATS and recruiters."
              icon={MessageSquare}
              delay={800}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 text-center text-gray-400">
        <p>© 2025 ResuMate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
