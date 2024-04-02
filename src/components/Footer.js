function Footer() {
  return (
    <footer className="footer w-full mt-12 flex justify-center items-center pb-4 px-4">
      <aside className="flex flex-row justify-between items-center w-full">
        <img src="/logo.png" alt="logo" className="w-16"></img>
        <div className="flex space-x-8 flex-col items-center justify-center w-full">
          <h1 className="text-gray-500 text-sm font-light">
            <a href="tel:+447825674771">Tel 07825 674771</a>
          </h1>
        </div>

        <nav className="flex space-x-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#374155"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </nav>
      </aside>
    </footer>
  );
}

export default Footer;
