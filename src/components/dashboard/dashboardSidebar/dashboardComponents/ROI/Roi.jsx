import React from 'react';

function Roi() {
  const roiDetails = [
    { campaign: 'Campaign 1', cost: '$500', revenue: '$1500', roi: '200%' },
    { campaign: 'Campaign 2', cost: '$300', revenue: '$900', roi: '200%' },
    { campaign: 'Campaign 3', cost: '$700', revenue: '$1400', roi: '100%' },
    { campaign: 'Campaign 4', cost: '$400', revenue: '$800', roi: '100%' },
    { campaign: 'Campaign 5', cost: '$600', revenue: '$1800', roi: '200%' },
  ];

  const factorsAffectingRoi = [
    'Ad Quality',
    'Target Audience',
    'Landing Page Experience',
    'Conversion Rate',
    'Cost Per Click',
  ];

  const tipsToImproveRoi = [
    'Optimize ad copy and visuals',
    'Target the right audience',
    'Enhance landing page experience',
    'Increase conversion rate',
    'Monitor and adjust bids regularly',
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">ROI (Return on Investment) Analysis</h1>

      {/* ROI Details */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">ROI Details by Campaign</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">Campaign</th>
                <th scope="col" className="px-6 py-3">Cost</th>
                <th scope="col" className="px-6 py-3">Revenue</th>
                <th scope="col" className="px-6 py-3">ROI</th>
              </tr>
            </thead>
            <tbody>
              {roiDetails.map((item, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4">{item.campaign}</td>
                  <td className="px-6 py-4">{item.cost}</td>
                  <td className="px-6 py-4">{item.revenue}</td>
                  <td className="px-6 py-4">{item.roi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Factors Affecting ROI */}
      {/* <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Factors Affecting ROI</h2>
        <ul className="list-disc list-inside text-gray-700">
          {factorsAffectingRoi.map((factor, index) => (
            <li key={index}>{factor}</li>
          ))}
        </ul>
      </div> */}

      {/* Tips to Improve ROI */}
      {/* <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Tips to Improve ROI</h2>
        <ul className="list-disc list-inside text-gray-700">
          {tipsToImproveRoi.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default Roi;