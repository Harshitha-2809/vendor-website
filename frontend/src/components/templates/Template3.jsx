import React from 'react';
import { MapPin, Phone, MessageCircle, Store, Clock, Utensils, Check } from 'lucide-react';

export default function Template3({ data }) {
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
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-200 selection:text-blue-900 relative overflow-hidden">
      <div>
        <div className="w-full h-[60vh] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />
          <img src={displayImage} onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1000&q=80'; }} alt={shopName} className="w-full h-full object-cover absolute inset-0 filter blur-[2px] scale-105" />
        </div>
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 -mt-16 rounded-xl shadow-lg relative z-10">
          <div className="text-center">
            <span className="inline-block px-4 py-1 text-indigo-700 bg-indigo-50 rounded-full font-bold tracking-widest uppercase text-xs mb-4">{category}</span>
            <h1 className="text-5xl font-extrabold mt-2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">{shopName}</h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">{description}</p>


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

            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12 text-gray-600 font-medium bg-gray-50 py-6 px-8 rounded-2xl max-w-xl mx-auto mt-12">
              <div className="flex items-center justify-center gap-3"><Phone className="w-5 h-5 text-indigo-500"/> {phoneNumber}</div>
              <div className="flex items-center justify-center gap-3 text-left"><MapPin className="w-5 h-5 text-indigo-500 min-w-[20px]"/> {address}</div>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-indigo-600 text-white rounded-full px-8 py-4 font-bold transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
              <MessageCircle className="w-6 h-6" /> Connect on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
