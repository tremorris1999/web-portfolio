import { RepoLookup } from '@/types'

export const repos: { [key: string]: RepoLookup } = {
  'shop-gen': { owner: 'tremorris1999', name: 'shop-gen' },
  'speed-commerce': { owner: 'tremorris1999', name: 'speed-commerce' },
  PogSharp: { owner: 'tremorris1999', name: 'PogSharp' },
}

export const images: { [key: string]: string[] } = {
  'shop-gen': [
    'https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=990&crop=1',
    'https://res.cloudinary.com/practicaldev/image/fetch/s--8hY3GQ04--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/rq48n957djcp028jlv59.jpg',
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  ],
  'speed-commerce': [
    'https://res.cloudinary.com/practicaldev/image/fetch/s--8hY3GQ04--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/rq48n957djcp028jlv59.jpg',
    'https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=990&crop=1',
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
  ],
}
