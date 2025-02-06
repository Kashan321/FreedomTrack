import React from 'react';

function Ctr() {
  const ctrDetails = [
    { adGroup: 'Ad Group 1', clicks: 150, impressions: 3000, ctr: '5%' },
    { adGroup: 'Ad Group 2', clicks: 200, impressions: 4000, ctr: '5%' },
    { adGroup: 'Ad Group 3', clicks: 100, impressions: 2500, ctr: '4%' },
    { adGroup: 'Ad Group 4', clicks: 250, impressions: 5000, ctr: '5%' },
    { adGroup: 'Ad Group 5', clicks: 180, impressions: 3600, ctr: '5%' },
  ];

  const factorsAffectingCtr = [
    'Ad Relevance',
    'Ad Position',
    'Target Audience',
    'Ad Copy and Visuals',
    'Seasonal Trends',
  ];

  const tipsToImproveCtr = [
    'Write compelling ad copy',
    'Use high-quality visuals',
    'Target the right audience',
    'Optimize ad positions',
    'Test different ad formats',
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">CTR (Click-Through Rate) Analysis</h1>

      {/* CTR Details */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">CTR Details by Ad Group</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" className="px-6 py-3">Ad Group</th>
                <th scope="col" className="px-6 py-3">Clicks</th>
                <th scope="col" className="px-6 py-3">Impressions</th>
                <th scope="col" className="px-6 py-3">CTR</th>
              </tr>
            </thead>
            <tbody>
              {ctrDetails.map((item, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4">{item.adGroup}</td>
                  <td className="px-6 py-4">{item.clicks}</td>
                  <td className="px-6 py-4">{item.impressions}</td>
                  <td className="px-6 py-4">{item.ctr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Factors Affecting CTR */}
      {/* <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Factors Affecting CTR</h2>
        <ul className="list-disc list-inside text-gray-700">
          {factorsAffectingCtr.map((factor, index) => (
            <li key={index}>{factor}</li>
          ))}
        </ul>
      </div> */}

      {/* Tips to Improve CTR */}
      {/* <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Tips to Improve CTR</h2>
        <ul className="list-disc list-inside text-gray-700">
          {tipsToImproveCtr.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default Ctr;