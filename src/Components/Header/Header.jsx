const Header = () => {
  return (
    <nav className="bg-base-100 flex-wrap justify-between lg:mx-12 mx-auto px-4 lg:px-8">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-4 lg:space-x-6">
          <MobileMenu />
          <Logo />
        </div>
        
        <div className="hidden lg:flex flex-grow justify-center">
          <DesktopMenu />
        </div>

        <div className="flex items-center space-x-4">
          <SearchInput />
          <ProfileLogo />
        </div>
      </div>
    </nav>
  );
};

const MobileMenu = () => (
  <div className="dropdown lg:hidden">
    <button tabIndex={0} className="btn btn-ghost" aria-label="Menu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
    </button>
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
    >
      {["Home", "Recipes", "About", "Search"].map((item) => (
        <li key={item}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Logo = () => (
  <a href="#" className="btn btn-ghost normal-case text-2xl font-bold">
    Chefs Table
  </a>
);

const DesktopMenu = () => (
  <ul className="menu menu-horizontal text-xl space-x-4">
    {["Home", "Recipes", "About", "Search"].map((item) => (
      <li key={item}>
        <a href="#">{item}</a>
      </li>
    ))}
  </ul>
);

const SearchInput = () => (
  <div className="relative hidden lg:flex items-center">
    <input
      type="text"
      placeholder="Search"
      className="input input-bordered w-24 md:w-auto pl-10"
    />
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      <img src="/public/assets/search.png" alt="Search" className="w-5" />
    </span>
  </div>
);

const ProfileLogo = () => (
  <img
    src="/assets/profile.png"
    alt="Profile"
    className="w-10 rounded-full"
  />
);

export default Header;
