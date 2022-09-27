import { useState } from "react";
import { Select, SelectOption } from "./components/Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
];

function App() {
  const [value, setValue] = useState<SelectOption[]>([options[0]]);

  return (
    <div className="App">
      <Select
        multiple
        options={options}
        value={value}
        onChange={(o) => setValue(o)}
      />
    </div>
  );
}

export default App;
