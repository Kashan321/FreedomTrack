import React from 'react';

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
      <h1 className="text-2xl font-bold mb-4">CPC (Cost Per Click) Analysis</h1>

      {/* CPC Pricing Details */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">CPC Pricing Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">Keyword</th>
                <th scope="col" className="px-6 py-3">CPC</th>
              </tr>
            </thead>
            <tbody>
              {cpcDetails.map((item, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4">{item.keyword}</td>
                  <td className="px-6 py-4">{item.cpc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Factors Affecting CPC */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Factors Affecting CPC</h2>
        <ul className="list-disc list-inside text-gray-700">
          {factorsAffectingCpc.map((factor, index) => (
            <li key={index}>{factor}</li>
          ))}
        </ul>
      </div>

      {/* Tips to Optimize CPC */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Tips to Optimize CPC</h2>
        <ul className="list-disc list-inside text-gray-700">
          {tipsToOptimizeCpc.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Cpc;