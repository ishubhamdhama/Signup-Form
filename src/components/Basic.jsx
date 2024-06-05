import { useForm } from "react-hook-form"

function Basic() {
    const { register, handleSubmit,watch, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(watch("email"));

    return (
        <>
            <form className="text-white focus:text-black" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email: </label>
                <input
                    type="text"
                    id="email"
                    className="text-black"
                    {...register("email", {
                        pattern: {
                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                            message: "Please enter a valid email"
                        }
                    })}
                />
                {errors.email && <span>Please enter valid email</span>}
                <br />
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    id="password"
                    className="text-black"
                    {...register("password")}
                />
                <br />

                <button 
                type="reset" 
                className="border border-white py-2 px-4">Reset</button>
                <br />

                <button 
                type="submit" 
                className="border border-white py-2 px-4">Submit</button>
            </form>
        </>
    );
}

export default Basic;
