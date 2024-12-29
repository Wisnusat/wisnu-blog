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
              <p>{article.content}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

