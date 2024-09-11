import { Users } from "@/components/Users";

export default function Home() {
  return (
    <section className='min-h-screen flex flex-col items-center p-10 bg-gradient-to-r from-violet-600 to-indigo-600'>
      <Users />
    </section>
  );
}
