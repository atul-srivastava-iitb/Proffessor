type props = {
  date: string;
};
function DateButton({ date }: props) {
  return (
    <div className="-ml-10 inline-block rounded-full border-2 border-primary bg-white px-3 text-md font-medium">
      {date}
    </div>
  );
}
export default DateButton;
