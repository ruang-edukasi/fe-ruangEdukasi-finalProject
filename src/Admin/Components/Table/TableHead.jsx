function TableHead() {
  return (
    <>
      <thead>
        <tr className="bg-blue-100 text-base text-slate-800">
          <th className="p-3 sm:w-1/12">No</th>
          <th className="p-2 sm:w-2/12">Nama Instruktur</th>
          <th className="p-2 sm:w-2/12">Kategori</th>
          <th className="p-2 sm:w-2/12">Nama Kelas</th>
          <th className="p-2 sm:w-1/12">Tipe Kelas</th>
          <th className="p-2 sm:w-1/12">Level</th>
          <th className="p-2 sm:w-2/12">Harga Kelas</th>
          <th className="p-2 sm:w-2/12">Aksi</th>
          <th className="p-2 sm:w-2/12"></th>
        </tr>
      </thead>
    </>
  );
}

export default TableHead;
