/// 자원이 고갈되는건 예상가능한 조건이므로 예외 처리로 대응하는건 옳지 않다 => 미리 조건으로 처리해주자

export const Resource = (() => {
  let id = 0;
  return class Resource {
    id;
    constructor() {
      id += 1;
      this.id = id;
    }
    static create() {
      return new Resource();
    }
  };
})();

type ResourceType = ReturnType<typeof Resource.create>;

class ResourcePool {
  available: ResourceType[] = [];
  allocated = new Set<ResourceType>();

  get() {
    let result: ResourceType | undefined;
    result = this.available.length ? Resource.create() : this.available.pop();
    this.allocated.add(result!);
    return result;
  }

  add() {
    this.available.push(Resource.create());
  }
}

const pool = new ResourcePool();
pool.get();
console.log({ available: pool.available, allocated: pool.allocated });
pool.add();
pool.add();
pool.add();
console.log({ available: pool.available, allocated: pool.allocated });
pool.get();
pool.get();
pool.get();
console.log({ available: pool.available, allocated: pool.allocated });

export {};
