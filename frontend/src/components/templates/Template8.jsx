import React from 'react';
import { MapPin, Phone, MessageCircle, Store, Clock, Utensils, Check } from 'lucide-react';

export default function Template8({ data }) {
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
    <div className="min-h-screen bg-white text-gray-700 font-sans selection:bg-blue-200 selection:text-blue-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-12 px-4">
        <div className="w-full md:w-1/3 bg-gray-50/80 backdrop-blur-sm p-8 rounded-[2rem] border border-gray-100 h-max sticky top-8 shadow-inner">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-blue-500">
            <Store className="w-8 h-8"/>
          </div>
          <h1 className="text-3xl font-bold mb-2">{shopName}</h1>
          <p className="text-blue-600 font-bold mb-8 uppercase tracking-wider text-sm">{category}</p>
          <div className="space-y-5 mb-10 text-sm text-gray-600 font-medium">
            <div className="flex items-start gap-3"><Phone className="w-5 h-5 text-gray-400 mt-0.5"/> {phoneNumber}</div>
            <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-gray-400 mt-0.5"/> {address}</div>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white rounded-lg px-4 py-4 rounded-xl font-semibold transition-all hover:-translate-y-1 hover:shadow-lg">
            <MessageCircle className="w-5 h-5" /> Contact Us
          </a>
        </div>
        <div className="w-full md:w-2/3 md:pl-8">
          <img src={displayImage} onError={(e) => { e.target.onerror = null; e.target.src='https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1000&q=80'; }} alt={shopName} className="w-full h-[500px] object-cover rounded-[2.5rem] mb-10 shadow-lg" />
          <div className="prose prose-lg max-w-none prose-blue mb-12">
            <h2 className="text-3xl font-extrabold mb-6 text-gray-900 tracking-tight">Welcome to {shopName}</h2>
            <p className="text-gray-600 leading-loose text-lg">{description}</p>
          </div>

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
        </div>
      </div>
    </div>
  );
}
