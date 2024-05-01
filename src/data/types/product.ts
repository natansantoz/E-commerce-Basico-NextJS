// {
//   id: 2,
//   title: 'Moletom AI Side',
//   slug: 'moletom-ai-side',
//   price: 99,
//   image: '/moletom-ai-side.png',
//   description: 'Moletom fabricado com 88% de algodão e 12% de poliéster.',
//   featured: true
// }

export interface Product{
  id: number
  title: string
  slug: string
  price: number
  image: string
  description: string
  featured: boolean
}
