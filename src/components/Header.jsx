import { LOGO } from "../utils/constant";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <header className='max-w-7xl mx-auto flex justify-between items-center py-2'>
      <img src={LOGO} alt='Netflix logo' className='w-48 saturate-200' />

      <div>
        <Button className='bg-red-600 text-white px-3 py-1 font-semibold hover:bg-red-700 normal-case'>
          Sign in
        </Button>
      </div>
    </header>
  );
};

export default Header;
