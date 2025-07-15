import DataImage from "./data";
import { listTools, listProyek } from "./data";

export default function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Lorem ipsum dolor sit, amet consectetur 🔥</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya Darell rangga
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            doloremque sint dignissimos nisi soluta porro delectus earum quae
            atque nam. Quisquam exercitationem optio commodi magnam veritatis
            possimus quod ea. Est autem, impedit quos officia facere quidem sunt
            adipisci? Magni, perspiciatis iste ipsa rerum eos distinctio
            tenetur. Asperiores tempora quidem iste repellendus sint? Voluptas,
            ipsam fugiat corporis inventore impedit velit mollitia repellat
            saepe aliquam sequi voluptatem ullam id quasi! Deserunt eligendi
            totam reiciendis numquam consequatur quae magni quisquam distinctio,
            repellat atque repellendus ipsum incidunt, quasi dolore commodi iure
            aspernatur voluptas culpa.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
              href="#"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
              href="#project"
            >
              Lihat Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero"
          className="w-[500px] md:ml-auto rounded-2xl  animate__animated animate__fadeInUp animate__delay-3s"
          loading="lazy"
        />
      </div>
      <div>
        {/* Tentang kami  */}
        <div className="tentang mt-32 py-10" id="about">
          <div
            className="xl:w-2/3 lg:w3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img
              src={DataImage.HeroImage}
              alt="Hero"
              className="w-12 rounded-md mb-10 sm:hidden"
            />
            <p className="text-base/loose mb-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda doloribus modi earum nemo magni nisi voluptatum
              aspernatur. Rerum modi dignissimos et, qui ullam repudiandae
              doloribus magni cum laborum magnam perspiciatis, dolorem inventore
              maiores quia amet nostrum eos quibusdam. Esse, nesciunt.
            </p>
            <div className="flex items-center justify-between">
              <img
                src={DataImage.HeroImage}
                alt="Hero"
                className="w-12 rounded-md sm:block hidden"
                loading="lazy"
              />
              <div className="flex items-center gap-6">
                <div>
                  <h1 className="text-4xl mb-1">
                    45<span className="text-violet-500">+</span>
                  </h1>
                  <p>Project Selesai</p>
                </div>
                <div>
                  <h1 className="text-4xl mb-1">
                    4<span className="text-violet-500">+</span>
                  </h1>
                  <p>Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>

          <div className="tools mt-32">
            <h1
              className="text-4xl/snug font-bold mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Tools Yang Di Pakai
            </h1>
            <p
              className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-once="true"
            >
              Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan
              design atau website
            </p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {listTools.map((tools) => (
                <div
                  className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                  key={tools.id}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={tools.dad}
                  data-aos-once="true"
                >
                  <img
                    src={tools.gambar}
                    alt="ToolsImg"
                    className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold">{tools.nama}</h4>
                    <p className="opacity-50">{tools.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Tentang kami end */}

        {/* Proyek  */}
        <div className="project mt-32 py-10" id="project">
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Project
          </h1>
          <p
            className="text-base/loose text-center opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Beberapa Project Yang Saya Buat
          </p>
          <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map((project) => (
              <div
                key={project.id}
                className="p-4 bg-zinc-800 rounded-md"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={project.dad}
                data-aos-once="true"
              >
                <img src={project.gambar} alt="projectImg" loading="lazy" />
                <div>
                  <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
                  <p className="text-base/loose mb-4">{project.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <p
                        className="py-1 px-3 border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                        key={index}
                      >
                        {tool}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a
                      href="#"
                      className="bg-violet-700 p-3 rounded-lg block border-zinc-600 hover:bg-violet-600"
                    >
                      Lihat Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Proyek end */}

        {/* Kontak  */}

        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl  mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Mari terhubung dengan saya
          </p>
          <form
            action="https://formspree.io/f/movlqwvd"
            method="post"
            className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
            autoComplete="off"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Nama lengkap</label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Masukan nama"
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Masukan email"
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold" htmlFor="pesan">
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  id="pesan"
                  cols="45"
                  rows="7"
                  placeholder="Masukan pesan"
                  className="border border-zinc-500 p-2 rounded-md"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border-zinc-600 hover:bg-violet-600"
                >
                  Kirim Pesan
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Kontak end */}
      </div>
    </>
  );
}
