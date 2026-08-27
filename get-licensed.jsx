// get-licensed.jsx — Get Licensed page (state-aware)
// Reads window.STATE to render Arizona, California, or Nevada content.

const STATE_DATA = {
  arizona: {
    name: "Arizona",
    code: "AZ",
    hours: "90",
    tagline: "Get Licensed.",
    accent: "Get Launched.",
    intro: "Arizona Real Estate Education \u2014 Pre-Licensing Education Course. All 90 hours are taught live online over Zoom by experienced instructors. Accredited by the Arizona Department of Real Estate.",
    accreditation: "Accredited by the Arizona Department of Real Estate",
    phone: "480-344-4082",
    phoneHref: "tel:4803444082",
    phoneLabel: "Class Information",
    altPhone: { label: "School", number: "480-505-6300", href: "tel:4805056300" },
    email: "reschool@bhhsaz.com",
    // Required by Arizona Administrative Code R4-28-503(D) on all advertising of
    // Department-approved courses: school name, number, phone, email, administrator.
    compliance: {
      school: "Arizona Real Estate Education",
      number: "S19-0001",
      address: "16100 N 71st Street, Ste. 400, Scottsdale, AZ 85254",
      admins: ["Forrest Barbee", "Christina Rogowski", "Mary Sand"],
    },
    registerUrl: "https://anc.apm.activecommunities.com/reacademy/activity/search?onlineSiteId=0&activity_select_param=2&activity_category_ids=36&viewMode=list",
    selfPacedUrl: "https://bhhsaz.theceshop.com/arizona/pre-licensing/az-salesperson-pre-licensing-cost",
    hideReimbursement: true,
    faqs: [
      { label: 'School Policies \u0026 Procedures', href: '/arizona-school-policies' },
      { label: 'AZ Licensing FAQ', href: 'https://azre.gov/licensees/original-licensing-information' },
    ],
    testimonials: {
      allUrl: 'https://arizonarealestateeducation.bhhsaz.com/testimonials',
      items: [
        {
          quote: "The dedication, effort, and time that go into teaching are immense, and Christina brings an incredible amount of positive energy every single day. Her commitment is truly a gift\u2014one that many may not fully recognize or appreciate. She presents information in a way that is both engaging and easy to digest, making even complex topics more understandable. Anyone fortunate enough to learn from her will undoubtedly benefit from her expertise and enthusiasm.",
          name: "Julian P", initials: "JP", date: "February 2025",
        },
        {
          quote: "Christina was fantastic and I can\u2019t recommend taking her class enough! I came into the class expecting to struggle to stay focused and engaged during the nightly class Zoom calls from 5-10pm. Fortunately, Christina managed our 25 person remote class masterfully through a mix of class exercises, clear and concise explanations of detailed and sometimes mundane topics, and some well timed good humor. As a result, the classes moved quickly, kept my interest and led to me passing the test in my first attempt!",
          name: "Jason", initials: "J", date: "February 2025",
        },
        {
          quote: "Being completey new to the world of Real Estate Christina left me feeling really confident and excited in this new career path. I came into the class with zero knowledge and I am grateful to have had Cristina as the instructor. She was very energetic, knowledgeable, and expresses her passion in what has does. That is very contagious.",
          name: "Adrian P", initials: "AP", date: "March 2025",
        },
      ],
    },
    quickfacts: [
      { k: "90", suffix: "hr", v: "Live online over Zoom" },
      { k: "$499", v: "All-in tuition" },
      { k: "ADRE", v: "Accredited course" },
    ],
    centersCopy: {
      eyebrow: "How Classes Are Held",
      title: ["Live online.", "One office."],
      blurb: "All 90 hours are taught live over Zoom, Monday through Friday, in morning, afternoon, and evening sections. You get a live instructor without the commute. You come to our Scottsdale office in person for the Contract Writing class and for testing.",
    },
    centers: [
      { name: "Scottsdale Office", addr: "16100 N 71st Street, Ste. 400", city: "Scottsdale, AZ 85254", tag: "In person: Contract Writing \u0026 testing" },
    ],
    courses: [
      {
        id: 'principles',
        badge: 'Pre-Licensing Course',
        code: '90 HR',
        title: 'Salesperson Pre-Licensing Course',
        hours: '90 hours',
        desc: "This Real Estate training course will satisfy all of the requirements of 90 hours of instruction in required real estate subjects, and help students prepare to take the licensing exam.",
        topics: [
          'Arizona Real Estate Statues, Commissioner Rules',
          'Agency Relationships and Managerial Duties',
          'Contracts and Contract Law',
          'Property, Estate & Tenancies; Government Rights',
          'Arizona Water Law, Land Descriptions, Environmental Law',
          'Encumbrances, Acquisition and Transfer of Title',
          'Escrow and Settlement; Fair Housing and ADA',
          'Leases and Leasehold, Arizona Residential Landlord-Tenant Act',
          'Property Management, Appraisal, and more',
        ],
        includes: [
          'All course textbooks',
          'The mandatory 6-hour Contract Writing class',
          'Testing',
          'Digital flashcards (Quizlet)',
          'Study materials and instructional videos',
        ],
        note: "Students will be required to review the course catalog, complete the enrollment agreement and addenda prior to the start of this course. Please arrange to pick up Course Book(s) at least 2 business days before the first day of class.",
        docs: [
          { label: 'Course Catalog',       href: 'https://drive.google.com/open?id=11lNn_G12Getg9rziT5lKvmmLD5xPpr5j&usp=drive_fs' },
          { label: 'Enrollment Agreement', href: 'https://drive.google.com/open?id=1W6YTjrwyufmWFWTZGqkcqdyVEJQqitE-&usp=drive_fs' },
        ],
      },
    ],
    tuitionNote: "To ensure a classroom spot, it is suggested students enroll and pick up course materials two weeks prior to the beginning of class, but no later than 5 business days prior to the beginning of any class. We accept Visa, MasterCard or Discover Card.",
    tuition: [
      { code: '90 HR', title: 'Salesperson Pre-Licensing', sub: 'Everything included',
        rows: [['90 Hour pre-licensing course','\u2713'],['6 Hour Contract Writing Boot Camp','\u2713'],['Textbook(s) & course materials','\u2713'],['Admin fees','\u2713']],
        total: '$499' },
    ],
  },
  california: {
    name: "California",
    code: "CA",
    hours: "135",
    tagline: "Get Licensed.",
    accent: "Get Launched.",
    intro: "In California, we've partnered with The CE Shop, an approved California Department of Real Estate (DRE) provider, to deliver all 135 required pre-licensing hours online and entirely self-paced.",
    phone: "877-373-4542",
    phoneHref: "tel:8773734542",
    phoneLabel: "California DRE",
    email: "California@reschool.com",
    partner: "The CE Shop",
    selfPacedOnly: true,
    hideReimbursement: true,
    faqs: [{ label: 'California Licensing FAQ', href: 'https://bhhsca.theceshop.com/california/pre-licensing/ca-real-estate-license-requirements-faq' }],
    pacing: [
      'No course may be finished in less than 2½ weeks.',
      'Two courses may not be finished in less than 5 weeks.',
      'Three courses may not be finished in less than 7½ weeks.',
    ],
    disclaimer: "Students are advised to visit dre.ca.gov for full license application requirements. Berkshire Hathaway HomeServices California Properties does not guarantee placement with any real estate company.",
    registerUrl: "https://bhhsca.theceshop.com/california/pre-licensing/ca-salesperson-pre-licensing-cost/",
    centers: [],
    quickfacts: [
      { k: "135", suffix: "hr", v: "DRE-required instruction" },
      { k: "100", suffix: "%", v: "Online and self-paced" },
      { k: "CE Shop", v: "DRE-approved provider" },
    ],
    courses: [
      {
        id: 'principles',
        badge: 'Through The CE Shop · Self-Paced',
        code: '135 HR',
        title: 'California Salesperson Pre-Licensing',
        hours: '135 hours (3 × 45hr courses)',
        desc: "Satisfies all three required DRE courses (Real Estate Principles, Real Estate Practice, and one approved Elective) for the California salesperson exam. Delivered online and self-paced through The CE Shop.",
        topics: [
          'Real Estate Principles (45hr)',
          'Real Estate Practice (45hr)',
          'Approved Elective (45hr): Finance, Appraisal, or Property Management',
          'California Contracts & Agency',
          'Fair Housing & Federal Compliance',
          'Trust Funds & Brokerage Accounting',
        ],
        note: "Enrollment, course materials, and payment are handled directly by The CE Shop. There is no enrollment agreement or book pickup for California. Start any time and work at your own pace.",
        docs: [],
      },
    ],
    tuition: null,
  },
  nevada: {
    name: "Nevada",
    code: "NV",
    hours: "120",
    tagline: "Get Licensed.",
    accent: "Get Launched.",
    intro: "Real Estate Academy's Nevada track is licensed to operate by the Commission on Postsecondary Education and approved by the Nevada Real Estate Division. Pre-licensing classes are taught live and in person at our Las Vegas–area training centers.",
    accreditation: "Licensed to operate by the Commission on Postsecondary Education. Approved by the Nevada Real Estate Division.",
    phone: "702-915-7755",
    phoneHref: "tel:7029157755",
    email: "RESchool@bhhsnv.com",
    phoneLabel: "Direct Line",
    hideReimbursement: true,
    grouponUrl: "https://www.groupon.com/deals/berkshire-hathaway-home-services-nevada-properties-1?redemptionLocationId=a3364ffb-018e-b06a-9052-014717bdb972",
    howTo: {
      title: "How to register, step by step",
      blurb: "A short walkthrough of the registration process, from finding your class on the calendar through checkout.",
      embed: "https://drive.google.com/file/d/11DO64lOQzdXM2LMcxDJEoF4ggnc3VW5Z/preview",
      href: "https://drive.google.com/file/d/11DO64lOQzdXM2LMcxDJEoF4ggnc3VW5Z/view",
    },
    postLicensing: {
      eyebrow: "Post-Licensing · First-Year Licensees",
      title: ["Newly licensed?", "30 hours, 10 sessions."],
      blurb: "Berkshire Hathaway HomeServices Nevada Properties is proud to offer a 30 hour Post-Licensing course approved by the Nevada Real Estate Division that meets the educational requirements of NAC 645.4442 for first year licensees. This course consists of 10 Sessions and includes a review at the end of each Session.",
      code: "30 HR",
      badge: "Modules A – O · Live and In Person",
      requirement: "You must have your License Number assigned from the Real Estate Division to get the required credit for these courses.",
      pricing: [
        { k: "$10", v: "Per session" },
        { k: "$100", v: "All 10 sessions" },
      ],
      findingNote: "On the registration site these are listed as \u201cQuick Start\u201d \u2014 register for the full Sessions 1\u201310 bundle, or enroll session by session.",
      notCE: "First year licensees only. This course is not Continuing Education (CE).",
      sessions: [
        { n: 'Session 1',  mod: 'Module E',        title: 'Professional Conduct, Etiquette and Ethics' },
        { n: 'Session 2',  mod: 'Module H',        title: 'Agency Relationships' },
        { n: 'Session 3',  mod: 'Module A',        title: 'Real Estate Contracts' },
        { n: 'Session 4',  mod: 'Module B',        title: 'The Listing Process' },
        { n: 'Session 5',  mod: 'Module D',        title: 'Buyer Representation' },
        { n: 'Session 6',  mod: 'Modules N & G',   title: 'Negotiating and Cost of Sale' },
        { n: 'Session 7',  mod: 'Modules L & M',   title: 'Escrow / Closing and Financing' },
        { n: 'Session 8',  mod: 'Modules J & F',   title: 'Regulatory Disclosures and Advertising' },
        { n: 'Session 9',  mod: 'Module C',        title: 'Business Plan & Goals' },
        { n: 'Session 10', mod: 'Modules I, K & O', title: 'Land, Property Management & Tax Opportunities – Liabilities' },
      ],
      url: "https://anc.apm.activecommunities.com/reacademy/activity/search?onlineSiteId=0&activity_select_param=2&activity_category_ids=28&drop_in=0&viewMode=list",
    },
    selfPacedCopy: {
      eyebrow: "Online Options",
      title: ["Pre-licensing is in person.", "Online courses run through The CE Shop."],
      blurb: "Nevada pre-licensing classes are taught live and in person only. Online, self-paced coursework is available through our business partner, The CE Shop.",
    },
    selfPacedUrl: "http://www.theceshop.com/",
    faqs: [
      { label: 'School Policies \u0026 Procedures', href: '/nevada-school-policies' },
      { label: 'NV Real Estate Division: License Requirements', href: 'https://red.nv.gov/Content/Real_Estate/Salesperson/Initial_License_Requirements/' },
    ],
    quickfacts: [
      { k: "120", suffix: "hr", v: "Pre-licensing course" },
      { k: "$459", v: "Total fees" },
      { k: "2", v: "Nevada training centers" },
    ],
    career: {
      eyebrow: "After You Pass",
      title: ["Licensed is the start.", "The Academy is next."],
      body: "As a student attending Nevada Real Estate Academy you are invited to consult with the Instructors or Director about your Real Estate Career. Nevada Real Estate Academy is associated with Berkshire Hathaway HomeServices Nevada Properties however you are free to affiliate with any Broker or Developer of your choice. Berkshire Hathaway HomeServices Nevada Properties offers Continuous Sales Training for newly licensed affiliates through the Berkshire Hathaway HomeServices Academy.",
      interview: { text: "For a Private Broker Interview, please call Laurette Mormon at 702-796-7777 ext. 5200", href: "tel:7027967777,5200" },
      division: { text: "If you are licensed in another state or need more information on which course to enroll in please contact the Nevada Real Estate Division at 702-486-4033 or visit them on the web.", label: "Nevada Real Estate Division", href: "http://www.red.state.nv.us/" },
      fine: "Berkshire Hathaway HomeServices Nevada Properties and Nevada Real Estate Academy do not guarantee placement with any real estate company.",
    },
    registerUrl: "https://anc.apm.activecommunities.com/reacademy/activity/search?onlineSiteId=0&activity_select_param=2&activity_category_ids=25&viewMode=list",
    centersCopy: {
      eyebrow: "Training Centers",
      title: ["Two campuses.", "One license."],
      blurb: "Nevada pre-licensing is taught live and in person. Pick the campus that fits your commute \u2014 both run the same curriculum and the same exam prep.",
    },
    centers: [
      { name: 'Henderson Campus',   addr: '3185 St. Rose Parkway Ste #100', city: 'Henderson, NV 89052' },
      { name: 'West Sunset Campus', addr: '8850 W Sunset Suite #200',       city: 'Las Vegas, NV 89148' },
    ],
    courses: [
      {
        id: 'principles',
        badge: 'Most Popular · Full Course',
        code: '120 HR',
        title: 'Real Estate Principles, Practices & Law',
        hours: '120 hours',
        desc: "Satisfies all 120 hours (90 + 30) of required real estate instruction and prepares you for the Nevada licensing exam.",
        topics: [
          'Brokerage & Laws of Agency',
          'Valuation & Economics',
          'Finance, Property Ownership, Transfer & Use',
          'Applied Practices · Contracts and Agency',
          'Nevada Real Estate Law',
          'Nevada Contracts and Agency',
        ],
        note: "Students must read and complete the Academy's enrollment agreement and course catalog prior to start. Email signed documents and receipts to RESchool@bhhsnv.com, and you'll receive pickup instructions for course books.",
        docs: [
          { label: '120 HR Enrollment Agreement', href: 'https://drive.google.com/file/d/1J1zopLZcXAi_j_S0bDwrcxopcbEXXouB/view?pli=1' },
          { label: 'Course Catalog',              href: 'https://drive.google.com/file/d/1iZHdtOkX4AqHbwFxdZI-kVuX9AyZ8gbB/view?pli=1' },
        ],
      },
      {
        id: 'law',
        badge: 'Out-of-State Bridge',
        code: '18 HR',
        title: 'Nevada Real Estate Law',
        hours: '18 hours',
        desc: "For applicants who have completed pre-licensing in another state and only need the Nevada Real Estate Law portion.",
        topics: [
          'NRS 645 & NAC 645: Brokers, Salesman, Intermediaries',
          'NRS 119 & NAC 119: Sale of Subdivided Land',
          'NRS 119A & NAC 119A: Time Shares',
          'General Provisions',
        ],
        note: "Complete the Academy's enrollment agreement before class start. Bring documents plus tuition/book receipts to the corporate office.",
        docs: [{ label: '18 HR Agreement', href: 'https://drive.google.com/file/d/1oYT8TKl-RpEnNmJj4w1hcG3ld6FHtqv8/view' }],
      },
      {
        id: 'contracts',
        badge: 'Bridge · Pre-2021 Students',
        code: '30 HR',
        title: 'Nevada Real Estate Contracts & Agency',
        hours: '30 hours',
        desc: "Required additional 30 hours for students who completed the 90-hour Pre-Licensing course before October 1, 2021.",
        topics: ['Nevada Contracts', 'Nevada Agency Relationships', 'Disclosure Requirements', 'NVRED Salesperson application alignment'],
        note: "Students will be required to complete the Academy's enrollment agreement prior to the start of this course. Please contact us directly if you are in need of this 30 hour program.",
        docs: [],
      },
    ],
    tuition: [
      { code: '120 HR', title: 'Full Pre-Licensing Course', sub: 'Includes Nevada Real Estate Law', rows: [['Tuition','$259'],['Texts','$175'],['Admin Fee','$25']], total: '$459', popular: true },
      { code: '18 HR',  title: 'Nevada Real Estate Law',     sub: 'Out-of-state bridge',           rows: [['Tuition','$125'],['Texts','$50'], ['Admin Fee','$25']], total: '$200' },
      { code: '30 HR',  title: 'Contracts & Agency',         sub: 'Pre-2021 students',             rows: [['Tuition','$65'], ['Texts','$60'], ['Admin Fee','$25']], total: '$150' },
    ],
    tuitionNote: "To ensure a classroom spot, it is suggested that students enroll and pick up course materials two weeks prior to the beginning of class, but no later than 3 days prior to the beginning of any class. We accept Visa, MasterCard or Discover Card.",
  },
};

// Resolve current state from window.STATE; fall back to nevada.
const S = STATE_DATA[(typeof window !== 'undefined' && window.STATE) || 'nevada'];
// Where "Register" CTAs should send the user. External URL opens in new tab.
const REGISTER_URL  = S.registerUrl || '#register';
const REGISTER_EXT  = !!S.registerUrl;
const registerProps = REGISTER_EXT
  ? { href: REGISTER_URL, target: '_blank', rel: 'noopener noreferrer' }
  : { href: REGISTER_URL };

// Sticky mobile CTA: point it at this page's real enrollment target.
if (typeof window !== 'undefined') {
  window.STICKY_CTA = S.selfPacedOnly
    ? { title: 'Start Your Career Today', note: 'Self-paced · Enroll any time', href: REGISTER_URL, label: 'Enroll' }
    : { title: 'Start Your Career Today', note: 'Open enrollment', href: '#register', label: 'Enroll' };
}

// ─── HERO ────────────────────────────────────────────────────
function GLHero() {
  return (
    <section className="gl-hero">
      <div className="gl-hero-bg">
        <img className="hero-photo" src="assets/hero-classroom.jpg" alt="" aria-hidden="true" fetchpriority="high" decoding="async"/>
      </div>
      <div className="container gl-hero-content">
        <div className="gl-crumbs">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/#states" style={{color:'var(--gold)'}}>Get Licensed</a>
          <span>/</span>
          <span style={{opacity:0.7}}>{S.name}</span>
        </div>
        <div className="eyebrow">Pre-Licensing Course · {S.name}</div>
        <h1>{S.tagline}<br/><span className="gold">{S.accent}</span></h1>
        {S.grouponUrl && (
          <a className="gl-groupon" href={S.grouponUrl} target="_blank" rel="noopener noreferrer">
            <span className="gl-groupon-tag">Before you register</span>
            <span className="gl-groupon-text">A discounted tuition offer is available on Groupon. Check it before paying full price &mdash; discounts cannot be applied after registration.</span>
            <Icon.ArrowUR size={15}/>
          </a>
        )}
        <p className="gl-hero-sub">{S.intro}</p>
        <div className="hero-ctas">
          <a className="btn btn-gold" {...registerProps}><Icon.Rocket size={15}/> {S.selfPacedOnly ? 'Enroll Through The CE Shop' : 'Register for Class'}</a>
          <a className="btn btn-ghost" href="#courses"><Icon.Calendar size={15}/> View Courses</a>
          <a className="btn btn-ghost" href={S.phoneHref}><Icon.Phone size={15}/> {S.phoneLabel ? `${S.phoneLabel} · ${S.phone}` : S.phone}</a>
        </div>

        <div className="gl-quickfacts">
          {S.quickfacts ? S.quickfacts.map((f, i) => (
            <div key={i}><div className="k">{f.k}{f.suffix && <span style={{color:'var(--gold)'}}>{f.suffix}</span>}</div><div className="v">{f.v}</div></div>
          )) : (
            <>
              <div><div className="k">{S.hours}<span style={{color:'var(--gold)'}}>hr</span></div><div className="v">Pre-Licensing Course</div></div>
              <div><div className="k">{S.totalFee}</div><div className="v">Total program fees</div></div>
              <div><div className="k">3</div><div className="v">{S.name} training centers</div></div>
              <div><div className="k">{S.examPass}<span style={{color:'var(--gold)'}}>%</span></div><div className="v">First-time exam pass rate</div></div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── OTHER-STATES STRIP ─────────────────────────────────────
function OtherStates() {
  const others = ['arizona', 'california', 'nevada'].filter(id => id !== (window.STATE || 'nevada'));
  return (
    <section className="section tight other-states">
      <div className="container">
        <div className="other-states-inner">
          <div>
            <div className="eyebrow">Also Available In</div>
            <h3 style={{fontSize:'clamp(22px, 3vw, 32px)', marginTop:12}}>Get licensed in another state.</h3>
          </div>
          <div className="other-states-links">
            {others.map(id => (
              <a key={id} href={`/get-licensed-${id}`} className="other-state-link">
                <span className="other-state-code">{STATE_DATA[id].code}</span>
                <span className="other-state-name">{STATE_DATA[id].name}</span>
                <Icon.ArrowUR size={14}/>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── TRAINING CENTERS ────────────────────────────────────────
function Centers() {
  if (!S.centers || !S.centers.length) return null;
  const C = S.centersCopy;
  return (
    <section className="section" id="centers">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">{C ? C.eyebrow : `Training Center${S.centers.length > 1 ? 's' : ''}`}</div>
          <h2>{C
            ? <>{C.title[0]}<br/><span className="gold">{C.title[1]}</span></>
            : <>One classroom.<br/><span className="gold">One license.</span></>}</h2>
          <p>{C ? C.blurb : `In-person instruction in ${S.centers[0].city.split(',')[0]}.`}</p>
        </div>
        <div className={"centers-grid reveal" + (S.centers.length === 1 ? " one" : "")}>
          {S.centers.map((c, i) => (
            <a className="center-card" href={S.phoneHref} key={i}>
              <div className="center-num">{String(i+1).padStart(2,'0')}</div>
              {c.tag && <div className="center-tag">{c.tag}</div>}
              <h3>{c.name}</h3>
              <div className="center-addr">
                <div>{c.addr}</div>
                <div>{c.city}</div>
              </div>
              <div className="center-foot">
                <span><Icon.Phone size={13}/> {S.phone}</span>
                <span className="center-arrow"><Icon.ArrowUR size={14}/></span>
              </div>
            </a>
          ))}
        </div>
        {S.altPhone && (
          <p className="centers-alt reveal">{S.altPhone.label}: <a href={S.altPhone.href}>{S.altPhone.number}</a></p>
        )}
      </div>
    </section>
  );
}

// ─── COURSES ─────────────────────────────────────────────────
function Courses() {
  const [active, setActive] = React.useState(S.courses[0].id);
  const course = S.courses.find(c => c.id === active);

  return (
    <section className="section dark" id="courses">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Courses</div>
          <h2>{S.name} Course<br/><span className="gold">{S.courses.length > 1 ? 'Options.' : 'Requirements.'}</span></h2>
          <p>{S.selfPacedOnly
            ? `The DRE requires 135 hours of approved instruction before you can sit for the California salesperson exam. All three courses are included in one self-paced program through ${S.partner}.`
            : S.courses.length > 1
              ? 'Three pathways. Pick the one that matches your prior experience. The 120-hour course covers the full pre-licensing requirement; the 18-hour and 30-hour courses are bridge options for students who qualify.'
              : `One course covers the full ${S.hours}-hour requirement.`}</p>
        </div>

        <div className="course-tabs reveal" style={S.courses.length > 1 ? undefined : {display:'none'}}>
          {S.courses.map(c => (
            <button
              key={c.id}
              className={"course-tab" + (active === c.id ? " active" : "")}
              onClick={() => setActive(c.id)}
            >
              <span className="course-tab-code">{c.code}</span>
              <span className="course-tab-title">{c.title}</span>
            </button>
          ))}
        </div>

        <div className="course-detail reveal" key={course.id}>
          <div className="course-detail-head">
            <div>
              <div className="course-detail-badge">{course.badge}</div>
              <h3>{course.title}</h3>
              <div className="course-detail-hours">{course.hours} · {S.accreditation || `Approved by ${S.name} regulator`}</div>
            </div>
            <div className="course-detail-code">{course.code}</div>
          </div>

          <p className="course-detail-desc">{course.desc}</p>

          <div className="course-detail-grid">
            <div>
              <h4>What you'll learn</h4>
              <ul className="course-topics">
                {course.topics.map((t, i) => (
                  <li key={i}><Icon.Check size={14}/> {t}</li>
                ))}
              </ul>
              {!!course.includes && (
                <>
                  <h4 style={{marginTop:26}}>What's included</h4>
                  <ul className="course-topics">
                    {course.includes.map((t, i) => <li key={i}><Icon.Check size={14}/> {t}</li>)}
                  </ul>
                </>
              )}
            </div>
            <div>
              <h4>Before you start</h4>
              <p className="course-note">{course.note}</p>
              {S.pacing && (
                <>
                  <h4 style={{marginTop:26}}>DRE pacing rules</h4>
                  <ul className="course-topics">
                    {S.pacing.map((p, i) => <li key={i}><Icon.Check size={14}/> {p}</li>)}
                  </ul>
                </>
              )}
              {!!course.docs.length && (
                <div className="course-docs">
                  {course.docs.map((d, i) => (
                    <a className="course-doc" href={d.href} target="_blank" rel="noopener noreferrer" key={i}>
                      <span className="course-doc-ic"><Icon.ArrowUR size={12}/></span>
                      {d.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="course-detail-cta">
            <a className="btn btn-gold" {...registerProps}><Icon.Rocket size={14}/> {S.selfPacedOnly ? 'Enroll Through The CE Shop' : 'Register for Class'}</a>
            <a className="btn btn-ghost" href={S.phoneHref}><Icon.Phone size={14}/> {S.phoneLabel ? `${S.phoneLabel} · ${S.phone}` : S.phone}</a>
          </div>
        </div>

        {S.howTo && (
          <div className="course-video reveal">
            <div className="course-video-side">
              <div className="eyebrow">Walkthrough</div>
              <h3>{S.howTo.title}</h3>
              <p>{S.howTo.blurb}</p>
              <a className="btn btn-line" href={S.howTo.href} target="_blank" rel="noopener noreferrer"><Icon.ArrowUR size={14}/> Open in a new tab</a>
            </div>
            <iframe className="course-video-player" src={S.howTo.embed} title={S.howTo.title} allow="autoplay" allowFullScreen></iframe>
          </div>
        )}

        {S.video && (
          <div className="course-video reveal">
            <div className="course-video-side">
              <div className="eyebrow">Walkthrough</div>
              <h3>{S.video.title}</h3>
              <p>{S.video.blurb}</p>
            </div>
            <video className="course-video-player" controls preload="metadata" playsInline src={S.video.src}></video>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── TUITION ─────────────────────────────────────────────────
function Tuition() {
  if (!S.tuition) return (
    <section className="section" id="tuition">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Tuition</div>
          <h2>Pricing is set by<br/><span className="gold">{S.partner}.</span></h2>
          <p>California pre-licensing is purchased directly from {S.partner}. Several package options are available at different price points, each covering the three required DRE courses. Current pricing and package details are listed on their site.</p>
        </div>
        <div className="reveal" style={{display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center'}}>
          <a className="btn btn-gold" {...registerProps}><Icon.Rocket size={14}/> View Packages &amp; Pricing</a>
          {S.faqs && S.faqs.map((f, i) => (
            <a className="btn btn-line" href={f.href} target="_blank" rel="noopener noreferrer" key={i}><Icon.ArrowUR size={14}/> {f.label}</a>
          ))}
        </div>
        {S.disclaimer && <p className="reveal" style={{maxWidth:720, margin:'40px auto 0', textAlign:'center', fontSize:13, lineHeight:1.6, color:'var(--text-faint)'}}>{S.disclaimer}</p>}
      </div>
    </section>
  );

  const single = S.tuition.length === 1;
  return (
    <section className="section" id="tuition">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Tuition</div>
          <h2>{single ? <>One price.<br/><span className="gold">Everything included.</span></> : <>Flat pricing.<br/><span className="gold">No surprises.</span></>}</h2>
          <p>{single
            ? 'Tuition covers the full pre-licensing course, the Contract Writing Boot Camp, textbooks, course materials, and admin fees.'
            : 'All-in fees for each course, with tuition, texts, and admin fees broken out.'}</p>
        </div>

        <div className="tuition-grid reveal">
          {S.tuition.map((t, i) => (
            <div className={"tuition-card" + (t.popular ? " popular" : "")} key={i}>
              {t.popular && <div className="tuition-flag">Most Popular</div>}
              <div className="tuition-code">{t.code}</div>
              <h3>{t.title}</h3>
              <div className="tuition-sub">{t.sub}</div>
              <div className="tuition-rows">
                {t.rows.map(([k, v], j) => (
                  <div className="tuition-row" key={j}>
                    <span>{k}</span>
                    <span>{v}</span>
                  </div>
                ))}
              </div>
              <div className="tuition-total">
                <span>Total</span>
                <span className="tuition-total-num">{t.total}</span>
              </div>
              <a className={"btn " + (t.popular ? "btn-gold" : "btn-ghost")} {...registerProps} style={{width:'100%', justifyContent:'center'}}>
                <Icon.Rocket size={14}/> Register
              </a>
            </div>
          ))}
        </div>

        {S.tuitionNote && <p className="tuition-note reveal">{S.tuitionNote}</p>}

        {S.faqs && (
          <div className="tuition-faqs reveal">
            {S.faqs.map((f, i) => (
              <a className="btn btn-line" href={f.href} target="_blank" rel="noopener noreferrer" key={i}><Icon.ArrowUR size={14}/> {f.label}</a>
            ))}
            {S.grouponUrl && (
              <a className="btn btn-line" href={S.grouponUrl} target="_blank" rel="noopener noreferrer"><Icon.ArrowUR size={14}/> Groupon Offer</a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

// ─── REIMBURSEMENT ───────────────────────────────────────────
function Reimbursement() {
  const R = S.career;
  if (!R) return null;
  return (
    <section className="section dark" id="career">
      <div className="container">
        <div className="reimburse-grid">
          <div className="reimburse-body reveal">
            <div className="eyebrow">{R.eyebrow}</div>
            <h2>{R.title[0]}<br/><span className="gold">{R.title[1]}</span></h2>
            <p style={{color:'var(--text-dim)', fontSize:17, lineHeight:1.55, margin:'24px 0 0', maxWidth:560}}>{R.body}</p>
            <p style={{color:'var(--text-dim)', fontSize:14, lineHeight:1.55, margin:'18px 0 0', maxWidth:560}}>
              {R.division.text.split(R.division.label)[0]}<a href={R.division.href} target="_blank" rel="noopener noreferrer" style={{color:'var(--gold)'}}>{R.division.label}</a>
            </p>
            <div style={{marginTop:32, display:'flex', gap:12, flexWrap:'wrap'}}>
              <a className="btn btn-gold" href={R.interview.href}><Icon.Phone size={14}/> Schedule a Broker Interview</a>
            </div>
            <p style={{color:'var(--text-faint)', fontSize:13, lineHeight:1.55, margin:'16px 0 0', maxWidth:560}}>{R.interview.text}</p>
          </div>

          <div className="reimburse-card reveal">
            <div className="reimburse-card-label">Program at a Glance</div>
            <div className="reimburse-card-stat"><span className="k">BHHS</span><span className="v">Academy sales training for new affiliates</span></div>
            <div className="reimburse-card-stat"><span className="k">Open</span><span className="v">Affiliate with any broker you choose</span></div>
            <div className="reimburse-card-stat"><span className="k">1:1</span><span className="v">Private broker interview on request</span></div>
            <div className="reimburse-fine">
              {R.fine}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SELF-PACED ──────────────────────────────────────────────
function SelfPaced() {
  const P = S.selfPacedCopy;
  return (
    <section className="section" id="selfpaced">
      <div className="container">
        <div className="selfpaced reveal">
          <div className="selfpaced-side">
            <div className="eyebrow">{P ? P.eyebrow : (S.selfPacedOnly ? 'How California Works' : 'Self-Paced Option')}</div>
            <h2>{P
              ? <>{P.title[0]}<br/><span className="gold">{P.title[1]}</span></>
              : (S.selfPacedOnly ? <>All self-paced.<br/><span className="gold">Start any time.</span></> : <>Need flexibility?<br/><span className="gold">Learn online.</span></>)}</h2>
            <p>{P ? P.blurb : (S.selfPacedOnly
              ? `California pre-licensing is offered exclusively online and self-paced through ${S.partner}. There are no live or in-person class dates to work around. Enroll when you're ready and study on your own schedule.`
              : `Self-paced pre-licensing is offered through our online business partner. Study on your schedule, anywhere in ${S.name}.`)}</p>
            <p style={{fontSize:13, color:'var(--text-faint)', marginTop:18}}>
              Please note: discount vouchers for {S.name === 'Nevada' ? 'the Nevada Real Estate Academy' : 'the Arizona Real Estate Education School'} do not apply for these online courses offered through our Business Partner.
            </p>
            <a className="btn btn-gold" {...(S.selfPacedOnly ? registerProps : (S.selfPacedUrl ? { href: S.selfPacedUrl, target: '_blank', rel: 'noopener noreferrer' } : { href: '#' }))} style={{marginTop:24}}>
              <Icon.Online size={14}/> Explore Online Education
            </a>
          </div>
          <div className="selfpaced-deco" aria-hidden="true">
            <div className="selfpaced-deco-card c1">
              <div className="d-row"><Icon.Check size={12}/> Module 03 · Valuation</div>
              <div className="d-bar"><div style={{width:'72%'}}/></div>
            </div>
            <div className="selfpaced-deco-card c2">
              <div className="d-row">{S.selfPacedOnly ? <><Icon.Online size={11}/> Real Estate Practice · 45hr</> : <><Icon.Online size={11}/> Module 04 · Contracts</>}</div>
              <div className="d-bar"><div style={{width:'40%', background:'var(--warm-white)'}}/></div>
            </div>
            <div className="selfpaced-deco-card c3">
              <div className="d-row"><Icon.Sparkle size={11}/> Study on your schedule</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── REGISTER / FINAL CTA ────────────────────────────────────
function GLFinal() {
  return (
    <section id="register" className="final">
      <div className="final-bg"></div>
      <div className="container reveal">
        <div className="eyebrow" style={{justifyContent:'center', display:'flex'}}>{S.selfPacedOnly ? 'Enroll Any Time' : 'Next Class: Open Enrollment'}</div>
        <h2 style={{marginTop: 22}}>
          {S.selfPacedOnly ? <>Start when you're ready.<br/><span className="gold">Enroll today.</span></> : <>Your seat is waiting.<br/><span className="gold">Register today.</span></>}
        </h2>
        <p>
          {S.selfPacedOnly
            ? `Enroll through ${S.partner} and start your ${S.hours}-hour journey to your ${S.name} real estate license. Study at your own pace, from anywhere.`
            : S.centers && S.centers.length > 1
              ? `Pick your campus, pick your course, and start your ${S.hours}-hour journey to your ${S.name} real estate license.`
              : `Enroll in the ${S.hours}-hour course and start your path to a ${S.name} real estate license.`}
        </p>
        <div className="final-ctas">
          <a className="btn btn-gold" {...registerProps}><Icon.Rocket size={15}/> {S.selfPacedOnly ? 'Enroll Through The CE Shop' : 'Register for Class'}</a>
          <a className="btn btn-ghost" href={S.phoneHref}><Icon.Phone size={15}/> {S.phoneLabel ? `${S.phoneLabel} · ${S.phone}` : S.phone}</a>
          <a className="btn btn-ghost" href={"mailto:" + S.email}><Icon.Send size={15}/> {S.email}</a>
        </div>
      </div>
    </section>
  );
}

function PostLicensing() {
  const P = S.postLicensing;
  if (!P) return null;
  return (
    <section className="section" id="postlicensing">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">{P.eyebrow}</div>
          <h2>{P.title[0]}<br/><span className="gold">{P.title[1]}</span></h2>
        </div>
        <div className="course-detail reveal">
          <div className="course-detail-head">
            <div>
              {P.badge && <div className="course-detail-badge">{P.badge}</div>}
              <h3>Nevada Post-Licensing</h3>
              {P.notCE && <div className="course-detail-hours">{P.notCE}</div>}
            </div>
            {P.code && <div className="course-detail-code">{P.code}</div>}
          </div>
          <p className="course-detail-desc">{P.blurb}</p>
          {P.sessions && (
            <ol className="pl-sessions">
              {P.sessions.map(s => (
                <li key={s.n}>
                  <span className="pl-sess-n">{s.n}</span>
                  <span className="pl-sess-body"><strong>{s.title}</strong><em>{s.mod}</em></span>
                </li>
              ))}
            </ol>
          )}
          {P.pricing && (
            <div className="pl-pricing">
              {P.pricing.map(p => (
                <div key={p.k} className="pl-price"><span className="pl-price-k">{p.k}</span><span className="pl-price-v">{p.v}</span></div>
              ))}
            </div>
          )}
          {P.findingNote && <p className="course-note">{P.findingNote}</p>}
          {P.requirement && <p className="course-note">{P.requirement}</p>}
          <div className="course-detail-cta">
            <a className="btn btn-gold" href={P.url} target="_blank" rel="noopener noreferrer"><Icon.Calendar size={14}/> View Dates & Register</a>
            <a className="btn btn-ghost" href={S.phoneHref}><Icon.Phone size={14}/> {S.phoneLabel} · {S.phone}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// School disclosure required by Arizona Administrative Code R4-28-503(D).
function SchoolDisclosure() {
  const C = S.compliance;
  if (!C) return null;
  return (
    <section className="school-disclosure">
      <div className="container">
        <div className="sd-grid">
          <div>
            <div className="sd-label">School</div>
            <div className="sd-name">{C.school}</div>
            <div className="sd-num">School No. {C.number}</div>
          </div>
          <div>
            <div className="sd-label">Contact</div>
            <ul className="sd-list">
              <li><a href={S.phoneHref}>{S.phoneLabel}: {S.phone}</a></li>
              {S.altPhone && <li><a href={S.altPhone.href}>{S.altPhone.label}: {S.altPhone.number}</a></li>}
              <li><a href={"mailto:" + S.email}>{S.email}</a></li>
              <li>{C.address}</li>
            </ul>
          </div>
          <div>
            <div className="sd-label">School Administrators</div>
            <ul className="sd-list">
              {C.admins.map((a, i) => <li key={i}>{a}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function StudentVoices() {
  const T = S.testimonials;
  if (!T) return null;
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head reveal">
          <div className="eyebrow">Student Testimonials</div>
          <h2>What our students<br/><span className="gold">have to say.</span></h2>
        </div>
        <div className="testimonials reveal">
          {T.items.map((t, i) => (
            <figure className="testimonial" key={i}>
              <div className="testimonial-mark" aria-hidden="true">&ldquo;</div>
              <blockquote className="testimonial-quote">{t.quote}</blockquote>
              <figcaption className="testimonial-attr">
                <div className="testimonial-av">{t.initials}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{S.name} Pre-Licensing Student · {t.date}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        {T.allUrl && (
          <div className="reveal" style={{display:'flex', justifyContent:'center', marginTop:36}}>
            <a className="btn btn-line" href={T.allUrl} target="_blank" rel="noopener noreferrer"><Icon.ArrowUR size={14}/> Read All Testimonials</a>
          </div>
        )}
      </div>
    </section>
  );
}

window.GLHero = GLHero;
window.OtherStates = OtherStates;
window.Centers = Centers;
window.Courses = Courses;
window.Tuition = Tuition;
window.Reimbursement = Reimbursement;
window.PostLicensing = PostLicensing;
window.SchoolDisclosure = SchoolDisclosure;
window.StudentVoices = StudentVoices;
window.SelfPaced = SelfPaced;
window.GLFinal = GLFinal;
