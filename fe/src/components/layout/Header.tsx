import viteLogo from "/vite.svg";

const Header = () => {
  return (
    <>
      <div className="h-20 bg-gray-800 flex items-center justify-between px-4">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </div>
    </>
  );
};

export default Header;
