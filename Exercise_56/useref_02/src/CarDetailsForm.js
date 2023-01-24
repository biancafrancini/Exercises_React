import { useRef } from "react";

const CarDetailsForm = ({
  initialData = {
    model: "mini-cooper",
    year: 2002,
    color: "red",
  },
}) => {
  const inputRefModel = useRef(null);
  const inputRefYear = useRef(null);
  const inputRefColor = useRef(null);

  const handleInputs = (e) => {
    e.preventDefault();
    const newData = {};
    newData.model = inputRefModel.current.value;
    newData.year = Number(inputRefYear.current.value);
    newData.color = inputRefColor.current.value;
    console.log(newData);
    console.log(initialData);

    if (JSON.stringify(newData) !== JSON.stringify(initialData)) {
      inputRefModel.current.value = "";
      inputRefYear.current.value = "";
      inputRefColor.current.value = "";
    }
  };

  return (
    <div>
      <h1>Choose your dreamy car completing the form below ⤵️</h1>
      <hr />
      <form onSubmit={handleInputs}>
        <label name="model">Car model</label>
        <br />
        <input
          type="text"
          name="model"
          placeholder="Select a model"
          ref={inputRefModel}
        />
        <br />
        <label name="year">Manufacturing year</label>
        <br />
        <input
          type="number"
          min={1900}
          max={2023}
          name="year"
          placeholder="year"
          ref={inputRefYear}
        />
        <br />
        <label name="color">Car color</label>
        <br />
        <input
          type="text"
          name="color"
          placeholder="Select a color"
          ref={inputRefColor}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CarDetailsForm;
