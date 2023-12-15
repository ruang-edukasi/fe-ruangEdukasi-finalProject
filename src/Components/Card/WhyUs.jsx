import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const WhyUs = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        <div className="bg-gradient-to-r from-primary to-indigo-800 p-8 rounded-lg shadow-md transition duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-bold mb-4">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-success mr-1"
            />
            Konten Berkualitas
          </h3>
          <p>
            Kami menyediakan materi pembelajaran yang terstruktur dan disusun
            oleh para profesional di bidangnya untuk memastikan Anda mendapatkan
            pengetahuan yang berkualitas.
          </p>
        </div>
        <div className="bg-gradient-to-r from-primary to-indigo-800 p-8 rounded-lg shadow-md transition duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-bold mb-4">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-success mr-1"
            />
            Fasilitas Interaktif
          </h3>
          <p>
            Pengalaman belajar Anda akan lebih interaktif dengan adanya forum
            diskusi, proyek nyata, serta bimbingan langsung dari instruktur
            berpengalaman.
          </p>
        </div>
        <div className="bg-gradient-to-r from-primary to-indigo-800 p-8 rounded-lg shadow-md transition duration-300 cursor-pointer hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-bold mb-4">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-success mr-1"
            />
            Akses Fleksibel
          </h3>
          <p>
            Kami memberikan akses fleksibel untuk belajar di mana pun dan kapan
            pun sesuai dengan jadwal Anda tanpa batasan waktu dan ruang.
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
