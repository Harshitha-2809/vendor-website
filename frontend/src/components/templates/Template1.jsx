import React from 'react';
import { MapPin, Phone, MessageCircle, Store, Clock, Utensils, Check } from 'lucide-react';

export default function Template1({ data }) {
  const { 
    shopName = 'Shop Name', 
    description = 'Description', 
    phoneNumber = '1234567890', 
    address = 'Address', 
    category = 'Category', 
    imageUrl = '',
    menuItems = '',
    openingTime = '08:00',
    closingTime = '21:00'
  } = data || {};

  const displayImage = imageUrl || 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1000&q=80';
  const whatsappUrl = 'https://wa.me/91' + phoneNumber;

  const itemsList = menuItems ? menuItems.split(',').map(item => item.trim()).filter(item => item !== '') : [];

  const formatTime = (timeStr) => {
    if (!timeStr) return "08:00 AM";
    try {
      const [hour, minute] = timeStr.split(':');
      const h = parseInt(hour, 10);
      const ampm = h >= 12 ? 'PM' : 'AM';
      const h12 = h % 12 || 12;
      return `${h12}:${minute} ${ampm}`;
    } catch (e) {
      return timeStr;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-200 selection:text-blue-900 relative overflow-hidden">
      <div>
        <div className="w-full h-80 md:h-[500px] px-4 pt-4">
          <img src={displayImage} onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1000&q=80'; }} alt={shopName} className="w-full h-full object-cover rounded-xl shadow-xl border border-gray-200/50" />
        </div>
        <div className="max-w-2xl mx-auto py-20 px-4 text-center mt-8 relative z-10 bg-white/90 backdrop-blur-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-10 border border-white/50 -mt-24 mx-4 md:mx-auto">
          <h1 className="text-4xl font-light text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">{shopName}</h1>
          <div className="text-center mb-8">
            <span className="inline-block px-5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest">{category}</span>
          </div>
          <p className="text-xl font-light text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto text-center">{description}</p>
          

          {/* Menu Items Section */}
          {itemsList.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Utensils className="w-5 h-5 text-blue-500 shadow-sm" />
                <h2 className="text-lg font-bold uppercase tracking-[0.2em] opacity-80">Available Items</h2>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {itemsList.map((item, idx) => (
                  <div key={idx} className="bg-slate-50/50 backdrop-blur-sm border border-slate-200/50 px-6 py-3 rounded-2xl shadow-sm hover:shadow-md transition-all hover:bg-white flex items-center gap-2 text-slate-700 font-semibold group cursor-default">
                    <Check className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Business Hours Section */}
          <div className="mb-12 bg-blue-50/20 border border-blue-100/30 rounded-[2rem] p-8 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-blue-500" />
              <h2 className="text-lg font-bold uppercase tracking-[0.2em] opacity-80">Business Hours</h2>
            </div>
            <div className="flex justify-center gap-12">
              <div className="text-center">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Opens At</p>
                <p className="text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'} tracking-tight">{formatTime(openingTime)}</p>
              </div>
              <div className="w-px h-12 bg-blue-200/50 self-center"></div>
              <div className="text-center">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Closes At</p>
                <p className="text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'} tracking-tight">{formatTime(closingTime)}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 font-medium mt-12">
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 text-slate-700 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow"><Phone className="w-6 h-6 text-blue-500"/> {phoneNumber}</div>
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 text-slate-700 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow"><MapPin className="w-6 h-6 text-blue-500"/> {address}</div>
          </div>
          <div className="flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-black text-white rounded-full px-8 py-4 font-bold transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-slate-800 rounded-full text-lg w-full sm:w-auto shadow-lg">
              <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
