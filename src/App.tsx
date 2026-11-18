import { useState } from 'react'
import MenuCard from './MenuCard'
import type { Menu } from './MenuCard'
import './index.css'

const daftarMenu: Menu[] = [
  { id: 1, nama: 'Nasi Goreng', kategori: 'Makanan', harga: 15000 },
  { id: 2, nama: 'Mie Ayam', kategori: 'Makanan', harga: 12000 },
  { id: 3, nama: 'Es Teh', kategori: 'Minuman', harga: 5000 },
  { id: 4, nama: 'Soto Ayam', kategori: 'Makanan', harga: 18000 },
  { id: 5, nama: 'Jus Jeruk', kategori: 'Minuman', harga: 8000 },
]

// Jumlah pesanan disimpan per ID menu, semuanya mulai dari 0.
type Jumlah = Record<number, number>
const jumlahAwal: Jumlah = Object.fromEntries(daftarMenu.map(menu => [menu.id, 0]))

export default function App() {
  const [jumlah, setJumlah] = useState<Jumlah>(jumlahAwal)

  function ubahJumlah(id: number, perubahan: (lama: number) => number) {
    setJumlah(sebelumnya => ({ ...sebelumnya, [id]: perubahan(sebelumnya[id]) }))
  }

  function tambah(id: number) {
    ubahJumlah(id, lama => lama + 1)
  }

  function kurang(id: number) {
    ubahJumlah(id, lama => Math.max(0, lama - 1))
  }

  function reset(id: number) {
    ubahJumlah(id, () => 0)
  }

  return (
    <main>
      <header className="judul">
        <h1>Kantin Kampus</h1>
        <p>Menu tersedia untuk mahasiswa dan dosen.</p>
      </header>

      <p className="info">Tersedia {daftarMenu.length} jenis menu</p>

      <ul className="grid-menu">
        {daftarMenu.map(menu => (
          <MenuCard
            key={menu.id}
            menu={menu}
            jumlah={jumlah[menu.id]}
            onTambah={tambah}
            onKurang={kurang}
            onReset={reset}
          />
        ))}
      </ul>
    </main>
  )
}
