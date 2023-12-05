import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <label htmlFor="">First name:</label>
        <input
          {...register("firstName", { required: "First name is required" })}
        />
        {errors.firstName && (
          <p style={{ color: "red" }}>{errors.firstName.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="">Last name:</label>
        <input
          {...register("lastName", { required: "Last name is required" })}
        />
        {errors.lastName && (
          <p style={{ color: "red" }}>{errors.lastName.message}</p>
        )}
      </div>
      <button>Submit</button>
    </form>
  );
};

export default App;
