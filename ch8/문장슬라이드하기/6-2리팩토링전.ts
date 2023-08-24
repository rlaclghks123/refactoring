// export const createResource = () => ({});
// const availableResources: unknown[] = [];
// const allocatedResources: unknown[] = [];

// const func = () => {
//   let result: unknown;
//   availableResources.length === 0;
//   if (availableResources.length === 0) {
//     result = createResource();
//   } else {
//     result = availableResources.pop();
//   }
//   allocatedResources.push(result);
//   return result;
// };

const createResource = <T>(): T => ({} as T);
const availableResources: unknown[] = [];
const allocatedResources: unknown[] = [];

const func = <T>(): T => {
  let result: T;
  if (availableResources.length === 0) {
    result = createResource();
    allocatedResources.push(result);
  } else {
    result = availableResources.pop() as T;
    allocatedResources.push(result);
  }
  return result;
};
