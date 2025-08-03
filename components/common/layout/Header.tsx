const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">LuxuryStay</div>
      <nav className="space-x-4 text-sm hidden md:flex">
        <a href="#">Rooms</a>
        <a href="#">Mansions</a>
        <a href="#">Countryside</a>
        <a href="#">Sign In</a>
        <a href="#">Sign Up</a>
      </nav>
      <input
        type="text"
        placeholder="Search..."
        className="border rounded p-1 hidden md:block"
      />
    </header>
  );
};

export default Header;
