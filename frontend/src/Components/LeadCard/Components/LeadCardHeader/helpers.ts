function formatCreatedDate(CreatedDate: Date) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const month = months[CreatedDate.getMonth()];
  const day = CreatedDate.getDate();
  const hours = CreatedDate.getHours();
  const minutes = CreatedDate.getMinutes().toString().padStart(2, '0');
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;

  return `${month} ${day} @ ${formattedHours}:${minutes} ${period}`;
}

function parseFirstNameInitial(firstName: string) {
  if (!firstName) return "";
  return firstName.charAt(0).toUpperCase();
}

export { formatCreatedDate, parseFirstNameInitial };