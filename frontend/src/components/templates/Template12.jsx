import React from 'react';
import { MapPin, Phone, MessageCircle, Store, Clock, Utensils, Check } from 'lucide-react';

export default function Template12({ data }) {
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
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans selection:bg-blue-200 selection:text-blue-900 relative overflow-hidden">
      <div className="max-w-sm mx-auto min-h-[100dvh] bg-white shadow-2xl relative flex flex-col">
        <div className="h-72 w-full relative">
          <img src={displayImage} alt={shopName} className="w-full h-full object-cover rounded-b-[2rem]" />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-black px-3 py-1 rounded-full text-xs font-bold shadow-sm">{category}</div>
        </div>
        <div className="px-6 relative -mt-6 pb-24 flex-1">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h1 className="text-2xl font-bold text-center pt-8 pb-4 text-left pt-0 pb-4">{shopName}</h1>
            <p className="text-gray-600 text-base leading-relaxed mb-10">{description}</p>
            

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

            <div className="space-y-4 text-sm text-gray-700 font-medium bg-gray-50/50 p-4 rounded-xl border border-gray-100 mt-8">
              <div className="flex items-center gap-4"><Phone className="w-5 h-5 text-gray-400"/> {phoneNumber}</div>
              <div className="flex items-center gap-4"><MapPin className="w-5 h-5 text-gray-400"/> {address}</div>
            </div>
          </div>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-black text-white w-full rounded-none absolute bottom-0 m-0 py-5 font-bold text-lg z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] absolute bottom-0 left-0 w-full">
          <MessageCircle className="w-6 h-6" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
