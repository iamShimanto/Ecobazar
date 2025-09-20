import { Link, useLocation } from "react-router"; 
import { FaHome } from "react-icons/fa";


export default function Breadcrumb() {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean); // use location.pathname

  return (
    <div className="container my-5 px-2 sm:p-0">
      <nav
        aria-label="Breadcrumb"
        className="mb-4 py-2 sm:py-3 lg:py-6 font-headerFont"
        style={{ backgroundImage: "url('/banner-slider-2.png')" }}
      >
        <ol className="flex items-center justify-center space-x-2 text-sm px-4 py-1.5 shadow-lg border border-darkCustom/40 w-fit">
          <li>
            <Link
              to="/"
              className="text-xl font-headerFont text-brand hover:underline"
            >
              <FaHome />
            </Link>
          </li>

          {segments.map((segment, index) => {
            const href = "/" + segments.slice(0, index + 1).join("/");
            const isLast = index === segments.length - 1;

            return (
              <li key={href} className="text-xl flex items-center space-x-2">
                <span className="text-primary/90">/</span>
                {isLast ? (
                  <span className="text-gray-500 capitalize">
                    {decodeURIComponent(segment)}
                  </span>
                ) : (
                  <Link
                    to={href} // use "to" instead of href
                    className="text-blue-600 hover:underline capitalize"
                  >
                    {decodeURIComponent(segment)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
