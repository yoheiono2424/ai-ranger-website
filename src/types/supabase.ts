export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      articles: {
        Row: {
          id: string
          title: string
          slug: string
          category: 'ai-dx-system' | 'dx-system'
          industries: string[]
          summary: string
          content: string
          thumbnail_url: string | null
          image_urls: string[] | null
          seo_keywords: string[] | null
          scheduled_at: string
          view_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          category: 'ai-dx-system' | 'dx-system'
          industries: string[]
          summary: string
          content: string
          thumbnail_url?: string | null
          image_urls?: string[] | null
          seo_keywords?: string[] | null
          scheduled_at: string
          view_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          category?: 'ai-dx-system' | 'dx-system'
          industries?: string[]
          summary?: string
          content?: string
          thumbnail_url?: string | null
          image_urls?: string[] | null
          seo_keywords?: string[] | null
          scheduled_at?: string
          view_count?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
