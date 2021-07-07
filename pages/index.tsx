import Head from "next/head";
import HeaderComponent from "../components/headercomponent/HeaderComponent";
import TaskListComponent from "../components/tasklistcomponent/TaskListComponent";
import styles from "../styles/pages/Wrapper.module.css";

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Head>
        <title>MyTodoList</title>
      </Head>
      <HeaderComponent />
      <TaskListComponent />
    </main>
  );
}
