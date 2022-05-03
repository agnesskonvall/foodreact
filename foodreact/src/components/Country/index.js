import React from "react";

function Country() {
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(country);
  };

  const [name, setName] = useState("");
  const [state, setState] = useState([]);
  const [value, setValue] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    const url = `https://api.agify.io?name=${name}&country_id=${country}`;

    if (value != "") {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setState(data);
        });
    }
  }, [value]);
  console.log(value);

  return (
    <div>
      <select>
        <option value="sweden">Sweden</option>
        <option value="finland">Finland</option>
        <option value="denmark">Denmark</option>
      </select>
    </div>
  );
}
export default Country;
