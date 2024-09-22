import { useState } from "react";
import '../index.css'
import { AiOutlineClockCircle } from "react-icons/ai";;
import { useForm } from "react-hook-form"; 
import { useDispatch } from 'react-redux';
import { registerCraftsman} from '../features/craftmen/craftmanthunks';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'; 




export default function Form() {
  const [isChecked, setIsChecked] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const dispatch = useDispatch();
   const navigate = useNavigate();
   const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm();

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

   const onSubmit = async (data, e) => {
    try {
       e.preventDefault();
      // Combine startTime and endTime to form a range for available hours
      const availableHours = `${startTime}-${endTime}`;
      const formData = {
        ...data,
        experience: Number(data.experience),
        isAvailable: availableHours,
      };  
      dispatch(registerCraftsman(formData)); 
      toast.success("Registration successful!");
       navigate("/profile");
       reset();
    } catch (error) {
       toast.error("Registration failed. Please try again.");
      console.log(error);
    }
  };

return (
  <div className="m-0 p-0 flex justify-center items-center min-h-screen bg-gradient-to-b from-[#ffcc80] via-[#ffb74d] to-[#ffa726] font-sans">
  <div className="relative w-[90%] max-w-[350px] md:max-w-[450px] lg:max-w-[500px] h-[700px] md:h-[800px] overflow-hidden rounded-[20px] mt-28 mb-12 shadow-[5px_10px_40px_#00000050] bg-white">
    <input
      type="checkbox"
      id="chk"
      className="hidden"
      checked={isChecked}
      onChange={handleToggle}
      aria-hidden="true"
    />

    {/* Craftsman Form */}
    <div
      className={`signup absolute w-full h-full bg-gradient-to-b from-[#3e2723] to-[#ffcc80] transition-transform ${
        isChecked ? 'transform translate-y-[5px]' : ''
      }`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center h-full p-4"
      >
        <label
          htmlFor="chk"
          aria-hidden="true"
          className={`text-white text-[24px] md:text-[30px] font-bold cursor-pointer transition ease-in-out duration-500 transform ${
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
          {...register('skillSet')}
          className="w-full md:w-[80%] h-[45px] bg-[#f9f9f9] mt-5 p-2 rounded-[8px] outline-none shadow-[0_2px_5px_#00000020] transition-colors focus:bg-[#fff] focus:ring focus:ring-[#ffcc80]"
        />
        <input
          type="number"
          name="experience"
          placeholder="Experience"
          required
          {...register('experience')}
          className="w-full md:w-[80%] h-[45px] bg-[#f9f9f9] mt-5 p-2 rounded-[8px] outline-none shadow-[0_2px_5px_#00000020] transition-colors focus:bg-[#fff] focus:ring focus:ring-[#ffcc80]"
        />
        <input
          type="text"
          name="certificate"
          placeholder="Your Certificate"
          required
          className="w-full md:w-[80%] h-[45px] bg-[#f9f9f9] mt-5 p-2 rounded-[8px] outline-none shadow-[0_2px_5px_#00000020] transition-colors focus:bg-[#fff] focus:ring focus:ring-[#ffcc80]"
        />

        {/* Working Hours */}
        <label className="mt-5 text-white font-semibold text-lg md:text-xl">
          Working Hours:
        </label>
        <div className="flex flex-col md:flex-row justify-between w-full md:w-[80%] mt-3 space-y-4 md:space-y-0 md:space-x-4 items-center">
          <div className="relative w-full md:w-[48%]">
            <AiOutlineClockCircle className="absolute top-[12px] left-[8px] text-[#ffcc80] text-[22px]" />
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
              className="w-full pl-10 h-[45px] bg-[#f9f9f9] p-2 rounded-[8px] outline-none shadow-[0_2px_5px_#00000020] transition-colors focus:bg-[#fff] focus:ring focus:ring-[#ffcc80]"
            />
          </div>
          <div className="relative w-full md:w-[48%]">
            <AiOutlineClockCircle className="absolute top-[12px] left-[8px] text-[#ffcc80] text-[22px]" />
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
              className="w-full pl-10 h-[45px] bg-[#f9f9f9] p-2 rounded-[8px] outline-none shadow-[0_2px_5px_#00000020] transition-colors focus:bg-[#fff] focus:ring focus:ring-[#ffcc80]"
            />
          </div>
        </div>
        <button className="w-full md:w-[80%] h-[50px] mt-6 text-white bg-[#3e2723] font-bold rounded-[8px] transition-transform duration-200 ease-in hover:bg-[#5d4037] shadow-[0_5px_15px_#00000040] active:scale-[0.95]"
         disabled={isSubmitting}
        >
           {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>

    {/* Normal User Form */}
    <div
      className={`login absolute w-full h-[460px] bg-[#fafafa] rounded-bl-[40%] rounded-br-[40%] transition-transform duration-[800ms] ease-in-out ${
        isChecked ? 'translate-y-[5px]' : 'translate-y-[-420px]'
      }`}
    >
      <form className="flex flex-col items-center justify-center h-full">
        <button className="w-full md:w-[80%] h-[50px] p-2 mt-60 text-white bg-[#3e2723] font-bold rounded-[8px] transition-transform duration-200 ease-in hover:bg-[#5d4037] shadow-[0_5px_15px_#00000040] active:scale-[0.94]">
          Continue as Normal User
        </button>
        <label
          htmlFor="chk"
          aria-hidden="true"
          className={`mt-40 text-[#3e2723] text-[24px] md:text-[30px] font-semibold transition-transform duration-[800ms] ease-in-out ${
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
