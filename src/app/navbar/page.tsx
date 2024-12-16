export function Navbar() {
  return (
    <div className="justify-center px-4 py-4 flex gap-4 text-[20px] items-center sm:px-300 md:px-600">
      <a href="">
        <img
          className="w-12 md:w-[150px] md:h-[150px]"
          src="/img/large.png"
          alt="Tracos Logo"
        />
      </a>
      <div className="hidden md:flex gap-4 ">
        <a href="/">Home</a>
        <a href="/aboutUs">About Us</a>
        <a href="/services">Services</a>
        <a href="/teams">Teams</a>
      </div>
      <div className="flex md:hidden">
        <img />
      </div>
    </div>
  );
}
