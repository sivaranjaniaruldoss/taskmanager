export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: Priority;
  completed: boolean;
  createdAt: number;
}

export type Filter = 'all' | 'pending' | 'completed';
export type SortBy = 'dueDate' | 'priority' | 'createdAt';