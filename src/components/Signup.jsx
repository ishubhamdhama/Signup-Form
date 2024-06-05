import React, { useState, useMemo } from "react";
import {
  TextField,
  Box,
  IconButton,
  InputAdornment,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Signup() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const [visibilty, setVisibility] = useState(false);
  const [visibilty2, setVisibility2] = useState(false);

  const togglePasswordVisibility = useMemo(
    () => () => {
      setVisibility(!visibilty);
    },
    [visibilty]
  );

  const toggleConfirmPasswordVisibility = useMemo(
    () => () => {
      setVisibility2(!visibilty2);
    },
    [visibilty2]
  );

  const password = watch("password");
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-500">
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "90%",
          maxWidth: "600px",
          p: 2,
          bgcolor: "white",
          boxShadow: 3,
          borderRadius: "8px",
          "@media (max-width: 600px)": {
            width: "100%",
            padding: "1rem",
          },
        }}
      >
        <h2 className="text-4xl text-center font-extrabold italic">SignUp</h2>

        {/* //name--------------------------------- */}
        <div className="flex flex-col gap-8 md:flex-row">
          <FormControl sx={{ width: "100%" }}>
            <TextField
              id="firstname"
              label="First Name"
              variant="outlined"
              inputProps={{ maxLength: 16 }}
              {...register("firstName", {
                required: true,
                pattern: /[A-Za-z]/,
              })}
              error={!!errors.firstName}
              helperText={errors.firstName ? "First Name is required" : ""}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#000",
                  },
                  "&:hover fieldset": {
                    borderColor: "#000",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#000",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#000",
                },
              }}
            />
          </FormControl>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              id="lastname"
              label="Last Name"
              variant="outlined"
              inputProps={{ maxLength: 16 }}
              {...register("lastName", { required: true })}
              error={!!errors.lastName}
              helperText={errors.lastName ? "Last Name is required" : ""}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#000",
                  },
                  "&:hover fieldset": {
                    borderColor: "#000",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#000",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#000",
                },
              }}
            />
          </FormControl>
        </div>
        {/* email----------------------------------------------- */}
        <FormControl>
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            autoComplete="username"
            type="email"
            {...register("email", {
              required: "Please enter a valid email",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Please enter a valid email",
              },
            })}
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#000",
                },
                "&:hover fieldset": {
                  borderColor: "#000",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#000",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#000",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#000",
              },
            }}
          />
        </FormControl>
        {/* date and gender--------------------------------- */}
        <div className="flex flex-col gap-8 md:flex-row">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Controller
              name="dateOfBirth"
              control={control}
              defaultValue={null}
              rules={{ required: "Please pick a date" }}
              render={({ field }) => (
                <div className="flex flex-col w-full">
                  <DatePicker
                    label="Date of Birth"
                    {...field}
                    slotProps={{ textField: { variant: "outlined" } }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#000" },
                        "&:hover fieldset": { borderColor: "#000" },
                        "&.Mui-focused fieldset": { borderColor: "#000" },
                      },
                      "& .MuiInputLabel-root": { color: "#000" },
                      "& .MuiInputLabel-root.Mui-focused": { color: "#000" },
                    }}
                  />
                  {errors.dateOfBirth && (
                    <span className="text-red-500">
                      {errors.dateOfBirth.message}
                    </span>
                  )}
                </div>
              )}
            />
          </LocalizationProvider>

          <FormControl
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#000",
                },
                "&:hover fieldset": {
                  borderColor: "#000",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#000",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#000",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#000",
              },
            }}
          >
            <InputLabel id="gender">Gender</InputLabel>
            <Select
              labelId="gender"
              id="demo-simple-select"
              {...register("gender")}
              error={!!errors.gender}
              label="Gender"
              defaultValue="Male"
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="TransGender">TransGender</MenuItem>
            </Select>
          </FormControl>
        </div>
        {/* password----------------------------------- */}
        <FormControl>
          <TextField
            label="Password"
            type={visibilty ? "text" : "password"}
            InputLabelProps={{ shrink: Boolean(watch("password")) }}
            autoComplete="new-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {visibilty ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
          />
        </FormControl>
        {/* confrim password--------------------------------------- */}
        <FormControl required>
          <TextField
            label="Confirm Password"
            type={visibilty2 ? "text" : "password"}
            InputLabelProps={{ shrink: Boolean(watch("confirmPassword")) }}
            autoComplete="new-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={toggleConfirmPasswordVisibility}
                    edge="end"
                  >
                    {visibilty2 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            error={!!errors.confirmPassword}
            helperText={
              errors.confirmPassword ? errors.confirmPassword.message : ""
            }
          />
        </FormControl>

        <button type="submit" className="bg-black text-white rounded-lg py-3">
          Sign Up
        </button>
      </Box>
    </div>
  );
}

export default Signup;
