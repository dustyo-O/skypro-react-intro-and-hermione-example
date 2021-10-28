export type StatusData = {
  emoji: string,
  status: string,
};

export type Status = StatusData & {
  id: string;
};

export type StatusFormData = {
  emoji: Status['emoji'];
  status: Status['status'];
}

export type StatusProps = {
  status: Status
  onDelete?: (id: string) => void;
}
