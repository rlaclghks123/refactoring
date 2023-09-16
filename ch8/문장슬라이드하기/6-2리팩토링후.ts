// export const createResource = () => ({});
// const availableResources: unknown[] = [];
// const allocatedResources: unknown[] = [];

// const func = () => {
//   let result = availableResources.length === 0 ? createResource() : availableResources.pop();
//   allocatedResources.push(result);
//   return result;
// };

type Resource<T> = T;

const availableResources: Resource<unknown>[] = [];
const allocatedResources: Resource<unknown>[] = [];

export const createResource = <T>(): Resource<T> => ({} as T);

const func = <T>(): Resource<T> => {
  let result =
    availableResources.length === 0
      ? createResource<T>()
      : (availableResources.pop() as Resource<T>);
  allocatedResources.push(result);
  return result;
};
