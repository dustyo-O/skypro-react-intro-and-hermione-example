import { cn } from "@bem-react/classname";
import { FC, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { StatusProps } from "./Status.types";

const cnStatus = cn('Status');

export const Status: FC<StatusProps> = ({ status, onDelete }) => {

  const deleteHandler = useCallback(() => {
    onDelete?.(status.id);
  }, [onDelete, status.id]);

  return (
    <div
      key={status.id}
      className={cnStatus()}
    >
      {status.emoji}
      {status.status}
      {onDelete && <FontAwesomeIcon icon={faTimes} onClick={deleteHandler} />}
    </div>
  )
}
