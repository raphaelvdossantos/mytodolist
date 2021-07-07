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

  const fetchTask = useCallback(async (taskId) => {
    fetch(`http://localhost:8080/api/tasks/${taskId}`)
      .then((response) => response.json())
      .then((task) => setTask(task));
  }, []);

  const createTask = useCallback(async () => {
    fetch("http://localhost:8080/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((newTask) => setTask(newTask));
  }, []);

  useEffect(() => {
    const { taskId } = router.query;
    taskId ? fetchTask(taskId) : createTask();
  }, [router.query, fetchTask, createTask]);

  function handleSave() {}

  function handleClear() {
    setTask({} as ITask);
  }

  function deleteTask(taskId: string) {
    if (taskId) {
      return fetch(`http://localhost:8080/api/tasks/${taskId}`, {
        method: "DELETE",
      });
    }

    return Promise.resolve();
  }

  function returnHome(taskId: string) {
    deleteTask(taskId).then(() => router.back());
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
      <FormComponent task={task} />
    </main>
  );
}
