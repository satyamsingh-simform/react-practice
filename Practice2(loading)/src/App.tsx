import { InfiniteScroll } from "./components/InfiniteScroll"
import { LoadingWrapper } from "./components/LoadingWrapper"

interface AppProps {
  isLoading: boolean;
}

export const App : React.FC<AppProps> = ({ isLoading }) => {
  return (
    <div>
      <LoadingWrapper loading={isLoading}>
        
      </LoadingWrapper>
    </div>
  )
}
