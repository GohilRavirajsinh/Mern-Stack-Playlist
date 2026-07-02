import { submitAction } from "@/actions/form";

export default function Home() {

  return (
    <div className="w-2/3 mx-auto my-12">
      <form action={submitAction}>
        <div>
          <label htmlFor="name" >Name:</label>
          <input name="name" id="name" className="text-white type='text' border-2 ml-7" />
        </div>
        <div>
          <label htmlFor="pass">Address:</label>
          <input name="pass" id="pass" className="text-white type='text' border-2 ml-3" />
        </div>
        <button className="border border-white px-3">Submit</button>
      </form>
    </div>
  );
}