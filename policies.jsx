// policies.jsx — School policies / FAQ page (state-aware via window.POLICY_STATE)

const POLICY_DATA = {
  arizona: {
    name: 'Arizona',
    heading: 'Arizona School',
    accent: 'Policies \u0026 Procedures',
    crumb: 'School Policies',
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
               { label: 'Office', number: '480-505-6300', href: 'tel:4805056300' }],
      email: 'reschoolaz@bhhsaz.com',
      address: '16100 N 71st Street, Ste. 400, Scottsdale, AZ 85254',
      admins: ['Forrest Barbee', 'Christina Rogowski', 'Mary Sand'],
    },
  },
  nevada: {
    name: 'Nevada',
    heading: 'Nevada School',
    accent: 'Policies \u0026 Procedures',
    crumb: 'School Policies',
    school: 'Nevada Real Estate Academy',
    schoolNo: null,
    accred: 'Licensed to operate by the Commission on Postsecondary Education. Approved by the Nevada Real Estate Division.',
    backHref: '/get-licensed-nevada',
    backLabel: 'Get Licensed: Nevada',
    intro: 'Policies and procedures for the Nevada pre-licensing program at Nevada Real Estate Academy.',
    groups: [
      {
        title: 'Classes',
        items: [
          {
            q: 'Where are the classes held?',
            a: ['Our classes are held at one of our 2 classroom locations. Courses alternate times and locations and are subject to change without notice.'],
            list: ['Corporate Training Classroom \u2014 3185 St. Rose Parkway Suite #100, Henderson, Nevada 89052. 702-915-7755. The Henderson classroom consists of 14,527 sq. ft. of classroom and administrative areas and has a maximum classroom capacity of 50 pre-licensing students.',
                   'SW Training Classroom \u2014 8850 West Sunset Road Suite #200, Las Vegas, Nevada 89148. 702-915-7755.'],
          },
          {
            q: 'What times are the classes instructed?',
            a: ['Pre Licensing courses are held Monday thru Friday. The Day class runs from 9 am to 3 pm for 4 Weeks and the Evening class runs from 5:00 pm to 10:00 pm for 4 Weeks. Courses begin on the first Monday of the month with the exception of a Monday holiday in which the course will begin on Tuesday.'],
          },
          {
            q: 'Who teaches the courses?',
            a: ['Laurette Mormon is our Director of Education. Courses are taught by Dee Neiman and Laurette Mormon.'],
          },
          {
            q: 'Will a certificate be issued?',
            a: ['Upon successfully completion of the course and passing the three comprehensive final exams with a score of at least 75% or higher you will be issued two certificates of completion.'],
          },
        ],
      },
      {
        title: 'Enrollment and Textbooks',
        items: [
          {
            q: 'Are textbooks included?',
            a: ['You will be supplied a textbook for all courses that require one. The fees for the material are included in your total fees. Refund for texts will be granted provided that the texts are returned unused and undamaged no later than the first day of class. There shall be no refund for texts for home study correspondence students (see refund policy, below).'],
          },
          {
            q: 'What documents do I need to submit?',
            a: ['Once registration is received, students will receive a confirmation email containing the Enrollment Agreement and available book pick-up dates and times. Students must complete and return the Enrollment Agreement, along with any valid coupons, to REschool@bhhsnv.com before scheduling their book pick-up appointment.'],
          },
        ],
      },
      {
        title: 'Refund Policy',
        items: [
          {
            q: 'Cancellation before instruction begins',
            a: [],
            list: ['If a student cancels enrollment within three (3) days after signing the Enrollment Agreement, student will receive a refund of 100% of the tuition fees.',
                   'If the student cancels enrollment prior to the start of instruction, and three days after signing the Enrollment Agreement, there will be a refund of the tuition fees, less a registration fee of 10% of the tuition amount.',
                   'If textbook(s) have been dispensed, opened and used, student will receive a refund of Tuition fee less $100.00 to cover the cost of the textbook and processing fee.'],
          },
          {
            q: 'Cancellation after instruction begins',
            a: ['After the start of the instruction, and before 60% of the course has been completed, which is the 12th session for the 120 Hour Day or Evening Student, 16th Session for the 18 Hour Day or Evening Student; the school has received a refund request in writing from the student/guardian, a refund will be made less: 1.) 10% of the tuition as a registration fee and 2.) a pro rated amount of the tuition determined by the first day of instruction to the last day of attendance by the student.',
                'No refund of tuition will be granted after 60% completion of the program. Refund for texts will be granted provided that the texts are returned unused and undamaged no later than the first day of class. If the Academy cancels the selected course, there will be a full refund to the student.'],
          },
          {
            q: 'How refunds are issued',
            a: ['Nevada Real Estate Academy will issue all refunds within 15 calendar days upon receipt of the written cancellation request. All written refund requests can be sent to RESchool@bhhsnv.com.',
                'Refunds are only applicable to those students who pay the full tuition amount for the course and will not apply to any discounted tuition program.'],
          },
        ],
      },
      {
        title: 'Student Grievance Policy',
        items: [
          {
            q: 'How do I file a complaint?',
            a: ['Students enrolled in a licensed, private postsecondary educational institution have the right to register a legitimate complaint with the Commission on Postsecondary Education. Prior to filing a complaint, you must attempt to resolve the issue with the school.'],
          },
        ],
      },
    ],
    contact: {
      phones: [{ label: 'Corporate Training Classroom (Henderson)', number: '702-915-7755', href: 'tel:7029157755' },
               { label: 'SW Training Classroom (Las Vegas)', number: '702-915-7755', href: 'tel:7029157755' }],
      email: 'RESchool@bhhsnv.com',
      address: '3185 St. Rose Parkway Suite #100, Henderson, NV 89052',
      admins: ['Laurette Mormon, Director of Education', 'Carol Sandoval, Education Coordinator'],
    },
  },
  propertymanagement: {
    name: 'Property Management',
    heading: 'Property Management',
    accent: 'Questions \u0026 Answers',
    crumb: 'FAQ',
    school: 'Nevada Real Estate Academy',
    schoolNo: null,
    backHref: '/property-management',
    backLabel: 'Property Management',
    intro: 'Common questions about the 24-hour Nevada Property Management Pre-Permit Course.',
    groups: [
      {
        title: 'Registration',
        items: [
          {
            q: 'How do I register for this course?',
            a: ['Please feel free to browse our Education calendar and go to Property Management to register for this course. For questions you can contact Laurette Mormon, Director of Education at LauretteM@bhhsnv.com.'],
          },
        ],
      },
      {
        title: 'Permit Requirements',
        items: [
          {
            q: 'What is required by the Real Estate Division to obtain a Nevada Property Management Permit?',
            a: ['All applicants must:'],
            list: ['Hold a Valid/Active Nevada Real Estate License',
                   'Show proof of attending an accredited 24-hour Property Management pre-permit course',
                   'Show proof of passing the Nevada Property Management state examination within 1 year of date of application'],
          },
        ],
      },
      {
        title: 'The Course',
        items: [
          {
            q: 'What does the course cover?',
            a: ['This course will satisfy the entire requirement of 24 hours of instruction in required property management subjects. This course will also help the student prepare to take the licensing examination.',
                'Topics covered: Nevada laws pertaining to property managers, property management contracts and agreements, disclosures, property management for common interest communities, landlord-tenant laws, fair housing laws, record keeping and trust accounting, commercial property management, and risk management for property managers.'],
          },
          {
            q: 'Where is the class held?',
            a: ['Students may opt to attend class in person at our St. Rose campus: 3185 St. Rose Parkway, Suite 200, Henderson, NV 89052 or through ZOOM. Zoom attendees must adhere to the virtual attendance guidelines listed on the enrollment agreement.'],
          },
          {
            q: 'What does it cost?',
            a: ['24 Hours of Instruction: Tuition $275 + Admin Fee $25. Total Fees: $300.00.'],
          },
        ],
      },
      {
        title: 'Refunds',
        items: [
          {
            q: 'What is the refund policy?',
            a: ['The Academy\u2019s cancellation and refund policy applies to this course. See the Nevada school policies page for the full schedule, or send written refund requests to RESchool@bhhsnv.com.'],
          },
        ],
      },
    ],
    contact: {
      phones: [{ label: 'Academy', number: '702-915-7755', href: 'tel:7029157755' }],
      email: 'LauretteM@bhhsnv.com',
      address: '3185 St. Rose Parkway, Suite 200, Henderson, NV 89052',
      admins: ['Laurette Mormon, Director of Education'],
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
            <span style={{color:'var(--gold)'}}>{P.crumb}</span>
          </div>
          <div className="eyebrow">{P.school}{P.schoolNo ? ' \u00b7 School No. ' + P.schoolNo : ''}</div>
          <h1>{P.heading}<br/><span className="gold">{P.accent}</span></h1>
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
                <li>School Administrators: {P.contact.admins.join(' · ')}</li>
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
