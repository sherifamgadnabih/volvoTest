import React, { useState } from "react";
import { SelectInput } from "vcc-ui";
interface FilterProps {
  onValueChange: (value: string) => void;
  carTypes: string[];
}
const Filter = (filterProps: FilterProps) => {
  const { onValueChange } = filterProps;
  const { carTypes } = filterProps;
  const [value, setValue] = useState("");
  const onChange = (valueSelected: string) => {
    setValue(valueSelected);
    onValueChange(valueSelected);
  };
  return (
    <div>
      <SelectInput
        label="Filter by type"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option>Show All</option>
        {carTypes.map((carType) => {
          return (
            <option key={carType} value={carType}>
              {carType}
            </option>
          );
        })}
      </SelectInput>
    </div>
  );
};
export default Filter;
