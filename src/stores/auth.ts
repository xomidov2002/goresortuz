// stores/auth.ts
import { defineStore } from 'pinia'
import axios from 'axios'

interface User {
  name: string
  email: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: localStorage.getItem('token') || '',
    loading: false,
    error: ''
  }),

  actions: {
    async login(email: string, password: string) {
      this.loading = true
      this.error = ''
      try {
        const res = await axios.post('http://cabinet.goresort.uz/api/login', {
          email,
          password
        })
        this.token = res.data.token
        this.user = res.data.user
        localStorage.setItem('token', this.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
      } catch (err: any) {
        this.error = err.response?.data?.message || 'Login failed'
      } finally {
        this.loading = false
      }
    },

    async register(name: string, email: string, password: string) {
      this.loading = true
      this.error = ''
      try {
        const res = await axios.post('http://cabinet.goresort.uz/api/register', {
          name,
          email,
          password,
          dob: '1990-01-01', // yoki forma orqali yuboring
          avatar: null // optional
        })
        // Ba'zi backendlar registerdan keyin token qaytarmaydi
        // Agar token qaytsa:
        if (res.data.token) {
          this.token = res.data.token
          this.user = res.data.user
          localStorage.setItem('token', this.token)
          axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        }
      } catch (err: any) {
        this.error = err.response?.data?.message || 'Register failed'
      } finally {
        this.loading = false
      }
    },

    logout() {
      this.token = ''
      this.user = null
      this.error = ''
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
    }
  }
})
