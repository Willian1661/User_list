import Link from "next/link";

const Header = () => {
  return (
    <nav id="header" className="navbar">
      <div className="container-flex">
        <Link href="/" id="link" className="flex items-center">
          <img src="/" className="h-6 mr-3 sm:h-9" alt="job" />
          <span className="span-blue">
            Job
          </span>
        </Link>
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="navbar-list">
            <li>
              <Link href="/" id="link" className="navbar-main-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" id="link" className="navbar-item">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/" id="link" className="navbar-item">
                About
              </Link>
            </li>
            <li>
              <Link href="/" id="link" className="navbar-item">
                Post a job
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Header;