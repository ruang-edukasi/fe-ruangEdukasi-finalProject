const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-indigo-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Tentang Kami</h2>
            <p className="text-sm">
              Ruang Edukasi adalah platform kursus online yang bertujuan untuk
              memberikan akses kursus berkualitas kepada siapa pun, di mana pun.
              Kami menawarkan berbagai kursus yang disusun oleh para ahli di
              bidang mereka.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Kontak</h2>
            <ul className="text-sm">
              <li>Email: ruangedukasi@gmail.com</li>
              <li>Telepon: 021-5038-7070</li>
              <li>
                Alamat: Jl. BSD Green Office Park Jl. BSD Grand Boulevard,
                Sampora, BSD, Kabupaten Tangerang, Banten 15345
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-primary" />
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} Ruang Edukasi - Oleh Tim B20 -
          FEJS-3 x BEJS-2 | Hak Cipta Dilindungi
        </div>
      </div>
    </footer>
  );
};

export default Footer;
