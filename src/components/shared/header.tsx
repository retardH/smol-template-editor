'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const Header = () => {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between py-6">
      <h4 className="font-semibold italic md:text-xl xl:text-3xl">Templater</h4>
      <div>
        <Button
          onClick={() => {
            router.push('/create-template');
          }}
        >
          Create New Template
        </Button>
      </div>
    </header>
  );
};

export default Header;
