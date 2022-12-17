import SelectInput from "./SelectInput"

const TimeInput = () => {

  let optionsHours = [];
  for (let i = 0; i < 100; i++) { 
    optionsHours.push(i.toString());
  }

  let options = [];
  for (let i = 0; i < 100; i++) {
    if (i < 10) {
      options.push('0'+i.toString());
    } else {
      options.push(i.toString());
    }
  }

  return (
    <>
      <label className="text-lightestGrey text-xl block">
        Time
      </label>
      <div className="flex space-x-4">
        <SelectInput label="Hours" name="presetTimeHours">
          {optionsHours.map((i) =>
            <option key={i} value={i}>{i}</option>
          )}
        </SelectInput>
        <SelectInput label="Minutes" name="presetTimeMinutes">
          {options.map((i) =>
            <option key={i} value={i}>{i}</option>
          )}
        </SelectInput>
        <SelectInput label="Seconds" name="presetTimeSeconds">
          {options.map((i) =>
            <option key={i} value={i}>{i}</option>
          )}
        </SelectInput>
      </div>           
    </>
  )
}

export default TimeInput