const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, 'frontend', 'src', 'components', 'templates');
if (!fs.existsSync(templatesDir)) {
  fs.mkdirSync(templatesDir, { recursive: true });
}

const templates = [
  { id: 1, bg: 'bg-white', text: 'text-gray-900', card: 'max-w-2xl mx-auto py-20 px-4 text-center', title: 'text-4xl font-light', accent: 'bg-black text-white rounded-full' },
  { id: 2, bg: 'bg-slate-100', text: 'text-slate-900', card: 'max-w-3xl mx-auto my-12 bg-white rounded-3xl shadow-xl p-10 text-center', title: 'text-4xl font-bold', accent: 'bg-blue-600 text-white rounded-xl' },
  { id: 3, bg: 'bg-gray-50', text: 'text-gray-900', card: 'max-w-4xl mx-auto bg-white p-8 md:p-12 -mt-16 rounded-xl shadow-lg relative z-10', title: 'text-5xl font-extrabold', accent: 'bg-indigo-600 text-white rounded-full', heroMode: true },
  { id: 4, bg: 'bg-white', text: 'text-gray-800', card: 'flex flex-col md:flex-row min-h-screen', splitMode: true, title: 'text-5xl font-bold', accent: 'bg-gray-900 text-white rounded-full' },
  { id: 5, bg: 'bg-zinc-900', text: 'text-zinc-100', card: 'max-w-3xl mx-auto py-24 px-6 text-center', title: 'text-4xl font-semibold text-white', accent: 'bg-white text-black rounded-lg' },
  { id: 6, bg: 'bg-[#faf9f6]', text: 'text-[#333]', card: 'max-w-3xl mx-auto py-16 px-8 border border-gray-200 mt-12 bg-white text-center shadow-sm', title: 'text-4xl font-serif text-[#111]', accent: 'bg-[#111] text-white rounded-none' },
  { id: 7, bg: 'bg-gray-50', text: 'text-gray-800', card: 'max-w-4xl mx-auto py-12 px-4 shadow-md bg-white text-center', title: 'text-5xl font-black mb-8 border-b pb-8', accent: 'bg-emerald-600 text-white rounded-none' },
  { id: 8, bg: 'bg-white', text: 'text-gray-700', card: 'max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-12 px-4', sidebarMode: true, title: 'text-3xl font-bold', accent: 'bg-blue-500 text-white rounded-lg' },
  { id: 9, bg: 'bg-slate-50', text: 'text-gray-800', card: 'max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-12 text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100', gridMode: true, title: 'text-4xl font-bold col-span-1 md:col-span-2', accent: 'bg-violet-600 text-white rounded-xl' },
  { id: 10, bg: 'bg-slate-100', text: 'text-slate-900', card: 'max-w-3xl mx-auto mt-20 mb-20 bg-white border-t-8 border-blue-600 shadow-xl p-12 text-center', title: 'text-4xl font-bold uppercase tracking-widest', accent: 'bg-blue-600 text-white rounded-none' },
  { id: 11, bg: 'bg-orange-50', text: 'text-orange-900', card: 'max-w-md mx-auto my-12 bg-white rounded-3xl shadow-md p-8 border border-orange-100 text-center', title: 'text-3xl font-bold text-orange-600', accent: 'bg-orange-500 text-white rounded-full', contactMode: true },
  { id: 12, bg: 'bg-gray-100', text: 'text-gray-800', card: 'max-w-sm mx-auto min-h-[100dvh] bg-white shadow-2xl relative flex flex-col', title: 'text-2xl font-bold text-center pt-8 pb-4', accent: 'bg-black text-white w-full rounded-none absolute bottom-0 m-0', mobileMode: true },
  { id: 13, bg: 'bg-gradient-to-br from-purple-500 to-pink-500', text: 'text-white', card: 'max-w-3xl mx-auto py-20 px-8 text-center bg-white/10 backdrop-blur-md rounded-[3rem] mt-12 mb-12 border border-white/20 shadow-2xl', title: 'text-5xl font-black text-white', accent: 'bg-white text-purple-600 rounded-full' },
  { id: 14, bg: 'bg-white', text: 'text-gray-800', card: 'max-w-5xl mx-auto text-center py-16', classicMode: true, title: 'text-5xl font-bold text-center py-6', accent: 'bg-blue-700 text-white rounded-sm' },
  { id: 15, bg: 'bg-[#2c2c2c]', text: 'text-gray-300', card: 'max-w-3xl mx-auto my-12 border-4 border-red-600 p-10 bg-[#1a1a1a] text-center shadow-2xl', title: 'text-4xl font-serif text-red-500 text-center uppercase tracking-widest', accent: 'bg-red-600 text-white rounded-none uppercase tracking-wider' },
  { id: 16, bg: 'bg-white', text: 'text-black', card: 'max-w-5xl mx-auto py-24 px-8 text-center', title: 'text-6xl font-black mb-4 tracking-tighter', accent: 'bg-black text-white hover:bg-gray-800 rounded-none' },
  { id: 17, bg: 'bg-green-50', text: 'text-gray-800', card: 'max-w-3xl mx-auto my-16 bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden text-center', title: 'text-3xl font-bold text-green-800 p-8 bg-green-100/50', accent: 'bg-green-600 text-white rounded-lg m-8' },
  { id: 18, bg: 'bg-blue-50', text: 'text-gray-800', card: 'max-w-xl mx-auto my-12 bg-white p-10 rounded-[2.5rem] shadow-xl text-center', title: 'text-3xl font-bold text-gray-900 mb-2', accent: 'bg-green-500 text-white w-full text-lg py-4 rounded-xl shadow-lg mt-8', contactMode: true },
  { id: 19, bg: 'bg-white', text: 'text-gray-900', card: 'max-w-5xl mx-auto', offerMode: true, title: 'text-5xl font-black text-center mt-12 mb-4', accent: 'bg-yellow-400 text-black font-bold uppercase py-4 px-8 rounded-full shadow-md' },
  { id: 20, bg: 'bg-sky-50', text: 'text-gray-800', card: 'max-w-4xl mx-auto my-12 text-center p-12 bg-white shadow-sm border border-sky-100 rounded-[2rem]', title: 'text-5xl font-bold mb-6 text-gray-900 tracking-tight', accent: 'bg-sky-500 text-white px-8 py-3 rounded-full hover:bg-sky-600' },
];

templates.forEach(t => {
  const isDark = t.bg.includes('zinc-900') || t.bg.includes('gradient') || t.bg.includes('#2c2c2c');
  const imgFallback = isDark ? 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=80' : 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1000&q=80';
  
  const menuHoursLayout = `
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
                <p className="text-2xl font-black $\{isDark ? 'text-white' : 'text-slate-900'} tracking-tight">{formatTime(openingTime)}</p>
              </div>
              <div className="w-px h-12 bg-blue-200/50 self-center"></div>
              <div className="text-center">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Closes At</p>
                <p className="text-2xl font-black $\{isDark ? 'text-white' : 'text-slate-900'} tracking-tight">{formatTime(closingTime)}</p>
              </div>
            </div>
          </div>`;

  let layoutContent = '';
  
  if (t.splitMode) {
    layoutContent = `      <div className="${t.card}">
        <div className="w-full md:w-1/2 min-h-[40vh] md:min-h-screen">
          <img src={displayImage} onError={(e) => { e.target.onerror = null; e.target.src='${imgFallback}'; }} alt={shopName} className="w-full h-full object-cover" />
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <div className="inline-block px-4 py-1.5 bg-gray-100 text-gray-800 rounded-full text-xs font-bold mb-6 w-max uppercase tracking-widest">{category}</div>
          <h1 className="${t.title} mb-6">{shopName}</h1>
          <p className="text-xl md:text-2xl opacity-70 mb-10 leading-relaxed font-light">{description}</p>
          
${menuHoursLayout}

          <div className="space-y-5 mt-10 mb-10 text-base opacity-90 font-medium border-l-2 pl-4 border-gray-200">
            <div className="flex items-center gap-3"><Phone className="w-5 h-5"/> {phoneNumber}</div>
            <div className="flex items-center gap-3"><MapPin className="w-5 h-5"/> {address}</div>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex flex-row items-center justify-center gap-2 ${t.accent} px-8 py-4 text-sm uppercase tracking-wide transition-transform hover:-translate-y-1 w-max shadow-xl hover:shadow-2xl">
            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </div>
      </div>`;
  } else if (t.sidebarMode) {
    layoutContent = `      <div className="${t.card}">
        <div className="w-full md:w-1/3 bg-gray-50/80 backdrop-blur-sm p-8 rounded-[2rem] border border-gray-100 h-max sticky top-8 shadow-inner">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-blue-500">
            <Store className="w-8 h-8"/>
          </div>
          <h1 className="${t.title} mb-2">{shopName}</h1>
          <p className="text-blue-600 font-bold mb-8 uppercase tracking-wider text-sm">{category}</p>
          <div className="space-y-5 mb-10 text-sm text-gray-600 font-medium">
            <div className="flex items-start gap-3"><Phone className="w-5 h-5 text-gray-400 mt-0.5"/> {phoneNumber}</div>
            <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-gray-400 mt-0.5"/> {address}</div>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 ${t.accent} px-4 py-4 rounded-xl font-semibold transition-all hover:-translate-y-1 hover:shadow-lg">
            <MessageCircle className="w-5 h-5" /> Contact Us
          </a>
        </div>
        <div className="w-full md:w-2/3 md:pl-8">
          <img src={displayImage} onError={(e) => { e.target.onerror = null; e.target.src='${imgFallback}'; }} alt={shopName} className="w-full h-[500px] object-cover rounded-[2.5rem] mb-10 shadow-lg" />
          <div className="prose prose-lg max-w-none prose-blue mb-12">
            <h2 className="text-3xl font-extrabold mb-6 text-gray-900 tracking-tight">Welcome to {shopName}</h2>
            <p className="text-gray-600 leading-loose text-lg">{description}</p>
          </div>
${menuHoursLayout}
        </div>
      </div>`;
  } else if (t.heroMode) {
    layoutContent = `      <div>
        <div className="w-full h-[60vh] relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />
          <img src={displayImage} onError={(e) => { e.target.onerror = null; e.target.src='${imgFallback}'; }} alt={shopName} className="w-full h-full object-cover absolute inset-0 filter blur-[2px] scale-105" />
        </div>
        <div className="${t.card}">
          <div className="text-center">
            <span className="inline-block px-4 py-1 text-indigo-700 bg-indigo-50 rounded-full font-bold tracking-widest uppercase text-xs mb-4">{category}</span>
            <h1 className="${t.title} mt-2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">{shopName}</h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">{description}</p>

${menuHoursLayout}

            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-12 text-gray-600 font-medium bg-gray-50 py-6 px-8 rounded-2xl max-w-xl mx-auto mt-12">
              <div className="flex items-center justify-center gap-3"><Phone className="w-5 h-5 text-indigo-500"/> {phoneNumber}</div>
              <div className="flex items-center justify-center gap-3 text-left"><MapPin className="w-5 h-5 text-indigo-500 min-w-[20px]"/> {address}</div>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 ${t.accent} px-8 py-4 font-bold transition-all hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20">
              <MessageCircle className="w-6 h-6" /> Connect on WhatsApp
            </a>
          </div>
        </div>
      </div>`;
  } else if (t.contactMode) {
    layoutContent = `      <div className="pt-20 px-4 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-blue-600 rounded-b-[100px] z-0"></div>
        <div className="${t.card} relative z-10">
          <div className="w-24 h-24 mx-auto bg-white border-4 border-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg -mt-20">
            <Store className="w-10 h-10" />
          </div>
          <h1 className="${t.title}">{shopName}</h1>
          <p className="text-blue-600 font-bold mb-8 uppercase tracking-widest text-sm">{category}</p>
          <img src={displayImage} onError={(e) => { e.target.onerror = null; e.target.src='${imgFallback}'; }} alt={shopName} className="w-full h-56 object-cover rounded-2xl mb-8 shadow-sm" />
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">{description}</p>

${menuHoursLayout}

          <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4 text-left font-medium text-gray-700 mt-8">
            <div className="flex items-center gap-4"><Phone className="w-6 h-6 text-blue-500 bg-white p-1 rounded-full shadow-sm"/> {phoneNumber}</div>
            <div className="flex items-center gap-4"><MapPin className="w-6 h-6 text-blue-500 bg-white p-1 rounded-full shadow-sm"/> {address}</div>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 ${t.accent} mt-8 w-full shadow-lg p-4 rounded-xl">
            <MessageCircle className="w-6 h-6" /> Message on WhatsApp
          </a>
        </div>
      </div>`;
  } else if (t.offerMode) {
    layoutContent = `      <div className="min-h-screen pb-12">
        <div className="bg-yellow-400 text-black text-center py-3 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 shadow-sm relative z-20">
          🎉 Special Offers Available Today!
        </div>
        <div className="${t.card} px-4 relative mt-12">
          <h1 className="${t.title} text-gray-900">{shopName}</h1>
          <p className="text-center text-gray-500 mb-10 font-medium tracking-wide border-b border-gray-100 pb-8 max-w-xl mx-auto">{category}</p>
          <img src={displayImage} onError={(e) => { e.target.onerror = null; e.target.src='${imgFallback}'; }} alt={shopName} className="w-full h-[500px] object-cover rounded-[3rem] mb-12 shadow-2xl" />
          
${menuHoursLayout}

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
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 ${t.accent} w-full transition-all hover:scale-105 relative z-10 text-lg">
                Chat With Us
              </a>
            </div>
          </div>
        </div>
      </div>`;
  } else if (t.mobileMode) {
    layoutContent = `      <div className="${t.card}">
        <div className="h-72 w-full relative">
          <img src={displayImage} alt={shopName} className="w-full h-full object-cover rounded-b-[2rem]" />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-black px-3 py-1 rounded-full text-xs font-bold shadow-sm">{category}</div>
        </div>
        <div className="px-6 relative -mt-6 pb-24 flex-1">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h1 className="${t.title} text-left pt-0 pb-4">{shopName}</h1>
            <p className="text-gray-600 text-base leading-relaxed mb-10">{description}</p>
            
${menuHoursLayout}

            <div className="space-y-4 text-sm text-gray-700 font-medium bg-gray-50/50 p-4 rounded-xl border border-gray-100 mt-8">
              <div className="flex items-center gap-4"><Phone className="w-5 h-5 text-gray-400"/> {phoneNumber}</div>
              <div className="flex items-center gap-4"><MapPin className="w-5 h-5 text-gray-400"/> {address}</div>
            </div>
          </div>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 ${t.accent} py-5 font-bold text-lg z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] absolute bottom-0 left-0 w-full">
          <MessageCircle className="w-6 h-6" /> WhatsApp
        </a>
      </div>`;
  } else {
    layoutContent = `      <div>
        <div className="w-full h-80 md:h-[500px] px-4 pt-4">
          <img src={displayImage} onError={(e) => { e.target.onerror = null; e.target.src='${imgFallback}'; }} alt={shopName} className="w-full h-full object-cover rounded-xl shadow-xl border border-gray-200/50" />
        </div>
        <div className="${t.card} mt-8 relative z-10 bg-white/90 backdrop-blur-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-10 border border-white/50 -mt-24 mx-4 md:mx-auto">
          <h1 className="${t.title} text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">{shopName}</h1>
          <div className="text-center mb-8">
            <span className="inline-block px-5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest">{category}</span>
          </div>
          <p className="${t.id === 6 || t.id === 15 ? 'text-xl font-serif' : 'text-xl font-light'} text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto text-center">{description}</p>
          
${menuHoursLayout}

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 font-medium mt-12">
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 text-slate-700 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow"><Phone className="w-6 h-6 text-blue-500"/> {phoneNumber}</div>
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 text-slate-700 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow"><MapPin className="w-6 h-6 text-blue-500"/> {address}</div>
          </div>
          <div className="flex justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 ${t.accent || 'bg-slate-900 text-white'} px-8 py-4 font-bold transition-all hover:-translate-y-1 hover:shadow-xl hover:bg-slate-800 rounded-full text-lg w-full sm:w-auto shadow-lg">
              <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>`;
  }

  const finalContent = `import React from 'react';
import { MapPin, Phone, MessageCircle, Store, Clock, Utensils, Check } from 'lucide-react';

export default function Template${t.id}({ data }) {
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

  const displayImage = imageUrl || '${imgFallback}';
  const whatsappUrl = 'https://wa.me/91' + phoneNumber;

  const itemsList = menuItems ? menuItems.split(',').map(item => item.trim()).filter(item => item !== '') : [];

  const formatTime = (timeStr) => {
    if (!timeStr) return "08:00 AM";
    try {
      const [hour, minute] = timeStr.split(':');
      const h = parseInt(hour, 10);
      const ampm = h >= 12 ? 'PM' : 'AM';
      const h12 = h % 12 || 12;
      return \`\${h12}:\${minute} \${ampm}\`;
    } catch (e) {
      return timeStr;
    }
  };

  return (
    <div className="min-h-screen ${t.bg} ${t.text} font-sans selection:bg-blue-200 selection:text-blue-900 relative overflow-hidden">
${layoutContent}
    </div>
  );
}
`;
  
  fs.writeFileSync(path.join(templatesDir, `Template${t.id}.jsx`), finalContent);
});

console.log('Successfully generated 20 dynamic templates with Menu and Timing support!');
