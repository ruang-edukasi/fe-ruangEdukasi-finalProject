function TableHead() {
  return (
    <>
      <thead>
        <tr className="bg-blue-100 text-base text-slate-800">
          <th className="p-3 sm:w-1/12">No</th>
          <th className="p-2 sm:w-2/12">ID Pembayaran</th>
          <th className="p-2 sm:w-2/12">Kategori</th>
          <th className="p-2 sm:w-2/12">Kelas Premium</th>
          <th className="sm:w-2/12">Status</th>
          <th className="p-2 sm:w-1/12">Nomor Akun</th>
          <th className="p-2 sm:w-3/12">Tanggal Bayar</th>
          <th className="p-2 sm:w-2/12">Aksi</th>
        </tr>
      </thead>
    </>
  );
}

export default TableHead;
