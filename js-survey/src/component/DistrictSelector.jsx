import { useState, useEffect } from 'react'
import districtData from '../Resource/district_assembly_candidates.json'

const DistrictSelector = ({ values, onDistrictChange, errors }) => {
  const [districts, setDistricts] = useState([])
  const [assemblyList, setAssemblyList] = useState([])

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
