import Image from 'next/image';

const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Announcement</h1>
            <span className='text-xs text-gray-400'>View All</span>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
            <div className='p-5 rounded-md bg-otSky even:border-t-otPurple'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-gray-600'>Lorem ipsum</h1>
                    <span className='text-gray-400 text-xs rounded-md bg-white px-1 py-1'>01-01-2025</span>
                </div>
                <p className='mt-2 text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis enim delectus dolore ipsum ratione.</p>
            </div>
            <div className='p-5 rounded-md bg-otPurpleLight even:border-t-otPurple'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-gray-600'>Lorem ipsum</h1>
                    <span className='text-gray-400 text-xs rounded-md bg-white px-1 py-1'>01-01-2025</span>
                </div>
                <p className='mt-2 text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis enim delectus dolore ipsum ratione.</p>
            </div>
            <div className='p-5 rounded-md bg-otYellowLight even:border-t-otPurple'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-gray-600'>Lorem ipsum</h1>
                    <span className='text-gray-400 text-xs rounded-md bg-white px-1 py-1'>01-01-2025</span>
                </div>
                <p className='mt-2 text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis enim delectus dolore ipsum ratione.</p>
            </div>
        </div>
    </div>
  )
}

export default Announcements