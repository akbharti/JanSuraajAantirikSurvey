import { useState, useEffect } from 'react'
import districtData from '../Resource/district_assembly_candidates.json'

const DistrictSelector = ({ values, onDistrictChange, errors }) => {
  const [districts, setDistricts] = useState([])
  const [assemblyList, setAssemblyList] = useState([])
  const [candidateInfo, setCandidateInfo] = useState(null)

  useEffect(() => {
    setDistricts(Object.keys(districtData).sort())
  }, [])

  useEffect(() => {
    if (values.district) {
      setAssemblyList(Object.keys(districtData[values.district]).sort())
    } else {
      setAssemblyList([])
    }
  }, [values.district])

  useEffect(() => {
    if (values.district && values.assembly) {
      const candidate = districtData[values.district]?.[values.assembly]?.[0]
      setCandidateInfo(candidate || null)
    } else {
      setCandidateInfo(null)
    }
  }, [values.district, values.assembly])

  const handleChange = (field, newValue) => {
    onDistrictChange(field, newValue);
  };

  return (
    <section className='bg-white rounded-xl shadow-md p-6'>
      <h2 className='text-xl font-bold text-gray-800 mb-1'>Geographic Information</h2>
      <p className='text-gray-500 mb-5'>Select your district and constituency</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <label htmlFor='district' className='block font-semibold mb-1'>
            District <span className='text-red-500'>*</span>
          </label>
          <select
            id='district'
            value={values.district}
            onChange={(e) => handleChange('district', e.target.value)}
            className={`w-full border p-2 rounded-md focus:outline-none ${
              errors.district ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value=''>Select your district</option>
            {districts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          {errors.district && <p className='text-red-500 text-sm mt-1'>{errors.district}</p>}
        </div>
        <div>
          <label htmlFor='assembly' className='block font-semibold mb-1'>
            Vidhansabha (Assembly Constituency) <span className='text-red-500'>*</span>
          </label>
          <select
            id='assembly'
            value={values.assembly}
            onChange={(e) => handleChange('assembly', e.target.value)}
            disabled={!assemblyList.length}
            className={`w-full border p-2 rounded-md focus:outline-none ${
              errors.assembly ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value=''>Select your constituency</option>
            {assemblyList.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          {errors.assembly && (
            <p className='text-red-500 text-sm mt-1'>{errors.assembly}</p>
          )}
        </div>
      </div>

      {/* Candidate Information Card */}
      {candidateInfo && (
        <div className="mt-6 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              Jan Suraaj Candidate Information
            </h3>
            <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
              Official
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-600">Assembly No.</span>
              </div>
              <p className="text-3xl font-bold text-slate-800 text-center">{candidateInfo.assembly_no}</p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-600">Candidate Name</span>
              </div>
              <p className="text-lg font-bold text-slate-800 text-center">{candidateInfo.candidate_name}</p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-slate-600">Contact</span>
              </div>
              <p className="text-lg font-bold text-slate-800 text-center">{candidateInfo.contact}</p>
            </div>
          </div>

          {/* <div className="mt-4 p-3 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
            <p className="text-sm text-amber-800">
              <span className="font-semibold">Note:</span> This is the official Jan Suraaj candidate for your selected constituency. For any queries or assistance, you can contact them directly.
            </p>
          </div> */}
        </div>
      )}

      {/* Address Field - full width below dropdowns */}
      <div className='mt-6'>
        <label htmlFor='address' className='block font-semibold mb-1'>
          Address <span className='text-red-500'>*</span>
        </label>
        <textarea
          id='address'
          rows={2}
          value={values.address || ""}
          onChange={(e) => handleChange('address', e.target.value)}
          placeholder="Enter your address"
          className={`w-full border p-2 rounded-md focus:outline-none resize-none ${
            errors.address ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address}</p>
        )}
      </div>
    </section>
  );
}

export default DistrictSelector
