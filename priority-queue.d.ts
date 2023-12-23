interface IPriorityQueue<T> {
  get peek(): T
  enqueue(val: T): void
  dequeue(): T
}
