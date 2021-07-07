import ITask from "../../interfaces/ITask";
import styles from "../../styles/components/form/Form.module.css";

import TextEditorComponent from "../texteditorcomponent/TextEditorComponent";

interface IFormProps {
  task: ITask;
}

export default function FormComponent({ task }: IFormProps) {
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
              value={task.description || ""}
            />
          </label>
          <label htmlFor="category">
            CATEGORY
            <input
              name="category"
              list="category"
              value={task.category || ""}
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
              value={task.creationDate?.toString() || ""}
              readOnly
            />
          </label>
          <label htmlFor="expirationDate">
            VALID UNTIL
            <input
              type="date"
              name="expirationDate"
              id="expirationDate"
              defaultValue=""
              value={task.expirationDate?.toString() || ""}
            />
          </label>
        </div>
        <div className={styles.details}>
          <label>TASK DETAILS</label>
          <div id={styles.detailsEditor}>
            <TextEditorComponent />
          </div>
        </div>
      </form>
    </main>
  ) : (
    <div></div>
  );
}
