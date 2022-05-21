export interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

export interface dataFetched {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface fetchDataType {
  id: number;
  isLoading: boolean;
  fetchItems: dataFetched[];
}
