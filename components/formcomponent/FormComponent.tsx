import ITask from "../../interfaces/ITask";
import styles from "../../styles/components/form/Form.module.css";

import TextEditorComponent from "../texteditorcomponent/TextEditorComponent";

interface IFormProps {
  task: ITask;
  handleSetNewTask: (property: string, value: any) => void;
}

export default function FormComponent({ task, handleSetNewTask }: IFormProps) {
  function handleOnchange(event: any, property: string) {
    const { value } = event.target;
    if (value) {
      handleSetNewTask(
        property,
        value == "expirationDate" ? new Date(value) : value
      );
    }
  }

  return task ? (
    <main className={styles.taskEditor}>
      <form className={styles.form} action="#" method="POST">
        <div className={styles.mainInfo}>
          <label htmlFor="id">
            iD{" "}
            <input
              type="number"
              name="id"
              id={styles.id}
              value={task.id}
              readOnly
            />
          </label>
          <label htmlFor="description">
            DESCRIPTION
            <input
              type="text"
              id={styles.description}
              name="description"
              defaultValue={task.description || ""}
              onChange={(event) => handleOnchange(event, "description")}
            />
          </label>
          <label htmlFor="category">
            CATEGORY
            <input
              name="category"
              list="category"
              defaultValue={task.category || ""}
              onChange={(event) => handleOnchange(event, "category")}
            />
          </label>
        </div>
        <div className={styles.secondaryInfo}>
          <label htmlFor="creationDate">
            CREATED AT
            <input
              type="date"
              name="creationDate"
              id={styles.creationDate}
              defaultValue={task.creationDate?.toString() || ""}
              readOnly
            />
          </label>
          <label htmlFor="expirationDate">
            VALID UNTIL
            <input
              type="date"
              name="expirationDate"
              id="expirationDate"
              defaultValue={task.expirationDate?.toString() || ""}
              onChange={(event) => handleOnchange(event, "expirationDate")}
            />
          </label>
        </div>
        <div className={styles.details}>
          <label>TASK DETAILS</label>
          <div id={styles.detailsEditor}>
            <TextEditorComponent setDetails={handleSetNewTask} />
          </div>
        </div>
      </form>
    </main>
  ) : (
    <div></div>
  );
}
