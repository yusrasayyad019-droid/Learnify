import { Link, useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center p-4 bg-size-[600%_600%] bg-[linear-gradient(45deg,#000428,#004e92,#000428)] animate-gradient">
      <div className="w-full max-w-150 text-center text-white border-2 border-white rounded-lg p-5">
        <h1 className="text-[100px] md:text-[150px] font-bold">404</h1>

        <h2 className="text-xl md:text-2xl font-semibold">
          Oops, Page not found!
        </h2>

        <p className="my-4 text-sm md:text-base">
          The page you're looking for was not found. It may have been moved,
          deleted, or doesn't exist.
        </p>

        <p className="mb-6 text-sm md:text-base">
          If you think this is an error or something is broken, click report.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 bg-white text-[#000428] border-2 border-white rounded-lg hover:bg-gray-300 hover:border-gray-300 transition"
          >
            Go Back
          </button>

          <Link
            to="/report"
            className="px-5 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-[#000428] transition"
          >
            Report
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
