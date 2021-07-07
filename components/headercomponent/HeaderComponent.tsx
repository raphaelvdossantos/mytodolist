import styles from "../../styles/components/header/Header.module.css";

export default function HeaderComponent() {
  const { header, smaller, todo } = styles;
  return (
    <header className={header}>
      <h1 className={smaller}>
        MY
        <br />
        LIST
      </h1>
      <h1 className={todo}>TODO</h1>
    </header>
  );
}
