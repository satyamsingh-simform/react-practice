import { Counter } from "./components/Counter"
import { Error } from "./components/Error"
import ErrorBoundary from "./components/ErrorBoundary"

export const App = () => {
  return (
    <div>
      <ErrorBoundary fallback={Error}>
        <Counter/>
      </ErrorBoundary>
    </div>
  )
}
