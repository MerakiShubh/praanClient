import { Link } from "react-router-dom";
import PraanLogo from "../../assets/praan.svg";
export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src={PraanLogo} className="mr-3 h-16" alt="Logo" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href=""
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link to="/" className="hover:underline">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            Copyright © 2024
            <a href="https://praan.io/" className="hover:underline">
              Praan, Inc.
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="https://x.com/praan_inc" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link
              to="https://www.instagram.com/praan.inc/?hl=en"
              className="text-gray-500 hover:text-gray-900"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.355 3.608 1.33.975.975 1.268 2.242 1.33 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.355 2.633-1.33 3.608-.975.975-2.242 1.268-3.608 1.33-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.355-3.608-1.33-.975-.975-1.268-2.242-1.33-3.608C2.175 15.617 2.163 15.237 2.163 12s.012-3.584.07-4.85c.062-1.366.355-2.633 1.33-3.608.975-.975 2.242-1.268 3.608-1.33C8.417 2.175 8.797 2.163 12 2.163M12 0C8.741 0 8.332.013 7.052.072 5.773.131 4.7.438 3.778 1.36 2.856 2.282 2.55 3.355 2.492 4.634 2.433 5.914 2.42 6.322 2.42 9.579v4.842c0 3.256.013 3.665.072 4.945.058 1.279.365 2.352 1.287 3.273.922.922 1.995 1.229 3.274 1.287 1.279.058 1.688.072 4.945.072s3.666-.013 4.945-.072c1.279-.058 2.352-.365 3.273-1.287.922-.922 1.229-1.995 1.287-3.274.059-1.279.072-1.688.072-4.945s-.013-3.665-.072-4.945c-.058-1.279-.365-2.352-1.287-3.274-.922-.922-1.995-1.229-3.274-1.287C15.666.013 15.257 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.17a4.008 4.008 0 1 1 0-8.017 4.008 4.008 0 0 1 0 8.017zM18.406 4.594a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
              <span className="sr-only">Instagram profile</span>
            </Link>

            <Link
              to="https://www.linkedin.com/company/praancompany/"
              className="text-gray-500 hover:text-gray-900"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.77 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.23 0 22.23 0zm-3.7 19.5H17v-5.56c0-1.32-.03-3.01-1.84-3.01-1.84 0-2.12 1.43-2.12 2.92v5.65H10V9h2.27v1.43h.03c.32-.6 1.08-1.23 2.22-1.23 2.37 0 2.81 1.56 2.81 3.6V19.5zm-11.1 0H5.1V9h2.39v10.5zM6.3 7.91a1.39 1.39 0 1 1 0-2.77 1.39 1.39 0 0 1 0 2.77z" />
              </svg>
              <span className="sr-only">LinkedIn profile</span>
            </Link>

            <Link
              to="https://www.youtube.com/channel/UCGjqrjyRfzNVeIc_2NUL2lw"
              className="text-gray-500 hover:text-gray-900"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a2.988 2.988 0 0 0-2.1-2.106C19.453 3.535 12 3.535 12 3.535s-7.452 0-9.398.545A2.988 2.988 0 0 0 .501 6.186C0 8.132 0 12 0 12s0 3.868.501 5.814a2.988 2.988 0 0 0 2.1 2.106c1.946.545 9.398.545 9.398.545s7.452 0 9.398-.545a2.988 2.988 0 0 0 2.1-2.106C24 15.868 24 12 24 12s0-3.868-.502-5.814zM9.6 15.418V8.582l6.545 3.418-6.544 3.418z" />
              </svg>
              <span className="sr-only">YouTube channel</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
