// get-licensed-app.jsx — App for the Get Licensed page

function GLApp() {
  React.useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  // React renders after parse, so an incoming #hash has no target yet — scroll once mounted.
  React.useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    let tries = 0;
    const go = () => {
      const el = document.getElementById(id);
      if (el) {
        const nav = document.querySelector('.nav');
        const off = (nav ? nav.getBoundingClientRect().height : 0) + 16;
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - off, behavior: 'smooth' });
      } else if (tries++ < 20) setTimeout(go, 60);
    };
    setTimeout(go, 80);
  }, []);

  return (
    <>
      <Nav/>
      <GLHero/>
      <OtherStates/>
      <Centers/>
      <Courses/>
      <StudentVoices/>
      <Tuition/>
      <Reimbursement/>
      <SelfPaced/>
      <PostLicensing/>
      <GLFinal/>
      <SchoolDisclosure/>
      <Footer/>
      <StickyCTA/>
      <CareerQuiz/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<GLApp/>);
