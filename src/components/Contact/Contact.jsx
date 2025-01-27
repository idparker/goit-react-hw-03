import css from "../Contact/Contact.module.css";

export default function Contact({ username, number, id, onDelete }) {
  return (
    <div key={id} className={css.contact}>
      <div className={css.info}>
        <p>{username}</p>
        <p>{number}</p>
      </div>
      <button onClick={() => onDelete(id)} type="submit" className={css.button}>
        Delete
      </button>
    </div>
  );
}
