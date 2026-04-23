import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Copy, Globe, LayoutDashboard, Store, Download, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { QRCode } from "react-qr-code";

export default function PublishSuccess() {
  const { shopname } = useParams();
  const [copied, setCopied] = useState(false);
  const websiteUrl = window.location.origin + "/vendor/" + shopname;
  const qrRef = useRef();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(websiteUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadQRCode = () => {
    const svg = document.getElementById("VendorQRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width + 40;
      canvas.height = img.height + 40;
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 20, 20);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = `${shopname}-qr.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <div className="min-h-screen bg-[#fafbff] flex items-center justify-center p-4 selection:bg-green-200 selection:text-green-900 font-sans">
      <motion.div initial={{scale:0.95, opacity:0, y:20}} animate={{scale:1, opacity:1, y:0}} className="max-w-3xl w-full bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 text-center border border-slate-100 my-10">
        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
          <motion.div initial={{scale:0}} animate={{scale:1}} transition={{delay:0.3, type:'spring', stiffness: 200}}>
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Deployment Successful!</h1>
        <p className="text-lg text-slate-500 mb-8 leading-relaxed font-medium">Your interactive digital storefront is completely live. Share your unique URL or QR code to gain traction.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 items-stretch">
          {/* URL Card */}
          <div className="flex flex-col justify-between bg-slate-50 border-2 border-slate-100 rounded-[2rem] p-6 hover:border-slate-200 transition-all group">
            <div className="text-left mb-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">Live Website URL</span>
              <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <Store className="w-5 h-5 text-blue-500 shrink-0"/>
                <div className="truncate font-bold text-slate-700 text-sm">{websiteUrl}</div>
              </div>
            </div>
            
            <button onClick={copyToClipboard} className="bg-slate-900 hover:bg-slate-800 text-white w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:shadow-lg active:scale-95 group-hover:-translate-y-1">
              {copied ? <CheckCircle className="w-5 h-5"/> : <Copy className="w-5 h-5"/>} {copied ? 'URL Copied!' : 'Copy Link'}
            </button>
          </div>

          {/* QR Code Card */}
          <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-6 flex flex-col items-center justify-between hover:border-blue-100 hover:bg-blue-50/10 transition-all group">
            <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-50 mb-4 group-hover:scale-105 transition-transform">
              <QRCode 
                id="VendorQRCode"
                value={websiteUrl}
                size={140}
                level="H"
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              />
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm font-bold mb-4">
              <Smartphone className="w-4 h-4 text-cyan-500"/>
              Scan to Visit Website
            </div>
            <button onClick={downloadQRCode} className="w-full py-4 rounded-xl font-bold bg-white text-slate-700 border-2 border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-all flex items-center justify-center gap-2 active:scale-95">
              <Download className="w-5 h-5"/> Download QR
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-slate-100">
          <a href={`/vendor/${shopname}`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-cyan-500/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-3">
            <Globe className="w-5 h-5"/> Open Live Site
          </a>
          <Link to="/dashboard" className="flex-1 bg-white text-slate-700 border-2 border-slate-200 hover:bg-slate-50 font-bold py-4 rounded-2xl transition-colors flex items-center justify-center gap-3 shadow-sm">
            <LayoutDashboard className="w-5 h-5"/> Dashboard
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
