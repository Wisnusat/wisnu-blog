import Layout from '@/components/Layout'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ArticleModal } from '@/components/ArticleModal'

const articles = [
  {
    id: 1,
    title: 'HTML, CSS, dan JavaScript: Pondasi Front-End Web Development',
    excerpt: 'Artikel ini memberikan gambaran singkat tentang teknologi dasar pengembangan web: HTML, CSS, dan JavaScript...',
    content: 'Artikel ini membahas lebih dalam tentang dasar-dasar pengembangan web: HTML untuk struktur, CSS untuk gaya, dan JavaScript untuk interaktivitas. Pelajari bagaimana ketiga teknologi ini menjadi tulang punggung situs web modern. HTML menyediakan kerangka, CSS mempercantik tampilan, dan JavaScript menambahkan fitur dinamis. Baik kamu seorang pemula atau ingin menyegarkan kembali pengetahuanmu, menguasai alat-alat ini akan membuka jalan menuju kesuksesan.',
    date: '2024-12-29'
  }  
]

export default function Home() {
  return (
    <Layout>
      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome to My Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hi, I'm Wisnu Satrio. This is my personal blog where I share my thoughts and experiences on Technologies & World.
          </p>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Latest Articles</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <Card key={article.id}>
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <ArticleModal article={article} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

