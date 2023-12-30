function TableHead() {
  return (
    <>
      <thead>
        <tr className="bg-blue-100 text-base text-slate-800">
          <th>No</th>
          <th>ID Pembayaran</th>
          <th>Kategori</th>
          <th>Kelas Premium</th>
          <th className="w-36">Status</th>
          <th>Nomor Akun</th>
          <th>Tanggal Bayar</th>
          <th>Aksi</th>
        </tr>
      </thead>
    </>
  );
}

export default TableHead;
