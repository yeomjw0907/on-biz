
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';
import { Link, useLocation } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: '회사소개', path: '/about' },
  { label: '컨설팅 분야', path: '/services' },
  { label: '게시판', path: '/board' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3 shadow-sm' 
          : 'bg-transparent border-b border-white/10 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex-shrink-0 flex items-center cursor-pointer relative z-50">
            <Link to="/" className="flex items-center gap-3 group">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xl shadow-lg transition-all duration-300 ${isScrolled ? 'bg-slate-900 text-white' : 'bg-white text-slate-900 group-hover:scale-105'}`}>
                ON
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-xl tracking-tight leading-none transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                  온비즈
                </span>
                <span className={`text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${isScrolled ? 'text-slate-500' : 'text-white/70'}`}>
                  OnBiz Consulting
                </span>
              </div>
            </Link>
          </div>

          {/* Centered Navigation Items */}
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex gap-12">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-all duration-300 relative group py-2 ${
                    isScrolled 
                      ? (location.pathname === item.path ? 'text-slate-900 font-bold' : 'text-slate-600 hover:text-slate-900') 
                      : (location.pathname === item.path ? 'text-white font-bold' : 'text-white/80 hover:text-white')
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                    location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  } ${isScrolled ? 'bg-amber-500' : 'bg-white'}`}></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/contact"
              className={`group flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 ${
                 isScrolled
                  ? 'bg-slate-900 text-white hover:bg-slate-800'
                  : 'bg-white text-slate-900 hover:bg-amber-50'
              }`}
            >
              사전검토 의뢰
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="md:hidden flex items-center relative z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${isOpen ? 'text-slate-900' : (isScrolled ? 'text-slate-900' : 'text-white')}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-24 px-6 pb-10">
          <div className="space-y-2">
            {navItems.map((item, idx) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-5 py-4 text-2xl font-bold border-b border-slate-100 flex justify-between items-center transition-all hover:pl-8 ${
                  location.pathname === item.path ? 'text-amber-600' : 'text-slate-900'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {item.label}
                <ChevronRight size={20} className="text-slate-300" />
              </Link>
            ))}
          </div>
          
          <div className="mt-auto space-y-4">
             <Link
              to="/contact"
              className="block w-full text-center px-5 py-5 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:bg-slate-800 transition-colors"
            >
              사전검토 의뢰하기
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
