import { useRouter } from 'next/router'
import { AuthContainer } from '../containers'

export default function Auth () {
  const router = useRouter()

  const { title, action } = router.query
  return (
    <AuthContainer title={title} action={action} />
  )
}
