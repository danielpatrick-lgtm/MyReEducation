// nav.jsx — Top nav

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Detect whether we're on the home page so anchor links work both ways
  const onHome = typeof window !== 'undefined' &&
    /(?:index|Real Estate Academy)\.html$|^\/?$/.test(window.location.pathname);
  const home = (hash) => onHome ? hash : "index.html" + hash;

  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <div className="container nav-inner">
        <a href="index.html" className="logo">
          <img src="assets/logo.png" alt="Real Estate Academy" className="logo-img"/>
        </a>
        <div className="nav-links">
          <a href={home("#why")}>Why Real Estate</a>
          <a href={home("#how")}>How It Works</a>
          <a href={home("#states")}>Classes</a>
          <a href="Property Management.html">Property Management</a>
        </div>
        <a href={home("#states")} className="btn btn-gold" style={{padding:'12px 20px'}}>
          <Icon.Rocket size={15}/> Get Licensed
        </a>
      </div>
    </nav>
  );
}

window.Nav = Nav;
