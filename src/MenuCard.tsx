export type Menu = {
  id: number
  nama: string
  kategori: 'Makanan' | 'Minuman'
  harga: number
}

type MenuCardProps = {
  menu: Menu
  jumlah: number
  onTambah: (id: number) => void
  onKurang: (id: number) => void
  onReset: (id: number) => void
}

export function formatRupiah(nilai: number) {
  return 'Rp ' + nilai.toLocaleString('id-ID')
}

export default function MenuCard({ menu, jumlah, onTambah, onKurang, onReset }: MenuCardProps) {
  const subtotal = menu.harga * jumlah

  return (
    <li className="kartu">
      <h2>{menu.nama}</h2>
      <span className="kategori">{menu.kategori}</span>
      <p className="harga">{formatRupiah(menu.harga)}</p>
      <p>Jumlah: {jumlah}</p>
      <p>Subtotal: {formatRupiah(subtotal)}</p>
      <div className="aksi">
        <button type="button" onClick={() => onTambah(menu.id)}>
          Tambah
        </button>
        <button type="button" onClick={() => onKurang(menu.id)} disabled={jumlah === 0}>
          Kurang
        </button>
        <button type="button" onClick={() => onReset(menu.id)}>
          Reset
        </button>
      </div>
    </li>
  )
}
