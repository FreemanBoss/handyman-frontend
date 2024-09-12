import { useState } from "react";
import '../index.css'
import { useForm } from "react-hook-form";  // eslint-disable-line no-unused-vars

export default function Form() {
  const [isChecked, setIsChecked] = useState(false);
   const {
    register,
    handleSubmit,
    // formState: { errors, isSubmitting },
    // reset,
  } = useForm({});
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit= async(data) =>{
    
    try{
    console.log(data)
   }catch(error){
    console.log(error)
   }
 
  }

return (
     <div className="m-0 p-0 flex justify-center items-center min-h-screen bg-gradient-to-b from-[#ffcc80] via-[#ffcc80] to-[#ffcc80] font-sans">
      <div className="relative w-[350px] h-[500px] overflow-hidden rounded-[10px] shadow-[5px_20px_50px_#000]">
        <input
          type="checkbox"
          id="chk"
          className="hidden"
          checked={isChecked}
          onChange={handleToggle}
          aria-hidden="true"
        />

        {/* Signup (Craftsman Form) */}
        <div
          className={`signup absolute w-full h-full bg-gradient-to-b from-[#3e2723] to-[#ffcc80] transition-transform ${
            isChecked ? 'transform translate-y-[5px]' : ''
          }`}
        >
          <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center h-full">
            <label
              htmlFor="chk"
              aria-hidden="true"
              className={`text-white text-[28px] font-bold cursor-pointer transition ease-in-out duration-500 transform ${
                isChecked ? 'scale-[0.6]' : 'scale-[1]'
              }`}
            >
              Craftsman Details
            </label>
            <input
              type="text"
              name="skill"
              placeholder="Your Skill"
              required
              {...register("skillSet")}
              className="w-[60%] h-[40px] bg-[#e0dede] mt-5 p-2 rounded-[5px] outline-none"
            />
            <input
              type="number"
              name="experience"
              placeholder="Experience"
              required
              {...register("experience")}
              className="w-[60%] h-[40px] bg-[#e0dede] mt-5 p-2 rounded-[5px] outline-none"
            />
            <input
              type="text"
              name="certificate"
              placeholder="Your Certificate"
              required
              className="w-[60%] h-[40px] bg-[#e0dede] mt-5 p-2 rounded-[5px] outline-none"
            />
            <input
              type="text"
              name="availability"
              placeholder="Your Working Hours"
              required
              {...register("isAvailable")}
              className="w-[60%] h-[40px] bg-[#e0dede] mt-5 p-2 rounded-[5px] outline-none"
            />
            <button className="w-[60%] h-[40px] mt-5 text-white bg-[#3e2723] font-bold rounded-[5px] transition-transform duration-200 ease-in hover:bg-[#3e2723] hover:shadow-[5px_20px_50px_#000] active:scale-[0.95]">
              Submit
            </button>
          </form>
        </div>

        {/* Login (Normal User Form) */}
        <div
          className={`login absolute w-full h-[460px] bg-[#eee] rounded-bl-[40%] rounded-br-[40%] transition-transform duration-[800ms] ease-in-out ${
            isChecked ? 'translate-y-[5px]' : 'translate-y-[-420px]'
          }`}
        >
          <form className="flex flex-col items-center justify-center h-full">
            <button className="w-[60%] h-[40px] p-2 mt-60 text-white bg-[#3e2723] font-bold rounded-[5px] transition-transform duration-200 ease-in hover:bg-[#3e2723] hover:shadow-[5px_20px_50px_#000] active:scale-[0.94]">
              Continue as Normal User
            </button>
            <label
              htmlFor="chk"
              aria-hidden="true"
              className={`mt-40 text-[#3e2723] text-[25px] font-bold transition-transform duration-[800ms] ease-in-out ${
                isChecked ? 'scale-[1]' : 'scale-[0.6]'
              }`}
            >
              Click Me
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
