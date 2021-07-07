export default interface ITask {
  id: number;
  description: string;
  category: string;
  creationDate: Date;
  expirationDate: Date;
  isCanceled: boolean;
  isCompleted: boolean;
}
