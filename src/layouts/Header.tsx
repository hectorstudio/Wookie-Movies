import { SocialIcon } from "react-social-icons";
import SearchInput from "../components/SearchInput";

const Header = (): JSX.Element => {
  const handleSearch = (searchStr: string) => {
    console.log(searchStr);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex bg-[#0000ff] px-3 py-2">
        <SocialIcon url="https://google.com" />
        <SocialIcon url="https://twitter.com" />
        <SocialIcon url="https://facebook.com" />
      </div>
      <div className="flex justify-between items-end px-5 py-5 border-b-2 border-[#555555]">
        <h1 id="logo" className="font-bold text-4xl max-w-[200px]">
          WOOKIE MOVIES
        </h1>
        <SearchInput onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Header;
