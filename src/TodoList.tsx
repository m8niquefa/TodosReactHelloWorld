import './todoList.css'

export interface TodoListProps {
  children: React.ReactNode;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };