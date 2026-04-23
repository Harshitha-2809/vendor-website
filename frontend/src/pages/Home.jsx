import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Store, ArrowRight, Play, Moon, Sparkles, Layout, 
  Smartphone, MessageCircle, Globe, Image as ImageIcon, 
  Search, Send, CheckCircle
} from 'lucide-react';

const Home = () => {
  // Fade In Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-[#fafbff] font-sans selection:bg-cyan-200 selection:text-cyan-900 overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <img src="/images/logo.png" alt="Vendor-Web Logo" className="w-10 h-10 object-contain drop-shadow-md group-hover:rotate-12 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 tracking-tight leading-none">
                Vendor-Web
              </span>
              <span className="text-[10px] md:text-xs font-semibold text-slate-500 tracking-tight mt-0.5 leading-none">
                Design of Digital Empowerment System for Small Scale Vendor
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Features</a>
            <a href="#templates" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Templates</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100 hidden sm:block">
              <Moon className="w-5 h-5" />
            </button>
            <button className="hidden sm:block text-gray-600 hover:text-gray-900 font-medium px-4 py-2 transition-colors">
              Login
            </button>
            <Link 
              to="/create" 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-2.5 rounded-2xl font-semibold shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 hover:shadow-cyan-500/40"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center">
        {/* Soft blur circles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full z-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-lavender-200/50 bg-[#e0e7ff] rounded-full blur-[100px] opacity-60"></div>
          <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-cyan-200/50 bg-[#cffafe] rounded-full blur-[100px] opacity-60"></div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-blue-100 shadow-sm text-blue-600 text-sm font-semibold mb-8">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            AI-Powered Website Builder for Small Vendors
          </motion.div>

          <motion.h1 
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto"
          >
            Build Your Dream <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400">Business Website</span> In Minutes
          </motion.h1>
          
          <motion.p 
            variants={fadeUp}
            className="text-lg sm:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            No coding required. Choose a template, customize with AI, and publish your professional website instantly for bakeries, salons, restaurants, retail shops, gyms, and freelancers.
          </motion.p>

          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              to="/create" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-cyan-500/30 transition-all hover:scale-105 hover:shadow-cyan-500/50 border border-white/20"
            >
              Start Building Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-2xl text-lg font-bold shadow-lg shadow-slate-200/50 transition-all hover:bg-slate-50 hover:scale-105 border border-slate-100">
              <Play className="w-5 h-5 text-blue-600" fill="currentColor" />
              Watch Demo
            </button>
          </motion.div>
        </motion.div>

        {/* Hero Visual Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, type: "spring", stiffness: 50 }}
          className="relative mt-24 max-w-5xl mx-auto px-4 z-10 w-full"
        >
          {/* Glowing Shadow Behind Mockup */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/20 to-blue-600/20 blur-[80px] rounded-[3rem] -z-10 transform scale-95 translate-y-12"></div>
          
          <div className="relative bg-white/40 backdrop-blur-2xl border border-white/50 rounded-[2rem] p-2 sm:p-4 shadow-2xl">
            {/* Browser Header */}
            <div className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm border border-slate-100">
              <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-white rounded-lg px-4 py-1.5 text-sm text-slate-400 flex items-center justify-center gap-2 border border-slate-100 shadow-sm">
                  <Store className="w-4 h-4" />
                  vendor-web.com/preview/my-shop
                </div>
              </div>
              
              {/* Dummy Website Content */}
              <div className="bg-white h-[300px] sm:h-[400px] w-full relative overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-50"></div>
                
                {/* Dummy UI Blocks */}
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 z-10 shadow-sm">
                  <Store className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-slate-800 z-10 mb-4">My Awesome Shop</h2>
                <div className="w-48 h-4 bg-slate-200 rounded-full z-10 mb-8 blur-[1px]"></div>
                
                <div className="flex gap-4 z-10">
                  <div className="w-32 h-24 bg-white rounded-xl shadow-sm border border-slate-100"></div>
                  <div className="w-32 h-24 bg-white rounded-xl shadow-sm border border-slate-100"></div>
                  <div className="w-32 h-24 bg-white rounded-xl shadow-sm border border-slate-100 hidden sm:block"></div>
                </div>
                
                {/* Floating Tags */}
                <div className="absolute top-10 -left-6 sm:left-10 bg-white/90 backdrop-blur border border-slate-100 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 animate-[bounce_4s_infinite]">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-bold text-slate-700">AI Powered</span>
                </div>
                
                <div className="absolute bottom-10 -right-6 sm:right-10 bg-white/90 backdrop-blur border border-slate-100 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 animate-[bounce_5s_infinite_0.5s]">
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-bold text-slate-700">WhatsApp Contact</span>
                </div>

                <div className="absolute top-32 right-4 sm:right-20 bg-white/90 backdrop-blur border border-slate-100 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 animate-[bounce_6s_infinite_1s]">
                  <Globe className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-bold text-slate-700">Mobile Ready</span>
                </div>
                
                <div className="absolute bottom-32 left-4 sm:left-20 bg-white/90 backdrop-blur border border-slate-100 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 animate-[bounce_4.5s_infinite_0.2s]">
                  <Send className="w-4 h-4 text-cyan-500" />
                  <span className="text-sm font-bold text-slate-700">One Click Publish</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Everything You Need To Succeed</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Powerful features built specifically for small scale vendors to establish a strong digital presence instantly.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Layout/>, title: "20 Reusable Templates", desc: "Professionally designed layouts for every niche." },
              { icon: <Store/>, title: "Category-Based Layouts", desc: "Smart layouts that adapt to your specific business." },
              { icon: <MessageCircle/>, title: "WhatsApp Integration", desc: "Receive orders and inquiries directly on WhatsApp." },
              { icon: <Globe/>, title: "Unique URL Generation", desc: "Get a dedicated vendor-web.com/your-shop link." },
              { icon: <Smartphone/>, title: "Mobile Responsive", desc: "Looks perfect on glowing screens of all sizes." },
              { icon: <ImageIcon/>, title: "Image Gallery Support", desc: "Showcase your products and shop interior beautifully." },
              { icon: <Search/>, title: "Local SEO Optimized", desc: "Built-in meta tags to help local customers find you." },
              { icon: <Send/>, title: "One-Click Publish", desc: "No complex deployment. Hit publish and you're live." },
            ].map((feat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="group bg-[#fafbff] border border-blue-50/50 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(feat.icon, { className: 'w-7 h-7' })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Preview Section */}
      <section id="templates" className="py-24 bg-[#fafbff] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Stunning Templates For Every Niche</h2>
              <p className="text-lg text-slate-500">Choose from 20+ optimized designs. Click preview to see them in action.</p>
            </div>
            <Link to="/create" className="text-blue-600 font-bold hover:text-blue-700 flex items-center gap-2 group">
              View All Templates
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Bakery Template", tag: "Food & Beverage", color: "bg-amber-100 text-amber-700", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80" },
              { title: "Salon Setup", tag: "Beauty & Spa", color: "bg-pink-100 text-pink-700", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80" },
              { title: "Restaurant Pro", tag: "Dine-in", color: "bg-red-100 text-red-700", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80" },
              { title: "Freelancer Folio", tag: "Creative", color: "bg-indigo-100 text-indigo-700", img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&q=80" }
            ].map((tmpl, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] p-3 shadow-md border border-slate-100 group overflow-hidden"
              >
                <div className="relative w-full h-48 rounded-3xl overflow-hidden mb-4 bg-slate-100">
                  <img src={tmpl.img} alt={tmpl.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold shadow-xl transform scale-90 group-hover:scale-100 transition-all">
                      Preview
                    </button>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${tmpl.color}`}>
                    {tmpl.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">{tmpl.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Start for free, upgrade when you need more power.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {/* Free */}
            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Free</h3>
              <p className="text-slate-500 mb-6">Perfect for new businesses.</p>
              <div className="text-5xl font-black text-slate-900 mb-8">$0<span className="text-lg text-slate-400 font-medium">/mo</span></div>
              <ul className="space-y-4 mb-8">
                {["1 Website", "5 Templates", "Standard Support", "Vendor-Web Subdomain"].map(f => (
                  <li key={f} className="flex items-center gap-3 text-slate-600 font-medium">
                    <CheckCircle className="w-5 h-5 text-cyan-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors">Start Free</button>
            </div>

            {/* Pro - Recommended */}
            <div className="bg-slate-900 text-white rounded-[2rem] p-10 shadow-2xl transform md:-translate-y-4 relative border border-slate-800">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                Recommended
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <p className="text-slate-400 mb-6">For growing local shops.</p>
              <div className="text-5xl font-black text-white mb-8">$12<span className="text-lg text-slate-400 font-medium">/mo</span></div>
              <ul className="space-y-4 mb-8">
                {["3 Websites", "All 20+ Templates", "Priority Support", "Custom Domain", "Remove Watermark"].map(f => (
                  <li key={f} className="flex items-center gap-3 text-slate-300 font-medium">
                    <CheckCircle className="w-5 h-5 text-cyan-400" /> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105">Upgrade to Pro</button>
            </div>

            {/* Business */}
            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Business</h3>
              <p className="text-slate-500 mb-6">For multiple locatons.</p>
              <div className="text-5xl font-black text-slate-900 mb-8">$29<span className="text-lg text-slate-400 font-medium">/mo</span></div>
              <ul className="space-y-4 mb-8">
                {["Unlimited Websites", "All Premium Templates", "24/7 Support", "Custom Domain", "Analytics Tool"].map(f => (
                  <li key={f} className="flex items-center gap-3 text-slate-600 font-medium">
                    <CheckCircle className="w-5 h-5 text-cyan-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 text-left">
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/logo.png" alt="Vendor-Web Logo" className="w-8 h-8 object-contain drop-shadow-sm" />
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">Vendor-Web</span>
                  <span className="text-[10px] font-semibold text-slate-500 tracking-tight mt-1 leading-tight max-w-[180px]">
                    Design of Digital Empowerment System for Small Scale Vendor
                  </span>
                </div>
              </div>
              <p className="text-slate-500 leading-relaxed max-w-sm">
                Empowering small scale vendors with blazing fast, AI-powered digital websites. Transform your local business today.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors">Features</a></li>
                <li><a href="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors">Templates</a></li>
                <li><a href="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors">Pricing</a></li>
                <li><a href="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-colors shadow-sm"><span className="text-sm font-bold">X</span></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-colors shadow-sm"><span className="text-sm font-bold">FB</span></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-pink-600 hover:border-pink-600 transition-colors shadow-sm"><span className="text-sm font-bold">IG</span></a>
                <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-700 hover:border-blue-700 transition-colors shadow-sm"><span className="text-sm font-bold">IN</span></a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-slate-500 font-medium text-sm">
            <p>© {new Date().getFullYear()} Vendor-Web. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
