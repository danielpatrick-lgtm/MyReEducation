// policies.jsx — School policies / FAQ page (state-aware via window.POLICY_STATE)

const POLICY_DATA = {
  arizona: {
    name: 'Arizona',
    school: 'Arizona Real Estate Education',
    schoolNo: 'S19-0001',
    backHref: '/get-licensed-arizona',
    backLabel: 'Get Licensed: Arizona',
    intro: 'Policies and procedures for the Arizona pre-licensing program, as required by the Arizona Department of Real Estate.',
    groups: [
      {
        title: 'Classes',
        items: [
          {
            q: 'Where are the classes held?',
            a: ['Live Remote classes will be held online and students will need to sign an addendum for attending class remotely stating the understand the Arizona Department of Real Estates requirements including but not limited to to being on camera during the entire class, attending from a computer or tablet, in quiet location. Cell phone attendance is not acceptable, etc.',
                'In-Person classes will be held at our Scottsdale campus located at 16100 N 71st Street, Ste. 400, Scottsdale, AZ 85254. The classroom consists of 1,820 sq. ft. of classroom and administrative areas and has a maximum classroom capacity of 40 pre-licensing students. Depending on the number of attendees we have a secondary classroom/boardroom which may be used for class. The school has appropriate audio-visual equipment for your enjoyment and enrichment during the classroom sessions.'],
          },
          {
            q: 'What times are the classes instructed?',
            a: ['Pre Licensing Courses are held Monday thru Friday. Days and time will vary depending on the course you sign up for.'],
          },
          {
            q: 'Will a certificate be issued?',
            a: ['Upon successfully completion of the course and passing a comprehensive final exam with a score of at least 78% or higher you will be issued a certificate of completion. This will be your certificate that you will need to provide to the Arizona Department of Real Estate and Pearson Vue to schedule your test.'],
          },
        ],
      },
      {
        title: 'Enrollment',
        items: [
          {
            q: 'How do I enroll?',
            a: ['You must RSVP to all Courses. Limited Seating Available. You may by enroll by contacting us, executing an enrollment agreement and paying the required fees. You may also enroll by using the secure registration form at our web site. Fees are due prior to the first day of class or before materials are picked up. Seating is limited, so to assure a seat in the class, enrollment and payment of fees should be completed at least two weeks prior to the start of the first class, but no-later-than three days prior to the beginning of any class.',
                'You should possess basic reading, writing and mathematical skills in order to achieve this course. By signing the enrollment agreement, you are stating that you possess those basic skills.'],
          },
          {
            q: 'Are textbooks included?',
            a: ['You will be supplied a textbook for all courses. The fees for the material/textbook(s) are included for students who pay the full tuition amount. Refund for texts will be granted provided that the texts are returned unused and undamaged no later than the first day of class. Some additional fees may apply (see refund policy, below).'],
          },
        ],
      },
      {
        title: 'Refund Policy for Students Enrolled in Classroom Instruction',
        items: [
          {
            q: 'Before instruction begins',
            a: ['Refunds are only applicable to students who pay the full tuition amount for the course and will not apply to any discounted tuition program.'],
            list: ['If you cancel enrollment prior to start of instruction and you have not picked up your textbook, there will be refund of the above fees, less a $50.00 cancellation/processing fee.',
                   'If textbook(s) has been dispensed, opened and used, you will receive a refund of the above fee less $100.00 to cover the cost of the textbook and processing fee. (Please note once text book is open it cannot be returned as it is considered used)'],
          },
          {
            q: 'After instruction begins',
            a: ['After the start of instruction and before 3 sessions have been completed and the school has received a refund request in writing, a refund will be made, less $150.00 of the tuition as a registration fee. No refund of tuition will be granted after 3 sessions are completed. Refunds will be issued within 15 calendar days upon receipt of the written cancellation request.',
                'If the school cancels the selected course, there will be a full refund to the student. Refunds are only applicable to those students who pay the full tuition amount for the course and will not apply to any discounted tuition program.'],
          },
          {
            q: 'Student Indemnification Account',
            a: ['Students are hereby advised that an account for student indemnification is established and may be used to indemnify a student or enrollee who has suffered damage as a result of: discontinuance of operation or violation by such institution of any provision of the Arizona Division statutes.'],
          },
        ],
      },
      {
        title: 'Attendance and Conduct',
        items: [
          {
            q: 'Attendance Requirements',
            a: ['To ensure the best learning experience, students are encouraged to complete all courses as they are scheduled at the time of registration. You are required to attend 100% of the classes which includes 90 hours of instruction as prescribed by R4-28-401. You must arrive on time and attend the entire session. You are responsible to sign in and out of each class.'],
          },
          {
            q: 'Scheduling Flexibility Policy',
            a: ['You may take up to six (6) months from the date of purchase (hereinafter "date of enrollment") to complete the entire 90 hours of instruction and take the school final exam.'],
          },
          {
            q: 'Student Conduct and Performance',
            a: ['Students are expected to maintain decorum and dress appropriately for a classroom setting. The administration has the right to request that a student leave the classroom for disorderly or inappropriate conduct. Questions may be asked during the lecture if the question is appropriate to the subject being discussed. Otherwise, questions may be asked of the instructor during the scheduled breaks.',
                'Additional test questions will be given at either the beginning or end of most sessions. These questions will measure the depth of your understanding of the material presented. For the pre licensing programs you will be given homework, which includes a reading assignment for the topic(s) of the next session, as well as assignments in your student guide covering the material presented in class that day. The assignment will be reviewed at the beginning of the next session. Your maximum learning rate will be enhanced by faithfully completing your homework assignments.'],
          },
        ],
      },
      {
        title: 'Testing',
        items: [
          {
            q: 'Testing — Classroom Instruction and Correspondence Programs',
            a: ['Reviews will be included as part of the classes, in addition practice tests will be made available as part of the text book and online. Students are encouraged to take all the quizzes and practice tests made available to them. There will be a Final Exam which you will be required to pass with a grade of 78% or more. If you are having difficulty with the material, consult with the Arizona Real Estate Education staff. If you score less than 78%, and with permission of the school administrator, you may take the test again. Student\u2019s test scores will be entered into the student\u2019s file.',
                'The final exam will be scheduled for the week following the completion of the course and will be in person. This will be a comprehensive closed book final examination including 150 Questions of a National and Arizona law nature. Exam may be taken only once per day and must be scheduled in advance.',
                'Any student found compromising the integrity of the test by dishonesty will be immediately dismissed from Arizona Real Estate Education and denied a Certificate of Completion.'],
          },
          {
            q: 'No Guarantee of Passing the Examination',
            a: ['There are no guarantees, neither expressed nor implied, that the student who successfully passes the course will pass the licensing examination.'],
          },
        ],
      },
    ],
    contact: {
      phones: [{ label: 'Class Information', number: '480-344-4082', href: 'tel:4803444082' },
               { label: 'School', number: '480-505-6300', href: 'tel:4805056300' }],
      email: 'reschool@bhhsaz.com',
      address: '16100 N 71st Street, Ste. 400, Scottsdale, AZ 85254',
      admins: ['Forrest Barbee', 'Christina Rogowski', 'Mary Sand'],
    },
  },
};

const P = POLICY_DATA[window.POLICY_STATE || 'arizona'];

function PolicyPage() {
  React.useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }), { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <>
      <Nav/>
      <header className="policy-hero">
        <div className="container">
          <div className="gl-crumbs">
            <a href="/">Home</a>
            <span>/</span>
            <a href={P.backHref}>{P.backLabel}</a>
            <span>/</span>
            <span style={{color:'var(--gold)'}}>School Policies</span>
          </div>
          <div className="eyebrow">{P.school} &middot; School No. {P.schoolNo}</div>
          <h1>{P.name} School<br/><span className="gold">Policies &amp; Procedures</span></h1>
          <p>{P.intro}</p>
        </div>
      </header>

      <main className="section">
        <div className="container policy-body">
          {P.groups.map((g, gi) => (
            <section className="policy-group reveal" key={gi}>
              <h2 className="policy-group-title">{g.title}</h2>
              {g.items.map((it, ii) => (
                <article className="policy-item" key={ii}>
                  <h3>{it.q}</h3>
                  {it.a.map((para, pi) => <p key={pi}>{para}</p>)}
                  {it.list && (
                    <ul className="policy-list">
                      {it.list.map((li, li2) => <li key={li2}>{li}</li>)}
                    </ul>
                  )}
                </article>
              ))}
            </section>
          ))}

          <section className="policy-group reveal">
            <h2 className="policy-group-title">Contact</h2>
            <article className="policy-item">
              <ul className="policy-list">
                {P.contact.phones.map((ph, i) => <li key={i}>{ph.label}: <a href={ph.href}>{ph.number}</a></li>)}
                <li>Email: <a href={"mailto:" + P.contact.email}>{P.contact.email}</a></li>
                <li>{P.contact.address}</li>
                <li>School Administrators: {P.contact.admins.join(', ')}</li>
              </ul>
            </article>
          </section>

          <div className="policy-back reveal">
            <a className="btn btn-gold" href={P.backHref}><Icon.Arrow size={14}/> Back to {P.backLabel}</a>
          </div>
        </div>
      </main>

      <Footer/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<PolicyPage/>);
