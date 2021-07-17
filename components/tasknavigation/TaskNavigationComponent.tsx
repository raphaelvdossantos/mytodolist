import Image from "next/image";

import ITask from "../../interfaces/ITask";

import backButton from "../../public/img/left-arrow.png";
import saveIcon from "../../public/img/save-icon.png";
import clearIcon from "../../public/img/trash.png";
import styles from "../../styles/components/navigation/Navigation.module.css";

interface ITaskNavigationProps {
  task: ITask;
  handleSave: () => void;
  handleClear: () => void;
  handleReturn: (task: string) => void;
}

export default function TaskNavigationComponent(props: ITaskNavigationProps) {
  const { nav, back, taskActions, save, clear } = styles;

  function returnHome() {
    props.handleReturn(String(props.task.id));
  }

  return (
    <nav className={nav}>
      <div className={back}>
        <a onClick={returnHome}>
          <Image src={backButton} alt="Back to Listing" />
        </a>
        <h1>
          BACK <br />
          <span> to TASKS</span>
        </h1>
      </div>
      <div className={taskActions}>
        <a href="#" id={save} onClick={props.handleSave}>
          <Image src={saveIcon} alt="Save Task" />
        </a>
        <a href="#" id={clear} onClick={props.handleClear}>
          <Image src={clearIcon} alt="Delete Task" />
        </a>
      </div>
    </nav>
  );
}
