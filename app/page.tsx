import Layout from '@/components/Layout'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ArticleModal } from '@/components/ArticleModal'

const articles = [
  {
    id: 1,
    title: 'HTML, CSS, dan JavaScript: Pondasi Front-End Web Development',
    excerpt: 'Artikel ini memberikan gambaran singkat tentang teknologi dasar pengembangan web: HTML, CSS, dan JavaScript...',
    content: 'Dalam dunia web development, tiga teknologi utama menjadi fondasi dari tampilan dan interaktivitas sebuah website: HTML, CSS, dan JavaScript. Ketiganya bekerja bersama untuk menciptakan pengalaman pengguna yang menarik, fungsional, dan responsif. Yuk, kita eksplorasi lebih dalam tentang apa itu HTML, CSS, dan JavaScript serta bagaimana mereka berkontribusi dalam pengembangan front-end.',
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

