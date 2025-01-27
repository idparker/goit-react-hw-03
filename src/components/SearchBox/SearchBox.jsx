import css from "../SearchBox/SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchbox}>
      <label htmlFor="searchbox">Find contacts by name</label>
      <input
        type="text"
        id="searchbox"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
}
