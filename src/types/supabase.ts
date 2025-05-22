
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
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          full_name: string | null
          avatar_url: string | null
          website: string | null
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          full_name?: string | null
          avatar_url?: string | null
          website?: string | null
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          full_name?: string | null
          avatar_url?: string | null
          website?: string | null
          user_id?: string
        }
      }
      stores: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          address: string
          category: string
          latitude: number
          longitude: number
          accepted_crypto: string[]
          opening_hours: string | null
          website: string | null
          phone: string | null
          user_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          address: string
          category: string
          latitude: number
          longitude: number
          accepted_crypto: string[]
          opening_hours?: string | null
          website?: string | null
          phone?: string | null
          user_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          address?: string
          category?: string
          latitude?: number
          longitude?: number
          accepted_crypto?: string[]
          opening_hours?: string | null
          website?: string | null
          phone?: string | null
          user_id?: string | null
        }
      }
      marketplace_listings: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          category: string
          price: string
          original_price: string | null
          seller_id: string
          description: string
          emoji: string | null
          rating: number | null
          reviews: number | null
          featured_badge: string | null
          accepted_currencies: string[]
          in_stock: boolean
          images: string[]
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          category: string
          price: string
          original_price?: string | null
          seller_id: string
          description: string
          emoji?: string | null
          rating?: number | null
          reviews?: number | null
          featured_badge?: string | null
          accepted_currencies: string[]
          in_stock: boolean
          images?: string[]
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          category?: string
          price?: string
          original_price?: string | null
          seller_id?: string
          description?: string
          emoji?: string | null
          rating?: number | null
          reviews?: number | null
          featured_badge?: string | null
          accepted_currencies?: string[]
          in_stock?: boolean
          images?: string[]
        }
      }
      freelancers: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          name: string
          title: string
          skills: string[]
          rate: string
          rating: number
          projects: number
          user_id: string
          avatar: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          name: string
          title: string
          skills: string[]
          rate: string
          rating: number
          projects: number
          user_id: string
          avatar?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          name?: string
          title?: string
          skills?: string[]
          rate?: string
          rating?: number
          projects?: number
          user_id?: string
          avatar?: string | null
        }
      }
      jobs: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          category: string
          budget: string
          currency: string
          posted_by: string
          deadline: string | null
          description: string
          skills: string[]
          posted_date: string
          proposals: number | null
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          category: string
          budget: string
          currency: string
          posted_by: string
          deadline?: string | null
          description: string
          skills: string[]
          posted_date: string
          proposals?: number | null
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          category?: string
          budget?: string
          currency?: string
          posted_by?: string
          deadline?: string | null
          description?: string
          skills?: string[]
          posted_date?: string
          proposals?: number | null
          user_id?: string
        }
      }
      reservations: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          user_id: string
          type: 'flight' | 'hotel' | 'experience'
          destination: string
          departure_date: string
          return_date: string | null
          adults: number
          children: number | null
          provider: string | null
          price: number
          payment_intent: string | null
          status: 'pending' | 'confirmed' | 'cancelled'
          cancellation_reason: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id: string
          type: 'flight' | 'hotel' | 'experience'
          destination: string
          departure_date: string
          return_date?: string | null
          adults: number
          children?: number | null
          provider?: string | null
          price: number
          payment_intent?: string | null
          status?: 'pending' | 'confirmed' | 'cancelled'
          cancellation_reason?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id?: string
          type?: 'flight' | 'hotel' | 'experience'
          destination?: string
          departure_date?: string
          return_date?: string | null
          adults?: number
          children?: number | null
          provider?: string | null
          price?: number
          payment_intent?: string | null
          status?: 'pending' | 'confirmed' | 'cancelled'
          cancellation_reason?: string | null
        }
      }
      verifications: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          user_id: string
          document_type: 'passport' | 'id_card' | 'drivers_license' | 'proof_of_address'
          document_path: string
          status: 'pending' | 'approved' | 'rejected'
          rejection_reason: string | null
          reviewer_id: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id: string
          document_type: 'passport' | 'id_card' | 'drivers_license' | 'proof_of_address'
          document_path: string
          status?: 'pending' | 'approved' | 'rejected'
          rejection_reason?: string | null
          reviewer_id?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          user_id?: string
          document_type?: 'passport' | 'id_card' | 'drivers_license' | 'proof_of_address'
          document_path?: string
          status?: 'pending' | 'approved' | 'rejected'
          rejection_reason?: string | null
          reviewer_id?: string | null
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
