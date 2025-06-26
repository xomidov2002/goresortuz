import { useAuthStore } from '@/stores/auth'

export function authGuard(to, from, next) {
  const auth = useAuthStore()

  if (!auth.token) {
    // foydalanuvchi login qilmagan, uni login sahifasiga yo‘naltiramiz
    next({ name: 'login' })
  } else {
    // foydalanuvchi tizimda, sahifani ochamiz
    next()
  }
}
