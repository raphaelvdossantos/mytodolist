import ITask from "../../interfaces/ITask";

import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/components/tasklist/Tasklist.module.css";
import gotoIcon from "../../public/img/right-arrow.png";
import { useEffect, useState } from "react";

export default function TaskListComponent() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    const response = await fetch("http://localhost:8080/api/tasks");
    const tasks = await response.json();
    setTasks(tasks);
  }

  return (
    <div className={styles.outerBox}>
      <div className={styles.innerBox}>
        <table>
          <thead>
            <tr>
              <th id={styles.add}>
                <Link href={"/details/task/"}>
                  <a>+</a>
                </Link>
              </th>
              <th id={styles.categorization}>
                <label htmlFor="categories">
                  categories
                  <input name="categories" list="categories" />
                </label>
                <datalist id={styles.categories}> </datalist>
              </th>
              <th id={styles.taskCompletition}>
                <a href="#">X</a>
                <a href="#">V</a>
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks
              ? tasks.map((task: ITask) => (
                  <tr key={task.id}>
                    <td className={styles.checkColumn}>
                      <input
                        type="checkbox"
                        name="task-check"
                        id={styles.taskCheck}
                      />
                    </td>
                    <td className={styles.task}>{task.description}</td>
                    <td className={styles.gotoTodo}>
                      <Link href={`/details/task/${task.id}`}>
                        <a>
                          <Image src={gotoIcon} alt="Go to Todo" />
                        </a>
                      </Link>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
