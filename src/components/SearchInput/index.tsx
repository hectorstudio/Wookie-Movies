import { ChangeEvent, KeyboardEvent, useState } from "react"
import SearchIcon from "../Icons/SearchIcon";

interface IProps {
  onSearch: (searchStr: string) => void;
}

const SearchInput = ({ onSearch }: IProps): JSX.Element => {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      onSearch(value);
    }
  }

  return (
    <div className="flex items-center rounded-full border border-[#555555] py-1 px-2">
      <SearchIcon />
      <input type="text" value={value} onChange={handleChange} onKeyDown={handleKeyDown} className="outline-none ml-2" />
    </div>
  )
}

export default SearchInput
