
export const MovieFilter = ({filter, setFilter} : {filter : string, setFilter: (newValue: string) => void}) => {

const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

  return (
    <input type="text" value={filter} onChange={handleFilterChange} />
  )
}
