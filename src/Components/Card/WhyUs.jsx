import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faUsers,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

const WhyUs = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="p-8 rounded-lg shadow-md">
          <FontAwesomeIcon
            icon={faMedal}
            className="text-4xl text-gray-600 mb-2"
          />
          <h3 className="text-xl text-primary font-bold mb-1">
            Konten Berkualitas
          </h3>
          <p>
            Materi pembelajaran yang terstruktur dan disusun oleh para
            profesional di bidangnya.
          </p>
        </div>
        <div className="p-8 rounded-lg shadow-md">
          <FontAwesomeIcon
            icon={faUsers}
            className="text-4xl text-gray-600 mb-2"
          />
          <h3 className="text-xl text-primary font-bold mb-1">
            Fasilitas Interaktif
          </h3>
          <p>
            Pengalaman belajar lebih interaktif dengan adanya forum diskusi,
            proyek nyata.
          </p>
        </div>
        <div className="p-8 rounded-lg shadow-md">
          <FontAwesomeIcon
            icon={faLaptopCode}
            className="text-4xl text-gray-600 mb-2"
          />
          <h3 className="text-xl text-primary font-bold mb-1">
            Akses Fleksibel
          </h3>
          <p>Akses fleksibel untuk belajar di mana pun dan kapan pun.</p>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
