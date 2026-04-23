import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Loader2, Eye, Layout, CheckCircle } from 'lucide-react';

const categories = ["Bakery", "Service Center", "Catering", "Salon", "Retail Shop", "Gym", "Restaurant", "Freelancer Portfolio"];
const templates = Array.from({length:20}, (_,i)=>({id:`${i+1}`, name:`Template ${i+1}`}));

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

export default function VendorForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editSlug = searchParams.get('edit');
  
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    shopName: '', description: '', phoneNumber: '', address: '', category: categories[0], templateId: templates[0].id, imageUrl: '',
    menuItems: '', openingTime: '08:00', closingTime: '21:00'
  });

  useEffect(() => {
    if (editSlug) {
      fetch(`https://vendor-website-fjrx.onrender.com/api/vendors/${editSlug}`)
        .then(res => res.json())
        .then(data => { if(data.shopName) setFormData(data); })
        .catch(console.error);
    }
  }, [editSlug]);

  const handleChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSaveDraft = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://vendor-website-fjrx.onrender.com/api/vendors/save-draft', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if(!res.ok) throw new Error(data.error || data.message || 'Error saving draft');
      navigate(`/preview/${data.vendor.slug}`);
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <Link to="/dashboard" className="text-slate-500 font-bold flex items-center gap-2 mb-8 hover:text-slate-900 w-max transition-colors">
          <ArrowLeft className="w-5 h-5"/> Back to Dashboard
        </Link>

        {/* Progress Bar Container */}
        <div className="mb-10 px-4 lg:px-0">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 rounded-full z-0"></div>
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-blue-600 rounded-full z-0 transition-all duration-500 $\{step === 2 ? 'w-full' : 'w-1/2'}`}></div>
            
            <div className="relative z-10 flex flex-col items-center bg-slate-50 px-2">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-sm transition-colors duration-300 $\{step >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                {step > 1 ? <CheckCircle className="w-6 h-6"/> : "1"}
              </div>
              <span className={`font-bold mt-3 text-sm $\{step >= 1 ? 'text-slate-900' : 'text-slate-400'}`}>Details</span>
            </div>
            
            <div className="relative z-10 flex flex-col items-center bg-slate-50 px-2">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-sm transition-colors duration-300 $\{step >= 2 ? 'bg-blue-600 text-white' : 'bg-white border-4 border-slate-200 text-slate-400'}`}>
                2
              </div>
              <span className={`font-bold mt-3 text-sm $\{step >= 2 ? 'text-slate-900' : 'text-slate-400'}`}>Design</span>
            </div>
          </div>
        </div>

        <motion.div 
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 p-8 md:p-14 border border-slate-100"
        >
          {step === 1 ? (
            <form onSubmit={handleNext} className="space-y-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Business Details</h2>
                <p className="text-slate-500 mt-2 font-medium">Tell us about your business to generate your site.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Shop Name *</label>
                  <input required type="text" name="shopName" value={formData.shopName} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 bg-slate-50 focus:bg-white transition-colors" placeholder="e.g. Hrishi's Bakery"/>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Category *</label>
                  <select name="category" value={formData.category} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 bg-slate-50 focus:bg-white outline-none text-slate-900 transition-colors">
                    {categories.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Description *</label>
                <textarea required name="description" value={formData.description} onChange={handleChange} rows={4} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 bg-slate-50 focus:bg-white transition-colors" placeholder="Describe your amazing business..." />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">WhatsApp Number *</label>
                  <input required type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 bg-slate-50 focus:bg-white transition-colors" placeholder="10 digit number"/>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Location Address *</label>
                  <input required type="text" name="address" value={formData.address} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 bg-slate-50 focus:bg-white transition-colors" placeholder="City, Location..."/>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Available Items / Menu (Comma separated)</label>
                <textarea name="menuItems" value={formData.menuItems} onChange={handleChange} rows={2} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 bg-slate-50 focus:bg-white transition-colors" placeholder="e.g. Cakes, Pastries, Cookies, Bread, Donuts" />
                <p className="text-xs text-slate-400 mt-2 font-medium">Add items your business offers, separated by commas.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Opening Time</label>
                  <input type="time" name="openingTime" value={formData.openingTime} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 bg-slate-50 focus:bg-white transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Closing Time</label>
                  <input type="time" name="closingTime" value={formData.closingTime} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 bg-slate-50 focus:bg-white transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Custom Banner Image (Optional)</label>
                <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 bg-slate-50 focus:bg-white transition-colors" placeholder="https://images.unsplash.com/..." />
                <p className="text-xs text-slate-400 mt-2 font-medium">Leave blank to use an AI-selected premium fallback image.</p>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4.5 rounded-xl shadow-xl flex items-center justify-center gap-2 transition-all hover:-translate-y-1">
                  Continue to Design <ArrowRight className="w-5 h-5"/>
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-8">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Choose your layout</h2>
                <p className="text-slate-500 mt-2 font-medium">Select a starting block. You can instantly toggle this in the Preview Studio later.</p>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-2 max-h-[50vh] overflow-y-auto custom-scrollbar">
                {templates.map(t => {
                  const TemplateComponent = templateMap[t.id];
                  return (
                  <div 
                    key={t.id} 
                    onClick={() => setFormData({...formData, templateId: t.id})}
                    className={`relative cursor-pointer rounded-2xl border-2 transition-all duration-300 group overflow-hidden ${formData.templateId === t.id ? 'border-blue-600 shadow-md ring-4 ring-blue-600/10 scale-[1.02]' : 'border-slate-200 hover:border-blue-400'}`}
                  >
                    <div className="aspect-[4/3] w-full bg-slate-50 relative overflow-hidden flex items-center justify-center border-b border-slate-100">
                      <div className="w-[400%] h-[400%] origin-top-left scale-[0.25] absolute top-0 left-0 pointer-events-none">
                        <Suspense fallback={<div className="flex h-full items-center justify-center bg-slate-100/50"><Loader2 className="w-16 h-16 animate-spin text-slate-300"/></div>}>
                          {TemplateComponent && <TemplateComponent data={{ ...formData, shopName: formData.shopName || 'Shop Name', description: formData.description || 'Description' }} />}
                        </Suspense>
                      </div>
                    </div>
                    <div className={`p-3 text-center font-bold text-xs uppercase tracking-wider relative z-10 bg-white ${formData.templateId === t.id ? 'text-blue-700' : 'text-slate-600'}`}>
                      Layout {t.id}
                    </div>
                    {formData.templateId === t.id && (
                      <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full p-1 shadow-sm z-20">
                        <CheckCircle className="w-4 h-4"/>
                      </div>
                    )}
                  </div>
                )})}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100">
                <button onClick={() => setStep(1)} className="w-full sm:w-1/3 bg-slate-100 text-slate-600 font-bold py-4 rounded-xl hover:bg-slate-200 transition-colors border border-slate-200">Back</button>
                <button onClick={handleSaveDraft} disabled={loading} className="w-full sm:w-2/3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-xl shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 hover:from-blue-700 hover:to-cyan-600 transition-all hover:-translate-y-1">
                  {loading ? <Loader2 className="w-6 h-6 animate-spin"/> : <>Save & Preview <Eye className="w-5 h-5"/></>}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
