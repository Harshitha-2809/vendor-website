import React from 'react';
import { MapPin, Phone, MessageCircle, Store, Clock, Utensils, Check } from 'lucide-react';

export default function Template18({ data }) {
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
    <div className="min-h-screen bg-blue-50 text-gray-800 font-sans selection:bg-blue-200 selection:text-blue-900 relative overflow-hidden">
      <div className="pt-20 px-4 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-blue-600 rounded-b-[100px] z-0"></div>
        <div className="max-w-xl mx-auto my-12 bg-white p-10 rounded-[2.5rem] shadow-xl text-center relative z-10">
          <div className="w-24 h-24 mx-auto bg-white border-4 border-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg -mt-20">
            <Store className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{shopName}</h1>
          <p className="text-blue-600 font-bold mb-8 uppercase tracking-widest text-sm">{category}</p>
          <img src={displayImage} onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1000&q=80'; }} alt={shopName} className="w-full h-56 object-cover rounded-2xl mb-8 shadow-sm" />
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">{description}</p>


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

          <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4 text-left font-medium text-gray-700 mt-8">
            <div className="flex items-center gap-4"><Phone className="w-6 h-6 text-blue-500 bg-white p-1 rounded-full shadow-sm"/> {phoneNumber}</div>
            <div className="flex items-center gap-4"><MapPin className="w-6 h-6 text-blue-500 bg-white p-1 rounded-full shadow-sm"/> {address}</div>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-500 text-white w-full text-lg py-4 rounded-xl shadow-lg mt-8 mt-8 w-full shadow-lg p-4 rounded-xl">
            <MessageCircle className="w-6 h-6" /> Message on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
