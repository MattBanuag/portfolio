import Landing from "../../sections/landing/Landing"
import { PageContainer } from "../containers/Containers.style"
import FAB from "../fab/FAB"

const Home = () => {
  return (
    <PageContainer>
        <FAB/>
        <Landing/>
    </PageContainer>
  )
}

export default Home