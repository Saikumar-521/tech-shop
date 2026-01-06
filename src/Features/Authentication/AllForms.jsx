import { Link } from "react-router-dom";

export const AllForms = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-zinc-900">
      <div className="border border-gray-500 bg-gray-300 text-black rounded-xl px-6 py-5 w-72 text-center shadow-md flex flex-col gap-3">

        <p className="font-bold text-lg">User Entry</p>

        <div className="flex justify-center items-center gap-3 font-semibold">
          <Link to="/signup" className="hover:underline">
            SignUp
          </Link>

          <span>/</span>

          <Link to="/signin" className="hover:underline">
            Login
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AllForms;
