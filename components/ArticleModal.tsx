'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface Article {
  id: number
  title: string
  content: string
  date: string
}

export function ArticleModal({ article }: { article: Article }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button variant="link" onClick={() => setIsOpen(true)} className="text-blue-600 hover:underline text-sm font-medium p-0">
        Read more
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{article.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-2">
            <p className="text-sm text-gray-500 mb-4">{article.date}</p>
            <div className="prose prose-sm max-w-none">
            <p className="text-gray-600 mb-4">
                  Dalam dunia web development, tiga teknologi utama menjadi fondasi dari tampilan dan interaktivitas sebuah website: HTML, CSS, dan JavaScript. Ketiganya bekerja bersama untuk menciptakan pengalaman pengguna yang menarik, fungsional, dan responsif. Yuk, kita eksplorasi lebih dalam tentang apa itu HTML, CSS, dan JavaScript serta bagaimana mereka berkontribusi dalam pengembangan front-end.
                  </p>
                  <h1>HTML: Struktur Dasar Halaman Web</h1>
                  <p className="text-gray-600 mb-4">
                  HTML, atau HyperText Markup Language, adalah bahasa markup yang digunakan untuk membuat struktur dasar halaman web. Ia bertindak seperti kerangka bangunan yang menentukan elemen-elemen apa saja yang ada di halaman, seperti judul, paragraf, gambar, atau tabel.
                  </p>
                  <h1>CSS: Mempercantik Halaman Web</h1>
                  <p className="text-gray-600 mb-4">
                  CSS, atau Cascading Style Sheets, adalah teknologi yang bertugas untuk mempercantik halaman web. Jika HTML adalah kerangka, maka CSS adalah dekorasinya. Dengan CSS, kamu bisa menentukan warna, font, tata letak, dan bahkan animasi untuk elemen-elemen HTML.      
                  </p>
                  <h1>JavaScript: Menambahkan Interaktivitas</h1>
                  <p className="text-gray-600 mb-4">
                  JavaScript adalah bahasa pemrograman yang digunakan untuk membuat halaman web menjadi interaktif. Dengan JavaScript, kamu bisa menambahkan fitur seperti animasi, validasi formulir, atau bahkan aplikasi web kompleks seperti game.
                  </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

