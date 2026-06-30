import { useEffect, useRef} from "react";

export default function useEffectOnce(callback, dep) {
  const hasStopped = useRef(false);
// const [value,setValue]=useState(false);

  useEffect(() => {
    if (hasStopped.current) return;
    // if(value) return ;

    const stop = () => {
      hasStopped.current = true;
    // setValue(true);
    };

    callback(stop);
  }, dep);
}