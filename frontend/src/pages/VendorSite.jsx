import React, { useEffect, useState, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Store, Loader2, ArrowLeft } from 'lucide-react';

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

export default function VendorSite() {
  const { shopname } = useParams();
  const [vendorData, setVendorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVendorData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/vendors/${shopname}`);
        if (!res.ok) {
          throw new Error('Vendor not found');
        }
        const data = await res.json();
        setVendorData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchVendorData();
  }, [shopname]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
        <p className="text-gray-500 font-medium animate-pulse">Loading your website...</p>
      </div>
    );
  }

  if (error || !vendorData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4 font-sans text-center">
        <Store className="w-16 h-16 text-gray-300 mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Website Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-md">We couldn't find the website you're looking for. It may have been moved or deleted.</p>
        <Link to="/" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  const TemplateComponent = templateMap[vendorData.templateId];
  const ComputedTemplate = TemplateComponent ? TemplateComponent : templateMap['1'];

  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin mb-4" />
        <p className="text-gray-500">Constructing layout...</p>
      </div>
    }>
      <ComputedTemplate data={vendorData} />
    </Suspense>
  );
}
