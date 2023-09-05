export const MovieFilter = ({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (newValue: string) => void;
}) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  return (
    <input
      type="text"
      className="form-control my-3"
      placeholder="Search movies..."
      value={filter}
      onChange={handleFilterChange}
    />
  );
};
