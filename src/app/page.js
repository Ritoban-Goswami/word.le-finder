import Card from "@/components/Card";
import HelperText from "@/components/HelperText";

export default function Home() {
  return (
    <>
      <main className="mx-auto w-[90vw] 2xl:w-[65vw] min-h-[80vh] my-12 md:my-24">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-5 gap-x-10 gap-y-10 lg:gap-y-20 lg:items-start">
          <Card />
        </div>
        <hr class="w-48 h-0.5 mx-auto mt-10 mb-5 bg-primary border-0 rounded md:my-20"></hr>
        <HelperText className="col-span-5" />
      </main>
    </>
  );
}
