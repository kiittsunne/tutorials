import { useState, FormEvent, MouseEvent } from "react";

type gameReviewType = {
  title: string;
  review: string;
};

export function ReviewForm() {
  const [formInputs, setFormInputs] = useState<gameReviewType>({
    title: "",
    review: "",
  });
  function handleChange(
    e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>
  ) {
    const { id, value } = e.currentTarget;
    setFormInputs((prev) => ({ ...prev, [id]: value }));
  }
  async function handleSubmit(e: MouseEvent) {
    e.preventDefault();
    const endpoint = "http://localhost:8800/api/reviews/new_review";

    const data = await (
      await fetch(endpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInputs),
      })
    ).json();
    console.log(data);
  }

  return (
    <form style={{ alignSelf: "stretch" }}>
      <div className="form-group">
        <label htmlFor="title">Game Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter Game Title"
          value={formInputs.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="review">Review</label>
        <textarea
          className="form-control"
          id="review"
          placeholder="Enter Review"
          value={formInputs.review}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
