import { Outlet } from "react-router-dom";

const Petopia = () => {
  return (
    <div>
      <h2>Welcome to Petopia</h2>
      {/* 👇 This is where nested pages like PetopiaImage will render */}
      <Outlet />
    </div>
  );
};

export default Petopia;
