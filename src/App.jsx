import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  console.log("re-rendered");
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div>
        <input
          {...register("firstName", { required: "First name is required" })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <input
          {...register("lastName", { required: "Last name is required" })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};

export default App;
