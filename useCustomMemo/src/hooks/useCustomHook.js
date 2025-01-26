import { useRef } from "react";

function areEqualDependencies(prevDep, currDep) {
  if (prevDep === null) return false;
  if (prevDep.length !== currDep.length) return false;

  for (let i = 0; i < prevDep.length; i++) {
    if (prevDep[i] !== currDep[i]) return false;
  }

  return true;
}
const useCustomMemo = (cb, dependencies) => {
  const memoizedRef = useRef(null);

  if (
    !memoizedRef.current ||
    !areEqualDependencies(memoizedRef.current.dependencies, dependencies)
  ) {
    memoizedRef.current = {
      value: cb(),
      dependencies,
    };
  }
  return memoizedRef.current.value;
};
export default useCustomMemo;
