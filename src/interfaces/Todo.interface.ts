export  interface ITodos {
  completed: boolean; 
  createdAt: string; 
  date: string; 
  dateNow: number;
  id: string;
  message: string; 
}

export interface IToggleComplete {
    id: string;
    completed: boolean;
}

export interface IAddtodo {
    message: string;
    date: string;
}