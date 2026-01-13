import React from 'react';
import { Target, Users, Award, BookOpen, Zap, Globe, Heart, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function AboutPage() {
  const stats = [
    { label: 'Active Students', value: '50,000+', icon: Users },
    { label: 'Expert Instructors', value: '200+', icon: Award },
    { label: 'Courses Available', value: '500+', icon: BookOpen },
    { label: 'Countries Reached', value: '120+', icon: Globe }
  ];
  const navigator = useNavigate();
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We believe education should be accessible to everyone, everywhere. Our mission is to democratize learning and empower individuals to achieve their goals.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technology and teaching methodologies to create engaging, effective learning experiences that stick.'
    },
    {
      icon: Heart,
      title: 'Student-Centered',
      description: 'Every decision we make puts our students first. Your success is our success, and we are committed to supporting you every step of the way.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'Learning never stops, and neither do we. We continuously improve our platform, content, and support to deliver the best experience.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: '15 years in EdTech, passionate about accessible education'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Former Google engineer, building scalable learning platforms'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Content',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Curriculum expert with 20+ years teaching experience'
    },
    {
      name: 'David Kumar',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      bio: 'Award-winning UX designer focused on user engagement'
    }
  ];
 const handleNavigate = ()=>{
    navigator("/courses");
 }
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-gray-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Empowering Learners
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Worldwide
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make quality education accessible to everyone. Join millions of learners advancing their careers and discovering new passions through our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gray-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Founded in 2018, our platform was born from a simple idea: everyone deserves access to quality education, regardless of their location or financial situation.
                </p>
                <p>
                  What started as a small collection of free programming courses has grown into a comprehensive learning ecosystem with thousands of courses across dozens of subjects, serving students in over 120 countries.
                </p>
                <p>
                  Today, we partner with industry experts, leading universities, and passionate educators to deliver world-class learning experiences that transform lives and careers.
                </p>
                <p>
                  We're proud to have helped millions of learners achieve their goals, from career changers landing their dream jobs to hobbyists discovering new passions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-gray-800">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=800&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              These principles guide everything we do and shape the experience we create for our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-950 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-lg mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A diverse team of educators, technologists, and innovators committed to transforming education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-all group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 via-gray-900 to-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community of learners and take the first step towards achieving your goals today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleNavigate} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Browse Courses
            </button>
            <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors border border-gray-700">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}