export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      dummy: {
        Row: {
          dummyDate: string | null
          dummyInteger: number | null
          dummyString: string | null
          dummyTimestamp: string | null
          id: string
        }
        Insert: {
          dummyDate?: string | null
          dummyInteger?: number | null
          dummyString?: string | null
          dummyTimestamp?: string | null
          id: string
        }
        Update: {
          dummyDate?: string | null
          dummyInteger?: number | null
          dummyString?: string | null
          dummyTimestamp?: string | null
          id?: string
        }
      }
      test: {
        Row: {
          created_at: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          id?: number
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
