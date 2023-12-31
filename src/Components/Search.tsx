import React from "react";

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

export function checkValidity(joiningDate: string, validityDate: string) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(
    Number.parseInt(yyyy, 10),
    Number.parseInt(mm, 10) - 1,
    Number.parseInt(dd, 10)
  );
  const selected = new Date(
    Number.parseInt(year, 10),
    Number.parseInt(month, 10) - 1,
    Number.parseInt(day, 10)
  );
  return maxValid >= selected && maxValid >= today;
}

function Search() {
  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
          />
        </div>
      </label>
      <button type="button" data-testid="addBtn" className="small mb-0">
        Add
      </button>
    </div>
  );
}

export default Search;
