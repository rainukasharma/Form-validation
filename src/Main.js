import { useForm } from "react-hook-form";
import "./Main.css";

function Main({ onNextButtonClick }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
    onNextButtonClick();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <input
            {...register("firstName", {
              required: "First name is required",
              maxLength: { value: 20, message: "Max length is 20 characters" },
            })}
          />
          <span className="error">{errors.firstName?.message}</span>
        </div>
        <div>
          <label>Last Name:</label>
          <input
            {...register("lastName", {
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Only letters allowed",
              },
            })}
          />
          <span className="error">{errors.lastName?.message}</span>
        </div>
        <div>
          <div>
            <label>Email:</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <span className="error">{errors.email?.message}</span>
          </div>
          <label>Age:</label>
          <input
            type="number"
            {...register("age", {
              min: { value: 18, message: "Min age is 18" },
              max: { value: 120, message: "Max age is 120" },
            })}
          />
          <span className="error">{errors.age?.message}</span>
        </div>
        <input type="submit" value="Next" />
      </form>
    </div>
  );
}

export default Main;
