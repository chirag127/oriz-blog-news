export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'news-blog',
  name: 'The Standpoint',
  origin: 'https://news-blog.oriz.in',
  tagline: 'A working desk for reading the news critically',
  description:
    'The Standpoint — a news and commentary desk that sorts signal from noise, with practical guides to reading the news critically.',
}
