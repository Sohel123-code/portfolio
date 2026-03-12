import React from 'react';

// Import Hackathons & Events PDFs
import innoyudhCert from '../assets/Innoyudh .pdf';
import gdgDevFestCert from '../assets/gdg dev fest.pdf';
import pistonCupCert from '../assets/piston cup hacakthon .pdf';

// Import Courses PDFs
import microsoft1Cert from '../assets/MICROSOFT-1.PDF';
import microsoft2Cert from '../assets/MICROSOFT-2.PDF';
import microsoft3Cert from '../assets/MICROSOFT-3.PDF';
import ssdlcCert from '../assets/ssdlc .pdf';

// Import Achievements PDFs
import codeChefAchievement from '../assets/code chef achievement.pdf';
import hackerRankAchievement from '../assets/hacker rank achievement .pdf';
import leetcodeAchievement from '../assets/leetcode achievement .pdf';
import promptWarWinner from '../assets/certificates/Prompt war winner.pdf';

// Certificate data with categories
const certificates = [
  // Hackathons & Events
  {
    id: 1,
    title: 'Innoyudh Certificate',
    issuer: 'Innoyudh',
    date: '2025',
    pdfPath: innoyudhCert,
    description: 'Innoyudh hackathon participation ,In NSRIT college Visakhapatnam on 12th december 2025',
    category: 'hackathons',
  },
  {
    id: 2,
    title: 'GDG Dev Fest',
    issuer: 'Google Developer Groups',
    date: '2025',
    pdfPath: gdgDevFestCert,
    description: 'Google developer group (GDG)  Dev Fest participation in Gitam University visakhapatnam ',
    category: 'events',
  },
  {
    id: 3,
    title: 'Piston Cup Hackathon',
    issuer: 'Piston Cup',
    date: '2025',
    pdfPath: pistonCupCert,
    description: 'Piston Cup hackathon participation, which was held in Vignans institute of technology visakhapatnam',
    category: 'hackathons',
  },
  // Courses
  {
    id: 4,
    title: 'Microsoft Certificate 1',
    issuer: 'Microsoft',
    date: '2025',
    pdfPath: microsoft1Cert,
    description: 'Microsoft -Azure cloud computing course certification by Microsoft',
    category: 'courses',
  },
  {
    id: 5,
    title: 'Microsoft Certificate 2',
    issuer: 'Microsoft',
    date: '2025',
    pdfPath: microsoft2Cert,
    description: 'Microsoft-Azure cloud computing course certification-2 by Microsoft',
    category: 'courses',
  },
  {
    id: 6,
    title: 'Microsoft Certificate 3',
    issuer: 'Microsoft',
    date: '2025',
    pdfPath: microsoft3Cert,
    description: 'Microsoft -Azure cloud computing course certification-3 by Microsoft',
    category: 'courses',
  },
  {
    id: 7,
    title: 'SSDLC Certificate',
    issuer: 'CDAC and Ministry of electronics and information technology',
    date: '2025',
    pdfPath: ssdlcCert,
    description: 'SSDLC Conference  held in gitam university visakhapatnam by IIT Bhilai , and CDAC corporation',
    category: 'events',
  },
  // Achievements
  {
    id: 8,
    title: 'CodeChef Gold Badge',
    issuer: 'CodeChef',
    date: '2025',
    pdfPath: codeChefAchievement,
    description: 'Gold Badge achievement  as participated in 50+ contests on CodeChef',
    category: 'achievements',
  },
  {
    id: 9,
    title: 'HackerRank Achievement',
    issuer: 'HackerRank',
    date: '2025',
    pdfPath: hackerRankAchievement,
    description: 'HackerRank achievement certificate',
    category: 'achievements',
  },
  {
    id: 10,
    title: 'LeetCode 50 days-Badge',
    issuer: 'LeetCode',
    date: '2025',
    pdfPath: leetcodeAchievement,
    description: ' 50-days consistency in problem solving on LeetCode ',
    category: 'achievements',
  },
  {
    id: 11,
    title: 'Prompt War Winner',
    issuer: 'Unstop Igniters Club - VIIT',
    date: '2025',
    pdfPath: promptWarWinner,
    description: 'Winner of the Prompt War Event.',
    category: 'achievements',
  },
];

// Category labels mapping
const categoryLabels = {
  hackathons: 'Hackathon & Event',
  courses: 'Course',
  achievements: 'Achievement',
};

function CertificateCard({ certificate, index }) {
  const categoryLabel = categoryLabels[certificate.category] || certificate.category;

  return (
    <div
      className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out reveal border border-primary/10 hover:border-primary/30 group hover:-translate-y-1 flex flex-col"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* PDF Preview */}
      <div className="space-y-3 mb-4">
        <div className="relative w-full h-64 rounded-lg overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:border-primary/40 transition-all duration-300">
          <iframe
            src={`${certificate.pdfPath}#view=FitH&toolbar=0&navpanes=0`}
            className="w-full h-full"
            title={`${certificate.title} preview`}
            style={{ border: 'none' }}
            loading="lazy"
          />
        </div>
        {/* Category Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
            {categoryLabel}
          </span>
        </div>
      </div>

      {/* Certificate Info */}
      <div className="space-y-4 flex-grow flex flex-col">
        <div className="transition-transform duration-300 group-hover:translate-x-1">
          <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {certificate.title}
          </h3>
          <p className="text-sm text-card-foreground/70 mb-1">
            <span className="font-semibold">Issuer:</span> {certificate.issuer}
          </p>
          <p className="text-xs text-card-foreground/60 mb-3">
            <span className="font-semibold">Date:</span> {certificate.date}
          </p>
          {certificate.description && (
            <p className="text-xs text-card-foreground/80 leading-relaxed">{certificate.description}</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2 mt-auto">
          <a
            href={certificate.pdfPath}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 text-sm"
          >
            View
          </a>
          <a
            href={certificate.pdfPath}
            download
            className="flex-1 text-center px-4 py-2 bg-secondary/10 text-secondary border border-secondary/40 rounded-lg font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 text-sm"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

function Certificates() {
  // Calculate total count
  const totalCount = certificates.length;

  return (
    <section className="py-24">
      <div className="text-center mb-12 reveal">
        <h2 className="text-4xl font-bold">My Certificates</h2>
        <p className="text-lg text-foreground/70 mt-2">A collection of my achievements and certifications.</p>
        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />

        {/* Total Count Display */}
        <div className="mt-6 mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
            <span className="text-2xl">📜</span>
            <span className="text-lg font-bold text-foreground">
              Total Certificates: <span className="text-primary">{totalCount}</span>
            </span>
          </div>
        </div>
      </div>

      {/* All Certificates - Grid Layout (Side by Side) */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate, index) => (
          <CertificateCard key={certificate.id} certificate={certificate} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Certificates;
