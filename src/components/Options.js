import React from "react";

const Options = ({
  selectedDisplay,
  setSelectedDisplay,
  groupOptions,
  sortOptions,
  selectedGrouping,
  setSelectedGrouping,
  selectedSorting,
  setSelectedSorting
}) => (
  <div className="options">
    Display By:
    <select
      value={selectedDisplay}
      onChange={(e) => setSelectedDisplay(e.target.value)}
    >
      <option value="grouping">Group By</option>
      <option value="sorting">Sort By</option>
    </select>
    {selectedDisplay === "grouping" && (
      <select
        value={selectedGrouping}
        onChange={(e) => setSelectedGrouping(e.target.value)}
      >
        {groupOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    )}
    {selectedDisplay === "sorting" && (
      <select
        value={selectedSorting}
        onChange={(e) => setSelectedSorting(e.target.value)}
      >
        {sortOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    )}
  </div>
);

export default Options;
