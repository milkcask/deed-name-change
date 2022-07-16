import SignatureBox from './components/SignatureBox';
import Variable from './components/Variable';

type DeedProps = {
  data: any
}

const Deed: React.FC<DeedProps> = ({data})=> {
  const {
    oldFullName,
    newFullName,
    address,
    date,
    firstWitnessFullName,
    firstWitnessAddress,
    secondWitnessFullName,
    secondWitnessAddress
  } = data;

  return (
    <article className='font-serif text-justify px-[12.5%] py-40'>
      <h1 className='text-2xl font-bold pb-8' style={{fontVariant: 'small-caps'}}>Deed of Change of Name</h1>
      <p className='pb-4'>
        I <Variable>{oldFullName}</Variable>{' '}
        of <Variable wrap>{address}</Variable>{' '}
        have given up my name <Variable emphasize>{oldFullName}</Variable>{' '}
        and have adopted for all purposes the name <Variable emphasize>{newFullName}</Variable>.
      </p>
      <div className='grid grid-cols-2'>
        <div className=''>
          {/* <div className='float-right pr-1'> */}
            {/* {`)`}<br />{`)`}<br />{`)`}<br />{`)`}<br />{`)`}<br />{`)`}<br />{`)`}<br />{`)`}<br /> */}
          {/* </div> */}
          <p className='pb-4 pr-[20%]'>
            <span className='font-bold'>Signed as a deed</span>{' '}
            on <Variable>{date}</Variable>{' '}
            by the said <Variable wrap emphasize>{newFullName}</Variable>{' '}
            formerly known as <Variable wrap>{oldFullName}</Variable>
          </p>
        </div>
        <div className='sign here'>
          <p className='pb-4'>
            <SignatureBox />
            <Variable wrap emphasize>{newFullName}</Variable><br />
            formerly known as<br />
            <Variable wrap>{oldFullName}</Variable>
            <SignatureBox prompt='sign again here' />
          </p>
        </div>
        </div>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <p className='pb-4 text-sm'>
            <SignatureBox prompt='witness sign here' />
            in the presence of <Variable>{firstWitnessFullName}</Variable>{' '}
            of <Variable wrap>{firstWitnessAddress}</Variable>
          </p>
          <p className='pb-4 text-sm'>
            <SignatureBox prompt='witness sign here' />
            and in the presence of <Variable>{secondWitnessFullName}</Variable>{' '}
            of <Variable wrap>{secondWitnessAddress}</Variable>.
          </p>
        </div>
        <div />
      </div>
    </article>
  );
};

export default Deed;