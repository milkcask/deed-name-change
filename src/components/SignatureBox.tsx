const SignatureBox: React.FC<{ prompt?: string }> = ({ prompt='sign here' }) => (
  <div className='w-full screen:border-stone-100 print:border-stone-50 screen:border-b-2 print:border-b-[3pt]'>
    <br />
    <br />
    <br className='screen:hidden' />
    <span className='bg-teal-400 font-mono text-white text-sm py-[3px] px-3 leading-4 rounded-t-sm print:hidden'>{prompt}</span>
  </div>
);

export default SignatureBox