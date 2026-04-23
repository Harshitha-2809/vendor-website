import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Store, Globe, Eye, Edit3, Plus, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/vendors')
      .then(res => res.json())
      .then(data => {
        setVendors(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans selection:bg-blue-200 selection:text-blue-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-6">
          <div>
            <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-4 transition-colors">
              &larr; Back to Home
            </Link>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">My Websites</h1>
            <p className="text-slate-500 mt-2 font-medium">Manage and publish your digital storefronts seamlessly.</p>
          </div>
          <Link to="/create" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-cyan-500/20 flex items-center gap-2 transition-transform hover:-translate-y-1">
            <Plus className="w-5 h-5" /> Create New Site
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3].map(i => <div key={i} className="h-72 bg-white rounded-[2rem] shadow-sm border border-slate-100 animate-pulse"></div>)}
          </div>
        ) : vendors.length === 0 ? (
          <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="text-center py-32 bg-white rounded-[3rem] shadow-sm border border-slate-100">
            <Store className="w-20 h-20 text-slate-200 mx-auto mb-6" />
            <h3 className="text-3xl font-extrabold text-slate-800 mb-3 tracking-tight">No websites yet</h3>
            <p className="text-slate-500 mb-8 max-w-sm mx-auto leading-relaxed">Start building your powerful online presence today with our seamless builder.</p>
            <Link to="/create" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 inline-block">
              Build Your First Site
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vendors.map((v, i) => (
              <motion.div initial={{ opacity:0, y: 20}} animate={{opacity:1,y:0}} transition={{delay: i*0.1}} key={v.slug} className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col h-full group">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-inner">
                    <Store className="w-8 h-8" />
                  </div>
                  <span className={`px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full shadow-sm $\{v.status === 'published' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-amber-100 text-amber-700 border border-amber-200'}`}>
                    {v.status || 'Draft'}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2 line-clamp-1">{v.shopName}</h3>
                <p className="text-cyan-600 font-bold mb-6 text-sm uppercase tracking-widest">{v.category}</p>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-8">
                  <Clock className="w-4 h-4"/> Updated {new Date(v.updatedAt || v.createdAt).toLocaleDateString()}
                </div>
                
                <div className="mt-auto space-y-3">
                  <div className="flex gap-3">
                    <Link to={`/create?edit=${v.slug}`} className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold py-3 rounded-xl flex items-center justify-center gap-2 border border-slate-200 transition-colors shadow-sm">
                      <Edit3 className="w-4 h-4" /> Edit
                    </Link>
                    <Link to={`/preview/${v.slug}`} className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold py-3 rounded-xl flex items-center justify-center gap-2 border border-slate-200 transition-colors shadow-sm">
                      <Eye className="w-4 h-4" /> Preview
                    </Link>
                  </div>
                  {v.status === 'published' ? (
                    <a href={`/${v.slug}`} target="_blank" rel="noopener noreferrer" className="w-full bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors border border-blue-100">
                      <Globe className="w-4 h-4" /> Visit Live Site
                    </a>
                  ) : (
                    <Link to={`/preview/${v.slug}`} className="w-full bg-slate-900 text-white hover:bg-slate-800 font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg group-hover:shadow-xl">
                      Ready to Publish <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
