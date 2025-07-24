import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";
import Image from "next/image";
import { notFound } from "next/navigation";

interface NewsArticle {
  id: string;
  title: string;
  date: string;
  author: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
}

// Mock data for news articles
const newsArticles: NewsArticle[] = [
  {
    id: "cultural-summit-2023",
    title: "Indonesia dan Prancis Perkuat Kolaborasi Budaya melalui Kerja Sama Strategis di Bidang Perfilman",
    date: "July 16, 2025",
    author: "Culture Summit Team",
    content: `Siaran Berita
Kementerian Kebudayaan
Nomor: 209/Sipers/K4/HM.01.00/202
 
 
Indonesia dan Prancis Perkuat Kolaborasi Budaya melalui Kerja Sama Strategis di Bidang Perfilman
 
Paris, 16 Juli 2025 - Dalam rangkaian kunjungan kerja ke Paris, Menteri Kebudayaan Republik Indonesia, Fadli Zon melakukan Dialog Strategis Kebudayaan antara Indonesia dan Prancis (15/07) dengan Menteri Kebudayaan Prancis, Madame Rachida Dati. Pertemuan ini dilangsungkan dalam rangka merealisasikan sejumlah kesepakatan bilateral yang terjalin saat kunjungan kenegaraan Madame Rachida Dati ke Indonesia mendampingi Presiden Emmanuel Macron bulan Mei 2025 lalu di Jakarta dan Candi Borobudur.
 
Sebagai tindak lanjut dari nota kesepahaman (MoU) kerja sama budaya antara Indonesia dan Prancis, Kementerian Kebudayaan RI bersama mitra Prancis seperti CNC (Centre national du cinéma et de l'image animée) dan La Fémis (École Nationale Supérieure des Métiers de l'Image et du Son) menjajaki berbagai inisiatif strategis dalam rangka memperkuat jaringan produksi, transfer teknologi, dan pengembangan kapasitas di bidang film.
 
Hadir pula dalam pertemuan tersebut, Menteri Ekonomi Kreatif, Teuku Riefky Harsya dan beberapa perwakilan sineas dan museum serta wakil dari industri kreatif. Menteri Kebudayaan menegaskan keseriusan pemerintah dalam menindaklanjuti perjanjian kerjasama yang telah ditandatangani beberapa waktu lalu. "Pertemuan ini merupakan diskusi lanjutan yang dimulai dari Festival Film Cannes bulan Mei lalu, yang diikuti dengan kunjungan Presiden Macron ke Indonesia serta diskusi-diskusi intensif dengan perwakilan negara Prancis di Indonesia. Diharapkan terjalin yang kongkret sebagai tindak lanjut dari MoU yang telah ditandatangani oleh kedua negara" ujar Fadli Zon.
 
Angga Sasongko, mewakili asosiasi produser mengemukakan bahwa salah satu inspirasi utama adalah model kerja sama CNC dan Korea Selatan melalui Korean Film Academy (KAFA), yang telah berhasil menginisiasi beasiswa dan pertukaran pelajar. Indonesia melihat potensi besar untuk mengadopsi skema serupa, khususnya dengan melibatkan sembilan institusi pendidikan seni di tanah air yang memiliki program studi film, seperti ISI Padang Panjang, IKJ, UMN, dan Institut Kesenian Makassar.
 
Selain jalur pendidikan formal, kerja sama dengan Prancis  ini juga bisa dirancang untuk membuka peluang melalui jalur non-formal seperti MTN (Manajemen Talenta Nasional), dan bekerja sama dengan festival film terkemuka seperti JAFF (Jogja-NETPAC Asian Film Festival), JFW (Jakarta Film Week), Minikino serta festival film lainnya di Indonesia.
 
"Bentuk kerja sama yang potensial dijajaki antara lain residensi tahunan untuk penulis, sutradara, dan produser; dan program pertukaran mahasiswa dan dosen audiovisual yang diperkuat dengan MoU. Untuk ko-produksi, kita perlu mengeksplorasi struktur dan model kerja sama yang telah dilakukan oleh CNC dengan negara lain seperti Korea, untuk diadopsi sesuai kebutuhan industri perfilman di Indonesia," ungkap produser film Jumbo, Angga Sasongko.
 
Senada dengan Angga, Asmara Abigail juga memaparkan beberapa praktik baik hasil ko-produksi dengan Prancis, antara lain Film Setan Jawa karya Garin Nugroho, Autobiography karya Makbul Mubarak. "Ko-produksi ini selain mendorong perluasan target penonton untuk film-film Indonesia, juga dapat mendorong pertukaran budaya melalui film," ujar aktris yang memulai debut film panjangnya di film Setan Jawa.
 
Upaya ini juga akan diperkuat dengan program Ina-France Lab yang telah dimulai pada Jaff Market 2024. Program laboratorium kreatif ini diharapkan menjadi agenda tahunan strategis dalam mempertemukan talenta film Indonesia dan Prancis.
 
Sebagai bagian dari kerja sama ini, direncanakan pula program retrospektif perfilman Indonesia di La Cinémathèque Française, Paris, yang akan menghadirkan film-film pilihan hasil kurasi bersama asosiasi produser film Indonesia.
 
Dengan perumusan kerja sama yang matang dan strategis, Indonesia menargetkan untuk memperkuat kehadiran film-film nasional di berbagai pasar dan platform internasional seperti Busan International Film Festival, Filmart, Festival Cannes, dan Clermont-Ferrand Short Film Festival.
 
Melalui langkah konkret ini, Indonesia dan Prancis bersama-sama membangun jembatan budaya yang berkelanjutan, memperluas ruang kreatif, dan memperkuat ekosistem film global yang inklusif dan kolaboratif.
 
Menutup pertemuan Menbud Fadli Zon mengundang secara resmi Menteri Kebudayaan Prancis untuk hadir dalam perhelatan bidang kebudayaan yang akan diselenggarakan dalam waktu deakt di Bali. "Saya juga mengundang Madame Rachida Dati untuk hadir dalam Forum Chandi Summit 2025 di Sanur, Bali. Forum untuk memperkuat dialog, kolaborasi, dan inovasi dengan seluruh pelaku kebudayaan dari berbagai negara," tutup Menbud.
 
 
------------------------------------

Untuk informasi lebih lanjut:
Kementerian Kebudayaan
 
Telepon: (021) 5725542
Email: info@kemenbud.go.id
Website: https://kemenbud.go.id
Whatsapp Channel: Kementerian Kebudayaan
 
#KementerianKebudayaan #PemajuanKebudayaan`,
    image: "/images/press-release/press-release-1.jpg",
    category: "Cultural Events",
    tags: ["summit", "culture", "international", "diplomacy"]
  },
];

interface NewsDetailPageProps {
  params: {
    id: string;
  };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const article = newsArticles.find(article => article.id === params.id);

  if (!article) {
    notFound();
  }

  return (
    <>
      <HeaderSection />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
          className="relative w-full overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${article.image})` }}
        >
          <div className=" inset-0 bg-black bg-opacity-40" />
          <div className="relative z-10 h-full flex flex-col justify-start items-center">
            <div style={{ height: '9rem' }} className="flex-shrink-0" />
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {article.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-sm md:text-base mb-8">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.author}</span>
                <span>•</span>
                <span>{article.category}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4">
            <article className="prose prose-lg max-w-none">
              <div className="whitespace-pre-line text-gray-700 leading-relaxed text-lg">
                {article.content}
              </div>
            </article>

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back Button */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <a
                href="/news_updates"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                ← Back to News & Updates
              </a>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
