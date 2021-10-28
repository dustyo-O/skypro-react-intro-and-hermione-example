import { Status, StatusData } from "../Status/Status.types";

export const INITIAL_STATUSES: Status[] = [{
  emoji: '😎',
  status: 'привет статус',
  id: '1',
}];

export const EMPTY_STATUS_FORM: StatusData = {
  emoji: '😎',
  status: '',
};
