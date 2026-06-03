import React, { useState } from "react";
import '../../Style/Carrers/Oportunity.css'
import CareerJobModal from "./CarrerJobModal";

const jobs = [
  {
    id: 1,
    title: "E-COMMERCE SPECIALIST",
    type: "Full Time",
    date: "08 March 2024",

    location: "Bandung, Indonesia",

    description:[
        "Memiliki Pengalaman Bekerja di bidang E-commerce",
        "Bertanggung jawab atas keseluruhan penjualan toko online brand beauty di berbagai marketplace e commerce seperti Tokopedia, Shopee, Bukalapak, Lazada, dan lain-lain.",
        "Mencapai target omzet masing-masing toko online.",
        "Mengunjungi PIC kategori marketplace, jelajahi peluang bisnis dan meningkatkan traffic toko dan konversi.",
        "Membuat promosi untuk meningkatkan konversi penjualan dan angka penjualan.",
        "Membuat plan iklan dalam marketplace dan memaksimalkan ROI.",
        "Memimpin dan mendidik tim operation dan customer service"
      ],

    qualifications: [
      "Pendidikan Minimal D3",
      "Pengalaman di Bidang E-commerce lebih dari 3 Tahun",
      "Mengerti dan Mengelola Market Place",
      "Memiliki jiwa salesmanship yang kuat, berfikir strategis dan kreatif",
      "Menguasai Ms. Excel Oriented (Vlookup, IF), Photoshop, Google Apps (Drive, Doc)",
      "Berkepribadian Menyenangkan Dan Mampu Bekerja Baik Secara Individual maupun Dalam Team"
    ],

  },

  {
    id: 2,
    title: "CONTENT CREATOR",
    type: "Full Time",

    date: "08 March 2024",

    location: "Bandung, Indonesia",

    description:
      "Ensure products meet company quality standards.",

    responsibilities: [
      "Inspect products",
      "Monitor production quality",
      "Create reports"
    ],

    requirements: [
      "Attention to detail",
      "Quality assurance experience",
      "Good communication"
    ]
  },

  {
    id: 3,
    title: "DIGITAL MARKETING ADVERTISER",
    type: "Internship",

    date: "08 March 2024",

    location: "Bandung, Indonesia",

    description:
      "Support marketing campaigns and content creation.",

    responsibilities: [
      "Assist social media management",
      "Create content",
      "Market research"
    ],

    requirements: [
      "Student or fresh graduate",
      "Creative",
      "Good communication"
    ]
  },

  {
    id: 4,
    title: "WEB DESIGNER",
    type: "Full Time",

    date: "08 March 2024",

    location: "Bandung, Indonesia",

    description:
      "Lead production activities and ensure efficiency.",

    responsibilities: [
      "Manage production team",
      "Monitor workflow",
      "Improve efficiency"
    ],

    requirements: [
      "Leadership skills",
      "Manufacturing experience",
      "Problem solving"
    ]
  }
];



function Oportunity() {

  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <section className="jobs-section">

      <div className="jobs-header">

        <span>CAREER OPPORTUNITIES</span>

        <h2>
          Find Out How You Could Contribute
        </h2>

        <p>
          Discover opportunities to build a meaningful career
          with Lamonte.
        </p>

      </div>

      <div className="jobs-list">

        {jobs.map((job, index) => (

          <div className="job-row">
            <div className="job-left">

                <h3>{job.title}</h3>

                <div className="job-meta">

                    <span className="type">{job.type} </span> 

                    <span> | {job.location} |</span> 

                    <span>{job.date}</span>

                </div>

            </div>

            <button onClick={() =>
                setSelectedJob(job)
              }>
                Apply →
            </button>

        </div>

        ))}

      </div>

      {selectedJob && (

        <CareerJobModal
          job={selectedJob}
          closeModal={() =>
            setSelectedJob(null)
          }
        />

      )}

    </section>
  );
}

export default Oportunity;