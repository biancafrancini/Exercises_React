import React from  'react';
import ReactDOM from 'react-dom/client';
import CarDetailsForm from './CarDetailsForm';

const CarDetailsFormComponent = <CarDetailsForm />;
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(CarDetailsFormComponent);