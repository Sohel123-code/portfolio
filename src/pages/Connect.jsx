import React from 'react';
import linkedinImg from '../assets/linkdn.png';
import githubImg from '../assets/github.png';
import hackerRankImg from '../assets/hk logo.jpg';
import codechefImg from '../assets/codecef.jpg';
import leetcodeImg from '../assets/leetcode.png';

// Import Resume PDFs
import resume1 from '../assets/certificates/reaume 1.pdf';
import resume2 from '../assets/certificates/resume 2.pdf';
import resume3 from '../assets/certificates/resume 3.pdf';

function Connect() {
  const socialLinks = [
    {
      platform: 'LinkedIn',
      desc: 'Connect professionally',
      img: linkedinImg,
      link: 'https://www.linkedin.com/in/md-khaja-eshaq-8862b532a',
      bgGradient: 'from-[#0077b5]/20 to-[#0077b5]/5',
      btnGradient: 'from-[#0077b5] to-[#00a0dc]'
    },
    {
      platform: 'GitHub',
      desc: 'View my repositories',
      img: githubImg,
      link: 'https://github.com/Sohel123-code',
      bgGradient: 'from-[#24292e]/20 to-[#24292e]/5',
      btnGradient: 'from-[#24292e] to-[#404448]'
    },
    {
      platform: 'HackerRank',
      desc: 'Check my coding problem logic',
      img: hackerRankImg,
      link: 'https://www.hackerrank.com/profile/mdsohel46940',
      bgGradient: 'from-[#00EA64]/20 to-[#00EA64]/5',
      btnGradient: 'from-[#00EA64] to-[#00cfa3]'
    },
    {
      platform: 'CodeChef',
      desc: 'View competitive programming',
      img: codechefImg,
      link: 'https://www.codechef.com/users/mdsohel123',
      bgGradient: 'from-[#5B4638]/20 to-[#5B4638]/5',
      btnGradient: 'from-[#5B4638] to-[#8B6B55]'
    },
    {
      platform: 'LeetCode',
      desc: 'View data structure skills',
      img: leetcodeImg,
      link: 'https://leetcode.com/u/mdsohel786/',
      bgGradient: 'from-[#FFA116]/20 to-[#FFA116]/5',
      btnGradient: 'from-[#FFA116] to-[#ffb84d]'
    }
  ];

  const resumes = [
    {
      title: 'Resume-1',

      pdf: resume1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      )
    },
    {
      title: 'Resume-2',

      pdf: resume2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
      )
    },
    {
      title: 'Resume-3',

      pdf: resume3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
      )
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-secondary/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 relative z-10">

        {/* Resumes Section */}
        <div className="reveal">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Download My Resume</h2>
            <p className="text-lg md:text-xl text-foreground/70 mt-4 max-w-2xl mx-auto">
              Choose the resume that best fits your requirement.
            </p>
            <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resumes.map((resume, idx) => (
              <div
                key={idx}
                className="group relative bg-card/40 backdrop-blur-md p-8 rounded-3xl border border-border/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden"
              >
                {/* Decorative glow inside card */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>

                <div className="flex justify-center mb-6 text-primary z-10">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    {resume.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-card-foreground text-center mb-3 z-10">
                  {resume.title}
                </h3>

                <p className="text-foreground/70 text-center flex-grow mb-8 z-10">
                  {resume.desc}
                </p>

                <a
                  href={resume.pdf}
                  download
                  className="z-10 relative flex items-center justify-center gap-2 w-full py-4 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-md hover:shadow-cyan-500/30 transition-all duration-300 overflow-hidden group/btn"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Download Resume
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-y-1 transition-transform duration-300"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  </span>
                  {/* Button shine effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links Section */}
        <div className="reveal">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Connect with Me</h2>
            <p className="text-lg md:text-xl text-foreground/70 mt-4 max-w-2xl mx-auto">
              Find my work, algorithms, and professional history on these platforms.
            </p>
            <div className="mt-6 w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {socialLinks.map((social, idx) => (
              <div
                key={idx}
                className={`group bg-gradient-to-b ${social.bgGradient} backdrop-blur-md p-6 rounded-3xl border border-white/10 dark:border-white/5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col text-center items-center`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center p-2 mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <img src={social.img} alt={social.platform} className="w-full h-full object-contain" />
                </div>

                <h3 className="text-xl font-bold text-card-foreground mb-2">
                  {social.platform}
                </h3>

                <p className="text-sm text-foreground/70 mb-6 flex-grow">
                  {social.desc}
                </p>

                <a
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-2.5 px-4 text-white text-sm font-semibold rounded-xl bg-gradient-to-r ${social.btnGradient} hover:shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]`}
                >
                  Visit Profile
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Connect;


