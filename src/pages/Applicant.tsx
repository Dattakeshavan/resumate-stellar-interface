
import React from 'react';
import Navigation from '@/components/Navigation';
import ResumeUploader from '@/components/ResumeUploader';
import WaveDivider from '@/components/WaveDivider';
import FeatureCard from '@/components/FeatureCard';
import { Search, Star, MessageSquare } from 'lucide-react';

const Applicant = () => {
  return (
    <div className="min-h-screen bg-blue-gradient font-poppins overflow-hidden">
      <Navigation />
      
      <main className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto animate-fade-in opacity-0">
          <h1 className="text-4xl md:text-6xl font-bold font-orbitron text-white mb-6 leading-tight">
            Optimize Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-resumate-highlight to-blue-400">Resume</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12">
            Get instant AI-powered feedback and improve your chances of landing your dream job.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-24">
          <ResumeUploader />
        </div>

        <WaveDivider />
        
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

      <footer className="w-full max-w-7xl mx-auto px-6 py-8 text-center text-gray-400">
        <p>© 2025 ResuMate. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Applicant;
