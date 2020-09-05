
import { Layout } from '../components'
import { ProfileContainer } from '../containers'

const userId = 'user123'
export default function Profile () {
  return (
    <Layout>
      <ProfileContainer user={userId} />
    </Layout>
  )
}
