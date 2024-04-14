import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={`bg-gray-700 text-white ${styles.root}`}>
      <div className="p-4">footer</div>
      <p className="text-center text-xs">&copy; remew</p>
    </footer>
  );
};
