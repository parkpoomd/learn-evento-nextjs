import { getEvents } from '@/lib/utils'
import EventCard from './event-card'

type EventsListProps = {
  city: string
}
export default async function EventsList({ city }: EventsListProps) {
  const events = await getEvents(city)

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  )
}
