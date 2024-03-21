'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Toaster } from 'react-hot-toast';

const Header = () => {
  const router = useRouter();
  return (
    <>
      <header className="sticky top-0 mb-6 flex items-center justify-between border-b border-b-input bg-white py-4">
        <h4 className="font-semibold italic text-slate-800 md:text-xl xl:text-3xl">
          Templater
        </h4>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => {
              router.push('/');
            }}
            variant="link"
          >
            Templates List
          </Button>
          <Button
            onClick={() => {
              router.push('/create-template');
            }}
            variant="link"
          >
            Create New Template
          </Button>
        </div>
      </header>
      <Toaster />
    </>
  );
};

export default Header;
