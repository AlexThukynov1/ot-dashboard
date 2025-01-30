import Announcements from "@/components/Announcements"
import EventCalendar from "@/components/EventCalendar"
import MainCalendar from "@/components/MainCalendar"

const TeachertPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <MainCalendar/>
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalendar/>
        <Announcements/>
      </div>
    </div>
  )
}

export default TeachertPage