import { SelectType } from "@/types/types";

export const MySelect: React.FC<SelectType> = ({ options, defaultValue, value, onChange }) => {

  return (
    <div>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        <option disabled value=''>{defaultValue}</option>
        {options.map(item => (
          <option value={item.value} key={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};