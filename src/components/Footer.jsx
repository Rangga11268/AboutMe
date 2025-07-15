export default function Footer() {
  return (
    <div className="mt-32 py-4 md:flex-row flex-col gap-6 md:gap-0 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Portofolio</h1>
      <div className="flex gap-2">
        <a href="#home">Beranda</a>
        <a href="#about">Tentang</a>
        <a href="#project">Project</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/Rangga11268" target="blank">
          <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/darellrangga17/" target="blank">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/darell-rangga-1320b634b/"
          target="blank"
        >
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>
        <a href="https://x.com/sanjaati1" target="blank">
          <i className="ri-twitter-fill ri-2x"></i>
        </a>
        <a href="https://www.youtube.com/@darellrangga6466" target="blank">
          <i className="ri-youtube-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
}
