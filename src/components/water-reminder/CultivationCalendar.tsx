import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { addDays, format, parseISO } from 'date-fns';
import { Cultivation, CultivationEvent } from '../../types/cultivation';

interface CultivationCalendarProps {
  cultivation: Cultivation;
}

const CultivationCalendar: React.FC<CultivationCalendarProps> = ({ cultivation }) => {
  const [events, setEvents] = useState<CultivationEvent[]>([]);

  useEffect(() => {
    const generateEvents = () => {
      const newEvents: CultivationEvent[] = [];
      const startDate = parseISO(cultivation.startDate);
      const today = new Date();
      let currentDate = startDate;

      while (currentDate <= addDays(today, 30)) {
        // Add watering events
        if ((currentDate.getTime() - startDate.getTime()) % (cultivation.wateringInterval * 86400000) === 0) {
          newEvents.push({
            id: `water-${format(currentDate, 'yyyy-MM-dd')}`,
            title: 'Water',
            date: format(currentDate, 'yyyy-MM-dd'),
            type: 'water',
            backgroundColor: '#3b82f6'
          });
        }

        // Add fertilizer events
        if ((currentDate.getTime() - startDate.getTime()) % (cultivation.fertilizerInterval * 86400000) === 0) {
          newEvents.push({
            id: `fertilizer-${format(currentDate, 'yyyy-MM-dd')}`,
            title: 'Fertilizer',
            date: format(currentDate, 'yyyy-MM-dd'),
            type: 'fertilizer',
            backgroundColor: '#22c55e'
          });
        }

        // Add medicine events
        if ((currentDate.getTime() - startDate.getTime()) % (cultivation.medicineInterval * 86400000) === 0) {
          newEvents.push({
            id: `medicine-${format(currentDate, 'yyyy-MM-dd')}`,
            title: 'Medicine',
            date: format(currentDate, 'yyyy-MM-dd'),
            type: 'medicine',
            backgroundColor: '#ef4444'
          });
        }

        currentDate = addDays(currentDate, 1);
      }

      setEvents(newEvents);
    };

    generateEvents();
  }, [cultivation]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-primary">
          {cultivation.vegetableType} - {cultivation.genre}
        </h3>
        <p className="text-gray-600">Started: {cultivation.startDate}</p>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth'
        }}
      />
    </div>
  );
};

export default CultivationCalendar;