import { Link } from "react-router-dom";

export function Header() {
  return (
    <div
      style={{
        width: "40em",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2em",
      }}
    >
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h1>Game Reviews</h1>
      </Link>
      <Link to={"new-review"}>
        <button className="btn btn-primary" style={{ marginTop: ".9em" }}>
          New Review
        </button>
      </Link>
    </div>
  );
}
