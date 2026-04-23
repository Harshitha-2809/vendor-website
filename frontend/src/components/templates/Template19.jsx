import React from 'react';
import { MapPin, Phone, MessageCircle, Store, Clock, Utensils, Check } from 'lucide-react';

export default function Template19({ data }) {
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
      <div className="min-h-screen pb-12">
        <div className="bg-yellow-400 text-black text-center py-3 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 shadow-sm relative z-20">
          🎉 Special Offers Available Today!
        </div>
        <div className="max-w-5xl mx-auto px-4 relative mt-12">
          <h1 className="text-5xl font-black text-center mt-12 mb-4 text-gray-900">{shopName}</h1>
          <p className="text-center text-gray-500 mb-10 font-medium tracking-wide border-b border-gray-100 pb-8 max-w-xl mx-auto">{category}</p>
          <img src={displayImage} onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1000&q=80'; }} alt={shopName} className="w-full h-[500px] object-cover rounded-[3rem] mb-12 shadow-2xl" />
          

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

          <div className="grid md:grid-cols-2 gap-12 items-center my-16">
            <div className="text-left bg-white p-8 rounded-3xl lg:p-12 shadow-sm border border-gray-50">
              <h2 className="text-3xl font-extrabold mb-6 text-gray-900 tracking-tight">Welcome to {shopName}</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">{description}</p>
              <div className="space-y-4 text-gray-700 font-medium">
                <div className="flex items-center gap-4"><Phone className="w-6 h-6 text-yellow-500 bg-yellow-50 p-1 rounded-full"/> {phoneNumber}</div>
                <div className="flex items-center gap-4"><MapPin className="w-6 h-6 text-yellow-500 bg-yellow-50 p-1 rounded-full"/> {address}</div>
              </div>
            </div>
            <div className="bg-gray-900 p-12 rounded-[3rem] flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <MessageCircle className="w-16 h-16 text-yellow-400 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold mb-3 text-white relative z-10">Got a question?</h3>
              <p className="text-gray-400 mb-8 relative z-10 text-lg">Reach out to us directly on WhatsApp for quick responses.</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold uppercase py-4 px-8 rounded-full shadow-md w-full transition-all hover:scale-105 relative z-10 text-lg">
                Chat With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
