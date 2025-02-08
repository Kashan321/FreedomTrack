import React from 'react';
import Heatmap from './Heatmap';

function Cpc() {
  const cpcDetails = [
    { keyword: 'Digital Marketing', cpc: '$2.50' },
    { keyword: 'SEO Services', cpc: '$1.75' },
    { keyword: 'PPC Management', cpc: '$3.00' },
    { keyword: 'Content Marketing', cpc: '$2.20' },
    { keyword: 'Social Media Marketing', cpc: '$1.80' },
  ];

  const factorsAffectingCpc = [
    'Keyword Quality Score',
    'Competition for Keywords',
    'Geographic Location',
    'Ad Placement',
    'Industry Trends',
  ];

  const tipsToOptimizeCpc = [
    'Use long-tail keywords',
    'Improve Quality Score',
    'Target specific locations',
    'Optimize ad copy and landing pages',
    'Use negative keywords to filter out irrelevant traffic',
  ];

  return (
    <div className="p-4">
      {/* CPC Pricing Details */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">CPC Pricing Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left bg-white">
            <thead className="text-xs text-gray-700 uppercase border border-gray-400 ">
              <tr>
                <th  className="px-6  py-3">Keyword</th>
                <th  className="px-6  py-3">CPC</th>
              </tr>
            </thead>
            <tbody>
              {cpcDetails.map((item, index) => (
                <tr key={index} className=" border border-gray-400">
                  <td className="px-6  py-4">{item.keyword}</td>
                  <td className="px-6   py-4">{item.cpc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

     <div>
     <Heatmap />
     </div>
    </div>
  );
}

export default Cpc;