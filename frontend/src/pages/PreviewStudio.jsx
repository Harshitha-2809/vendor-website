import React, { useEffect, useState, Suspense } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Loader2, ArrowLeft, Monitor, Smartphone, UploadCloud, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const templateMap = {
  '1': React.lazy(() => import('../components/templates/Template1')),
  '2': React.lazy(() => import('../components/templates/Template2')),
  '3': React.lazy(() => import('../components/templates/Template3')),
  '4': React.lazy(() => import('../components/templates/Template4')),
  '5': React.lazy(() => import('../components/templates/Template5')),
  '6': React.lazy(() => import('../components/templates/Template6')),
  '7': React.lazy(() => import('../components/templates/Template7')),
  '8': React.lazy(() => import('../components/templates/Template8')),
  '9': React.lazy(() => import('../components/templates/Template9')),
  '10': React.lazy(() => import('../components/templates/Template10')),
  '11': React.lazy(() => import('../components/templates/Template11')),
  '12': React.lazy(() => import('../components/templates/Template12')),
  '13': React.lazy(() => import('../components/templates/Template13')),
  '14': React.lazy(() => import('../components/templates/Template14')),
  '15': React.lazy(() => import('../components/templates/Template15')),
  '16': React.lazy(() => import('../components/templates/Template16')),
  '17': React.lazy(() => import('../components/templates/Template17')),
  '18': React.lazy(() => import('../components/templates/Template18')),
  '19': React.lazy(() => import('../components/templates/Template19')),
  '20': React.lazy(() => import('../components/templates/Template20')),
};

export default function PreviewStudio() {
  const { shopname } = useParams();
  const navigate = useNavigate();
  const [vendorData, setVendorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [publishing, setPublishing] = useState(false);
  const [device, setDevice] = useState('desktop');

  useEffect(() => {
    fetch(`https://vendor-website-fjrx.onrender.com/api/vendors/${shopname}`)
      .then(res => res.json())
      .then(data => { setVendorData(data); setLoading(false); })
      .catch(console.error);
  }, [shopname]);

  const handleTemplateSwitch = async (e) => {
    const newId = e.target.value;
    const updated = { ...vendorData, templateId: newId };
    setVendorData(updated);
    
    await fetch('https://vendor-website-fjrx.onrender.com/api/vendors/save-draft', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated)
    });
  };

  const handlePublish = async () => {
    setPublishing(true);
    try {
      const res = await fetch(`https://vendor-website-fjrx.onrender.com/api/vendors/publish/${shopname}`, { method: 'POST' });
      if (!res.ok) throw new Error("Publish failed");
      navigate(`/publish/${shopname}`);
    } catch(err) {
      alert("Error: " + err.message);
      setPublishing(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white"><Loader2 className="w-12 h-12 animate-spin"/></div>;

  const ComputedTemplate = templateMap[vendorData.templateId] || templateMap['1'];

  return (
    <div className="h-screen bg-slate-950 flex flex-col font-sans overflow-hidden">
      {/* Top Action Bar */}
      <nav className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 shrink-0 z-50">
        <div className="flex items-center gap-6">
          <Link to={`/create?edit=${shopname}`} className="text-slate-400 hover:text-white flex items-center gap-2 font-bold text-sm bg-slate-800/50 hover:bg-slate-800 px-5 py-2.5 rounded-xl transition-all border border-slate-700">
            <ArrowLeft className="w-4 h-4"/> Editor
          </Link>
          <div className="hidden lg:flex items-center bg-slate-800/50 rounded-xl p-1.5 border border-slate-700 shadow-inner">
            <button onClick={() => setDevice('desktop')} className={`px-5 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-all $\{device === 'desktop' ? 'bg-slate-700 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}><Monitor className="w-4 h-4"/> Desktop</button>
            <button onClick={() => setDevice('mobile')} className={`px-5 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-all $\{device === 'mobile' ? 'bg-slate-700 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}><Smartphone className="w-4 h-4"/> Mobile</button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-slate-400 font-bold text-sm hidden md:inline">Layout:</span>
            <select value={vendorData.templateId} onChange={handleTemplateSwitch} className="bg-slate-800 text-white border border-slate-700 rounded-xl px-5 py-2.5 font-bold text-sm outline-none w-32 md:w-48 appearance-none cursor-pointer hover:bg-slate-700 transition-colors focus:ring-2 focus:ring-cyan-500 shadow-sm">
              {Array.from({length:20}, (_,i)=> <option key={i+1} value={i+1}>Template {i+1}</option>)}
            </select>
          </div>
          <button onClick={handlePublish} disabled={publishing} className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-8 py-2.5 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5 border border-white/10 ml-2">
            {publishing ? <Loader2 className="w-5 h-5 animate-spin"/> : <UploadCloud className="w-5 h-5"/>} <span className="hidden sm:inline">Publish Site</span><span className="sm:hidden">Publish</span>
          </button>
        </div>
      </nav>

      {/* Preview Workspace */}
      <main className="flex-1 p-4 lg:p-10 flex items-center justify-center overflow-hidden relative">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] bg-white overflow-y-auto overflow-x-hidden relative shadow-2xl z-10 $\{device === 'desktop' ? 'w-full max-w-[1440px] h-full rounded-2xl border-4 border-slate-800 ring-8 ring-slate-900/50' : 'w-[400px] h-[85vh] rounded-[3rem] border-[16px] border-slate-800 shadow-[0_30px_60px_rgba(0,0,0,0.5)]'}`}>
          {device === 'mobile' && <div className="sticky top-0 w-full h-8 bg-slate-800 z-50 flex justify-center"><div className="w-1/3 h-6 bg-slate-900 rounded-b-3xl"></div></div>}
          <Suspense fallback={<div className="flex flex-col items-center justify-center h-full text-slate-400"><Loader2 className="w-10 h-10 animate-spin mb-4 text-blue-500"/><p className="font-bold tracking-wide">Compiling Design...</p></div>}>
            <div className="origin-top pointer-events-auto min-h-full">
              <ComputedTemplate data={vendorData} />
            </div>
          </Suspense>
        </div>
      </main>
    </div>
  );
}
