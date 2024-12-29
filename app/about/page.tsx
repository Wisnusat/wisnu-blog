import Layout from '@/components/Layout'
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">About Me</h1>
        <Card>
          <CardContent className="prose prose-gray max-w-none pt-6">
            <p>
              Hello! I'm Wisnu Satrio, a Student based in Bandung. 
              I'm passionate about Web Development and other technology.
            </p>
            <p>
              I have 4 years of experience in Frontend web development, specializing in Nextjs and Laravel. 
            </p>
            <p>
              When I'm not working, you can find me doing Basketball or Football. 
              I also enjoy learn some new framework and language.
            </p>
            <p>
              Feel free to connect with me on Instagram @wisnsatrioo or drop me an email at batarawisnu96@gmail.com.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

