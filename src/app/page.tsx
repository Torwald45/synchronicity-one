import Navbar from '@/components/Navbar';
import UniverseAnimation from '@/components/UniverseAnimation';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen bg-black text-[#7fff00] relative overflow-hidden'>
        <div className='hidden lg:block'>
          <UniverseAnimation mobile={false} />
          <div className='absolute bottom-12 left-8 max-w-lg'>
            <h1 className='text-3xl leading-tight' style={{fontFamily: "'Russo synchro 400', sans-serif"}}>
              We provide comprehensive on-line development services to your enterprise.
            </h1>
          </div>
          <div className='absolute bottom-12 right-8'>
            <Link
              href='/what-we-do'
              className='border border-[#7fff00] px-5 py-2 text-3xl rounded hover:bg-[#7fff00] hover:text-black transition-colors'
              style={{fontFamily: "'Russo synchro 400', sans-serif"}}
            >
              see what we do
            </Link>
          </div>
        </div>
        <div className='flex lg:hidden flex-col items-center pt-52 px-6 pb-12 gap-8'>
          <UniverseAnimation mobile={true} />
          <h1 className='text-2xl leading-tight w-full text-center' style={{fontFamily: "'Russo synchro 400', sans-serif"}}>
            We provide comprehensive on-line<br />development services to your enterprise.
          </h1>
          <Link
            href='/what-we-do'
            className='border border-[#7fff00] px-5 py-2 text-2xl rounded hover:bg-[#7fff00] hover:text-black transition-colors'
            style={{fontFamily: "'Russo synchro 400', sans-serif"}}
          >
            see what we do
          </Link>
        </div>
      </main>
    </>
  );
}
