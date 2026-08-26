import { motion } from 'motion/react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function CarouselStudio() {
  const [judul, setJudul] = useState('');
  const [jumlahSlide, setJumlahSlide] = useState('');
  const [cta, setCta] = useState('');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerate = () => {
    const prompt = `# AI Creative Director & Instagram Carousel Designer

Anda adalah **AI Creative Director** dan **Designer Carousel Instagram profesional** yang mampu menghasilkan desain berkualitas agency.

---

# WAJIB MENGIKUTI DESAIN REFERENSI

Saya akan mengunggah **1 gambar sebagai REFERENSI DESAIN**.

**WAJIB mengikuti desain referensi semirip mungkin (95–100%)**.

Gunakan gambar referensi sebagai **acuan utama seluruh keputusan desain**, bukan hanya sebagai inspirasi.

Targetnya adalah menghasilkan desain yang terlihat seperti dibuat oleh **designer yang sama**, berasal dari **design system yang sama**, dan memiliki **DNA visual yang identik**.

## JANGAN

* Jangan membuat layout baru.
* Jangan membuat versi dengan style berbeda.
* Jangan menggunakan template generik.
* Jangan mengubah struktur visual.
* Jangan mengubah karakter desain.
* Jangan membuat interpretasi kreatif yang berbeda dari referensi.

## WAJIB Mengikuti

* Layout
* Komposisi
* Grid System
* Editorial Structure
* Visual Hierarchy
* Hierarki Tipografi
* Ukuran Headline
* Ukuran Subheadline
* Ukuran Body Text
* Ketebalan Font
* Alignment
* Margin
* Spacing
* White Space
* Negative Space
* Visual Rhythm
* Shape
* Card
* Border
* Outline
* Shadow
* Layering
* Depth
* Background
* Color Palette
* Accent Color
* Decorative Elements
* Icon Style
* Badge
* CTA
* Numbering
* Highlight Text
* Positioning
* Crop
* Framing
* Hero Composition
* Overall Aesthetic
* Premium Feel
* Minimalism Level
* Editorial Style

## Yang Boleh Berubah

HANYA:

* Copywriting
* Foto
* Ilustrasi
* Icon
* Produk
* Warna (jika diminta secara khusus)

Selain itu **WAJIB mempertahankan bahasa visual dari referensi.**

---

# GAYA VISUAL

Ikuti gaya visual poster referensi semirip mungkin.

Meliputi:

* Layout & Composition
* Editorial Grid
* Asymmetrical Layout
* Split Layout
* Hierarchy Typography
* Bold Headline
* Medium Subheadline
* Small Body Text
* Font Weight
* White Space
* Visual Balance
* Rounded Card / Sharp Corner / Pill
* Icon Style
* Illustration Style
* Photo Style
* Studio Lighting
* Indonesian Talent
* Cutout Image
* Full Body / Half Body
* Subject Position
* Overlapping
* Layering
* Decorative Shape
* Ribbon
* Circle
* Blob
* Abstract Shape
* Border
* Outline
* Shadow
* Glassmorphism
* Gradient
* Flat Design
* Background Style
* CTA Style
* Badge Style
* Numbering Style
* Highlight Style
* Information Card
* Branding Style

Referensi branding yang boleh dijadikan acuan visual:

* Apple
* Swiss Editorial
* Modern Healthcare
* Canva Premium
* Corporate Minimal
* Luxury Editorial

---

# ATURAN SPACING (WAJIB)

Gunakan layout yang memiliki ruang napas.

* Margin sekitar 10% dari setiap sisi.
* Maksimal area konten 80% dari canvas.
* Jangan memenuhi seluruh canvas.
* Jangan membuat desain terlalu padat.
* Prioritaskan keterbacaan.
* White space harus mengikuti referensi.
* Hero image maksimal mengisi 70–80% area tengah.
* Header kecil.
* Footer kecil.
* Semua elemen harus memiliki jarak yang konsisten.

---

# SAFE ZONE INSTAGRAM (WAJIB)

## Ukuran Canvas

1080 × 1350 px

Rasio 4 : 5

---

## Safe Zone

Instagram akan memotong bagian atas dan bawah saat preview feed.

Karena itu seluruh elemen penting WAJIB berada di area aman.

Area Aman:

Y = 135 px

hingga

Y = 1215 px

Area berikut TIDAK BOLEH berisi elemen penting:

* 135 px paling atas
* 135 px paling bawah

Yang WAJIB berada di Safe Zone:

* Headline
* Subheadline
* Produk
* Foto wajah
* Model
* CTA
* Harga
* Badge
* Informasi utama
* Logo (jika memang diminta)
* Nomor slide

Tidak boleh ada elemen penting keluar dari safe area.

---

# KUALITAS VISUAL

Harus menghasilkan desain dengan kualitas:

* Ultra Clean
* Retina Quality
* High-End Editorial
* Premium
* Agency Quality
* Pixel Perfect
* Modern
* Conversion Focused
* Instagram Ready
* Professional
* Sharp
* High Resolution

---

# LARANGAN (WAJIB DIPATUHI)

**DILARANG ADA BRANDINGAN ATAU LOGO BRAND ATAU SEJENISNYA!!!**
**JANGAN menambahkan identitas apa pun yang tidak diminta pada desain.**

Dilarang memasukkan:

* Logo
* Nama Brand
* Nama Perusahaan
* Watermark
* Signature
* Credit
* Website
* URL
* QR Code
* Nomor Telepon
* Nomor WhatsApp
* Email
* Instagram
* Facebook
* TikTok
* YouTube
* X / Twitter
* LinkedIn
* Alamat
* Copyright
* Trademark
* Identitas perusahaan apa pun

Jika pada gambar referensi terdapat:

* Logo
* Nama Brand
* Watermark
* Website
* Nomor Telepon
* Email
* Sosial Media
* QR Code

maka **WAJIB DIHAPUS** dan **TIDAK BOLEH ditampilkan kembali** pada hasil akhir.

Ganti area tersebut dengan negative space atau elemen dekoratif yang mengikuti desain referensi.

**JANGAN mengarang identitas apa pun.**

Template harus benar-benar **brand-neutral**.

---

# OUTPUT

Buat desain poster/carousel Instagram menggunakan copywriting yang saya berikan.

WAJIB:

* Mengikuti desain referensi semirip mungkin (95–100%).
* Menjaga layout dan bahasa visual tetap identik dengan referensi.
* Menggunakan safe zone Instagram dengan benar.
* Menjaga margin dan whitespace tetap rapi.
* Tidak ada elemen yang terpotong.
* Tidak ada logo, nama brand, watermark, website, email, nomor telepon, QR Code, atau media sosial.
* Siap diposting ke Instagram tanpa perlu revisi tata letak.
* DILARANG ADA BRANDINGAN ATAU LOGO BRAND ATAU SEJENISNYA!!!

COPYWRITINGNYA:

==================================================

# INFORMASI CAROUSEL

Judul Carousel:

${judul}

Jumlah Slide:

${jumlahSlide}

Call To Action (CTA):

${cta}

==================================================

# COPYWRITING

Berdasarkan judul carousel di atas, buat sendiri copywriting carousel Instagram yang lengkap.

WAJIB:

- Buat copywriting yang relevan dengan judul.
- Jangan meminta informasi tambahan.
- Gunakan Bahasa Indonesia yang natural, profesional, edukatif, dan mudah dipahami.
- Jangan menggunakan placeholder.
- Jangan mengulang isi antar slide.
- Distribusikan informasi secara proporsional ke dalam tepat ${jumlahSlide} slide.
- Slide pertama WAJIB memiliki hook yang sangat kuat agar menarik perhatian.
- Slide terakhir WAJIB berisi penutup yang kuat dan menggunakan CTA berikut:

${cta}

==================================================

# STRUKTUR CAROUSEL

WAJIB menghasilkan tepat ${jumlahSlide} slide.

Nomori setiap slide secara berurutan:

Slide 1
Slide 2
Slide 3

...

hingga

Slide ${jumlahSlide}

Setiap slide WAJIB memiliki:

- Headline
- Subheadline (jika diperlukan)
- Body Copy (jika diperlukan)

Slide pertama berfungsi sebagai Hook.

Slide terakhir WAJIB menggunakan CTA berikut:

${cta}

==================================================

WAJIB tetap mengikuti desain referensi pada SELURUH slide.

Setiap slide HARUS mempertahankan:

- Layout
- Komposisi
- Grid System
- Typography
- Hierarchy
- Spacing
- White Space
- Visual Rhythm
- Color Palette
- Decorative Elements
- Icon Style
- Badge Style
- CTA Style
- Background Style
- Overall Aesthetic

Seluruh slide harus terlihat seperti berasal dari design system yang sama dan dibuat oleh designer yang sama.

Perbedaan antar slide HANYA pada:

- Copywriting
- Foto
- Ilustrasi
- Icon
- Produk
- Nomor Slide

==================================================`;

    const cleanPrompt = prompt
      .replace(/[#*_]/g, '')
      .replace(/-{3,}/g, '')
      .replace(/={3,}/g, '');

    setGeneratedPrompt(cleanPrompt);
  };

  const copyToClipboard = async () => {
    if (!generatedPrompt) return;
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="pt-32 md:pt-48 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center md:items-start text-center md:text-left gap-6 mb-16"
      >
        <p className="font-sans text-[11px] md:text-[13px] font-medium tracking-[0.2em] text-[#2b2b2bcc] uppercase">
          (02) Carousel Studio
        </p>
        <h1 className="font-serif italic text-[42px] md:text-[80px] leading-[0.9] tracking-[-0.04em] text-[#2b2b2b]">
          Generator Prompt AI untuk Carousel Instagram
        </h1>
        <p className="font-sans text-[14px] md:text-[16px] leading-[1.6em] text-[#2b2b2bcc] max-w-2xl">
          Ubah copywriting menjadi prompt AI untuk membuat carousel Instagram profesional dengan struktur visual yang rapi, menarik, dan siap dipublikasikan.
        </p>
        
        <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
          <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1.5 border border-black/10 shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/ChatGPT-Logo.png/1920px-ChatGPT-Logo.png?_=20230814075517" alt="ChatGPT" className="w-full h-full object-contain" />
            </div>
            <span className="text-[14px] text-[#2b2b2b] font-medium">ChatGPT</span>
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1.5 border border-black/10 shadow-sm">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Pinterest" className="w-full h-full object-contain" />
            </div>
            <span className="text-[14px] text-[#2b2b2b] font-medium">Pinterest</span>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="w-full bg-white/50 backdrop-blur-xl border border-black/10 rounded-[24px] p-6 md:p-12 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.05)]"
      >
        <form className="flex flex-col gap-8" onSubmit={(e) => { e.preventDefault(); handleGenerate(); }}>
          <div className="flex flex-col gap-3">
            <label className="font-sans text-[13px] font-medium tracking-wide text-[#2b2b2b] uppercase">
              Judul Carousel
            </label>
            <input 
              type="text"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              className="w-full bg-white border border-black/10 rounded-[12px] p-4 text-[15px] text-[#2b2b2b] placeholder:text-black/30 focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/30 transition-all"
              placeholder="Contoh: 7 Tanda Anak Siap Masuk Sekolah"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="font-sans text-[13px] font-medium tracking-wide text-[#2b2b2b] uppercase">
              Jumlah Slide (Minimal 2, Maksimal 10)
            </label>
            <input 
              type="text"
              value={jumlahSlide}
              onChange={(e) => setJumlahSlide(e.target.value)}
              className="w-full bg-white border border-black/10 rounded-[12px] p-4 text-[15px] text-[#2b2b2b] placeholder:text-black/30 focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/30 transition-all"
              placeholder="Contoh: 04"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="font-sans text-[13px] font-medium tracking-wide text-[#2b2b2b] uppercase">
              Call To Action (CTA)
            </label>
            <input 
              type="text"
              value={cta}
              onChange={(e) => setCta(e.target.value)}
              className="w-full bg-white border border-black/10 rounded-[12px] p-4 text-[15px] text-[#2b2b2b] placeholder:text-black/30 focus:outline-none focus:border-black/30 focus:ring-1 focus:ring-black/30 transition-all"
              placeholder="Contoh: Klik Link di Bio"
            />
          </div>

          <button 
            type="submit"
            className="group mt-4 inline-flex items-center justify-center gap-2 bg-[#2b2b2b] text-white rounded-[12px] py-4 px-8 font-sans text-[14px] font-medium tracking-wide uppercase transition-all hover:bg-black hover:scale-[1.02] active:scale-95 w-full md:w-auto md:self-start"
          >
            Generate Prompt
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </form>

        {generatedPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-sans text-[16px] font-medium text-[#2b2b2b]">Hasil Prompt:</h3>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-black/5 hover:bg-black/10 rounded-[8px] text-[13px] font-medium text-[#2b2b2b] transition-colors"
              >
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-green-600">Berhasil Disalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Salin Prompt</span>
                  </>
                )}
              </button>
            </div>
            <div className="relative group">
              <textarea
                readOnly
                value={generatedPrompt}
                className="w-full h-[400px] bg-[#f8f8f8] border border-black/10 rounded-[12px] p-6 text-[14px] font-mono leading-[1.6em] text-[#2b2b2b] focus:outline-none resize-y"
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

