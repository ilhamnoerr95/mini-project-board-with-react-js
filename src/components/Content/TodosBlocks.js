import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGroup, setToken, selectGroup } from "redux/Todos/Todos";
import TodoItem from "./TodoItem";

import "./_todo.scss";

function TodosItem() {
  const dispatch = useDispatch();
  const itemGroup = useSelector(selectGroup);
  useEffect(() => {
    dispatch(setToken(JSON.parse(localStorage.getItem("token"))));
    dispatch(getGroup());
  }, [itemGroup]);

  return (
    <>
      <div className="container-fluid row">
        <TodoItem />;
      </div>
    </>
  );
}

export default TodosItem;
