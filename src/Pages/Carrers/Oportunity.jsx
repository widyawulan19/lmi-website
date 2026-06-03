import React, { useState } from "react";
import '../../Style/Carrers/Oportunity.css'
import CareerJobModal from "./CarrerJobModal";
// image 
import pic1 from '../../Assets/ecommerce.jpg'
import pic2 from '../../Assets/ads.jpg'
import pic3 from '../../Assets/contentcreatoe.jpeg'
import pic4 from '../../Assets/webdev.jpeg'

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
    type: "Internship",

    date: "08 March 2024",

    location: "Bandung, Indonesia",
     description:[
        "Membuat Desain terkait Promosi Produk Perusahaan",
        "Membuat Desain/Konten terkait sosial media (Instagram, Facebook, Tiktok dan Youtube)",
        "Mengelola Sosial media Perusahaan",
        "Menginterpretasi keinginan user terkait Desain dan konten"
      ],

    qualifications: [
      "Pendidikan SMK Multimedia/Desain/DKV dan sejenisnya atau punya pengalaman Desain saat SMA/SMK",
      "Bisa desain dengan Canva dan Aplikasi Editing di Smartphone lainnya",
      "Menguasai Aplikasi dan Program Desain (Potoshop, Illustrator, Premier dsb) menjadi nilai tambah",
      "Menguasai dan memahami sosial media sebagai sarana promosi",
      "Memiliki Ide-ide Kreatif",
      "Memiliki komunikasi yang baik dan mampu memahami keinginan user dalam membuat desain dan konten",
      "Dapat bekerja sama secara tim maupun bekerja mandiri",
      "Cepat tanggap dalam menyelesaikan kebutuhan desain",
      "Bersedia bekerja dari Hari Senin - Sabtu dan masuk di Tanggal Merah. Jam kerja : 08.00 - 17.00 WIB Minggu (Libur)"
    ],
    
  },

  {
    id: 3,
    title: "DIGITAL MARKETING ADVERTISER",
    type: "Full Time",

    date: "08 March 2024",

    location: "Bandung, Indonesia",

     description:[
        "WAJIB BISA PEMBUATAN LANDING PAGE WORDPRESS",
        "Membangun, menangani, dan mengelola akun ads perusahaan",
        "Koordinasi dengan team creative content untuk situs web dan akun media sosial",
        "Menjalankan promosi dan kampanye sosial secara teratur dan meninjau kampanye",
        "Berkolaborasi dan melaksanakan kampanye pemasaran digital termasuk SEO/SEM",
        "Memantau perkembangan terbaru di situs dan tren media sosial atau teknologi terkini"
      ],

    qualifications: [
      "Memiliki pengalaman manage digital ads minimal 1 tahun",
      "Memiliki pemahaman mendalam tentang Sosial Media (TikTok, Instagram,Facebook /Meta)",
      "Menguasai digital ads platform (Facebook /Meta Ads, TikTok Ads, Google Ads, E Commerce ads, dll).",
      "Menguasai tools analytics dan database (Excel & Google Analytics).",
      "Bisa membuat Landing Page dari WordPress",
      "Peka dan paham terhadap data, serta terbiasa membuat keputusan berdasarkan metriks.",
      "Mampu untuk Proaktif mengambil inisiatif dan menawarkan solusi kreatif untuk memecahkan masalah",
      "Memiliki sikap yang positif (Attitude yang baik)",
      "Growth mindset yang kuat, memiliki orientasi untuk terus belajar, berkembang, dan menghadapi tantangan dengan sikap positif.",
      "Bersedia ditempatkan di Depok , Pancoran mas",
      "Bersedia masuk bekerja ditanggal merah, Hari kerja Senin - Sabtu Jam 08.00 - 17.00 WIB"
    ],
  },

  {
    id: 4,
    title: "WEB DESIGNER OPPORTUNITY",
    type: "Full Time",

    date: "08 March 2024",

    location: "Bandung, Indonesia",

     description:[
        "Berpengalaman Mendesain Marketplace Store",
        "Mampu membuat Vector",
        "Mampu handle Landing page Elementor",
        "Membuat gambar-gambar yang akan disisipkan kedalam website dengan menggunakan Photoshop dan sebagainya.",
        "Menata Layout untuk pemasangan Banner, Link, Animasi & sebagainya.",
        "Membuat gambar-gambar yang akan disisipkan kedalam website dengan menggunakan Photoshop dan sebagainya.",
        "Mengatur Konten Website sesuai dengan kategori & diintegrasikan dengan link navigasi.",
        "Membangun Website mulai dari halaman depan sampai akhir sesuai dengan struktur web yang dipilih.",
        "Melakukan uji coba setiap halaman & memeriksa kesalahan penulisan HTML, CSS, & sebagainya.",
        "Kerja Work From Office (WFO)!!!",
        "Senin - Sabtu 08.00 - 17.00 (Minggu Libur)"
      ],

    qualifications: [
      "Berpengalaman Mendesain Marketplace Store",
      "Mampu membuat Vector",
      "Mampu handle Landing page Elementor",
      "Membuat gambar-gambar yang akan disisipkan kedalam website dengan menggunakan Photoshop dan sebagainya.",
      "Menata Layout untuk pemasangan Banner, Link, Animasi & sebagainya.",
      "Membuat gambar-gambar yang akan disisipkan kedalam website dengan menggunakan Photoshop dan sebagainya.",
      "Mengatur Konten Website sesuai dengan kategori & diintegrasikan dengan link navigasi.",
      "Membangun Website mulai dari halaman depan sampai akhir sesuai dengan struktur web yang dipilih.",
      "Melakukan uji coba setiap halaman & memeriksa kesalahan penulisan HTML, CSS, & sebagainya.",
      "Kerja Work From Office (WFO)!!!",
      "Senin - Sabtu 08.00 - 17.00 (Minggu Libur)"
    ],
  }
];



function Oportunity() {

  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <section className="jobs-section" id='opportunities'>

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