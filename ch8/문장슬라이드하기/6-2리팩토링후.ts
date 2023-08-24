export const createResource = () => ({});
const availableResources: unknown[] = [];
const allocatedResources: unknown[] = [];

const func = () => {
  let result = availableResources.length === 0 ? createResource() : availableResources.pop();
  allocatedResources.push(result);
  return result;
};
