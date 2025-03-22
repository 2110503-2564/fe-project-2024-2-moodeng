
import DashboardPage from './@dashboard/page';
import ManagePage from './@manage/page';

export default function ReservationLayout({children,dashboard,manage}:
    {children:React.ReactNode,dashboard:React.ReactNode,manage:React.ReactNode}) {
  return (
      <div className='flex flex-col w-full'>
        {children}
        {dashboard}
        {manage}

      </div>
  );
}
