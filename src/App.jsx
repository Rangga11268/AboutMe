import DataImage from "./data";

export default function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero"
              className="w-10 rounded-md"
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
              href="#"
            >
              Lihat Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero"
          className="w-[500px] md:ml-auto rounded-2xl"
        />
      </div>
      <div>
        {/* Tentang kami  */}
        <div className="tentang mt-32 py-10">
          <div className="xl:w-2/3 lg:w3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
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
        </div>
        {/* Tentang kami end */}
      </div>
    </>
  );
}
