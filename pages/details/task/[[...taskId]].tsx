import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

import ITask from "../../../interfaces/ITask";
import FormComponent from "../../../components/formcomponent/FormComponent";
import TaskNavigationComponent from "../../../components/tasknavigation/TaskNavigationComponent";
import styles from "../../../styles/pages/Wrapper.module.css";

export default function TaskDetail() {
  const [task, setTask] = useState({} as ITask);

  const router = useRouter();

  const createTask = useCallback(async () => {
    fetch("http://localhost:8080/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((newTask) => {
        setTask(newTask);
      });
  }, []);

  const fetchTask = useCallback(async (taskId) => {
    fetch(`http://localhost:8080/api/tasks/${taskId}`)
      .then((response) => response.json())
      .then((task) => setTask(task));
  }, []);

  useEffect(() => {
    const { taskId } = router.query;
    taskId ? fetchTask(taskId) : createTask();
  }, [router.query, fetchTask, createTask]);

  function handleSave() {
    if (task.description) {
      fetch(`http://localhost:8080/api/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
    }
  }

  function handleClear() {
    setTask({} as ITask);
  }

  function deleteTask(taskId: string) {
    if (!task.description) {
      return fetch(`http://localhost:8080/api/tasks/${taskId}`, {
        method: "DELETE",
      });
    }

    return Promise.resolve();
  }

  function returnHome(taskId: string) {
    deleteTask(taskId).then(() => router.push("/"));
  }

  function handleSetNewTask(property: string, value: any) {
    task[property] = value;
    setTask(task);
  }

  return (
    <main className={styles.wrapper}>
      <Head>
        <title>MyTodoList</title>
      </Head>
      <TaskNavigationComponent
        task={task}
        handleClear={handleClear}
        handleSave={handleSave}
        handleReturn={returnHome}
      />
      <FormComponent task={task} handleSetNewTask={handleSetNewTask} />
    </main>
  );
}
