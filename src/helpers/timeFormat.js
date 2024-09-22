

// Convert 24-hour time format to 12-hour format with AM/PM
export const convertTo12HourFormat = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Handle midnight and noon
    return `${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${period}`;
  };
  
  // Format working hours from 24-hour range to 12-hour range
  export const formatWorkingHours = (timeRange) => {
    const [startTime, endTime] = timeRange.split('-');
    const formattedStartTime = convertTo12HourFormat(startTime);
    const formattedEndTime = convertTo12HourFormat(endTime);
    return `${formattedStartTime} - ${formattedEndTime}`;
  };
 