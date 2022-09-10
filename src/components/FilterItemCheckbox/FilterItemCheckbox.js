const FilterItemCheckbox = ({ label, name, value, filterItems, onChange }) => {
   return (
      <div>
         <input
            onChange={(e) => onChange({ name: name, value: e.target.value })}
            type="checkbox"
            name={name}
            id={name}
            className="form-checkbox rounded text-violet-500 focus:ring-violet-500"
            value={value}
            checked={filterItems[name] === value}
         />
         <label htmlFor={name} className="mr-3 text-sm text-gray-700">
            {label}
         </label>
      </div>
   );
};

export default FilterItemCheckbox;
