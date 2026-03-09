export default function UniverseAnimation({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={mobile ? 'universe-wrapper-mobile' : 'universe-wrapper'}>
      <div className='universe'>
        <div className='planet'></div>
        <div className='planetoid top'></div>
        <div className='planetoid middle'></div>
        <div className='planetoid bottom'></div>
        <div className='galaxy'>
          <div className='core'></div>
        </div>
      </div>
    </div>
  );
}
